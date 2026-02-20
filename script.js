// Kral, CSV'den gelen tüm satırları buraya tırnak içine almadan, 
// olduğu gibi kopyalayıp yapıştırabilirsin. Ben senin için hepsini hazırladım:
const rawData = `Bilgisayar destekli tasarım anlamına gelen kısaltma nedir?,CAD (Computer-Aided Design)
Tasarlanan ürünlerin bilgisayar kontrolündeki makinelerle üretilmesi sürecine ne ad verilir?,CAM (Computer-Aided Manufacturing)
Mühendislik analizleri ve simülasyonları için kullanılan bilgisayar destekli sistem hangisidir?,CAE (Computer-Aided Engineering)
Fusion 360 arayüzünde yapılan tüm işlemlerin geçmişini gösteren bölüme ne ad verilir?,Zaman Çizelgesi (Timeline)
Modelin görünüm açısını hızlıca değiştirmek için kullanılan küp şeklindeki araç nedir?,Görünüm Küpü (ViewCube)
Çizimdeki tüm nesneleri listeleyen ürün ağacı bölümü hangisidir?,Browser (Tarayıcı)
İki boyutlu taslağa kalınlık vererek 3D katı oluşturma komutu nedir?,Extrude (Hacim Verme)
Bir taslağı eksen etrafında döndürerek katı oluşturma komutu hangisidir?,Revolve (Döndürerek Katı Oluşturma)
Modelin keskin köşelerini dairesel bir kavisle yumuşatma işlemine ne ad verilir?,Fillet (Yuvarlatma)
Modelin köşelerine eğik düzlem oluşturma komutu nedir?,Chamfer (Pah Kırma)
Bir nesnenin simetrik kopyasını oluşturan komut hangisidir?,Mirror (Aynalama)
Seçili bir dosyayı mevcut tasarımın içine eklemek için hangi komut kullanılır?,Insert into Current Design
Joint komutunda 'Revolute' tipi bağlantı ne tür bir hareket sağlar?,Dönme hareketi
3D yazıcılarda filamentin içinden geçtiği ve eridiği sıcak uca ne ad verilir?,Nozzle (Meme)
Baskının ilk katmanının düzgün olması için yapılan tabla ayarı işlemine ne denir?,Kalibrasyon
Karmaşık bir montajda sadece tek bir bileşen üzerinde çalışmak için kullanılan özellik nedir?,Isolate (Yalıtma)
Sketch ortamında iki çizginin birbirine göre dik durmasını sağlayan kısıtlama nedir?,Perpendicular (Diklik)
İki dairesel objenin merkezlerini aynı noktaya çakıştıran kısıtlama hangisidir?,Concentric (Eş Merkezlilik)
Spiral veya yay şeklinde katı modeller oluşturmak için hangi hazır obje kullanılır?,Coil (Helezon)
3D yazıcıda baskı kalitesini etkileyen en temel ayar nedir?,Katman Yüksekliği (Layer Height)
Montajdaki parçaların birbirinin içine geçip geçmediğini kontrol eden araç hangisidir?,Interference (Çakışma Analizi)
Seçilen bir profili bir yol boyunca takip ettirerek katı oluşturma komutu nedir?,Sweep (Süpürerek Hacim Verme)
Taslakta bir objeyi merkezinden orantılı olarak büyütüp küçülten araç hangisidir?,Scale (Ölçekleme)
3D baskı hazırlığında modelin içi boş basılmak isteniyorsa dolgu oranı kaç yapılmalıdır?,%0 (Sıfır)
Fusion 360'ta bulutta saklanan projelere erişmek için kullanılan panel hangisidir?,Data Panel
Taslak çizimine başlamak için kullanılan ilk komut nedir?,Create Sketch
Çizgi oluşturma komutu nedir?,Line
Daire oluşturma komutu nedir?,Circle
Dikdörtgen oluşturma komutu nedir?,Rectangle
Yay oluşturma komutu nedir?,Arc
Çizgileri veya objeleri kesip budayan araç hangisidir?,Trim
Nesneleri belirli bir mesafede paralel kopyalayan komut hangisidir?,Offset
İki boyutlu taslakta köşeleri yuvarlatan komut nedir?,Sketch Fillet
Çizimi belirli bir ölçüye sabitleyen araç nedir?,Sketch Dimension
İki çizginin birbirine paralel olmasını sağlayan kısıtlama?,Parallel
İki çizginin aynı doğrultuda olmasını sağlayan kısıtlama?,Collinear
Bir çizginin tam ortasına objeyi sabitleyen kısıtlama?,Midpoint
Bir objeyi yatay veya dikey konuma getiren kısıtlama?,Horizontal/Vertical
İki dairenin veya yayın birbirine teğet olmasını sağlayan kısıtlama?,Tangent
Dairesel çoğaltma komutu hangisidir?,Circular Pattern
Doğrusal çoğaltma komutu hangisidir?,Rectangular Pattern
Katı modelin içine boşaltan (kabuk oluşturan) komut nedir?,Shell
Model üzerine yazı yazmak için kullanılan araç nedir?,Text
Katı modelin yüzeyine delik açmak için kullanılan komut?,Hole
Farklı iki kesit arasında geçiş yaparak katı model oluşturan komut?,Loft
Bir yüzeyi veya kenarı iterek ya da çekerek form veren komut?,Press Pull
Montajda parçaları birbirine bağlayan temel komut nedir?,Joint
Bileşenleri geçici olarak birbirinden ayıran görünüm?,Exploded View (Patlatılmış Görünüm)
Hareketli montajları simüle etmek için kullanılan özellik?,Motion Study
3D yazıcı için dosya dışa aktarma formatı hangisidir?,STL veya 3MF
Dilimleme yazılımına ne ad verilir?,Slicer (Dilimleyici)
Katman katman üretim teknolojisinin genel adı nedir?,Eklemeli İmalat (Additive Manufacturing)
En yaygın kullanılan 3D yazıcı filament tipi nedir?,PLA
ABS filament baskısında tablanın sıcak olması gerekir mi?,Evet (Isıtılmış Tabla Şarttır)
Destek yapılarına ne ad verilir?,Support
Baskının tablaya daha iyi yapışması için oluşturulan ek yüzey?,Brim
3D yazıcının koordinat sistemini tanımlayan eksenler?,X, Y, Z
G kodu (G-Code) nedir?,Yazıcıya giden hareket komutları listesi
Fasetli (üçgen yüzeyli) dosya yapısı nedir?,Mesh
Baskı hızı birimi genellikle nedir?,mm/s
İç dolgu deseni neyi belirler?,Dayanıklılık ve Baskı Süresi
Tasarımdaki hataları kontrol eden simülasyon türü?,Stress Analysis (Gerilme Analizi)
Modelin ağırlık ve hacim bilgilerini veren bölüm?,Properties (Özellikler)
Çizim düzlemi (Plane) ne işe yarar?,Çizimin yapılacağı yüzeyi belirler
Fusion 360 hangi firmanın yazılımıdır?,Autodesk`;

