/**
 * Bitigey Sözlük — Kapsamlı Karşılaştırmalı Etimolojik Külliyat (A-Z)
 * Kaynaklar:
 * 1. Prof. Dr. Hasan Eren, Türk Dilinin Etimolojik Sözlüğü (TDES), Ankara.
 * 2. Sevan Nişanyan, Nişanyan Sözlük (Çağdaş Türkçenin Etimolojisi).
 * 3. Sir Gerard Clauson, An Etymological Dictionary of Pre-Thirteenth-Century Turkish (EDPT), Oxford.
 * 4. Kâşgarlı Mahmud, Dīwānu L̠ugāt it-Turk (DLT), MS 1074.
 */

const comprehensiveCorpus = [
  {
    id: "alp",
    madde: "alp",
    guncel: "alp / yiğit / cesur",
    harf: "A",
    ipa: "/ɑɫp/",
    tur: "Sıfat / İsim",
    protoKok: "*alp (Proto-Türkçe: cesur, kahraman, savaşçı)",
    kokAciklama: "Eski Türkçenin en kadim kahramanlık unvanlarındandır. Şehname'deki Afrasiyab figürü Türk geleneğinde Alp Er Tunga ile özdeşleştirilmiştir.",
    hasanErenNotu: "Hasan Eren (TDES, s. 14): 'Eski Türkçede alp 'cesur, kahraman'. Bütün Türk yazı dillerinde (Kazakça alp, Kırgızca alp) dev cüsseli ve kahraman anlamlarında yaşar.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe alp 'kahraman, cengaver, zorlu'. Orhun Yazıtlarında bilge kağan ermiş, alp kağan ermiş biçiminde sıfat olarak geçer.'",
    clausonNotu: "Clauson (EDPT, s. 127): 'alp: Brave, hero, warrior; difficult, tough.'",
    ilkTanikliklar: [
      { yil: "MS 732", eser: "Kül Tigin Yazıtı", alinti: "Alp erin öldürüp...", anlam: "Kahraman erlerini alt edip..." },
      { yil: "MS 1074", eser: "Dīwānu L̠ugāt it-Turk", alinti: "Alp Er Tunga öldi mü? Issız ajun kaldı mu?", anlam: "Alp Er Tunga öldü mü? Kötü dünya kaldı mı?" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "alp / igid", anlam: "qəhrəman" },
      { dil: "Kazakça", kelime: "alp (алып)", anlam: "dev, bahadır" },
      { dil: "Kırgızca", kelime: "alp (алп)", anlam: "kahraman, devasa" },
      { dil: "İngilizce (Çeviri)", kelime: "hero, brave warrior", anlam: "champion" },
      { dil: "Almanca (Çeviri)", kelime: "Held, Kämpe", anlam: "Krieger" },
      { dil: "Rusça (Çeviri)", kelime: "богатырь, герой", anlam: "великан" }
    ],
    turevler: ["alplık (yiğitlik)", "alperen (gazi derviş)", "alpan (cesurlar)"]
  },
  {
    id: "bitig",
    madde: "bitig",
    guncel: "betik / bitik / kitap",
    harf: "B",
    ipa: "/bi.tiɡ/",
    tur: "İsim",
    protoKok: "*biti- (Proto-Türkçe: kazımak, nakşetmek, yazmak)",
    kokAciklama: "Eski Türkçe *biti- eyleminden +(I)g yapım ekiyle türetilmiştir. Erken dönemde Çince bǐt (fırça/yazı kalemi) ile temas etmiş, Türkçede işlek bir kök ailesi oluşturmuştur.",
    hasanErenNotu: "Hasan Eren (TDES, s. 46): 'Eski Türkçede bitig biçiminde geçer. Çuvaşça pĭtĭk, Hakasça pizik, Tuvaça bižik biçimleriyle Altay sahasına kadar uzanır.'",
    nisanyanNotu: "Nişanyan: 'İlk kayıt Orhun Yazıtları (735). Eski Türkçe biti- eyleminden türetilmiştir.'",
    clausonNotu: "Clauson (EDPT, s. 299): 'bitig: anything written, a book, document, letter, inscription.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Orhun Yazıtları (Tonyukuk & Kül Tigin)", alinti: "Bunça bitig bitigme...", anlam: "Yazıt, kitabe, anıt yazısı" },
      { yil: "MS 1074", eser: "Kâşgarlı Mahmud, DLT", alinti: "Bitig: Kitap ve mektup.", anlam: "Yazılı risale ve nüsha" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "bitik / bətig", anlam: "yazı, kitabə" },
      { dil: "Kazakça", kelime: "bitik (бітік)", anlam: "tarihî yazı" },
      { dil: "İngilizce (Çeviri)", kelime: "inscription, book", anlam: "written text" },
      { dil: "Almanca (Çeviri)", kelime: "Schriftstück, Buch", anlam: "Inschrift" },
      { dil: "Rusça (Çeviri)", kelime: "надпись, книга", anlam: "рунический текст" }
    ],
    turevler: ["bitigçi (katip)", "bitiglik (kütüphane)", "bitil- (yazılmak)"]
  },
  {
    id: "bil-",
    madde: "bil-",
    guncel: "bilmek / bilgi / bilge",
    harf: "B",
    ipa: "/bil-/",
    tur: "Fiil",
    protoKok: "*bēl- / *bil- (Proto-Türkçe: idrak etmek, tanımak, kavramak)",
    kokAciklama: "Türkçenin en köklü zihinsel fiilidir. Bütün çağdaş Türk dillerinde ses değişimine uğramadan varlığını korumuştur.",
    hasanErenNotu: "Hasan Eren (TDES, s. 54): 'bil- fiili bütün Türk lehçelerinde ortaktır. Çuvaşça pĕl-, Yakutça bil- biçimindedir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe bil- 'zihnen kavramak, tanımak'.'",
    clausonNotu: "Clauson (EDPT, s. 330): 'bil-: To know, understand, recognize.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Kül Tigin Yazıtı", alinti: "Bilge kağan ermiş...", anlam: "Bilgili, bilge kağan imiş..." },
      { yil: "MS 1074", eser: "DLT", alinti: "Ol anı bildi: O onu bildi, tanıdı.", anlam: "Bilişmek" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "bilmək / bilgi", anlam: "öyrənmək" },
      { dil: "Kazakça", kelime: "bilu (білу)", anlam: "tanımaq" },
      { dil: "İngilizce (Çeviri)", kelime: "to know, understand", anlam: "knowledge" },
      { dil: "Almanca (Çeviri)", kelime: "wissen, kennen", anlam: "verstehen" },
      { dil: "Rusça (Çeviri)", kelime: "знать, ведать", anlam: "понимать" }
    ],
    turevler: ["bilge (âlim)", "bilgi (data)", "bilim (ilim)", "bilinç (şuur)"]
  },
  {
    id: "cag",
    madde: "çağ",
    guncel: "çağ / zaman / devir",
    harf: "Ç",
    ipa: "/t͡ʃɑː/",
    tur: "İsim",
    protoKok: "*čāg (Proto-Türkçe: zaman, vakit, ölçü, had)",
    kokAciklama: "Eski Türkçe çak/çağ 'zaman, an, uygun vakit' kökünden gelir. Çağdaş Türkçede 'büyük tarihsel dönem' anlamını kazanmıştır.",
    hasanErenNotu: "Hasan Eren (TDES, s. 86): 'Eski Türkçe çak/çağ biçimindedir. Moğolca çag (zaman, saat) ile kökteştir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe çak 'zaman, uygun an'. DLT'de çak ol vaktın kaydı vardır.'",
    clausonNotu: "Clauson (EDPT, s. 404): 'ça:ğ: Time, epoch, suitable moment.'",
    ilkTanikliklar: [
      { yil: "MS 1069", eser: "Kutadgu Bilig", alinti: "Bu çağ boldı emdi...", anlam: "Bu vakit/devir oldu şimdi..." },
      { yil: "MS 1074", eser: "DLT", alinti: "Çağ: Zaman ve had.", anlam: "Vakit" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "çağ / zaman", anlam: "dövr" },
      { dil: "Moğolca", kelime: "tsag (цаг)", anlam: "zaman, saat" },
      { dil: "İngilizce (Çeviri)", kelime: "era, age, epoch", anlam: "time" },
      { dil: "Almanca (Çeviri)", kelime: "Zeitalter, Ära, Epoche", anlam: "Zeit" },
      { dil: "Rusça (Çeviri)", kelime: "эпоха, век, пора", anlam: "время" }
    ],
    turevler: ["çağdaş (muasır)", "çağcıl (modern)", "çağla- (zamanı gelmek)"]
  },
  {
    id: "demir",
    madde: "demir",
    guncel: "demir / timur",
    harf: "D",
    ipa: "/de'miɾ/",
    tur: "İsim",
    protoKok: "*temür / *tömür (Proto-Türkçe: demir madeni)",
    kokAciklama: "Eski Türkçe temür sözcüğü Türklerin kadim madencilik kültürünün merkezindedir. Ergenekon Destanı'nda dağ eriten maden olarak simgeleşmiştir.",
    hasanErenNotu: "Hasan Eren (TDES, s. 110): 'Eski Türkçede temür. Bütün Türk yazı dillerinde temir/tömür/timur biçimleriyle ortaktır. Moğolca tömür ile akrabadır.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe temür 'demir'. Orhun Yazıtlarında temir kapıg biçiminde geçer.'",
    clausonNotu: "Clauson (EDPT, s. 508): 'temür: Iron. Universal in all Turkic languages.'",
    ilkTanikliklar: [
      { yil: "MS 732", eser: "Kül Tigin Yazıtı", alinti: "Temir kapıgka tegi süledim...", anlam: "Demir Kapı'ya kadar ordu sevk ettim..." },
      { yil: "MS 1074", eser: "DLT", alinti: "Temür: Bilinen demir madeni.", anlam: "Maden" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "dəmir", anlam: "metal" },
      { dil: "Kazakça", kelime: "temir (темір)", anlam: "demir" },
      { dil: "Özbekçe", kelime: "temir (темир)", anlam: "maden" },
      { dil: "Moğolca", kelime: "tömör (төмөр)", anlam: "demir" },
      { dil: "İngilizce (Çeviri)", kelime: "iron", anlam: "metal" },
      { dil: "Almanca (Çeviri)", kelime: "Eisen", anlam: "Metall" },
      { dil: "Rusça (Çeviri)", kelime: "железо", anlam: "металл" }
    ],
    turevler: ["demirci (haddad)", "demirkazık (kutup yıldızı)", "demirlen-"]
  },
  {
    id: "elma",
    madde: "elma",
    guncel: "elma / alma",
    harf: "E",
    ipa: "/el'mɑ/",
    tur: "İsim",
    protoKok: "*almïla / *alma (Proto-Türkçe: elma meyvesi)",
    kokAciklama: "Kökü *al (kırmızı) rengine dayanır; 'kızıl meyve' anlamındadır. Batı Türkçesinde ilk hecedeki a > e incelmesiyle elma olmuştur.",
    hasanErenNotu: "Hasan Eren (TDES, s. 132): 'Eski Türkçede alma/almıla. Kazakça alma, Kırgızca alma. Macarcaya alma biçiminde Türkçeden geçmiştir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe almıla/alma 'kırmızı meyve'. DLT'de alma ve almıla şeklindedir.'",
    clausonNotu: "Clauson (EDPT, s. 147): 'almıla:/alma: Apple. Loanword to Hungarian (alma).'",
    ilkTanikliklar: [
      { yil: "MS 1074", eser: "Dīwānu L̠ugāt it-Turk", alinti: "Alma / Almıla: Elma meyvesi.", anlam: "Elma" },
      { yil: "MS 1303", eser: "Codex Cumanicus", alinti: "Alma: Pomum.", anlam: "Elma" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "alma", anlam: "meyvə" },
      { dil: "Macarca (Alıntı)", kelime: "alma", anlam: "elma" },
      { dil: "Kazakça", kelime: "alma (алма)", anlam: "Almatı şehri adı buradan gelir" },
      { dil: "İngilizce (Çeviri)", kelime: "apple", anlam: "fruit" },
      { dil: "Almanca (Çeviri)", kelime: "Apfel", anlam: "Frucht" },
      { dil: "Rusça (Çeviri)", kelime: "яблоко", anlam: "фрукт" }
    ],
    turevler: ["Kızıl Elma (ideal, mefkûre)", "elmalık (bahçe)"]
  },
  {
    id: "gönül",
    madde: "gönül",
    guncel: "gönül / köngül / yürek",
    harf: "G",
    ipa: "/ɡø'nyl/",
    tur: "İsim",
    protoKok: "*kȫŋül (Proto-Türkçe: kalp, iç dünya, his, akıl)",
    kokAciklama: "Eski Türkçe köŋül biçimindedir. Nazal n (ñ) sesinin erimesiyle Batı Türkçesinde gönül olmuştur. Eski metinlerde hem duygu (kalp) hem de akıl/hafıza karşılığı olarak kullanılmıştır.",
    hasanErenNotu: "Hasan Eren (TDES, s. 165): 'Eski Türkçede köŋül. Moğolca köŋgül (hafiflik, iç) ile paraleldir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe köŋül 'kalp, zihin, duygu dünyası'. Orhun Yazıtlarında yer alır.'",
    clausonNotu: "Clauson (EDPT, s. 731): 'köŋül: The heart as the seat of emotions and intellect; mind, affection.'",
    ilkTanikliklar: [
      { yil: "MS 732", eser: "Kül Tigin Yazıtı", alinti: "Köŋültegi sabımın ururtum...", anlam: "Gönlümdeki sözlerimi yazdım..." },
      { yil: "MS 1069", eser: "Kutadgu Bilig", alinti: "Köŋül kimde bolsa uçar ol köke...", anlam: "Gönül ve irade" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "könül / könlüm", anlam: "ürək, qəlb" },
      { dil: "Kazakça", kelime: "köŋil (көңіл)", anlam: "ruh hâli, niyet" },
      { dil: "Özbekçe", kelime: "ko'ngil (кўнгил)", anlam: "qalb" },
      { dil: "İngilizce (Çeviri)", kelime: "heart, soul, inner emotion", anlam: "spirit" },
      { dil: "Almanca (Çeviri)", kelime: "Herz, Gemüt, Seele", anlam: "Gefühl" },
      { dil: "Rusça (Çeviri)", kelime: "душа, сердце", anlam: "настроение" }
    ],
    turevler: ["gönüllü", "gönülsüz", "gönüldaş"]
  },
  {
    id: "kut",
    madde: "kut",
    guncel: "kut / kutlu / kutlama",
    harf: "K",
    ipa: "/qut/",
    tur: "İsim",
    protoKok: "*qut (Proto-Türkçe: yaşam cevheri, can, ilahi talih)",
    kokAciklama: "Eski Türk devlet felsefesinde Tanrı tarafından hükümdara bahşedilen yönetme yetkisi ve hayat enerjisidir.",
    hasanErenNotu: "Hasan Eren (TDES, s. 267): 'Kut sözcüğü Türkçede en derin anlam katmanlarına sahip kavramlardandır. Moğolca kutuğ ile kökteştir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe kut 'ruh, can, talih, saadet'.'",
    clausonNotu: "Clauson (EDPT, s. 594): 'qut: The favor of heaven, good fortune, charisma; vital force.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Bilge Kağan Yazıtı", alinti: "Kutum bar üçün kağan olurtum.", anlam: "Kutum olduğu için kağan oturdum." },
      { yil: "MS 1069", eser: "Kutadgu Bilig", alinti: "Kutadgu Bilig: Kut Veren Bilgi.", anlam: "Saadet bilgisi" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "qutlu / qut", anlam: "mübarək" },
      { dil: "Kazakça", kelime: "qut (құт)", anlam: "bereket" },
      { dil: "Moğolca", kelime: "hutug (хутаг)", anlam: "kutsallık" },
      { dil: "İngilizce (Çeviri)", kelime: "divine grace, blessing", anlam: "charisma" },
      { dil: "Almanca (Çeviri)", kelime: "Himmelsgnade, Segen", anlam: "Heil" },
      { dil: "Rusça (Çeviri)", kelime: "благодать, счастье", anlam: "священная сила" }
    ],
    turevler: ["kutlu", "kutsuz", "kutla-", "kutsal"]
  },
  {
    id: "ogren-",
    madde: "öğren-",
    guncel: "öğrenmek / öğüt / ög",
    harf: "Ö",
    ipa: "/œː.ɾen-/",
    tur: "Fiil",
    protoKok: "*ög (Proto-Türkçe: akıl, zihin, şuur)",
    kokAciklama: "Eski Türkçe ög (akıl, zihin) isminden ögre- (alıştırmak, belletmek) ve dönüşlü ekiyle ögren- (kendi zihnine yerleştirmek) şeklinde türemiştir.",
    hasanErenNotu: "Hasan Eren (TDES, s. 318): 'Eski Türkçe ög 'akıl' kökünden gelir. ögret-, ögüt, öglen- sözcükleriyle aynı morfolojik ailedendir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe ög 'akıl, zeka' kökünden türemiştir. Orhun Yazıtlarında ögsüz 'akılsız, yetim' olarak geçer.'",
    clausonNotu: "Clauson (EDPT, s. 113): 'ögren-: To learn, to become accustomed; reflexive from ögre:-.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Tonyukuk Yazıtı", alinti: "Ögredip... (Öğreterek, alıştırarak...)", anlam: "Talim etmek" },
      { yil: "MS 1074", eser: "DLT", alinti: "Ol bitig ögrendi: O yazı/kitap öğrendi.", anlam: "Öğrenmek" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "öyrənmək / öyüd", anlam: "təhsil almaq" },
      { dil: "Kazakça", kelime: "üyrenu (үйрену)", anlam: "öğrenmek" },
      { dil: "Özbekçe", kelime: "o'rganmoq", anlam: "idrok etmoq" },
      { dil: "İngilizce (Çeviri)", kelime: "to learn, acquire knowledge", anlam: "study" },
      { dil: "Almanca (Çeviri)", kelime: "lernen, sich aneignen", anlam: "erfahren" },
      { dil: "Rusça (Çeviri)", kelime: "учиться, изучать", anlam: "постигать" }
    ],
    turevler: ["öğrenci (talebe)", "öğretmen (muallim)", "öğreti (doktrin)", "öğüt (nasihat)"]
  },
  {
    id: "sev-",
    madde: "sev-",
    guncel: "sevmek / sevgi / sevdâ",
    harf: "S",
    ipa: "/sev-/",
    tur: "Fiil",
    protoKok: "*seb- (Proto-Türkçe: sevmek, okşamak, meyletmek)",
    kokAciklama: "Eski Türkçede *seb- biçimindedir. B > V ses değişimiyle Türkiye ve Azerbaycan sahasında sev- şeklini almıştır.",
    hasanErenNotu: "Hasan Eren (TDES, s. 364): 'Eski Türkçe seb- fiilinden gelir. DLT'de sevmek ve okşamak olarak kayıtlıdır.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe seb- 'muhabbet beslemek, hoşlanmak'. 8. yüzyıldan itibaren sabittir.'",
    clausonNotu: "Clauson (EDPT, s. 783): 'sew-: (originally seb-) To love, like, caress.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Orhun Yazıtları", alinti: "Sebdügüm üçün...", anlam: "Sevdiğim için..." },
      { yil: "MS 1074", eser: "DLT", alinti: "Ol anı sevdi.", anlam: "Muhabbet etmek" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "sevmək / sevgi", anlam: "aşiq olmaq" },
      { dil: "Kazakça", kelime: "süyu (сүю)", anlam: "sevmek" },
      { dil: "İngilizce (Çeviri)", kelime: "to love, cherish", anlam: "affection" },
      { dil: "Almanca (Çeviri)", kelime: "lieben, gernhaben", anlam: "Zuneigung" },
      { dil: "Rusça (Çeviri)", kelime: "любить, обожать", anlam: "любовь" }
    ],
    turevler: ["sevgi", "sevgili", "sevecen", "sevi"]
  },
  {
    id: "tengri",
    madde: "tengri",
    guncel: "tanrı / tengri",
    harf: "T",
    ipa: "/teŋ.ɾi/",
    tur: "Özel İsim / İsim",
    protoKok: "*teŋri / *taŋïr (Proto-Altayik: gök, ilah)",
    kokAciklama: "Eski Türkçe teŋri biçimi hem fiziksel gök kubbeyi hem de ilahı karşılar.",
    hasanErenNotu: "Hasan Eren (TDES, s. 396): 'Türk dilinin en eski kutsal sözcüğüdür. Moğolca tenger ile ortaktır.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe teŋri 'gök, ilah'.'",
    clausonNotu: "Clauson (EDPT, s. 523): 'teŋri: The sky, god of the sky, deity.'",
    ilkTanikliklar: [
      { yil: "MS 732", eser: "Kül Tigin Yazıtı", alinti: "Üze kök teŋri...", anlam: "Üstte mavi gök..." }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "tanrı / tengri", anlam: "yaradan" },
      { dil: "Moğolca", kelime: "tenger (тэнгэр)", anlam: "gök, tanrı" },
      { dil: "İngilizce (Çeviri)", kelime: "sky god, deity", anlam: "God" },
      { dil: "Almanca (Çeviri)", kelime: "Himmelsgott", anlam: "Gottheit" },
      { dil: "Rusça (Çeviri)", kelime: "Тенгри", anlam: "божество" }
    ],
    turevler: ["tengridaş", "tengriken"]
  },
  {
    id: "ulus",
    madde: "ulus",
    guncel: "ulus / millet / il",
    harf: "U",
    ipa: "/u'ɫus/",
    tur: "İsim",
    protoKok: "*uluš (Proto-Türkçe: ülke, halk, boy birliği)",
    kokAciklama: "Eski Uygurca ve Karahanlı metinlerinde 'ülke, şehir, halk' anlamında yaygındır. Cengiz Han döneminde hanedan üyelerine paylaştırılan topraklara (Cuci Ulusu, Çağatay Ulusu) ad olmuştur.",
    hasanErenNotu: "Hasan Eren (TDES, s. 422): 'Eski Türkçede ulus 'ülke, halk'. Moğolcaya uls biçiminde geçmiş ve oradan tekrar bütün Avrasya sahasına yayılmıştır.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe ulus 'ülke, vilayet, kavim'. Cumhuriyet döneminde millet karşılığı olarak canlandırılmıştır.'",
    clausonNotu: "Clauson (EDPT, s. 152): 'uluş: (1) A country, realm, province; (2) a people, nation.'",
    ilkTanikliklar: [
      { yil: "MS 1069", eser: "Kutadgu Bilig", alinti: "Ulus begleri... (Ülke beyleri...)", anlam: "Memleket, halk" },
      { yil: "MS 1074", eser: "DLT", alinti: "Uluş: Köy, belde ve ülke.", anlam: "Yurt" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "ulus / millət", anlam: "xalq" },
      { dil: "Moğolca", kelime: "uls (улс)", anlam: "devlet, millet" },
      { dil: "Kazakça", kelime: "ulıs (ұлыс)", anlam: "büyük halk, yurt" },
      { dil: "İngilizce (Çeviri)", kelime: "nation, people, realm", anlam: "country" },
      { dil: "Almanca (Çeviri)", kelime: "Nation, Volk, Reich", anlam: "Staat" },
      { dil: "Rusça (Çeviri)", kelime: "нация, народ, улус", anlam: "государство" }
    ],
    turevler: ["ulusal (milli)", "uluslararası (beynelmilel)", "ulusçuluk"]
  },
  {
    id: "yurt",
    madde: "yurt",
    guncel: "yurt / vatan / çadır",
    harf: "Y",
    ipa: "/juɾt/",
    tur: "İsim",
    protoKok: "*jūrt (Proto-Türkçe: konak yeri, oba, yurt)",
    kokAciklama: "İlk anlamı göçebelerin çadır kurduğu veya göçtükten sonra geride kalan ocak yeridir.",
    hasanErenNotu: "Hasan Eren (TDES, s. 452): 'Eski Türkçede yurt. Moğolcaya jurte olarak geçmiştir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe yurt 'konak yeri, terkedilmiş ordugâh'.'",
    clausonNotu: "Clauson (EDPT, s. 958): 'yurt: An abandoned camping site; homeland, dwelling place.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Tonyukuk Yazıtı", alinti: "Yurtda kalmışı yığıp...", anlam: "Yurtta kalanları toplayıp..." }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "yurd", anlam: "vətən" },
      { dil: "Kırgızca", kelime: "jurt (журт)", anlam: "vatan, oba" },
      { dil: "İngilizce (Çeviri)", kelime: "homeland, yurt", anlam: "dwelling" },
      { dil: "Almanca (Çeviri)", kelime: "Heimat, Jurte", anlam: "Vaterland" },
      { dil: "Rusça (Çeviri)", kelime: "родина, юрта", anlam: "отчизна" }
    ],
    turevler: ["yurttaş", "yurtluk"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { comprehensiveCorpus };
}
