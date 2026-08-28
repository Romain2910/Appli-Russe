/* =========================================================
   CONTENU DIVERS (accueil, tables de reference)
   ========================================================= */

const CASE_LABELS = {
  nominatif:'Именительный', genitif:'Родительный', datif:'Дательный',
  accusatif:'Винительный', instrumental:'Творительный', prepositionnel:'Предложный'
};

const CEFR_INFO = {
  A1:{label:'A1 · Découverte', desc:'Les fondations : structure, genres, cas et conjugaisons de base.'},
  A2:{label:'A2 · Intermédiaire', desc:'Déclinaisons complètes, aspects verbaux, verbes de mouvement.'},
  B1:{label:'B1 · Autonomie', desc:'Discours indirect, participes, lecture d\'articles.'}
};

const REF_TABLES = [
  {title:'Noms — singulier (modèle dur)', cols:['Cas','Masc. (стол)','Fém. (книга)','Neutre (окно)'], rows:[
    ['Nominatif','стол','книга','окно'],['Génitif','стола','книги','окна'],['Datif','столу','книге','окну'],
    ['Accusatif','стол *','книгу','окно'],['Instrumental','столом','книгой','окном'],['Prépositionnel','столе','книге','окне']
  ], note:'* animé masculin → comme le génitif (студента, кота...)'},
  {title:'Noms — pluriel', cols:['Cas','Masc. (столы)','Fém. (книги)','Neutre (окна)'], rows:[
    ['Nominatif','столы','книги','окна'],['Génitif','столов','книг','окон'],['Datif','столам','книгам','окнам'],
    ['Accusatif','столы *','книги','окна'],['Instrumental','столами','книгами','окнами'],['Prépositionnel','столах','книгах','окнах']
  ], note:'* animé → comme le génitif pluriel'},
  {title:'Adjectifs — singulier (новый)', cols:['Cas','Masculin','Féminin','Neutre'], rows:[
    ['Nominatif','новый','новая','новое'],['Génitif','нового','новой','нового'],['Datif','новому','новой','новому'],
    ['Accusatif','новый / нового *','новую','новое'],['Instrumental','новым','новой','новым'],['Prépositionnel','новом','новой','новом']
  ], note:'* nouveau/animé → нового'},
  {title:'Adjectifs — pluriel (identique aux 3 genres)', cols:['Cas','Forme'], rows:[
    ['Nominatif','новые'],['Génitif','новых'],['Datif','новым'],['Accusatif','новые / новых *'],['Instrumental','новыми'],['Prépositionnel','новых']
  ], note:'* animé → новых'},
  {title:'Pronoms personnels déclinés', cols:['Pronom','Génitif','Datif','Accusatif','Instrumental','Prépositionnel'], rows:[
    ['я','меня','мне','меня','мной','обо мне'],
    ['ты','тебя','тебе','тебя','тобой','о тебе'],
    ['он / оно','его (него)','ему (нему)','его (него)','им (ним)','о нём'],
    ['она','её (неё)','ей (ней)','её (неё)','ей (ней)','о ней'],
    ['мы','нас','нам','нас','нами','о нас'],
    ['вы','вас','вам','вас','вами','о вас'],
    ['они','их (них)','им (ним)','их (них)','ими (ними)','о них']
  ], note:'Formes entre parenthèses = après une préposition (ajout du н-).'},
  {title:'Prépositions les plus utiles et leur cas', cols:['Préposition','Cas','Sens principal'], rows:[
    ['в (lieu)','Prépositionnel','dans (position)'],
    ['в (direction)','Accusatif','vers, à (mouvement)'],
    ['на (lieu)','Prépositionnel','sur (position)'],
    ['на (direction)','Accusatif','vers, à (surface, événement)'],
    ['у','Génitif','chez, près de'],
    ['из','Génitif','depuis, en provenance de'],
    ['от','Génitif','de la part de, à partir de'],
    ['до','Génitif','jusqu\'à'],
    ['для','Génitif','pour (destination)'],
    ['без','Génitif','sans'],
    ['к','Datif','vers, chez (une personne)'],
    ['по','Datif','le long de, selon'],
    ['с','Instrumental','avec (accompagnement)'],
    ['над / под','Instrumental','au-dessus de / sous'],
    ['перед / между','Instrumental','devant / entre'],
    ['о / об','Prépositionnel','à propos de'],
    ['через','Accusatif','à travers, dans (un délai)']
  ], note:'в et на changent de cas selon qu\'ils expriment un lieu fixe ou une direction.'}
];

