/**
 * Bitigey Sözlük — Karşılaştırmalı Etimolojik Külliyat Veritabanı
 * Kaynaklar:
 * 1. Prof. Dr. Hasan Eren, Türk Dilinin Etimolojik Sözlüğü (TDES), Ankara.
 * 2. Sevan Nişanyan, Nişanyan Sözlük (Çağdaş Türkçenin Etimolojisi).
 * 3. Sir Gerard Clauson, An Etymological Dictionary of Pre-Thirteenth-Century Turkish (EDPT), Oxford.
 * 4. Kâşgarlı Mahmud, Dīwānu L̠ugāt it-Turk (DLT), MS 1074.
 * 5. Orhun & Eski Uygur Külliyatı (Tonyukuk, Kül Tigin, Bilge Kağan, Irk Bitig).
 */

const comprehensiveCorpus = [
  {
    id: "bitig",
    madde: "bitig",
    guncel: "betik / bitik / kitap",
    ipa: "/bi.tiɡ/",
    tur: "İsim",
    protoKok: "*biti- (Proto-Türkçe: kazımak, nakşetmek, yazmak)",
    kokAciklama: "Eski Türkçe *biti- (yazmak, kazımak) kökünden +(I)g ekiyle türetilmiştir. Hasan Eren ve Gerard Clauson'a göre sözcüğün kökü çok erken dönemde Çince bǐt (fırça, yazı aleti) ile temas etmiş ve Türkçede işlek bir fiil gövdesine dönüşmüştür.",
    hasanErenNotu: "Hasan Eren (TDES, s. 46): 'Eski Türkçede bitig biçiminde geçer. Uygurca ve Karahanlı metinlerinde yaygındır. Çuvaşça pĭtĭk, Hakasça pizik, Tuvaça bižik biçimleriyle Altay dillerine kadar uzanır.'",
    nisanyanNotu: "Nişanyan: 'İlk kayıt Orhun Yazıtları (735). Eski Türkçe biti- eyleminden türetilmiştir. Cumhuriyet döneminde betik olarak canlandırılmıştır.'",
    clausonNotu: "Clauson (EDPT, s. 299): 'bitig (d) noun from biti:-; anything written, a book, document, letter, inscription.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Orhun Yazıtları (Kül Tigin & Tonyukuk)", alinti: "Bunça bitig bitigme...", anlam: "Yazıt, kitabe, anıt yazısı" },
      { yil: "MS 1074", eser: "Kâşgarlı Mahmud, DLT", alinti: "Bitig: Kitap, risale ve mektup.", anlam: "Yazılı risale ve nüsha" },
      { yil: "MS 1303", eser: "Codex Cumanicus (Kıpçakça)", alinti: "Bitik: Yazı, mukavele, senet.", anlam: "Yazılı belge" },
      { yil: "MS 1935", eser: "TDK Tarama Sözlüğü", alinti: "Betik: Kitap.", anlam: "Öz Türkçe karşılık" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "bitik / bətig", anlam: "yazı, kitabə" },
      { dil: "Kazakça", kelime: "bitik (бітік)", anlam: "tarihî yazı, tamga" },
      { dil: "Özbekçe", kelime: "bitik (битик)", anlam: "kitabe, mektup" },
      { dil: "Tuva Türkçesi", kelime: "bižik (бижик)", anlam: "yazı, mektup" },
      { dil: "Çuvaşça", kelime: "pĭtĭk (пытак)", anlam: "yazılı belge" },
      { dil: "İngilizce (Çeviri)", kelime: "inscription, scripture, book", anlam: "written monument" },
      { dil: "Almanca (Çeviri)", kelime: "Inschrift, Schriftstück, Buch", anlam: "Textdokument" },
      { dil: "Rusça (Çeviri)", kelime: "надпись, письмена, книга", anlam: "рунический текст" }
    ],
    turevler: ["bitigçi (yazman, katip)", "bitiglik (kütüphane, arşiv)", "bitil- (yazılmak)", "bitigü (kalem)"]
  },
  {
    id: "tengri",
    madde: "tengri",
    guncel: "tanrı / tengri",
    ipa: "/teŋ.ɾi/",
    tur: "Özel İsim / İsim",
    protoKok: "*teŋri / *taŋïr (Proto-Altayik: gök, ilah, gök kubbe)",
    kokAciklama: "Eski Türkçe teŋri biçimi hem fiziksel 'gök kubbe' hem de yaratıcı 'ulu varlık/ilah' anlamını taşır. Sümerce dingir (tanrı/gök) ile ilişkisi karşılaştırmalı filolojide uzun süre tartışılmıştır.",
    hasanErenNotu: "Hasan Eren (TDES, s. 396): 'Türk dilinin en eski ve en kutsal sözcüklerindendir. Moğolca tengeri/tenger, Mançuca tengri biçimleriyle ortaktır. Karahanlı ve Harezm Türkçesinde tñri/tanrı biçimine evrilmiştir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe teŋri 'gök, gökyüzü, ilah'. Orhun Yazıtlarında (732) üze kök teŋri biçiminde geçer.'",
    clausonNotu: "Clauson (EDPT, s. 523): 'teŋri: The primary meaning is 'sky', hence 'the god of the sky', and generally 'god, deity'.' ",
    ilkTanikliklar: [
      { yil: "MS 732", eser: "Kül Tigin Yazıtı", alinti: "Üze kök teŋri asra yağız yer kılıntukda...", anlam: "Üstte mavi gök, altta yağız yer kılındığında..." },
      { yil: "MS 1069", eser: "Yusuf Has Hacib, Kutadgu Bilig", alinti: "Bayat atı birle sözüg başladım, Törütgen igidgen keçürgen idim.", anlam: "Tanrı adı ile söze başladım..." },
      { yil: "MS 1074", eser: "Kâşgarlı Mahmud, DLT", alinti: "Teŋri: Yüce Allah. Kafirler göğe de tengri der.", anlam: "Gök kubbe ve ilah" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "tanrı / tengri", anlam: "uca yaradan" },
      { dil: "Türkmence", kelime: "taňry", anlam: "hudaý, taňry" },
      { dil: "Moğolca", kelime: "tenger (тэнгэр)", anlam: "gök, tanrı" },
      { dil: "Yakutça (Saha)", kelime: "taŋara (таҥара)", anlam: "tanrı, gök" },
      { dil: "İngilizce (Çeviri)", kelime: "deity, sky god, supreme God", anlam: "celestial god" },
      { dil: "Almanca (Çeviri)", kelime: "Himmelsgott, Gottheit", anlam: "Gott" },
      { dil: "Rusça (Çeviri)", kelime: "Тенгри, божество неба", anlam: "верховный бог" }
    ],
    turevler: ["tengridaş (aynı inançtan olan)", "tengriken (kutlu, ilahi hakan)"]
  },
  {
    id: "kut",
    madde: "kut",
    guncel: "kut / kutlu / kutlama",
    ipa: "/qut/",
    tur: "İsim",
    protoKok: "*qut (Proto-Türkçe: yaşam cevheri, can, ilahi talih)",
    kokAciklama: "Eski Türk devlet felsefesinde Tanrı tarafından hükümdara bahşedilen yönetme yetkisi ve hayat enerjisidir. Daha sonra 'uğur, saadet, bereket' semantik genişlemesine uğramıştır.",
    hasanErenNotu: "Hasan Eren (TDES, s. 267): 'Kut sözcüğü Türkçede en derin anlam katmanlarına sahip kavramlardandır. Moğolca kutuğ (kutsallık), Mançuca hutu ile kökteştir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe kut 'ruh, can, talih, saadet'. Kutadgu Bilig eseri adını buradan alır.'",
    clausonNotu: "Clauson (EDPT, s. 594): 'qut: (1) The favor of heaven, good fortune, charisma; (2) vital force, soul.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Bilge Kağan Yazıtı", alinti: "Teŋri yarılkaduq üçün, kutum bar üçün kağan olurtum.", anlam: "Tanrı buyurduğu için, kutum olduğu için kağan oturdum." },
      { yil: "MS 1069", eser: "Kutadgu Bilig", alinti: "Kitab atı urdum Kutadgu Bilig, Kutadsu okıglıka tutsu elig.", anlam: "Kitabın adını Kut Veren Bilgi koydum..." }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "qutlu / qut", anlam: "mübarək, uğurlu" },
      { dil: "Kazakça", kelime: "qut (құт)", anlam: "bereketi, qutty" },
      { dil: "Kırgızca", kelime: "kut (кут)", anlam: "bereket, talih" },
      { dil: "Moğolca", kelime: "hutug (хутаг)", anlam: "kutsallık, saadet" },
      { dil: "İngilizce (Çeviri)", kelime: "divine grace, heavenly fortune", anlam: "charismatic authority" },
      { dil: "Almanca (Çeviri)", kelime: "Himmelsgnade, Segen", anlam: "Heil, Lebenskraft" },
      { dil: "Rusça (Çeviri)", kelime: "благодать, счастье", anlam: "священная сила" }
    ],
    turevler: ["kutlu (mübarek)", "kutsuz (uğursuz, talihsiz)", "kutsa- (kutsamak)", "kutad- (kutlu olmak)"]
  },
  {
    id: "yurt",
    madde: "yurt",
    guncel: "yurt / vatan / çadır",
    ipa: "/juɾt/",
    tur: "İsim",
    protoKok: "*jūrt (Proto-Türkçe: konak yeri, oba, terk edilen ordugâh)",
    kokAciklama: "İlk anlamı göçebelerin çadır kurduğu veya göç ettikten sonra geride kalan ocak yeridir. Zamanla 'vatan, memleket ve keçe çadır' anlamlarını kazanmıştır.",
    hasanErenNotu: "Hasan Eren (TDES, s. 452): 'Eski Türkçede yurt olarak geçer. Moğolcaya jurte biçiminde geçmiş, oradan da Rusça ve Batı dillerine (jurte/yurt) aktarılmıştır.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe yurt 'konak yeri, terkedilmiş ordugâh'. DLT ve Orhun Yazıtlarında mevcuttur.'",
    clausonNotu: "Clauson (EDPT, s. 958): 'yurt: (1) An abandoned camping site; (2) homeland, country, dwelling place.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Tonyukuk Yazıtı", alinti: "Yurtda kalmışı yığıp birikdirdim...", anlam: "Yurtta/obada kalanları toplayıp birleştirdim." },
      { yil: "MS 1074", eser: "Dīwānu L̠ugāt it-Turk", alinti: "Yurt: Terk edilmiş konak yeri ve memleket.", anlam: "Oba ve konak mahalli" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "yurd", anlam: "vətən, oba" },
      { dil: "Kırgızca", kelime: "jurt (журт)", anlam: "halk, vatan, oba" },
      { dil: "Kazakça", kelime: "jurt (жұрт)", anlam: "halk, el, memleket" },
      { dil: "İngilizce (Çeviri)", kelime: "homeland, yurt (circular tent)", anlam: "dwelling, country" },
      { dil: "Almanca (Çeviri)", kelime: "Heimat, Vaterland, Jurte", anlam: "Zelt, Heimatland" },
      { dil: "Rusça (Çeviri)", kelime: "юрта, родина, отчизна", anlam: "кочевое жилище" }
    ],
    turevler: ["yurttaş (vatandaş)", "yurtluk (arazi, tımar)", "yurtlan- (yurt edinmek)"]
  },
  {
    id: "bil-",
    madde: "bil-",
    guncel: "bilmek / bilgi / bilge",
    ipa: "/bil-/",
    tur: "Fiil",
    protoKok: "*bēl- / *bil- (Proto-Türkçe: idrak etmek, tanımak, kavramak)",
    kokAciklama: "Türkçenin en köklü zihinsel fiilidir. Bütün çağdaş Türk yazı dillerinde ve tarihsel lehçelerde ses değişimine uğramadan varlığını korumuştur.",
    hasanErenNotu: "Hasan Eren (TDES, s. 54): 'bil- fiili bütün Türk lehçelerinde ortaktır. Çuvaşça pĕl-, Yakutça bil- biçimindedir. bilgi, bilge, bilig, bildik gibi çok zengin türevleri vardır.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe bil- 'zihnen kavramak, tanımak'. Orhun Yazıtlarında bilge kağan unvanında geçer.'",
    clausonNotu: "Clauson (EDPT, s. 330): 'bil-: To know, understand, recognize. Extremely common in all Turkic languages from the earliest times.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Kül Tigin Yazıtı", alinti: "Bilge kağan ermiş, alp kağan ermiş...", anlam: "Bilgili kağan imiş, cesur kağan imiş..." },
      { yil: "MS 1074", eser: "Dīwānu L̠ugāt it-Turk", alinti: "Ol anı bildi: O onu bildi, tanıdı.", anlam: "Bilişmek, tanımak" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "bilmək / bilgi", anlam: "öyrənmək, anlamaq" },
      { dil: "Kazakça", kelime: "bilu (білу)", anlam: "tanımaq, bılgi" },
      { dil: "Özbekçe", kelime: "bilmoq (билмоқ)", anlam: "idrok etmoq" },
      { dil: "Çuvaşça", kelime: "pĕl- (пӗл)", anlam: "bilmek, öğrenmek" },
      { dil: "İngilizce (Çeviri)", kelime: "to know, understand", anlam: "knowledge, wise" },
      { dil: "Almanca (Çeviri)", kelime: "wissen, kennen", anlam: "verstehen, Wissen" },
      { dil: "Rusça (Çeviri)", kelime: "знать, ведать", anlam: "понимать, знание" }
    ],
    turevler: ["bilge (filozof, alim)", "bilgi (ilim, data)", "bilim (ilim dalı)", "bilinç (şuur)", "bildiri (tebliğ)"]
  },
  {
    id: "erdem",
    madde: "erdem",
    guncel: "erdem / erdemli",
    ipa: "/eɾ.dem/",
    tur: "İsim",
    protoKok: "*er (Proto-Türkçe: adam, yiğit, insan) + -dem (nitelik eki)",
    kokAciklama: "*er (erkek, insan, yiğit) köküne isimden isim türeten +dem ekinin gelmesiyle oluşmuştur. Asıl anlamı 'yiğitlik, mertlik, hüner' iken İslami dönemde 'fazilet, ahlaki üstünlük' anlamına evrilmiştir.",
    hasanErenNotu: "Hasan Eren (TDES, s. 142): 'Eski Türkçede erdem 'yiğitlik ve hüner' anlamındadır. Kutadgu Bilig'de ahlaki fazilet anlamında kullanılmıştır.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe er 'insan, yiğit' kökünden +dem ekiyle türemiştir. Moğolcaya erdem (bilgi, fazilet) olarak geçmiştir.'",
    clausonNotu: "Clauson (EDPT, s. 223): 'erdem: (1) Manliness, courage, virtue; (2) skill, accomplishment, knowledge.'",
    ilkTanikliklar: [
      { yil: "MS 732", eser: "Kül Tigin Yazıtı", alinti: "Alp erin, erdemin üçün... (Cesur adamları, yiğitlikleri için...)", anlam: "Yiğitlik, cesaret, fazilet" },
      { yil: "MS 1069", eser: "Kutadgu Bilig", alinti: "Ukuş kadrini hem biligsiz bilür, Erdem kadrini hem edepsiz bilür.", anlam: "Erdemin değerini bilmek" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "ərdəm / fəzilət", anlam: "əxlaqi ucalıq" },
      { dil: "Moğolca", kelime: "erdem (эрдэм)", anlam: "bilgi, ilim, fazilet" },
      { dil: "Kazakça", kelime: "erlik / erdem", anlam: "yiğitlik, marifat" },
      { dil: "İngilizce (Çeviri)", kelime: "virtue, merit, prowess", anlam: "moral excellence" },
      { dil: "Almanca (Çeviri)", kelime: "Tugend, Rechtschaffenheit", anlam: "Moral, Wert" },
      { dil: "Rusça (Çeviri)", kelime: "добродетель, доблесть", anlam: "мужество, достоинство" }
    ],
    turevler: ["erdemli (faziletli)", "erdemsiz (ahlaksız)", "erdemlilik"]
  },
  {
    id: "sev-",
    madde: "sev-",
    guncel: "sevmek / sevgi / sevdâ",
    ipa: "/sev-/",
    tur: "Fiil",
    protoKok: "*seb- (Proto-Türkçe: sevmek, okşamak, meyletmek)",
    kokAciklama: "Eski Türkçede *seb- biçimindedir. B ve V ses değişimiyle Türkiye ve Azerbaycan Türkçesinde sev- şeklini almıştır. Sibirya ve Kıpçak grubunda söy- veya süy- varyantları yaşar.",
    hasanErenNotu: "Hasan Eren (TDES, s. 364): 'Eski Türkçe seb- fiilinden gelir. DLT'de sevmek ve okşamak olarak kayıtlıdır. Kıpçakçada süy-, Çuvaşçada sav- şeklindedir.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe seb- 'muhabbet beslemek, hoşlanmak'. 8. yüzyıldan itibaren bütün yazıt ve metinlerde sabittir.'",
    clausonNotu: "Clauson (EDPT, s. 783): 'sew-: (originally seb-) To love, like, caress. Very ancient common Turkic root.'",
    ilkTanikliklar: [
      { yil: "MS 735", eser: "Orhun Yazıtları (Tonyukuk)", alinti: "Sebdügüm üçün... (Sevdiğim için...)", anlam: "Muhabbet beslemek" },
      { yil: "MS 1074", eser: "Dīwānu L̠ugāt it-Turk", alinti: "Ol anı sevdi: O onu sevdi.", anlam: "Sevgi beslemek" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "sevmək / sevgi", anlam: "aşiq olmaq, bəyənmək" },
      { dil: "Kazakça", kelime: "süyu (сүю) / süyispenşilik", anlam: "sevmek" },
      { dil: "Özbekçe", kelime: "sevmoq (севмоқ)", anlam: "muhabbat qo'ymoq" },
      { dil: "Çuvaşça", kelime: "sav- (сав)", anlam: "sevmek, sevinmek" },
      { dil: "İngilizce (Çeviri)", kelime: "to love, cherish", anlam: "affection, love" },
      { dil: "Almanca (Çeviri)", kelime: "lieben, gernhaben", anlam: "Zuneigung" },
      { dil: "Rusça (Çeviri)", kelime: "любить, обожать", anlam: "любовь" }
    ],
    turevler: ["sevgi (muhabbet)", "sevgili (maşuk)", "sevecen (müşfik)", "sevi (aşk)"]
  },
  {
    id: "gönül",
    madde: "gönül",
    guncel: "gönül / köngül / yürek",
    ipa: "/ɡø'nyl/",
    tur: "İsim",
    protoKok: "*kȫŋül (Proto-Türkçe: kalp, iç dünya, his, akıl)",
    kokAciklama: "Eski Türkçe köŋül biçimindedir. Nazal n (ñ) sesinin erimesiyle Batı Türkçesinde gönül olmuştur. Eski metinlerde hem duygu (kalp) hem de akıl/hafıza karşılığı olarak kullanılmıştır.",
    hasanErenNotu: "Hasan Eren (TDES, s. 165): 'Eski Türkçede köŋül. Moğolca köŋgül (hafiflik, iç) ile paraleldir. Kâşgarlı Mahmud'da gönül, yürek ve arzu anlamlarındadır.'",
    nisanyanNotu: "Nişanyan: 'Eski Türkçe köŋül 'kalp, zihin, duygu dünyası'. Orhun Yazıtlarında yer alır.'",
    clausonNotu: "Clauson (EDPT, s. 731): 'köŋül: (1) The heart as the seat of emotions and intellect; mind, thought, affection.'",
    ilkTanikliklar: [
      { yil: "MS 732", eser: "Kül Tigin Yazıtı", alinti: "Köŋültegi sabımın ururtum... (Gönlümdeki sözlerimi vurdum/yazdım...)", anlam: "İç dünya, zihin, his" },
      { yil: "MS 1069", eser: "Kutadgu Bilig", alinti: "Köŋül kimde bolsa uçar ol köke... (Kimin gönlü/iradesi olursa o göğe uçar...)", anlam: "Aşk ve irade" }
    ],
    akrabaDiller: [
      { dil: "Azerbaycanca", kelime: "könül / könlüm", anlam: "ürək, qəlb" },
      { dil: "Kazakça", kelime: "köŋil (көңіл)", anlam: "ruh hâli, niyet" },
      { dil: "Özbekçe", kelime: "ko'ngil (кўнгил)", anlam: "dil, qalb" },
      { dil: "İngilizce (Çeviri)", kelime: "heart, soul, desire", anlam: "inner emotional spirit" },
      { dil: "Almanca (Çeviri)", kelime: "Herz, Gemüt, Seele", anlam: "Gefühlswelt" },
      { dil: "Rusça (Çeviri)", kelime: "душа, сердце, настроение", anlam: "внутренний мир" }
    ],
    turevler: ["gönüllü (istekli)", "gönülsüz (isteksiz)", "gönüldaş (aynı hissi paylaşan)"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { comprehensiveCorpus };
}
