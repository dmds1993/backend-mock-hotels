var express     = require('express');
var router      = express.Router();

router.get('/', function(req, res, next) {
  res.json(branches);
});

router.get('/:branch_id/agencies', function(req, res, next) {
  if (req.params.branch_id === "7843") {
      res.json({})
  } else {
	   res.json(agencies);
  }
});


module.exports = router;

var branches = {
   "branches":[
      {
         "cvcbranchId":5866,
         "personCode":22617141,
         "name":"Weh iha ukalaog si wok.",
         "shortName":"Hathe duw wa luzwughe ifdu.",
         "tradingName":"Noate kon sabmef uma buzohnur.",
         "abbreviation":"LlokiboL",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"lCTkVfQo!aPPD$@7Av"
         }
      },
      {
         "cvcbranchId":7843,
         "personCode":32901378,
         "name":"Essa filial não tem agência",
         "shortName":"Kekzizkan ugmusgi ule gulawje kuzimoga.",
         "tradingName":"Toba hufudu siedu duwaci wu.",
         "abbreviation":"&5&9LSae*67jWEzr",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"4P!g8fKW&4NIc02fL"
         }
      },
      {
         "cvcbranchId":4006,
         "personCode":66945289,
         "name":"Faunu buvfehgoj lum nagcepzes zepekzu.",
         "shortName":"Mupvaat cudjir ab popamhu husede.",
         "tradingName":"Nibpu ro ba apejuce zestamvud.",
         "abbreviation":"M80GX",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"z&xxtu%BoEpomY[3Y3[#"
         }
      },
      {
         "cvcbranchId":4082,
         "personCode":32788182,
         "name":"Ruru caj cuzejor aju ago.",
         "shortName":"Uso pup rub me nic.",
         "tradingName":"Vi enenuzi low epeupo toc.",
         "abbreviation":"4v54tzVzyYM@o!Ld",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"!vpo^MeV11jp"
         }
      },
      {
         "cvcbranchId":8476,
         "personCode":26400170,
         "name":"Dir fitvunit tantim kos ge.",
         "shortName":"Zajduv goza mecoloujo cos len.",
         "tradingName":"Zuago nekdubgu gin ode widakji.",
         "abbreviation":"8eWIHQ0]wJGV",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"E*JhcDV*bsufcpbn"
         }
      },
      {
         "cvcbranchId":5203,
         "personCode":33671500,
         "name":"Vap ova olbo ez nusosvo.",
         "shortName":"Uzojeaw apuozatoj feppa vi ot.",
         "tradingName":"Va bud gizsapav ormiji fofos.",
         "abbreviation":"QcgfJHKxs5]@A",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"mrrJ&v1%3L"
         }
      },
      {
         "cvcbranchId":6018,
         "personCode":74441848,
         "name":"To welnad urfise liwbiwduv kodojhiw.",
         "shortName":"Funehsa fuzhiko roapa vudisu nisvidej.",
         "tradingName":"Itgihcug segike ciob zo usozubse.",
         "abbreviation":"8myProBe43#pG[6K^2y",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"WbXFsyH]"
         }
      },
      {
         "cvcbranchId":2960,
         "personCode":61634194,
         "name":"Vuf tutbol lazlik oduhaf eggo.",
         "shortName":"Degfimutu fagta ro ivu lo.",
         "tradingName":"Mahpowko uducawaj ru ipci habah.",
         "abbreviation":"9qUYvQdqZh15Rccj",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"zyf#ftU&LdOD03"
         }
      },
      {
         "cvcbranchId":4592,
         "personCode":82383052,
         "name":"Rugrufufo agi toji kaliwki vaf.",
         "shortName":"Ewatifne itu wuavodad vowgup heg.",
         "tradingName":"Bicka vuw mawic sonepo pita.",
         "abbreviation":"azj!z$&#S89t@Yi)qq@A",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"WJkd941eDj@)sxVG#R"
         }
      },
      {
         "cvcbranchId":3981,
         "personCode":68600458,
         "name":"Iza nar cik duvef ekiibsu.",
         "shortName":"Dil hevro bihupar kasse zok.",
         "tradingName":"Ugiwonug urivarija desunoh wedfiucu vahleset.",
         "abbreviation":"WAQ$D4ji(Z5^7UlyPt",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"HqhS(NoLUen"
         }
      },
      {
         "cvcbranchId":6984,
         "personCode":73795859,
         "name":"Gu salkavzup azuko kopicoc bivot.",
         "shortName":"Mozujhi hewibe uki irorun robef.",
         "tradingName":"Con vesuc jagoej fiobicuv fud.",
         "abbreviation":"xIIccCg",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"Zn2Y(IAeAPnvhru3Z"
         }
      },
      {
         "cvcbranchId":5826,
         "personCode":48718750,
         "name":"Rub nu jasze eza kilo.",
         "shortName":"Guka lilji ca keka legaw.",
         "tradingName":"Zuzaro uksis vezuk kowman buz.",
         "abbreviation":"YS640hD3oV*c",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"vDtlWQhU)0[*]1PZ#o!"
         }
      },
      {
         "cvcbranchId":7253,
         "personCode":17678580,
         "name":"Unmec ehsajfec doj mewik ane.",
         "shortName":"Do uzlecof zipfav fijlet comiggan.",
         "tradingName":"Haan tedriduma daronof orbaeg ce.",
         "abbreviation":"0q3%qxw0",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"RyhjCb)vo3PVWM3t@"
         }
      },
      {
         "cvcbranchId":6972,
         "personCode":79699629,
         "name":"Evicore lotopak havgowso liep golakmav.",
         "shortName":"Zaz tuob tiluc ziz di.",
         "tradingName":"Cuc cigtil uv uji geurgig.",
         "abbreviation":"vDz9l6OkPv9n%*",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":")M&Ki*"
         }
      },
      {
         "cvcbranchId":7153,
         "personCode":45994379,
         "name":"Javidut hid dajrid ahojanuw sakzirem.",
         "shortName":"Vawta vohhos ic touh mirrup.",
         "tradingName":"Eki cabimrol tienu taeg jerne.",
         "abbreviation":"[FD*E4k",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"m2ywA"
         }
      },
      {
         "cvcbranchId":3569,
         "personCode":75319630,
         "name":"Gehuib ragawzil anuure atbuhho liw.",
         "shortName":"Limheje gusjolohi ne si kucupa.",
         "tradingName":"Mebtefwef peni nu ohosinu jik.",
         "abbreviation":"ekiw9v9g",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"bQ]5&9"
         }
      },
      {
         "cvcbranchId":8149,
         "personCode":28967550,
         "name":"Weh ojditi rukpe civ fi.",
         "shortName":"Reh gu dikhona cofdu mitvekub.",
         "tradingName":"Ewzin po ci dek na.",
         "abbreviation":"hSsRR&)151cD",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"jkUNUo"
         }
      },
      {
         "cvcbranchId":8821,
         "personCode":10338327,
         "name":"Bam tomukub ok fovfis oke.",
         "shortName":"Bi juwdar sakun zucojol nor.",
         "tradingName":"Ro dukef lihmalul perobotes etaina.",
         "abbreviation":"P&$mvId^k!a[lA",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"c8%tE"
         }
      },
      {
         "cvcbranchId":6448,
         "personCode":79117141,
         "name":"Zu la dusbojod wez ura.",
         "shortName":"Has kiaz niwokfo ipihli so.",
         "tradingName":"Ko ko wowe gemawzo vu.",
         "abbreviation":"vuZtn#5lrmJGTkYUCVy",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"cMLj][B3vV&0TE$jahUb"
         }
      },
      {
         "cvcbranchId":7805,
         "personCode":41866221,
         "name":"Zodluplo ucucib fohih idka se.",
         "shortName":"Biiru koika hod besait puev.",
         "tradingName":"Bilwahani vegteg racefub rorpazo suejo.",
         "abbreviation":"[5wpE9",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"8%MUd@]cByeFXJmVM6"
         }
      },
      {
         "cvcbranchId":5856,
         "personCode":77512686,
         "name":"Voros juroce tu antebo mo.",
         "shortName":"Vopji enu kozza kareufe pifsafem.",
         "tradingName":"Jutedrec jiaj egomunog zutvup ap.",
         "abbreviation":"eC]bCndkFVfygi!YVNL",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"A*1&dyZ6wXbWXa&vC"
         }
      },
      {
         "cvcbranchId":2141,
         "personCode":53713416,
         "name":"Teshe ceku daraawo ho jukachof.",
         "shortName":"Su ci epe hiwwi balacteb.",
         "tradingName":"Momtu eb ukorab zerin vamisu.",
         "abbreviation":"0cp)[H6oNala$z",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"sFn5Lq[nWtaLyF5C)SM"
         }
      },
      {
         "cvcbranchId":3717,
         "personCode":26730196,
         "name":"Edtinpu focev ol ez nuwledad.",
         "shortName":"Kit na cepfini epaema nedukak.",
         "tradingName":"Kace ibubeeme fut ko luive.",
         "abbreviation":"%4OlX3&W[7!JI3lC#",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"YF*SJ"
         }
      },
      {
         "cvcbranchId":8196,
         "personCode":27367982,
         "name":"Buptu al siblupevi ce ovukioli.",
         "shortName":"Ari hoev zowaego wuw av.",
         "tradingName":"Gauzajo ruzilap jifeva uvzo fi.",
         "abbreviation":"*$[3]5VSlL9S8gY",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"^CfdMaos6"
         }
      },
      {
         "cvcbranchId":7040,
         "personCode":82440596,
         "name":"Saffubew rupho viwcica zuforud pi.",
         "shortName":"Nir da dik niti rehutfer.",
         "tradingName":"Iniwi baf mepiece onwipi bi.",
         "abbreviation":"GIv#)",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"STMB1$uXig$]EPd1[[oX"
         }
      },
      {
         "cvcbranchId":3138,
         "personCode":47886673,
         "name":"Sah nezgen uwobac vi no.",
         "shortName":"Wumvetemi mar fiawpuj ajooz koiw.",
         "tradingName":"Idci ikeful nofjutru vigvonuv guarudat.",
         "abbreviation":"lKC1*FbP[xAkXJ%5zBc",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"L]Dlw9nc(k)!K"
         }
      },
      {
         "cvcbranchId":7915,
         "personCode":77566121,
         "name":"Rimbewvi jucih keov tadoz fu.",
         "shortName":"Baj ucobus ju siifi aduveup.",
         "tradingName":"Gumvutwut carjipev son uhogocwoc wushu.",
         "abbreviation":"pWyRT*xqN8yfC",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"C1#pxz*^kLYEHE5"
         }
      },
      {
         "cvcbranchId":7665,
         "personCode":57337556,
         "name":"Cir azonuj cul igfughar rad.",
         "shortName":"Jotidesor lespahud di doronil epuvi.",
         "tradingName":"Ja bukva puwnoow me tagiade.",
         "abbreviation":"GRSXJi!m57",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"7glDkSZEr#7Kvh[vl"
         }
      },
      {
         "cvcbranchId":5209,
         "personCode":42766983,
         "name":"Fiv tapufuv pomoc gek egekarer.",
         "shortName":"Ro feup sepbadi kasujod fofbi.",
         "tradingName":"Feroz bagpos bozkudi pehsuhtop achaide.",
         "abbreviation":"dBc0Bx@1wy",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"84i2Vb&C5O%rb&yD10SE"
         }
      },
      {
         "cvcbranchId":8104,
         "personCode":88505982,
         "name":"Vezala betu fepapbam tapkuhzin daz.",
         "shortName":"Gipesri urna eduwam mihu iv.",
         "tradingName":"Ejeru wemja walmucid bigojazo obgo.",
         "abbreviation":"O*1RuSOrL#e",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"z3XlKfy#p[zlKJO)qf)!"
         }
      },
      {
         "cvcbranchId":4584,
         "personCode":79914231,
         "name":"Ju jizro ivo sojletjoc la.",
         "shortName":"Umorawed deh cislor mumaba mi.",
         "tradingName":"Ogisul zuovtin divig vihka iwefiw.",
         "abbreviation":"We[IABZU(sj%0DK",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"Kv5X]rQUUnX"
         }
      },
      {
         "cvcbranchId":1191,
         "personCode":22271931,
         "name":"Jepvif owu fol wufvawig uv.",
         "shortName":"Ko adice gan jupe aj.",
         "tradingName":"Ekoli toezouta upwules bimu famzeftid.",
         "abbreviation":"qjA%h",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"QggysB^ES!"
         }
      },
      {
         "cvcbranchId":8707,
         "personCode":12606724,
         "name":"Fedpig tiawuceg paro zehwolec iwova.",
         "shortName":"De re numi woraz wo.",
         "tradingName":"Ca ajeijusew igalo bebbij ci.",
         "abbreviation":"bG(2I",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"w3bruv0fY)&NKf()HYk"
         }
      },
      {
         "cvcbranchId":6924,
         "personCode":67684468,
         "name":"Amgazodu ku fulbijo uzes ipal.",
         "shortName":"Hezhuphi mege lizcaw cedwap ibape.",
         "tradingName":"Umiomo tuluot founaid taepiwu pehpebpic.",
         "abbreviation":"1ert#M)nq",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"u(X59F"
         }
      },
      {
         "cvcbranchId":6842,
         "personCode":22369945,
         "name":"Vizerim mu wiapiwe icuim fapre.",
         "shortName":"Tiejva paw eswi dawkag rivajuabu.",
         "tradingName":"Ciwrenom wuje vinwe lefu ewot.",
         "abbreviation":"8YQkqZ^",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"Rrk!k1MZiB&"
         }
      },
      {
         "cvcbranchId":8086,
         "personCode":45485454,
         "name":"Aga eji hezpoh gebom gebavon.",
         "shortName":"Juala fooz unaijba va suvuk.",
         "tradingName":"Ulubi pueb utuzektob avuvlu elarov.",
         "abbreviation":"Pw)p%0WZ2E1h",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"z!nXA%8b7y&wd%Df"
         }
      },
      {
         "cvcbranchId":4082,
         "personCode":74449944,
         "name":"Nuh secdar beegagan hikuchij fuze.",
         "shortName":"Egwu darob luniw vud tef.",
         "tradingName":"Bazbulfa zettuko hitimgod cul hojdif.",
         "abbreviation":"R0amsY]Nb[i",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"(Kmx5T(Mo5HuXHR1G"
         }
      },
      {
         "cvcbranchId":7905,
         "personCode":81379522,
         "name":"Fuctoldoj du het ziniiw ridgishi.",
         "shortName":"Wojko dofut abapowo en gelposa.",
         "tradingName":"Dilti geodig jeebmoh kahoaz kasraw.",
         "abbreviation":"[o7j5@&!10coS",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"s^WQxr%nD]5"
         }
      },
      {
         "cvcbranchId":5162,
         "personCode":20244623,
         "name":"Tedi lisosu rugfan ito ku.",
         "shortName":"Deg pevucsi do gicun zu.",
         "tradingName":"Odujudil righeji kaki gup ekhuc.",
         "abbreviation":"7f*lbyc^WWb(snE^$",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"fvu!Ag5&H#HVfC^"
         }
      },
      {
         "cvcbranchId":7099,
         "personCode":70798454,
         "name":"Azufa nuhi reri suc he.",
         "shortName":"Amivama file otjusad wu neliaca.",
         "tradingName":"Go jehwol afo uwojesluh va.",
         "abbreviation":"uK[ohDfkO)(6!6MXdN",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"#r@2Z5ih^(]xY%5OH"
         }
      },
      {
         "cvcbranchId":7121,
         "personCode":40250773,
         "name":"Zakuri gij peszasuc um hemalij.",
         "shortName":"Ha gi tozowju er hadniwnu.",
         "tradingName":"Ip izhe nilneb iku okmal.",
         "abbreviation":"zFR$NMuu5gvg!e!mu",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"AV@&$019rB9rFJVt3svM"
         }
      },
      {
         "cvcbranchId":4824,
         "personCode":25148982,
         "name":"Josom dat guk zam simcute.",
         "shortName":"Wafsitu wu lufugi kitvi ra.",
         "tradingName":"Af tajelo tal sos vogna.",
         "abbreviation":"KME79",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"ZpRHD(tA"
         }
      },
      {
         "cvcbranchId":6543,
         "personCode":64941507,
         "name":"Woripi paevi faasu hizga ap.",
         "shortName":"Ig neip el ibukus ifizibe.",
         "tradingName":"Pakam vajme hein bifag venke.",
         "abbreviation":"o)Fwn8XT",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"PB#Ma["
         }
      },
      {
         "cvcbranchId":6301,
         "personCode":35772741,
         "name":"Iza fimbojik mar tauk nep.",
         "shortName":"Kidtibar ejnuker ujaol kahwobac doh.",
         "tradingName":"Taf zohu kikeh najeud iripu.",
         "abbreviation":"[qw3I8",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"io*wEl13vCzwUvW"
         }
      },
      {
         "cvcbranchId":5812,
         "personCode":34497857,
         "name":"Luafufu gi tip hi coh.",
         "shortName":"Ob othohze fos rog bu.",
         "tradingName":"Duz goevotuf husuzar ziwatu munugro.",
         "abbreviation":"@[hV*pH4%)C1)BDdB$vX",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"q^zVOYs2pXSjlZ1o!FY"
         }
      },
      {
         "cvcbranchId":5256,
         "personCode":35887824,
         "name":"Ete hiljek zewe wewowo bu.",
         "shortName":"Igotoizo ah wupe up timra.",
         "tradingName":"Gas cod vaw tu wezvoribe.",
         "abbreviation":"9LU#WCq@n4",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"b4Y#^XgJ"
         }
      },
      {
         "cvcbranchId":8693,
         "personCode":72006294,
         "name":"Jodil nek ehitounu vuhpoj cat.",
         "shortName":"Ramtevsi ri cij icuto ta.",
         "tradingName":"Temesis lo uzlafpec parnopuw da.",
         "abbreviation":"&wG2Xv)&E3",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"c#wd1!83pY"
         }
      },
      {
         "cvcbranchId":1238,
         "personCode":77284830,
         "name":"Hahube daf gesa boizzoc rufarbi.",
         "shortName":"De mo bojo hucebgo oku.",
         "tradingName":"Jewab hewezmes vivev benkogjop coupa.",
         "abbreviation":"72v#NTo",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"Eg2&(#Iu@&fGsb9qX&"
         }
      },
      {
         "cvcbranchId":7867,
         "personCode":63475685,
         "name":"Seza zialu kibebiwo segwamzi nuj.",
         "shortName":"Nuc ze na sujzume uv.",
         "tradingName":"Kukbaal ten ilocoja epozak sijevgob.",
         "abbreviation":"^aIbPD1Pk5Q",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"JuU7pg"
         }
      },
      {
         "cvcbranchId":4433,
         "personCode":61694819,
         "name":"Davne pinu iso fubaswag omi.",
         "shortName":"Elvaup ugzamjaj utjadac low pi.",
         "tradingName":"Kiohhon utbe iko tunmab mur.",
         "abbreviation":"aX9^JyR9Ry&S(",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"lbtG*zl(&UX1pVrar"
         }
      },
      {
         "cvcbranchId":5737,
         "personCode":60698868,
         "name":"Anlek oca lakma odujek eso.",
         "shortName":"Li mefdebuf afeke neuvvi zijebuj.",
         "tradingName":"Wehoz dehul kucecwip idior nuuce.",
         "abbreviation":"aK5rGpcP",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"7M$FQlq"
         }
      },
      {
         "cvcbranchId":6037,
         "personCode":36250517,
         "name":"Wo jives dullor vuwedlud rernor.",
         "shortName":"Beh habke lava pucowij fup.",
         "tradingName":"Ivcef en vogac da we.",
         "abbreviation":"Ywk)m4^pqeeRN1",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"FeM40o0"
         }
      },
      {
         "cvcbranchId":5927,
         "personCode":56984602,
         "name":"Rih ibci dap recho heizru.",
         "shortName":"Meb sofse bujikkan vepi hujzawfog.",
         "tradingName":"Humit jal fu noj ji.",
         "abbreviation":"Dc*qy8me#VM5Epe",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"9H*Mzt!!cg"
         }
      },
      {
         "cvcbranchId":2013,
         "personCode":83485300,
         "name":"Da jihla ugota nohsazcik savowauj.",
         "shortName":"Miz nudci dop fibzo vote.",
         "tradingName":"Ti muhoc waghiozu wi cajiza.",
         "abbreviation":"@X1H)sEJm%rIFm5IxXDb",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"zm(iCM]7PHgFqGp"
         }
      },
      {
         "cvcbranchId":5176,
         "personCode":68600812,
         "name":"Dusmu akerowaz jeigo irgubri acopauko.",
         "shortName":"Hefabe go ni uw fofacom.",
         "tradingName":"Bohtuzus cibe wahjola miarudab ga.",
         "abbreviation":"y!9yCwB5rRExeK",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"aVqBVU3g"
         }
      },
      {
         "cvcbranchId":4724,
         "personCode":78236480,
         "name":"Ugweaf tivlenge do hudrac ronedaj.",
         "shortName":"Jo ze coptemik aj fo.",
         "tradingName":"Japaf uz utaoke kus lakaw.",
         "abbreviation":"0fnZljeaJ(D[&QKN]",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"Kv*#Rz%7M[pRWz!WhZu"
         }
      },
      {
         "cvcbranchId":8803,
         "personCode":79417658,
         "name":"Cevija gulzafco hiplu de tiemibi.",
         "shortName":"Wohpiot zac be fit cap.",
         "tradingName":"Kamos tudidjih kam magtin cut.",
         "abbreviation":"pAkXvK7",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"b7f%&l&E!FDP]hh8G]"
         }
      },
      {
         "cvcbranchId":5437,
         "personCode":67001142,
         "name":"Dealzo had nonili pad wizbimmur.",
         "shortName":"Dev dujozwic rugtug ejarujdid rosfun.",
         "tradingName":"Seovoej sazmunuhe orumep du riveni.",
         "abbreviation":"Sj*TrrVNSG&P(HeN",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"JaS2w@RXH)M9"
         }
      },
      {
         "cvcbranchId":1368,
         "personCode":54281123,
         "name":"Ba hag guvecu hizeaji ala.",
         "shortName":"Zocru haidi ikrura zec ozevov.",
         "tradingName":"Ri za mawuat arovojo lizho.",
         "abbreviation":"&@)UBRvI&1(R4yt7CxcH",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"a9(B3AoP6jKgFjELXME"
         }
      },
      {
         "cvcbranchId":8429,
         "personCode":69441545,
         "name":"Buag wi okup wuces alu.",
         "shortName":"Gos karidnih ti dekmejojo wi.",
         "tradingName":"Lekid ceifri re ruhfaoz nekca.",
         "abbreviation":")R4Tgsw$E$Ob3",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"2LCCmoaTm5O"
         }
      },
      {
         "cvcbranchId":3726,
         "personCode":73447250,
         "name":"Buk cadrisra li mu ojotu.",
         "shortName":"Ulma hiwe el fagdu ate.",
         "tradingName":"Ej huw bapoupe uke uftozu.",
         "abbreviation":"8BQVQ^",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"QEhNzW^3bA^"
         }
      },
      {
         "cvcbranchId":8523,
         "personCode":62761528,
         "name":"Bivmo liriz uwirivu ce fecsu.",
         "shortName":"Os daf hi ge tifgenoc.",
         "tradingName":"Songikoje makigmi pufbit heginza pake.",
         "abbreviation":"aWd6q1Ulut)U7pa6",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"Qrq[55p07tP2d"
         }
      },
      {
         "cvcbranchId":8273,
         "personCode":20449040,
         "name":"Vevfove getetat riwewufe od heprap.",
         "shortName":"Bauk mujlasba tehneezu henwapen ela.",
         "tradingName":"Paro ju mus dejilo gewdur.",
         "abbreviation":"0ThzJ3aZhcEs8",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"orM2eC"
         }
      },
      {
         "cvcbranchId":3368,
         "personCode":77827862,
         "name":"Vuptal ri pe gida goniha.",
         "shortName":"Ato siver big ele ewro.",
         "tradingName":"Ninme ohcoj henipa wefwev ne.",
         "abbreviation":"@[d8pJeo24Sd*2MTDWh&",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"m2SA8XbHs7(C!"
         }
      },
      {
         "cvcbranchId":6395,
         "personCode":34173417,
         "name":"Fab bo nes de ofobzo.",
         "shortName":"Ika hal epo safgi ocu.",
         "tradingName":"Jelekeve wu tabtuzi jum atuda.",
         "abbreviation":"fc5tm",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"yZ4$e#8U&[6q##MCs"
         }
      },
      {
         "cvcbranchId":4645,
         "personCode":73427125,
         "name":"Ruhun jehed bis junus dipsi.",
         "shortName":"Ipbivhe sic sottice sa ruuh.",
         "tradingName":"Nureci ikse tognuvam lacucpe roceg.",
         "abbreviation":"Ae4[X$jdbIDuxZf(nvJh",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"BVfn(akff8QZvt#7$j4o"
         }
      },
      {
         "cvcbranchId":4736,
         "personCode":72310002,
         "name":"Sutwa pokubjaj bij ihemi pe.",
         "shortName":"Ilief wi mo sibomeun futlimet.",
         "tradingName":"Kice gez lemdumsa ucane viwdo.",
         "abbreviation":"rcn5T576W(SN2kbuya",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"JXUcLS@34)y"
         }
      },
      {
         "cvcbranchId":4384,
         "personCode":62106271,
         "name":"Ruenibeh lidtuwah raegwa maaru unehoheg.",
         "shortName":"Bijgerani zu kidor leslirow zudabuc.",
         "tradingName":"Vo fif ec doh vegu.",
         "abbreviation":"MoieZSZD425&O*hhT^K",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"ue0WxpK3Q9#o[KH7[L"
         }
      },
      {
         "cvcbranchId":8403,
         "personCode":72905357,
         "name":"Rupuv soc urbe zuvifrov ekke.",
         "shortName":"Foz aw ajfaw rew ewa.",
         "tradingName":"Icepojsor zeh mohcubra ojfipra luzgeviz.",
         "abbreviation":"$!2hWqgudw",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"4k)FdR6551PzD1vKw"
         }
      },
      {
         "cvcbranchId":1946,
         "personCode":89254519,
         "name":"Rumihlir pufukli eh lap roh.",
         "shortName":"Mi lubteva zeeba sohizak taricru.",
         "tradingName":"Liniz catzo amu zorherew eni.",
         "abbreviation":"YE$Ze4$LxMH19msx",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"a8[jCvImV4V"
         }
      },
      {
         "cvcbranchId":4320,
         "personCode":20172063,
         "name":"Tifcesob samkiepo agpehi rot gi.",
         "shortName":"Cohevbu abi ugi gac nuki.",
         "tradingName":"Buuhore are pi wapo emijod.",
         "abbreviation":"S1vuk2mFXlyp9W",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"rkvluz8RC1)&a"
         }
      },
      {
         "cvcbranchId":8255,
         "personCode":34848160,
         "name":"Rictal efro lumasvi su onuso.",
         "shortName":"Zu bud tidritil hileju du.",
         "tradingName":"Kij mifza bactellu ejguv zar.",
         "abbreviation":"JPD2nKwm)O6ldf%Sm",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"4yHb&FANY"
         }
      },
      {
         "cvcbranchId":6968,
         "personCode":21538388,
         "name":"Zevecsek cid zi iw obpati.",
         "shortName":"Gowaga bukejiz siezice wuvezil zoseoju.",
         "tradingName":"Faemkos efohifmi hofas did oncad.",
         "abbreviation":"ODt9A)X3PIu&4Z",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"wLK]2N"
         }
      },
      {
         "cvcbranchId":4474,
         "personCode":11511191,
         "name":"Uh neglunoga wag afiviv edcewat.",
         "shortName":"Mavo nozegiho zurlan ofigta kevfi.",
         "tradingName":"Il urofazbu bil kej ge.",
         "abbreviation":"Q5Z0DWO94",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"@rAgBl@iaz"
         }
      },
      {
         "cvcbranchId":3518,
         "personCode":46139386,
         "name":"Bed hiw lule foldi dejwour.",
         "shortName":"Pif wo enocan avkovu vi.",
         "tradingName":"Lokim kil sesme pojo azomigjo.",
         "abbreviation":"5&1vU]ye96S)",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"EG!(Y]s3H@UMLbrVM"
         }
      },
      {
         "cvcbranchId":2322,
         "personCode":82222334,
         "name":"Os elukid oba mocren ju.",
         "shortName":"Botbi fucugazi peh or gitojulun.",
         "tradingName":"Pedkic albal epwe mejcawo owaessa.",
         "abbreviation":"08C8r",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"WE#EMsm^4tQ"
         }
      },
      {
         "cvcbranchId":2640,
         "personCode":71208170,
         "name":"Wuh ud zo owe kewfiw.",
         "shortName":"Mebaocu bap pe zon ihsulja.",
         "tradingName":"Gekguntav murbad godogme bacopvid min.",
         "abbreviation":"4EuyY6hZ9lij9(G",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"bs2&Op3%Z2Gu%1"
         }
      },
      {
         "cvcbranchId":6776,
         "personCode":61803915,
         "name":"Geuha taze wi tekkakcac cot.",
         "shortName":"Wihrucda irivos ap cegvep vup.",
         "tradingName":"Ere idikod timumug ineneden acowe.",
         "abbreviation":"G^sJbk9uULNfPmd",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"p^XVsg$^r5l%j17KFl"
         }
      },
      {
         "cvcbranchId":6112,
         "personCode":56057602,
         "name":"We kovnenam rugid dago kosi.",
         "shortName":"Fa zeukgih hu obahog ofurun.",
         "tradingName":"Kaktu we lokavu nabtip zo.",
         "abbreviation":"]a3&w8@A*PPu)IgDGJ)",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"$GQI1M5@d"
         }
      },
      {
         "cvcbranchId":6169,
         "personCode":78584444,
         "name":"Puwahaka tic meltoz vawa haecpi.",
         "shortName":"Fo bijimowe cuc jus fonega.",
         "tradingName":"Vuvu epal kezmowi vef abwe.",
         "abbreviation":"(*cuL3",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"p]23XmnLr!hY"
         }
      },
      {
         "cvcbranchId":4389,
         "personCode":79272586,
         "name":"Ukuwokif deowtok ica relo gojipcu.",
         "shortName":"Jikonzu ubwopha hohbah ocmovce tuh.",
         "tradingName":"Awa dahap cuv ivcorhum niddow.",
         "abbreviation":"t@27LT",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"iYy5zMOrhyu4HW&SPES"
         }
      },
      {
         "cvcbranchId":5702,
         "personCode":51138180,
         "name":"Wibe ob ibne mijib owi.",
         "shortName":"Bizfa jatasam pe niuh igi.",
         "tradingName":"Nam ijebuev ore zajanu adme.",
         "abbreviation":"A3i)G#MHMC@IQa",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"9x0Yt[&rr@s3rpqcmR"
         }
      },
      {
         "cvcbranchId":5717,
         "personCode":53540927,
         "name":"Cacuron cepinge la ohuwi lorpejtil.",
         "shortName":"Ti sarrus soorinoh citra suwmul.",
         "tradingName":"Govtipbiv rahegmih paho zeca fa.",
         "abbreviation":"YTAACz",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"uA]9MpnXZD&@Y3fw2["
         }
      },
      {
         "cvcbranchId":3246,
         "personCode":12547023,
         "name":"Mizma vazoc pizfile faslohva bev.",
         "shortName":"Ugu fuwaciseb uhke natke livuj.",
         "tradingName":"Dosifuru kartal base tugooho haugcol.",
         "abbreviation":"V5UgqA[E",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"Bk3Np@mFYdVaQu)x9$"
         }
      },
      {
         "cvcbranchId":1009,
         "personCode":28582402,
         "name":"Dinsiji uvumij aljo cah zas.",
         "shortName":"Sompas rapgefuk se gomim nu.",
         "tradingName":"Uvo eg vitsal ihwi had.",
         "abbreviation":"4smm$!q5sV",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"xhYxEeceL"
         }
      },
      {
         "cvcbranchId":1556,
         "personCode":58035613,
         "name":"Her vowab sul ipiwabtap tarren.",
         "shortName":"Rawcolcup bozocoew vafmo bekmirki af.",
         "tradingName":"Kopav biz fel di pibedzup.",
         "abbreviation":"4OfzCSG4gM^L0",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"!#QdCYA9M0Awm"
         }
      },
      {
         "cvcbranchId":2630,
         "personCode":38861763,
         "name":"Tivtobu ka raz ca gevmu.",
         "shortName":"Huus fizzitec mamajzow lok ow.",
         "tradingName":"Wodpah mom lisana pu bep.",
         "abbreviation":"(*7I)cvINvENGTSqFvj",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"GJLrfsc6"
         }
      },
      {
         "cvcbranchId":8744,
         "personCode":50537690,
         "name":"Opvojej weolouzu vusa lijan bo.",
         "shortName":"Bacegeeb vi ojoewo fot topwi.",
         "tradingName":"Epfasaz mubso uj kengehumo lo.",
         "abbreviation":"]ezMwT3^tXTE3qdFbWGt",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"v3boV@j@wfHs]jpH"
         }
      },
      {
         "cvcbranchId":7260,
         "personCode":47779540,
         "name":"Puv beupase neoba petmaap cozeat.",
         "shortName":"Juw burbub vokki zit ukowuf.",
         "tradingName":"Tolro la zusdi tubfez tidhulza.",
         "abbreviation":"&FB^M#x0&VuF#J2Xk",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"Wzt7V0mOXF&3)E"
         }
      },
      {
         "cvcbranchId":6201,
         "personCode":43471328,
         "name":"Cakoffod weglezted puwedziz molizaedu liv.",
         "shortName":"Hefgohebe vivaf copwawgod lab hagic.",
         "tradingName":"Evokevge fuev vej revomtoh losez.",
         "abbreviation":"Tj&p^ELn^JrI@F@mAm",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"E#zJ!!c"
         }
      },
      {
         "cvcbranchId":6840,
         "personCode":38363335,
         "name":"Nuweka kidpu cuwajeho kuf tiwerjuw.",
         "shortName":"Op co avuume ulkog zifcet.",
         "tradingName":"Ubfi kiheve jocivpo fe lail.",
         "abbreviation":"k#[EMgY",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"g2&D]n#M2z*iv3"
         }
      },
      {
         "cvcbranchId":8451,
         "personCode":47616199,
         "name":"Ebige pan justi ugdimoto igaagri.",
         "shortName":"Log geojihi tivfe ju baweglow.",
         "tradingName":"Tedmehob wuludte pancuk ni guoco.",
         "abbreviation":"wBfEzNo3TrRq",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"nIZ78AY1]3h"
         }
      },
      {
         "cvcbranchId":7583,
         "personCode":15181117,
         "name":"Volav ho fovpa lamnobjuc some.",
         "shortName":"Lup cuc weh forzu baccelkeb.",
         "tradingName":"Repcimfid bovpum pe cini mef.",
         "abbreviation":"mUPS2Yn@A^w",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"4[mwdU"
         }
      },
      {
         "cvcbranchId":5872,
         "personCode":48978234,
         "name":"Kew fibig umidefe oh sidel.",
         "shortName":"Kijgab nodlu govewu tojpuhe lahcudis.",
         "tradingName":"Cezeneve sed fuwubug otimi hehub.",
         "abbreviation":"UA0wWPRVb",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"S!(vB)u"
         }
      },
      {
         "cvcbranchId":6773,
         "personCode":37077076,
         "name":"Cif mem hajok bocvet tulub.",
         "shortName":"Hisafuru jacza mota vi fofilli.",
         "tradingName":"We li cegenawi muc caahido.",
         "abbreviation":"zCFcx5",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"L]361H1wpx)]80%6EdX"
         }
      },
      {
         "cvcbranchId":6519,
         "personCode":77775971,
         "name":"Ju ozheklo ihiawo faed huszikoz.",
         "shortName":"Jeleot ketompi caeti noncud zalfe.",
         "tradingName":"Gireiga ma jowuwu kajhocu pommephe.",
         "abbreviation":"BjsL)zAiCk",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"X[)tE"
         }
      },
      {
         "cvcbranchId":6277,
         "personCode":27711762,
         "name":"Atvued emebup wugita ci semvotuh.",
         "shortName":"Ka negzo iw leces tagfioje.",
         "tradingName":"Gabifi vogsefih binoig tugeil foug.",
         "abbreviation":"xRfXb",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"Li#PM"
         }
      },
      {
         "cvcbranchId":2697,
         "personCode":56341821,
         "name":"Gabca nabgacu esutlid vaolepa iwu.",
         "shortName":"Egowarbo fiwkejhuz cubzas buzla tila.",
         "tradingName":"Ki gihtenjoz de rot larmooti.",
         "abbreviation":"5mIKJoAB*YaKruLZko",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"0IOiEigaR[s"
         }
      },
      {
         "cvcbranchId":1213,
         "personCode":78438322,
         "name":"Ewuher amane hilodfip kunfili tuwmawmic.",
         "shortName":"Heb jaf honnovzum vokvutac zonal.",
         "tradingName":"To anlule wuf ku leenwuc.",
         "abbreviation":"rntySZORQjn",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"#lc3y"
         }
      },
      {
         "cvcbranchId":8440,
         "personCode":61149380,
         "name":"Waezpu zitofes aziaki pad libe.",
         "shortName":"Lilcuk bewrelo gen zizo korid.",
         "tradingName":"Boz jake zovuk umi doceh.",
         "abbreviation":"fD0syq1h%]Z4bWq@6q5",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"tEcRRR%1J8LH9"
         }
      },
      {
         "cvcbranchId":8737,
         "personCode":76662054,
         "name":"Acigub tibwausu uc rin pu.",
         "shortName":"Tefarev lejwuvfiz gicfaj nisu kutaf.",
         "tradingName":"Kob mefhe acsohhet tupcez bemuh.",
         "abbreviation":"Ce(BHcY9t&PQyJD1$j",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"kmPs#l1mWe$ukDAUGf"
         }
      },
      {
         "cvcbranchId":6725,
         "personCode":54448116,
         "name":"Hebzek rupu hodura nemusu rado.",
         "shortName":"Bar ola micer umkofcu noho.",
         "tradingName":"Cenja ubuelaig henutsoz abobudur bul.",
         "abbreviation":"]w8gV6cFMX3Gmx",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"rxV8^"
         }
      },
      {
         "cvcbranchId":6751,
         "personCode":69057972,
         "name":"Cigoknez wospadrec ramiko areuba koneh.",
         "shortName":"Kaler bes sujgu surov divkom.",
         "tradingName":"Cil farwuze ne cur kitafme.",
         "abbreviation":"cVsi)eaki7[42b5rp(IE",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"ZPaCynN@6WR[]P)4I"
         }
      },
      {
         "cvcbranchId":7200,
         "personCode":75341670,
         "name":"Nijew keitine pipjod ohuah uhozidze.",
         "shortName":"Utmolit cieto wunuj nimwoz fo.",
         "tradingName":"Gu el jafunvo ro utetu.",
         "abbreviation":"ZV$yQR7GkmgH1",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"S^(q@["
         }
      },
      {
         "cvcbranchId":6616,
         "personCode":11552354,
         "name":"Jo jetujvu wucgahdej ubagom kerwo.",
         "shortName":"Suk pan kebhahi iziw ug.",
         "tradingName":"Dan tedloono namha fut felja.",
         "abbreviation":"DDQ!@OJ2uQlW",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"$OK&AmA&l8Y"
         }
      },
      {
         "cvcbranchId":5332,
         "personCode":32301250,
         "name":"Noj goeh kunit inonozjed vej.",
         "shortName":"Da pat ujbibag memo nu.",
         "tradingName":"No razol komazca guam fojato.",
         "abbreviation":"Gck@ofGuDPk$*Yv",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"lN5bB#&"
         }
      },
      {
         "cvcbranchId":5337,
         "personCode":56476521,
         "name":"Deku tubva vewibwah be ecdodah.",
         "shortName":"Zet ut ca tultogru epe.",
         "tradingName":"Lizdi wofrese tepot tazhu wib.",
         "abbreviation":"9RZ)y0",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"gLa[Lh(z2&mi6U$DT"
         }
      },
      {
         "cvcbranchId":1782,
         "personCode":45673655,
         "name":"Wiku ujmuda ojdok gaekeose vijsu.",
         "shortName":"Roki henvowen obu sulmeda moptepgov.",
         "tradingName":"Vecu zurnem tazfujsu saage wofgoahe.",
         "abbreviation":"7tJW8w[t",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"&na5XC"
         }
      },
      {
         "cvcbranchId":5763,
         "personCode":45334832,
         "name":"Mofdi ejicud dujeje hakoho okivok.",
         "shortName":"Gohga babogjo nar nunonke hiugrub.",
         "tradingName":"Pos fovik jat ar bo.",
         "abbreviation":"#5lprh2t2T#Y",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"iVdlpm(J4k$FTy&"
         }
      },
      {
         "cvcbranchId":8246,
         "personCode":19049998,
         "name":"Mif ter bedu nid di.",
         "shortName":"Uz hiunu depejvuv afihanes mib.",
         "tradingName":"Pavo uherev za zul wotem.",
         "abbreviation":"qwP[N62C",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"!iAMG8t!fEl*MB"
         }
      },
      {
         "cvcbranchId":8284,
         "personCode":15212532,
         "name":"La bi hitpeeto cukgepfek zadpawu.",
         "shortName":"Oti gacwadmuk mesih tochapog jahdavas.",
         "tradingName":"Ute uredete direiru bapba bi.",
         "abbreviation":"R39(JrjJ1I3!C90KvP*c",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"V&BA4)LcJSEmPO"
         }
      },
      {
         "cvcbranchId":5131,
         "personCode":29266978,
         "name":"Luzu pojobnu to uscav nufuc.",
         "shortName":"To dak mojedi se peceh.",
         "tradingName":"Jernuj likor kudobobak kigzada ce.",
         "abbreviation":"zZ)cjA[iA3jm9R5MaZ",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"*ahgNUJG[#E(IR"
         }
      },
      {
         "cvcbranchId":2497,
         "personCode":45831288,
         "name":"Izno owijuvbe gudkus ceflu beh.",
         "shortName":"Uktob gonjivku nibvik nawloc rawukuc.",
         "tradingName":"Renegi jitekial simiesu apca beg.",
         "abbreviation":"z6Vui97Z",
         "ownedByCvc":true,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"JSkHS"
         }
      },
      {
         "cvcbranchId":5564,
         "personCode":74517386,
         "name":"Cep aw for ico mugpi.",
         "shortName":"Po laflawi hap tabga muzmanul.",
         "tradingName":"Guvotraz wedaspo tacuf ri abuiletav.",
         "abbreviation":"##u5yC]3p7)X@T&",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"Q2m@*m9g3Y#an"
         }
      },
      {
         "cvcbranchId":2798,
         "personCode":60212424,
         "name":"Jo migikutil kazzut remubebo vi.",
         "shortName":"Cafal zu is zineg budecpif.",
         "tradingName":"Cun erefip cecnub nut jabcasibo.",
         "abbreviation":"9In^fZ^j]#pPYp7",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"1AB%QDlXmtW)wxWcnj"
         }
      },
      {
         "cvcbranchId":6687,
         "personCode":17448029,
         "name":"Nan gimufse vocguhta barpub macewi.",
         "shortName":"Fokufvuh kilbuwi or ihsunjo wadzol.",
         "tradingName":"Sumuzher julew nuwfec lo kajozo.",
         "abbreviation":"3*%a!qOhGYZ^mLa",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"ztFQ8z$1zxn1X8A"
         }
      },
      {
         "cvcbranchId":2761,
         "personCode":44166950,
         "name":"Janackir fokauco hice varon lib.",
         "shortName":"Dereweju igufura ha ogalpej tu.",
         "tradingName":"Cug fupsup meiluku di romdol.",
         "abbreviation":"wC#a[!]vatCRq2mSFX",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"Mmtdy1xHdL1!sLv]#m"
         }
      },
      {
         "cvcbranchId":2992,
         "personCode":17006747,
         "name":"Re ufa camhicu kakjot neveef.",
         "shortName":"Ojupemso zo ho doacpe ulogiw.",
         "tradingName":"Puorupe ricdem sowlo iszuvo ef.",
         "abbreviation":"D15MtEgWU54rs0gWJaL",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"B59j0xW6p"
         }
      },
      {
         "cvcbranchId":5705,
         "personCode":24237500,
         "name":"Pabivvu pufi edhu vesrojac kupothi.",
         "shortName":"Ikka hicab hesladzoh satihe fuhuedo.",
         "tradingName":"Mij jijagon veew jaruhosug lupduf.",
         "abbreviation":"1zGi4L1",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"AtRdH"
         }
      },
      {
         "cvcbranchId":2592,
         "personCode":88857154,
         "name":"Robazil iwa luhib zej si.",
         "shortName":"Niluwe dogurogu fela fonbewed motji.",
         "tradingName":"Ow foojejit kuuruizi keveh dekedos.",
         "abbreviation":"TN@$BN^7SYH^9((",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"A@lFYTmG)Hb^G"
         }
      },
      {
         "cvcbranchId":3095,
         "personCode":40688237,
         "name":"Pa zofo aza og ramnogge.",
         "shortName":"Abezo vegbic ir orirot mic.",
         "tradingName":"Epu kunug sodo kah casulu.",
         "abbreviation":"5GpdH(ap^3",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"uvz&$%IKff@%)r3!!"
         }
      },
      {
         "cvcbranchId":1699,
         "personCode":33811698,
         "name":"Catijvok eh ke jo wegazge.",
         "shortName":"Nap beluf kitawoih tacene igfev.",
         "tradingName":"Lanifi ku muzusala zoilicad sakpokup.",
         "abbreviation":"$CMUbQGk6*wN2brG)",
         "ownedByCvc":false,
         "administration":true,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"OpHSncpbR"
         }
      },
      {
         "cvcbranchId":1286,
         "personCode":84491100,
         "name":"Uvke hu mufemzo habuno uvezo.",
         "shortName":"Tusama zokidij cumujaces cavolop zepoha.",
         "tradingName":"Fufige zor je il optol.",
         "abbreviation":"Jwi%vw]w2WJ%rh]J5",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"oqOjeT[mFXfDw!HrJ"
         }
      },
      {
         "cvcbranchId":1681,
         "personCode":32903343,
         "name":"Pa lif hum bipce tuflof.",
         "shortName":"Korilvu rib ku waporzoz amoju.",
         "tradingName":"Ruwegfa weagca uvna regzo anhimzu.",
         "abbreviation":"N!2Kc)1VR@xp6%N",
         "ownedByCvc":true,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"O)Jwoh"
         }
      },
      {
         "cvcbranchId":3160,
         "personCode":37555509,
         "name":"Lozfuvtet ami en pizilod fu.",
         "shortName":"Dap ra esige pupur foj.",
         "tradingName":"Got zad nubibur ciiv dejdi.",
         "abbreviation":"F!wL!ZQA%$",
         "ownedByCvc":false,
         "administration":false,
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"994dI#nx[g[s]!NRyG"
         }
      }
   ]
};

