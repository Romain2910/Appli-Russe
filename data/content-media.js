/* =========================================================
   CONTENU MEDIA (lecture, ecoute, oral)
   ========================================================= */

const TEXTS = [
  {id:'presentation', title:'Меня зовут Анна', level:'A1', theme:'Présentation',
   ru:`Здравствуйте! Меня зовут Анна. Я студентка[[étudiante]]. Я живу в Москве. Моя семья не очень большая: мама, папа и брат. Мой брат работает, а я учусь в университете[[à l'université]]. Я люблю читать книги и слушать музыку[[de la musique]]. По утрам я пью кофе и читаю новости[[les nouvelles]].`,
   fr:`Bonjour ! Je m'appelle Anna. Je suis étudiante. J'habite à Moscou. Ma famille n'est pas très grande : maman, papa et un frère. Mon frère travaille, et moi j'étudie à l'université. J'aime lire des livres et écouter de la musique. Le matin, je bois du café et je lis les nouvelles.`,
   q:[
    {q:'Comment s\'appelle la narratrice ?', o:['Мария','Анна','Ольга'], a:1},
    {q:'Où habite-t-elle ?', o:['В Москве','В Париже','В Лондоне'], a:0},
    {q:'Que fait-elle le matin ?', o:['Elle travaille','Elle boit du café et lit les nouvelles','Elle dort'], a:1}
   ]},
  {id:'moiden', title:'Мой день', level:'A1', theme:'Vie quotidienne',
   ru:`Утром я встаю[[je me lève]] в семь часов. Я завтракаю[[je prends le petit-déjeuner]] и иду на работу. Днём я работаю в офисе. Вечером я готовлю ужин[[je prépare le dîner]] и смотрю телевизор. Иногда я гуляю с другом в парке. Ночью я читаю книгу и ложусь спать[[je vais me coucher]].`,
   fr:`Le matin, je me lève à sept heures. Je prends le petit-déjeuner et je vais au travail. Dans la journée, je travaille au bureau. Le soir, je prépare le dîner et je regarde la télévision. Parfois je me promène avec un ami dans le parc. La nuit, je lis un livre et je vais me coucher.`,
   q:[
    {q:'À quelle heure se lève la personne ?', o:['À six heures','À sept heures','À huit heures'], a:1},
    {q:'Où travaille-t-elle ?', o:['Dans un magasin','Dans un office','Dans un parc'], a:1},
    {q:'Que fait-elle parfois le soir ?', o:['Elle se promène au parc avec un ami','Elle dort tôt','Elle cuisine pour son frère'], a:0}
   ]},
  {id:'semya', title:'Моя семья', level:'A1', theme:'Famille & amis',
   ru:`У меня большая семья. Это мой папа, его зовут Игорь. Это моя мама, её зовут Елена. У меня есть старший брат[[frère aîné]] и младшая сестра[[sœur cadette]]. Мой брат работает врачом в больнице[[à l'hôpital]]. Моя сестра учится в школе. По воскресеньям вся семья собирается[[se réunit]] вместе и обедает дома.`,
   fr:`J'ai une grande famille. Voici mon papa, il s'appelle Igor. Voici ma maman, elle s'appelle Elena. J'ai un frère aîné et une sœur cadette. Mon frère travaille comme médecin à l'hôpital. Ma sœur étudie à l'école. Le dimanche, toute la famille se réunit et déjeune à la maison.`,
   q:[
    {q:'Que fait le frère du narrateur ?', o:['Il étudie à l\'école','Il travaille comme médecin','Il travaille dans un magasin'], a:1},
    {q:'Quand la famille se réunit-elle ?', o:['Le samedi','Le dimanche','Tous les jours'], a:1},
    {q:'Qui est le plus jeune, le frère ou la sœur ?', o:['Le frère','La sœur','Ils ont le même âge'], a:1}
   ]},
  {id:'restoran', title:'В ресторане', level:'A1', theme:'Nourriture & restaurant',
   ru:`Вечером мы идём в ресторан. Официант[[le serveur]] приносит меню[[le menu]]. Я хочу суп и рыбу. Мой друг хочет мясо и салат. Мы пьём чай. Еда очень вкусная[[savoureuse]]. После ужина мы платим[[nous payons]] и говорим: «Спасибо, было очень вкусно!»`,
   fr:`Le soir, nous allons au restaurant. Le serveur apporte le menu. Je veux de la soupe et du poisson. Mon ami veut de la viande et de la salade. Nous buvons du thé. La nourriture est très bonne. Après le dîner, nous payons et disons : « Merci, c'était très bon ! »`,
   q:[
    {q:'Que veut manger le narrateur ?', o:['De la viande et de la salade','De la soupe et du poisson','Du pain et du fromage'], a:1},
    {q:'Que boivent-ils ?', o:['Du café','Du thé','De l\'eau'], a:1},
    {q:'Que disent-ils après le dîner ?', o:['Au revoir','Merci, c\'était très bon','À demain'], a:1}
   ]},
  {id:'pogoda', title:'Погода и времена года', level:'A1', theme:'Nature & saisons',
   ru:`В России четыре времени года[[saisons]]: зима, весна, лето и осень. Зимой очень холодно и идёт снег[[il neige]]. Летом тепло, и люди отдыхают на природе[[en pleine nature]]. Моё любимое время года — осень, потому что листья[[les feuilles]] становятся жёлтыми и красными. Сегодня на улице солнечно, но немного прохладно[[frais]].`,
   fr:`En Russie, il y a quatre saisons : l'hiver, le printemps, l'été et l'automne. En hiver, il fait très froid et il neige. En été, il fait chaud et les gens se reposent en pleine nature. Ma saison préférée est l'automne, parce que les feuilles deviennent jaunes et rouges. Aujourd'hui, il fait soleil dehors, mais un peu frais.`,
   q:[
    {q:'Combien de saisons y a-t-il en Russie ?', o:['Trois','Quatre','Cinq'], a:1},
    {q:'Quelle est la saison préférée du narrateur ?', o:['L\'hiver','L\'été','L\'automne'], a:2},
    {q:'Quel temps fait-il aujourd\'hui dans le texte ?', o:['Il neige','Ensoleillé mais frais','Il pleut'], a:1}
   ]},
  {id:'vykhodnye', title:'Выходные в городе', level:'A1', theme:'Vie quotidienne',
   ru:`В субботу утром я хожу в магазин за продуктами[[faire des courses]]. Потом я встречаюсь[[je retrouve]] с другом в кафе. Мы пьём кофе и разговариваем[[nous discutons]]. Днём мы гуляем в парке. Вечером я смотрю фильм дома. Воскресенье я отдыхаю и читаю книгу.`,
   fr:`Le samedi matin, je vais faire des courses au magasin. Ensuite je retrouve un ami dans un café. Nous buvons du café et discutons. L'après-midi, nous nous promenons dans le parc. Le soir, je regarde un film à la maison. Le dimanche, je me repose et je lis un livre.`,
   q:[
    {q:'Où va le narrateur samedi matin ?', o:['Au magasin','Au cinéma','À l\'école'], a:0},
    {q:'Que font-ils l\'après-midi ?', o:['Ils regardent un film','Ils se promènent dans le parc','Ils cuisinent'], a:1},
    {q:'Que fait le narrateur le dimanche ?', o:['Il travaille','Il se repose et lit','Il fait les courses'], a:1}
   ]},

  {id:'poezd', title:'Поездка на поезде', level:'A2', theme:'Voyage',
   ru:`В прошлом месяце я ездил в Санкт-Петербург на поезде. Поездка длилась[[a duré]] восемь часов. Я сидел у окна и смотрел на пейзажи[[les paysages]]. В поезде было тихо, и я читал книгу. Когда я приехал, я сразу[[immédiatement]] пошёл гулять по городу. Санкт-Петербург — очень красивый город, с множеством[[une multitude de]] музеев и каналов.`,
   fr:`Le mois dernier, je suis allé à Saint-Pétersbourg en train. Le voyage a duré huit heures. J'étais assis près de la fenêtre et je regardais les paysages. Dans le train, c'était calme, et j'ai lu un livre. Quand je suis arrivé, je suis immédiatement allé me promener en ville. Saint-Pétersbourg est une ville très belle, avec de nombreux musées et canaux.`,
   q:[
    {q:'Combien de temps a duré le voyage ?', o:['Quatre heures','Huit heures','Douze heures'], a:1},
    {q:'Qu\'a fait le narrateur en arrivant ?', o:['Il s\'est reposé à l\'hôtel','Il est allé se promener en ville','Il a dormi'], a:1},
    {q:'Qu\'est-ce qui caractérise Saint-Pétersbourg selon le texte ?', o:['Ses plages','Ses musées et canaux','Ses montagnes'], a:1}
   ]},
  {id:'vrach', title:'У врача', level:'A2', theme:'Vie quotidienne',
   ru:`Вчера я плохо себя чувствовал, и мне нужно было пойти к врачу. В поликлинике[[à la clinique]] было много людей, и я ждал[[j'ai attendu]] полчаса. Врач спросил, что у меня болит[[me fait mal]]. Я сказал, что у меня болит голова и горло. Врач посоветовал[[a conseillé]] мне пить больше воды и отдыхать. Он также выписал[[a prescrit]] лекарство.`,
   fr:`Hier, je ne me sentais pas bien, et j'ai dû aller chez le médecin. À la clinique, il y avait beaucoup de monde, et j'ai attendu une demi-heure. Le médecin a demandé ce qui me faisait mal. J'ai dit que j'avais mal à la tête et à la gorge. Le médecin m'a conseillé de boire plus d'eau et de me reposer. Il a aussi prescrit un médicament.`,
   q:[
    {q:'Pourquoi le narrateur est-il allé chez le médecin ?', o:['Pour un contrôle de routine','Il ne se sentait pas bien','Pour accompagner un ami'], a:1},
    {q:'Combien de temps a-t-il attendu ?', o:['Dix minutes','Une demi-heure','Deux heures'], a:1},
    {q:'Que lui a conseillé le médecin ?', o:['De prendre l\'avion','De boire plus d\'eau et se reposer','De faire du sport'], a:1}
   ]},
  {id:'den-rozhdenia', title:'День рождения', level:'A2', theme:'Vie sociale & fêtes',
   ru:`В субботу у моей подруги был день рождения. Мы купили ей подарок[[un cadeau]] и торт. Вечером все гости[[les invités]] собрались[[se sont réunis]] у неё дома. Мы пели «С днём рождения» и ели торт. Подруга была очень рада всем подаркам. Праздник закончился поздно ночью, и все были довольны[[satisfaits]].`,
   fr:`Samedi, c'était l'anniversaire de mon amie. Nous lui avons acheté un cadeau et un gâteau. Le soir, tous les invités se sont réunis chez elle. Nous avons chanté « Joyeux anniversaire » et mangé du gâteau. Mon amie était très contente de tous les cadeaux. La fête s'est terminée tard dans la nuit, et tout le monde était satisfait.`,
   q:[
    {q:'Qu\'ont-ils acheté pour l\'amie ?', o:['Des fleurs','Un cadeau et un gâteau','Un livre'], a:1},
    {q:'Où se sont réunis les invités ?', o:['Au restaurant','Chez elle','Au parc'], a:1},
    {q:'Comment était l\'amie ?', o:['Fatiguée','Très contente','Déçue'], a:1}
   ]},
  {id:'kvartira', title:'Поиск квартиры', level:'A2', theme:'Logement & ville',
   ru:`Я ищу новую квартиру уже месяц. Мне нужна квартира недалеко[[pas loin]] от центра, с одной спальней и кухней. Вчера я посмотрел квартиру, которая мне понравилась. Она недорогая[[pas chère]], но немного маленькая. Хозяйка[[la propriétaire]] сказала, что я должен дать ответ до пятницы. Я думаю, что я её сниму[[je vais le louer]].`,
   fr:`Je cherche un nouvel appartement depuis un mois déjà. J'ai besoin d'un appartement pas loin du centre, avec une chambre et une cuisine. Hier, j'ai visité un appartement qui m'a plu. Il n'est pas cher, mais un peu petit. La propriétaire a dit que je devais donner ma réponse avant vendredi. Je pense que je vais le louer.`,
   q:[
    {q:'Que cherche le narrateur ?', o:['Un nouveau travail','Un nouvel appartement','Une nouvelle voiture'], a:1},
    {q:'Quel est le défaut de l\'appartement visité ?', o:['Il est trop cher','Il est un peu petit','Il est trop loin'], a:1},
    {q:'Que doit-il faire avant vendredi ?', o:['Payer le loyer','Donner sa réponse','Déménager'], a:1}
   ]},
  {id:'maslenitsa', title:'Масленица', level:'A2', theme:'Culture russe',
   ru:`Масленица — это русский праздник, который отмечают[[célèbre]] перед Великим постом. Люди пекут блины[[des blinis]] и едят их с мёдом, сметаной[[crème aigre]] или вареньем. Праздник длится целую неделю. В последний день сжигают чучело[[un mannequin]] зимы, чтобы встретить весну. Масленица — весёлый и вкусный праздник!`,
   fr:`Maslenitsa est une fête russe que l'on célèbre avant le Grand Carême. Les gens font des blinis et les mangent avec du miel, de la crème aigre ou de la confiture. La fête dure toute une semaine. Le dernier jour, on brûle un mannequin de l'hiver pour accueillir le printemps. Maslenitsa est une fête joyeuse et délicieuse !`,
   q:[
    {q:'Quand célèbre-t-on Maslenitsa ?', o:['Après Pâques','Avant le Grand Carême','En été'], a:1},
    {q:'Que mange-t-on pendant la fête ?', o:['Des blinis','Des pelmenis','Du bortsch'], a:0},
    {q:'Que fait-on le dernier jour ?', o:['On brûle un mannequin de l\'hiver','On décore un sapin','On offre des cadeaux'], a:0}
   ]},
  {id:'sobesedovanie', title:'Собеседование', level:'A2', theme:'Travail & études',
   ru:`Сегодня у меня было собеседование[[un entretien]] в новой компании. Я немного волновался[[j'étais nerveux]], но всё прошло хорошо. Менеджер задавал вопросы о моём опыте[[expérience]] работы. Я рассказал, что раньше работал в маркетинге три года. В конце менеджер сказал, что перезвонит[[rappellera]] мне на следующей неделе. Я надеюсь, что получу эту работу!`,
   fr:`Aujourd'hui, j'avais un entretien d'embauche dans une nouvelle entreprise. J'étais un peu nerveux, mais tout s'est bien passé. Le manager a posé des questions sur mon expérience professionnelle. J'ai raconté que j'avais travaillé auparavant dans le marketing pendant trois ans. À la fin, le manager a dit qu'il me rappellerait la semaine prochaine. J'espère que j'aurai ce travail !`,
   q:[
    {q:'Comment le narrateur se sentait-il avant l\'entretien ?', o:['Très confiant','Un peu nerveux','Indifférent'], a:1},
    {q:'Dans quel domaine a-t-il travaillé ?', o:['La finance','Le marketing','L\'enseignement'], a:1},
    {q:'Que va faire le manager la semaine prochaine ?', o:['L\'embaucher tout de suite','Le rappeler','Annuler l\'entretien'], a:1}
   ]},

  {id:'peterburg', title:'Санкт-Петербург: культурная столица', level:'B1', theme:'Culture russe',
   ru:`Санкт-Петербург, основанный[[fondée]] Петром Великим в 1703 году, считается культурной столицей России. Город, известный своими белыми ночами и множеством музеев, ежегодно привлекает[[attire]] миллионы туристов. Эрмитаж, один из крупнейших музеев мира, хранит коллекцию, насчитывающую[[comptant]] более трёх миллионов произведений искусства. Несмотря на суровый[[rigoureux]] климат, петербуржцы гордятся[[sont fiers]] историей своего города.`,
   fr:`Saint-Pétersbourg, fondée par Pierre le Grand en 1703, est considérée comme la capitale culturelle de la Russie. La ville, connue pour ses nuits blanches et ses nombreux musées, attire chaque année des millions de touristes. L'Ermitage, l'un des plus grands musées du monde, conserve une collection comptant plus de trois millions d'œuvres d'art. Malgré un climat rigoureux, les habitants de Saint-Pétersbourg sont fiers de l'histoire de leur ville.`,
   q:[
    {q:'Qui a fondé Saint-Pétersbourg ?', o:['Staline','Pierre le Grand','Catherine II'], a:1},
    {q:'Que conserve l\'Ermitage ?', o:['Une collection de plus de 3 millions d\'œuvres','Des archives d\'État','Des manuscrits anciens uniquement'], a:0},
    {q:'Comment les habitants perçoivent-ils leur ville malgré le climat ?', o:['Ils veulent partir','Ils en sont fiers','Ils sont indifférents'], a:1}
   ]},
  {id:'film', title:'Рецензия на фильм', level:'B1', theme:'Culture russe',
   ru:`Вчера я посмотрел новый российский фильм, снятый[[réalisé]] молодым режиссёром. История рассказывает о девушке, которая переезжает[[déménage]] из маленького города в Москву в поисках новой жизни. Актёрская игра впечатляет[[impressionne]], особенно главная героиня. Тем не менее, сюжет местами кажется предсказуемым[[prévisible]]. В целом, фильм стоит посмотреть, если вам нравится драма.`,
   fr:`Hier, j'ai vu un nouveau film russe, réalisé par un jeune réalisateur. L'histoire raconte celle d'une jeune femme qui déménage d'une petite ville vers Moscou à la recherche d'une nouvelle vie. Le jeu des acteurs est impressionnant, en particulier l'héroïne principale. Néanmoins, l'intrigue semble par endroits prévisible. Dans l'ensemble, le film vaut la peine d'être vu si vous aimez le drame.`,
   q:[
    {q:'Qui est le personnage principal ?', o:['Un réalisateur célèbre','Une jeune femme qui déménage à Moscou','Un médecin de campagne'], a:1},
    {q:'Qu\'est-ce qui impressionne dans le film ?', o:['Les décors','Le jeu des acteurs','La musique'], a:1},
    {q:'Quel est le défaut relevé par le critique ?', o:['L\'intrigue est parfois prévisible','Le film est trop court','Les acteurs sont mauvais'], a:0}
   ]},
  {id:'klimat', title:'Изменение климата', level:'B1', theme:'Société & technologie',
   ru:`Изменение климата — одна из главных проблем современности. Согласно исследованиям[[recherches]] учёных, средняя температура на планете продолжает расти. Это приводит к таянию[[la fonte]] ледников и повышению уровня моря. Многие страны принимают меры, чтобы сократить выбросы[[émissions]] углекислого газа. Тем не менее, эксперты считают, что этого недостаточно[[insuffisant]] для решения проблемы.`,
   fr:`Le changement climatique est l'un des principaux problèmes de notre époque. Selon les recherches des scientifiques, la température moyenne de la planète continue d'augmenter. Cela entraîne la fonte des glaciers et l'élévation du niveau de la mer. De nombreux pays prennent des mesures pour réduire les émissions de gaz carbonique. Néanmoins, les experts estiment que cela ne suffit pas pour résoudre le problème.`,
   q:[
    {q:'Que se passe-t-il avec la température moyenne selon les scientifiques ?', o:['Elle diminue','Elle continue d\'augmenter','Elle reste stable'], a:1},
    {q:'Quelles conséquences cela entraîne-t-il ?', o:['Fonte des glaciers et montée du niveau de la mer','Plus de pluie partout','Aucune conséquence'], a:0},
    {q:'Que pensent les experts des mesures actuelles ?', o:['Elles sont suffisantes','Elles sont insuffisantes','Elles sont inutiles'], a:1}
   ]},
  {id:'socseti', title:'Социальные сети', level:'B1', theme:'Société & technologie',
   ru:`Социальные сети изменили то, как люди общаются[[communiquent]] друг с другом. С одной стороны, они позволяют оставаться на связи с друзьями и родственниками, живущими далеко. С другой стороны, чрезмерное[[excessif]] использование социальных сетей может негативно влиять[[influencer]] на психическое здоровье, особенно у молодёжи. Многие психологи рекомендуют ограничивать[[limiter]] время, проведённое в интернете.`,
   fr:`Les réseaux sociaux ont changé la façon dont les gens communiquent entre eux. D'un côté, ils permettent de rester en contact avec des amis et de la famille vivant loin. De l'autre côté, une utilisation excessive des réseaux sociaux peut avoir un impact négatif sur la santé mentale, en particulier chez les jeunes. De nombreux psychologues recommandent de limiter le temps passé sur internet.`,
   q:[
    {q:'Quel avantage des réseaux sociaux est mentionné ?', o:['Rester en contact avec des proches éloignés','Gagner de l\'argent','Trouver un emploi'], a:0},
    {q:'Quel est le risque évoqué ?', o:['Impact négatif sur la santé mentale','Problèmes de batterie','Coût trop élevé'], a:0},
    {q:'Que recommandent les psychologues ?', o:['D\'arrêter complètement','De limiter le temps passé sur internet','D\'en créer plusieurs comptes'], a:1}
   ]},
  {id:'pushkin', title:'Пушкин и русская литература', level:'B1', theme:'Culture russe',
   ru:`Александр Пушкин считается основателем[[fondateur]] современного русского литературного языка. Его произведения[[œuvres]], включая роман в стихах «Евгений Онегин», изучают в школах по всей России. Пушкин, живший в первой половине девятнадцатого века, погиб[[est mort]] на дуэли в возрасте тридцати семи лет. Несмотря на короткую жизнь, его влияние на русскую культуру остаётся огромным[[immense]] до сих пор.`,
   fr:`Alexandre Pouchkine est considéré comme le fondateur de la langue littéraire russe moderne. Ses œuvres, dont le roman en vers « Eugène Onéguine », sont étudiées dans les écoles à travers toute la Russie. Pouchkine, qui a vécu dans la première moitié du dix-neuvième siècle, est mort en duel à l'âge de trente-sept ans. Malgré une vie courte, son influence sur la culture russe reste immense encore aujourd'hui.`,
   q:[
    {q:'Pour quoi Pouchkine est-il considéré comme fondateur ?', o:['La langue littéraire russe moderne','Le cinéma russe','La musique classique'], a:0},
    {q:'Comment est-il mort ?', o:['De maladie','En duel','En voyage'], a:1},
    {q:'Quel âge avait-il à sa mort ?', o:['27 ans','37 ans','57 ans'], a:1}
   ]},
  {id:'udalenka', title:'Работа из дома', level:'B1', theme:'Société & technologie',
   ru:`После пандемии многие компании разрешили сотрудникам[[aux employés]] работать из дома хотя бы несколько дней в неделю. Сторонники такого подхода утверждают[[affirment]], что удалённая работа повышает продуктивность[[productivité]] и экономит время на дорогу. Однако критики отмечают, что это может привести к чувству изоляции[[isolement]] и затруднить общение между коллегами. Вопрос о том, какой формат работы лучше, остаётся открытым.`,
   fr:`Après la pandémie, de nombreuses entreprises ont autorisé leurs employés à travailler depuis chez eux au moins quelques jours par semaine. Les partisans de cette approche affirment que le télétravail augmente la productivité et fait gagner du temps de trajet. Cependant, les critiques soulignent que cela peut entraîner un sentiment d'isolement et compliquer la communication entre collègues. La question de savoir quel format de travail est le meilleur reste ouverte.`,
   q:[
    {q:'Que permettent de nombreuses entreprises depuis la pandémie ?', o:['Le télétravail partiel','La semaine de 3 jours','Les congés illimités'], a:0},
    {q:'Quel avantage citent les partisans du télétravail ?', o:['Moins de responsabilités','Productivité accrue et gain de temps','Salaire plus élevé'], a:1},
    {q:'Quel risque soulignent les critiques ?', o:['Sentiment d\'isolement','Trop de réunions','Manque de matériel'], a:0}
   ]},
  {id:'utro-budni', title:'Утро в будни', level:'A2', theme:'Vie quotidienne',
   ru:`Каждое утро я встаю в шесть тридцать, потому что дорога[[le trajet]] до работы занимает[[prend (du temps)]] почти час. Сначала я принимаю душ[[je prends une douche]], потом одеваюсь[[je m'habille]] и завтракаю. По дороге я слушаю подкасты[[des podcasts]] или музыку. В будни[[les jours de semaine]] у меня мало свободного времени[[de temps libre]], поэтому по выходным я стараюсь[[j'essaie]] ничего не планировать и просто отдыхать.`,
   fr:`Chaque matin je me lève à six heures et demie, parce que le trajet jusqu'au travail prend presque une heure. D'abord je prends une douche, puis je m'habille et je prends le petit-déjeuner. Sur le chemin, j'écoute des podcasts ou de la musique. En semaine, j'ai peu de temps libre, donc le week-end j'essaie de ne rien planifier et de simplement me reposer.`,
   q:[
    {q:'Combien de temps dure le trajet jusqu\'au travail ?', o:['Une demi-heure','Presque une heure','Deux heures'], a:1},
    {q:'Que fait la personne après la douche ?', o:['Elle dort encore','Elle s\'habille et prend le petit-déjeuner','Elle part directement'], a:1},
    {q:'Que fait-elle le week-end ?', o:['Elle travaille encore plus','Elle essaie de ne rien planifier','Elle voyage toujours'], a:1}
   ]},
  {id:'balans', title:'Баланс между работой и отдыхом', level:'B1', theme:'Vie quotidienne',
   ru:`Найти баланс[[trouver un équilibre]] между работой и личной жизнью[[vie personnelle]] непросто[[pas simple]], особенно когда работаешь из дома. Границы[[les limites]] между рабочим и свободным временем стираются[[s'effacent]]: легко ответить на письмо поздно вечером или проверить[[vérifier]] почту в выходной. Психологи советуют устанавливать[[fixer]] чёткие[[claires]] правила: например, не открывать рабочую почту после определённого часа. Те, кто следует[[suit]] этому совету, чувствуют себя[[se sentent]] менее уставшими и более довольными жизнью.`,
   fr:`Trouver un équilibre entre le travail et la vie personnelle n'est pas simple, surtout quand on travaille depuis chez soi. Les limites entre le temps professionnel et le temps libre s'effacent : il est facile de répondre à un email tard le soir ou de vérifier sa messagerie un jour de repos. Les psychologues conseillent de fixer des règles claires : par exemple, ne pas ouvrir sa messagerie professionnelle après une certaine heure. Ceux qui suivent ce conseil se sentent moins fatigués et plus satisfaits de leur vie.`,
   q:[
    {q:'Pourquoi est-il difficile de séparer travail et vie personnelle selon le texte ?', o:['Parce qu\'on voyage trop','Parce qu\'on travaille depuis chez soi et les limites s\'effacent','Parce qu\'on n\'a pas d\'ordinateur'], a:1},
    {q:'Que conseillent les psychologues ?', o:['De travailler le week-end','De fixer des règles claires, comme un horaire limite pour les emails','De changer de métier'], a:1},
    {q:'Quel est l\'effet de suivre ce conseil ?', o:['Se sentir moins fatigué et plus satisfait','Gagner plus d\'argent','Travailler plus vite'], a:0}
   ]},
  {id:'den-bez-telefona', title:'Один день без телефона', level:'B1', theme:'Vie quotidienne',
   ru:`На прошлой неделе я решил провести целый день без телефона[[passer une journée entière sans téléphone]]. Сначала было трудно: я постоянно[[constamment]] тянулся[[avais envie]] проверить сообщения. Но постепенно[[peu à peu]] я заметил, что стал внимательнее[[plus attentif]] к тому, что происходит вокруг: к разговорам, к природе, к собственным мыслям[[mes propres pensées]]. Вечером я почувствовал, что этот день был на удивление[[étonnamment]] спокойным. Теперь я стараюсь устраивать[[organiser]] такие дни хотя бы раз в месяц.`,
   fr:`La semaine dernière, j'ai décidé de passer une journée entière sans téléphone. Au début, c'était difficile : j'avais constamment envie de vérifier mes messages. Mais peu à peu, j'ai remarqué que je devenais plus attentif à ce qui se passait autour de moi : aux conversations, à la nature, à mes propres pensées. Le soir, j'ai senti que cette journée avait été étonnamment calme. Maintenant j'essaie d'organiser ce genre de journées au moins une fois par mois.`,
   q:[
    {q:'Qu\'a décidé de faire le narrateur la semaine dernière ?', o:['Changer de téléphone','Passer une journée entière sans téléphone','Arrêter de travailler'], a:1},
    {q:'Qu\'a-t-il remarqué peu à peu ?', o:['Qu\'il s\'ennuyait beaucoup','Qu\'il devenait plus attentif à ce qui l\'entourait','Qu\'il avait besoin d\'aide'], a:1},
    {q:'À quelle fréquence veut-il refaire ce genre de journée ?', o:['Chaque jour','Au moins une fois par mois','Jamais'], a:1}
   ]},
  {id:'babushka-vykhodnye', title:'Наши выходные с бабушкой', level:'A1', theme:'Famille & amis',
   ru:`По субботам мы часто ездим[[nous allons (en véhicule)]] к бабушке в гости[[en visite]]. Бабушка живёт недалеко от нас, в маленьком доме с садом[[avec un jardin]]. Она всегда готовит вкусный обед и печёт[[fait cuire]] пирог[[une tarte]]. После обеда мы гуляем в саду или играем в карты[[aux cartes]]. Бабушка рассказывает[[raconte]] истории о своей молодости[[sa jeunesse]]. Мне очень нравится проводить время[[passer du temps]] с ней.`,
   fr:`Le samedi, nous allons souvent chez ma grand-mère en visite. Ma grand-mère habite non loin de chez nous, dans une petite maison avec un jardin. Elle prépare toujours un bon déjeuner et fait cuire une tarte. Après le déjeuner, nous nous promenons dans le jardin ou nous jouons aux cartes. Ma grand-mère raconte des histoires sur sa jeunesse. J'aime beaucoup passer du temps avec elle.`,
   q:[
    {q:'Où habite la grand-mère ?', o:['Loin, dans une autre ville','Non loin, dans une petite maison avec jardin','Dans un appartement en ville'], a:1},
    {q:'Que fait la grand-mère avant le repas ?', o:['Elle lit un livre','Elle prépare un déjeuner et une tarte','Elle regarde la télévision'], a:1},
    {q:'De quoi parle la grand-mère ?', o:['De politique','De sa jeunesse','De cuisine seulement'], a:1}
   ]},
  {id:'svadba-sestry', title:'Свадьба моей сестры', level:'A2', theme:'Famille & amis',
   ru:`В прошлом месяце моя сестра вышла замуж[[s'est mariée]]. Свадьба[[le mariage]] проходила[[a eu lieu]] в небольшом ресторане недалеко от родительского дома. Было около пятидесяти гостей: родственники[[les proches / famille]] с обеих сторон[[des deux côtés]] и близкие друзья. Сестра выглядела[[avait l'air]] очень красиво в белом платье[[robe]]. Все танцевали и веселились[[s'amusaient]] до поздней ночи. Я никогда не забуду этот день.`,
   fr:`Le mois dernier, ma sœur s'est mariée. Le mariage a eu lieu dans un petit restaurant non loin de la maison de nos parents. Il y avait environ cinquante invités : des proches des deux côtés et des amis proches. Ma sœur avait l'air très belle dans sa robe blanche. Tout le monde a dansé et s'est amusé jusque tard dans la nuit. Je n'oublierai jamais cette journée.`,
   q:[
    {q:'Où le mariage a-t-il eu lieu ?', o:['Dans un grand hôtel en ville','Dans un petit restaurant près de la maison des parents','À l\'étranger'], a:1},
    {q:'Combien d\'invités environ étaient présents ?', o:['Une vingtaine','Une cinquantaine','Plus de deux cents'], a:1},
    {q:'Jusqu\'à quand a duré la fête ?', o:['Jusqu\'au dîner seulement','Jusque tard dans la nuit','Jusqu\'au lendemain matin'], a:1}
   ]},
  {id:'leto-derevnya', title:'Летом у бабушки в деревне', level:'A2', theme:'Famille & amis',
   ru:`Когда я был ребёнком, каждое лето я проводил[[je passais]] у бабушки в деревне[[au village]]. Мы вставали рано и ходили за грибами[[cueillir des champignons]] или купались[[nous baignions]] в реке. Двоюродные братья[[cousins]] тоже приезжали, и мы вместе играли на улице до самого вечера. Вечером бабушка звала[[appelait]] нас ужинать, и вся семья собиралась за одним столом. Это было счастливое время[[une époque heureuse]].`,
   fr:`Quand j'étais enfant, chaque été je le passais chez ma grand-mère au village. Nous nous levions tôt et nous allions cueillir des champignons ou nous baigner dans la rivière. Mes cousins venaient aussi, et nous jouions ensemble dehors jusqu'au soir même. Le soir, ma grand-mère nous appelait pour dîner, et toute la famille se réunissait autour d'une même table. C'était une époque heureuse.`,
   q:[
    {q:'Où le narrateur passait-il ses étés enfant ?', o:['Chez sa grand-mère au village','À la mer','En colonie de vacances'], a:0},
    {q:'Que faisaient-ils le matin ?', o:['Ils regardaient la télévision','Ils cueillaient des champignons ou se baignaient','Ils faisaient leurs devoirs'], a:1},
    {q:'Qui venait aussi pendant l\'été ?', o:['Les voisins','Les cousins','Des amis d\'école'], a:1}
   ]},
  {id:'pokoleniya', title:'Отношения между поколениями', level:'B1', theme:'Famille & amis',
   ru:`Отношения между родителями и детьми меняются[[changent]] с каждым поколением[[génération]]. Сегодня многие молодые люди уезжают[[partent]] жить далеко от семьи ради[[pour]] учёбы или работы, и поэтому общение[[la communication]] чаще происходит[[a lieu]] по видеосвязи[[en visio]], чем лично. С одной стороны, это позволяет оставаться на связи, несмотря на расстояние[[malgré la distance]]. С другой стороны, некоторые психологи считают, что живое общение[[les échanges en personne]] невозможно полностью заменить[[remplacer]] технологиями.`,
   fr:`Les relations entre parents et enfants changent avec chaque génération. Aujourd'hui, beaucoup de jeunes partent vivre loin de leur famille pour leurs études ou leur travail, et c'est pourquoi la communication a lieu plus souvent en visio qu'en personne. D'un côté, cela permet de rester en contact malgré la distance. De l'autre, certains psychologues estiment que les échanges en personne ne peuvent pas être totalement remplacés par la technologie.`,
   q:[
    {q:'Pourquoi beaucoup de jeunes partent-ils vivre loin de leur famille ?', o:['Pour les études ou le travail','Pour fuir leurs parents','Par obligation légale'], a:0},
    {q:'Comment la communication se fait-elle souvent aujourd\'hui selon le texte ?', o:['Par lettre','En visio, plus qu\'en personne','Elle n\'existe presque plus'], a:1},
    {q:'Que pensent certains psychologues de la technologie ?', o:['Qu\'elle remplace parfaitement les échanges en personne','Qu\'elle ne peut pas totalement les remplacer','Qu\'elle est inutile'], a:1}
   ]},
  {id:'bolshaya-semya', title:'Большая семья: плюсы и минусы', level:'B1', theme:'Famille & amis',
   ru:`В больших семьях, где живут несколько поколений[[plusieurs générations]] под одной крышей[[sous un même toit]], есть свои преимущества[[avantages]] и недостатки[[inconvénients]]. С одной стороны, старшие члены семьи[[les aînés]] могут помогать с детьми и передавать[[transmettre]] жизненный опыт[[expérience de vie]]. С другой стороны, отсутствие[[l'absence]] личного пространства[[espace personnel]] иногда становится источником[[une source]] конфликтов. Несмотря на трудности, многие говорят, что большая семья даёт чувство поддержки[[soutien]], которого не хватает[[qui manque]] в одиночестве[[dans la solitude]].`,
   fr:`Dans les grandes familles où vivent plusieurs générations sous un même toit, il y a des avantages et des inconvénients. D'un côté, les aînés peuvent aider avec les enfants et transmettre leur expérience de vie. De l'autre, l'absence d'espace personnel devient parfois une source de conflits. Malgré les difficultés, beaucoup disent qu'une grande famille donne un sentiment de soutien qui manque dans la solitude.`,
   q:[
    {q:'Quel avantage est mentionné pour les grandes familles ?', o:['Les aînés aident et transmettent leur expérience','Plus d\'argent disponible','Moins de travail ménager'], a:0},
    {q:'Quel inconvénient est cité ?', o:['Le manque d\'espace personnel','Le manque de nourriture','Le bruit des voisins'], a:0},
    {q:'Que ressentent beaucoup de gens malgré les difficultés ?', o:['De l\'indifférence','Un sentiment de soutien','De la peur'], a:1}
   ]},
  {id:'avtobus-centr', title:'Автобус до центра', level:'A1', theme:'Voyage',
   ru:`Каждый день я езжу[[je vais (en véhicule, habituellement)]] на автобусе до центра города. Остановка[[l'arrêt]] находится[[se trouve]] рядом с моим домом. Автобус приходит[[arrive]] каждые десять минут. В автобусе я обычно сижу у окна и смотрю на улицы. Дорога занимает двадцать минут. В центре я выхожу[[je descends]] на площади[[la place]] и иду пешком[[à pied]] до работы.`,
   fr:`Chaque jour, je vais en bus jusqu'au centre-ville. L'arrêt se trouve à côté de chez moi. Le bus arrive toutes les dix minutes. Dans le bus, je m'assois d'habitude près de la fenêtre et je regarde les rues. Le trajet dure vingt minutes. Au centre, je descends sur la place et je vais à pied jusqu'au travail.`,
   q:[
    {q:'Où se trouve l\'arrêt de bus ?', o:['Loin de chez le narrateur','À côté de chez lui','Au centre-ville'], a:1},
    {q:'Combien de temps dure le trajet ?', o:['Dix minutes','Vingt minutes','Une heure'], a:1},
    {q:'Comment le narrateur va-t-il de la place à son travail ?', o:['En taxi','À pied','En métro'], a:1}
   ]},
  {id:'more', title:'Мы едем на море', level:'A1', theme:'Voyage',
   ru:`Летом моя семья едет отдыхать на море[[à la mer]]. Мы берём[[nous prenons]] чемоданы[[les valises]] и едем на машине пять часов. По дороге мы останавливаемся[[nous nous arrêtons]] пообедать в кафе. Когда мы приезжаем, мы сразу идём на пляж[[la plage]] и купаемся в море. Вечером мы едим мороженое[[une glace]] и гуляем у моря. Это моё любимое время года.`,
   fr:`En été, ma famille part se reposer à la mer. Nous prenons les valises et nous roulons en voiture pendant cinq heures. En chemin, nous nous arrêtons pour déjeuner dans un café. Quand nous arrivons, nous allons tout de suite à la plage et nous nous baignons dans la mer. Le soir, nous mangeons une glace et nous nous promenons au bord de la mer. C'est ma saison préférée.`,
   q:[
    {q:'Combien de temps dure le trajet en voiture ?', o:['Deux heures','Cinq heures','Toute la journée'], a:1},
    {q:'Que font-ils en arrivant ?', o:['Ils dorment','Ils vont à la plage et se baignent','Ils font les courses'], a:1},
    {q:'Que mangent-ils le soir ?', o:['Une soupe','Une glace','Du pain'], a:1}
   ]},
  {id:'gory', title:'Путешествие в горы', level:'A2', theme:'Voyage',
   ru:`В прошлом году мы с друзьями поехали в горы[[à la montagne]] на неделю. Мы жили в маленьком домике[[une petite maison]] без интернета и телевизора. Каждый день мы ходили в поход[[en randonnée]] и любовались[[admirions]] видами[[les paysages / vues]]. Погода была переменчивой[[changeante]]: то солнце, то дождь. Вечером мы готовили ужин на костре[[au feu de camp]] и разговаривали до полуночи[[jusqu'à minuit]]. Это было незабываемое[[inoubliable]] путешествие.`,
   fr:`L'année dernière, je suis parti à la montagne avec des amis pour une semaine. Nous vivions dans une petite maison sans internet ni télévision. Chaque jour, nous partions en randonnée et admirions les paysages. Le temps était changeant : tantôt du soleil, tantôt de la pluie. Le soir, nous préparions le dîner au feu de camp et discutions jusqu'à minuit. C'était un voyage inoubliable.`,
   q:[
    {q:'Où vivaient-ils pendant la semaine ?', o:['Dans un hôtel de luxe','Dans une petite maison sans internet ni télé','Dans une tente sur la plage'], a:1},
    {q:'Comment était le temps ?', o:['Toujours ensoleillé','Changeant, entre soleil et pluie','Toujours pluvieux'], a:1},
    {q:'Que faisaient-ils le soir ?', o:['Ils regardaient la télévision','Ils préparaient le dîner au feu de camp et discutaient','Ils dormaient tout de suite'], a:1}
   ]},
  {id:'odinochku', title:'Путешествия в одиночку', level:'B1', theme:'Voyage',
   ru:`Всё больше людей выбирают[[choisissent]] путешествовать в одиночку[[voyager en solo]], а не в компании[[en groupe]]. Сторонники[[les partisans]] такого подхода говорят, что одиночные путешествия помогают лучше узнать[[connaître]] себя и делают человека более независимым[[indépendant]]. К тому же[[de plus]], без спутников[[compagnons de voyage]] легче знакомиться[[faire connaissance]] с местными жителями[[habitants locaux]]. Однако у этого есть и обратная сторона[[un revers]]: некоторые чувствуют себя одиноко[[seuls]], особенно вечером, вдали от[[loin de]] дома.`,
   fr:`De plus en plus de gens choisissent de voyager en solo plutôt qu'en groupe. Les partisans de cette approche disent que les voyages en solo aident à mieux se connaître soi-même et rendent la personne plus indépendante. De plus, sans compagnons de voyage, il est plus facile de faire connaissance avec les habitants locaux. Cependant, cela a aussi son revers : certains se sentent seuls, surtout le soir, loin de chez eux.`,
   q:[
    {q:'Que permettent les voyages en solo selon leurs partisans ?', o:['De dépenser moins d\'argent','De mieux se connaître soi-même et gagner en indépendance','De voyager plus vite'], a:1},
    {q:'Quel avantage social est mentionné ?', o:['Il est plus facile de rencontrer les habitants locaux','On rencontre moins de monde','On évite tous les contacts'], a:0},
    {q:'Quel est l\'inconvénient évoqué ?', o:['Le prix trop élevé','Le sentiment de solitude, surtout le soir','La fatigue physique'], a:1}
   ]},
  {id:'ekoturizm', title:'Экотуризм в России', level:'B1', theme:'Voyage',
   ru:`Экотуризм[[l'écotourisme]] становится всё более популярным[[de plus en plus populaire]] в России. Туристы посещают[[visitent]] национальные парки[[parcs nationaux]] и заповедники[[réserves naturelles]], такие как Байкал[[le Baïkal]] или Камчатка[[le Kamtchatka]], чтобы увидеть нетронутую[[intacte]] природу. Организаторы таких поездок стараются[[essaient]] минимизировать[[minimiser]] воздействие[[l'impact]] на окружающую среду[[l'environnement]]: например, ограничивают[[limitent]] число посетителей[[visiteurs]] и запрещают[[interdisent]] оставлять мусор[[laisser des déchets]]. Многие путешественники говорят, что такие поездки меняют их отношение[[rapport]] к природе.`,
   fr:`L'écotourisme devient de plus en plus populaire en Russie. Les touristes visitent des parcs nationaux et des réserves naturelles, comme le Baïkal ou le Kamtchatka, pour voir une nature intacte. Les organisateurs de ces voyages essaient de minimiser l'impact sur l'environnement : par exemple, ils limitent le nombre de visiteurs et interdisent de laisser des déchets. Beaucoup de voyageurs disent que ces voyages changent leur rapport à la nature.`,
   q:[
    {q:'Quels lieux sont cités comme exemples d\'écotourisme en Russie ?', o:['Moscou et Saint-Pétersbourg','Le Baïkal et le Kamtchatka','La Crimée'], a:1},
    {q:'Comment les organisateurs limitent-ils l\'impact environnemental ?', o:['En limitant le nombre de visiteurs et en interdisant les déchets','En vendant plus de billets','En construisant des hôtels'], a:0},
    {q:'Quel effet ces voyages ont-ils selon certains voyageurs ?', o:['Aucun effet particulier','Ils changent leur rapport à la nature','Ils les fatiguent'], a:1}
   ]},
  {id:'kukhnya', title:'На кухне', level:'A1', theme:'Nourriture & restaurant',
   ru:`По вечерам я люблю готовить[[cuisiner]] на кухне[[dans la cuisine]]. Сегодня я готовлю суп и салат. Сначала я режу[[je coupe]] овощи[[les légumes]]: морковь[[carotte]], лук[[oignon]] и картофель[[pomme de terre]]. Потом я варю[[je fais bouillir]] суп на плите[[sur la cuisinière]]. Пахнет[[ça sent]] очень вкусно! Когда суп готов, вся семья садится[[s'assoit]] за стол и ужинает вместе.`,
   fr:`Le soir, j'aime cuisiner dans la cuisine. Aujourd'hui je prépare une soupe et une salade. D'abord je coupe les légumes : carotte, oignon et pomme de terre. Ensuite je fais bouillir la soupe sur la cuisinière. Ça sent très bon ! Quand la soupe est prête, toute la famille s'assoit à table et dîne ensemble.`,
   q:[
    {q:'Que prépare le narrateur ce soir ?', o:['Une pizza','Une soupe et une salade','Un gâteau'], a:1},
    {q:'Quels légumes coupe-t-il ?', o:['Tomate, poivron, ail','Carotte, oignon, pomme de terre','Concombre, courgette, aubergine'], a:1},
    {q:'Que fait la famille quand la soupe est prête ?', o:['Elle sort au restaurant','Elle s\'assoit à table et dîne ensemble','Elle regarde un film'], a:1}
   ]},
  {id:'recept', title:'Мой любимый рецепт', level:'A2', theme:'Nourriture & restaurant',
   ru:`Мой любимый рецепт[[la recette]] — это блины[[des blinis]], которые готовила моя бабушка. Нужно смешать[[mélanger]] муку[[farine]], молоко[[lait]] и яйца[[œufs]], а потом жарить[[faire frire]] тесто[[la pâte]] на сковороде[[la poêle]]. Я обычно ем блины с мёдом или вареньем. По воскресеньям я готовлю их для всей семьи, и это всегда напоминает[[rappelle]] мне о детстве[[l'enfance]].`,
   fr:`Ma recette préférée, ce sont les blinis que préparait ma grand-mère. Il faut mélanger de la farine, du lait et des œufs, puis faire frire la pâte dans la poêle. D'habitude, je mange les blinis avec du miel ou de la confiture. Le dimanche, je les prépare pour toute la famille, et cela me rappelle toujours mon enfance.`,
   q:[
    {q:'Qui préparait ce plat à l\'origine ?', o:['La mère du narrateur','La grand-mère du narrateur','Un chef célèbre'], a:1},
    {q:'Que faut-il mélanger pour faire des blinis ?', o:['Farine, lait et œufs','Riz et légumes','Viande et fromage'], a:0},
    {q:'Que ressent le narrateur en préparant ce plat ?', o:['De l\'ennui','Cela lui rappelle son enfance','De la fatigue'], a:1}
   ]},
  {id:'uzhin-druzyami', title:'Ужин с друзьями', level:'A2', theme:'Nourriture & restaurant',
   ru:`В пятницу вечером мы с друзьями решили поужинать[[dîner]] вместе дома. Каждый принёс[[a apporté]] что-то своё[[quelque chose de son cru]]: кто-то салат, кто-то десерт, кто-то вино. Мы накрыли[[avons dressé]] стол, зажгли свечи[[allumé des bougies]] и включили музыку[[mis de la musique]]. Мы ели, разговаривали и смеялись[[riions]] почти до полуночи. Такие вечера всегда поднимают[[remontent]] настроение[[le moral]].`,
   fr:`Vendredi soir, mes amis et moi avons décidé de dîner ensemble à la maison. Chacun a apporté quelque chose de son cru : l'un une salade, l'autre un dessert, un autre du vin. Nous avons dressé la table, allumé des bougies et mis de la musique. Nous avons mangé, discuté et ri presque jusqu'à minuit. Ces soirées-là remontent toujours le moral.`,
   q:[
    {q:'Où le dîner a-t-il eu lieu ?', o:['Au restaurant','À la maison','Au parc'], a:1},
    {q:'Qu\'a apporté chaque ami ?', o:['Rien, tout était acheté','Chacun a apporté quelque chose de son cru','Seulement des boissons'], a:1},
    {q:'Jusqu\'à quand ont-ils discuté ?', o:['Jusqu\'au dessert seulement','Presque jusqu\'à minuit','Jusqu\'à l\'aube'], a:1}
   ]},
  {id:'russkaya-kukhnya', title:'Русская кухня и традиции', level:'B1', theme:'Nourriture & restaurant',
   ru:`Русская кухня[[la cuisine russe]] тесно связана[[étroitement liée]] с историей и климатом страны. Из-за долгих зим[[longs hivers]] многие блюда[[plats]] традиционно готовились так, чтобы они могли долго храниться[[se conserver]]: соленья[[les conserves salées]], квашеная капуста[[la choucroute]], копчёности[[les fumaisons]]. Суп остаётся[[reste]] центральным[[central]] элементом русского обеда: без него трапеза[[le repas]] считается неполной[[incomplète]]. Сегодня традиционные рецепты сочетаются[[se combinent]] с современными кулинарными[[culinaires]] тенденциями, но многие семьи по-прежнему[[continuent de]] готовят блюда по рецептам бабушек.`,
   fr:`La cuisine russe est étroitement liée à l'histoire et au climat du pays. À cause des longs hivers, de nombreux plats étaient traditionnellement préparés pour pouvoir se conserver longtemps : conserves salées, choucroute, fumaisons. La soupe reste un élément central du repas russe : sans elle, le repas est considéré comme incomplet. Aujourd'hui, les recettes traditionnelles se combinent avec les tendances culinaires modernes, mais de nombreuses familles continuent de préparer des plats selon les recettes de leurs grands-mères.`,
   q:[
    {q:'Pourquoi certains plats traditionnels devaient-ils se conserver longtemps ?', o:['À cause des longs hivers','Par manque de réfrigérateurs modernes uniquement','Par tradition religieuse'], a:0},
    {q:'Quel plat est décrit comme central dans un repas russe ?', o:['La salade','La soupe','Le dessert'], a:1},
    {q:'Que se passe-t-il aujourd\'hui avec les recettes traditionnelles ?', o:['Elles ont totalement disparu','Elles se combinent avec des tendances modernes','Elles sont interdites'], a:1}
   ]},
  {id:'vegetarianstvo', title:'Вегетарианство: новая мода?', level:'B1', theme:'Nourriture & restaurant',
   ru:`В последние годы[[ces dernières années]] всё больше людей в России отказываются[[renoncent]] от мяса[[viande]] и переходят на вегетарианскую[[végétarienne]] диету. Одни делают это по этическим[[éthiques]] причинам, другие — заботясь[[se souciant]] о здоровье[[santé]] или об окружающей среде[[l'environnement]]. В крупных городах открывается[[s'ouvre]] всё больше вегетарианских кафе, а супермаркеты предлагают[[proposent]] растительные[[végétales]] альтернативы[[alternatives]] молочным продуктам и мясу. Тем не менее, в маленьких городах найти[[trouver]] такие продукты по-прежнему[[toujours]] сложно.`,
   fr:`Ces dernières années, de plus en plus de gens en Russie renoncent à la viande et passent à un régime végétarien. Certains le font pour des raisons éthiques, d'autres en se souciant de leur santé ou de l'environnement. Dans les grandes villes, de plus en plus de cafés végétariens ouvrent, et les supermarchés proposent des alternatives végétales aux produits laitiers et à la viande. Néanmoins, dans les petites villes, il reste toujours difficile de trouver ce genre de produits.`,
   q:[
    {q:'Pour quelles raisons certains deviennent-ils végétariens ?', o:['Uniquement pour des raisons de mode','Pour des raisons éthiques, de santé ou environnementales','Pour des raisons financières uniquement'], a:1},
    {q:'Que trouve-t-on de plus en plus dans les grandes villes ?', o:['Des cafés végétariens et des alternatives végétales','Des boucheries uniquement','Rien de nouveau'], a:0},
    {q:'Quelle est la situation dans les petites villes ?', o:['Identique aux grandes villes','Il est encore difficile de trouver ces produits','Ces produits n\'existent pas du tout'], a:1}
   ]},
  {id:'rabochiy-den', title:'Мой рабочий день', level:'A1', theme:'Travail & études',
   ru:`Я работаю в офисе с девяти до шести. Утром я проверяю[[je vérifie]] почту[[courrier]] и пью кофе. Днём у меня встречи[[réunions]] с коллегами[[collègues]]. В обед я ем в кафе рядом с офисом. После работы я иду домой пешком, потому что это недалеко. Мне нравится моя работа, потому что коллеги дружелюбные[[sympathiques]].`,
   fr:`Je travaille au bureau de neuf heures à dix-huit heures. Le matin, je vérifie mon courrier et je bois du café. Dans la journée, j'ai des réunions avec mes collègues. À midi, je mange dans un café près du bureau. Après le travail, je rentre à pied, car ce n'est pas loin. J'aime mon travail parce que mes collègues sont sympathiques.`,
   q:[
    {q:'De quelle heure à quelle heure travaille le narrateur ?', o:['De 8h à 17h','De 9h à 18h','De 10h à 19h'], a:1},
    {q:'Où mange-t-il à midi ?', o:['Au bureau','Dans un café près du bureau','Chez lui'], a:1},
    {q:'Pourquoi aime-t-il son travail ?', o:['Car il est bien payé','Car ses collègues sont sympathiques','Car il travaille peu'], a:1}
   ]},
  {id:'universitet', title:'В университете', level:'A1', theme:'Travail & études',
   ru:`Я учусь на втором курсе[[en deuxième année]] университета. У меня занятия[[cours]] каждый день, кроме воскресенья. Мой любимый предмет[[matière]] — история[[histoire]]. После занятий я хожу в библиотеку[[bibliothèque]] делать домашнее задание[[devoirs]]. По вечерам я иногда встречаюсь с однокурсниками[[camarades de fac]] в кафе рядом с университетом.`,
   fr:`Je suis en deuxième année d'université. J'ai cours chaque jour, sauf le dimanche. Ma matière préférée, c'est l'histoire. Après les cours, je vais à la bibliothèque pour faire mes devoirs. Le soir, je retrouve parfois mes camarades de fac dans un café près de l'université.`,
   q:[
    {q:'En quelle année d\'études est le narrateur ?', o:['Première année','Deuxième année','Troisième année'], a:1},
    {q:'Quelle est sa matière préférée ?', o:['Les mathématiques','L\'histoire','La chimie'], a:1},
    {q:'Où va-t-il après les cours ?', o:['À la bibliothèque','Directement chez lui','Au sport'], a:0}
   ]},
  {id:'novaya-rabota', title:'Первый день на новой работе', level:'A2', theme:'Travail & études',
   ru:`Вчера был мой первый день на новой работе[[au nouveau travail]]. Я немного нервничал[[j'étais un peu nerveux]] утром, но коллеги встретили[[ont accueilli]] меня очень тепло[[chaleureusement]]. Мой начальник[[chef]] показал[[a montré]] мне офис и объяснил[[a expliqué]] мои обязанности[[mes tâches]]. Днём мы вместе пообедали, и я познакомился[[j'ai fait connaissance]] с командой[[équipe]]. К вечеру я почувствовал[[j'ai senti]] себя гораздо увереннее[[bien plus confiant]].`,
   fr:`Hier, c'était mon premier jour à mon nouveau travail. J'étais un peu nerveux le matin, mais mes collègues m'ont accueilli très chaleureusement. Mon chef m'a montré le bureau et m'a expliqué mes tâches. Le midi, nous avons déjeuné ensemble, et j'ai fait connaissance avec l'équipe. Vers le soir, je me suis senti bien plus confiant.`,
   q:[
    {q:'Comment se sentait le narrateur le matin ?', o:['Très confiant','Un peu nerveux','Indifférent'], a:1},
    {q:'Comment les collègues l\'ont-ils accueilli ?', o:['Froidement','Très chaleureusement','Ils ne l\'ont pas remarqué'], a:1},
    {q:'Comment se sentait-il vers le soir ?', o:['Toujours nerveux','Bien plus confiant','Épuisé'], a:1}
   ]},
  {id:'vybor-professii', title:'Выбор профессии', level:'B1', theme:'Travail & études',
   ru:`Выбор профессии[[le choix d'une carrière]] — один из самых важных[[l'un des plus importants]] решений в жизни. Многие молодые люди испытывают[[éprouvent]] давление[[pression]] со стороны родителей[[de la part des parents]], которые хотят, чтобы дети выбрали[[choisissent]] стабильную[[stable]] и хорошо оплачиваемую[[bien rémunérée]] профессию. Однако психологи считают, что важнее[[plus important]] учитывать[[prendre en compte]] собственные интересы[[ses propres intérêts]] и способности[[ses capacités]]. Всё больше молодых людей сегодня меняют[[changent]] профессию несколько раз в течение жизни, и это становится нормой[[la norme]].`,
   fr:`Le choix d'une carrière est l'une des décisions les plus importantes de la vie. Beaucoup de jeunes ressentent une pression de la part de leurs parents, qui veulent que leurs enfants choisissent une profession stable et bien rémunérée. Cependant, les psychologues estiment qu'il est plus important de prendre en compte ses propres intérêts et capacités. De plus en plus de jeunes changent aujourd'hui de métier plusieurs fois au cours de leur vie, et cela devient la norme.`,
   q:[
    {q:'Quelle pression subissent souvent les jeunes selon le texte ?', o:['Celle de leurs amis','Celle de leurs parents, qui veulent une profession stable et bien payée','Celle de leurs professeurs uniquement'], a:1},
    {q:'Que recommandent les psychologues ?', o:['De suivre uniquement l\'avis des parents','De prendre en compte ses propres intérêts et capacités','De choisir le métier le mieux payé'], a:1},
    {q:'Que devient courant chez les jeunes aujourd\'hui ?', o:['Garder le même métier toute sa vie','Changer de métier plusieurs fois','Ne jamais travailler'], a:1}
   ]},
  {id:'stazhirovka', title:'Стажировка за границей', level:'B1', theme:'Travail & études',
   ru:`Стажировка[[le stage]] за границей[[à l'étranger]] — отличная возможность[[une excellente occasion]] получить международный опыт[[expérience internationale]] и улучшить[[améliorer]] иностранный язык. Многие студенты, вернувшись[[étant revenus]] из такой поездки, отмечают[[soulignent]], что стали более самостоятельными[[autonomes]] и открытыми[[ouverts]] к другой культуре. Однако адаптация[[l'adaptation]] к новой стране требует времени[[demande du temps]]: языковой барьер[[la barrière linguistique]] и тоска по дому[[le mal du pays]] могут осложнить[[compliquer]] первые недели. Тем не менее, большинство считает этот опыт бесценным[[inestimable]].`,
   fr:`Un stage à l'étranger est une excellente occasion d'acquérir une expérience internationale et d'améliorer une langue étrangère. Beaucoup d'étudiants, de retour d'un tel voyage, soulignent qu'ils sont devenus plus autonomes et plus ouverts à une autre culture. Cependant, l'adaptation à un nouveau pays demande du temps : la barrière linguistique et le mal du pays peuvent compliquer les premières semaines. Néanmoins, la plupart considère cette expérience comme inestimable.`,
   q:[
    {q:'Quel avantage principal offre un stage à l\'étranger ?', o:['Un salaire plus élevé immédiatement','Une expérience internationale et l\'amélioration d\'une langue','Des vacances gratuites'], a:1},
    {q:'Quelles difficultés sont mentionnées au début du séjour ?', o:['Le manque de nourriture','La barrière linguistique et le mal du pays','Le manque de transport'], a:1},
    {q:'Comment la plupart des étudiants jugent-ils finalement cette expérience ?', o:['Inutile','Inestimable','Trop fatigante pour en valoir la peine'], a:1}
   ]},
  {id:'moya-kvartira', title:'Моя квартира', level:'A1', theme:'Logement & ville',
   ru:`Я живу в небольшой квартире[[appartement]] в центре города. У меня есть спальня[[chambre]], кухня и гостиная[[salon]]. Окна[[fenêtres]] моей квартиры выходят[[donnent]] на парк, поэтому в комнате всегда светло[[clair]]. Мебель[[meubles]] у меня простая, но уютная[[confortable]]. Мне нравится моя квартира, потому что она недалеко от работы и от метро.`,
   fr:`J'habite dans un petit appartement au centre-ville. J'ai une chambre, une cuisine et un salon. Les fenêtres de mon appartement donnent sur un parc, donc la pièce est toujours claire. Mes meubles sont simples mais confortables. J'aime mon appartement parce qu'il est près de mon travail et du métro.`,
   q:[
    {q:'Où se trouve l\'appartement ?', o:['En banlieue','Au centre-ville','À la campagne'], a:1},
    {q:'Sur quoi donnent les fenêtres ?', o:['Sur une rue bruyante','Sur un parc','Sur un autre immeuble'], a:1},
    {q:'Pourquoi le narrateur aime-t-il son appartement ?', o:['Il est très grand','Il est près du travail et du métro','Il est gratuit'], a:1}
   ]},
  {id:'moy-gorod', title:'Мой город', level:'A1', theme:'Logement & ville',
   ru:`Я живу в небольшом городе на юге[[au sud]] страны. В моём городе есть старая церковь[[église]], рынок[[marché]] и красивый парк у реки. Летом на площади часто проходят[[ont lieu]] концерты. Люди здесь дружелюбные[[amicaux]], и все друг друга знают[[se connaissent]]. Мне нравится жить в моём городе, потому что здесь тихо и спокойно[[calme]].`,
   fr:`J'habite dans une petite ville au sud du pays. Dans ma ville, il y a une vieille église, un marché et un beau parc au bord de la rivière. En été, des concerts ont souvent lieu sur la place. Les gens ici sont amicaux, et tout le monde se connaît. J'aime vivre dans ma ville parce qu'ici c'est tranquille et calme.`,
   q:[
    {q:'Où se trouve la ville du narrateur ?', o:['Au nord du pays','Au sud du pays','À l\'étranger'], a:1},
    {q:'Que se passe-t-il souvent l\'été sur la place ?', o:['Des marchés aux fleurs','Des concerts','Rien de spécial'], a:1},
    {q:'Pourquoi le narrateur aime-t-il sa ville ?', o:['Elle est grande et animée','Elle est tranquille et calme','Elle est proche de la mer'], a:1}
   ]},
  {id:'pereezd-rayon', title:'Переезд в новый район', level:'A2', theme:'Logement & ville',
   ru:`В прошлом месяце мы переехали[[avons déménagé]] в новый район[[quartier]] на окраине[[à la périphérie]] города. Сначала было немного грустно[[triste]] расставаться[[se séparer]] со старыми соседями[[voisins]], но новый район оказался[[s'est révélé]] очень удобным[[pratique]]: рядом есть школа, магазины и остановка автобуса. Соседи здесь дружелюбные, и мы уже познакомились[[avons fait connaissance]] с некоторыми из них. Теперь я думаю, что переезд был хорошим решением[[une bonne décision]].`,
   fr:`Le mois dernier, nous avons déménagé dans un nouveau quartier à la périphérie de la ville. Au début, c'était un peu triste de se séparer des anciens voisins, mais le nouveau quartier s'est révélé très pratique : à proximité il y a une école, des magasins et un arrêt de bus. Les voisins ici sont sympathiques, et nous avons déjà fait connaissance avec certains d'entre eux. Maintenant, je pense que le déménagement était une bonne décision.`,
   q:[
    {q:'Où se trouve le nouveau quartier ?', o:['Au centre-ville','À la périphérie de la ville','À la campagne'], a:1},
    {q:'Qu\'est-ce qui rend le nouveau quartier pratique ?', o:['La proximité d\'une école, de magasins et d\'un arrêt de bus','La proximité de la mer','Le grand nombre de restaurants'], a:0},
    {q:'Que pense finalement le narrateur du déménagement ?', o:['Que c\'était une erreur','Que c\'était une bonne décision','Il n\'est pas encore sûr'], a:1}
   ]},
  {id:'bolshoi-gorod', title:'Жизнь в большом городе', level:'B1', theme:'Logement & ville',
   ru:`Жизнь в большом городе имеет свои преимущества и недостатки[[avantages et inconvénients]]. С одной стороны, здесь больше возможностей[[opportunités]] для работы, учёбы и развлечений[[loisirs]]. С другой стороны, высокая[[élevée]] стоимость жизни[[coût de la vie]], постоянный шум[[bruit constant]] и загрязнение[[la pollution]] воздуха утомляют[[fatiguent]] многих жителей. Некоторые в итоге[[finalement]] переезжают в пригород[[banlieue]] или маленький город в поисках[[à la recherche de]] более спокойной[[calme]] жизни, сохраняя[[tout en gardant]] при этом работу в городе.`,
   fr:`La vie dans une grande ville a ses avantages et ses inconvénients. D'un côté, il y a ici plus d'opportunités de travail, d'études et de loisirs. De l'autre, le coût de la vie élevé, le bruit constant et la pollution de l'air fatiguent de nombreux habitants. Certains finissent par déménager en banlieue ou dans une petite ville à la recherche d'une vie plus calme, tout en gardant leur travail en ville.`,
   q:[
    {q:'Quel avantage des grandes villes est cité ?', o:['Plus d\'opportunités de travail, d\'études et de loisirs','Moins de bruit','Un coût de la vie plus bas'], a:0},
    {q:'Quels inconvénients sont mentionnés ?', o:['Le manque de transports','Le coût de la vie élevé, le bruit et la pollution','Le manque d\'école'], a:1},
    {q:'Que font certains habitants en conséquence ?', o:['Ils quittent définitivement leur travail','Ils déménagent en banlieue tout en gardant leur travail en ville','Ils ne changent rien'], a:1}
   ]},
  {id:'arenda-pokupka', title:'Аренда или покупка жилья?', level:'B1', theme:'Logement & ville',
   ru:`Вопрос о том, что выгоднее[[plus avantageux]] — снимать[[louer]] или покупать[[acheter]] жильё[[logement]] — остаётся[[reste]] актуальным[[d'actualité]] для многих молодых людей. Сторонники аренды[[partisans de la location]] говорят о гибкости[[flexibilité]]: можно легко переехать[[déménager]] в другой город ради работы. Сторонники покупки, напротив[[au contraire]], считают, что ипотека[[le crédit immobilier]] — это вложение[[un investissement]] в будущее, а не потерянные деньги[[argent perdu]]. Ответ во многом зависит от[[dépend beaucoup de]] личных обстоятельств[[circonstances personnelles]] каждого человека.`,
   fr:`La question de savoir ce qui est plus avantageux — louer ou acheter un logement — reste d'actualité pour beaucoup de jeunes. Les partisans de la location parlent de flexibilité : on peut facilement déménager dans une autre ville pour le travail. Les partisans de l'achat, au contraire, estiment que le crédit immobilier est un investissement pour l'avenir, et non de l'argent perdu. La réponse dépend beaucoup des circonstances personnelles de chacun.`,
   q:[
    {q:'Quel argument avancent les partisans de la location ?', o:['La flexibilité pour déménager','Le prix toujours plus bas','La sécurité financière'], a:0},
    {q:'Comment les partisans de l\'achat voient-ils le crédit immobilier ?', o:['Comme de l\'argent perdu','Comme un investissement pour l\'avenir','Comme une erreur'], a:1},
    {q:'De quoi dépend la réponse selon le texte ?', o:['Uniquement de l\'âge','Des circonstances personnelles de chacun','De la météo'], a:1}
   ]},
  {id:'vecherinka', title:'Вечеринка у друга', level:'A1', theme:'Vie sociale & fêtes',
   ru:`В субботу вечером у моего друга была вечеринка[[une fête]] по случаю[[à l'occasion de]] его дня рождения. Гости[[invités]] принесли[[ont apporté]] подарки и еду. Мы слушали музыку и танцевали[[dansions]]. Мой друг был очень рад видеть[[content de voir]] всех своих друзей. Мы ушли поздно[[sommes partis tard]], но это была отличная[[excellente]] вечеринка!`,
   fr:`Samedi soir, mon ami a organisé une fête pour son anniversaire. Les invités ont apporté des cadeaux et de la nourriture. Nous avons écouté de la musique et dansé. Mon ami était très content de voir tous ses amis. Nous sommes partis tard, mais c'était une excellente fête !`,
   q:[
    {q:'À quelle occasion la fête a-t-elle eu lieu ?', o:['Un mariage','L\'anniversaire de l\'ami','Une remise de diplôme'], a:1},
    {q:'Qu\'ont apporté les invités ?', o:['Seulement des fleurs','Des cadeaux et de la nourriture','Rien'], a:1},
    {q:'Quand sont-ils partis ?', o:['Tôt le soir','Tard','Le lendemain matin'], a:1}
   ]},
  {id:'novyi-god', title:'Новый год', level:'A1', theme:'Vie sociale & fêtes',
   ru:`Новый год[[le Nouvel An]] — самый любимый праздник в России. Тридцать первого декабря вся семья собирается[[se réunit]] за столом. Мы наряжаем[[décorons]] ёлку[[le sapin]] и готовим много вкусной еды. В полночь[[à minuit]] мы смотрим салют[[les feux d'artifice]] и поздравляем[[félicitons]] друг друга. Дети получают подарки под ёлкой. Это очень весёлый[[joyeux]] и семейный праздник.`,
   fr:`Le Nouvel An est la fête préférée en Russie. Le trente-et-un décembre, toute la famille se réunit à table. Nous décorons le sapin et préparons beaucoup de bons plats. À minuit, nous regardons les feux d'artifice et nous nous félicitons les uns les autres. Les enfants reçoivent des cadeaux sous le sapin. C'est une fête très joyeuse et familiale.`,
   q:[
    {q:'Quand la famille se réunit-elle ?', o:['Le 25 décembre','Le 31 décembre','Le 1er janvier au matin'], a:1},
    {q:'Que font-ils à minuit ?', o:['Ils dorment','Ils regardent les feux d\'artifice et se félicitent','Ils partent en voyage'], a:1},
    {q:'Où les enfants reçoivent-ils leurs cadeaux ?', o:['Sous le sapin','Dans leur chambre','À l\'école'], a:0}
   ]},
  {id:'svadba-rossii', title:'Свадьба в России', level:'A2', theme:'Vie sociale & fêtes',
   ru:`Русская свадьба[[mariage russe]] обычно длится[[dure]] два дня. В первый день молодожёны[[les jeunes mariés]] расписываются[[se marient officiellement]] в загсе[[bureau d'état civil]], а вечером устраивают[[organisent]] банкет[[banquet]] с гостями. Гости дарят[[offrent]] подарки или деньги в конверте[[une enveloppe]]. Традиционно на свадьбе кричат[[on crie]] «Горько!»[[« Amer ! »]], и тогда жених и невеста[[le marié et la mariée]] должны поцеловаться[[s'embrasser]]. Второй день часто проходит[[se déroule]] более спокойно, в кругу[[dans le cercle]] близких.`,
   fr:`Un mariage russe dure généralement deux jours. Le premier jour, les jeunes mariés se marient officiellement au bureau d'état civil, et le soir ils organisent un banquet avec les invités. Les invités offrent des cadeaux ou de l'argent dans une enveloppe. Traditionnellement, pendant le mariage on crie « Amer ! », et alors le marié et la mariée doivent s'embrasser. Le deuxième jour se déroule souvent plus calmement, en cercle restreint.`,
   q:[
    {q:'Combien de temps dure généralement un mariage russe ?', o:['Un jour','Deux jours','Une semaine'], a:1},
    {q:'Que font les invités traditionnellement pour les cadeaux ?', o:['Ils offrent des cadeaux ou de l\'argent dans une enveloppe','Ils n\'offrent jamais rien','Ils offrent seulement des fleurs'], a:0},
    {q:'Que doivent faire les mariés quand les invités crient « Горько! » ?', o:['Danser','S\'embrasser','Chanter'], a:1}
   ]},
  {id:'druzhba-socseti', title:'Дружба в социальных сетях', level:'B1', theme:'Vie sociale & fêtes',
   ru:`Социальные сети изменили[[ont changé]] представление[[la notion]] о дружбе[[l'amitié]]. Сегодня можно иметь сотни[[des centaines]] «друзей» онлайн, но при этом чувствовать себя одиноким[[se sentir seul]] в реальной жизни. Психологи отмечают[[soulignent]] разницу[[la différence]] между количеством[[quantité]] контактов и качеством[[qualité]] отношений[[relations]]: настоящая дружба требует[[demande]] времени, доверия[[confiance]] и личного общения[[échanges en personne]]. Тем не менее, соцсети также помогают поддерживать[[maintenir]] связь[[le lien]] с друзьями, которые живут далеко.`,
   fr:`Les réseaux sociaux ont changé la notion d'amitié. Aujourd'hui, on peut avoir des centaines d'« amis » en ligne, tout en se sentant seul dans la vraie vie. Les psychologues soulignent la différence entre la quantité de contacts et la qualité des relations : une véritable amitié demande du temps, de la confiance et des échanges en personne. Néanmoins, les réseaux sociaux aident aussi à maintenir le lien avec des amis qui vivent loin.`,
   q:[
    {q:'Que peut-on avoir en ligne selon le texte ?', o:['Des centaines d\'"amis" tout en se sentant seul','Uniquement de vrais amis','Aucun contact'], a:0},
    {q:'Que soulignent les psychologues ?', o:['La différence entre quantité de contacts et qualité des relations','Que les réseaux sociaux sont inutiles','Que l\'amitié en ligne est meilleure'], a:0},
    {q:'Quel avantage des réseaux sociaux est mentionné à la fin ?', o:['Ils aident à maintenir le lien avec des amis éloignés','Ils remplacent totalement les amis réels','Ils sont gratuits'], a:0}
   ]},
  {id:'tradicii-prazdniki', title:'Традиции и современные праздники', level:'B1', theme:'Vie sociale & fêtes',
   ru:`Многие традиционные[[traditionnelles]] российские праздники сегодня сочетаются[[se combinent]] с новыми, более современными[[modernes]] формами празднования[[de célébration]]. Например, Масленицу теперь отмечают не только семьями дома, но и большими городскими фестивалями[[festivals]] с концертами и ярмарками[[marchés]]. Некоторые критикуют[[critiquent]] такую коммерциализацию[[commercialisation]] традиций, считая[[estimant]], что теряется[[se perd]] изначальный[[originel]] смысл[[sens]] праздника. Другие же считают, что главное — сохранить[[préserver]] сами традиции, даже если форма меняется[[change]].`,
   fr:`De nombreuses fêtes traditionnelles russes se combinent aujourd'hui avec de nouvelles formes de célébration, plus modernes. Par exemple, Maslenitsa n'est plus célébrée seulement en famille à la maison, mais aussi par de grands festivals urbains avec concerts et marchés. Certains critiquent cette commercialisation des traditions, estimant que le sens originel de la fête se perd. D'autres pensent au contraire que l'essentiel est de préserver les traditions elles-mêmes, même si la forme change.`,
   q:[
    {q:'Comment Maslenitsa est-elle célébrée aujourd\'hui en plus des familles ?', o:['Elle n\'est plus du tout célébrée','Par de grands festivals urbains avec concerts et marchés','Uniquement en privé'], a:1},
    {q:'Que critiquent certains à propos de cette évolution ?', o:['La commercialisation, qui ferait perdre le sens originel','Le manque de nourriture','Le prix trop bas'], a:0},
    {q:'Quel est l\'avis d\'autres personnes ?', o:['L\'essentiel est de préserver les traditions même si la forme change','Il faut arrêter toutes les fêtes','La forme ne doit jamais changer'], a:0}
   ]},
  {id:'skazki', title:'Русские сказки', level:'A1', theme:'Culture russe',
   ru:`Русские сказки[[contes russes]] — важная[[importante]] часть[[partie]] культуры России. В детстве[[dans l'enfance]] бабушки и мамы читают детям сказки перед сном[[avant de dormir]]. Самые известные[[célèbres]] герои[[personnages]] — это Баба-яга[[Baba Yaga]], Иван-царевич[[Ivan Tsarévitch]] и Жар-птица[[l'Oiseau de feu]]. В сказках добро[[le bien]] всегда побеждает[[triomphe]] зло[[le mal]]. Многие русские дети до сих пор[[encore aujourd'hui]] любят эти истории.`,
   fr:`Les contes russes sont une partie importante de la culture de la Russie. Dans l'enfance, les grands-mères et les mamans lisent des contes aux enfants avant de dormir. Les personnages les plus célèbres sont Baba Yaga, Ivan Tsarévitch et l'Oiseau de feu. Dans les contes, le bien triomphe toujours du mal. Beaucoup d'enfants russes aiment encore ces histoires aujourd'hui.`,
   q:[
    {q:'Qui lit les contes aux enfants ?', o:['Les professeurs seulement','Les grands-mères et les mamans','Personne, ils les lisent seuls'], a:1},
    {q:'Qui est un personnage célèbre cité dans le texte ?', o:['Baba Yaga','Cendrillon','Le Petit Chaperon rouge'], a:0},
    {q:'Que triomphe toujours dans les contes ?', o:['Le mal','Le bien','Personne ne gagne'], a:1}
   ]},
  {id:'matryoshka', title:'Матрёшка', level:'A1', theme:'Culture russe',
   ru:`Матрёшка[[la matriochka]] — известный[[célèbre]] русский сувенир[[souvenir]]. Это деревянная[[en bois]] кукла[[poupée]], внутри которой находится[[se trouve]] ещё одна кукла, поменьше[[plus petite]], и так далее[[et ainsi de suite]]. Обычно матрёшка состоит из[[est composée de]] пяти или семи кукол. Туристы часто покупают[[achètent]] матрёшку в подарок[[en cadeau]]. Каждая матрёшка расписана[[peinte]] вручную[[à la main]] и по-своему[[à sa manière]] уникальна[[unique]].`,
   fr:`La matriochka est un souvenir russe célèbre. C'est une poupée en bois, à l'intérieur de laquelle se trouve une autre poupée, plus petite, et ainsi de suite. Généralement, une matriochka est composée de cinq ou sept poupées. Les touristes achètent souvent une matriochka en cadeau. Chaque matriochka est peinte à la main et unique à sa manière.`,
   q:[
    {q:'Qu\'est-ce qu\'une matriochka ?', o:['Un plat traditionnel','Une poupée en bois avec d\'autres poupées à l\'intérieur','Un instrument de musique'], a:1},
    {q:'De combien de poupées est généralement composée une matriochka ?', o:['Deux ou trois','Cinq ou sept','Vingt'], a:1},
    {q:'Comment chaque matriochka est-elle peinte ?', o:['À la machine, toutes identiques','À la main, chacune unique','Elle n\'est jamais peinte'], a:1}
   ]},
  {id:'bolshoi-teatr', title:'Балет в Большом театре', level:'A2', theme:'Culture russe',
   ru:`На прошлой неделе я впервые[[pour la première fois]] сходил[[je suis allé]] на балет[[ballet]] в Большой театр[[le théâtre Bolchoï]] в Москве. Здание[[le bâtiment]] театра очень красивое, с золотыми[[dorés]] украшениями[[décorations]]. Мы смотрели «Лебединое озеро»[[Le Lac des cygnes]]. Танцоры[[danseurs]] двигались[[bougeaient]] невероятно[[incroyablement]] легко и грациозно[[avec grâce]]. После спектакля[[spectacle]] зрители[[spectateurs]] долго аплодировали[[ont applaudi]] стоя[[debout]].`,
   fr:`La semaine dernière, je suis allé pour la première fois voir un ballet au théâtre Bolchoï à Moscou. Le bâtiment du théâtre est très beau, avec des décorations dorées. Nous avons vu « Le Lac des cygnes ». Les danseurs bougeaient avec une grâce et une légèreté incroyables. Après le spectacle, les spectateurs ont applaudi debout pendant longtemps.`,
   q:[
    {q:'Quel ballet le narrateur a-t-il vu ?', o:['Casse-Noisette','Le Lac des cygnes','La Belle au bois dormant'], a:1},
    {q:'Comment est décrit le bâtiment du théâtre ?', o:['Simple et moderne','Très beau, avec des décorations dorées','Petit et ancien'], a:1},
    {q:'Qu\'ont fait les spectateurs après le spectacle ?', o:['Ils sont partis rapidement','Ils ont applaudi debout longtemps','Ils ont dormi'], a:1}
   ]},
  {id:'moy-telefon', title:'Мой телефон', level:'A1', theme:'Société & technologie',
   ru:`У меня есть смартфон[[smartphone]], и я использую[[j'utilise]] его каждый день. Я звоню[[j'appelle]] родителям, пишу сообщения[[messages]] друзьям и смотрю новости. Иногда я играю в игры[[jeux]] или слушаю музыку. Вечером я стараюсь[[j'essaie]] откладывать[[poser / laisser de côté]] телефон и читать книгу вместо этого[[à la place]].`,
   fr:`J'ai un smartphone, et je l'utilise chaque jour. J'appelle mes parents, j'écris des messages à mes amis et je regarde les infos. Parfois je joue à des jeux ou j'écoute de la musique. Le soir, j'essaie de poser mon téléphone et de lire un livre à la place.`,
   q:[
    {q:'Que fait le narrateur avec son téléphone chaque jour ?', o:['Il appelle ses parents et écrit à ses amis','Il ne l\'utilise presque jamais','Il le prête à d\'autres'], a:0},
    {q:'Que fait-il parfois ?', o:['Il joue à des jeux ou écoute de la musique','Il ne fait rien d\'autre','Il travaille'], a:0},
    {q:'Que fait-il le soir ?', o:['Il utilise encore plus son téléphone','Il essaie de le poser et de lire un livre','Il l\'éteint et dort tout de suite'], a:1}
   ]},
  {id:'internet-doma', title:'Интернет дома', level:'A1', theme:'Société & technologie',
   ru:`У нас дома есть интернет, и вся семья им пользуется[[l'utilise]]. Мама смотрит новости и читает статьи[[articles]]. Папа работает онлайн. Я учусь и общаюсь[[je communique]] с друзьями. Иногда интернет работает медленно[[fonctionne lentement]], и это немного раздражает[[agace]]. Но в целом[[dans l'ensemble]] интернет очень полезен[[utile]] для всей семьи.`,
   fr:`Chez nous, il y a internet, et toute la famille l'utilise. Maman regarde les infos et lit des articles. Papa travaille en ligne. J'étudie et je communique avec mes amis. Parfois internet fonctionne lentement, et ça agace un peu. Mais dans l'ensemble, internet est très utile pour toute la famille.`,
   q:[
    {q:'Que fait la maman avec internet ?', o:['Elle joue à des jeux','Elle regarde les infos et lit des articles','Elle ne l\'utilise jamais'], a:1},
    {q:'Que fait le papa ?', o:['Il travaille en ligne','Il regarde des films toute la journée','Il n\'a pas d\'ordinateur'], a:0},
    {q:'Qu\'est-ce qui agace parfois la famille ?', o:['Le prix trop élevé','Internet qui fonctionne lentement','Le manque d\'ordinateur'], a:1}
   ]},
  {id:'onlain-pokupki', title:'Онлайн-покупки', level:'A2', theme:'Société & technologie',
   ru:`В последние годы я стал[[je suis devenu]] покупать[[acheter]] почти всё онлайн: одежду[[vêtements]], технику[[appareils électroniques]], даже продукты[[produits alimentaires]]. Это удобно[[pratique]], потому что не нужно ехать в магазин и можно сравнить[[comparer]] цены[[prix]] на разных сайтах. Однако иногда товар[[le produit]] приходит[[arrive]] не таким, каким я его представлял[[imaginais]], и приходится[[il faut]] его возвращать[[le retourner]]. В целом плюсов[[avantages]] больше, чем минусов[[inconvénients]].`,
   fr:`Ces dernières années, j'ai commencé à acheter presque tout en ligne : des vêtements, des appareils électroniques, même des produits alimentaires. C'est pratique, parce qu'il n'est pas nécessaire d'aller au magasin et qu'on peut comparer les prix sur différents sites. Cependant, parfois le produit arrive différent de ce que j'imaginais, et il faut le retourner. Dans l'ensemble, il y a plus d'avantages que d'inconvénients.`,
   q:[
    {q:'Que peut-on faire grâce aux achats en ligne selon le texte ?', o:['Comparer les prix sur différents sites','Payer plus cher automatiquement','Éviter tout problème'], a:0},
    {q:'Quel inconvénient est mentionné ?', o:['Le produit reçu ne correspond pas toujours à ce qu\'on imaginait','Les achats en ligne sont interdits','Il n\'y a aucun inconvénient'], a:0},
    {q:'Quel est le bilan global du narrateur ?', o:['Plus d\'inconvénients que d\'avantages','Plus d\'avantages que d\'inconvénients','Il ne sait pas'], a:1}
   ]},
  {id:'den-bez-telefona-a2', title:'Жизнь без телефона на один день', level:'A2', theme:'Société & technologie',
   ru:`Однажды[[un jour]] я забыл[[j'ai oublié]] телефон дома и провёл[[j'ai passé]] весь день без него. Сначала я чувствовал себя странно[[bizarre]] и всё время думал, что я что-то пропускаю[[je rate quelque chose]]. Но потом я заметил[[j'ai remarqué]], что стал больше замечать[[remarquer]] вокруг: людей, улицы, погоду. Вечером, вернувшись[[étant rentré]] домой, я обнаружил[[j'ai découvert]] только два сообщения. Этот день научил[[a appris]] меня, что телефон не так важен[[important]], как мне казалось[[me semblait]].`,
   fr:`Un jour, j'ai oublié mon téléphone chez moi et j'ai passé toute la journée sans lui. Au début, je me sentais bizarre et je pensais tout le temps que je ratais quelque chose. Mais ensuite j'ai remarqué que je faisais plus attention à ce qui m'entourait : les gens, les rues, le temps qu'il faisait. Le soir, en rentrant chez moi, je n'ai découvert que deux messages. Cette journée m'a appris que le téléphone n'est pas aussi important qu'il me le semblait.`,
   q:[
    {q:'Pourquoi le narrateur a-t-il passé une journée sans téléphone ?', o:['Il l\'a fait exprès depuis le début','Il l\'a oublié chez lui','Son téléphone était cassé'], a:1},
    {q:'Qu\'a-t-il remarqué au cours de la journée ?', o:['Rien de particulier','Qu\'il faisait plus attention à ce qui l\'entourait','Qu\'il s\'ennuyait énormément'], a:1},
    {q:'Qu\'a-t-il découvert le soir en rentrant ?', o:['Vingt messages','Seulement deux messages','Aucun message'], a:1}
   ]},
];

