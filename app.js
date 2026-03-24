const app = {
  activeExam: null,
  deferredPrompt: null,
  score: 0,
  timer: null,
  timeLeft: 0,
  progress: JSON.parse(localStorage.getItem('btu_progress')) || {},
  soundEnabled: JSON.parse(localStorage.getItem('btu_sound')) !== false,
  achievements: JSON.parse(localStorage.getItem('btu_achievements')) || [],
  theme: localStorage.getItem('btu_theme') || 'dark',
  leaderboard: JSON.parse(localStorage.getItem('btu_leaderboard')) || {}, 
  audioCtx: null,

  init() {
    this.applyTheme();
    this.renderHome();
    this.setupPWA();
    this.initConfetti();
    this.initAudio();
    this.setupAchievementToast();
    this.renderBadges();
  },

  // --- Theme Logic ---
  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'blueprint' : 'dark';
    localStorage.setItem('btu_theme', this.theme);
    this.applyTheme();
    this.playSound('click');
  },

  applyTheme() {
    document.body.className = this.theme === 'blueprint' ? 'theme-blueprint' : '';
    const btn = document.getElementById('btn-theme');
    if (btn) btn.innerText = this.theme === 'blueprint' ? '📐' : '🎨';
  },

  // --- Leaderboard Logic ---
  saveScore(gameType, score) {
    if (!this.leaderboard[this.activeExam.id]) this.leaderboard[this.activeExam.id] = {};
    if (!this.leaderboard[this.activeExam.id][gameType]) this.leaderboard[this.activeExam.id][gameType] = [];
    
    this.leaderboard[this.activeExam.id][gameType].push({
      score: score,
      date: new Date().toLocaleDateString('tr-TR')
    });
    
    this.leaderboard[this.activeExam.id][gameType].sort((a,b) => b.score - a.score);
    this.leaderboard[this.activeExam.id][gameType] = this.leaderboard[this.activeExam.id][gameType].slice(0, 5);
    
    localStorage.setItem('btu_leaderboard', JSON.stringify(this.leaderboard));
    this.renderLeaderboard();
  },

  renderLeaderboard() {
    const container = document.getElementById('leaderboard-content');
    if (!this.activeExam || !container) return;
    
    const data = this.leaderboard[this.activeExam.id] || {};
    let html = '';
    
    for (let game in data) {
      const gameNames = { test: 'Klasik Test', ta: 'Zamanla Yarış', tf: 'Doğru/Yanlış' };
      html += `<div style="margin-bottom:1.5rem">
        <h4 style="color:var(--neon-blue); font-size:0.9rem; margin-bottom:0.5rem">${gameNames[game] || game}</h4>
        <table class="leaderboard-table">
          ${data[game].map((entry, i) => `
            <tr>
              <td class="rank">#${i+1}</td>
              <td style="font-weight:700">${entry.score} Puan</td>
              <td style="color:var(--text-dim); font-size:0.8rem; text-align:right">${entry.date}</td>
            </tr>
          `).join('')}
        </table>
      </div>`;
    }
    container.innerHTML = html || '<p style="color:var(--text-dim)">Henüz skor kaydedilmemiş.</p>';
  },

  // --- Print Logic ---
  printNotes() {
    this.playSound('click');
    const area = document.getElementById('print-area');
    if (!this.activeExam || !area) return;

    let html = `
      <div class="print-header">
        <h1>BTU DERS ÇALIŞMA NOTLARI</h1>
        <h3>${this.activeExam.title.toUpperCase()}</h3>
        <p>Bilişim Teknolojileri Öğretmeni Fatih PATIR tarafından hazırlanmıştır.</p>
      </div>
    `;

    this.activeExam.questions.forEach((item, i) => {
      html += `
        <div class="print-card">
          <div class="print-q">SORU ${i+1}: ${item.q}</div>
          <div class="print-a">CEVAP: ${item.a}</div>
        </div>
      `;
    });

    html += `
      <div style="margin-top: 3rem; border-top: 1px solid #000; padding-top: 1rem; font-size: 0.8rem; text-align: center;">
        Ek Bilgi Kartları: ${this.activeExam.flashcards.map(f => f.front).join(', ')}
      </div>
    `;

    area.innerHTML = html;
    window.print();
  },

  printOpenEnded() {
    this.playSound('click');
    const a = document.getElementById('print-area');
    if (!this.activeExam || !a) return;
    
    let html = `<div style="text-align:center"><h1 style="font-family:sans-serif">${this.activeExam.title} - Açık Uçlu Sınav Soruları</h1><p>Hazırlayan: Fatih PATIR</p></div><hr>`;
    if(this.activeExam.openEndedQuestions) {
      html += this.activeExam.openEndedQuestions.map((q, i) => `
        <div style="margin-bottom:25px; padding:15px; border-bottom:1px solid #eee; font-family:sans-serif;">
          <strong style="font-size:13pt;">Soru ${i+1}: ${q.q}</strong><br><br>
          <div style="font-size:12pt; color:#222;"><strong>Cevap:</strong> ${q.a}</div>
        </div>
      `).join('');
    }
    a.innerHTML = html;
    window.print();
  },

  // --- Achievement Logic ---
  saveProgress(id, type) {
    if (!this.progress[id]) this.progress[id] = {};
    this.progress[id][type] = true;
    localStorage.setItem('btu_progress', JSON.stringify(this.progress));
    this.renderHome();
  },

  checkAchievement(id, condition) {
    if (this.achievements.includes(id)) return;
    if (condition) {
      this.achievements.push(id);
      localStorage.setItem('btu_achievements', JSON.stringify(this.achievements));
      this.showAchievementToast(id);
      this.renderBadges();
      this.playSound('win');
    }
  },

  showAchievementToast(id) {
    const toast = document.getElementById('achievement-toast');
    const badge = this.BADGES.find(b => b.id === id);
    if (!toast || !badge) return;
    toast.innerHTML = `<i>${badge.icon}</i> <div><b>Rozet Kazandın!</b><br>${badge.name}</div>`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  },

  BADGES: [
    { id: 'first_study', name: 'İlk Adım', icon: '🎯' },
    { id: 'all_study', name: 'Bilgi Kurdu', icon: '📖' },
    { id: 'speed_demon', name: 'Hızlı Parmak', icon: '⚡' },
    { id: 'perfect_test', name: 'Hatasız Sınav', icon: '🏆' },
    { id: 'word_master', name: 'Kelime Ustası', icon: '🧩' },
    { id: 'visionary', name: 'Vizyoner', icon: '🧊' }
  ],

  renderBadges() {
    const container = document.getElementById('badge-container');
    if (!container) return;
    container.innerHTML = this.BADGES.map(b => `
      <div class="badge ${this.achievements.includes(b.id) ? 'earned' : ''}">
        <i>${b.icon}</i> ${b.name}
      </div>
    `).join('');
  },

  setupAchievementToast() {
    if (!document.getElementById('achievement-toast')) {
      const toast = document.createElement('div');
      toast.id = 'achievement-toast';
      document.body.appendChild(toast);
    }
  },

  // --- Audio ---
  initAudio() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.updateSoundBtn();
  },

  playTone(freq, type, duration, vol = 0.1) {
    if (!this.soundEnabled || !this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);
    osc.connect(gain); gain.connect(this.audioCtx.destination);
    osc.start(); osc.stop(this.audioCtx.currentTime + duration);
  },

  playSound(type) {
    switch(type) {
      case 'click': this.playTone(800, 'sine', 0.1, 0.05); break;
      case 'success': this.playTone(600, 'sine', 0.1); setTimeout(() => this.playTone(900, 'sine', 0.2), 100); break;
      case 'fail': this.playTone(300, 'sawtooth', 0.2, 0.05); setTimeout(() => this.playTone(200, 'sawtooth', 0.3, 0.05), 150); break;
      case 'win': [440, 554, 659, 880].forEach((f, i) => setTimeout(() => this.playTone(f, 'sine', 0.4, 0.1), i * 150)); break;
    }
  },

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('btu_sound', this.soundEnabled);
    this.updateSoundBtn(); if (this.soundEnabled) this.playSound('click');
  },

  updateSoundBtn() {
    const btn = document.getElementById('btn-sound');
    if (btn) btn.innerText = this.soundEnabled ? '🔊' : '🔇';
  },

  // --- UI ---
  showView(viewId) {
    this.playSound('click');
    clearInterval(this.timer);
    document.getElementById('stat-timer').innerText = '';
    document.getElementById('stat-score').innerText = '';
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
  },

  showHome() { this.showView('view-home'); },
  showSelection(exam) {
    this.activeExam = exam || this.activeExam;
    document.getElementById('selection-title').innerText = this.activeExam.title;
    const subTitle = document.querySelector('#view-selection header p');
    if (subTitle) {
      subTitle.innerHTML = `<span style="color:var(--primary); font-weight:700;">${this.getSubjectFor(this.activeExam.id)}</span><br>Çalışma ve Oyun Modları`;
    }
    this.renderLeaderboard();
    this.showView('view-selection');
  },

  renderHome() {
    const grid = document.getElementById('exam-grid');
    grid.innerHTML = '';
    const allCards = window.EXAM_DATA.flatMap(e => e.flashcards);
    const fact = allCards[Math.floor(Math.random()*allCards.length)];
    grid.innerHTML = `<div class="q-card glow-card" style="grid-column: 1 / -1; margin-bottom: 2rem; border-color: var(--primary);">
        <div class="q-num">💡 GÜNÜN BİLGİSİ</div><p class="q-text">${fact.front}</p><p class="a-text">${fact.back}</p></div>`;
    window.EXAM_DATA.forEach(exam => {
      const isDone = this.progress[exam.id]?.study;
      const card = document.createElement('div');
      card.className = 'card glow-card';
      card.innerHTML = `${isDone ? '<span class="progress-badge">TAMAMLANDI</span>' : ''}
        <div class="card-icon">${this.getIconFor(exam.id)}</div>
        <h3 class="card-title">${exam.title}</h3>
        <p class="card-desc" style="color: var(--primary); font-weight: 600; margin-bottom: 0.5rem;">${this.getSubjectFor(exam.id)}</p>
        <p class="card-desc">20 Bilgi Kartı, Oyunlar ve Testler.</p>`;
      card.onclick = () => this.showSelection(exam);
      grid.appendChild(card);
    });
  },

  getIconFor(id) {
    const icons = { 'teknik-resim': '📐', 'tinkercad': '🧊', 'fusion-intro': '⚙️', 'fusion-advanced': '🚀' };
    return icons[id] || '📝';
  },

  getSubjectFor(id) {
    const subjects = { 
      'teknik-resim': 'Temel Teknik Resim', 
      'tinkercad': 'İz Düşüm ve Tinkercad', 
      'fusion-intro': 'Fusion 360 Giriş', 
      'fusion-advanced': 'Fusion 360 İleri' 
    };
    return subjects[id] || '';
  },

  handleSearch(query) {
    const container = document.getElementById('search-results');
    const grid = document.getElementById('search-grid');
    if (!query || query.length < 2) { container.style.display = 'none'; return; }
    const results = [];
    window.EXAM_DATA.forEach(exam => {
      exam.flashcards.forEach(card => {
        if (card.front.toLowerCase().includes(query.toLowerCase()) || card.back.toLowerCase().includes(query.toLowerCase())) {
          results.push({ ...card, category: exam.title });
        }
      });
    });
    if (results.length > 0) {
      container.style.display = 'block';
      grid.innerHTML = results.slice(0, 6).map(r => `<div class="q-card" style="margin-bottom:0"><div class="q-num">${r.category}</div><p class="q-text">${r.front}</p><p class="a-text">${r.back}</p></div>`).join('');
    } else { container.style.display = 'none'; }
  },

  // --- Game Modes ---
  startSummary() {
    const container = document.getElementById('content-container');
    container.innerHTML = `
      <div class="game-container" style="display:block; text-align:left;">
        <h2 style="margin-bottom:2rem; text-align:center;">Hızlı Konu Özeti</h2>
        <div class="q-card" style="border-left: 5px solid var(--primary); padding: 2rem; background:rgba(255,255,255,0.02);">
          <div style="font-size:1.1rem; line-height:1.8; color:var(--text-main);">
            ${this.activeExam.summary}
          </div>
        </div>
        <button class="btn" style="margin-top:2rem; width:100%;" onclick="app.showSelection()">Anladım, Testlere Hazırım!</button>
      </div>
    `;
    this.showView('view-content');
  },

  startOpenEnded() {
    this.playSound('click');
    const c = document.getElementById('content-container');
    const qs = this.activeExam.openEndedQuestions || [];
    
    if(qs.length === 0) {
      c.innerHTML = `<div class="game-container"><h3 style="text-align:center;">Bu ünite için açık uçlu soru bulunamadı.</h3></div>`;
      return;
    }

    c.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2.5rem; flex-wrap:wrap;">
          <h2 style="color:var(--accent); margin:0;">${this.activeExam.title} / Açık Uçlu Sınav</h2>
          <button class="btn btn-secondary" style="padding:0.7rem 1.2rem; font-size:0.7rem;" onclick="app.printOpenEnded()">🖨️ PDF İNDİR</button>
      </div>
      ${qs.map((q, i) => `<div class="q-card" style="margin-bottom:2rem;"><div class="q-num">SORU ${i+1}</div><p class="q-text" style="font-weight:bold; font-size:1.1rem; margin-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">${q.q}</p><p class="a-text" style="color:var(--accent); line-height:1.6; font-size:1.05rem;"><strong style="color:var(--text); font-weight:bold;">Cevap:</strong> ${q.a}</p></div>`).join('')}
    `;
    this.saveProgress(this.activeExam.id, 'openEnded');
    this.showView('view-content');
  },

  startStudy() {
    const container = document.getElementById('content-container');
    container.innerHTML = `<h2>${this.activeExam.title}</h2><div id="study-list"></div>`;
    this.activeExam.questions.forEach((item, index) => {
      document.getElementById('study-list').innerHTML += `<div class="q-card"><div class="q-num">SORU ${index + 1}</div><p class="q-text">${item.q}</p><p class="a-text">${item.a}</p></div>`;
    });
    this.saveProgress(this.activeExam.id, 'study');
    this.checkAchievement('first_study', true);
    this.showView('view-content');
  },

  startFlashcards() {
    const container = document.getElementById('content-container');
    let html = `<h2>Bilgi Kartları</h2><div class="fc-grid">`;
    this.activeExam.flashcards.forEach(card => {
      html += `<div class="fc-card" onclick="app.playSound('click'); this.classList.toggle('flipped')"><div class="fc-inner"><div class="fc-front"><span>${card.front}</span></div><div class="fc-back"><span>${card.back}</span></div></div></div>`;
    });
    container.innerHTML = html + `</div>`;
    this.showView('view-content');
  },

  startTFGame() { this.score = 0; this.renderTFQuestion(); this.showView('view-content'); },
  renderTFQuestion() {
    const container = document.getElementById('content-container');
    const isCorrect = Math.random() > 0.5;
    const card = this.activeExam.flashcards[Math.floor(Math.random()*this.activeExam.flashcards.length)];
    let displayBack = card.back;
    if (!isCorrect) {
      let other; do { other = this.activeExam.flashcards[Math.floor(Math.random()*this.activeExam.flashcards.length)]; } while(other === card);
      displayBack = other.back;
    }
    container.innerHTML = `<div class="game-container"><h3>Doğru mu Yanlış mı?</h3><div class="tf-card"><div><p style="color:var(--neon-blue); font-weight:700;">${card.front}</p><p style="margin-top:1rem;">${displayBack}</p></div></div><div class="tf-btns"><button class="btn btn-true" onclick="app.checkTF(true, ${isCorrect})">DOĞRU</button><button class="btn btn-false" onclick="app.checkTF(false, ${isCorrect})">YANLIŞ</button></div></div>`;
    document.getElementById('stat-score').innerText = `Puan: ${this.score}`;
  },
  checkTF(userChoice, actual) {
    if (userChoice === actual) { this.playSound('success'); this.score += 10; this.renderTFQuestion(); }
    else { this.failFlash(); this.playSound('fail'); this.saveScore('tf', this.score); alert(`Hata! Skor: ${this.score}`); this.showSelection(); }
  },

  startWordGame() {
    const card = this.activeExam.flashcards[Math.floor(Math.random()*this.activeExam.flashcards.length)];
    this.targetWord = card.front.toUpperCase(); this.description = card.back;
    this.guessedLetters = []; this.renderWordGame(); this.showView('view-content');
  },
  renderWordGame() {
    const container = document.getElementById('content-container');
    const display = this.targetWord.split('').map(l => (l === ' ' || l === '-' || this.guessedLetters.includes(l)) ? l : '_').join('');
    container.innerHTML = `<div class="game-container"><h3>Kelime Tahmin</h3><p style="color:var(--text-dim); text-align:center; max-width:400px; margin-bottom:2rem;">"${this.description}"</p><div class="word-display">${display}</div><div class="keyboard" id="kb"></div></div>`;
    const kb = document.getElementById('kb');
    "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split('').forEach(l => {
      const key = document.createElement('div'); key.className = `key ${this.guessedLetters.includes(l) ? 'used' : ''}`;
      key.innerText = l; key.onclick = () => { this.playSound('click'); this.handleGuess(l); }; kb.appendChild(key);
    });
    if (!display.includes('_')) { this.playSound('win'); this.triggerConfetti(); this.checkAchievement('word_master', true); setTimeout(() => { alert("Harika!"); this.startWordGame(); }, 500); }
  },
  handleGuess(letter) {
    if (this.guessedLetters.includes(letter)) return;
    this.guessedLetters.push(letter);
    if (!this.targetWord.includes(letter)) this.playSound('fail'); else this.playSound('success');
    this.renderWordGame();
  },

  startTestMode() { this.score = 0; this.testQuestions = [...this.activeExam.flashcards].sort(() => 0.5 - Math.random()).slice(0, 10); this.currentTestIdx = 0; this.renderTestQuestion(); this.showView('view-content'); },
  renderTestQuestion() {
    const q = this.testQuestions[this.currentTestIdx];
    const options = [q.back];
    const otherBacks = this.activeExam.flashcards.filter(f => f.back !== q.back).map(f => f.back);
    while(options.length < 4) {
      const rand = otherBacks[Math.floor(Math.random()*otherBacks.length)];
      if (!options.includes(rand)) options.push(rand);
    }
    options.sort(() => 0.5 - Math.random());
    document.getElementById('content-container').innerHTML = `<div class="game-container"><h3>Soru ${this.currentTestIdx + 1}/10</h3><p style="color:var(--neon-blue); font-size:1.2rem; text-align:center; margin-bottom:2rem;">${q.front}</p><div class="test-options">${options.map((opt, i) => `<button class="option-btn" onclick="app.checkTestAnswer(this, '${opt}', '${q.back}')"><span class="option-label">${String.fromCharCode(65+i)}</span> ${opt}</button>`).join('')}</div></div>`;
    document.getElementById('stat-score').innerText = `Puan: ${this.score}`;
  },
  checkTestAnswer(btn, chosen, correct) {
    if (chosen === correct) { this.playSound('success'); this.score += 10; btn.classList.add('correct'); setTimeout(() => { if (++this.currentTestIdx < 10) this.renderTestQuestion(); else this.finishTest(); }, 1000); }
    else { this.playSound('fail'); btn.classList.add('wrong'); document.querySelectorAll('.option-btn').forEach(b => { if(b.innerText.includes(correct)) b.classList.add('correct'); }); setTimeout(() => { if (++this.currentTestIdx < 10) this.renderTestQuestion(); else this.finishTest(); }, 1500); }
  },
  finishTest() { this.playSound('win'); this.triggerConfetti(); this.saveScore('test', this.score); this.checkAchievement('perfect_test', this.score === 100); alert(`Bitti! Puan: ${this.score}/100`); this.showSelection(); },

  startTimeAttack() { this.score = 0; this.timeLeft = 60; this.showView('view-content'); this.renderTAReady(); },
  renderTAReady() { document.getElementById('content-container').innerHTML = `<div class="game-container"><h3>Zamanla Yarış</h3><p>60 saniyede kaç Doğru/Yanlış yapabilirsin?</p><button class="btn" style="margin-top:2rem" onclick="app.startTA()">BAŞLA!</button></div>`; },
  startTA() { 
    this.renderTFQuestion(); 
    this.timer = setInterval(() => { this.timeLeft--; document.getElementById('stat-timer').innerText = `${this.timeLeft}s`; if (this.timeLeft <= 0) { clearInterval(this.timer); this.finishTA(); } }, 1000); 
  },
  finishTA() { this.playSound('win'); this.triggerConfetti(); this.saveScore('ta', this.score); this.checkAchievement('speed_demon', this.score >= 100); alert(`Süre Bitti! Skor: ${this.score}`); this.showSelection(); },

  // --- Legendary: 3D Systems ---
  SHAPES: [
    { name: 'Küp (Temel)', html: '<div class="cube-face face-front">ÖN</div><div class="cube-face face-back"></div><div class="cube-face face-right">SAĞ</div><div class="cube-face face-left"></div><div class="cube-face face-top">ÜST</div><div class="cube-face face-bottom"></div>' },
    { name: 'Dikdörtgen Prizma', html: '<div class="cube-face face-front" style="width:140px; left:30px">ÖN</div><div class="cube-face face-back" style="width:140px; left:30px"></div><div class="cube-face face-right"></div><div class="cube-face face-left"></div><div class="cube-face face-top" style="width:140px; left:30px">ÜST</div><div class="cube-face face-bottom" style="width:140px; left:30px"></div>' },
    { name: 'L-Blok (Teknik)', html: '<div class="cube-face face-front" style="height:40px; top:80px">ÖN</div><div class="cube-face face-top" style="width:40px; left:80px; height:100px; top:50px">ÜST</div><div class="cube-face face-right" style="width:40px; left:80px">SAĞ</div><div class="cube-face face-left"></div><div class="cube-face face-bottom"></div>' },
    { name: 'U-Profil', html: '<div class="cube-face face-front" style="background:none; border:none"><div style="position:absolute; bottom:0; width:100%; height:30px; border:2px solid #fff"></div><div style="position:absolute; left:0; width:30px; height:100%; border:2px solid #fff"></div><div style="position:absolute; right:0; width:30px; height:100%; border:2px solid #fff"></div></div><div class="cube-face face-top">ÜST</div><div class="cube-face face-right">SAĞ</div>' },
    { name: 'Kademe Blok (Step)', html: '<div class="cube-face face-front" style="background:linear-gradient(to top, var(--neon-blue) 50%, transparent 50%); border-bottom:2px solid #fff">ÖN</div><div class="cube-face face-top" style="transform: rotateX(90deg) translateZ(50px) scaleY(0.5); top:25px">ÜST</div><div class="cube-face face-right">SAĞ</div>' },
    { name: 'Altıgen Somun (Nut)', html: '<div class="cube-face face-front" style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);">SOMUN</div><div class="cube-face face-top" style="height:40px; top:80px"></div><div class="cube-face face-right" style="height:40px; top:80px"></div>' },
    { name: 'Vida (Screw Thread)', html: '<div class="cube-face face-front" style="background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px);">VİDA</div><div class="cube-face face-top" style="border-radius:50%"></div><div class="cube-face face-right" style="background: repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px);"></div>' }
  ],

  start3DTest() {
    this.score = 0;
    this.render3DTest();
    this.showView('view-content');
  },
  render3DTest() {
    clearInterval(this.cubeTimer);
    const isFrontView = Math.random() > 0.5;
    const shape = this.SHAPES[Math.floor(Math.random()*this.SHAPES.length)];
    const container = document.getElementById('content-container');
    
    const correctColor = isFrontView ? '#00f2ff' : '#fbbf24';
    const wrongColor = isFrontView ? '#fbbf24' : '#00f2ff';
    const correctLabel = isFrontView ? 'ÖN' : 'ÜST';
    const wrongLabel = isFrontView ? 'ÜST' : 'ÖN';
    const isACorrect = Math.random() > 0.5;

    container.innerHTML = `
      <div class="game-container">
        <h3>Görünüş Testi</h3>
        <p style="text-align:center">Parçanın <b>${isFrontView ? 'ÖN (Mavi)' : 'ÜST (Sarı)'}</b> görünüşü hangisidir?</p>
        
        <div class="scene-3d">
          <div class="cube-3d" id="test-cube">${shape.html}</div>
        </div>

        <div class="view-options">
          <div class="view-choice" onclick="app.check3DView(${isACorrect})">
            <div class="view-box" style="background:${isACorrect ? correctColor : wrongColor}">${isACorrect ? correctLabel : wrongLabel}</div>
            <b>Çizim A</b>
          </div>
          <div class="view-choice" onclick="app.check3DView(${!isACorrect})">
            <div class="view-box" style="background:${isACorrect ? wrongColor : correctColor}">${isACorrect ? wrongLabel : correctLabel}</div>
            <b>Çizim B</b>
          </div>
        </div>
      </div>
    `;
    this.animateCube();
  },
  animateCube() {
    let ry = 0; let rx = -20;
    const cube = document.getElementById('test-cube');
    if (!cube) return;
    this.cubeTimer = setInterval(() => {
      ry += 1;
      if (cube) cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }, 30);
  },
  check3DView(correct) {
    if (correct) { this.playSound('success'); this.score += 20; this.render3DTest(); }
    else { this.failFlash(); this.playSound('fail'); clearInterval(this.cubeTimer); this.checkAchievement('visionary', this.score > 80); alert(`Hatalı Seçim! Skorun: ${this.score}`); this.showSelection(); }
  },

  currentShapeIdx: 0,
  start3DViewer() {
    const shape = this.SHAPES[this.currentShapeIdx];
    const container = document.getElementById('content-container');
    container.innerHTML = `
      <div class="game-container">
        <h3>3D Galeri</h3>
        <p>Parçayı farenizle/parmağınızla çevirin.</p>
        <div class="scene-3d" id="viewer-container" style="cursor:grab">
          <div class="cube-3d" id="gallery-cube">${shape.html.replace(/ÖN|ÜST|SAĞ/g, '')}</div>
        </div>
        <div style="display:flex; gap:1rem; margin-top:2rem">
          <button class="btn btn-secondary" onclick="app.prevShape()">←</button>
          <div style="font-family:'Orbitron'; padding:0.8rem; background:var(--bg-card); border-radius:1rem; flex:1; text-align:center">${shape.name}</div>
          <button class="btn btn-secondary" onclick="app.nextShape()">→</button>
        </div>
      </div>
    `;
    this.setup3DDrag();
    this.showView('view-content');
  },
  prevShape() { this.currentShapeIdx = (this.currentShapeIdx - 1 + this.SHAPES.length) % this.SHAPES.length; this.start3DViewer(); },
  nextShape() { this.currentShapeIdx = (this.currentShapeIdx + 1) % this.SHAPES.length; this.start3DViewer(); },
  setup3DDrag() {
    const cube = document.getElementById('gallery-cube');
    let isDown = false; let startX, startY; let rx = -20, ry = 20;
    const move = (e) => {
      if(!isDown) return;
      const x = (e.pageX || e.touches[0].pageX) - startX;
      const y = (e.pageY || e.touches[0].pageY) - startY;
      cube.style.transform = `rotateX(${rx - y/2}deg) rotateY(${ry + x/2}deg)`;
    };
    document.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX; startY = e.pageY; });
    document.addEventListener('mouseup', () => { isDown = false; });
    document.addEventListener('mousemove', move);
    document.addEventListener('touchstart', (e) => { isDown = true; startX = e.touches[0].pageX; startY = e.touches[0].pageY; });
    document.addEventListener('touchend', () => { isDown = false; });
    document.addEventListener('touchmove', move);
  },

  failFlash() { const flash = document.createElement('div'); flash.className = 'fail-flash'; document.body.appendChild(flash); setTimeout(() => flash.remove(), 300); },
  initConfetti() { this.confettiCanvas = document.getElementById('confetti-canvas'); this.ctx = this.confettiCanvas.getContext('2d'); this.particles = []; },
  triggerConfetti() { this.confettiCanvas.width = window.innerWidth; this.confettiCanvas.height = window.innerHeight; for(let i=0; i<100; i++) this.particles.push({ x: Math.random()*innerWidth, y: -10, r: Math.random()*6+2, d: Math.random()*10, color: `hsl(${Math.random()*360}, 100%, 50%)`, tilt: Math.random()*10 }); this.drawConfetti(); },
  drawConfetti() { this.ctx.clearRect(0, 0, innerWidth, innerHeight); this.particles.forEach((p, i) => { p.y += Math.cos(p.d) + 2; p.tilt += 0.1; this.ctx.beginPath(); this.ctx.lineWidth = p.r; this.ctx.strokeStyle = p.color; this.ctx.moveTo(p.x + p.tilt + p.r/2, p.y); this.ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/2); this.ctx.stroke(); if (p.y > innerHeight) this.particles.splice(i, 1); }); if (this.particles.length > 0) requestAnimationFrame(() => this.drawConfetti()); },
  showModal(id) { this.playSound('click'); document.getElementById(id).classList.add('active'); },
  closeModals() { this.playSound('click'); document.querySelectorAll('.modal').forEach(m => m.classList.remove('active')); },
  setupPWA() { window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); this.deferredPrompt = e; document.getElementById('btn-install').style.display = 'flex'; }); },
  async installApp() { if (!this.deferredPrompt) return; this.deferredPrompt.prompt(); this.deferredPrompt = null; document.getElementById('btn-install').style.display = 'none'; }
};
document.addEventListener('DOMContentLoaded', () => app.init());