var agencies = {
   "agencies":[
      {
         "id":6287,
         "personId":6931,
         "name":"Im mul vagvizu.",
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"QAf!vF(Ze6$l]NA9#yt"
         }
      },
      {
         "id":9875,
         "personId":2950,
         "name":"Malguru balgiefe caifule.",
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"scnplsjk)j"
         }
      },
      {
         "id":1637,
         "personId":3549,
         "name":"Do judkip hobgadut.",
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"4eYN%V9w]"
         }
      },
      {
         "id":3119,
         "personId":1276,
         "name":"Ubkah kuwin wi.",
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"sQK0%I[37Q"
         }
      },
      {
         "id":2397,
         "personId":5288,
         "name":"Mopeb erlevi wucisedo.",
         "twoFactorAuthentication":{
            "tokenType":"POPUP",
            "tokenKey":"d^)Br]VMXwj@n%@0"
         }
      },
      {
         "id":1919,
         "personId":3681,
         "name":"Uvopupup vibif omezac.",
         "twoFactorAuthentication":{
            "tokenType":"EMAIL",
            "tokenKey":"Mn^C#dJaU%*)&"
         }
      },
      {
         "id":3173,
         "personId":7670,
         "name":"Wabgiz fuzu hononmuw.",
         "twoFactorAuthentication":{
            "tokenType":"MOBILE",
            "tokenKey":"gt5isoWT]x7[rf"
         }
      }
   ]
};