const MODULES = [
  {id:'dashboard', label:'Tableau de bord', icon:'home'},
  {id:'alphabet', label:'Alphabet', icon:'type'},
  {id:'grammar', label:'Grammaire', icon:'book'},
  {id:'vocabulaire', label:'Vocabulaire', icon:'list'},
  {id:'verbes', label:'Verbes', icon:'refresh'},
  {id:'flashcards', label:'Flashcards', icon:'layers'},
  {id:'reading', label:'Lecture', icon:'file'},
  {id:'listening', label:'Écoute', icon:'headphones'},
  {id:'oral', label:'Oral', icon:'mic'},
  {id:'exam', label:'Examens', icon:'award'},
];

const SECONDARY_PAGES = [
  {id:'account', label:'Mon compte', icon:'square'},
  {id:'help', label:'Aide', icon:'chat'},
  {id:'legal', label:'Mentions légales', icon:'file'},
];

const LANDING_FEATURES = [
  {icon:'type', n:'33 lettres', title:'Alphabet', text:"Maîtrise l'alphabet cyrillique et sa prononciation avant tout le reste.",
    preview:'<div class="fp-letters"><span>А</span><span>Б</span><span>В</span><span>Г</span></div>'},
  {icon:'book', n:'81 leçons', title:'Grammaire', text:"Les cas, les aspects verbaux, la syntaxe — expliqués progressivement, du A1 au B1.",
    preview:'<div class="fp-rule"><span class="ru">Именительный</span><span class="arrow">→</span><span>Кто? Что?</span></div>'},
  {icon:'list', n:'763 mots', title:'Vocabulaire', text:"35+ thèmes du quotidien, avec révision espacée pour ne rien oublier.",
    preview:'<div class="fp-chip"><span class="ru">окно</span><span class="sep">·</span><span>fenêtre</span></div>'},
  {icon:'refresh', n:'529 verbes', title:'Verbes', text:"100 verbes essentiels avec conjugaison complète, plus 429 verbes étendus.",
    preview:'<div class="fp-conj"><span>я</span><span class="arrow">→</span><span class="ru">делаю</span></div>'},
  {icon:'file', n:'58 textes', title:'Lecture', text:"Des textes gradués sur 9 thèmes et 3 niveaux, pour lire de vrais articles.",
    preview:'<div class="fp-text">Мама <span class="fp-gloss">мыла</span> раму.</div>'},
  {icon:'headphones', n:'27 pistes', title:'Écoute', text:"Comprendre le russe parlé, à ton rythme, sur des sujets variés.",
    preview:'<div class="fp-wave"><span style="height:40%"></span><span style="height:75%"></span><span style="height:100%; opacity:1;"></span><span style="height:60%"></span><span style="height:32%"></span></div>'},
  {icon:'mic', n:'108 phrases', title:'Oral', text:"Phrases utiles à répéter à voix haute, avec reconnaissance vocale.",
    preview:'<div class="fp-mic">'+ic('mic',18)+'<span class="fp-pulse"></span><span class="lbl">à l\'écoute…</span></div>'},
  {icon:'award', n:'24 unités', title:'Examens', text:"Un test à la fin de chaque unité pour valider ce qui est vraiment acquis.",
    preview:'<div class="fp-ring" style="background:conic-gradient(var(--sage) 0% 92%, var(--parchment-deep) 92% 100%);"><div class="fp-ring-inner">92%</div></div>'},
  {icon:'layers', n:'illimité', title:'Flashcards', text:"Un système de répétition espacée qui priorise ce que tu es en train d'oublier.",
    preview:'<div class="fp-cards"><div class="fp-card-back"></div><div class="fp-card-front">это</div></div>'},
];

const RU_KBD_ROWS = [
  ['й','ц','у','к','е','н','г','ш','щ','з','х'],
  ['ф','ы','в','а','п','р','о','л','д','ж','э'],
  ['я','ч','с','м','и','т','ь','б','ю','ё','ъ']
];

const THEME_EMOJI = {
  salutations:'👋', nombres:'🔢', famille:'👨‍👩‍👧', verbes:'⚡', nourriture:'🍎', couleurs:'🎨',
  temps:'📅', maison:'🏠', corps:'🧍', vetements:'👕', travail:'💼', transport:'🚗',
  ville:'🏙️', nature:'🌳', voyage:'🧳', technologie:'💻', emotions:'😊', achats:'💰',
  ecole:'📚', sports:'⚽', sante:'💊', adjectifs:'⚖️', direction:'🧭',
  connecteurs:'🔗', expressions:'💬', geographie:'🌍', telephone:'☎️'
};