const LISTEN_TEXTS = [
  {id:'l-vecher', title:'Мой обычный вечер', level:'A1', theme:'Vie quotidienne',
   ru:`Вечером я прихожу домой около семи часов[[vers sept heures]]. Сначала я ужинаю[[je dîne]], потом мою посуду[[je fais la vaisselle]]. После этого я немного смотрю телевизор или читаю. В десять часов я чищу зубы[[je me brosse les dents]] и ложусь спать[[je me couche]]. Мне нравится спокойный вечер дома.`,
   fr:`Le soir, je rentre chez moi vers sept heures. D'abord je dîne, puis je fais la vaisselle. Ensuite je regarde un peu la télévision ou je lis. À dix heures, je me brosse les dents et je me couche. J'aime les soirées calmes à la maison.`,
   q:[
    {q:'À quelle heure rentre-t-il le soir ?', o:['Vers cinq heures','Vers sept heures','Vers minuit'], a:1},
    {q:'Que fait-il après le dîner ?', o:['Il sort immédiatement','Il fait la vaisselle','Il va se coucher tout de suite'], a:1},
    {q:'À quelle heure se couche-t-il ?', o:['À neuf heures','À dix heures','À onze heures'], a:1}
   ]},
  {id:'l-raspisanie', title:'Расписание на неделю', level:'A2', theme:'Vie quotidienne',
   ru:`На этой неделе у меня очень плотное расписание[[emploi du temps chargé]]. В понедельник и среду у меня тренировка[[entraînement]] в спортзале рано утром. Во вторник вечером я хожу на курсы английского языка. По четвергам у меня встреча с друзьями, а в пятницу я обычно остаюсь дома, потому что устаю за неделю[[je suis fatigué de la semaine]]. Выходные я стараюсь оставлять свободными[[libres]].`,
   fr:`Cette semaine, j'ai un emploi du temps très chargé. Le lundi et le mercredi, j'ai un entraînement à la salle de sport tôt le matin. Le mardi soir, je vais à des cours d'anglais. Le jeudi, j'ai rendez-vous avec des amis, et le vendredi je reste généralement chez moi, car je suis fatigué de la semaine. Le week-end, j'essaie de le laisser libre.`,
   q:[
    {q:'Quand a lieu l\'entraînement à la salle de sport ?', o:['Le mardi et le jeudi','Le lundi et le mercredi','Le week-end'], a:1},
    {q:'Que fait-il le mardi soir ?', o:['Il va à des cours d\'anglais','Il fait du sport','Il reste chez lui'], a:0},
    {q:'Pourquoi reste-t-il chez lui le vendredi ?', o:['Il n\'a pas d\'amis','Il est fatigué de la semaine','Il travaille encore'], a:1}
   ]},
  {id:'l-stress', title:'Стресс и распорядок дня', level:'B1', theme:'Vie quotidienne',
   ru:`Многие специалисты по здоровью советуют[[conseillent]] соблюдать[[respecter]] регулярный распорядок дня[[routine quotidienne]], чтобы снизить[[réduire]] уровень стресса. Ложиться и вставать в одно и то же время[[à la même heure]], даже в выходные, помогает организму[[à l'organisme]] лучше отдыхать. Кроме того, специалисты рекомендуют выделять[[consacrer]] хотя бы полчаса в день на занятие, которое приносит удовольствие[[qui procure du plaisir]], будь то чтение, прогулка или спорт.`,
   fr:`De nombreux spécialistes de la santé conseillent de respecter une routine quotidienne régulière afin de réduire le niveau de stress. Se coucher et se lever à la même heure, même le week-end, aide l'organisme à mieux se reposer. De plus, les spécialistes recommandent de consacrer au moins une demi-heure par jour à une activité qui procure du plaisir, que ce soit la lecture, la marche ou le sport.`,
   q:[
    {q:'Que conseillent les spécialistes pour réduire le stress ?', o:['Dormir le moins possible','Respecter une routine régulière, y compris le week-end','Changer d\'heure de coucher chaque jour'], a:1},
    {q:'Combien de temps recommandent-ils de consacrer à une activité plaisante ?', o:['Dix minutes','Au moins une demi-heure par jour','Toute la journée'], a:1},
    {q:'Quels exemples d\'activités sont cités ?', o:['La lecture, la marche ou le sport','Uniquement le travail','Regarder la télévision'], a:0}
   ]},
  {id:'l-vechera-semya', title:'Наша семья по вечерам', level:'A1', theme:'Famille & amis',
   ru:`У нас в семье вечером всегда есть время побыть вместе[[être ensemble]]. Папа готовит ужин, а мама помогает младшему брату[[petit frère]] с уроками. После ужина мы иногда играем в настольные игры[[jeux de société]]. Я люблю эти вечера, потому что вся семья рядом[[proche / réunie]].`,
   fr:`Dans notre famille, le soir, il y a toujours un moment pour être ensemble. Papa prépare le dîner, et maman aide mon petit frère avec ses devoirs. Après le dîner, on joue parfois à des jeux de société. J'aime ces soirées, parce que toute la famille est réunie.`,
   q:[
    {q:'Qui prépare le dîner ?', o:['La maman','Le papa','Le petit frère'], a:1},
    {q:'Qui aide le petit frère avec ses devoirs ?', o:['Le papa','La maman','Personne'], a:1},
    {q:'Que font-ils parfois après le dîner ?', o:['Ils regardent la télévision','Ils jouent à des jeux de société','Ils sortent'], a:1}
   ]},
  {id:'l-vstrecha-odnoklassniki', title:'Встреча одноклассников через много лет', level:'A2', theme:'Famille & amis',
   ru:`На прошлых выходных я встретился[[je me suis retrouvé]] с одноклассниками[[camarades de classe]], которых не видел[[n'avais pas vus]] почти десять лет. Сначала было немного странно[[bizarre]], потому что все сильно изменились[[avaient beaucoup changé]]. Но потом мы начали вспоминать[[nous souvenir]] школьные истории и много смеялись. Мы решили встречаться[[se retrouver]] чаще, хотя бы раз в год.`,
   fr:`Le week-end dernier, je me suis retrouvé avec mes camarades de classe, que je n'avais pas vus depuis presque dix ans. Au début, c'était un peu bizarre, parce que tout le monde avait beaucoup changé. Mais ensuite nous avons commencé à nous souvenir d'histoires d'école, et nous avons beaucoup ri. Nous avons décidé de nous revoir plus souvent, au moins une fois par an.`,
   q:[
    {q:'Depuis combien de temps le narrateur n\'avait-il pas vu ses camarades ?', o:['Un an','Presque dix ans','Toute sa vie'], a:1},
    {q:'Pourquoi était-ce un peu bizarre au début ?', o:['Personne ne parlait','Tout le monde avait beaucoup changé','Il ne les reconnaissait pas du tout'], a:1},
    {q:'Qu\'ont-ils décidé à la fin ?', o:['De ne plus jamais se revoir','De se revoir au moins une fois par an','De déménager ensemble'], a:1}
   ]},
  {id:'l-druzhba-rasstoyanie', title:'Дружба на расстоянии', level:'B1', theme:'Famille & amis',
   ru:`Сохранить[[préserver]] крепкую дружбу[[une amitié forte]], когда друзья живут в разных городах или странах, непросто[[pas simple]], но вполне возможно[[tout à fait possible]]. Регулярные видеозвонки[[appels vidéo réguliers]], небольшие сообщения в течение дня и совместные[[communs]] онлайн-занятия, например просмотр фильма одновременно[[en même temps]], помогают чувствовать близость[[ressentir la proximité]], несмотря на расстояние. Главное, по мнению психологов, — это регулярность[[la régularité]], а не количество[[la quantité]] общения.`,
   fr:`Préserver une amitié forte quand les amis vivent dans des villes ou des pays différents n'est pas simple, mais c'est tout à fait possible. Des appels vidéo réguliers, de petits messages tout au long de la journée et des activités communes en ligne, comme regarder un film en même temps, aident à ressentir la proximité malgré la distance. L'essentiel, selon les psychologues, est la régularité, et non la quantité des échanges.`,
   q:[
    {q:'Quels moyens sont cités pour garder le contact ?', o:['Des appels vidéo réguliers et des activités communes en ligne','Uniquement des lettres papier','Rien de spécial n\'est nécessaire'], a:0},
    {q:'Qu\'est-ce qui aide à ressentir la proximité malgré la distance ?', o:['Regarder un film en même temps à distance','Ne plus jamais se parler','Déménager rapidement'], a:0},
    {q:'Que disent les psychologues être le plus important ?', o:['La quantité de messages','La régularité des échanges','Le prix des appels'], a:1}
   ]},
  {id:'l-bilet-samolet', title:'Билет на самолёт', level:'A1', theme:'Voyage',
   ru:`Завтра я лечу[[je pars en avion]] в Москву. Сегодня вечером я собираю чемодан[[je fais ma valise]]. Мой самолёт[[avion]] улетает в восемь утра, поэтому мне нужно приехать в аэропорт[[l'aéroport]] рано. Я уже проверил[[j'ai vérifié]] билет[[le billet]] и паспорт[[le passeport]]. Я немного волнуюсь[[je suis un peu nerveux]], потому что это моя первая поездка одна.`,
   fr:`Demain, je pars en avion pour Moscou. Ce soir, je fais ma valise. Mon avion décolle à huit heures du matin, donc je dois arriver tôt à l'aéroport. J'ai déjà vérifié mon billet et mon passeport. Je suis un peu nerveuse, car c'est mon premier voyage seule.`,
   q:[
    {q:'Où le narrateur va-t-il ?', o:['À Saint-Pétersbourg','À Moscou','À Kiev'], a:1},
    {q:'À quelle heure décolle l\'avion ?', o:['À six heures du soir','À huit heures du matin','À midi'], a:1},
    {q:'Pourquoi est-elle un peu nerveuse ?', o:['C\'est son premier voyage seule','Elle a peur de l\'avion','Elle a perdu son passeport'], a:0}
   ]},
  {id:'l-pervaya-zagranica', title:'Первая поездка за границу', level:'A2', theme:'Voyage',
   ru:`В прошлом году я впервые поехал[[je suis parti]] за границу[[à l'étranger]] — в Италию. Сначала я боялся[[j'avais peur]], что не смогу объясниться[[me faire comprendre]] на другом языке, но люди там были очень терпеливыми[[patients]] и помогали мне. Я попробовал[[j'ai goûté]] много новой еды и увидел[[j'ai vu]] красивые старые города. Теперь я хочу путешествовать[[voyager]] намного чаще.`,
   fr:`L'année dernière, je suis parti pour la première fois à l'étranger — en Italie. Au début, j'avais peur de ne pas réussir à me faire comprendre dans une autre langue, mais les gens là-bas étaient très patients et m'ont aidé. J'ai goûté beaucoup de nouveaux plats et j'ai vu de belles vieilles villes. Maintenant, je veux voyager beaucoup plus souvent.`,
   q:[
    {q:'Où le narrateur est-il parti pour la première fois ?', o:['En Espagne','En Italie','En Allemagne'], a:1},
    {q:'De quoi avait-il peur au début ?', o:['De prendre l\'avion','De ne pas se faire comprendre','De perdre ses bagages'], a:1},
    {q:'Que veut-il faire maintenant ?', o:['Ne plus jamais voyager','Voyager beaucoup plus souvent','Rester chez lui'], a:1}
   ]},
  {id:'l-puteshestviya-ekologiya', title:'Путешествия и экология', level:'B1', theme:'Voyage',
   ru:`Всё больше путешественников[[voyageurs]] задумываются[[réfléchissent]] о влиянии[[l'impact]] авиаперелётов[[vols en avion]] на климат. Некоторые начинают выбирать[[choisir]] поезд вместо самолёта на короткие расстояния[[distances courtes]], несмотря на то что поездка занимает больше времени. Другие стараются[[essaient]] путешествовать реже, но дольше[[plus longtemps]], чтобы уменьшить[[réduire]] число перелётов[[nombre de vols]] в год. Такой подход называют[[appelle]] «медленным туризмом»[[tourisme lent]].`,
   fr:`De plus en plus de voyageurs réfléchissent à l'impact des vols en avion sur le climat. Certains commencent à choisir le train plutôt que l'avion pour les distances courtes, même si le trajet prend plus de temps. D'autres essaient de voyager moins souvent, mais plus longtemps, afin de réduire le nombre de vols par an. Cette approche est appelée « tourisme lent ».`,
   q:[
    {q:'Que choisissent certains voyageurs pour les distances courtes ?', o:['Le train plutôt que l\'avion','Toujours l\'avion','La voiture uniquement'], a:0},
    {q:'Quelle est la stratégie de certains pour réduire les vols ?', o:['Voyager moins souvent mais plus longtemps','Voyager tous les week-ends','Ne jamais voyager'], a:0},
    {q:'Comment appelle-t-on cette approche ?', o:['Le tourisme rapide','Le tourisme lent','Le tourisme de masse'], a:1}
   ]},
  {id:'l-zavtrak-kafe', title:'Завтрак в кафе', level:'A1', theme:'Nourriture & restaurant',
   ru:`По субботам я хожу завтракать в кафе рядом с домом. Я обычно заказываю[[je commande]] кофе с молоком[[café au lait]] и круассан[[croissant]]. Официантка[[la serveuse]] там очень приветливая[[accueillante]] и всегда улыбается[[sourit]]. Я люблю сидеть у окна и смотреть на улицу, пока пью кофе.`,
   fr:`Le samedi, je vais prendre mon petit-déjeuner dans un café près de chez moi. D'habitude, je commande un café au lait et un croissant. La serveuse là-bas est très accueillante et sourit toujours. J'aime m'asseoir près de la fenêtre et regarder la rue en buvant mon café.`,
   q:[
    {q:'Que commande-t-il d\'habitude ?', o:['Un thé et un gâteau','Un café au lait et un croissant','Un jus d\'orange'], a:1},
    {q:'Comment est décrite la serveuse ?', o:['Pressée et froide','Accueillante, elle sourit toujours','Absente'], a:1},
    {q:'Où aime-t-il s\'asseoir ?', o:['Près de la porte','Près de la fenêtre','Au fond de la salle'], a:1}
   ]},
  {id:'l-den-rozhdenia-restoran', title:'День рождения в ресторане', level:'A2', theme:'Nourriture & restaurant',
   ru:`Вчера мы отмечали[[nous avons fêté]] день рождения моей подруги в новом ресторане в центре города. Мы заранее[[à l'avance]] забронировали[[avons réservé]] столик[[une table]] на восемь человек. Официант[[le serveur]] посоветовал[[a conseillé]] нам попробовать[[d'essayer]] фирменное блюдо[[le plat signature]] шеф-повара. Все остались очень довольны[[très satisfaits]], а в конце нам принесли[[on nous a apporté]] бесплатный десерт[[dessert offert]].`,
   fr:`Hier, nous avons fêté l'anniversaire de mon amie dans un nouveau restaurant du centre-ville. Nous avions réservé une table pour huit personnes à l'avance. Le serveur nous a conseillé d'essayer le plat signature du chef. Tout le monde a été très satisfait, et à la fin on nous a apporté un dessert offert.`,
   q:[
    {q:'Pour combien de personnes la table était-elle réservée ?', o:['Quatre','Huit','Douze'], a:1},
    {q:'Que leur a conseillé le serveur ?', o:['D\'essayer le plat signature du chef','De partir tôt','De commander seulement des boissons'], a:0},
    {q:'Qu\'ont-ils reçu à la fin du repas ?', o:['Une réduction','Un dessert offert','Rien de spécial'], a:1}
   ]},
  {id:'l-ulichnaya-eda', title:'Уличная еда в разных странах', level:'B1', theme:'Nourriture & restaurant',
   ru:`Уличная еда[[la street food]] — это часть[[une partie]] культуры почти в каждой стране мира. В одних странах популярны небольшие закусочные[[petits stands]] с быстрыми и недорогими блюдами[[plats rapides et bon marché]], в других — целые рынки[[marchés]], посвящённые[[consacrés]] местной кухне. Туристы часто говорят, что именно уличная еда помогает лучше почувствовать[[ressentir]] атмосферу[[l'ambiance]] города, чем дорогие рестораны. Однако важно выбирать места, где еда готовится свежей[[fraîche]] прямо при вас[[devant vous]].`,
   fr:`La street food fait partie de la culture de presque chaque pays du monde. Dans certains pays, ce sont de petits stands avec des plats rapides et bon marché qui sont populaires, dans d'autres, ce sont des marchés entiers consacrés à la cuisine locale. Les touristes disent souvent que c'est justement la street food qui aide à mieux ressentir l'ambiance d'une ville que les restaurants chers. Cependant, il est important de choisir des endroits où la nourriture est préparée fraîche devant vous.`,
   q:[
    {q:'Que disent souvent les touristes à propos de la street food ?', o:['Qu\'elle est toujours dangereuse','Qu\'elle aide à mieux ressentir l\'ambiance d\'une ville','Qu\'elle coûte plus cher que les restaurants'], a:1},
    {q:'Quel conseil de prudence est donné ?', o:['Choisir des endroits où la nourriture est préparée fraîche devant vous','Ne jamais goûter la street food','Toujours payer en espèces'], a:0},
    {q:'Comment la street food est-elle décrite selon les pays ?', o:['Toujours identique partout','Sous forme de petits stands ou de marchés selon les pays','Interdite dans la plupart des pays'], a:1}
   ]},
  {id:'l-raspisanie-urokov', title:'Расписание уроков', level:'A1', theme:'Travail & études',
   ru:`У меня в понедельник три урока[[cours]]: математика, русский язык и физкультура[[éducation physique]]. После уроков я иду в библиотеку[[bibliothèque]] делать домашнее задание. Мой любимый день — пятница, потому что тогда у нас урок музыки[[cours de musique]]. Вечером я готовлюсь к следующему дню.`,
   fr:`Le lundi, j'ai trois cours : mathématiques, russe et éducation physique. Après les cours, je vais à la bibliothèque faire mes devoirs. Mon jour préféré, c'est le vendredi, parce qu'on a cours de musique ce jour-là. Le soir, je me prépare pour le lendemain.`,
   q:[
    {q:'Combien de cours a-t-il le lundi ?', o:['Deux','Trois','Quatre'], a:1},
    {q:'Où va-t-il après les cours ?', o:['À la bibliothèque','Chez un ami','Au sport'], a:0},
    {q:'Pourquoi le vendredi est-il son jour préféré ?', o:['Il n\'y a pas cours','Il y a cours de musique','C\'est le week-end'], a:1}
   ]},
  {id:'l-rezyume', title:'Резюме и поиск работы', level:'A2', theme:'Travail & études',
   ru:`Сейчас я активно ищу[[je cherche activement]] новую работу. Я обновил[[j'ai mis à jour]] своё резюме[[CV]] и отправил[[j'ai envoyé]] его в несколько компаний. На прошлой неделе меня пригласили[[on m'a invité]] на собеседование[[entretien]], которое прошло[[s'est bien passé]] довольно хорошо. Теперь я жду ответа[[j'attends la réponse]] и стараюсь[[j'essaie]] не слишком волноваться[[de ne pas trop m'inquiéter]].`,
   fr:`En ce moment, je cherche activement un nouveau travail. J'ai mis à jour mon CV et je l'ai envoyé à plusieurs entreprises. La semaine dernière, on m'a invité à un entretien, qui s'est plutôt bien passé. Maintenant j'attends la réponse et j'essaie de ne pas trop m'inquiéter.`,
   q:[
    {q:'Qu\'a fait le narrateur avec son CV ?', o:['Il l\'a mis à jour et envoyé à plusieurs entreprises','Il ne l\'a pas encore fait','Il l\'a supprimé'], a:0},
    {q:'Que s\'est-il passé la semaine dernière ?', o:['Il a été refusé partout','On l\'a invité à un entretien','Il a changé de métier'], a:1},
    {q:'Que fait-il maintenant ?', o:['Il attend la réponse et essaie de ne pas trop s\'inquiéter','Il a déjà oublié cette candidature','Il a arrêté de chercher'], a:0}
   ]},
  {id:'l-distancionnoe', title:'Дистанционное образование', level:'B1', theme:'Travail & études',
   ru:`Дистанционное[[à distance]] образование стало намного популярнее[[bien plus populaire]] за последние годы. Оно позволяет[[permet]] учиться в удобном темпе[[à son propre rythme]] и совмещать[[combiner]] учёбу с работой. Однако у такого формата есть и минусы[[inconvénients]]: без личного контакта[[contact en personne]] с преподавателем[[l'enseignant]] некоторым студентам сложнее[[plus difficile]] сохранять[[garder]] мотивацию[[motivation]] до конца курса[[jusqu'à la fin du cours]].`,
   fr:`L'éducation à distance est devenue bien plus populaire ces dernières années. Elle permet d'apprendre à son propre rythme et de combiner les études avec le travail. Cependant, ce format a aussi des inconvénients : sans contact en personne avec l'enseignant, il est plus difficile pour certains étudiants de garder leur motivation jusqu'à la fin du cours.`,
   q:[
    {q:'Quel avantage de l\'éducation à distance est cité ?', o:['Apprendre à son propre rythme et combiner avec le travail','Un diplôme plus rapide','Des cours gratuits pour tous'], a:0},
    {q:'Quel inconvénient est mentionné ?', o:['Le prix trop élevé','La difficulté à garder sa motivation sans contact en personne','Le manque d\'ordinateurs'], a:1},
    {q:'Pourquoi est-ce devenu plus populaire selon le texte ?', o:['Ce n\'est pas précisé, juste que c\'est le cas','Parce que c\'est gratuit','Parce que c\'est obligatoire'], a:1}
   ]},
  {id:'l-moy-rayon', title:'Мой район', level:'A1', theme:'Logement & ville',
   ru:`Я живу в спокойном районе[[quartier calme]] на окраине города. Рядом с домом есть парк, где я гуляю по утрам. В моём районе есть небольшой магазин, аптека[[pharmacie]] и школа. Мне нравится, что здесь тихо и все соседи здороваются[[se saluent]] друг с другом.`,
   fr:`J'habite dans un quartier calme à la périphérie de la ville. Près de chez moi, il y a un parc où je me promène le matin. Dans mon quartier, il y a un petit magasin, une pharmacie et une école. J'aime le fait qu'ici c'est calme et que tous les voisins se saluent.`,
   q:[
    {q:'Où se trouve le quartier du narrateur ?', o:['Au centre-ville','À la périphérie de la ville','À la campagne'], a:1},
    {q:'Que fait-il le matin dans le parc ?', o:['Il travaille','Il se promène','Il fait du shopping'], a:1},
    {q:'Que fait-il avec ses voisins ?', o:['Il les évite','Ils se saluent','Il ne les connaît pas'], a:1}
   ]},
  {id:'l-remont', title:'Ремонт в квартире', level:'A2', theme:'Logement & ville',
   ru:`Уже месяц у нас в квартире идёт ремонт[[travaux de rénovation]]. Сначала рабочие[[les ouvriers]] поменяли[[ont changé]] окна, потом покрасили[[ont peint]] стены[[les murs]]. Шум[[le bruit]] иногда мешает[[gêne]] работать из дома, поэтому я хожу работать в кафе. Но я рад, что скоро квартира будет выглядеть[[aura l'air]] намного лучше.`,
   fr:`Cela fait déjà un mois que des travaux de rénovation ont lieu dans notre appartement. D'abord les ouvriers ont changé les fenêtres, puis ils ont peint les murs. Le bruit me gêne parfois pour travailler depuis chez moi, donc je vais travailler dans un café. Mais je suis content que l'appartement va bientôt avoir l'air bien mieux.`,
   q:[
    {q:'Que se passe-t-il dans l\'appartement depuis un mois ?', o:['Un déménagement','Des travaux de rénovation','Une fête'], a:1},
    {q:'Qu\'ont fait les ouvriers en premier ?', o:['Peint les murs','Changé les fenêtres','Posé un nouveau sol'], a:1},
    {q:'Où va-t-il travailler à cause du bruit ?', o:['Chez un ami','Dans un café','À la bibliothèque'], a:1}
   ]},
  {id:'l-transport-probki', title:'Городской транспорт и пробки', level:'B1', theme:'Logement & ville',
   ru:`Пробки[[les embouteillages]] остаются[[restent]] одной из главных проблем[[principaux problèmes]] крупных городов. Городские власти[[les autorités municipales]] пытаются[[essaient]] решить эту проблему разными способами[[différentes méthodes]]: строят новые линии метро, вводят[[introduisent]] платные[[payantes]] зоны в центре и развивают[[développent]] сеть велодорожек[[réseau de pistes cyclables]]. Тем не менее, многие жители по-прежнему предпочитают[[préfèrent]] личный автомобиль[[voiture personnelle]] общественному транспорту[[transports en commun]].`,
   fr:`Les embouteillages restent l'un des principaux problèmes des grandes villes. Les autorités municipales essaient de résoudre ce problème par différentes méthodes : elles construisent de nouvelles lignes de métro, introduisent des zones payantes dans le centre et développent le réseau de pistes cyclables. Néanmoins, de nombreux habitants continuent de préférer la voiture personnelle aux transports en commun.`,
   q:[
    {q:'Quelles solutions sont citées pour réduire les embouteillages ?', o:['Construire des lignes de métro, des zones payantes et des pistes cyclables','Interdire toutes les voitures immédiatement','Ne rien faire'], a:0},
    {q:'Que préfèrent encore de nombreux habitants ?', o:['Les transports en commun','La voiture personnelle','Le vélo uniquement'], a:1},
    {q:'Qui essaie de résoudre le problème des embouteillages ?', o:['Les habitants eux-mêmes uniquement','Les autorités municipales','Personne'], a:1}
   ]},
  {id:'l-dr-druga', title:'День рождения друга', level:'A1', theme:'Vie sociale & fêtes',
   ru:`Завтра день рождения моего друга Дмитрия. Я купил[[j'ai acheté]] ему книгу в подарок[[en cadeau]]. Вечером мы все встретимся[[nous nous retrouverons]] у него дома. Будет торт[[un gâteau]] и музыка. Я думаю, что это будет весёлый[[joyeux]] вечер.`,
   fr:`Demain, c'est l'anniversaire de mon ami Dmitri. Je lui ai acheté un livre en cadeau. Le soir, nous nous retrouverons tous chez lui. Il y aura un gâteau et de la musique. Je pense que ce sera une soirée joyeuse.`,
   q:[
    {q:'Qu\'a acheté le narrateur comme cadeau ?', o:['Un livre','Une montre','Des chaussures'], a:0},
    {q:'Où auront-ils lieu, les retrouvailles ?', o:['Au restaurant','Chez Dmitri','Au parc'], a:1},
    {q:'Qu\'y aura-t-il pendant la soirée ?', o:['Un gâteau et de la musique','Seulement des jeux','Rien de spécial'], a:0}
   ]},
  {id:'l-podgotovka-prazdnik', title:'Подготовка к празднику', level:'A2', theme:'Vie sociale & fêtes',
   ru:`Скоро у нас в семье большой праздник — юбилей[[anniversaire / jubilé]] бабушки. Мы уже начали готовиться[[nous préparer]]: заказали[[avons commandé]] зал[[une salle]] в кафе, составили[[avons établi]] список гостей[[liste des invités]] и выбрали[[choisi]] меню. Моя сестра отвечает за[[est responsable de]] музыку, а я — за украшение зала[[la décoration de la salle]]. Все очень взволнованы[[très excités]] перед этим важным днём.`,
   fr:`Bientôt, il y aura une grande fête dans notre famille — le jubilé de ma grand-mère. Nous avons déjà commencé à nous préparer : nous avons commandé une salle dans un café, établi la liste des invités et choisi le menu. Ma sœur est responsable de la musique, et moi de la décoration de la salle. Tout le monde est très excité avant ce jour important.`,
   q:[
    {q:'De quel événement s\'agit-il ?', o:['Le jubilé de la grand-mère','Un mariage','Une remise de diplôme'], a:0},
    {q:'Qu\'ont-ils déjà fait pour se préparer ?', o:['Commandé une salle et choisi le menu','Rien encore','Annulé la fête'], a:0},
    {q:'De quoi la sœur est-elle responsable ?', o:['De la décoration','De la musique','Du menu'], a:1}
   ]},
  {id:'l-svadebnye-tradicii', title:'Свадебные традиции сегодня', level:'B1', theme:'Vie sociale & fêtes',
   ru:`Свадебные традиции[[traditions du mariage]] в России постепенно меняются[[changent peu à peu]]. Раньше почти все свадьбы проходили[[se déroulaient]] по одному и тому же сценарию[[scénario]], а сегодня многие пары[[couples]] выбирают[[choisissent]] более скромные[[modestes]] и персонализированные[[personnalisées]] церемонии[[cérémonies]]. Некоторые вообще отказываются[[renoncent]] от банкета в пользу[[en faveur de]] небольшого путешествия вдвоём. Тем не менее, некоторые традиции, например обмен кольцами[[l'échange des alliances]], остаются неизменными[[inchangées]].`,
   fr:`Les traditions du mariage en Russie changent peu à peu. Autrefois, presque tous les mariages se déroulaient selon le même scénario, mais aujourd'hui de nombreux couples choisissent des cérémonies plus modestes et personnalisées. Certains renoncent même au banquet en faveur d'un petit voyage à deux. Néanmoins, certaines traditions, comme l'échange des alliances, restent inchangées.`,
   q:[
    {q:'Comment étaient les mariages autrefois selon le texte ?', o:['Tous selon le même scénario','Très différents les uns des autres','Il n\'y avait pas de mariages traditionnels'], a:0},
    {q:'Que choisissent aujourd\'hui de nombreux couples ?', o:['Des cérémonies plus modestes et personnalisées','Des cérémonies encore plus grandes','Rien n\'a changé'], a:0},
    {q:'Quelle tradition reste inchangée selon le texte ?', o:['Le grand banquet','L\'échange des alliances','Le voyage de noces obligatoire'], a:1}
   ]},
  {id:'l-cirk', title:'Русский цирк', level:'A1', theme:'Culture russe',
   ru:`В субботу мы ходили в цирк[[le cirque]] всей семьёй. Там были клоуны[[clowns]], акробаты[[acrobates]] и дрессированные животные[[animaux dressés]]. Моей дочке больше всего понравились[[ont le plus plu]] клоуны, потому что они очень смешные[[drôles]]. После представления[[le spectacle]] мы сфотографировались[[nous nous sommes pris en photo]] с артистами.`,
   fr:`Samedi, nous sommes allés au cirque en famille. Il y avait des clowns, des acrobates et des animaux dressés. Ce sont les clowns qui ont le plus plu à ma fille, parce qu'ils sont très drôles. Après le spectacle, nous nous sommes pris en photo avec les artistes.`,
   q:[
    {q:'Qu\'y avait-il au cirque ?', o:['Des clowns, acrobates et animaux dressés','Seulement des musiciens','Des films'], a:0},
    {q:'Qu\'est-ce qui a le plus plu à la fille ?', o:['Les acrobates','Les clowns','Les animaux'], a:1},
    {q:'Qu\'ont-ils fait après le spectacle ?', o:['Ils sont rentrés directement','Ils se sont pris en photo avec les artistes','Ils ont mangé au cirque'], a:1}
   ]},
  {id:'l-muzey', title:'Музей в моём городе', level:'A2', theme:'Culture russe',
   ru:`В прошлые выходные я сходил в музей[[musée]] искусства[[art]] в моём городе. Там была выставка[[exposition]], посвящённая[[consacrée]] русским художникам[[peintres]] девятнадцатого века[[dix-neuvième siècle]]. Экскурсовод[[le guide]] очень интересно рассказывал[[racontait]] о каждой картине[[chaque tableau]]. Я не ожидал[[je ne m'attendais pas]], что мне так понравится, и теперь хочу вернуться туда снова[[revenir de nouveau]].`,
   fr:`Le week-end dernier, je suis allé au musée d'art de ma ville. Il y avait une exposition consacrée aux peintres russes du dix-neuvième siècle. Le guide racontait de manière très intéressante l'histoire de chaque tableau. Je ne m'attendais pas à autant aimer, et maintenant je veux y retourner.`,
   q:[
    {q:'À qui était consacrée l\'exposition ?', o:['Aux peintres russes du 19e siècle','Aux sculpteurs modernes','À la photographie'], a:0},
    {q:'Comment était le guide ?', o:['Ennuyeux','Très intéressant','Absent'], a:1},
    {q:'Que veut faire le narrateur maintenant ?', o:['Ne plus jamais y retourner','Y retourner','Devenir guide'], a:1}
   ]},
  {id:'l-russkiy-rok', title:'Русский рок', level:'B1', theme:'Culture russe',
   ru:`Русский рок появился[[est apparu]] в восьмидесятые годы[[dans les années quatre-vingt]] и быстро стал[[est vite devenu]] важной частью[[partie importante]] культуры страны. Тексты песен[[paroles des chansons]] часто затрагивали[[abordaient]] темы свободы[[liberté]], протеста[[protestation]] и поиска смысла жизни[[recherche du sens de la vie]]. Многие группы того времени до сих пор[[encore aujourd'hui]] пользуются[[jouissent]] большой популярностью среди[[parmi]] разных поколений слушателей[[générations d'auditeurs]].`,
   fr:`Le rock russe est apparu dans les années quatre-vingt et est vite devenu une partie importante de la culture du pays. Les paroles des chansons abordaient souvent des thèmes comme la liberté, la protestation et la recherche du sens de la vie. De nombreux groupes de cette époque jouissent encore aujourd'hui d'une grande popularité parmi différentes générations d'auditeurs.`,
   q:[
    {q:'Quand le rock russe est-il apparu ?', o:['Dans les années soixante','Dans les années quatre-vingt','Dans les années deux mille'], a:1},
    {q:'Quels thèmes abordaient souvent les paroles ?', o:['La liberté, la protestation et le sens de la vie','Uniquement l\'amour','La cuisine'], a:0},
    {q:'Comment sont perçus aujourd\'hui les groupes de cette époque ?', o:['Ils sont oubliés','Ils restent populaires parmi différentes générations','Ils sont interdits'], a:1}
   ]},
  {id:'l-komputer-shkola', title:'Компьютер в школе', level:'A1', theme:'Société & technologie',
   ru:`В нашей школе у каждого класса есть компьютерный кабинет[[salle informatique]]. Мы используем[[nous utilisons]] компьютеры, чтобы искать[[chercher]] информацию и делать презентации[[présentations]]. Учительница[[la maîtresse]] говорит, что важно уметь пользоваться[[savoir utiliser]] техникой[[la technologie]], но также важно читать бумажные книги[[livres papier]].`,
   fr:`Dans notre école, chaque classe a une salle informatique. Nous utilisons les ordinateurs pour chercher des informations et faire des présentations. La maîtresse dit qu'il est important de savoir utiliser la technologie, mais qu'il est aussi important de lire des livres papier.`,
   q:[
    {q:'À quoi servent les ordinateurs à l\'école selon le texte ?', o:['Chercher des informations et faire des présentations','Seulement jouer','Regarder des films'], a:0},
    {q:'Que dit la maîtresse à propos des livres ?', o:['Ils sont inutiles','Il est aussi important de lire des livres papier','Il ne faut plus en lire'], a:1},
    {q:'Que possède chaque classe ?', o:['Une salle informatique','Une bibliothèque privée','Un laboratoire de sciences'], a:0}
   ]},
  {id:'l-ekonomia-deneg', title:'Экономия денег', level:'A2', theme:'Société & technologie',
   ru:`В последнее время я стараюсь экономить деньги[[économiser de l'argent]] с помощью приложений[[applications]] на телефоне. Одно приложение помогает мне следить за[[suivre]] расходами[[dépenses]] каждый месяц, а другое находит[[trouve]] скидки[[réductions]] в магазинах. Благодаря этому[[grâce à cela]] я стал тратить[[dépenser]] меньше на ненужные[[inutiles]] вещи и откладывать[[mettre de côté]] больше на отпуск[[vacances]].`,
   fr:`Ces derniers temps, j'essaie d'économiser de l'argent grâce à des applications sur mon téléphone. Une application m'aide à suivre mes dépenses chaque mois, et une autre trouve des réductions dans les magasins. Grâce à cela, j'ai commencé à dépenser moins en choses inutiles et à mettre plus de côté pour les vacances.`,
   q:[
    {q:'Comment le narrateur essaie-t-il d\'économiser ?', o:['Grâce à des applications sur son téléphone','En ne sortant plus jamais','En empruntant de l\'argent'], a:0},
    {q:'Que fait la première application ?', o:['Elle suit ses dépenses chaque mois','Elle paie ses factures','Elle réserve ses vacances'], a:0},
    {q:'Quel est le résultat pour lui ?', o:['Il dépense plus qu\'avant','Il dépense moins et met plus de côté pour les vacances','Rien n\'a changé'], a:1}
   ]},
  {id:'l-ai', title:'Искусственный интеллект', level:'B1', theme:'Société & technologie',
   ru:`Искусственный интеллект[[l'intelligence artificielle]] всё активнее[[de plus en plus]] проникает[[s'immisce]] в повседневную жизнь: он помогает переводить[[traduire]] тексты, рекомендует фильмы и даже пишет[[écrit]] код. Сторонники[[les partisans]] технологии считают, что она освобождает[[libère]] людей от рутинных[[routinières]] задач[[tâches]]. Критики же[[Les critiques, quant à eux]] опасаются[[craignent]], что это может привести к[[entraîner]] потере[[perte]] рабочих мест[[emplois]] и усилению[[renforcement]] зависимости[[dépendance]] от технологий.`,
   fr:`L'intelligence artificielle s'immisce de plus en plus dans la vie quotidienne : elle aide à traduire des textes, recommande des films et écrit même du code. Les partisans de cette technologie estiment qu'elle libère les gens des tâches routinières. Les critiques, quant à eux, craignent que cela puisse entraîner une perte d'emplois et un renforcement de la dépendance envers la technologie.`,
   q:[
    {q:'Dans quels domaines l\'IA est-elle citée comme utile ?', o:['Traduction, recommandations de films et écriture de code','Uniquement la cuisine','Le sport professionnel'], a:0},
    {q:'Que pensent les partisans de l\'IA ?', o:['Qu\'elle libère les gens des tâches routinières','Qu\'elle est totalement inutile','Qu\'elle doit être interdite'], a:0},
    {q:'Que craignent les critiques ?', o:['La perte d\'emplois et une dépendance accrue','Que l\'IA soit trop lente','Qu\'elle coûte trop cher à l\'achat'], a:0}
   ]},
];

