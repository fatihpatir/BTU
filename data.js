const EXAM_DATA = [
  {
    id: 'teknik-resim',
    title: 'Teknik Resim',
    summary: `<h3 style="color:var(--primary); margin-top:0;">1. Ünite: Temel Teknik Resim</h3>
<p style="margin-bottom:15px; font-style:italic; color:var(--text-dim);">Bu bölüm, bilgisayarın başına geçmeden önceki en kritik aşamadır; çünkü iyi bir tasarımın temeli doğru teknik kurallara dayanır.</p>

<strong style="color:var(--accent);">1. Çizgi ve Yazı Normları</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Teknik resimde sürekli kalın çizgi görünen kenarlar için kullanılırken, kesik orta çizgi görünmeyen detayları anlatır.</li>
  <li>Yazılar ise standartlara uygun, genellikle sağa 75 derece eğik ve okunaklı olmalıdır.</li>
</ul>

<strong style="color:var(--accent);">2. Geometri, Ölçek ve Temrin</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Pergel ve cetvel kullanarak doğruyu bölme, üçgen veya altıgen oluşturma tasarımın iskeletidir.</li>
  <li>Bir cismi gerçek boyutunda (<b>1:1</b>), küçülterek (<b>1:2</b>) veya büyüterek (<b>5:1</b>) çizmek detayları netleştirir.</li>
  <li>Temrin Hedefi: El becerisini geliştirmek için çizgi çeşitleri ve yazı şablonu uygulamaları yapılır.</li>
</ul>`,
    questions: [
      { q: "Teknik resimde kullanılan sürekli kalın çizgi nerede kullanılır?", a: "Görünen çevreler ve kenarlarda kullanılır." },
      { q: "Kesik orta kalınlıktaki çizginin (----) kullanım alanı nedir?", a: "Görünmeyen çevreler ve kenarlarda kullanılır." },
      { q: "Teknik resimde standart yazı tipinde harf ve rakamlar kaç derece eğik yazılmalıdır?", a: "75 derece eğik yazılmalıdır." },
      { q: "Teknik resimde kullanılan kalemlerden 'H' serisi ve 'B' serisi arasındaki fark nedir?", a: "H serisi sert (hard), B serisi yumuşak (black) kalemlerdir. İnce çizimler için 'H' uygundur." },
      { q: "Pergel ve cetvel kullanarak bir doğru parçası nasıl iki eşit parçaya bölünür?", a: "Doğru uçlarından yarıdan fazla açılan pergelle yaylar çizilir, kesişimler birleştirilir." },
      { q: "Bir çemberin içine düzgün altıgen çizimi için pergel açıklığı ne kadar olmalıdır?", a: "Pergel açıklığı, çemberin yarıçapı (r) kadar olmalıdır." },
      { q: "Ölçek nedir? 1:2 ölçeği ile 5:1 ölçeği arasındaki farkı açıklayınız.", a: "1:2 küçültme (yarı boy), 5:1 büyütme (5 kat) ölçeğidir." },
      { q: "Teknik resimde ön, yan ve üst görünüş hangi düzlemlere çizilir?", a: "Ön-Alın, Yan-Profil, Üst-Yatay düzleme çizilir." },
      { q: "Ölçülendirmede sınırlandırma çizgileri nasıl olmalıdır?", a: "İnce çizgilerle çizilmeli ve ölçü bağlama çizgisini 1-2 mm aşmalıdır." },
      { q: "T-Cetveli ve Gönyeler hangi amaçlarla kullanılır?", a: "T-Cetveli yatay çizgiler, Gönyeler dikey ve açılı (30,45,60) çizgiler için kullanılır." }
    ],
    flashcards: [
      { front: "Sürekli Kalın Çizgi", back: "Görünen kenarlar ve çevreler." },
      { front: "Kesik Orta Çizgi", back: "Görünmeyen kenarlar ve çevreler." },
      { front: "Noktalı İnce Çizgi", back: "Eksen çizgileri ve simetri merkezleri." },
      { front: "Yazı Eğimi", back: "75 derece eğik yazı standarttır." },
      { front: "H Kalem", back: "Sert uçlu, ince ve hassas çizimler içindir." },
      { front: "B Kalem", back: "Yumuşak uçlu, koyu ve sanatsal çizimler içindir." },
      { front: "1:1 Ölçek", back: "Gerçek boyutlu çizim demektir." },
      { front: "1:5 Ölçek", back: "Nesneyi 5 kat küçülterek çizmek demektir." },
      { front: "2:1 Ölçek", back: "Nesneyi 2 kat büyüterek çizmek demektir." },
      { front: "Alın Düzlemi", back: "Ön görünüşün çizildiği düşey düzlem." },
      { front: "Profil Düzlemi", back: "Yan görünüşün çizildiği yan düzlem." },
      { front: "İzometrik Projeksiyon", back: "30 derece açıyla çizilen 3 boyutlu görünüş." },
      { front: "Perspektif", back: "3B görüntüyü 2B düzlemde gösterme tekniği." },
      { front: "Eksantrik", back: "Merkezleri çakışmayan dairesel parçalar." },
      { front: "Tolerans", back: "Boyutlarda izin verilen hata payı." },
      { front: "Yüzey İşaretleri", back: "Pürüzlülük derecesini gösteren semboller." },
      { front: "Kesit Alma", back: "İç yapıyı görmek için yapılan hayali kesim." },
      { front: "Taramalar", back: "Kesit yüzeyleri gösteren ince paralel çizgiler." },
      { front: "Norm Yazı", back: "Teknik resimdeki standart yazı tipi." },
      { front: "Yatay Düzlem", back: "Üst görünüşün çizildiği yer düzlemi." }
    ],
    openEndedQuestions: [
      { q: "Teknik resimde kullanılan \"sürekli kalın çizgi\"nin kullanım amacını açıklayınız.", a: "Bu çizgi tipi, cisimlerin görünen kenarlarını ve çevrelerini net bir şekilde belirtmek için kullanılır. Çizimin ana hatlarını oluşturduğu için teknik resimdeki en temel çizgi normudur." },
      { q: "Standart norm yazıda (eğik yazı) harf ve rakamların sağa eğim açısı kaç derecedir?", a: "Teknik resim kurallarına göre standart eğik norm yazılarda sağa doğru eğim açısı tam olarak 75 derecedir. Bu açı, yazıların standart bir düzende ve okunaklı olmasını sağlar." },
      { q: "Kurşun kalemlerdeki \"H\" ve \"B\" harflerinin anlamlarını açıklayınız.", a: "\"H\" harfi kalemin sertliğini ve açık renk yazdığını, \"B\" harfi ise yumuşaklığını ve koyu yazdığını ifade eder. Teknik resimdeki ince yardımcı çizgiler için genellikle sert olan H serisi kalemler tercih edilir." },
      { q: "Bir doğru parçasını pergel yardımıyla iki eşit parçaya bölmenin temel mantığı nedir?", a: "Pergelin ucu doğrunun uçlarına konularak, doğrunun yarısından fazla açıyla birbirini kesen iki yay çizilir. Bu yayların kesişim noktaları birleştirildiğinde doğru parçası tam ortadan ikiye bölünmüş olur." },
      { q: "Teknik resimde kullanılan T-cetveli ve gönyelerin çalışma ilişkisini açıklayınız.", a: "T-cetveli kağıt üzerinde paralel yatay çizgiler çizmek ve gönyelere kılavuzluk etmek için kullanılır. Gönyeler ise T-cetveline dayandırılarak dikey veya belirli açılardaki çizgilerin hassas şekilde çizilmesini sağlar." },
      { q: "Bir daire içerisine düzgün altıgen çizmek için pergel açıklığı nasıl ayarlanmalıdır?", a: "Pergel açıklığı, başlangıçta çizilen dairenin yarıçapı (r) kadar olacak şekilde sabitlenmelidir. Bu açıklık bozulmadan daire yayı üzerinde işaretlenen altı nokta birleştirildiğinde düzgün altıgen elde edilir." },
      { q: "\"Ölçek 1:2\" ve \"Ölçek 5:1\" ifadeleri arasındaki farkı açıklayınız.", a: "1:2 ölçeği cismin gerçek boyutlarının yarı yarıya küçültülerek çizildiğini belirten bir küçültme ölçeğidir. 5:1 ölçeği ise cismin detaylarını görebilmek için 5 kat büyütülerek çizildiğini ifade eder." },
      { q: "Üç ana görünüş (ön, yan, üst) hangi iz düşüm düzlemlerine çizilir?", a: "Ön görünüş \"alın\" düzlemine, yan görünüş \"profil\" düzlemine, üstten görünüş ise \"yatay\" düzleme çizilir. Bu düzlemler birbirine dik olacak şekilde koordinat sisteminde konumlandırılır." },
      { q: "Teknik resimde ölçülendirme yapılırken kullanılan \"Ölçü Sınır Çizgisi\"nin özelliği nedir?", a: "Ölçü sınır çizgisi sürekli ince çizgiyle çizilmeli ve ölçülendirilecek parçanın kenarından başlamalıdır. Bu çizgiler ölçü çizgisinin bittiği yerden yaklaşık 1-2 mm dışarı taşacak şekilde sonlandırılmalıdır." },
      { q: "Perspektifi verilen bir cismin görünüşleri çıkarılırken neden önce \"ön görünüş\" seçilir?", a: "Ön görünüş, cismin en belirgin özelliklerini yansıtan ana görünüş olduğu için diğer görünüşlerin yerini belirler. Diğer tüm yan ve üst görünüşler, ön görünüşten taşınan yardımcı çizgiler üzerinden inşa edilir." }
    ]
  },
  {
    id: 'tinkercad',
    title: 'Tinkercad & 3D Tasarım',
    summary: `<h3 style="color:var(--primary); margin-top:0;">2. Ünite: İz Düşüm ve Tinkercad Giriş</h3>
<p style="margin-bottom:15px; font-style:italic; color:var(--text-dim);">Bu aşamada 2 boyutlu kağıttan 3 boyutlu dijital dünyaya geçiş yapıyoruz.</p>

<strong style="color:var(--accent);">1. Üç Görünüş Mantığı</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Bir cismi tam anlatabilmek için <b>Alın (Ön)</b>, <b>Profil (Yan)</b> ve <b>Yatay (Üst)</b> düzlemlere düşen görüntülerini çizmemiz gerekir.</li>
</ul>

<strong style="color:var(--accent);">2. Tinkercad Arayüzü ve Araçları</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Web tabanlı bu programda temel geometrik şekilleri çalışma düzlemine sürükleyerek tasarıma başlanır.</li>
  <li><b>Gruplama (Group)</b>, katı bir nesne ile "delik" nesnesini birleştirerek yeni formlar oluşturmanı sağlar.</li>
  <li><b>Hizalama (Align)</b> ise nesneleri bir eksende milimetrik olarak ortalamana yarar.</li>
  <li>Temrin Hedefi: Kaban düğmesi, anahtarlık ve kardan adam gibi temel 3D modeller üretilir.</li>
</ul>`,
    questions: [
      { q: "Tinkercad'de bir nesneyi diğerinden çıkarmak için hangi özellik kullanılır?", a: "Nesnenin şekil ayarlarından 'Hole' (Delik) özelliği seçilir." },
      { q: "'Group' komutu katı ve delik nesnelerle nasıl çalışır?", a: "Gruplandığında delik nesnesinin hacmi katı nesneden silinir." },
      { q: "Nesneleri hizalamak için hangi komut kullanılır?", a: "'Align' (Hizala) komutu (L kısayolu) kullanılır." },
      { q: "3D baskı için hangi dosya formatı tercih edilir?", a: "Genellikle '.STL' formatında dışa aktarma yapılır." },
      { q: "'Workplane' aracı ne amaçla kullanılır?", a: "Nesne yüzeylerinde çizim yapmak için yeni zemin oluşturur." },
      { q: "'Copy' ve 'Duplicate' arasındaki fark nedir?", a: "Duplicate (Ctrl+D) yapılan hareketleri hafızaya alır." },
      { q: "Döndürme işlemi nasıl yapılır?", a: "Nesne kenarlarındaki kavisli oklardan tutarak yapılır." },
      { q: "Hassas ölçüm için hangi araç kullanılır?", a: "'Ruler' (Cetvel) aracı kullanılır." },
      { q: "Dışarıdan 2D çizim almak için hangi format kullanılır?", a: "'.SVG' formatındaki dosyalar 'Import' edilebilir." },
      { q: "Gruplanmış nesne nasıl ayrılır?", a: "'Ungroup' (Grubu Çöz) komutuyla ayrılır." }
    ],
    flashcards: [
      { front: "Hole", back: "Nesneden parça çıkarmak için 'delik' özelliği." },
      { front: "Group", back: "Nesneleri kalıcı olarak birleştirme veya delme." },
      { front: "Align", back: "Nesneleri eksenlerde hizalama aracı." },
      { front: "STL", back: "3D yazıcılar için standart dosya formatı." },
      { front: "Workplane", back: "Yüzeylere çizim yapmayı sağlayan düzlem." },
      { front: "Duplicate", back: "Akıllı kopyalama (hareketleri tekrar eder)." },
      { front: "Ruler", back: "Hassas milimetrik ölçülendirme cetveli." },
      { front: "Import", back: "SVG veya STL gibi dış dosyaları alma." },
      { front: "Scribble", back: "Elle serbest çizimle 3D model oluşturma." },
      { front: "Snap Grid", back: "Izgara hassasiyeti (takılma aralığı)." },
      { front: "Shape Generators", back: "Topluluk yapımı karmaşık şekil araçları." },
      { front: "Lock Tool", back: "Nesneyi yanlışlıkla oynamasın diye sabitleme." },
      { front: "Hide Tool", back: "Kalabalığı engellemek için nesneyi gizleme." },
      { front: "Notes Tool", back: "Tasarım üzerine not bırakma aracı." },
      { front: "Minecraft Export", back: "Modeli Minecraft dünyasına aktarma." },
      { front: "Codeblocks", back: "Kod yazarak 3D tasarım yapma bölümü." },
      { front: "Cruising", back: "Nesnelerin birbirine temasını sağlayan mod." },
      { front: "SVG", back: "Tinkercad'in içe alabildiği 2B vektör formatı." },
      { front: "Export", back: "Tasarımı bilgisayara indirme işlemi." },
      { front: "Circuit Assembly", back: "Elektronik bileşenlerle tasarım yapma." }
    ],
    openEndedQuestions: [
      { q: "Tinkercad ortamında bir nesneyi \"Hole\" (Delik) özelliğine getirmenin amacı nedir?", a: "Bu özellik, ana nesneden parça eksiltmek veya nesne üzerinde boşluklar oluşturmak amacıyla kullanılır. Delik olan nesne katı bir nesneyle gruplandığında, delik şekli katı nesnenin içinden çıkarılır." },
      { q: "Bilgisayarlı çizimde \"Group\" (Gruplandır) komutu ne işe yarar?", a: "Birden fazla nesneyi tek bir parça haline getirerek onların birlikte hareket etmesini ve yönetilmesini sağlar. Ayrıca katı ve delik nesneleri birleştirerek karmaşık yeni şekiller oluşturmak için gereklidir." },
      { q: "\"Align\" (Hizala) komutunun tasarım sürecindeki en büyük avantajı nedir?", a: "Nesnelerin belirlenen bir eksende (merkez, sağ, sol vb.) tam olarak aynı hizada durmasını sağlayarak tasarım hatalarını önler. Bu sayede simetrik ve profesyonel görünümlü modelleri saniyeler içinde oluşturabilirsiniz." },
      { q: "Tasarlanan bir ürünün 3D yazıcıda basılabilmesi için hangi dosya formatında dışa aktarılması gerekir?", a: "3D baskı işlemi için tasarımların en yaygın kullanılan standart format olan STL formatında dışa aktarılması şarttır. Bu format, modelin yüzey verilerini yazıcının anlayabileceği bir geometriye dönüştürür." },
      { q: "Tinkercad'de \"Workplane\" (Çalışma Düzlemi) aracının kullanım amacını yazınız.", a: "Nesnelerin sadece taban yüzeyine değil, diğer nesnelerin eğik veya dikey yüzeylerine doğrudan eklenebilmesi için geçici bir zemin oluşturur. Bu araç sayesinde karmaşık açılı yüzeylerde çalışmak çok daha kolay hale gelir." },
      { q: "2D bir SVG dosyasını Tinkercad ortamına aktardığımızda (Import) ne olur?", a: "Program, iki boyutlu olan bu vektörel görseli otomatik olarak belirli bir yükseklik vererek üç boyutlu bir katı modele dönüştürür. Logolar veya özel şekiller bu yöntemle hızlıca 3B tasarımlara dahil edilebilir." },
      { q: "\"Duplicate\" (Çoğalt) komutunun standart \"Copy\" (Kopyala) komutundan farkı nedir?", a: "Duplicate komutu nesneyi kopyalarken yapılan taşıma veya döndürme hareketlerini hafızaya alır ve sonraki kopyalamada bu hareketleri otomatik tekrarlar. Bu sayede dairesel dizilimler veya basamaklı yapılar çok hızlı üretilir." },
      { q: "Tasarım ekranındaki \"Cetvel\" (Ruler) aracının hassas modelleme yaparken sağladığı kolaylık nedir?", a: "Nesnelerin hem kendi boyutlarını hem de çalışma düzlemindeki diğer noktalara olan uzaklıklarını sayısal olarak görmeyi sağlar. Bu araç kullanılarak parçalar arasındaki mesafeler milimetrik hassasiyetle ayarlanabilir." },
      { q: "Bir \"Kalemlik\" tasarımında iç boşluğu oluşturmak için hangi işlem adımları izlenir?", a: "Önce dış gövde tasarlanır, ardından bu gövdeden biraz daha küçük ve \"delik\" özelliğine sahip bir iç parça oluşturulur. Bu iki nesne hizalanıp gruplandığında, iç parça dış gövdenin içini boşaltarak kalemlik formunu oluşturur." },
      { q: "Bilgisayarlı çizimde \"Ungroup\" (Grubu Çöz) işlemi ne zaman gereklidir?", a: "Daha önce gruplandırılmış bir nesnenin içindeki parçalar üzerinde bireysel değişiklikler yapmak istendiğinde kullanılır. Grubu çözdüğünüzde, nesneler eski bağımsız hallerine geri dönerek tekrar düzenlenebilir hale gelir." }
    ]
  },
  {
    id: 'fusion-intro',
    title: 'Fusion 360 - Temel',
    summary: `<h3 style="color:var(--primary); margin-top:0;">3. Ünite: Dijital Üretim ve Parametrik Modelleme</h3>
<p style="margin-bottom:15px; font-style:italic; color:var(--text-dim);">Artık profesyonel dijital üretim süreçlerine (Fusion 360 vb.) ve 3D yazıcı teknolojilerine giriyoruz.</p>

<strong style="color:var(--accent);">1. CAD, CAM ve Modelleme</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li><b>CAD</b>, <b>CAM</b> ve <b>CAE</b> süreçleri; tasarım, üretim ve mühendislik analizlerinin tamamını kapsar.</li>
  <li><b>Parametrik Modelleme</b> ile tasarımın başında verdiğin bir ölçüyü değiştirdiğinde tüm model otomatik olarak bozulmadan güncellenir.</li>
</ul>

<strong style="color:var(--accent);">2. Montaj ve 3D Baskı Hazırlığı</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Parçaların nasıl bağlanacağını <b>Joint</b> (Ekleme) belirler. <b>Rigid</b> (hareketsiz) ve <b>Revolute</b> (eksen dönmesi) en sık kullanılan montaj tipleridir.</li>
  <li>Tasarım bittiğinde dosya <b>STL</b> formatında aktarılır ve <b>Dilimleme (Slicer)</b> programında yazıcıya uygun <b>G-Code</b>'a dönüştürülür.</li>
</ul>`,
    questions: [
      { q: "Parametrik modellemenin avantajı nedir?", a: "Ölçü değişince tüm modelin otomatik güncellenmesidir." },
      { q: "CAD ve CAM farkı nedir?", a: "CAD tasarım, CAM üretim (makine kodları) sürecidir." },
      { q: "Neden Component kullanılmalıdır?", a: "Bağımsız hareket ve montaj ilişkileri kurabilmek için." },
      { q: "Joint komutu ne işe yarar?", a: "Parçaları dinamik veya sabit şekilde birbirine bağlar." },
      { q: "Rigid ve Revolute farkı nedir?", a: "Rigid sabit tutar, Revolute dönme izni verir." },
      { q: "Timeline ne işe yarar?", a: "Geçmiş adımları görmeyi ve hataları düzeltmeyi sağlar." },
      { q: "3D yazıcı formatı nedir?", a: "En yaygın kullanılan '.STL' formatıdır." },
      { q: "Slicing nedir?", a: "Modeli katmanlara bölüp G-Code'a dönüştürmektir." },
      { q: "Yay yapmak için hangi komut kullanılır?", a: "'Coil' komutu kullanılır." },
      { q: "Browser bölümü ne işe yarar?", a: "Tasarımdaki tüm bileşen ve taslakları listeler." }
    ],
    flashcards: [
      { front: "CAD", back: "Bilgisayar Destekli Tasarım sürecidir." },
      { front: "CAM", back: "Bilgisayar Destekli Üretim sürecidir." },
      { front: "CAE", back: "Analiz, dayanıklılık ve mühendislik testleridir." },
      { front: "Parametrik Modelleme", back: "Ölçülere dayalı, esnek modelleme türü." },
      { front: "Component (Bileşen)", back: "Bağımsız ve montajlanabilir parçalar." },
      { front: "Rigid Joint", back: "Tamamen sabitleyen eklem tipidir." },
      { front: "Revolute Joint", back: "Tek eksende dönme izni veren eklem tipidir." },
      { front: "Slider Joint", back: "Hat boyunca kayma izni veren eklem tipidir." },
      { front: "STL Formatı", back: "Yazıcıya gönderilen standart yüzey formatı." },
      { front: "Dilimleme (Slicing)", back: "Modeli katman katman G-Code'a çevirme." },
      { front: "Timeline", back: "İşlem geçmişini gösteren zaman çizelgesi." },
      { front: "Browser", back: "Model hiyerarşisini gösteren kısım." },
      { front: "Extrude", back: "Yükseklik vererek katı oluşturma komutu." },
      { front: "Revolve", back: "Döndürerek katı oluşturma komutu." },
      { front: "Coil", back: "Yay veya vida dişi oluşturma komutu." },
      { front: "Fillet", back: "Keskin köşeleri yuvarlatma (kavis)." },
      { front: "Chamfer", back: "Köşelere eğik pah kırma işlemi." },
      { front: "Mirror", back: "Simetrik kopyalama aracı." },
      { front: "Combine", back: "Gövdeleri birleştirme veya çıkarma." },
      { front: "Shell", back: "İçini boşaltıp kabuk yapma komutu." }
    ],
    openEndedQuestions: [
      { q: "Parametrik modelleme yönteminin geleneksel çizim yöntemlerine göre en büyük avantajı nedir?", a: "Bu yöntemde boyutlar değişkenlere bağlı olduğu için, bir ölçü değiştirildiğinde tüm tasarım otomatik olarak ve bozulmadan güncellenir. Bu özellik, tasarım revizyonlarını çok hızlı ve hatasız yapmayı sağlar." },
      { q: "Dijital üretim programlarında kullanılan CAD ve CAM kavramlarının görevlerini belirtiniz.", a: "CAD, bilgisayar ortamında ürünün 3 boyutlu modelinin tasarlanması aşamasını ifade eder. CAM ise bu tasarımın 3D yazıcı veya CNC gibi makinelerle üretilmesi için gerekli kodların hazırlanmasıdır." },
      { q: "Mekanizma tasarımlarında parçaların neden \"Component\" (Bileşen) olarak tanımlanması gerekir?", a: "Parçaların birbirinden bağımsız hareket edebilmesi ve aralarında montaj (Joint) ilişkileri kurulabilmesi için Component yapısı zorunludur. Aksi takdirde program tüm çizimi tek bir katı gövde olarak görür ve parçaları hareket ettiremezsiniz." },
      { q: "\"Joint\" (Ekleme/Montaj) komutunun temel işlevini bir örnekle açıklayınız.", a: "Joint komutu, iki ayrı bileşeni birbirine bağlar ve aralarındaki hareket tipini (dönme, kayma vb.) tanımlar. Örneğin, bir tekerleğin dingile bağlanıp sadece kendi ekseninde dönmesi bu komutla sağlanır." },
      { q: "\"Rigid Joint\" ile \"Revolute Joint\" arasındaki temel fark nedir?", a: "Rigid Joint parçaları birbirine tamamen sabitleyerek hiçbir harekete izin vermezken; Revolute Joint parçanın belirlenen bir eksende dairesel dönmesine izin verir. Sabit parçalar için Rigid, dönen parçalar için Revolute tipi tercih edilir." },
      { q: "Fusion 360 arayüzünde bulunan \"Timeline\" (Zaman Çizelgesi) ne işe yarar?", a: "Tasarımcının yaptığı tüm işlemleri kronolojik bir sırada gösterir ve geçmişteki adımlara dönüp düzenleme yapma imkanı tanır. Bu sayede tasarımın başındaki bir hata, sonraki adımları silmeden düzeltilebilir." },
      { q: "\"Dilimleme\" (Slicing) yazılımı nedir ve 3B baskı için neden gereklidir?", a: "Dilimleme yazılımı, 3B modeli katmanlara ayırarak 3D yazıcının anlayacağı G-Code dosyasını üreten araçtır. Baskı hızı, doluluk oranı ve destek yapıları burada belirlendiği için üretim sürecinde mutlaka kullanılmalıdır." },
      { q: "Mekanik bir tasarımda yay veya vida dişi oluşturmak için hangi özel komut kullanılır?", a: "Bu tür spiral ve helezon yapıdaki parçaları oluşturmak için programda yer alan Coil (Yay) komutu kullanılır. Bu komutla yayın çapı, yüksekliği ve sarım sayısı gibi parametreler kolayca ayarlanabilir." },
      { q: "Tasarım ekranındaki \"Browser\" (Ürün Ağacı) bölümünün işlevini açıklayınız.", a: "Browser, tasarımdaki tüm bileşenleri, gövdeleri ve taslakları hiyerarşik bir liste halinde görmeyi ve yönetmeyi sağlar. Buradan istenilen parçalar gizlenebilir, kilitlenebilir veya isimleri değiştirilebilir." },
      { q: "\"Extrude\" (Yükseltme) komutu ile bir taslağa (Sketch) nasıl hacim kazandırılır?", a: "İki boyutlu olarak çizilen kapalı bir profile, belirli bir doğrultuda derinlik verilerek üç boyutlu katı bir model oluşturulur. Bu komut, taslakları somut nesnelere dönüştüren en temel modelleme aracıdır." }
    ]
  },
  {
    id: 'fusion-advanced',
    title: 'Fusion 360 - İleri',
    summary: `<h3 style="color:var(--primary); margin-top:0;">4. Ünite: İleri Modelleme ve Simülasyon</h3>
<p style="margin-bottom:15px; font-style:italic; color:var(--text-dim);">Yılın sonunda, karmaşık mekanizmalar ve estetik tasarımlar yapma aşamasına geliyoruz.</p>

<strong style="color:var(--accent);">1. Hacim Veren Form Komutları</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li><b>Extrude:</b> 2D bir taslağı düz bir hatta çekerek 3D katı yapar.</li>
  <li><b>Revolve:</b> Bir profili bir eksen etrafında döndürerek fincan, tekerlek gibi formlar oluşturur.</li>
  <li><b>Sweep ve Loft:</b> Yol boyunca veya iki kesit arasında geçiş yaparak karmaşık formlar üretir.</li>
</ul>

<strong style="color:var(--accent);">2. Düzenleme, Simülasyon ve Temrin</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Nesne boşaltmak için <b>Shell</b>, köşeleri yuvarlatmak için <b>Fillet</b>, pah kırmak için <b>Chamfer</b> kullanılır.</li>
  <li><b>Simülasyon (Motion Study):</b> Mekanizmaların üretimden önce nasıl hareket edeceğini test etmeni sağlar.</li>
  <li>Temrin Hedefi: Robot parçaları, dişli çarklar ve Hayallerdeki Ev projesi ile yıl kapanır.</li>
</ul>`,
    questions: [
      { q: "Joint komutu ne işe yarar?", a: "Bileşenleri bağlar ve hareket tanımlar." },
      { q: "Rigid ve Revolute farkı nedir?", a: "Biri tamamen sabit, diğeri dairesel hareketlidir." },
      { q: "Sweep için ne gereklidir?", a: "Bir Profil ve bir Yol (Path) gereklidir." },
      { q: "Loft ne zaman kullanılır?", a: "Farklı şekiller arasında yumuşak geçiş yapmak için." },
      { q: "Component neden önemlidir?", a: "Montaj ve simülasyon için şarttır." },
      { q: "Shell komutu ne yapar?", a: "Yüzeyi kaldırıp içini boşaltır, duvar payı bırakır." },
      { q: "Döner eklem hangisidir?", a: "'Revolute Joint' dairesel hareket sağlar." },
      { q: "Rib ne amaçla kullanılır?", a: "Dayanıklılığı artıran destek duvarları örer." },
      { q: "Motion Study nedir?", a: "Mekanizmanın hareketlerini test eden modüldür." },
      { q: "Combine 'Cut' ne yapar?", a: "Bir nesneyi diğerinden eksiltir." }
    ],
    flashcards: [
      { front: "Sweep", back: "Profilin bir yol boyunca sürülmesidir." },
      { front: "Loft", back: "İki farklı kesit arasında katı örme." },
      { front: "Shell", back: "Nesneyi boşaltıp kabuğa dönüştürme." },
      { front: "Fillet", back: "Köşeleri kavisli şekilde kırma." },
      { front: "Mirror", back: "Düzleme göre simetri kopyası alma." },
      { front: "Combine (Cut)", back: "Hacimsel çıkarma işlemi." },
      { front: "Rib (Payanda)", back: "Destekleyici ince duvar yapısı." },
      { front: "Circular Pattern", back: "Dairesel hat üzerinde çoğaltma." },
      { front: "Motion Study", back: "Canlı mekanizma hareket testi." },
      { front: "Slider Joint", back: "Kanal içinde kayma simülasyonu." },
      { front: "Thread", back: "Gerçekçi vida dişi açma komutu." },
      { front: "Spline", back: "Esnek ve eğrisel çizgiler çizme aracı." },
      { front: "Appearance", back: "Malzeme rengi ve dokusu (A kısayolu)." },
      { front: "Render", back: "Gerçekçi fotoğraf kalitesinde çıktı alma." },
      { front: "Simulation", back: "Fiziksel dayanıklılık testi modülü." },
      { front: "Generative Design", back: "Yapay zeka destekli form tasarımı." },
      { front: "Assembly", back: "Parçaların montajlanmış bütünü." },
      { front: "Parametric History", back: "Timeline ile değişen model yapısı." },
      { front: "Rectangular Pattern", back: "Izgara düzeninde (satır/sütun) çoğaltma." },
      { front: "Physical Material", back: "Nesneye gerçek ağırlık ve özellik atama." }
    ],
    openEndedQuestions: [
      { q: "\"Sweep\" komutunun çalışması için gereken iki temel bileşen nedir?", a: "Bu komut için öncelikle oluşturulacak şekli temsil eden bir \"Profil\" ve bu profilin takip edeceği bir \"Yol\" (Path) gereklidir. Profil, yol boyunca sürüklenerek karmaşık boru veya kıvrımlı yapılar oluşturulur." },
      { q: "\"Loft\" komutu hangi durumlarda (farklı geometrik şekiller arası geçiş vb.) tercih edilir?", a: "Farklı düzlemlerde bulunan iki veya daha fazla farklı kesit (örneğin kareden daireye) arasında yumuşak bir geçiş yaparak katı oluşturmak için kullanılır. Giderek daralan veya form değiştiren nesnelerin tasarımında idealdir." },
      { q: "\"Shell\" (Kabuk) komutu uygulandığında katı nesne üzerinde nasıl bir değişiklik yapar?", a: "Seçilen bir yüzeyi kaldırarak nesnenin içini boşaltır ve belirlenen kalınlıkta duvarlar bırakarak bir kap formuna dönüştürür. Bu komutla kutu, kase veya tüp gibi nesneler tek bir adımda tasarlanabilir." },
      { q: "Parçaların köşelerine kavis vermek veya keskinliğini gidermek için hangi komutlar kullanılır?", a: "Köşeleri yuvarlatmak ve kavis vermek için Fillet, köşelere pah kırmak (eğik kesmek) için ise Chamfer komutu kullanılır. Bu komutlar parçaların hem estetiğini artırır hem de ergonomik olmasını sağlar." },
      { q: "\"Mirror\" (Aynalama) komutu tasarımcıya zaman açısından nasıl bir kolaylık sağlar?", a: "Simetrik parçaların sadece yarısını çizip diğer yarısını bir düzlem üzerinden kopyalayarak tasarım süresini yarı yarıya azaltır. Böylece her iki tarafın tam olarak aynı boyutta olması garanti edilmiş olur." },
      { q: "\"Combine\" komutu içerisindeki \"Cut\" (Kes) işleminin görevi nedir?", a: "Bir nesnenin hacmini kullanarak başka bir nesne üzerinden parça eksiltmeyi veya boşluk açmayı sağlar. Kalıp tasarımlarında veya iç içe geçen parçalarda yuva açmak için sıklıkla tercih edilir." },
      { q: "Tasarımda dayanıklılığı artırmak için kullanılan \"Rib\" (Payanda/Destek) komutunu açıklayınız.", a: "Birbirine dik veya açılı duran yüzeyler arasına ince destek duvarları ekleyerek parçanın mukavemetini artırmak için kullanılır. Özellikle plastik parçaların esnemesini önlemek için bu teknik destek yapıları eklenir." },
      { q: "Bir nesneyi belirli bir hat boyunca veya dairesel olarak çok sayıda kopyalamak için hangi araçlar kullanılır?", a: "Doğrusal kopyalamalar için Rectangular Pattern, bir merkez etrafında kopyalamalar için ise Circular Pattern komutu kullanılır. Bu araçlar sayesinde dişli çarklar veya ızgara benzeri yapılar çok hızlı oluşturulur." },
      { q: "\"Motion Study\" (Hareket Etüdü) yapmanın üretim öncesi teknik faydası nedir?", a: "Tasarlanan mekanizmanın parçalarının çalışma sırasında birbirine çarpıp tutmadığını ve hareketin planlandığı gibi olup olmadığını test etmeyi sağlar. Bu sayede üretim aşamasına geçmeden önce olası tasarım hataları fark edilebilir." },
      { q: "\"Hayallerdeki Ev\" projesinde farklı geometrik gövdeleri (çatı, duvar vb.) birleştirmek için hangi komut kullanılır?", a: "Ayrı olarak tasarlanan farklı katı gövdeleri tek bir parça haline getirmek için Combine (Join) komutu kullanılır. Bu işlemden sonra ev modeli, 3D yazıcıda basılmaya uygun tek parçalı bir yapı haline gelir." }
    ]
  }
];

window.EXAM_DATA = EXAM_DATA;