const TAG_ICON = {mouvement:'🏃', reflexif:'🔄'};

const VOWELS_RU = 'аеёиоуыэюя';

const COMMON_GLOSS = {
  'я':'je','ты':'tu','он':'il','она':'elle','оно':'il / elle (neutre)','мы':'nous','вы':'vous','они':'ils / elles',
  'меня':'moi (acc./gén.)','тебя':'toi (acc./gén.)','его':'le / lui (acc.) ; son','её':'la / elle (acc.) ; son',
  'нас':'nous (acc./gén.)','вас':'vous (acc./gén.)','их':'les / eux (acc.) ; leur',
  'мне':'à moi','тебе':'à toi','ему':'à lui','ей':'à elle','нам':'à nous','вам':'à vous','им':'à eux / à lui (instr.)',
  'мной':'par moi','тобой':'par toi','ими':'par eux','нём':'lui (prép.)','ней':'elle (prép.)','них':'eux (prép.)',
  'мой':'mon','моя':'ma','моё':'mon (neutre)','мои':'mes','твой':'ton','твоя':'ta','твоё':'ton (neutre)','твои':'tes',
  'наш':'notre','наша':'notre (fém.)','наше':'notre (neutre)','наши':'nos','ваш':'votre','ваша':'votre (fém.)','ваше':'votre (neutre)','ваши':'vos',
  'этот':'ce','эта':'cette','это':'ce / cela','эти':'ces','тот':'ce...-là','та':'cette...-là','то':'ce...-là (neutre)','те':'ces...-là',
  'в':'dans / à','на':'sur / à','с':'avec','у':'chez','к':'vers','от':'de la part de','до':"jusqu'à",'из':'depuis',
  'для':'pour','без':'sans','над':'au-dessus de','под':'sous','перед':'devant','между':'entre','через':'à travers / dans','о':'à propos de','об':'à propos de','по':'selon / le long de','за':'derrière / pour','при':'en présence de',
  'и':'et','а':'et / mais','но':'mais','или':'ou','что':'que / quoi','чтобы':'pour que','если':'si','потому':'parce',
  'также':'aussi','тоже':'aussi','как':'comme / comment','когда':'quand','где':'où','куда':'où (direction)','почему':'pourquoi',
  'который':'qui / lequel','которая':'qui / laquelle','которое':'qui / lequel (neutre)','которые':'qui / lesquels','которой':'lequel (décliné)','которого':'lequel (décliné)','котором':'lequel (décliné)','которую':'laquelle (décliné)',
  'есть':"il y a / manger",'был':'était (masc.)','была':'était (fém.)','было':'était (neutre)','были':'étaient',
  'будет':'sera','буду':'je serai','будешь':'tu seras','будем':'nous serons','будете':'vous serez','будут':'seront',
  'нет':"non / il n'y a pas",'не':'ne...pas','ни':'ni','никто':'personne','ничего':'rien','никогда':'jamais','нигде':'nulle part',
  'очень':'très','уже':'déjà','ещё':'encore','всегда':'toujours','иногда':'parfois','часто':'souvent','редко':'rarement',
  'здесь':'ici','там':'là-bas','сюда':'ici (direction)','туда':'là-bas (direction)','сейчас':'maintenant','потом':'ensuite',
  'вчера':'hier','сегодня':"aujourd'hui",'завтра':'demain','хорошо':'bien','плохо':'mal','быстро':'vite','медленно':'lentement',
  'кто':'qui','сколько':'combien','какой':'quel','какая':'quelle','какое':'quel (neutre)','какие':'quels','чей':'à qui (possessif)',
  'да':'oui','спасибо':'merci','пожалуйста':"s'il vous plaît",
  'все':'tous','всё':'tout','всех':'tous (gén.)','каждый':'chaque','каждая':'chaque (fém.)','каждое':'chaque (neutre)',
  'много':'beaucoup','мало':'peu','несколько':'quelques','немного':'un peu',
  'один':'un','два':'deux','три':'trois','четыре':'quatre','пять':'cinq','шесть':'six','семь':'sept','восемь':'huit','девять':'neuf','десять':'dix',
  'после':'après','сразу':'immédiatement','вместе':'ensemble','друг':'ami','подруга':'amie',
  'потому что':'parce que','можно':'on peut','нужно':'il faut','должен':'doit (masc.)','должна':'doit (fém.)','нельзя':'interdit / impossible',
  'говорит':'dit / parle','говорю':'je dis / je parle','говорят':'ils disent','сказал':'a dit (masc.)','сказала':'a dit (fém.)',
  'думаю':'je pense','знаю':'je sais','хочу':'je veux','хочет':'veut','любит':'aime','любят':'aiment','видит':'voit','видел':'a vu (masc.)',

  'вечером':"le soir",'дома':"à la maison",'праздник':"la fête",'зовут':"(on) appelle",'семья':"la famille",'читаю':"je lis",
  'днём':"dans la journée / l'après-midi",'другом':"un ami (instr.)",'книгу':"un livre (acc.)",'россии':"de Russie (gén.)",
  'люди':"les gens",'время':"le temps",'фильм':"le film",'санкт-петербург':"Saint-Pétersbourg",'музеев':"de musées (gén. pl.)",
  'многие':"beaucoup / nombreux",'большая':"grande",'мама':"maman",'папа':"papa",'работает':"travaille",'кофе':"le café",
  'утром':"le matin",'часов':"heures (gén. pl.)",'работу':"le travail (acc.)",'смотрю':"je regarde",'парке':"dans le parc (prép.)",
  'ночью':"la nuit",'пьём':"nous buvons",'осень':"l'automne",'субботу':"samedi (acc.)",'поезде':"dans le train (prép.)",
  'город':"la ville",'врач':"le médecin",'день':"le jour",'рождения':"anniversaire (gén.)",'торт':"le gâteau",
  'квартиру':"un appartement (acc.)",'одной':"une seule (instr./fém.)",'посмотрел':"a regardé / visité",'масленица':"Maslenitsa",
  'великим':"le Grand (instr.)",'неделю':"une semaine (acc.)",'новой':"nouvelle (instr./dat.)",'компании':"une entreprise",
  'менеджер':"le manager",'работы':"de travail (gén.)",'считается':"est considéré(e)",'несмотря':"malgré",'города':"de la ville (gén.)",
  'особенно':"en particulier",'тем':"(dans « тем не менее » = néanmoins)",'менее':"moins",'стороны':"côté",'может':"peut",
  'пушкин':"Pouchkine",'остаётся':"reste",'здравствуйте':"bonjour (formel)",'анна':"Anna",'живу':"j'habite",'москве':"à Moscou (prép.)",
  'учусь':"j'étudie",'люблю':"j'aime",'читать':"lire",'книги':"des livres",'слушать':"écouter",'утрам':"les matins",'пью':"je bois",
  'иду':"je vais",'работаю':"je travaille",'офисе':"au bureau (prép.)",'готовлю':"je prépare",'телевизор':"la télévision",
  'гуляю':"je me promène",'ложусь':"je me couche",'игорь':"Igor",'елена':"Elena",'старший':"aîné",'младшая':"cadette",
  'врачом':"comme médecin (instr.)",'учится':"étudie",'школе':"à l'école (prép.)",'воскресеньям':"les dimanches",'вся':"toute",
  'обедает':"déjeune",'идём':"nous allons",'ресторан':"le restaurant",'приносит':"apporte",'суп':"la soupe",'рыбу':"du poisson (acc.)",
  'мясо':"la viande",'салат':"la salade",'чай':"le thé",'еда':"la nourriture",'ужина':"du dîner (gén.)",'говорим':"nous disons",
  'вкусно':"c'est bon",'времени':"de temps (gén.)",'зима':"l'hiver",'весна':"le printemps",'лето':"l'été",'зимой':"en hiver (instr.)",
  'холодно':"il fait froid",'идёт':"(ici) il tombe",'летом':"en été (instr.)",'тепло':"il fait chaud",'отдыхают':"se reposent",
  'любимое':"préféré(e)",'становятся':"deviennent",'жёлтыми':"jaunes (instr.)",'красными':"rouges (instr.)",'улице':"dehors (prép.)",
  'солнечно':"il fait soleil",'хожу':"je vais (habituellement)",'магазин':"le magasin",'кафе':"le café (lieu)",'гуляем':"nous nous promenons",
  'воскресенье':"le dimanche",'отдыхаю':"je me repose",'прошлом':"dernier",'месяце':"mois (prép.)",'ездил':"je suis allé (en véhicule)",
  'поездка':"le voyage",'сидел':"j'étais assis",'окна':"la fenêtre (gén.)",'смотрел':"je regardais",'тихо':"c'était calme",
  'читал':"je lisais",'приехал':"je suis arrivé",'пошёл':"je suis allé",'гулять':"me promener",'городу':"la ville (dat.)",
  'красивый':"belle / beau",'каналов':"de canaux (gén.)",'себя':"soi-même",'чувствовал':"je me sentais",'пойти':"aller",
  'врачу':"chez le médecin (dat.)",'людей':"de gens / monde (gén.)",'полчаса':"une demi-heure",'спросил':"a demandé",'голова':"la tête",
  'горло':"la gorge",'пить':"boire",'больше':"plus",'воды':"de l'eau (gén.)",'отдыхать':"se reposer",'лекарство':"le médicament",
  'моей':"de mon amie (gén. fém.)",'подруги':"amie (gén.)",'купили':"ont acheté",'неё':"elle (gén.)",'пели':"ont chanté",'ели':"ont mangé",
  'рада':"contente",'всем':"à tous",'подаркам':"aux cadeaux",'закончился':"s'est terminé",'поздно':"tard",'ищу':"je cherche",
  'новую':"nouvel / nouvelle (acc.)",'месяц':"un mois",'нужна':"est nécessaire",'квартира':"un appartement",'центра':"du centre (gén.)",
  'спальней':"une chambre (instr.)",'кухней':"une cuisine (instr.)",'понравилась':"a plu",'маленькая':"petite",'дать':"donner",
  'ответ':"une réponse",'пятницы':"vendredi (gén.)",'русский':"russe",'постом':"le carême (instr.)",'пекут':"préparent (au four)",
  'едят':"mangent",'мёдом':"avec du miel (instr.)",'вареньем':"avec de la confiture (instr.)",'длится':"dure",'целую':"toute une (acc. fém.)",
  'последний':"dernier",'сжигают':"brûlent",'зимы':"de l'hiver (gén.)",'встретить':"accueillir",'весну':"le printemps (acc.)",
  'весёлый':"joyeux",'вкусный':"délicieux",'прошло':"s'est passé",'задавал':"posait",'вопросы':"des questions",'моём':"mon (prép.)",
  'рассказал':"j'ai raconté",'раньше':"auparavant",'работал':"j'ai travaillé",'маркетинге':"le marketing (prép.)",'конце':"à la fin (prép.)",
  'следующей':"prochaine",'неделе':"semaine (prép./dat.)",'надеюсь':"j'espère",'получу':"j'obtiendrai",'эту':"cette (acc. fém.)",
  'петром':"par Pierre (instr.)",'году':"en l'année (prép.)",'культурной':"culturelle (instr.)",'столицей':"comme capitale (instr.)",
  'известный':"connu",'своими':"ses propres (instr.)",'белыми':"blanches (instr.)",'ночами':"nuits (instr.)",'ежегодно':"chaque année",
  'миллионы':"des millions",'туристов':"de touristes",'эрмитаж':"l'Ermitage",'крупнейших':"des plus grands",'мира':"du monde (gén.)",
  'хранит':"conserve",'коллекцию':"une collection (acc.)",'более':"plus de",'трёх':"trois (gén.)",'миллионов':"de millions",
  'произведений':"d'œuvres (gén.)",'искусства':"d'art (gén.)",'климат':"le climat",'петербуржцы':"les habitants de Saint-Pétersbourg",
  'историей':"de l'histoire (instr.)",'своего':"de sa / leur propre (gén.)",'новый':"nouveau",'российский':"russe (relatif à la Russie)",
  'молодым':"jeune (instr.)",'режиссёром':"un réalisateur (instr.)",'история':"l'histoire (le récit)",'рассказывает':"raconte",
  'девушке':"une jeune femme (prép./dat.)",'маленького':"petite (gén.)",'москву':"Moscou (acc.)",'поисках':"à la recherche",
  'жизни':"de vie (gén.)",'актёрская':"des acteurs",'игра':"le jeu",'главная':"principale",'героиня':"l'héroïne",'сюжет':"l'intrigue",
  'местами':"par endroits",'кажется':"semble",'целом':"dans l'ensemble",'стоит':"vaut la peine",'посмотреть':"regarder / voir",
  'нравится':"plaît",'драма':"le drame",'изменение':"le changement",'климата':"du climat (gén.)",'одна':"l'une (fém.)",
  'главных':"principaux (gén.)",'проблем':"des problèmes (gén.)",'современности':"de notre époque (gén.)",'согласно':"selon",
  'учёных':"des scientifiques (gén.)",'средняя':"moyenne",'температура':"la température",'планете':"la planète (prép.)",
  'продолжает':"continue",'расти':"à augmenter",'приводит':"entraîne",'ледников':"des glaciers (gén.)",'повышению':"à l'élévation (dat.)",
  'уровня':"du niveau (gén.)",'моря':"de la mer (gén.)",'страны':"des pays",'принимают':"prennent",'меры':"des mesures",
  'сократить':"réduire",'углекислого':"carbonique (gén.)",'газа':"de gaz (gén.)",'эксперты':"les experts",'считают':"estiment",
  'этого':"cela (gén.)",'решения':"pour résoudre (gén.)",'проблемы':"le problème (gén.)",'социальные':"sociaux",'сети':"réseaux",
  'изменили':"ont changé",'позволяют':"permettent",'оставаться':"rester",'связи':"en contact",'друзьями':"avec des amis (instr.)",
  'родственниками':"avec des proches (instr.)",'живущими':"vivant (participe, instr.)",'далеко':"loin",'другой':"autre",
  'использование':"l'utilisation",'социальных':"sociaux (gén.)",'сетей':"de réseaux (gén.)",'негативно':"négativement",
  'психическое':"mentale",'здоровье':"la santé",'молодёжи':"chez les jeunes (gén.)",'психологи':"les psychologues",
  'рекомендуют':"recommandent",'проведённое':"passé (participe passif)",'интернете':"sur internet (prép.)",'александр':"Alexandre",
  'современного':"moderne (gén.)",'русского':"russe (gén.)",'литературного':"littéraire (gén.)",'языка':"de la langue (gén.)",
  'включая':"y compris",'роман':"le roman",'стихах':"en vers (prép.)",'евгений':"Eugène",'онегин':"Onéguine",'изучают':"étudient",
  'школах':"les écoles (prép. pl.)",'всей':"toute (gén. fém.)",'живший':"qui a vécu (participe)",'первой':"première (prép./dat.)",
  'половине':"moitié (prép.)",'девятнадцатого':"dix-neuvième (gén.)",'века':"siècle (gén.)",'дуэли':"en duel",'возрасте':"à l'âge (prép.)",
  'тридцати':"trente (gén.)",'семи':"sept (gén.)",'лет':"ans (gén. pl.)",'короткую':"courte (acc.)",'жизнь':"la vie",
  'влияние':"l'influence",'русскую':"russe (acc. fém.)",'культуру':"la culture (acc.)",'сих':"(« до сих пор » = jusqu'à présent)",
  'пор':"(« до сих пор » = jusqu'à présent)",'пандемии':"de la pandémie (gén.)",'разрешили':"ont autorisé",'работать':"travailler",
  'хотя':"bien que / au moins",'бы':"(particule du conditionnel)",'дней':"de jours (gén. pl.)",'сторонники':"les partisans",
  'такого':"une telle (gén.)",'подхода':"approche (gén.)",'удалённая':"à distance",'работа':"le travail",'повышает':"augmente",
  'экономит':"fait économiser",'дорогу':"le trajet (acc.)",'однако':"cependant",'критики':"les critiques",'привести':"entraîner",
  'чувству':"un sentiment (dat.)",'затруднить':"compliquer",'общение':"la communication",'коллегами':"entre collègues (instr.)",
  'вопрос':"la question",'том':"(« вопрос о том » = la question de savoir)",'формат':"le format",'лучше':"meilleur",'открытым':"ouverte (instr.)"
};

const THEME_ORDER = ['Présentation','Vie quotidienne','Famille & amis','Voyage','Nourriture & restaurant','Travail & études','Logement & ville','Vie sociale & fêtes','Culture russe','Société & technologie','Nature & saisons'];

const CONV_SYSTEM = `Tu es un partenaire de conversation russe pour un apprenant francophone de niveau A1 (faux débutant : il connaît quelques phrases mais ne maîtrise ni la grammaire ni la conjugaison).
Règles :
- Parle en russe simple avec des phrases courtes, puis ajoute la traduction française entre parenthèses.
- Si l'utilisateur fait une erreur, corrige-la gentiment en français en une phrase brève, puis continue la conversation.
- Pose des questions simples pour le faire parler.
- Reste toujours bienveillant et encourageant.
- Ne dépasse pas 3-4 phrases russes par réponse.`;