// Veriyi Satır Satır Parçala
const items = rawData.split('\n')
    .filter(line => line.trim() !== "")
    .map(line => {
        const index = line.indexOf(',');
        const q = line.substring(0, index).trim();
        const a = line.substring(index + 1).trim();
        return [q, a];
    });

let currentIndex = 0;
let deferredPrompt;
const content = document.getElementById('content');

// --- TEMA VE NAVİGASYON FONKSİYONLARI ---
function setTheme(t) { document.body.className = t; document.getElementById('themeModal').style.display = 'none'; }

function loadCard() {
    const [q, a] = items[currentIndex];
    content.innerHTML = `
        <div class="card-container" onclick="this.querySelector('.card').classList.toggle('flipped')">
            <div class="card">
                <div class="card-front"><p>${q}</p></div>
                <div class="card-back"><p>${a}</p></div>
            </div>
        </div>
        <div class="action-btns">
            <button class="big-btn audio-btn" onclick="speak('${q}. Cevap: ${a}')"><i class="fas fa-volume-up"></i> Oku</button>
            <button class="big-btn stop-btn" onclick="window.speechSynthesis.cancel()"><i class="fas fa-stop"></i> Dur</button>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <button class="icon-btn" onclick="changeCard(-1)"><i class="fas fa-chevron-left"></i></button>
            <span style="font-weight:bold">${currentIndex + 1} / ${items.length}</span>
            <button class="icon-btn" onclick="changeCard(1)"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
}

function changeCard(d) { currentIndex = (currentIndex + d + items.length) % items.length; loadCard(); }

function speak(t) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = 'tr-TR';
    window.speechSynthesis.speak(u);
}

function loadTest() {
    const corIdx = Math.floor(Math.random() * items.length);
    const cor = items[corIdx];
    let opts = [cor[1]];
    while(opts.length < 4) {
        let r = items[Math.floor(Math.random() * items.length)][1];
        if(!opts.includes(r)) opts.push(r);
    }
    opts.sort(() => Math.random() - 0.5);

    content.innerHTML = `
        <div style="animation: fadeIn 0.3s">
            <h2 style="text-align:center; margin-bottom:20px">${cor[0]}</h2>
            <div class="options">
                ${opts.map(o => `<button class="option-btn" onclick="checkTest(this, '${o.replace(/'/g, "\\'")}', '${cor[1].replace(/'/g, "\\'")}')">${o}</button>`).join('')}
            </div>
            <button id="nextTest" class="big-btn primary" style="display:none;" onclick="loadTest()">Sıradaki Soru <i class="fas fa-arrow-right"></i></button>
        </div>
    `;
}

function checkTest(btn, sel, cor) {
    const all = document.querySelectorAll('.option-btn');
    all.forEach(b => b.disabled = true);
    if(sel === cor) { btn.style.background = "#27ae60"; btn.style.color = "white"; }
    else {
        btn.style.background = "#e74c3c"; btn.style.color = "white";
        all.forEach(b => { if(b.innerText === cor) { b.style.background = "#27ae60"; b.style.color = "white"; } });
    }
    document.getElementById('nextTest').style.display = "flex";
}

// Modallar ve PWA Tetikleyicileri
const tModal = document.getElementById('themeModal');
const iModal = document.getElementById('infoModal');

document.getElementById('themeMenuBtn').onclick = () => tModal.style.display = 'flex';
document.getElementById('infoBtn').onclick = () => iModal.style.display = 'flex';
document.getElementById('closeTheme').onclick = () => tModal.style.display = 'none';
document.getElementById('closeInfo').onclick = () => iModal.style.display = 'none';

window.onclick = (e) => { if(e.target == tModal || e.target == iModal) { tModal.style.display = 'none'; iModal.style.display = 'none'; } };

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); deferredPrompt = e;
    document.getElementById('installBtn').style.display = 'flex';
});

document.getElementById('installBtn').onclick = () => {
    if(deferredPrompt) { deferredPrompt.prompt(); deferredPrompt.userChoice.then(() => deferredPrompt = null); }
};

document.getElementById('showCards').onclick = (e) => { switchTab(e.target); loadCard(); };
document.getElementById('showTest').onclick = (e) => { switchTab(e.target); loadTest(); };

function switchTab(el) {
    document.querySelectorAll('.nav-main').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
}

loadCard();