const ORAL_PHRASES = [
  ['Здравствуйте, как дела?','zdrastvouïtié, kak dila?'],
  ['Меня зовут Мария.','menia zovout maria'],
  ['Я живу в Москве.','ya jivou v maskvié'],
  ['Сколько это стоит?','skolka eta stoit?'],
  ['Я не понимаю.','ya nié panimayou'],
  ['Где находится метро?','gdié nakhoditsa mietro?'],
  ['Спасибо большое!','spassiba balshoïé'],
  ['Приятного аппетита!','priyatnava apietita'],
  ['Как вас зовут?','kak vas zavout?'],
  ['Очень приятно.','otchien priatna']
];

const ORAL_BANK = [
  {id:'o-vq-a1-1', level:'A1', theme:'Vie quotidienne', ru:'Здравствуйте, как дела?', translit:'zdrastvouïtié, kak dila?', fr:'Bonjour, comment allez-vous ?'},
  {id:'o-vq-a1-2', level:'A1', theme:'Vie quotidienne', ru:'Спасибо большое!', translit:'spassiba balshoïé', fr:'Merci beaucoup !'},
  {id:'o-vq-a1-3', level:'A1', theme:'Vie quotidienne', ru:'Я не понимаю.', translit:'ya nié panimayou', fr:'Je ne comprends pas.'},
  {id:'o-vq-a1-4', level:'A1', theme:'Vie quotidienne', ru:'Очень приятно.', translit:'otchien priatna', fr:'Enchanté(e).'},
  {id:'o-vq-a2-1', level:'A2', theme:'Vie quotidienne', ru:'Не могли бы вы говорить медленнее?', translit:'nié magli by vy gavarit miedlienniéié?', fr:'Pourriez-vous parler plus lentement ?'},
  {id:'o-vq-a2-2', level:'A2', theme:'Vie quotidienne', ru:'Извините за опоздание.', translit:'izvinitié za apazdanié', fr:'Désolé(e) pour le retard.'},
  {id:'o-vq-a2-3', level:'A2', theme:'Vie quotidienne', ru:'Мне нужно немного времени.', translit:'mnié noujna niémnoga vriémieni', fr:'J\'ai besoin d\'un peu de temps.'},
  {id:'o-vq-a2-4', level:'A2', theme:'Vie quotidienne', ru:'Всё в порядке, не волнуйтесь.', translit:'fsyo f paryadkié, nié valnouïtiés', fr:'Tout va bien, ne vous inquiétez pas.'},
  {id:'o-vq-b1-1', level:'B1', theme:'Vie quotidienne', ru:'Если честно, я немного устал сегодня.', translit:'yesli tchestna, ya niémnoga oustal siévodnia', fr:'Pour être honnête, je suis un peu fatigué aujourd\'hui.'},
  {id:'o-vq-b1-2', level:'B1', theme:'Vie quotidienne', ru:'Мне кажется, нам стоит поторопиться.', translit:'mnié kajetsa, nam stoit patarapitsa', fr:'Je pense qu\'on devrait se dépêcher.'},
  {id:'o-vq-b1-3', level:'B1', theme:'Vie quotidienne', ru:'Давайте перенесём встречу на завтра.', translit:'davaïtié pieriénissiom fstriétchou na zaftra', fr:'Reportons le rendez-vous à demain.'},
  {id:'o-vq-b1-4', level:'B1', theme:'Vie quotidienne', ru:'Честно говоря, я не ожидал такого.', translit:'tchestna gavaria, ya nié ajidal takova', fr:'À vrai dire, je ne m\'attendais pas à ça.'},
  {id:'o-fa-a1-1', level:'A1', theme:'Famille & amis', ru:'Как вас зовут?', translit:'kak vas zavout?', fr:'Comment vous appelez-vous ?'},
  {id:'o-fa-a1-2', level:'A1', theme:'Famille & amis', ru:'Меня зовут Мария.', translit:'menia zavout maria', fr:'Je m\'appelle Maria.'},
  {id:'o-fa-a1-3', level:'A1', theme:'Famille & amis', ru:'Это моя семья.', translit:'eta maya siemya', fr:'C\'est ma famille.'},
  {id:'o-fa-a1-4', level:'A1', theme:'Famille & amis', ru:'У меня есть брат и сестра.', translit:'ou mienia yest brat i siestra', fr:'J\'ai un frère et une sœur.'},
  {id:'o-fa-a2-1', level:'A2', theme:'Famille & amis', ru:'Давно не виделись!', translit:'davno nié vidielis!', fr:'Ça fait longtemps qu\'on ne s\'est pas vus !'},
  {id:'o-fa-a2-2', level:'A2', theme:'Famille & amis', ru:'Передавай привет родителям.', translit:'pieriédavaï priviet raditieliam', fr:'Passe le bonjour à tes parents.'},
  {id:'o-fa-a2-3', level:'A2', theme:'Famille & amis', ru:'Мы очень скучаем по тебе.', translit:'my otchien skoutchayem pa tiebié', fr:'Tu nous manques beaucoup.'},
  {id:'o-fa-a2-4', level:'A2', theme:'Famille & amis', ru:'Позвони мне, когда сможешь.', translit:'pazvani mnié, kagda smojech', fr:'Appelle-moi quand tu pourras.'},
  {id:'o-fa-b1-1', level:'B1', theme:'Famille & amis', ru:'Мы не так уж часто видимся, но всегда рады встрече.', translit:'my nié tak ouj tchasta vidimsia, no fsiegda rady vstriétché', fr:'On ne se voit pas si souvent, mais on est toujours ravis de se retrouver.'},
  {id:'o-fa-b1-2', level:'B1', theme:'Famille & amis', ru:'Он всегда умел найти нужные слова.', translit:'on fsiegda oumiel naïti noujnyié slava', fr:'Il a toujours su trouver les mots justes.'},
  {id:'o-fa-b1-3', level:'B1', theme:'Famille & amis', ru:'Несмотря на расстояние, мы остаёмся близки.', translit:'niesmatria na rastayanié, my astayomsia blizki', fr:'Malgré la distance, nous restons proches.'},
  {id:'o-fa-b1-4', level:'B1', theme:'Famille & amis', ru:'Она заботится обо всех в семье.', translit:'ana zabotitsa obo fsiekh f siemyé', fr:'Elle s\'occupe de tout le monde dans la famille.'},
  {id:'o-vy-a1-1', level:'A1', theme:'Voyage', ru:'Где находится метро?', translit:'gdié nakhoditsa mietro?', fr:'Où se trouve le métro ?'},
  {id:'o-vy-a1-2', level:'A1', theme:'Voyage', ru:'Я живу в Москве.', translit:'ya jivou v maskvié', fr:'J\'habite à Moscou.'},
  {id:'o-vy-a1-3', level:'A1', theme:'Voyage', ru:'Один билет, пожалуйста.', translit:'adin bilet, pajalousta', fr:'Un billet, s\'il vous plaît.'},
  {id:'o-vy-a1-4', level:'A1', theme:'Voyage', ru:'Сколько стоит билет?', translit:'skolka stoit bilet?', fr:'Combien coûte le billet ?'},
  {id:'o-vy-a2-1', level:'A2', theme:'Voyage', ru:'Во сколько отправляется поезд?', translit:'va skolka atpravliayetsa poyezd?', fr:'À quelle heure part le train ?'},
  {id:'o-vy-a2-2', level:'A2', theme:'Voyage', ru:'Мне нужно пересесть на другой автобус?', translit:'mnié noujna pieriésiest na drougoï aftobous?', fr:'Dois-je changer de bus ?'},
  {id:'o-vy-a2-3', level:'A2', theme:'Voyage', ru:'Как добраться до центра города?', translit:'kak dabratsa da tsentra gorada?', fr:'Comment se rendre au centre-ville ?'},
  {id:'o-vy-a2-4', level:'A2', theme:'Voyage', ru:'Я забронировал номер в отеле.', translit:'ya zabraniraval nomier v atelié', fr:'J\'ai réservé une chambre d\'hôtel.'},
  {id:'o-vy-b1-1', level:'B1', theme:'Voyage', ru:'Мы решили путешествовать налегке в этот раз.', translit:'my richili poutieshestvavat naliekkié v etat raz', fr:'On a décidé de voyager léger cette fois.'},
  {id:'o-vy-b1-2', level:'B1', theme:'Voyage', ru:'Рейс задерживается на два часа.', translit:'reïs zadierjivayetsa na dva tchassa', fr:'Le vol est retardé de deux heures.'},
  {id:'o-vy-b1-3', level:'B1', theme:'Voyage', ru:'Я предпочитаю путешествовать без строгого плана.', translit:'ya priedpatchitayou poutieshestvavat biez strogava plana', fr:'Je préfère voyager sans plan strict.'},
  {id:'o-vy-b1-4', level:'B1', theme:'Voyage', ru:'Эта поездка полностью изменила моё представление о стране.', translit:'eta payezdka polnastyou izmienila mayo priedstavlienié o straniè', fr:'Ce voyage a complètement changé ma vision du pays.'},
  {id:'o-nr-a1-1', level:'A1', theme:'Nourriture & restaurant', ru:'Приятного аппетита!', translit:'priyatnava apietita', fr:'Bon appétit !'},
  {id:'o-nr-a1-2', level:'A1', theme:'Nourriture & restaurant', ru:'Я хочу пить.', translit:'ya khatchou pit', fr:'J\'ai soif (je veux boire).'},
  {id:'o-nr-a1-3', level:'A1', theme:'Nourriture & restaurant', ru:'Счёт, пожалуйста.', translit:'schot, pajalousta', fr:'L\'addition, s\'il vous plaît.'},
  {id:'o-nr-a1-4', level:'A1', theme:'Nourriture & restaurant', ru:'Это очень вкусно!', translit:'eta otchien fkousna!', fr:'C\'est très bon !'},
  {id:'o-nr-a2-1', level:'A2', theme:'Nourriture & restaurant', ru:'Что вы посоветуете?', translit:'chto vy passaviétouyetié?', fr:'Que me conseillez-vous ?'},
  {id:'o-nr-a2-2', level:'A2', theme:'Nourriture & restaurant', ru:'У вас есть вегетарианские блюда?', translit:'ou vas yest vegietarianskiyé blyouda?', fr:'Avez-vous des plats végétariens ?'},
  {id:'o-nr-a2-3', level:'A2', theme:'Nourriture & restaurant', ru:'Можно ещё немного хлеба?', translit:'mojna yeschio niémnoga khlieba?', fr:'Puis-je avoir encore un peu de pain ?'},
  {id:'o-nr-a2-4', level:'A2', theme:'Nourriture & restaurant', ru:'Столик на двоих, пожалуйста.', translit:'stolik na dvaikh, pajalousta', fr:'Une table pour deux, s\'il vous plaît.'},
  {id:'o-nr-b1-1', level:'B1', theme:'Nourriture & restaurant', ru:'У меня аллергия на орехи, есть ли они в этом блюде?', translit:'ou mienia alliergiya na ariékhi, yest li ani v etam blyoudié?', fr:'Je suis allergique aux noix, y en a-t-il dans ce plat ?'},
  {id:'o-nr-b1-2', level:'B1', theme:'Nourriture & restaurant', ru:'Можно заменить гарнир на овощи?', translit:'mojna zamienit garnir na ovaschi?', fr:'Peut-on remplacer l\'accompagnement par des légumes ?'},
  {id:'o-nr-b1-3', level:'B1', theme:'Nourriture & restaurant', ru:'На мой вкус, здесь многовато соли.', translit:'na moï fkous, zdies mnogavata soli', fr:'À mon goût, il y a un peu trop de sel.'},
  {id:'o-nr-b1-4', level:'B1', theme:'Nourriture & restaurant', ru:'Мы бы хотели разделить это блюдо на двоих.', translit:'my by khatieli razdielit eta blyouda na dvaikh', fr:'On aimerait partager ce plat à deux.'},
  {id:'o-te-a1-1', level:'A1', theme:'Travail & études', ru:'Я студент.', translit:'ya stoudient', fr:'Je suis étudiant.'},
  {id:'o-te-a1-2', level:'A1', theme:'Travail & études', ru:'Я работаю в офисе.', translit:'ya rabotayou v ofissié', fr:'Je travaille dans un bureau.'},
  {id:'o-te-a1-3', level:'A1', theme:'Travail & études', ru:'Во сколько начинается урок?', translit:'va skolka natchinayetsa ourok?', fr:'À quelle heure commence le cours ?'},
  {id:'o-te-a1-4', level:'A1', theme:'Travail & études', ru:'Мне нужна ручка.', translit:'mnié noujna routchka', fr:'J\'ai besoin d\'un stylo.'},
  {id:'o-te-a2-1', level:'A2', theme:'Travail & études', ru:'Я ищу новую работу.', translit:'ya ischou novouyou rabotou', fr:'Je cherche un nouveau travail.'},
  {id:'o-te-a2-2', level:'A2', theme:'Travail & études', ru:'У меня встреча в три часа.', translit:'ou mienia fstriétcha f tri tchassa', fr:'J\'ai un rendez-vous à trois heures.'},
  {id:'o-te-a2-3', level:'A2', theme:'Travail & études', ru:'Можно перенести дедлайн?', translit:'mojna pieriénisti diedlaïn?', fr:'Peut-on reporter la date limite ?'},
  {id:'o-te-a2-4', level:'A2', theme:'Travail & études', ru:'Мне нужно закончить этот отчёт сегодня.', translit:'mnié noujna zakontchit etat atchot siévodnia', fr:'Je dois terminer ce rapport aujourd\'hui.'},
  {id:'o-te-b1-1', level:'B1', theme:'Travail & études', ru:'Я хотел бы обсудить условия контракта.', translit:'ya khatiel by absoudit ousloviya kantrakta', fr:'J\'aimerais discuter des conditions du contrat.'},
  {id:'o-te-b1-2', level:'B1', theme:'Travail & études', ru:'На собеседовании меня спросили о моём опыте.', translit:'na sabiesiedavanii mienia sprassili o mayom opytié', fr:'Lors de l\'entretien, on m\'a interrogé sur mon expérience.'},
  {id:'o-te-b1-3', level:'B1', theme:'Travail & études', ru:'Мне важно найти баланс между работой и личной жизнью.', translit:'mnié vajna naïti balans miejdou rabotoï i litchnoï jiznyou', fr:'Il est important pour moi de trouver un équilibre travail-vie personnelle.'},
  {id:'o-te-b1-4', level:'B1', theme:'Travail & études', ru:'Я подал заявление на эту должность на прошлой неделе.', translit:'ya padal zayavlienié na etou doljnast na prochloï nedielié', fr:'J\'ai postulé pour ce poste la semaine dernière.'},
  {id:'o-lv-a1-1', level:'A1', theme:'Logement & ville', ru:'Это моя квартира.', translit:'eta maya kvartira', fr:'C\'est mon appartement.'},
  {id:'o-lv-a1-2', level:'A1', theme:'Logement & ville', ru:'Мой дом рядом с парком.', translit:'moï dom riadam s parkam', fr:'Ma maison est près du parc.'},
  {id:'o-lv-a1-3', level:'A1', theme:'Logement & ville', ru:'Где ближайший магазин?', translit:'gdié blijaïchiï magazin?', fr:'Où est le magasin le plus proche ?'},
  {id:'o-lv-a1-4', level:'A1', theme:'Logement & ville', ru:'Мне нравится мой район.', translit:'mnié nravitsa moï raïon', fr:'J\'aime mon quartier.'},
  {id:'o-lv-a2-1', level:'A2', theme:'Logement & ville', ru:'Мы ищем квартиру побольше.', translit:'my ischem kvartirou pabolché', fr:'Nous cherchons un appartement plus grand.'},
  {id:'o-lv-a2-2', level:'A2', theme:'Logement & ville', ru:'Сколько стоит аренда в месяц?', translit:'skolka stoit ariénda v miessiats?', fr:'Combien coûte le loyer par mois ?'},
  {id:'o-lv-a2-3', level:'A2', theme:'Logement & ville', ru:'В этом районе много шума по вечерам.', translit:'v etam raïonié mnoga chouma pa vietchieram', fr:'Il y a beaucoup de bruit le soir dans ce quartier.'},
  {id:'o-lv-a2-4', level:'A2', theme:'Logement & ville', ru:'Мы скоро переезжаем в новый дом.', translit:'my skora pieryeyezjayem v novyï dom', fr:'Nous déménageons bientôt dans une nouvelle maison.'},
  {id:'o-lv-b1-1', level:'B1', theme:'Logement & ville', ru:'Стоимость жизни в этом городе довольно высокая.', translit:'stoïmast jizni v etam gorodié davolna vysokaya', fr:'Le coût de la vie dans cette ville est assez élevé.'},
  {id:'o-lv-b1-2', level:'B1', theme:'Logement & ville', ru:'Нам пришлось долго искать подходящее жильё.', translit:'nam prichlos dolga iskat padkhadyaschéyé jilyo', fr:'Nous avons dû chercher longtemps un logement adapté.'},
  {id:'o-lv-b1-3', level:'B1', theme:'Logement & ville', ru:'Городской транспорт здесь довольно удобный.', translit:'garadskoï transpart zdies davolna oudobnyï', fr:'Les transports en commun sont plutôt pratiques ici.'},
  {id:'o-lv-b1-4', level:'B1', theme:'Logement & ville', ru:'Мы решили снять квартиру подальше от центра.', translit:'my richili sniat kvartirou padalché ot tsentra', fr:'Nous avons décidé de louer un appartement plus loin du centre.'},
  {id:'o-vs-a1-1', level:'A1', theme:'Vie sociale & fêtes', ru:'С днём рождения!', translit:'s dniom rajdiénia!', fr:'Joyeux anniversaire !'},
  {id:'o-vs-a1-2', level:'A1', theme:'Vie sociale & fêtes', ru:'Это тебе подарок.', translit:'eta tiebié padarak', fr:'C\'est un cadeau pour toi.'},
  {id:'o-vs-a1-3', level:'A1', theme:'Vie sociale & fêtes', ru:'Приходи в гости!', translit:'prikhadi v gosti!', fr:'Viens me rendre visite !'},
  {id:'o-vs-a1-4', level:'A1', theme:'Vie sociale & fêtes', ru:'С Новым годом!', translit:'s novym godam!', fr:'Bonne année !'},
  {id:'o-vs-a2-1', level:'A2', theme:'Vie sociale & fêtes', ru:'Спасибо за приглашение.', translit:'spassiba za priglachénié', fr:'Merci pour l\'invitation.'},
  {id:'o-vs-a2-2', level:'A2', theme:'Vie sociale & fêtes', ru:'Во сколько начинается вечеринка?', translit:'va skolka natchinayetsa vietchierinka?', fr:'À quelle heure commence la fête ?'},
  {id:'o-vs-a2-3', level:'A2', theme:'Vie sociale & fêtes', ru:'Могу я прийти с другом?', translit:'magou ya priti s drougom?', fr:'Puis-je venir avec un ami ?'},
  {id:'o-vs-a2-4', level:'A2', theme:'Vie sociale & fêtes', ru:'Праздник был просто отличный!', translit:'prazdnik byl prosta atlitchnyï!', fr:'La fête était vraiment super !'},
  {id:'o-vs-b1-1', level:'B1', theme:'Vie sociale & fêtes', ru:'Мы решили отметить это событие в узком кругу.', translit:'my richili atmiétit eta sabytié v ouzkam kroukou', fr:'Nous avons décidé de fêter cet événement en petit comité.'},
  {id:'o-vs-b1-2', level:'B1', theme:'Vie sociale & fêtes', ru:'Свадьба прошла именно так, как они мечтали.', translit:'svadba prachla iminna tak, kak ani miétchtali', fr:'Le mariage s\'est déroulé exactement comme ils en rêvaient.'},
  {id:'o-vs-b1-3', level:'B1', theme:'Vie sociale & fêtes', ru:'Праздник объединил всю семью впервые за долгое время.', translit:'prazdnik obyédinil fsyou siemyou fpiervyié za dolgayé vriémia', fr:'La fête a réuni toute la famille pour la première fois depuis longtemps.'},
  {id:'o-vs-b1-4', level:'B1', theme:'Vie sociale & fêtes', ru:'Некоторые традиции постепенно уходят в прошлое.', translit:'niekatoryié traditsii pastiepienna oukhodiat v prochloyé', fr:'Certaines traditions disparaissent peu à peu.'},
  {id:'o-cr-a1-1', level:'A1', theme:'Culture russe', ru:'Я люблю русские сказки.', translit:'ya lyublyou rousskiyé skazki', fr:'J\'aime les contes russes.'},
  {id:'o-cr-a1-2', level:'A1', theme:'Culture russe', ru:'Это матрёшка.', translit:'eta matriochka', fr:'C\'est une matriochka.'},
  {id:'o-cr-a1-3', level:'A1', theme:'Culture russe', ru:'Мы идём в цирк.', translit:'my idyom v tsirk', fr:'Nous allons au cirque.'},
  {id:'o-cr-a1-4', level:'A1', theme:'Culture russe', ru:'Я хочу посмотреть балет.', translit:'ya khatchou pasmatriét baliet', fr:'Je veux voir un ballet.'},
  {id:'o-cr-a2-1', level:'A2', theme:'Culture russe', ru:'Вы бывали в Большом театре?', translit:'vy byvali v balchom tiatrié?', fr:'Êtes-vous déjà allé au théâtre Bolchoï ?'},
  {id:'o-cr-a2-2', level:'A2', theme:'Culture russe', ru:'Мне очень нравится русская музыка.', translit:'mnié otchien nravitsa rousskaya mouzyka', fr:'J\'aime beaucoup la musique russe.'},
  {id:'o-cr-a2-3', level:'A2', theme:'Culture russe', ru:'В этом музее интересная выставка.', translit:'v etam mouziéié intieriesnaya vystafka', fr:'Il y a une exposition intéressante dans ce musée.'},
  {id:'o-cr-a2-4', level:'A2', theme:'Culture russe', ru:'Масленица — мой любимый праздник.', translit:'maslienitsa — moï lyoubimyï prazdnik', fr:'Maslenitsa est ma fête préférée.'},
  {id:'o-cr-b1-1', level:'B1', theme:'Culture russe', ru:'Русская литература оказала на меня большое влияние.', translit:'rousskaya litieratoura akazala na mienia balchoyé vliyanié', fr:'La littérature russe a eu une grande influence sur moi.'},
  {id:'o-cr-b1-2', level:'B1', theme:'Culture russe', ru:'Этот фильм считается классикой русского кино.', translit:'etat film schitayetsa klassikoï rousskava kino', fr:'Ce film est considéré comme un classique du cinéma russe.'},
  {id:'o-cr-b1-3', level:'B1', theme:'Culture russe', ru:'Многие традиции сохранились до сих пор.', translit:'mnogiyé traditsii sakhranilis do sikh por', fr:'De nombreuses traditions se sont conservées jusqu\'à aujourd\'hui.'},
  {id:'o-cr-b1-4', level:'B1', theme:'Culture russe', ru:'Я бы хотел лучше узнать русскую культуру.', translit:'ya by khatiel loutché ouznat rousskouyou koultourou', fr:'J\'aimerais mieux connaître la culture russe.'},
  {id:'o-st-a1-1', level:'A1', theme:'Société & technologie', ru:'У меня есть смартфон.', translit:'ou mienia yest smartfon', fr:'J\'ai un smartphone.'},
  {id:'o-st-a1-2', level:'A1', theme:'Société & technologie', ru:'У меня сел телефон.', translit:'ou mienia siel tielefon', fr:'Mon téléphone est déchargé.'},
  {id:'o-st-a1-3', level:'A1', theme:'Société & technologie', ru:'Здесь есть интернет?', translit:'zdies yest intiernet?', fr:'Y a-t-il internet ici ?'},
  {id:'o-st-a1-4', level:'A1', theme:'Société & technologie', ru:'Я смотрю новости каждый день.', translit:'ya smatriou novasti kajdyï dien', fr:'Je regarde les informations chaque jour.'},
  {id:'o-st-a2-1', level:'A2', theme:'Société & technologie', ru:'Я стараюсь меньше сидеть в телефоне.', translit:'ya starayous mienché sidiét f tielefonié', fr:'J\'essaie de moins rester sur mon téléphone.'},
  {id:'o-st-a2-2', level:'A2', theme:'Société & technologie', ru:'Ты видел это в новостях?', translit:'ty vidiel eta v navastiakh?', fr:'Tu as vu ça dans les infos ?'},
  {id:'o-st-a2-3', level:'A2', theme:'Société & technologie', ru:'Мне нужно обновить приложение.', translit:'mnié noujna abnavit prilajénié', fr:'Je dois mettre à jour l\'application.'},
  {id:'o-st-a2-4', level:'A2', theme:'Société & technologie', ru:'Я предпочитаю платить картой.', translit:'ya priedpatchitayou platit kartoï', fr:'Je préfère payer par carte.'},
  {id:'o-st-b1-1', level:'B1', theme:'Société & technologie', ru:'Искусственный интеллект меняет многие профессии.', translit:'iskoustviennyï intiéliekt mienyayet mnogiyé prafiéssii', fr:'L\'intelligence artificielle change de nombreux métiers.'},
  {id:'o-st-b1-2', level:'B1', theme:'Société & technologie', ru:'Мы всё больше зависим от технологий.', translit:'my fsyo bolché zavissim ot tiekhnalogiï', fr:'Nous dépendons de plus en plus de la technologie.'},
  {id:'o-st-b1-3', level:'B1', theme:'Société & technologie', ru:'Соцсети сильно изменили способ общения.', translit:'sotssieti silna izmienili sposab opschénia', fr:'Les réseaux sociaux ont beaucoup changé la manière de communiquer.'},
  {id:'o-st-b1-4', level:'B1', theme:'Société & technologie', ru:'Важно уметь отличать факты от мнений.', translit:'vajna oumiet otlitchat fakty ot mniéniï', fr:'Il est important de savoir distinguer les faits des opinions.'},
];
