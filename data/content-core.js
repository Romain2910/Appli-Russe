/* =========================================================
   CONTENU CORE (alphabet, vocabulaire, grammaire)
   ========================================================= */

const ALPHABET = [
  {c:'А а',t:'a',n:'comme "a" dans "papa"'},{c:'Б б',t:'b',n:'comme "b"'},{c:'В в',t:'v',n:'comme "v"'},
  {c:'Г г',t:'g',n:'comme "g" dans "gare"'},{c:'Д д',t:'d',n:'comme "d"'},{c:'Е е',t:'ie / e',n:'"ié" après consonne molle'},
  {c:'Ё ё',t:'io',n:'toujours accentué'},{c:'Ж ж',t:'j',n:'comme "j" dans "jardin"'},{c:'З з',t:'z',n:'comme "z"'},
  {c:'И и',t:'i',n:'comme "i"'},{c:'Й й',t:'ï',n:'"i" bref, semi-voyelle'},{c:'К к',t:'k',n:'comme "k"'},
  {c:'Л л',t:'l',n:'comme "l"'},{c:'М м',t:'m',n:'comme "m"'},{c:'Н н',t:'n',n:'comme "n"'},
  {c:'О о',t:'o',n:'"o" ouvert si accentué'},{c:'П п',t:'p',n:'comme "p"'},{c:'Р р',t:'r',n:'"r" roulé'},
  {c:'С с',t:'s',n:'comme "s"'},{c:'Т т',t:'t',n:'comme "t"'},{c:'У у',t:'ou',n:'comme "ou"'},
  {c:'Ф ф',t:'f',n:'comme "f"'},{c:'Х х',t:'kh',n:'jota espagnole'},{c:'Ц ц',t:'ts',n:'comme "ts"'},
  {c:'Ч ч',t:'tch',n:'comme "tch"'},{c:'Ш ш',t:'ch',n:'comme "ch"'},{c:'Щ щ',t:'chtch',n:'"ch" long et mouillé'},
  {c:'Ъ ъ',t:'—',n:'signe dur, muet, sépare'},{c:'Ы ы',t:'y',n:'entre "i" et "ou"'},{c:'Ь ь',t:'—',n:'signe mou, palatalise'},
  {c:'Э э',t:'è',n:'comme "è"'},{c:'Ю ю',t:'iou',n:'comme "iou"'},{c:'Я я',t:'ia',n:'comme "ia"'}
];

const DECKS = [
  {id:'salutations', name:'Salutations et politesse', cards:[
    ['Здравствуйте','zdrastvouïtié','Bonjour (formel)'],['Привет','privet','Salut'],
    ['Доброе утро','dobroïé outro','Bon matin'],['Добрый день','dobryï dien','Bon après-midi'],
    ['Добрый вечер','dobryï vietcher','Bonsoir'],['Спокойной ночи','spokoïnoï notchi','Bonne nuit'],
    ['До свидания','do svidania','Au revoir'],['Пока','poka','Salut (au revoir, familier)'],
    ['Спасибо','spassibo','Merci'],['Пожалуйста','pajalousta','S\'il vous plaît / De rien'],
    ['Извините','izvinitié','Excusez-moi'],['Да','da','Oui'],['Нет','niet','Non'],
    ['Как дела?','kak dila?','Comment ça va ?'],['Меня зовут...','menia zovout...','Je m\'appelle...'],
    ['Увидимся','ouvidimsya','À bientôt'],['Хорошего дня','kharochevo dnya','Bonne journée'],
    ['Добро пожаловать','dobro pajalavat','Bienvenue'],['Как у тебя дела?','kak ou tebya dila?','Comment vas-tu ?'],
    ['Ничего, спасибо','nitchevo spassiba','Rien de spécial, merci'],
    ['Как поживаешь?','kak pajivayech?','Comment vas-tu (familier) ?'],['Рад тебя видеть','rad tebya videt','Content de te voir'],
    ['Приятно познакомиться','priyatna paznakomitsa','Enchanté(e)'],['Будьте здоровы','boudtié zdarovy','Soyez en bonne santé'],
    ['С праздником!','s prazdnikom','Bonne fête !'],['Поздравляю!','pazdravlyayou','Félicitations !'],
    ['Удачи!','oudatchi','Bonne chance !'],['Извини','izvini','Pardon (familier)'],
    ['Не за что','nié za chto','De rien (réponse à merci)'],['Конечно','kanechno','Bien sûr']
  ]},
  {id:'nombres', name:'Les nombres', cards:[
    ['ноль','nol','zéro'],['один','adin','un'],['два','dva','deux'],['три','tri','trois'],['четыре','tchétyré','quatre'],
    ['пять','piat','cinq'],['шесть','chest','six'],['семь','siem','sept'],['восемь','vossiem','huit'],['девять','dieviat','neuf'],
    ['десять','diessiat','dix'],['одиннадцать','adinnatsat','onze'],['двенадцать','dvienatsat','douze'],
    ['тринадцать','trinatsat','treize'],['четырнадцать','tchetyrnatsat','quatorze'],['пятнадцать','piatnatsat','quinze'],
    ['шестнадцать','chestnatsat','seize'],['семнадцать','semnatsat','dix-sept'],['восемнадцать','vosemnatsat','dix-huit'],
    ['девятнадцать','devyatnatsat','dix-neuf'],['двадцать','dvatsat','vingt'],['тридцать','tridtsat','trente'],
    ['сорок','sorok','quarante'],['пятьдесят','piatdesyat','cinquante'],['шестьдесят','chestdesyat','soixante'],
    ['семьдесят','semdesyat','soixante-dix'],['восемьдесят','vosemdesyat','quatre-vingts'],['девяносто','devyanosto','quatre-vingt-dix'],
    ['сто','sto','cent'],['тысяча','tysyatcha','mille'],['первый','pervyi','premier'],['второй','ftoroy','deuxième'],['третий','tretiy','troisième'],
    ['четвёртый','tchetvyortyi','quatrième'],['пятый','pyatyi','cinquième'],['шестой','chestoy','sixième'],
    ['седьмой','sedmoy','septième'],['восьмой','vosmoy','huitième'],['девятый','devyatyi','neuvième'],['десятый','desyatyi','dixième'],
    ['половина','polovina','moitié'],['пара','para','paire / couple de'],['миллион','million','million']
  ]},
  {id:'famille', name:'La famille', cards:[
    ['мама','mama','maman'],['папа','papa','papa'],['брат','brat','frère'],['сестра','sestra','sœur'],
    ['сын','syn','fils'],['дочь','dotch','fille'],['бабушка','babouchka','grand-mère'],['дедушка','dédouchka','grand-père'],
    ['семья','semia','famille'],['муж','mouj','mari'],['жена','jéna','épouse'],['ребёнок','riebionok','enfant'],
    ['дядя','dyadya','oncle'],['тётя','tyotya','tante'],['двоюродный брат','dvayurodnyi brat','cousin'],
    ['двоюродная сестра','dvayurodnaya sestra','cousine'],['внук','vnouk','petit-fils'],['внучка','vnoutchka','petite-fille'],
    ['свекровь','svekrov','belle-mère (côté mari)'],['тесть','test','beau-père (côté femme)'],
    ['родители','raditieli','parents'],['родственник','rodstvennik','parent (relatif, générique)'],
    ['взрослый','vzroslyi','adulte'],['близнецы','bliznetsy','jumeaux'],['невеста','nevesta','fiancée'],
    ['жених','jenikh','fiancé'],['холостой','kholostoy','célibataire (homme)'],['одинокий','adinokiy','seul / célibataire']
  ]},
  {id:'verbes', name:'Verbes courants (infinitif)', cards:[
    ['быть','byt','être'],['делать','diélat','faire'],['говорить','govorit','parler'],['читать','tchitat','lire'],
    ['писать','pissat','écrire'],['знать','znat','savoir'],['любить','lioubit','aimer'],['хотеть','khotiet','vouloir'],
    ['идти','idti','aller (à pied)'],['есть','iest','manger'],['пить','pit','boire'],['работать','rabotat','travailler'],
    ['приходить','prikhodit','venir / arriver'],['уходить','oukhodit','partir'],['покупать','pokoupat','acheter'],
    ['продавать','prodavat','vendre'],['открывать','otkryvat','ouvrir'],['закрывать','zakryvat','fermer'],
    ['начинать','natchinat','commencer'],['заканчивать','zakantchivat','finir'],['помогать','pomogat','aider'],
    ['искать','iskat','chercher'],['находить','nakhodit','trouver'],['терять','teryat','perdre'],
    ['играть','igrat','jouer'],['бегать','begat','courir'],['спать','spat','dormir'],
    ['просыпаться','prosypatsya','se réveiller'],['мыться','mytsya','se laver'],['одеваться','odevatsya','s\'habiller'],
    ['звонить','zvonit','appeler (téléphoner)'],['отвечать','otvetchat','répondre'],
    ['думать','doumat','penser'],['понимать','panimat','comprendre'],['видеть','videt','voir'],['слышать','slychat','entendre'],
    ['чувствовать','tchoustvavat','sentir / ressentir'],['показывать','pokazyvat','montrer'],['давать','davat','donner'],
    ['брать','brat','prendre'],['носить','nassit','porter'],['ждать','jdat','attendre'],['встречать','fstretchat','rencontrer'],
    ['забывать','zabyvat','oublier'],['помнить','pomnit','se souvenir'],['решать','rechat','décider / résoudre'],
    ['пробовать','probavat','essayer'],['учиться','outchitsya','étudier / apprendre'],['учить','outchit','enseigner / apprendre par cœur'],
    ['строить','stroit','construire'],['ломать','lomat','casser'],['чинить','tchinit','réparer']
  ]},
  {id:'nourriture', name:'Nourriture et boissons', cards:[
    ['хлеб','khlieb','pain'],['вода','vada','eau'],['чай','tchaï','thé'],['кофе','kofié','café'],
    ['молоко','malako','lait'],['мясо','miasso','viande'],['рыба','ryba','poisson'],['овощи','ovochtchi','légumes'],
    ['фрукты','froukty','fruits'],['суп','soup','soupe'],['сыр','syr','fromage'],['яйцо','yaïtso','œuf'],
    ['яблоко','yabloko','pomme'],['банан','banan','banane'],['апельсин','apelsin','orange'],['виноград','vinograd','raisin'],
    ['помидор','pomidor','tomate'],['картофель','kartofel','pomme de terre'],['морковь','morkov','carotte'],['лук','louk','oignon'],
    ['курица','kouritsa','poulet'],['говядина','govyadina','bœuf'],['масло','maslo','beurre'],['сахар','sakhar','sucre'],
    ['соль','sol','sel'],['тарелка','tarelka','assiette'],['вилка','vilka','fourchette'],
    ['завтрак','zaftrak','petit-déjeuner'],['обед','abied','déjeuner'],['ужин','oujine','dîner'],['десерт','desert','dessert'],
    ['сладкий','sladkiy','sucré'],['острый','ostryi','épicé'],['солёный','solyonyi','salé'],['кислый','kislyi','acide'],
    ['горький','gorkiy','amer'],['ложка','lojka','cuillère'],['нож','noj','couteau'],['чашка','tchachka','tasse'],
    ['стакан','stakan','verre'],['меню','menyou','menu'],['счёт','stchyot','addition (restaurant)']
  ]},
  {id:'couleurs', name:'Les couleurs', cards:[
    ['красный','krasnyï','rouge'],['синий','sinii','bleu'],['зелёный','zieliony','vert'],['жёлтый','jioltyï','jaune'],
    ['чёрный','tchiornyï','noir'],['белый','bielyï','blanc'],['серый','sieryï','gris'],['оранжевый','oranjévyï','orange'],
    ['фиолетовый','fioletovyi','violet'],['розовый','rozovyi','rose'],['коричневый','koritchnevyi','marron'],['золотой','zolotoy','doré'],
    ['голубой','galouboy','bleu clair'],['бежевый','bejevyi','beige'],['светлый','svetlyi','clair'],['тёмный','tyomnyi','foncé']
  ]},
  {id:'temps', name:'Jours et temps', cards:[
    ['понедельник','panediélnik','lundi'],['вторник','ftornik','mardi'],['среда','sriéda','mercredi'],
    ['четверг','tchetvierk','jeudi'],['пятница','piatnitsa','vendredi'],['суббота','soubota','samedi'],
    ['воскресенье','vaskriessieniyé','dimanche'],['сегодня','sievodnia','aujourd\'hui'],
    ['завтра','zaftra','demain'],['вчера','ftchéra','hier'],['час','tchas','heure'],['минута','minouta','minute'],['секунда','sekounda','seconde'],
    ['месяц','miesyats','mois'],['год','god','année'],['неделя','nediélya','semaine'],['утро','outro','matin'],
    ['вечер','vietcher','soir'],['полночь','polnotch','minuit'],['полдень','poldien','midi']
  ]},
  {id:'maison', name:'La maison', cards:[
    ['дом','dom','maison'],['квартира','kvartira','appartement'],['стол','stol','table'],['стул','stoul','chaise'],
    ['окно','akno','fenêtre'],['дверь','dvier','porte'],['книга','kniga','livre'],['телефон','tieliefon','téléphone'],
    ['машина','machina','voiture'],['ключ','klioutch','clé'],['кухня','koukhnya','cuisine (pièce)'],['спальня','spalnya','chambre'],
    ['ванная','vannaya','salle de bain'],['гостиная','gostinaya','salon'],['диван','divan','canapé'],['кровать','krovat','lit'],
    ['шкаф','chkaf','armoire'],['холодильник','khalodilnik','réfrigérateur'],['плита','plita','cuisinière'],['лампа','lampa','lampe'],
    ['потолок','patalok','plafond'],['пол','pol','sol'],['стена','stiena','mur'],['коридор','karidor','couloir'],
    ['балкон','balkon','balcon'],['лестница','liesnitsa','escalier'],['ковёр','kovyor','tapis'],['зеркало','zierkalo','miroir'],
    ['полка','polka','étagère'],['подушка','padouchka','oreiller']
  ]},
  {id:'corps', name:'Le corps humain', cards:[
    ['голова','golova','tête'],['глаза','glaza','yeux'],['нос','nos','nez'],['рот','rot','bouche'],
    ['ухо','oukho','oreille'],['рука','rouka','main / bras'],['нога','noga','jambe / pied'],['сердце','serdtsé','cœur'],
    ['живот','jivot','ventre'],['спина','spina','dos'],['палец','palets','doigt'],['волосы','volosy','cheveux'],
    ['зуб','zoub','dent'],['шея','cheya','cou'],['плечо','pletcho','épaule'],['колено','kalieno','genou'],
    ['кожа','koja','peau'],['кровь','krof','sang'],['мозг','mozk','cerveau'],['горло','gorlo','gorge']
  ]},
  {id:'vetements', name:'Vêtements', cards:[
    ['рубашка','roubachka','chemise'],['футболка','foutbolka','t-shirt'],['брюки','bryouki','pantalon'],['джинсы','djinsy','jean'],
    ['платье','platié','robe'],['юбка','youbka','jupe'],['куртка','kourtka','veste'],['пальто','palto','manteau'],
    ['туфли','toufli','chaussures'],['кроссовки','krossovki','baskets'],['шапка','chapka','bonnet'],
    ['перчатки','pertchatki','gants'],['носки','noski','chaussettes'],['очки','otchki','lunettes'],
    ['пижама','pijama','pyjama'],['ремень','riemien','ceinture'],['шарф','charf','écharpe'],['сумка','soumka','sac'],
    ['зонт','zont','parapluie'],['купальник','koupalnik','maillot de bain']
  ]},
  {id:'travail', name:'Travail et métiers', cards:[
    ['врач','vratch','médecin'],['учитель','outchitel','professeur'],['инженер','injenier','ingénieur'],['продавец','prodavets','vendeur'],
    ['повар','povar','cuisinier'],['водитель','voditel','chauffeur'],['полицейский','politseyskiy','policier'],
    ['юрист','yourist','avocat'],['программист','programmist','informaticien'],['директор','direktor','directeur'],
    ['коллега','kolliéga','collègue'],['начальник','natchalnik','patron'],['зарплата','zarplata','salaire'],
    ['офис','ofis','bureau'],['встреча','fstretcha','réunion'],
    ['сотрудник','sotroudnik','employé'],['клиент','klient','client'],['компания','kompania','entreprise'],
    ['контракт','kontrakt','contrat'],['собеседование','sobesiedovanié','entretien d\'embauche'],['резюме','riezyoumé','CV'],
    ['опыт','opyt','expérience'],['карьера','karyera','carrière'],['расписание','raspissanié','emploi du temps']
  ]},
  {id:'transport', name:'Transport', cards:[
    ['автобус','avtobous','bus'],['поезд','poyezd','train'],['самолёт','samolyot','avion'],['метро','metro','métro'],
    ['такси','taksi','taxi'],['велосипед','velosiped','vélo'],['билет','bilet','billet'],['остановка','astanovka','arrêt (de bus)'],
    ['вокзал','vokzal','gare'],['аэропорт','aeroport','aéroport'],['дорога','doroga','route'],['светофор','svietofor','feu tricolore'],
    ['мотоцикл','mototsikl','moto'],['корабль','korabl','bateau'],['парковка','parkovka','parking'],
    ['скорость','skorost','vitesse'],['пробка','probka','embouteillage'],['расстояние','rasstoyanié','distance']
  ]},
  {id:'ville', name:'La ville et les lieux', cards:[
    ['банк','bank','banque'],['почта','potchta','poste'],['аптека','apteka','pharmacie'],['больница','bolnitsa','hôpital'],
    ['магазин','magazin','magasin'],['рынок','rynok','marché'],['церковь','tserkov','église'],['библиотека','biblioteka','bibliothèque'],
    ['музей','mouzey','musée'],['площадь','ploshchad','place'],['улица','oulitsa','rue'],['мост','most','pont'],
    ['стадион','stadion','stade'],['парк','park','parc'],['кинотеатр','kinoteatr','cinéma (bâtiment)'],
    ['ресторан','restoran','restaurant'],['кафе','kafé','café (lieu)'],['отель','otiel','hôtel'],['вход','fkhod','entrée'],['выход','vykhod','sortie']
  ]},
  {id:'nature', name:'Nature et animaux', cards:[
    ['собака','sobaka','chien'],['кошка','kochka','chat'],['птица','ptitsa','oiseau'],['лошадь','lochad','cheval'],
    ['дерево','dérevo','arbre'],['цветок','tsvetok','fleur'],['лес','lies','forêt'],['река','reka','rivière'],
    ['море','morié','mer'],['гора','gora','montagne'],['небо','niebo','ciel'],['солнце','sontsé','soleil'],
    ['звезда','zvezda','étoile'],['дождь','dojd','pluie'],
    ['озеро','ozero','lac'],['остров','ostrov','île'],['трава','trava','herbe'],['лист','list','feuille'],
    ['ветер','vieter','vent'],['снег','snek','neige']
  ]},
  {id:'voyage', name:'Voyage et vacances', cards:[
    ['отпуск','otpousk','vacances'],['путешествие','poutéchestvié','voyage'],['гостиница','gostinitsa','hôtel'],
    ['номер','nomer','chambre d\'hôtel'],['чемодан','tchemodan','valise'],['паспорт','pasport','passeport'],
    ['виза','viza','visa'],['пляж','plyaj','plage'],['экскурсия','ekskoursiya','excursion'],
    ['фотография','fotografiya','photo'],['сувенир','souvenir','souvenir'],
    ['маршрут','marchroute','itinéraire'],['рейс','reïs','vol (avion)'],['багаж','bagaj','bagages'],
    ['граница','granitsa','frontière'],['карта','karta','carte (plan)'],['гид','guid','guide (personne)']
  ]},
  {id:'technologie', name:'Technologie et communication', cards:[
    ['компьютер','kompyouter','ordinateur'],['интернет','internet','internet'],['сообщение','soobchtchenié','message'],
    ['электронная почта','elektronnaya potchta','email'],['приложение','prilojenié','application'],['пароль','parol','mot de passe'],
    ['экран','ekran','écran'],['зарядка','zaryadka','chargeur'],['сеть','siet','réseau / wifi'],['клавиатура','klaviatoura','clavier'],
    ['видео','vidéo','vidéo'],['батарея','batareya','batterie'],['настройки','nastroïki','paramètres'],
    ['обновление','obnovlenié','mise à jour'],['файл','faïl','fichier']
  ]},
  {id:'emotions', name:'Émotions et caractère', cards:[
    ['счастливый','chastlivyi','heureux'],['грустный','groustnyi','triste'],['злой','zloï','en colère / méchant'],
    ['уставший','oustavchiy','fatigué'],['удивлённый','oudivliyonnyi','surpris'],['спокойный','spokoynyi','calme'],
    ['нервный','nervnyi','nerveux'],['добрый','dobryi','gentil'],['умный','oumnyi','intelligent'],
    ['ленивый','lenivyi','paresseux'],['смешной','smiechnoy','drôle'],['скучный','skoutchnyi','ennuyeux'],
    ['влюблённый','vlyoubliyonnyi','amoureux'],['гордый','gordyi','fier'],['испуганный','ispougannyi','effrayé'],
    ['разочарованный','razotcharovannyi','déçu'],['взволнованный','vzvolnovannyi','ému / excité']
  ]},
  {id:'achats', name:'Achats et argent', cards:[
    ['деньги','dengi','argent'],['цена','tsena','prix'],['скидка','skidka','réduction'],['касса','kassa','caisse'],
    ['наличные','nalitchnyié','espèces'],['чек','tchek','reçu / ticket'],['покупка','pokoupka','achat'],
    ['дорого','dorogo','c\'est cher'],['дёшево','dyochevo','c\'est pas cher'],
    ['распродажа','rasprodaja','soldes'],['размер','razmier','taille'],['примерочная','primerotchnaya','cabine d\'essayage'],
    ['кредитная карта','kreditnaya karta','carte de crédit'],['очередь','otcheredy','file d\'attente'],['упаковка','oupakovka','emballage'],
    ['Возврат','vazvrat','Remboursement, retour'],
    ['Витрина','vitrina','Vitrine'],
    ['Оплатить','aplatit','Payer, régler'],
    ['Бесплатно','biesplatna','Gratuit'],
    ['Гарантия','garantiya','Garantie'],
    ['Товар','tavar','Marchandise, produit']
  ]},
  {id:'ecole', name:'École et éducation', cards:[
    ['урок','ourok','cours / leçon'],['студент','stoudent','étudiant'],['экзамен','ekzamien','examen'],
    ['домашнее задание','domachneïe zadanié','devoirs'],['оценка','otsenka','note'],['тетрадь','tetrad','cahier'],
    ['ручка','routchka','stylo'],['карандаш','karandach','crayon'],
    ['предмет','predmiet','matière (scolaire)'],['класс','klass','classe'],['перемена','peremiena','récréation'],
    ['диплом','diplom','diplôme'],['каникулы','kanikouly','vacances scolaires'],['учебник','outchebnik','manuel scolaire']
  ]},
  {id:'sports', name:'Sports et loisirs', cards:[
    ['спорт','sport','sport'],['футбол','foutbol','football'],['плавание','plavanié','natation'],['бег','bieg','course à pied'],
    ['тренировка','trenirovka','entraînement'],['кино','kino','cinéma'],['театр','teatr','théâtre'],
    ['рисовать','risovat','dessiner'],['танцевать','tantsevat','danser'],['путешествовать','poutechestvovat','voyager'],
    ['команда','komanda','équipe'],['матч','match','match'],['победа','pobieda','victoire'],
    ['поражение','porajenié','défaite'],['мяч','myatch','ballon'],['йога','yoga','yoga']
  ]},
  {id:'sante', name:'Santé', cards:[
    ['болезнь','boliezn','maladie'],['температура','temperatoura','fièvre / température'],['боль','bol','douleur'],
    ['простуда','prostouda','rhume'],['кашель','kachel','toux'],['таблетка','tabletka','comprimé'],
    ['здоровье','zdorovié','santé'],['укол','oukol','piqûre'],['операция','operatsiya','opération'],
    ['скорая помощь','skoraya pomoch','ambulance / urgences'],['аллергия','allergiya','allergie'],['диета','diéta','régime'],
    ['Лекарство от кашля','liékarstva ot kachlia','Sirop / médicament contre la toux'],
    ['Выздороветь','vyzdaraviét','Guérir'],
    ['Больничный','bolnitchnyï','Arrêt maladie'],
    ['Симптом','simptom','Symptôme'],
    ['Рецепт (врача)','riétsept vratcha','Ordonnance'],
    ['Приём у врача','priyom ou vratcha','Rendez-vous médical']
  ]},
  {id:'adjectifs', name:'Adjectifs courants (opposés)', cards:[
    ['большой','bolchoy','grand'],['маленький','malenkiy','petit'],['горячий','goryatchiy','chaud'],['холодный','kholodnyi','froid'],
    ['старый','staryi','vieux'],['быстрый','bystryi','rapide'],['медленный','medliennyi','lent'],
    ['лёгкий','liokhkiy','facile / léger'],['тяжёлый','tyajolyi','difficile / lourd'],['дорогой','dorogoy','cher'],
    ['дешёвый','dechovyi','pas cher'],['высокий','vysokiy','haut / grand (taille)'],['низкий','nizkiy','bas'],
    ['длинный','dlinnyi','long'],['короткий','korotkiy','court'],['сильный','silnyi','fort'],['слабый','slabyi','faible'],
    ['богатый','bogatyi','riche'],['бедный','bednyi','pauvre'],['новый','novyi','nouveau'],
    ['красивый','krassivyi','beau'],['уродливый','ourodlivyi','laid'],['чистый','tchistyi','propre'],['грязный','gryaznyi','sale'],
    ['полный','polnyi','plein'],['пустой','poustoy','vide'],['правильный','pravilnyi','correct'],
    ['неправильный','nepravilnyi','incorrect'],['интересный','interiesnyi','intéressant'],['важный','vajnyi','important']
  ]},
  {id:'direction', name:'Directions et localisation', cards:[
    ['слева','sleva','à gauche'],['справа','sprava','à droite'],['прямо','pryamo','tout droit'],['напротив','naprotiv','en face'],
    ['рядом','ryadom','à côté'],['далеко','daleko','loin'],['близко','blizko','près'],['наверху','naverkhou','en haut'],
    ['внизу','vnizou','en bas'],['угол','ougol','coin'],['центр','tsentr','centre'],
    ['вперёд','vperiod','en avant'],['назад','nazad','en arrière'],['вокруг','vokrouk','autour']
  ]},
  {id:'connecteurs', name:'Connecteurs et mots utiles', cards:[
    ['и','i','et'],['а','a','et / mais (opposition légère)'],['но','no','mais'],['или','ili','ou'],
    ['потому что','patamou chto','parce que'],['поэтому','paetamou','donc / c\'est pourquoi'],['если','yesli','si'],
    ['хотя','khotya','bien que'],['также','takje','également'],['кроме того','krome togo','de plus'],
    ['например','naprimier','par exemple'],['кстати','kstati','à propos'],['в общем','v obchtchem','en somme'],
    ['наконец','nakonets','enfin'],['значит','znatchit','donc / ça veut dire']
  ]},
  {id:'expressions', name:'Expressions courantes', cards:[
    ['Не может быть!','nié mojet byt','Pas possible !'],['Всё в порядке','fsyo f paryadkié','Tout va bien'],
    ['Как жаль','kak jal','Quel dommage'],['Без проблем','bez problem','Pas de problème'],
    ['Это неважно','eta nievajno','Ce n\'est pas grave'],['Дай мне подумать','daï mnié padoumat','Laisse-moi réfléchir'],
    ['Я не уверен','ya nié ouveren','Je ne suis pas sûr'],['Договорились','dagavarilis','C\'est convenu'],
    ['Ты прав','ty praf','Tu as raison'],['Не знаю','nié znayou','Je ne sais pas'],
    ['Может быть','mojet byt','Peut-être'],['В любом случае','v lyubom sloutchaïe','De toute façon'],
    ['Ни в коем случае','ni v koïem sloutchaïe','En aucun cas'],
    ['На самом деле','na samam diélié','En fait, en réalité'],
    ['Так и есть','tak i yest','C\'est bien ça'],
    ['Именно','iminna','Exactement, précisément'],
    ['С удовольствием','s oudavolstviyem','Avec plaisir'],
    ['Ничего страшного','nitchivo strachnava','Ce n\'est pas grave, pas de souci']
  ]},
  {id:'geographie', name:'Géographie et pays', cards:[
    ['Франция','frantsiya','France'],['Россия','rossiya','Russie'],['страна','strana','pays'],
    ['столица','stolitsa','capitale'],['континент','kontinent','continent'],['карта мира','karta mira','carte du monde'],
    ['язык','yazyk','langue'],['иностранец','inostranets','étranger (personne)'],['национальность','natsionalnost','nationalité'],
    ['восток','vostok','est'],['запад','zapad','ouest'],['север','sever','nord'],['юг','youg','sud']
  ]},
  {id:'telephone', name:'Au téléphone', cards:[
    ['алло','alo','allô'],['перезвонить','perezvonit','rappeler'],['номер телефона','nomer telefona','numéro de téléphone'],
    ['оставить сообщение','ostavit soobchtchenié','laisser un message'],['связь','svyaz','réseau / connexion'],
    ['занято','zanyato','occupé (ligne)'],['повесить трубку','poviessit troubkou','raccrocher'],
    ['набрать номер','nabrat nomer','composer le numéro'],['громче','gromtché','plus fort'],['тише','tiché','moins fort'],
    ['Смартфон','smartfon','Smartphone'],
    ['Заряд батареи','zariad batarieï','Charge de batterie'],
    ['Пропущенный звонок','prapouchennyï zvanok','Appel manqué'],
    ['Голосовая почта','golasavaya potchta','Messagerie vocale'],
    ['Экран блокировки','ekran blakiroovki','Écran verrouillé'],
    ['Разрядился телефон','razriadilsia tielefon','Le téléphone est déchargé']
  ]},
  {id:'meteo', name:'Météo et climat', cards:[
    ['Погода','pagoda','Le temps (météo)'],
    ['Солнечно','solnitchna','Il fait soleil'],
    ['Идёт дождь','idiot dojd','Il pleut'],
    ['Идёт снег','idiot snieg','Il neige'],
    ['Ветрено','vietrièna','Il y a du vent'],
    ['Облако','oblaka','Nuage'],
    ['Облачно','oblatchna','Il fait nuageux'],
    ['Туман','touman','Brouillard'],
    ['Гроза','graza','Orage'],
    ['Молния','molniya','Éclair'],
    ['Гром','grom','Tonnerre'],
    ['Жара','jara','Chaleur, canicule'],
    ['Жарко','jarka','Il fait chaud'],
    ['Холодно','kholadna','Il fait froid'],
    ['Мороз','maroz','Gel, grand froid'],
    ['Тепло','tiepló','Il fait doux/chaud'],
    ['Прохладно','prakhladna','Il fait frais'],
    ['Влажность','vlajnast','Humidité'],
    ['Радуга','raduga','Arc-en-ciel'],
    ['Прогноз погоды','pragnoz pagody','Prévisions météo'],
    ['Градус','gradous','Degré (température)'],
    ['Ураган','ouragan','Ouragan'],
    ['Ливень','livien','Averse, forte pluie'],
    ['Ясно','yasna','Il fait clair, ciel dégagé']
  ]},
  {id:'cuisine', name:'Cuisine et ustensiles', cards:[
    ['Готовить','gatovit','Cuisiner'],
    ['Жарить','jarit','Faire frire'],
    ['Варить','varit','Faire bouillir'],
    ['Печь','pietch','Faire cuire au four'],
    ['Резать','riézat','Couper'],
    ['Смешивать','smiéchivat','Mélanger'],
    ['Сковорода','skavarada','Poêle'],
    ['Кастрюля','kastriulia','Casserole'],
    ['Духовка','doukhovka','Four'],
    ['Микроволновка','mikravalnovka','Micro-ondes'],
    ['Рецепт','riétsept','Recette'],
    ['Ингредиент','ingridiyent','Ingrédient'],
    ['Тесто','tiesta','Pâte'],
    ['Сковородка кипит','skavarodka kipit','La poêle chauffe fort'],
    ['Разогреть','razagriét','Réchauffer'],
    ['Нарезать','nariézat','Découper en morceaux'],
    ['Посуда','passouda','Vaisselle'],
    ['Крышка','krychka','Couvercle'],
    ['Половник','palovnik','Louche'],
    ['Разделочная доска','razdiélotchnaya daska','Planche à découper'],
    ['Дуршлаг','dourchlag','Passoire'],
    ['Терка','tiorka','Râpe']
  ]},
  {id:'loisirs', name:'Loisirs et divertissement', cards:[
    ['Хобби','khobi','Passe-temps'],
    ['Концерт','kantsert','Concert'],
    ['Петь','piet','Chanter'],
    ['Настольная игра','nastolnaya igra','Jeu de société'],
    ['Выставка','vystavka','Exposition'],
    ['Отдыхать','addykhat','Se reposer, se détendre'],
    ['Прогулка','pragoulka','Promenade'],
    ['Гулять','goulyat','Se promener'],
    ['Развлечение','razvlietchényié','Divertissement'],
    ['Караоке','karaoke','Karaoké'],
    ['Скучно','skoutchna','C\'est ennuyeux'],
    ['Весело','viésila','C\'est amusant'],
    ['Свободное время','svabodnaïé vriémia','Temps libre'],
    ['Вязать','viazat','Tricoter'],
    ['Коллекционировать','kalliektsianirovat','Collectionner'],
    ['Шахматы','chakhmaty','Échecs'],
    ['Головоломка','galavalomka','Casse-tête, puzzle'],
    ['Мастерить','mastierit','Bricoler, fabriquer'],
    ['Кроссворд','krassvord','Mots croisés'],
    ['Пазл','pazl','Puzzle (à assembler)']
  ]},
  {id:'societe', name:'Société et politique', cards:[
    ['Общество','opchestva','Société'],
    ['Государство','gassoudarstva','État (pays)'],
    ['Правительство','pravitielstva','Gouvernement'],
    ['Президент','priézidient','Président'],
    ['Закон','zakon','Loi'],
    ['Право','prava','Droit'],
    ['Гражданин','grajdanin','Citoyen'],
    ['Выборы','vybory','Élections'],
    ['Голосовать','galasavat','Voter'],
    ['Свобода','svaboda','Liberté'],
    ['Равенство','ravienstva','Égalité'],
    ['Демократия','diémakratiya','Démocratie'],
    ['Партия','partiya','Parti (politique)'],
    ['Экономика','ekonomika','Économie'],
    ['Налог','nalog','Impôt'],
    ['Протест','pratiest','Protestation'],
    ['Мнение','mniénié','Opinion'],
    ['Новости','novasti','Actualités'],
    ['Пресса','priéssa','Presse'],
    ['Средства массовой информации','sriedstva massovoï informatsii','Médias']
  ]},
  {id:'bureau', name:'Le bureau et l\'informatique', cards:[
    ['Мышь','mych','Souris (informatique)'],
    ['Значок (иконка)','znatchok ikonka','Icône'],
    ['Вкладка','vkladka','Onglet (navigateur)'],
    ['Курсор','koursor','Curseur'],
    ['Принтер','printer','Imprimante'],
    ['Папка','papka','Dossier'],
    ['Документ','dakoumient','Document'],
    ['Программа','pragramma','Logiciel, programme'],
    ['Сохранить','sakhranit','Enregistrer'],
    ['Печатать','pitchatat','Taper, imprimer'],
    ['Бумага','boumaga','Papier'],
    ['Совещание','saviéchanié','Réunion'],
    ['Крайний срок','krayni srok','Date limite'],
    ['Повышение','pavychéniyé','Promotion (au travail)'],
    ['Стажировка','stajirovka','Stage (professionnel)'],
    ['Уволиться','ouvolitsa','Démissionner'],
    ['Загрузить','zagrouzit','Télécharger'],
    ['Скачать','skatchat','Télécharger (un fichier)']
  ]},
  {id:'fetes', name:'Fêtes et traditions', cards:[
    ['Праздник','prazdnik','Fête'],
    ['Новый год','novyï god','Le Nouvel An'],
    ['Рождество','rajdiestvo','Noël'],
    ['Пасха','paskha','Pâques'],
    ['День рождения','dien rajdiénia','Anniversaire'],
    ['Свадьба','svadba','Mariage'],
    ['Подарок','padarak','Cadeau'],
    ['Поздравлять','pazdravliat','Féliciter'],
    ['Праздновать','prazdnavat','Fêter'],
    ['Гость','gost','Invité'],
    ['Приглашать','priglachat','Inviter'],
    ['Традиция','traditsiya','Tradition'],
    ['Обычай','abytchaï','Coutume'],
    ['Ёлка','iolka','Sapin de Noël'],
    ['Салют','salyout','Feux d\'artifice'],
    ['Торт','tort','Gâteau'],
    ['Свеча','svietcha','Bougie'],
    ['Отмечать','atmiétchat','Célébrer, marquer (une date)'],
    ['Фейерверк','feïerverk','Feu d\'artifice'],
    ['Юбилей','youbiliéï','Jubilé, anniversaire important']
  ]},
  {id:'quantites', name:'Quantités, mesures et unités', cards:[
    ['Много','mnoga','Beaucoup'],
    ['Мало','mala','Peu'],
    ['Немного','niémnoga','Un peu'],
    ['Достаточно','dastatatchna','Assez'],
    ['Слишком','slichkam','Trop'],
    ['Килограмм','kilagram','Kilogramme'],
    ['Грамм','gram','Gramme'],
    ['Литр','litr','Litre'],
    ['Метр','mietr','Mètre'],
    ['Километр','kilamietr','Kilomètre'],
    ['Четверть','tchetviert','Quart'],
    ['Несколько','niéskalka','Quelques, plusieurs'],
    ['Весь','vies','Tout, entier'],
    ['Каждый','kajdyï','Chaque'],
    ['Двойной','dvaïnoï','Double'],
    ['Вес','vyes','Poids']
  ]},
  {id:'relations', name:'Relations et vie sociale', cards:[
    ['Дружба','droujba','Amitié'],
    ['Подруга','padrouga','Amie'],
    ['Любовь','lyubov','Amour'],
    ['Влюбиться','vliubitsa','Tomber amoureux'],
    ['Отношения','atnachéniya','Relation, relations'],
    ['Знакомиться','znakomitsa','Faire connaissance'],
    ['Встречаться','vstriétchatsa','Se rencontrer, sortir ensemble'],
    ['Доверие','daviériyé','Confiance'],
    ['Доверять','daviriat','Faire confiance'],
    ['Ссора','ssora','Dispute'],
    ['Ссориться','ssoritsa','Se disputer'],
    ['Мириться','miritsa','Se réconcilier'],
    ['Одиночество','adinotchestva','Solitude'],
    ['Сосед','sasied','Voisin'],
    ['Знакомый','znakomyï','Connaissance (personne)'],
    ['Поддержка','paddierjka','Soutien']
  ]},
];

const LESSONS = [
  {id:'structure', title:'La phrase russe : pas d\'articles, pas de « être »', level:'Base', cefr:'A1', cases:[],
   content:`En français, on dit "je suis étudiant" avec le verbe être et sans article défini/indéfini pour la nationalité, mais on dit "LE chat", "UN livre". Le russe n'a ni articles (le/la/un/une n'existent pas), ni verbe "être" au présent.

"Я студент" = littéralement "Je étudiant" = "Je suis étudiant".
"Кот чёрный" = littéralement "Chat noir" = "Le chat est noir".

L'ordre des mots est aussi plus libre qu'en français, car ce sont les terminaisons (les cas) qui indiquent la fonction du mot dans la phrase, pas sa position. On reviendra sur les cas plus loin : c'est le cœur de la grammaire russe.

⚠ Point de vigilance : ne traduis jamais littéralement en insérant "есть" pour dire "je suis" — "Я есть студент" est une erreur classique qui sonne artificiel ; dis simplement "Я студент".`,
   examples:[['Я студент.','Je suis étudiant.'],['Это дом.','C\'est une maison.'],['Кофе горячий.','Le café est chaud.'],["Она врач.","Elle est médecin."],["Дети дома.","Les enfants sont à la maison."]],
   quiz:[
     {q:'Comment dit-on "Je suis professeur" en russe (mot à mot) ?', o:['Я есть учитель','Я учитель','Я быть учитель'], a:1},
     {q:'Le russe possède-t-il des articles (le/la/un/une) ?', o:['Oui, toujours','Non, jamais','Seulement au pluriel'], a:1},
     {q:'Qu\'est-ce qui indique la fonction d\'un mot dans la phrase russe ?', o:['Sa position uniquement','Sa terminaison (le cas)','Un article'], a:1},
     {q:"Comment dit-on \"Le café est chaud\" ?", o:["Кофе горячий.","Кофе есть горячий.","Кофе горячее."], a:0},
     {q:"\"Кот чёрный\" signifie littéralement…", o:["Le chat est noir","Le chat noir","Noir le chat"], a:0}
   ]},
  {id:'genre', cefr:'A1', title:'Le genre des noms', level:'Base', cases:[],
   content:`Tout nom russe a un genre : masculin, féminin ou neutre. On le devine presque toujours grâce à la dernière lettre du mot au nominatif (forme du dictionnaire) :

— Se termine par une consonne → masculin (стол = table, дом = maison)
— Se termine par -а ou -я → féminin (мама, семья)
— Se termine par -о ou -е → neutre (окно = fenêtre, море = mer)
— Se termine par -ь → masculin OU féminin, il faut l'apprendre par cœur (дверь = porte, fém. ; словарь = dictionnaire, masc.)

Le genre est essentiel car il détermine les terminaisons des adjectifs et des verbes au passé.

⚠ Point de vigilance : quelques mots masculins se terminent en -а/-я malgré la règle générale (папа = papa, дядя = oncle) — pour les personnes, c'est le sens qui prime sur la terminaison.`,
   examples:[['стол (m.)','table'],['мама (f.)','maman'],['окно (n.)','fenêtre'],['дверь (f.)','porte'],["папа (m., exception)","papa"],["время (n., exception)","le temps"]],
   quiz:[
     {q:'Quel est le genre de "книга" (livre) ?', o:['Masculin','Féminin','Neutre'], a:1},
     {q:'Quel est le genre de "море" (mer) ?', o:['Masculin','Féminin','Neutre'], a:2},
     {q:'Une terminaison en -ь est toujours…', o:['Neutre','Masculin ou féminin, à apprendre','Toujours féminin'], a:1},
     {q:"Quel est le genre de \"папа\" (papa) ?", o:["Masculin (exception)","Féminin","Neutre"], a:0},
     {q:"Quel est le genre de \"словарь\" (dictionnaire) ?", o:["Féminin","Masculin","Neutre"], a:1}
   ]},
  {id:'pluriel', cefr:'A1', title:'Le pluriel des noms', level:'Base', cases:[],
   content:`Pour former le pluriel régulier au nominatif :

— Masculin et féminin en consonne / -а / -я → on remplace par -ы ou -и (après г,к,х,ж,ч,ш,щ on met toujours -и)
— Neutre en -о → devient -а ; en -е → devient -я

Exemples : стол → столы (tables), книга → книги (livres), окно → окна (fenêtres).
Il existe des pluriels irréguliers à apprendre au fur et à mesure (друг → друзья = amis).

⚠ Point de vigilance : cette forme est le pluriel au nominatif seulement — il change encore selon le cas (voir la leçon sur la déclinaison au pluriel). Ne t'arrête pas à cette forme pour un COD ou un complément.`,
   examples:[['стол → столы','table → tables'],['книга → книги','livre → livres'],['окно → окна','fenêtre → fenêtres'],["друг → друзья","ami → amis (irrégulier)"],["ребёнок → дети","enfant → enfants (irrégulier)"]],
   quiz:[
     {q:'Quel est le pluriel de "стол" (table) ?', o:['столы','столя','столов'], a:0},
     {q:'Quel est le pluriel de "окно" (fenêtre) ?', o:['окны','окна','окно'], a:1},
     {q:'Après г, к, х, ж, ч, ш, щ, on met toujours…', o:['-ы','-и','-а'], a:1},
     {q:"Quel est le pluriel de \"друг\" (ami) ?", o:["други","друзья","другы"], a:1},
     {q:"Quel est le pluriel de \"книга\" (livre) ?", o:["книги","книгы","книга"], a:0}
   ]},
  {id:'pronoms', cefr:'A1', title:'Les pronoms et le verbe être (быть)', level:'Base', cases:[],
   content:`Pronoms personnels : я (je), ты (tu, familier), он/она/оно (il/elle/il-neutre), мы (nous), вы (vous, ou "tu" poli), они (ils/elles).

Le verbe быть (être) disparaît au présent, mais il réapparaît au passé et au futur :
Passé : я был/была (j'étais, masc./fém.), он был, она была, они были.
Futur : я буду, ты будешь, он будет, мы будем, вы будете, они будут.

⚠ Point de vigilance : "вы" sert à la fois de pluriel (vous, plusieurs personnes) et de forme de politesse au singulier (comme le vouvoiement français) — seul le contexte permet de distinguer les deux.`,
   examples:[['Я был дома.','J\'étais à la maison.'],['Она будет здесь.','Elle sera ici.'],['Мы студенты.','Nous sommes étudiants.'],["Мы были в Москве.","Nous étions à Moscou."],["Вы будете дома?","Serez-vous à la maison ?"]],
   quiz:[
     {q:'Comment dit-on "tu" en russe, forme familière ?', o:['вы','ты','он'], a:1},
     {q:'"Была" est la forme passée de быть pour…', o:['il (masculin)','elle (féminin)','ils'], a:1},
     {q:'Le verbe "être" est-il utilisé au présent en russe ?', o:['Oui, toujours','Non, il disparaît','Seulement au pluriel'], a:1},
     {q:"\"Мы были в Москве\" signifie…", o:["Nous serons à Moscou","Nous étions à Moscou","Nous sommes à Moscou"], a:1},
     {q:"Comment dit-on \"ils/elles\" en russe ?", o:["они","он","оно"], a:0}
   ]},
  {id:'conj1', cefr:'A1', title:'Conjugaison : 1er groupe (verbes en -ать)', level:'Verbes', cases:[],
   content:`Les verbes en -ать (comme читать = lire) se conjuguent au présent ainsi (on retire -ть et on ajoute les terminaisons) :

я читаю, ты читаешь, он/она читает, мы читаем, вы читаете, они читают.

C'est le modèle le plus courant. On retrouve ce schéma (-ю/-ешь/-ет/-ем/-ете/-ют) pour beaucoup de verbes du premier groupe : работать (travailler), знать (savoir), делать (faire).

⚠ Point de vigilance : à l'oral, ne confonds pas la terminaison -ют du 1er groupe (они читают) et la terminaison -ят du 2e groupe (они говорят) — elles se ressemblent mais indiquent un groupe de conjugaison différent.`,
   examples:[['я читаю','je lis'],['ты работаешь','tu travailles'],['они делают','ils font'],["мы знаем","nous savons"],["вы делаете","vous faites"]],
   quiz:[
     {q:'Comment dit-on "je lis" (читать) ?', o:['я читаю','я читаешь','я читает'], a:0},
     {q:'Quelle est la terminaison de "они" (ils/elles) au 1er groupe ?', o:['-ем','-ют','-ешь'], a:1},
     {q:'"Работать" appartient à quel groupe ?', o:['1er groupe (-ать)','2e groupe (-ить)','Aucun'], a:0},
     {q:"\"Nous savons\" (знать) se dit…", o:["мы знаем","мы знаете","мы знают"], a:0},
     {q:"\"Vous faites\" (делать) se dit…", o:["вы делаете","вы делают","вы делаешь"], a:0}
   ]},
  {id:'conj2', cefr:'A1', title:'Conjugaison : 2e groupe (verbes en -ить)', level:'Verbes', cases:[],
   content:`Les verbes en -ить (comme говорить = parler) suivent un autre schéma :

я говорю, ты говоришь, он/она говорит, мы говорим, вы говорите, они говорят.

Terminaisons : -ю/-у, -ишь, -ит, -им, -ите, -ят/-ат. On retrouve ce modèle pour любить (aimer : я люблю), учить (apprendre), готовить (cuisiner).

⚠ Point de vigilance : certains verbes du 2e groupe subissent une alternance consonantique uniquement à la 1ère personne du singulier : любить → я люблю (б → бл), видеть → я вижу (д → ж). Les autres personnes restent régulières.`,
   examples:[['я говорю','je parle'],['ты говоришь','tu parles'],['мы говорим','nous parlons'],["вы говорите","vous parlez"],["она готовит","elle cuisine"]],
   quiz:[
     {q:'Comment dit-on "tu parles" (говорить) ?', o:['ты говорю','ты говоришь','ты говорят'], a:1},
     {q:'"Любить" (aimer) est du 2e groupe. "Je t\'aime" se dit…', o:['я люблю тебя','я любишь тебя','я любит тебя'], a:0},
     {q:'La terminaison "они" au 2e groupe est souvent…', o:['-ют','-ят / -ат','-ешь'], a:1},
     {q:"\"Elle cuisine\" (готовить) se dit…", o:["она готовит","она готовиет","она готовляет"], a:0},
     {q:"À la 1ère personne, \"любить\" (aimer) devient…", o:["я любю","я люблю","я любию"], a:1}
   ]},
  {id:'cas-intro', cefr:'A1', title:'Introduction aux 6 cas', level:'Cas', cases:[],
   content:`C'est le point le plus important à comprendre pour progresser en russe : chaque nom, pronom et adjectif change de terminaison selon son rôle dans la phrase (sujet, complément, possession...). Ce sont les 6 cas.

1. Именительный (Nominatif) — le sujet, la forme du dictionnaire
2. Родительный (Génitif) — la possession, la négation ("il n'y a pas de...")
3. Дательный (Datif) — le destinataire ("à qui")
4. Винительный (Accusatif) — le complément d'objet direct
5. Творительный (Instrumental) — le moyen, l'accompagnement ("avec")
6. Предложный (Prépositionnel) — le lieu, après о/в/на

Contrairement au français, l'ordre des mots ne suffit pas à comprendre "qui fait quoi" : c'est la terminaison qui le dit. On étudie chaque cas dans les leçons suivantes.

⚠ Point de vigilance : ne cherche pas d'équivalent case-par-case en français — certains cas russes recouvrent plusieurs fonctions françaises à la fois (le génitif fait le travail de "de" ET de la négation, par exemple).`,
   examples:[['Nominatif : кот','le chat (sujet)'],['Génitif : кота','du chat'],['Accusatif : кота','le chat (COD)'],["Датив : коту","au chat"],["Творительный : котом","avec le chat"]],
   quiz:[
     {q:'Combien de cas existe-t-il en russe ?', o:['4','6','8'], a:1},
     {q:'Quel cas exprime le complément d\'objet direct ?', o:['Génitif','Accusatif','Datif'], a:1},
     {q:'Quel cas exprime la possession ?', o:['Génitif','Instrumental','Nominatif'], a:0},
     {q:"Quel cas exprime le moyen ou l'accompagnement ?", o:["Datif","Instrumental","Prépositionnel"], a:1},
     {q:"Quel cas s'utilise toujours après une préposition de position comme \"о\" ou \"в\" ?", o:["Nominatif","Prépositionnel","Accusatif"], a:1}
   ]},
  {id:'nom-acc', cefr:'A1', title:'Nominatif et Accusatif', level:'Cas', cases:['nominatif','accusatif'],
   content:`Le Nominatif est la forme "de base" : le sujet de la phrase. C'est celle du dictionnaire.

L'Accusatif marque le COD (complément d'objet direct). Règle clé pour les noms masculins animés (personnes/animaux) : l'accusatif prend la terminaison du génitif. Pour les inanimés masculins et le neutre, l'accusatif = nominatif. Pour le féminin en -а, l'accusatif se termine en -у.

Я вижу стол. (Je vois une table — inanimé, pas de changement)
Я вижу маму. (Je vois maman — мама → маму)
Я вижу брата. (Je vois un frère — animé, comme le génitif)

⚠ Point de vigilance : la règle "animé = comme le génitif" ne s'applique qu'au masculin singulier (et à tout le monde au pluriel) — au féminin et au neutre singulier, l'animation ne change rien à la déclinaison.`,
   examples:[['Nom. кот / Acc. кота','le chat (sujet / COD, animé)'],['Nom. книга / Acc. книгу','le livre (fém.)'],['Nom. окно / Acc. окно','la fenêtre (neutre, inchangé)'],["Я вижу собаку.","Je vois un chien (fém., terminaison -у)."],["Он видит отца.","Il voit son père (masc. animé, comme le génitif)."]],
   quiz:[
     {q:'À l\'accusatif, "мама" devient…', o:['маму','мамы','маме'], a:0},
     {q:'Pour un objet inanimé masculin, l\'accusatif est…', o:['identique au génitif','identique au nominatif','identique au datif'], a:1},
     {q:'"Я читаю книгу" — "книгу" est à quel cas ?', o:['Nominatif','Accusatif','Instrumental'], a:1},
     {q:"\"Он видит отца\" — \"отца\" est à quel cas ?", o:["Nominatif","Accusatif (animé, comme le génitif)","Datif"], a:1},
     {q:"Pour un nom féminin en -а, l'accusatif se termine généralement en…", o:["-у","-и","-ы"], a:0}
   ]},
  {id:'genitif', cefr:'A1', title:'Le génitif', level:'Cas', cases:['genitif'],
   content:`Le génitif exprime la possession ("le livre DE Anna") et s'utilise après la négation "нет" (il n'y a pas de...).

Terminaisons typiques au singulier : masculin +а/я, féminin en -а → -ы/и, neutre -о → -а.

У меня нет книги. (Je n'ai pas de livre — книга → книги)
Это дом Анны. (C'est la maison d'Anna — Анна → Анны)

⚠ Point de vigilance : au pluriel, le génitif prend souvent une forme très différente du singulier et doit s'apprendre à part (c'est ce même génitif pluriel qui apparaît après les nombres 5 et plus).`,
   examples:[['книга → книги','du livre / pas de livre'],['брат → брата','du frère'],['У меня нет времени.','Je n\'ai pas de temps.'],["стакан воды","un verre d'eau"],["Это машина брата.","C'est la voiture du frère."]],
   quiz:[
     {q:'Le génitif sert notamment à exprimer…', o:['le lieu','la possession','le moyen'], a:1},
     {q:'Après "нет" (il n\'y a pas), on utilise le…', o:['nominatif','génitif','accusatif'], a:1},
     {q:'"дом Анны" signifie…', o:['la maison pour Anna','la maison d\'Anna','Anna est à la maison'], a:1},
     {q:"\"Un verre d'eau\" (стакан воды) — \"воды\" est à quel cas ?", o:["Nominatif","Génitif","Accusatif"], a:1},
     {q:"\"C'est la voiture du frère\" utilise quel cas pour \"frère\" ?", o:["Génitif","Datif","Instrumental"], a:0}
   ]},
  {id:'datif', cefr:'A1', title:'Le datif', level:'Cas', cases:['datif'],
   content:`Le datif indique le destinataire de l'action : "à qui". Il s'utilise avec des verbes comme donner (давать), dire (говорить), écrire (писать).

Terminaisons typiques : masculin +у/ю, féminin -а→-е, neutre -о→-у.

Я даю книгу другу. (Je donne un livre à un ami — друг → другу)
Ей нравится музыка. (Elle aime la musique — littéralement "à elle plaît la musique")

⚠ Point de vigilance : le datif s'utilise aussi seul, sans verbe d'action, dans les tournures impersonnelles de sensation : Мне холодно. (J'ai froid — littéralement "à moi il fait froid").`,
   examples:[['друг → другу','à un ami'],['сестра → сестре','à une sœur'],['мне, тебе, ему, ей','à moi, à toi, à lui, à elle'],["Позвони мне.","Appelle-moi."],["Врач помогает пациенту.","Le médecin aide le patient."]],
   quiz:[
     {q:'Le datif répond à la question…', o:['qui / quoi (sujet)','à qui / à quoi','avec qui'], a:1},
     {q:'"Я пишу письмо маме" — "маме" est au…', o:['génitif','datif','accusatif'], a:1},
     {q:'Le pronom "à elle" au datif est…', o:['её','ей','она'], a:1},
     {q:"\"Мне холодно\" signifie…", o:["J'ai froid","Il fait chaud","Je suis froid (caractère)"], a:0},
     {q:"\"Le médecin aide le patient\" — \"patient\" se met au…", o:["accusatif","datif","génitif"], a:1}
   ]},
  {id:'instrumental', cefr:'A1', title:'L\'instrumental', level:'Cas', cases:['instrumental'],
   content:`L'instrumental exprime le moyen ("avec quoi/par quoi") et l'accompagnement ("avec qui", avec la préposition с).

Terminaisons typiques : masculin +ом/ем, féminin -а→-ой, neutre -о→-ом.

Я пишу ручкой. (J'écris avec un stylo — ручка → ручкой)
Я иду с другом. (Je vais avec un ami — друг → другом)

⚠ Point de vigilance : ne confonds pas "с другом" (avec un ami, instrumental après с) et l'instrumental seul, sans préposition, pour exprimer un moyen ou un attribut : работать врачом (travailler comme médecin).`,
   examples:[['ручка → ручкой','avec un stylo'],['друг → другом','avec un ami'],['она работает учителем','elle travaille comme professeure'],["Я горжусь тобой.","Je suis fier de toi."],["Она работает врачом.","Elle travaille comme médecin."]],
   quiz:[
     {q:'L\'instrumental exprime notamment…', o:['le lieu','le moyen ou l\'accompagnement','la négation'], a:1},
     {q:'"Я пишу ручкой" signifie…', o:['J\'écris un stylo','J\'écris avec un stylo','Le stylo écrit'], a:1},
     {q:'"Avec un ami" se dit…', o:['с другом','другу','друга'], a:0},
     {q:"\"Elle travaille comme médecin\" se dit…", o:["Она работает врачом.","Она работает врача.","Она работает врачу."], a:0},
     {q:"\"Je suis fier de toi\" se dit…", o:["Я горжусь тобой.","Я горжусь тебя.","Я горжусь тебе."], a:0}
   ]},
  {id:'prepositionnel', cefr:'A1', title:'Le prépositionnel', level:'Cas', cases:['prepositionnel'],
   content:`Le prépositionnel s'utilise toujours après une préposition (о = à propos de, в = dans, на = sur), jamais seul. Il exprime souvent le lieu ou le sujet dont on parle.

Terminaisons typiques : masculin/neutre +е, féminin -а→-е.

Я живу в Москве. (J'habite à Moscou — Москва → Москве)
Мы говорим о фильме. (Nous parlons du film — фильм → фильме)

⚠ Point de vigilance : ne confonds pas на столе (sur la table, lieu fixe, prépositionnel) et на стол (vers la table, direction, accusatif) — c'est la préposition combinée au bon cas qui donne le sens correct.`,
   examples:[['в Москве','à Moscou'],['на столе','sur la table'],['о книге','à propos du livre'],["Мы говорим о тебе.","Nous parlons de toi."],["Книга лежит на столе.","Le livre est sur la table."]],
   quiz:[
     {q:'Le prépositionnel s\'utilise…', o:['seul, sans préposition','toujours après une préposition','uniquement au pluriel'], a:1},
     {q:'"Я живу в Москве" — quel cas après "в" ?', o:['Prépositionnel','Accusatif','Génitif'], a:0},
     {q:'"Sur la table" se dit…', o:['на столе','на стол','со столом'], a:0},
     {q:"\"Nous parlons de toi\" se dit…", o:["Мы говорим о тебе.","Мы говорим о ты.","Мы говорим о тебя."], a:0},
     {q:"\"Le livre est sur la table\" (position) se dit…", o:["Книга на стол.","Книга на столе.","Книга на столу."], a:1}
   ]},
  {id:'passe', cefr:'A1', title:'Le passé', level:'Verbes', cases:[],
   content:`Le passé russe est simple à former : il ne dépend pas de la personne, mais du genre et du nombre du sujet ! On retire -ть de l'infinitif et on ajoute -л (masc.), -ла (fém.), -ло (neutre), -ли (pluriel).

читать → я читал (masc.) / я читала (fém.) / они читали
говорить → он говорил / она говорила

⚠ Point de vigilance : le passé ne distingue pas par sa forme "j'ai lu" (achevé) de "je lisais" (en cours) — c'est l'aspect du verbe (voir la leçon dédiée) qui porte cette nuance, pas la terminaison du passé.`,
   examples:[['я читал / читала','j\'ai lu (homme/femme)'],['она говорила','elle a parlé'],['мы были','nous étions'],["Они читали книгу.","Ils lisaient / ont lu un livre."],["Я не понял.","Je n'ai pas compris (masc.)."]],
   quiz:[
     {q:'Le passé russe change selon…', o:['la personne (je/tu/il)','le genre et le nombre du sujet','le temps qu\'il fait'], a:1},
     {q:'"Elle a lu" (читать) se dit…', o:['она читал','она читала','она читали'], a:1},
     {q:'La terminaison du passé au pluriel est…', o:['-ли','-ла','-л'], a:0},
     {q:"\"Ils lisaient / ont lu un livre\" se dit…", o:["Они читали книгу.","Они читал книгу.","Они читала книгу."], a:0},
     {q:"Le passé change-t-il selon la personne (je/tu/il) ?", o:["Oui, comme au présent","Non, seulement selon le genre et le nombre","Seulement au pluriel"], a:1}
   ]},

  {id:'adjectifs-nom', cefr:'A1', title:'L\'accord des adjectifs au nominatif', level:'Structure', cases:[],
   content:`Les adjectifs s'accordent en genre et en nombre avec le nom qu'ils qualifient, au nominatif — et se placent généralement avant le nom, comme en français.

Terminaisons au nominatif : masculin -ый/-ий (ou -ой si la fin est accentuée), féminin -ая/-яя, neutre -ое/-ее, pluriel (les trois genres) -ые/-ие.

новый дом (masc.), новая книга (fém.), новое окно (neutre), новые дома (pluriel).

⚠ Point de vigilance : la terminaison masculine dépend parfois de l'accent tonique : молодой (accent final → -ой) mais новый (accent initial → -ый). Écoute et retiens plutôt que d'appliquer une règle purement mécanique.`,
   examples:[['новый дом','une nouvelle maison'],['красивая девушка','une belle jeune femme'],['интересное кино','un film intéressant'],["хороший день","une bonne journée"],["большие города","de grandes villes"]],
   quiz:[
     {q:'Quel est l\'accord correct pour "стол" (table, masc.) avec "красивый" (beau) ?', o:['красивый стол','красивая стол','красивое стол'], a:0},
     {q:'"Книга" (livre, fém.) + "интересный" (intéressant) → ?', o:['интересный книга','интересная книга','интересное книга'], a:1},
     {q:'Le pluriel de "новый дом" (nouvelle maison) est…', o:['новые дома','новый домы','новая дома'], a:0},
     {q:"\"Une bonne journée\" (день, masc.) se dit…", o:["хороший день","хорошая день","хорошее день"], a:0},
     {q:"\"De grandes villes\" (города, pluriel) se dit…", o:["большой города","большие города","большая города"], a:1}
   ]},
  {id:'negation-questions', cefr:'A1', title:'La négation et les mots interrogatifs', level:'Structure', cases:[],
   content:`Pour nier, on place не devant l'élément nié (souvent le verbe) : Я не знаю. (Je ne sais pas.) Contrairement au français, une seule particule suffit — pas de "ne...pas" en deux morceaux.

Mots interrogatifs essentiels : что (quoi), кто (qui), где (où — position), куда (où — direction), когда (quand), почему (pourquoi), как (comment), сколько (combien), какой (quel), чей (à qui).

Attention à где / куда : где = lieu où l'on EST (Где ты? = Où es-tu ?) ; куда = lieu où l'on VA (Куда ты идёшь? = Où vas-tu ?).

⚠ Point de vigilance : dans une vraie négation renforcée (avec никто, ничего...), не reste obligatoire en plus : Я ничего не знаю (pas "Я ничего знаю"). On approfondit ce piège dans une leçon dédiée au niveau B1.`,
   examples:[['Я не понимаю.','Je ne comprends pas.'],['Где ты живёшь?','Où habites-tu ?'],['Куда ты идёшь?','Où vas-tu ?'],["Кто это?","Qui est-ce ?"],["Какой сегодня день?","Quel jour sommes-nous ?"]],
   quiz:[
     {q:'Comment dit-on "je ne sais pas" ?', o:['я знаю не','я не знаю','не я знаю'], a:1},
     {q:'Quelle question utiliser pour "où vas-tu" (direction) ?', o:['Где ты идёшь?','Куда ты идёшь?','Когда ты идёшь?'], a:1},
     {q:'"Сколько" signifie…', o:['pourquoi','combien','comment'], a:1},
     {q:"\"Qui est-ce ?\" se dit…", o:["Что это?","Кто это?","Где это?"], a:1},
     {q:"\"Quel jour sommes-nous ?\" se dit…", o:["Какой сегодня день?","Кто сегодня день?","Где сегодня день?"], a:0}
   ]},

  {id:'declinaison-adjectifs', cefr:'A2', title:'La déclinaison complète des adjectifs', level:'Cas', cases:[], declTable:2,
   content:`Comme les noms, les adjectifs se déclinent sur les 6 cas, et s'accordent toujours en genre et en nombre avec le nom qu'ils qualifient. Voici le tableau complet au singulier pour новый (nouveau), le modèle "dur" le plus courant — utilise-le comme référence tant que ce n'est pas automatique.

Un repère qui aide beaucoup : au féminin, presque tous les cas (sauf le nominatif et l'accusatif) se terminent en -ой. Au masculin et au neutre, génitif et prépositionnel se ressemblent souvent.

⚠ Point de vigilance : au masculin animé singulier, l'accusatif copie le génitif (нового студента), comme pour les noms — n'oublie pas cette règle quand tu combines un adjectif avec un nom animé.`,
   examples:[['новой книги (gén. fém.)','d\'un nouveau livre'],['новому дому (dat. masc.)','à une nouvelle maison'],['в новом доме (prép.)','dans une nouvelle maison'],["Я говорю о новом фильме.","Je parle du nouveau film (prép. masc.)."],["Он купил новую машину.","Il a acheté une nouvelle voiture (acc. fém.)."]],
   quiz:[
     {q:'Au génitif féminin singulier, "новая" devient…', o:['новой','новую','новым'], a:0},
     {q:'Au datif masculin singulier, "новый" devient…', o:['новому','новом','новым'], a:0},
     {q:'Quelle est la forme correcte de l\'instrumental neutre ?', o:['новым','новой','новое'], a:0},
     {q:"Au prépositionnel masculin/neutre, \"новый\" devient…", o:["новом","новому","новой"], a:0},
     {q:"À l'accusatif féminin, \"новая\" devient…", o:["новую","новой","новом"], a:0}
   ]},
  {id:'declinaison-pluriel', cefr:'A2', title:'La déclinaison au pluriel', level:'Cas', cases:[], declTable:1,
   content:`Bonne nouvelle : au pluriel, masculin, féminin et neutre partagent presque toujours les mêmes terminaisons — c'est beaucoup plus simple qu'au singulier !

Piège fréquent : le génitif pluriel des noms féminins en -а perd souvent sa terminaison (книга → книг, sans rien à la fin). C'est une des irrégularités les plus utiles à retenir, car le génitif pluriel sert énormément (après les nombres, la négation, les quantités).

Les adjectifs, eux, ont une seule forme pour les trois genres au pluriel : новые (nom.), новых (gén.), новым (dat.), новыми (instr.), новых (prép.).

⚠ Point de vigilance : cette perte de terminaison au génitif pluriel féminin ne concerne pas tous les mots — certains gardent une terminaison en -ей (дверь → дверей). Il faut vérifier au cas par cas.`,
   examples:[['пять книг','cinq livres (gén. pl. sans terminaison)'],['новые дома','les nouvelles maisons'],['в новых домах','dans les nouvelles maisons'],["много друзей","beaucoup d'amis (gén. pl. en -ей)"],["с новыми друзьями","avec de nouveaux amis (instr. pl.)"]],
   quiz:[
     {q:'Au génitif pluriel, "стол" devient…', o:['столов','столы','столам'], a:0},
     {q:'Au génitif pluriel, "книга" devient…', o:['книг','книги','книгам'], a:0},
     {q:'L\'adjectif pluriel change-t-il selon le genre ?', o:['Oui, toujours','Non, il est identique pour les trois genres','Seulement au nominatif'], a:1},
     {q:"Au génitif pluriel, \"неделя\" (semaine) devient…", o:["недель","недели","неделям"], a:0},
     {q:"\"Avec de nouveaux amis\" (instrumental pluriel) se dit…", o:["с новыми друзьями","с новых друзей","с новым другом"], a:0}
   ]},
  {id:'verbes-mouvement-1', cefr:'A2', title:'Les verbes de mouvement : идти/ходить, ехать/ездить', level:'Verbes', cases:[],
   content:`Point délicat et très fréquent : le russe distingue le mouvement "unidirectionnel" (une seule direction, en cours ou ponctuel) du mouvement "multidirectionnel" (aller-retour, habitude, plusieurs directions).

идти (aller à pied, maintenant, une direction) — ходить (aller à pied, habituellement)
ехать (aller en véhicule, maintenant) — ездить (aller en véhicule, habituellement)

Я иду в школу. (Je vais à l'école — là, maintenant.) / Я хожу в школу каждый день. (Je vais à l'école tous les jours — habitude.)

Conjugaison présent идти (irrégulière) : иду, идёшь, идёт, идём, идёте, идут.
Conjugaison ходить (2e groupe) : хожу, ходишь, ходит, ходим, ходите, ходят.

⚠ Point de vigilance : pour un trajet précis annoncé à l'avance, on utilise presque toujours la forme unidirectionnelle, même au futur proche : Завтра я еду в Москву. (Demain je pars à Moscou.)`,
   examples:[['Я еду в Москву.','Je vais à Moscou (maintenant, en véhicule).'],['Я езжу на работу на машине.','Je vais au travail en voiture (habituellement).'],['Куда ты идёшь?','Où vas-tu (là, maintenant) ?'],["Каждый день я хожу в школу.","Chaque jour je vais à l'école (habitude, à pied)."],["Завтра мы едем в отпуск.","Demain nous partons en vacances (une direction, en véhicule)."]],
   quiz:[
     {q:'Pour "je vais au travail tous les jours, à pied" (habitude)…', o:['Я иду на работу каждый день','Я хожу на работу каждый день','Я еду на работу каждый день'], a:1},
     {q:'"Ехать" s\'utilise pour un déplacement…', o:['à pied','en véhicule','en avion uniquement'], a:1},
     {q:'Quelle est la forme correcte de "идти" à la 1ère personne du singulier ?', o:['иду','идю','идешь'], a:0},
     {q:"\"Хожу\" est la forme multidirectionnelle de…", o:["ехать","идти","ездить"], a:1},
     {q:"Pour un trajet précis annoncé à l'avance, on utilise plutôt…", o:["la forme multidirectionnelle","la forme unidirectionnelle","les deux indifféremment"], a:1}
   ]},
  {id:'aspect-verbal', cefr:'A2', title:'L\'aspect verbal : imperfectif et perfectif', level:'Verbes', cases:[],
   content:`C'est LE concept-clé de la conjugaison russe : (presque) chaque verbe existe sous deux formes, appelées aspects.

— Imperfectif : action en cours, répétée, habituelle, ou son déroulement (читать = lire / être en train de lire)
— Perfectif : action ponctuelle, achevée, avec un résultat (прочитать = lire jusqu'au bout)

On forme souvent le perfectif en ajoutant un préfixe à l'imperfectif (читать → прочитать, делать → сделать, писать → написать), mais parfois les deux verbes sont complètement différents (говорить → сказать).

Piège important : le perfectif n'a pas de présent ! Sa forme conjuguée exprime en réalité un futur (я прочитаю = je vais lire / j'aurai fini de lire).

⚠ Point de vigilance : à la forme négative, l'imperfectif est souvent préféré même pour une action ponctuelle, car le perfectif négatif insiste sur un empêchement précis : Я не читал письмо (neutre) vs Я не прочитал письмо (je n'ai pas réussi à le lire).`,
   examples:[['Я читал книгу вчера.','J\'étais en train de lire un livre hier (pas sûr d\'avoir fini).'],['Я прочитал книгу вчера.','J\'ai fini de lire le livre hier.'],['говорить → сказать','parler → dire (couple imperfectif/perfectif)'],["Я делаю домашнее задание.","Je fais mes devoirs (en cours, imperfectif)."],["Я сделал домашнее задание.","J'ai fini mes devoirs (perfectif, résultat)."]],
   quiz:[
     {q:'Quel aspect utilise-t-on pour une action habituelle ou en cours ?', o:['Imperfectif','Perfectif','Les deux, sans différence'], a:0},
     {q:'"Прочитать" est la forme…', o:['imperfective de lire','perfective de lire','réfléchie de lire'], a:1},
     {q:'Un verbe perfectif conjugué au "présent" exprime en réalité…', o:['le passé','le futur','le conditionnel'], a:1},
     {q:"\"Я делаю\" (делать, imperfectif) insiste sur…", o:["le résultat final","l'action en cours","le passé"], a:1},
     {q:"Le perfectif à la forme négative insiste souvent sur…", o:["une habitude","un empêchement précis ou un échec","une action future"], a:1}
   ]},
  {id:'futur', cefr:'A2', title:'Le futur (imperfectif et perfectif)', level:'Verbes', cases:[],
   content:`Il existe deux façons de former le futur, selon l'aspect du verbe.

Futur imperfectif = буду/будешь/будет/будем/будете/будут + infinitif imperfectif : Я буду читать. (Je vais lire / je lirai — action qui dure, sans précision de fin.)

Futur perfectif = on conjugue directement le verbe perfectif, qui prend alors un sens futur : Я прочитаю книгу. (Je lirai le livre en entier / j'aurai fini de le lire.)

Le choix dépend du sens : action longue/répétée/en cours → futur imperfectif ; action ponctuelle avec résultat → futur perfectif.

⚠ Point de vigilance : ne confonds pas буду + infinitif IMPERFECTIF avec la conjugaison directe du verbe PERFECTIF — буду suivi d'un verbe perfectif est une erreur fréquente et incorrecte.`,
   examples:[['Я буду работать завтра.','Je travaillerai demain (toute la journée).'],['Я сделаю это завтра.','Je le ferai demain (et ce sera fini).'],['Мы будем жить в Москве.','Nous vivrons à Moscou.'],["Завтра я буду учить русский язык.","Demain j'étudierai le russe (action qui dure)."],["Я закончу работу к пяти часам.","J'aurai fini le travail avant cinq heures (perfectif)."]],
   quiz:[
     {q:'Comment forme-t-on le futur imperfectif ?', o:['буду + infinitif imperfectif','je conjugue directement le verbe imperfectif','avec бы + passé'], a:0},
     {q:'"Я прочитаю книгу" exprime…', o:['une action en cours','une action ponctuelle et achevée','le passé'], a:1},
     {q:'"Я буду работать" signifie…', o:['J\'ai travaillé','Je vais travailler (durée non précisée)','J\'aurais travaillé'], a:1},
     {q:"\"Буду\" doit être suivi d'un infinitif…", o:["perfectif","imperfectif","au choix, cela n'a pas d'importance"], a:1},
     {q:"\"Я закончу работу\" (закончить, perfectif) exprime…", o:["une action longue et répétée","une action ponctuelle avec un résultat atteint","le passé"], a:1}
   ]},
  {id:'imperatif', cefr:'A2', title:'L\'impératif', level:'Verbes', cases:[],
   content:`L'impératif sert à donner un ordre, un conseil ou une invitation. On part du radical du présent (ты) et on ajoute -й (après voyelle), -и (après consonne accentuée) ou -ь (après consonne non accentuée).

читать → читай! (lis !) / говорить → говори! (parle !) / писать → пиши! (écris !)

Au pluriel ou à la forme polie (вы), on ajoute -те : читайте! говорите! пишите!

Pour une suggestion incluant soi-même ("allons-y"), on utilise давай(те) + infinitif : Давай пойдём! (Allons-y !)

⚠ Point de vigilance : certains impératifs courants sont irréguliers et à mémoriser directement : есть → ешь! (mange !), пить → пей! (bois !), ехать → поезжай! (va, en véhicule !).`,
   examples:[['Читай!','Lis !'],['Говорите медленнее, пожалуйста.','Parlez plus lentement, s\'il vous plaît.'],['Давай пойдём в кино!','Allons au cinéma !'],["Не бойся!","N'aie pas peur !"],["Помогите мне, пожалуйста!","Aidez-moi, s'il vous plaît !"]],
   quiz:[
     {q:'Comment dit-on "Parle !" (à une personne, familier) ?', o:['говори!','говорить!','говорите!'], a:0},
     {q:'Comment dit-on "Écrivez !" (pluriel/poli) ?', o:['пиши!','пишите!','писать!'], a:1},
     {q:'"Давай пойдём!" signifie…', o:['Ne pars pas !','Allons-y !','Il est parti'], a:1},
     {q:"L'impératif de \"пить\" (boire) est…", o:["пей!","пий!","пьй!"], a:0},
     {q:"\"Помогите мне!\" signifie…", o:["Aide-moi !","Aidez-moi ! (pluriel/poli)","Il m'a aidé"], a:1}
   ]},
  {id:'verbes-reflexifs', cefr:'A2', title:'Les verbes réfléchis (-ся)', level:'Verbes', cases:[],
   content:`Certains verbes portent le suffixe -ся (après consonne) ou -сь (après voyelle), collé à la fin du verbe conjugué. Il indique une action réfléchie, réciproque ou parfois passive.

умывать (laver qqn) → умываться (se laver) : я умываюсь, ты умываешься...
учить (apprendre qqch) vs учиться (étudier, faire ses études) : я учусь в университете.
начинать (commencer qqch) vs начинаться (débuter tout seul) : урок начинается в 9 часов.

⚠ Point de vigilance : certains verbes en -ся n'ont pas de sens réfléchi du tout, c'est juste leur forme normale : нравиться (plaire), бояться (avoir peur), смеяться (rire) — ils n'existent pas sans -ся.`,
   examples:[['Я одеваюсь.','Je m\'habille.'],['Мы встречаемся в парке.','Nous nous rencontrons dans le parc.'],['Магазин закрывается в 8.','Le magasin ferme à 8h.'],["Я боюсь пауков.","J'ai peur des araignées."],["Дети смеются в парке.","Les enfants rient dans le parc."]],
   quiz:[
     {q:'Le suffixe -ся indique généralement…', o:['le passé','une action réfléchie ou réciproque','le pluriel'], a:1},
     {q:'"Я учусь в университете" signifie…', o:['J\'enseigne à l\'université','J\'étudie à l\'université','Je travaille à l\'université'], a:1},
     {q:'Après une voyelle, -ся devient…', o:['-сь','-ти','-ло'], a:0},
     {q:"\"Бояться\" (avoir peur) existe-t-il sans -ся, avec le même sens ?", o:["Oui","Non, cette forme n'existe pas sans -ся","Seulement au passé"], a:1},
     {q:"\"Дети смеются\" signifie…", o:["Les enfants pleurent","Les enfants rient","Les enfants dorment"], a:1}
   ]},
  {id:'nombres-declinaison', cefr:'A2', title:'L\'accord des noms après les nombres', level:'Cas', cases:[],
   content:`Règle typiquement russe, très fréquente à l'oral :

— Après 1 (один/одна/одно) : le nom reste au nominatif singulier normal (один стол, одна книга).
— Après 2, 3, 4 (et les nombres composés terminant par 2, 3, 4 comme 22, 33) : le nom se met au GÉNITIF SINGULIER (два стола, три книги, четыре окна).
— Après 5 et plus (5 à 20, et les nombres finissant par 5-9 ou 0) : le nom se met au GÉNITIF PLURIEL (пять столов, десять книг).

À automatiser en priorité : cette règle revient sans cesse dès qu'on parle de quantités.

⚠ Point de vigilance : après полтора (un et demi) et оба/обе (les deux), on utilise aussi le génitif singulier, comme après 2/3/4 — un cas particulier à retenir à part.`,
   examples:[['два стола','deux tables'],['пять столов','cinq tables'],['двадцать одна книга','vingt-et-un livres (revient au singulier !)'],["двадцать два стола","vingt-deux tables (finit par 2 → génitif singulier)"],["сто книг","cent livres (génitif pluriel)"]],
   quiz:[
     {q:'Après "два" (deux), le nom se met au…', o:['nominatif pluriel','génitif singulier','génitif pluriel'], a:1},
     {q:'"Пять книг" (cinq livres) — "книг" est au…', o:['génitif singulier','génitif pluriel','nominatif pluriel'], a:1},
     {q:'Comment dit-on "trois tables" ?', o:['три стола','три столы','три столов'], a:0},
     {q:"\"Двадцать два стола\" (22 tables) utilise quel cas pour \"стола\" ?", o:["Génitif singulier","Génitif pluriel","Nominatif pluriel"], a:0},
     {q:"Après \"сто\" (cent), le nom se met au…", o:["nominatif singulier","génitif singulier","génitif pluriel"], a:2}
   ]},
  {id:'heure-temps', cefr:'A2', title:'L\'heure et les expressions de temps', level:'Structure', cases:[],
   content:`Pour demander l'heure : Который час? ou Сколько времени? On répond avec les nombres : Сейчас три часа. (Il est trois heures.)

Expressions temporelles utiles :
в + accusatif pour un jour précis ou une heure : в понедельник (lundi), в 5 часов (à 5 heures)
через + accusatif pour "dans X temps" : через час (dans une heure)
... назад pour "il y a X temps" : час назад (il y a une heure)
утром/днём/вечером/ночью pour les moments de la journée.

⚠ Point de vigilance : pour les heures pleines, après 1 → час (singulier), après 2-4 → часа (génitif singulier), après 5+ → часов (génitif pluriel) — la même règle d'accord après les nombres s'applique à l'heure.`,
   examples:[['Сейчас девять часов утра.','Il est neuf heures du matin.'],['Через неделю','Dans une semaine'],['Два дня назад','Il y a deux jours'],["Встреча в два часа.","Le rendez-vous est à deux heures."],["Он придёт через пять минут.","Il arrivera dans cinq minutes."]],
   quiz:[
     {q:'Comment demande-t-on l\'heure ?', o:['Сколько лет?','Который час?','Где время?'], a:1},
     {q:'"Через час" signifie…', o:['il y a une heure','dans une heure','à une heure précise'], a:1},
     {q:'"Час назад" signifie…', o:['dans une heure','il y a une heure','vers une heure'], a:1},
     {q:"\"В два часа\" (à deux heures) — pourquoi \"часа\" et pas \"час\" ?", o:["Erreur, on doit dire час","Accord après 2/3/4 : génitif singulier","Toujours au génitif pluriel"], a:1},
     {q:"\"Через пять минут\" signifie…", o:["il y a cinq minutes","dans cinq minutes","depuis cinq minutes"], a:1}
   ]},
  {id:'comparatifs', cefr:'A2', title:'Les comparatifs et superlatifs', level:'Structure', cases:[],
   content:`Comparatif simple : on ajoute souvent -ее à l'adjectif (красивый → красивее = plus beau). Certains sont irréguliers : хороший → лучше (meilleur), плохой → хуже (pire), большой → больше (plus grand), маленький → меньше (plus petit).

Pour comparer deux éléments : чем (que) — Москва больше, чем Париж. (Moscou est plus grande que Paris.)

Superlatif : самый + adjectif accordé normalement — самый красивый (le plus beau).

⚠ Point de vigilance : ce comparatif court en -ее/-е est invariable, il ne s'accorde jamais — ne cherche pas à l'accorder comme un adjectif normal, contrairement à самый qui, lui, s'accorde bien.`,
   examples:[['Этот фильм интереснее.','Ce film est plus intéressant.'],['Он лучше меня говорит по-русски.','Il parle mieux que moi en russe.'],['самая большая страна','le plus grand pays'],["Сегодня теплее, чем вчера.","Il fait plus chaud aujourd'hui qu'hier."],["Это самый интересный урок.","C'est la leçon la plus intéressante."]],
   quiz:[
     {q:'Le comparatif de "хороший" (bon) est…', o:['хорошее','лучше','самый хороший'], a:1},
     {q:'"Чем" sert à…', o:['introduire une comparaison ("que")','poser une question','nier'], a:0},
     {q:'Le superlatif se forme avec…', o:['очень + adjectif','самый + adjectif','чем + adjectif'], a:1},
     {q:"Le comparatif court (интереснее, теплее...) s'accorde-t-il en genre/nombre ?", o:["Oui, comme un adjectif normal","Non, il est invariable","Seulement au pluriel"], a:1},
     {q:"\"Le pire\" se dit (superlatif de плохой)…", o:["самый хуже","самый плохой","хуже всех"], a:1}
   ]},

  {id:'conditionnel', cefr:'B1', title:'Le conditionnel : la particule бы', level:'Lecture avancée', cases:[],
   content:`Le conditionnel/subjonctif russe se forme avec бы + le verbe au passé — quelle que soit la personne, car c'est le passé qui s'accorde en genre/nombre, jamais en personne.

Я хотел бы поехать в Россию. (Je voudrais aller en Russie.)
Если бы у меня было время, я бы путешествовал. (Si j'avais le temps, je voyagerais.)

La position de бы est assez souple, mais elle suit presque toujours le premier mot important de la proposition (souvent juste après если ou le verbe).

⚠ Point de vigilance : contrairement au français, il n'y a pas de distinction formelle entre l'imparfait du subjonctif et le conditionnel présent — бы + passé couvre toutes ces nuances, c'est le contexte qui précise le sens exact.`,
   examples:[['Я хотела бы чай, пожалуйста.','Je voudrais du thé, s\'il vous plaît (locutrice).'],['Что бы ты сделал?','Qu\'aurais-tu fait ?'],['Если бы я знал...','Si j\'avais su...'],["Я бы хотел задать вопрос.","Je voudrais poser une question."],["Если бы не дождь, мы бы пошли гулять.","S'il n'y avait pas eu la pluie, nous serions allés nous promener."]],
   quiz:[
     {q:'Le conditionnel se forme avec…', o:['бы + infinitif','бы + verbe au passé','бы + présent'], a:1},
     {q:'"Я хотел бы..." signifie…', o:['Je veux...','Je voudrais...','J\'ai voulu...'], a:1},
     {q:'La particule бы s\'accorde-t-elle selon la personne ?', o:['Oui','Non, c\'est le verbe au passé qui s\'accorde en genre/nombre','Seulement au pluriel'], a:1},
     {q:"\"Если бы не дождь...\" signifie…", o:["S'il pleut","S'il n'y avait pas eu la pluie","Parce qu'il pleut"], a:1},
     {q:"Le russe distingue-t-il formellement l'imparfait du subjonctif et le conditionnel présent ?", o:["Oui, avec des formes différentes","Non, бы + passé couvre les deux","Seulement à l'écrit"], a:1}
   ]},
  {id:'discours-indirect', cefr:'B1', title:'Le discours indirect', level:'Lecture avancée', cases:[],
   content:`Pour rapporter les paroles de quelqu'un :
— Affirmation : что (que) — Он сказал, что он устал. (Il a dit qu'il était fatigué.)
— Question fermée oui/non : ли — Она спросила, придёт ли он. (Elle a demandé s'il viendrait.)
— Ordre/souhait : чтобы + passé — Я хочу, чтобы ты пришёл. (Je veux que tu viennes.)
— Question ouverte : on garde le mot interrogatif — Он спросил, где я живу. (Il a demandé où j'habitais.)

Différence clé avec le français : le russe n'applique pas de concordance des temps, les temps ne changent pas dans le discours rapporté.

⚠ Point de vigilance : après чтобы (ordre/souhait rapporté), le verbe est toujours au passé, même si l'action se situe dans le futur du point de vue du locuteur — c'est une règle fixe.`,
   examples:[['Он сказал, что он придёт завтра.','Il a dit qu\'il viendrait demain (le futur reste au futur).'],['Я не знаю, где она живёт.','Je ne sais pas où elle habite.'],['Скажи, читал ли ты эту книгу.','Dis-moi si tu as lu ce livre.'],["Она сказала, что не придёт.","Elle a dit qu'elle ne viendrait pas."],["Я попросил, чтобы он подождал.","J'ai demandé qu'il attende."]],
   quiz:[
     {q:'"Что" introduit…', o:['une question fermée','une affirmation rapportée','un ordre'], a:1},
     {q:'Pour rapporter une question oui/non, on utilise…', o:['что','чтобы','ли'], a:2},
     {q:'Le russe applique-t-il une concordance des temps comme en français ?', o:['Oui, systématiquement','Non, les temps ne changent pas','Seulement au passé'], a:1},
     {q:"Après \"чтобы\" (souhait/ordre rapporté), le verbe se met…", o:["au présent","toujours au passé","au futur"], a:1},
     {q:"\"Она сказала, что не придёт\" — le futur reste-t-il au futur en russe ?", o:["Non, il devient passé","Oui, contrairement au français","Il devient conditionnel"], a:1}
   ]},
  {id:'subordonnees', cefr:'B1', title:'Les propositions subordonnées', level:'Lecture avancée', cases:[],
   content:`Connecteurs essentiels pour construire des phrases complexes :

который (qui/que — se décline selon son rôle et s'accorde en genre/nombre avec son antécédent) : Человек, который живёт рядом... (L'homme qui habite à côté...)
потому что (parce que, répond à "pourquoi") / поэтому (c'est pourquoi, introduit la conséquence)
если (si, condition) / хотя (bien que, même si)
чтобы (pour que, afin de) : Я учу русский, чтобы понимать фильмы.

⚠ Point de vigilance : который se décline selon SA fonction dans SA propre proposition, pas celle de son antécédent — il peut donc être à un cas différent du nom qu'il remplace : Человек, которому я помог... (L'homme que j'ai aidé..., datif car "aider" gouverne le datif).`,
   examples:[['Книга, которую я читаю...','Le livre que je lis...'],['Я устал, потому что много работал.','Je suis fatigué parce que j\'ai beaucoup travaillé.'],['Хотя было холодно, мы гуляли.','Bien qu\'il ait fait froid, nous nous sommes promenés.'],["Дом, в котором я живу...","La maison dans laquelle j'habite..."],["Я не пойду, если будет дождь.","Je n'irai pas s'il pleut."]],
   quiz:[
     {q:'Différence entre "потому что" et "поэтому" ?', o:['Ce sont des synonymes exacts','потому que = cause, поэтому = conséquence','поэтому = cause, потому что = conséquence'], a:1},
     {q:'"Который" s\'accorde avec…', o:['le verbe','son antécédent (genre, nombre), et se décline selon son rôle','il ne s\'accorde jamais'], a:1},
     {q:'"Хотя" signifie…', o:['parce que','bien que','donc'], a:1},
     {q:"\"Дом, в котором я живу\" — quel cas pour \"котором\" et pourquoi ?", o:["Nominatif, car c'est le sujet","Prépositionnel, car après \"в\" (lieu)","Accusatif, car COD"], a:1},
     {q:"\"Чтобы\" introduit généralement…", o:["un but ou un souhait","une cause","une comparaison"], a:0}
   ]},
  {id:'participes', cefr:'B1', title:'Reconnaître les participes en lecture', level:'Lecture avancée', cases:[],
   content:`Les participes sont des formes adjectivales du verbe : fréquents à l'écrit (articles, littérature), rares à l'oral courant. L'objectif ici est de les RECONNAÎTRE en lecture, pas de les produire.

— Participe présent actif (-ущий/-ющий/-ащий/-ящий) : "qui fait" — читающий человек (l'homme qui lit)
— Participe passé actif (-вший/-ший) : "qui a fait" — прочитавший книгу человек (l'homme qui a lu le livre)
— Participe passé passif (-нный/-тый/-енный) : "fait par" — прочитанная книга (le livre lu)

Astuce : un mot long en -щий, -вший, -нный ou -тый au milieu d'une phrase d'article est presque toujours un participe. Remplace-le mentalement par "qui + verbe" pour comprendre la phrase.

⚠ Point de vigilance : ne confonds pas la forme courte du participe passif (прочитана, utilisée comme attribut : Книга прочитана = le livre est lu) avec sa forme longue (прочитанная книга = le livre lu, épithète) — la forme courte ne se place jamais devant le nom.`,
   examples:[['работающий студент','l\'étudiant qui travaille'],['написанное письмо','la lettre écrite'],['уставший от работы','fatigué par le travail'],["Читающая девушка — моя сестра.","La fille qui lit est ma sœur."],["Письмо, написанное вчера, важно.","La lettre écrite hier est importante."]],
   quiz:[
     {q:'"Читающий" (lisant) est un participe…', o:['présent actif','passé actif','passé passif'], a:0},
     {q:'"Прочитанная книга" signifie…', o:['le livre qui lit','le livre lu','le livre en train d\'être lu'], a:1},
     {q:'Un mot en -нный ou -тый est généralement un…', o:['participe passé passif','verbe à l\'impératif','adverbe'], a:0},
     {q:"\"Читающая девушка\" (participe présent actif féminin) signifie…", o:["la fille qui a lu","la fille qui lit","la fille lue"], a:1},
     {q:"La forme courte d'un participe passif (прочитана) peut-elle se placer devant le nom ?", o:["Oui, toujours","Non, elle fonctionne comme attribut, après le sujet","Seulement au pluriel"], a:1}
   ]},
  {id:'gerondifs', cefr:'B1', title:'Reconnaître les gérondifs en lecture', level:'Lecture avancée', cases:[],
   content:`Le gérondif exprime une action liée à l'action principale : "en faisant" (simultanéité) ou "ayant fait" (antériorité).

— Gérondif présent (-я/-а) : action simultanée — Читая книгу, он пил чай. (En lisant un livre, il buvait du thé.)
— Gérondif passé (-в/-вши) : action antérieure — Прочитав книгу, он пошёл спать. (Après avoir lu le livre, il est allé dormir.)

Comme les participes, on les rencontre surtout à l'écrit ; savoir les repérer aide énormément en lecture d'articles et de récits.

⚠ Point de vigilance : le sujet du gérondif doit toujours être le même que celui de la proposition principale — une phrase comme "Читая книгу, зазвонил телефон" (En lisant un livre, le téléphone a sonné) est incorrecte, car ce n'est pas le téléphone qui lit.`,
   examples:[['Улыбаясь, она поздоровалась.','En souriant, elle a salué.'],['Закончив работу, он ушёл.','Ayant fini son travail, il est parti.'],['Не зная ответа, я промолчал.','Ne connaissant pas la réponse, je me suis tu.'],["Слушая музыку, она готовила ужин.","En écoutant de la musique, elle préparait le dîner."],["Открыв дверь, я увидел друга.","Ayant ouvert la porte, j'ai vu mon ami."]],
   quiz:[
     {q:'Le gérondif présent en -я/-а exprime une action…', o:['simultanée à l\'action principale','antérieure','future'], a:0},
     {q:'"Прочитав книгу, он пошёл спать" — que signifie "прочитав" ?', o:['en lisant','ayant lu (avant)','il lira'], a:1},
     {q:'Le gérondif équivaut en français à…', o:['"qui + verbe"','"en faisant / ayant fait"','"sera fait"'], a:1},
     {q:"Le sujet du gérondif doit être…", o:["différent de celui de la proposition principale","le même que celui de la proposition principale","toujours \"я\""], a:1},
     {q:"\"Открыв дверь, я увидел друга\" — \"открыв\" exprime une action…", o:["simultanée","antérieure à \"увидел\"","future"], a:1}
   ]},
  {id:'verbes-mouvement-prefixes', cefr:'B1', title:'Les verbes de mouvement préfixés', level:'Verbes', cases:[],
   content:`En ajoutant un préfixe aux verbes de mouvement, on précise finement le déplacement — très utile pour comprendre des dialogues et des vidéos naturelles.

при- = arriver (приходить/прийти) · у- = partir (уходить/уйти) · вы- = sortir (выходить/выйти)
за- = passer chercher, entrer brièvement (заходить/зайти) · про- = passer devant, dépasser (проходить/пройти)
пере- = traverser (переходить/перейти)

Он пришёл домой поздно. (Il est rentré tard.) / Она вышла из комнаты. (Elle est sortie de la pièce.)

⚠ Point de vigilance : une fois préfixé, le verbe de mouvement se conjugue comme une paire d'aspects classique (imperfectif/perfectif) — приходить (habitude d'arriver) / прийти (arriver une fois) — la distinction uni/multidirectionnel disparaît alors.`,
   examples:[['Заходи в гости!','Passe me voir !'],['Мы перешли улицу.','Nous avons traversé la rue.'],['Автобус только что ушёл.','Le bus vient de partir.'],["Он часто приходит поздно.","Il arrive souvent tard (imperfectif, habitude)."],["Он придёт завтра.","Il arrivera demain (perfectif, ponctuel)."]],
   quiz:[
     {q:'Le préfixe при- indique généralement…', o:['partir','arriver','traverser'], a:1},
     {q:'"Выйти" (préfixe вы-) signifie…', o:['entrer','sortir','rester'], a:1},
     {q:'"Перейти улицу" signifie…', o:['traverser la rue','longer la rue','éviter la rue'], a:0},
     {q:"Une fois préfixé, le couple приходить/прийти fonctionne comme…", o:["deux verbes sans rapport","une paire d'aspects imperfectif/perfectif classique","toujours un seul verbe unique"], a:1},
     {q:"\"Он придёт завтра\" (perfectif) exprime…", o:["une habitude","une arrivée ponctuelle à venir","une arrivée passée"], a:1}
   ]},
  {id:'registre', cefr:'B1', title:'Connecteurs d\'articles et registre soutenu', level:'Lecture avancée', cases:[],
   content:`Pour comprendre des articles de presse ou des vidéos un peu formelles, il faut repérer certains connecteurs logiques du registre soutenu, différents de ceux de l'oral courant :

в связи с (en lien avec / en raison de) · несмотря на (malgré) · таким образом (ainsi, de cette façon) · тем не менее (néanmoins) · в то время как (tandis que) · по данным (selon les données de) · согласно (selon, conformément à)

Ces mots structurent l'argumentation : repère-les pour suivre le fil d'un article même sans connaître tout le vocabulaire autour.

⚠ Point de vigilance : ces connecteurs sont rares à l'oral courant — ne les utilise pas dans une conversation informelle ; réserve-les à la lecture et à l'écrit soigné.`,
   examples:[['Несмотря на дождь, мы вышли.','Malgré la pluie, nous sommes sortis.'],['Согласно опросу...','Selon un sondage...'],['Таким образом, ситуация улучшилась.','Ainsi, la situation s\'est améliorée.'],["В связи с этим было принято решение.","En lien avec cela, une décision a été prise."],["Тем не менее, ситуация остаётся сложной.","Néanmoins, la situation reste compliquée."]],
   quiz:[
     {q:'"Несмотря на" signifie…', o:['grâce à','malgré','à cause de'], a:1},
     {q:'"Согласно" (statistiques, source) signifie…', o:['selon','contre','malgré'], a:0},
     {q:'"Таким образом" introduit…', o:['une opposition','une conséquence','une question'], a:1},
     {q:"\"Тем не менее\" signifie…", o:["par conséquent","néanmoins","depuis lors"], a:1},
     {q:"\"В связи с этим\" signifie…", o:["en lien avec cela","malgré cela","avant cela"], a:0}
   ]},

  {id:"possessifs", cefr:"A1", title:"Les possessifs (мой, твой, наш...)", level:"Structure", cases:[],
   content:`Les possessifs s'accordent en genre et en nombre avec l'objet possédé, pas avec le possesseur — comme les adjectifs.

мой/моя/моё/мои (mon/ma/mes), твой/твоя/твоё/твои (ton/ta/tes), наш/наша/наше/наши (notre/nos), ваш/ваша/ваше/ваши (votre/vos).

Attention : его (son, à lui), её (son, à elle) et их (leur, à eux) ne changent JAMAIS, quel que soit le genre ou le nombre de l'objet possédé — ce sont en réalité des pronoms au génitif, pas de vrais possessifs.

⚠ Point de vigilance : свой (le sien, réfléchi) remplace мой/твой/его... quand le possesseur est le sujet de la phrase : Он любит свою работу (Il aime son travail, à lui) — utiliser его ici serait ambigu.`,
   examples:[["Это мой дом.","C'est ma maison."],["Где твоя книга?","Où est ton livre ?"],["Это её сумка.","C'est son sac (à elle)."],["Наш дом большой.","Notre maison est grande."],["Ваши дети дома?","Vos enfants sont-ils à la maison ?"]],
   quiz:[
     {q:"\"Ma voiture\" (машина, fém.) se dit…", o:["мой машина","моя машина","моё машина"], a:1},
     {q:"Comment dit-on \"son livre\" en parlant d'un homme ?", o:["её книга","его книга","их книга"], a:1},
     {q:"\"его\", \"её\" et \"их\" changent-ils selon l'objet possédé ?", o:["Oui, comme tous les possessifs","Non, ils restent toujours identiques","Seulement au pluriel"], a:1},
     {q:"\"Notre maison est grande\" se dit…", o:["Наш дом большой.","Наша дом большой.","Наше дом большой."], a:0},
     {q:"Quand le possesseur est le sujet de la phrase, on utilise souvent…", o:["его","свой","их"], a:1}
   ]},
  {id:"demonstratifs", cefr:"A1", title:"Les démonstratifs : этот et тот", level:"Structure", cases:[],
   content:`этот (ce/cet), эта (cette), это (ce, neutre), эти (ces) désignent quelque chose de proche ou qu'on montre. Ils s'accordent en genre et en nombre avec le nom, comme les adjectifs.

тот/та/то/те (ce...-là) désigne quelque chose de plus éloigné, ou sert à opposer deux éléments : этот дом... а тот дом... (cette maison-ci... et cette maison-là...)

Attention à ne pas confondre это (ce/cela) avec l'usage de "это" seul pour présenter quelque chose : Это книга. (C'est un livre.)

⚠ Point de vigilance : "это" invariable en tête de phrase (Это моя семья = C'est ma famille) ne doit pas être confondu avec "это" adjectif neutre accordé (это окно = cette fenêtre) — le premier reste toujours "это" quel que soit le genre de ce qui suit.`,
   examples:[["этот стол","cette table-ci"],["та девушка","cette fille-là"],["Это мой друг.","C'est mon ami."],["Кто эта девушка?","Qui est cette fille ?"],["Те дни были хорошими.","Ces jours-là étaient bons."]],
   quiz:[
     {q:"\"Cette maison\" (дом, masc.) se dit…", o:["эта дом","этот дом","это дом"], a:1},
     {q:"\"Ces livres\" (книги, pluriel) se dit…", o:["эти книги","этот книги","это книги"], a:0},
     {q:"Que désigne \"тот/та/то/те\" par rapport à \"этот\" ?", o:["la même chose, ce sont des synonymes","quelque chose de plus éloigné","uniquement le pluriel"], a:1},
     {q:"\"Qui est cette fille ?\" se dit…", o:["Кто эта девушка?","Кто этот девушка?","Кто это девушка?"], a:0},
     {q:"\"Ces jours-là étaient bons\" utilise…", o:["этот","тот / те","это"], a:1}
   ]},
  {id:"avoir", cefr:"A1", title:"Exprimer la possession : у меня есть", level:"Structure", cases:[],
   content:`Le russe n'a pas de verbe "avoir" direct. Pour exprimer la possession, on utilise у + génitif (du possesseur) + есть + nominatif (de l'objet possédé) — littéralement "chez moi il y a...".

У меня есть машина. (J'ai une voiture.) У тебя есть время? (As-tu du temps ?)

À la forme négative, есть disparaît et l'objet passe au génitif : У меня нет машины. (Je n'ai pas de voiture.)

Pronoms au génitif à connaître : у меня (moi), у тебя (toi), у него (lui), у неё (elle), у нас (nous), у вас (vous), у них (eux).

⚠ Point de vigilance : quand on ne s'intéresse pas à l'existence de l'objet mais à sa qualité, on peut omettre есть : У меня новая машина. (J'ai une nouvelle voiture — l'accent est mis sur "nouvelle", pas sur le fait d'en avoir une).`,
   examples:[["У меня есть собака.","J'ai un chien."],["У них нет детей.","Ils n'ont pas d'enfants."],["У вас есть время?","Avez-vous du temps ?"],["У меня есть брат и сестра.","J'ai un frère et une sœur."],["У нас нет времени.","Nous n'avons pas de temps."]],
   quiz:[
     {q:"\"J'ai un livre\" se dit…", o:["Я есть книга","У меня есть книга","Я имею книга"], a:1},
     {q:"À la forme négative, \"У меня нет машины\" — \"машины\" est au…", o:["nominatif","génitif","datif"], a:1},
     {q:"\"У него есть...\" signifie…", o:["Il a...","Elle a...","J'ai..."], a:0},
     {q:"\"J'ai un frère et une sœur\" se dit…", o:["У меня есть брат и сестра.","Я имею брат и сестра.","Мой брат и сестра."], a:0},
     {q:"Peut-on omettre \"есть\" quand on insiste sur la qualité de l'objet possédé ?", o:["Non, jamais","Oui, par exemple : У меня новая машина.","Seulement au pluriel"], a:1}
   ]},
  {id:"verbes-irreguliers", cefr:"A1", title:"Verbes irréguliers courants : хотеть et есть", level:"Verbes", cases:[],
   content:`Certains verbes très fréquents ne suivent ni le 1er ni le 2e groupe.

хотеть (vouloir) est hybride : au singulier il suit le 1er groupe, au pluriel le 2e groupe : я хочу, ты хочешь, он хочет, мы хотим, вы хотите, они хотят.

есть (manger) est irrégulier : я ем, ты ешь, он ест, мы едим, вы едите, они едят. (Ne pas confondre avec есть = "il y a", vu dans la leçon précédente — même mot, deux sens différents selon le contexte.)

⚠ Point de vigilance : à l'infinitif, "хотеть" et "есть" ressemblent à des verbes réguliers, mais leur conjugaison réelle doit être mémorisée par cœur — impossible de la déduire de la terminaison de l'infinitif.`,
   examples:[["Я хочу пить.","J'ai envie de boire (je veux boire)."],["Мы едим суп.","Nous mangeons de la soupe."],["Они хотят поехать в Россию.","Ils veulent aller en Russie."],["Ты хочешь есть?","Tu as faim ? (littéralement : veux-tu manger ?)"],["Что вы едите?","Que mangez-vous ?"]],
   quiz:[
     {q:"\"Je veux\" (хотеть) se dit…", o:["я хотю","я хочу","я хочешь"], a:1},
     {q:"\"Ils mangent\" (есть) se dit…", o:["они едят","они едет","они ешьте"], a:0},
     {q:"хотеть suit quel modèle de conjugaison ?", o:["Toujours le 1er groupe","Toujours le 2e groupe","Un mélange : 1er groupe au singulier, 2e au pluriel"], a:2},
     {q:"\"Tu as faim ?\" (littéralement veux-tu manger) se dit…", o:["Ты хочешь есть?","Ты хочет есть?","Ты хотишь есть?"], a:0},
     {q:"\"Que mangez-vous ?\" se dit…", o:["Что вы едите?","Что вы едят?","Что вы ешьте?"], a:0}
   ]},
  {id:"pronoms-declinaison", cefr:"A2", title:"Les pronoms personnels dans les 6 cas", level:"Cas", cases:[], declTable:4,
   content:`Les pronoms personnels se déclinent, comme les noms, et sont utilisés très souvent en position de complément. Certaines formes changent beaucoup par rapport au nominatif — il faut les mémoriser directement, elles ne suivent pas de règle simple.

Point important : après une préposition, он/она/оно/они prennent un н- au début (у него, к ней, с ними) — mais pas après у seul dans un autre sens ! Compare : его дом (sa maison, pas de н-) et у него (chez lui, avec н- car après préposition).

⚠ Point de vigilance : à l'accusatif, он/оно utilisent la même forme que le génitif (его) — seul le contexte (verbe transitif ou possession) permet de trancher entre les deux sens.`,
   examples:[["Я вижу тебя.","Je te vois."],["Он дал мне книгу.","Il m'a donné un livre."],["Мы говорим о них.","Nous parlons d'eux."],["Она любит его.","Elle l'aime (lui)."],["Спасибо вам за помощь.","Merci à vous pour l'aide."]],
   quiz:[
     {q:"\"Je te vois\" se dit…", o:["Я вижу ты","Я вижу тебя","Я вижу твой"], a:1},
     {q:"Après une préposition, \"она\" devient souvent…", o:["неё","она","ей"], a:0},
     {q:"\"Il m'a donné\" — \"мне\" est à quel cas ?", o:["Génitif","Datif","Instrumental"], a:1},
     {q:"\"Elle l'aime\" (lui, accusatif) se dit…", o:["Она любит его.","Она любит он.","Она любит ему."], a:0},
     {q:"\"Merci à vous\" utilise quel cas pour \"вам\" ?", o:["Génitif","Datif","Accusatif"], a:1}
   ]},
  {id:"possessifs-demonstratifs-decl", cefr:"A2", title:"Décliner мой et этот dans les 6 cas", level:"Cas", cases:[],
   content:`мой, твой, наш, ваш ainsi que этот se déclinent sur les 6 cas, en s'accordant avec le nom qu'ils accompagnent — comme les adjectifs. его/её/их, eux, ne se déclinent JAMAIS (rappel de la leçon précédente).

Modèle pour мой (masculin) : мой → моего (gén.) → моему (dat.) → моего/мой (acc.) → моим (instr.) → моём (prép.)
Modèle pour этот (masculin) : этот → этого → этому → этого/этот → этим → этом

⚠ Point de vigilance : наш/ваш suivent le même schéma que мой/твой mais avec leur propre radical (нашего, нашему...) — ne les confonds pas avec les formes de мой lors de la déclinaison.`,
   examples:[["У моего брата есть машина.","Mon frère a une voiture (gén.)."],["Я живу в этом доме.","J'habite dans cette maison (prép.)."],["Я говорю с моей сестрой.","Je parle avec ma sœur (instr.)."],["Я думаю о нашем доме.","Je pense à notre maison (prép.)."],["Дай мне эту книгу.","Donne-moi ce livre (acc. fém.)."]],
   quiz:[
     {q:"Au génitif masculin, \"мой\" devient…", o:["моего","моему","моим"], a:0},
     {q:"\"Dans cette maison\" (prépositionnel) se dit…", o:["в этом доме","в этот дом","в этого дома"], a:0},
     {q:"\"его\", \"её\", \"их\" se déclinent-ils comme \"мой\" ?", o:["Oui, exactement pareil","Non, ils ne changent jamais","Seulement au pluriel"], a:1},
     {q:"\"À notre maison\" (prépositionnel) se dit…", o:["о нашем доме","о наш дом","о нашего дома"], a:0},
     {q:"\"Ce livre\" à l'accusatif féminin (эта книга) devient…", o:["эту книгу","этот книгу","это книгу"], a:0}
   ]},
  {id:"quantificateurs", cefr:"A2", title:"Много, мало, несколько + génitif", level:"Structure", cases:[],
   content:`Pour exprimer une quantité indéterminée, on utilise un quantificateur suivi du génitif :

много (beaucoup de) + génitif pluriel (ou singulier pour l'indénombrable) : много книг (beaucoup de livres), много времени (beaucoup de temps).
мало (peu de), несколько (quelques), сколько (combien de) fonctionnent de la même façon : несколько друзей (quelques amis).

Comme après les nombres 5+, c'est presque toujours le génitif pluriel qui apparaît après ces mots avec des noms comptables.

⚠ Point de vigilance : мало peut aussi signifier "pas assez" (nuance négative), alors que немного (un peu) reste neutre voire positif — un piège fréquent de traduction.`,
   examples:[["У меня много друзей.","J'ai beaucoup d'amis."],["Сколько у тебя денег?","Combien d'argent as-tu ?"],["Здесь мало людей.","Il y a peu de gens ici."],["У меня немного времени.","J'ai un peu de temps (neutre)."],["Слишком много шума!","Trop de bruit !"]],
   quiz:[
     {q:"\"Beaucoup de livres\" se dit…", o:["много книга","много книг","много книгу"], a:1},
     {q:"Après много/мало/несколько/сколько, le nom se met généralement au…", o:["nominatif","génitif","datif"], a:1},
     {q:"\"Несколько друзей\" signifie…", o:["aucun ami","quelques amis","tous les amis"], a:1},
     {q:"\"Немного\" (un peu) a-t-il la même nuance que \"мало\" (insuffisant) ?", o:["Oui, ce sont des synonymes exacts","Non, немного est plus neutre, мало insiste sur l'insuffisance","Oui, mais seulement au pluriel"], a:1},
     {q:"\"Trop de bruit\" se dit…", o:["Слишком много шума","Много шума слишком","Шума слишком много"], a:0}
   ]},
  {id:"dates-ordinaux", cefr:"A2", title:"Les nombres ordinaux et les dates", level:"Structure", cases:[],
   content:`Les nombres ordinaux (premier, deuxième...) s'accordent comme des adjectifs : первый/первая/первое, второй, третий, четвёртый, пятый...

Pour donner une date, on utilise l'ordinal au neutre + le mois au génitif : Сегодня первое января. (Aujourd'hui c'est le premier janvier.) — "число" (le chiffre du jour) est sous-entendu, d'où le neutre.

Pour dire "en" un mois : в + prépositionnel (в январе = en janvier). Pour une année complète, une construction plus longue est utilisée : в две тысячи двадцать пятом году (en 2025).

⚠ Point de vigilance : contrairement au français, l'ordinal russe pour une date ne prend jamais de préposition devant lui : "le 3 mars" = третье марта, jamais "в третье марта".`,
   examples:[["Сегодня третье марта.","Aujourd'hui, c'est le trois mars."],["Я родился в мае.","Je suis né en mai."],["Какое сегодня число?","Quelle est la date aujourd'hui ?"],["Восьмое марта — праздник.","Le 8 mars est une fête."],["Он приехал двадцатого июня.","Il est arrivé le 20 juin (génitif, temps précis)."]],
   quiz:[
     {q:"\"Le premier janvier\" se dit…", o:["один январь","первое января","первый январь"], a:1},
     {q:"\"En janvier\" se dit…", o:["в январе","в январь","январём"], a:0},
     {q:"\"Какое сегодня число?\" demande…", o:["l'heure","la date","l'âge"], a:1},
     {q:"\"Le 8 mars\" se dit…", o:["Восьмое марта","В восьмое марта","На восьмое марта"], a:0},
     {q:"Pour dire \"le 20 juin\" comme complément de temps (quand ?), on utilise…", o:["le nominatif","le génitif, sans préposition","l'accusatif avec в"], a:1}
   ]},
  {id:"adverbes", cefr:"A2", title:"Former des adverbes", level:"Structure", cases:[],
   content:`On forme un adverbe de manière à partir d'un adjectif en remplaçant la terminaison par -о (le plus courant) ou -е : быстрый (rapide) → быстро (rapidement), хороший (bon) → хорошо (bien).

Pour dire "en russe / en français" (parler une langue), on utilise по- + adjectif en -ски : по-русски (en russe) — Я говорю по-русски. (Je parle russe.)

Ces adverbes sont invariables : contrairement aux adjectifs, ils ne s'accordent jamais.

⚠ Point de vigilance : хорошо (bien) et плохо (mal) s'utilisent aussi seuls comme mots d'appréciation impersonnelle : Хорошо! (Bien !/D'accord !), Мне плохо. (Je me sens mal) — pas seulement comme adverbes classiques.`,
   examples:[["Он говорит медленно.","Il parle lentement."],["Я хорошо понимаю.","Je comprends bien."],["Ты говоришь по-английски?","Tu parles anglais ?"],["Она поёт красиво.","Elle chante joliment."],["Всё будет хорошо.","Tout ira bien."]],
   quiz:[
     {q:"L'adverbe de \"быстрый\" (rapide) est…", o:["быстрая","быстро","быстрее"], a:1},
     {q:"\"Je parle russe\" se dit…", o:["Я говорю русский","Я говорю по-русски","Я говорю русское"], a:1},
     {q:"Les adverbes s'accordent-ils en genre/nombre ?", o:["Oui, comme les adjectifs","Non, ils sont invariables","Seulement au pluriel"], a:1},
     {q:"\"Всё будет хорошо\" signifie…", o:["Tout était bien","Tout ira bien","Tout va mal"], a:1},
     {q:"\"Мне плохо\" (construction impersonnelle) signifie…", o:["Je suis mauvais","Je me sens mal","Il fait mauvais temps"], a:1}
   ]},
  {id:"prepositions-recap", cefr:"A2", title:"Tableau récapitulatif des prépositions", level:"Cas", cases:[], declTable:5,
   content:`Chaque préposition russe impose un cas précis (parfois plusieurs selon le sens). Le tableau ci-dessous récapitule les prépositions les plus utiles — l'un des meilleurs raccourcis pour deviner rapidement quel cas utiliser.

Astuce : в et на changent de cas selon qu'ils expriment un lieu fixe (+ prépositionnel : в школе) ou une direction (+ accusatif : в школу).

⚠ Point de vigilance : не confonds pas с + instrumental (avec, accompagnement) et из + génitif (depuis, origine) — deux prépositions qui se traduisent parfois toutes deux par "de" en français mais gouvernent des cas différents.`,
   examples:[["Я иду в школу.","Je vais à l'école (direction, accusatif)."],["Я в школе.","Je suis à l'école (lieu, prépositionnel)."],["Подарок для тебя.","Un cadeau pour toi (génitif)."],["Я приехал из Франции.","Je viens de France (origine, génitif)."],["Встретимся через час.","On se retrouve dans une heure (accusatif, délai)."]],
   quiz:[
     {q:"\"в школу\" (direction) est à quel cas ?", o:["Accusatif","Prépositionnel","Génitif"], a:0},
     {q:"\"в школе\" (lieu fixe) est à quel cas ?", o:["Accusatif","Prépositionnel","Datif"], a:1},
     {q:"\"для\" (pour) impose quel cas ?", o:["Génitif","Datif","Instrumental"], a:0},
     {q:"\"из\" (depuis, origine) impose quel cas ?", o:["Génitif","Instrumental","Accusatif"], a:0},
     {q:"\"через\" pour un délai (\"dans X temps\") impose quel cas ?", o:["Génitif","Accusatif","Datif"], a:1}
   ]},
  {id:"modaux", cefr:"A2", title:"Les verbes modaux : можно, нужно, нельзя, должен", level:"Verbes", cases:[],
   content:`Les constructions modales sont impersonnelles : le sujet logique se met au datif, suivi du mot modal, puis de l'infinitif.

можно (on peut, c'est permis) / нельзя (on ne peut pas, interdit) : Здесь можно курить? (Peut-on fumer ici ?)
нужно / надо (il faut, on a besoin de) : Мне нужно идти. (Je dois y aller.)
должен/должна/должны (devoir, obligation personnelle, s'accorde avec le sujet) : Я должен работать. (Je dois travailler.)

⚠ Point de vigilance : можно a deux sens selon le contexte — la permission ("c'est permis") et la possibilité pratique ("c'est faisable") ; нельзя peut de même signifier "interdit" ou "impossible", à distinguer par le contexte.`,
   examples:[["Тебе нужно отдохнуть.","Tu as besoin de te reposer."],["Здесь нельзя парковаться.","Il est interdit de se garer ici."],["Она должна позвонить.","Elle doit appeler."],["Можно войти?","Puis-je entrer ?"],["Нам нужно поговорить.","Nous devons parler."]],
   quiz:[
     {q:"\"Il est interdit de fumer ici\" se dit…", o:["Здесь можно курить","Здесь нельзя курить","Здесь нужно курить"], a:1},
     {q:"Avec можно/нужно/нельзя, le sujet logique se met au…", o:["nominatif","datif","accusatif"], a:1},
     {q:"\"должен\" s'accorde-t-il avec le sujet ?", o:["Oui, en genre et en nombre","Non, il est toujours invariable","Seulement au passé"], a:0},
     {q:"\"Можно войти?\" signifie…", o:["Dois-je entrer ?","Puis-je entrer ?","Il faut entrer"], a:1},
     {q:"\"Нам нужно поговорить\" — \"нам\" est à quel cas ?", o:["Nominatif","Datif","Accusatif"], a:1}
   ]},
  {id:"passif", cefr:"B1", title:"La voix passive", level:"Lecture avancée", cases:[],
   content:`Le russe exprime le passif de deux façons principales, très fréquentes dans les articles de presse :

1. Verbe réfléchi en -ся à sens passif : Дом строится рабочими. (La maison est construite par des ouvriers.)
2. Participe passé passif court (-н/-т) + être sous-entendu ou explicite : Решение было принято. (La décision a été prise.) — le participe court s'accorde en genre/nombre avec le sujet, comme un adjectif court.

Pour repérer un passif en lecture : cherche un participe court en fin de mot (-н, -на, -но, -ны ou -т, -та, -то, -ты) après был/была/было/были, ou un verbe en -ся dont le sujet subit l'action plutôt qu'il ne la fait.

⚠ Point de vigilance : l'agent (celui qui fait l'action) se met à l'instrumental, sans préposition : Статья написана журналистом (l'article a été écrit PAR le journaliste) — "journaliste" est à l'instrumental, pas après une préposition comme en français.`,
   examples:[["Статья была написана журналистом.","L'article a été écrit par le journaliste."],["Магазин открывается в 9.","Le magasin ouvre à 9h (sens passif/réfléchi)."],["Проблема уже решена.","Le problème est déjà résolu."],["Дом построен в 1990 году.","La maison a été construite en 1990."],["Эта книга читается легко.","Ce livre se lit facilement (sens passif/moyen)."]],
   quiz:[
     {q:"\"Решение было принято\" signifie…", o:["La décision va être prise","La décision a été prise","La décision est en train d'être prise"], a:1},
     {q:"Un participe passé passif court s'accorde…", o:["avec le sujet, en genre et en nombre","il ne s'accorde jamais","avec l'objet direct"], a:0},
     {q:"\"Магазин открывается\" utilise quel procédé pour le sens passif ?", o:["un participe court","le suffixe -ся","бы + passé"], a:1},
     {q:"Dans une phrase passive, l'agent (\"par qui\") se met…", o:["au génitif avec une préposition","à l'instrumental, sans préposition","au datif"], a:1},
     {q:"\"Дом построен в 1990 году\" signifie…", o:["La maison va être construite en 1990","La maison a été construite en 1990","La maison se construit en 1990"], a:1}
   ]},
  {id:"aspect-imperatif", cefr:"B1", title:"Choisir l'aspect à l'impératif", level:"Verbes", cases:[],
   content:`Au présent/passé, le choix de l'aspect dépend surtout du sens de l'action. À l'impératif, il dépend plutôt du ton et du contexte.

Perfectif = demande ponctuelle, neutre ou polie : Закрой дверь, пожалуйста. (Ferme la porte, s'il te plaît.)
Imperfectif = invitation générale, permission accordée, ou insistance selon le contexte : Закрывай дверь! (peut sonner plus pressant, ou exprimer une habitude à prendre)

Pour une interdiction, on utilise presque toujours l'imperfectif : Не закрывай дверь! (Ne ferme pas la porte !) — le perfectif à la forme négative aurait un sens différent (avertissement plutôt qu'interdiction).

⚠ Point de vigilance : à la forme polie avec пожалуйста, le perfectif reste la norme pour une demande simple — l'imperfectif à l'impératif peut parfois sembler brusque si le contexte ne s'y prête pas.`,
   examples:[["Открой окно, пожалуйста.","Ouvre la fenêtre, s'il te plaît (demande ponctuelle)."],["Не забудь ключи!","N'oublie pas les clés !"],["Заходите, не стесняйтесь!","Entrez, ne soyez pas gêné !"],["Передайте соль, пожалуйста.","Passez-moi le sel, s'il vous plaît (perfectif, poli)."],["Приходи почаще!","Viens plus souvent ! (imperfectif, invitation répétée)"]],
   quiz:[
     {q:"Pour une demande ponctuelle et polie, on utilise plutôt l'aspect…", o:["perfectif","imperfectif","cela n'a pas d'importance"], a:0},
     {q:"Pour une interdiction (« ne fais pas... »), on utilise presque toujours…", o:["le perfectif","l'imperfectif","le conditionnel"], a:1},
     {q:"\"Не забудь!\" utilise quel aspect ?", o:["perfectif","imperfectif","aucun des deux, c'est un nom"], a:0},
     {q:"\"Передайте соль, пожалуйста\" utilise quel aspect et pourquoi ?", o:["Perfectif, demande ponctuelle polie","Imperfectif, habitude","Aucun des deux, c'est un nom"], a:0},
     {q:"\"Приходи почаще!\" (viens plus souvent) utilise quel aspect ?", o:["Perfectif","Imperfectif, car c'est une invitation répétée","Le passé"], a:1}
   ]},
  {id:"mouvement-avances", cefr:"B1", title:"Verbes de mouvement supplémentaires", level:"Verbes", cases:[],
   content:`Au-delà de идти/ходить et ехать/ездить, d'autres verbes de mouvement suivent le même principe unidirectionnel / multidirectionnel :

бежать/бегать (courir), лететь/летать (voler, en avion), нести/носить (porter, à la main), везти/возить (transporter, en véhicule), плыть/плавать (nager).

Он бежит на автобус. (Il court vers le bus — là, maintenant.) / Он бегает каждое утро. (Il court tous les matins — habitude.)

Avec les préfixes déjà vus (при-, у-, вы-, за-, про-, пере-), on peut préciser n'importe lequel de ces verbes : принести (apporter), унести (emporter), перенести (déplacer).

⚠ Point de vigilance : нести/носить et везти/возить se distinguent uniquement par le mode de transport (à la main vs en véhicule) — ne les confonds pas avec идти/ходить, qui concernent le déplacement de la personne elle-même, pas d'un objet.`,
   examples:[["Самолёт летит в Москву.","L'avion vole vers Moscou (maintenant)."],["Она носит тяжёлые сумки.","Elle porte de lourds sacs (habituellement)."],["Принеси мне воды, пожалуйста.","Apporte-moi de l'eau, s'il te plaît."],["Я несу сумку.","Je porte un sac (à la main, maintenant)."],["Такси везёт нас в аэропорт.","Le taxi nous emmène à l'aéroport."]],
   quiz:[
     {q:"\"лететь\" s'utilise pour un mouvement…", o:["ponctuel, en cours (avion, maintenant)","habituel, répété","au passé uniquement"], a:0},
     {q:"\"принести\" (préfixe при- + нести) signifie…", o:["emporter","apporter","transporter en voiture"], a:1},
     {q:"\"возить\" correspond à quel mode de transport ?", o:["à pied","en véhicule","en avion"], a:1},
     {q:"\"нести\" s'utilise pour transporter un objet…", o:["en véhicule","à la main / sur soi","par avion uniquement"], a:1},
     {q:"\"Такси везёт нас\" — везёт est la forme de quel verbe ?", o:["нести","идти","везти"], a:2}
   ]},
  {id:"negation-renforcee", cefr:"B1", title:"La négation renforcée : ничего не, никогда не", level:"Structure", cases:[],
   content:`Contrairement au français, le russe utilise une double négation obligatoire : не (devant le verbe) ET un mot négatif (никто, ничего, никогда, нигде...) coexistent dans la même phrase, sans que cela s'annule.

Я никого не вижу. (Je ne vois personne — littéralement "je personne ne vois".)
Он никогда не опаздывает. (Il n'est jamais en retard.)
Я нигде не могу найти ключи. (Je ne trouve les clés nulle part.)

C'est un piège fréquent pour un francophone qui pourrait être tenté d'omettre le не, pensant (comme en anglais) qu'un seul mot négatif suffit.

⚠ Point de vigilance : ни (sans не) sert aussi à renforcer une négation dans des expressions figées : ни разу (pas une seule fois), ни один (pas un seul) — à ne pas confondre avec никогда/никто qui portent déjà не intégré dans leur sens.`,
   examples:[["Никто не знает.","Personne ne sait."],["Я ничего не понимаю.","Je ne comprends rien."],["Мы никогда не были в Китае.","Nous ne sommes jamais allés en Chine."],["Я ни разу не был в Китае.","Je ne suis jamais allé en Chine (pas une seule fois)."],["Ни один студент не пришёл.","Pas un seul étudiant n'est venu."]],
   quiz:[
     {q:"\"Je ne vois personne\" se dit…", o:["Я вижу никого","Я никого не вижу","Я не вижу никто"], a:1},
     {q:"En russe, faut-il garder не en plus du mot négatif (никто, ничего...) ?", o:["Non, un seul suffit comme en anglais","Oui, les deux sont obligatoires","Seulement à l'écrit"], a:1},
     {q:"\"Nulle part\" se dit…", o:["никогда","никто","нигде"], a:2},
     {q:"\"Ни разу\" signifie…", o:["toujours","pas une seule fois","parfois"], a:1},
     {q:"\"Ни один студент не пришёл\" signifie…", o:["Tous les étudiants sont venus","Pas un seul étudiant n'est venu","Un seul étudiant est venu"], a:1}
   ]},
  {id:'possessifs-pronoms', title:'Les pronoms possessifs', level:'Structure', cefr:'A1', cases:[],
   content:`Les pronoms possessifs russes s'accordent en genre et en nombre avec l'objet possédé (comme "mon/ma/mes" en français), et non avec la personne qui possède, exactement comme en français.

мой (masc.) / моя (fém.) / моё (neutre) / мои (pluriel) = mon/ma/mes
твой / твоя / твоё / твои = ton/ta/tes
наш / наша / наше / наши = notre/nos
ваш / ваша / ваше / ваши = votre/vos

En revanche, "его" (son/sa/ses, à lui), "её" (son/sa/ses, à elle) et "их" (leur/leurs) ne changent JAMAIS de forme, quel que soit le genre ou le nombre de l'objet possédé — c'est une différence importante avec мой/твой/наш/ваш.

⚠ Point de vigilance : ne fais pas l'erreur d'accorder его/её/их avec l'objet possédé — "его сестра" (sa sœur, à lui) et "его книги" (ses livres, à lui) gardent tous deux "его" invariable.`,
   examples:[['Это мой дом.','C\'est ma maison.'],['Твоя сумка здесь.','Ton sac est ici.'],['Наше окно большое.','Notre fenêtre est grande.'],['Это его машина.','C\'est sa voiture (à lui).'],['Их дети играют.','Leurs enfants jouent.']],
   quiz:[
     {q:'Comment dit-on "ma voiture" (машина, féminin) ?', o:['мой машина','моя машина','моё машина'], a:1},
     {q:'Comment dit-on "ses livres" en parlant d\'une femme (её ou эта) ?', o:['её книги','её книга','её книгой'], a:0},
     {q:'"Их" (leur/leurs) change-t-il selon le genre de l\'objet possédé ?', o:['Oui, toujours','Non, jamais','Seulement au pluriel'], a:1},
     {q:'Comment dit-on "notre maison" (дом, masculin) ?', o:['наша дом','наш дом','наше дом'], a:1},
     {q:'Comment dit-on "vos amis" (друзья, pluriel) ?', o:['ваш друзья','ваши друзья','ваша друзья'], a:1}
   ]},
  {id:'demonstratifs-pronoms', title:'Les pronoms démonstratifs (этот/эта/это/эти)', level:'Structure', cefr:'A1', cases:[],
   content:`«Этот» correspond à «ce/cet/cette/ces» en français et s'accorde également en genre et en nombre avec le nom qu'il accompagne.

этот (masculin) — этот дом (cette maison... non, cette maison est féminin en français mais дом est masculin en russe : "ce/cet")
эта (féminin) — эта книга (ce livre... книга est féminin : "cette")
это (neutre) — это окно (cette fenêtre... окно est neutre : "cette")
эти (pluriel) — эти люди (ces gens)

Attention : «это» a aussi un second usage très fréquent, indépendant du genre, pour dire "c'est / ce sont" en début de phrase : «Это стол» (C'est une table), «Это мои друзья» (Ce sont mes amis) — dans ce cas «это» ne s'accorde avec rien, il reste toujours «это».

⚠ Point de vigilance : ne confonds pas les deux usages de «это» — comme pronom démonstratif accordé (этот/эта/это/эти + nom) et comme présentatif invariable en tête de phrase (Это + n'importe quel nom, quel que soit son genre).`,
   examples:[['Этот стол новый.','Cette table (masc.) est neuve.'],['Эта девушка учится.','Cette fille étudie.'],['Это письмо интересное.','Cette lettre est intéressante.'],['Эти цветы красивые.','Ces fleurs sont belles.'],['Это мой брат.','C\'est mon frère.']],
   quiz:[
     {q:'Comment dit-on "ce livre" (книга, féminin) ?', o:['этот книга','эта книга','это книга'], a:1},
     {q:'Comment dit-on "cette fenêtre" (окно, neutre) ?', o:['этот окно','эта окно','это окно'], a:2},
     {q:'Comment dit-on "ces amis" (друзья, pluriel) ?', o:['этот друзья','эти друзья','это друзья'], a:1},
     {q:'Dans "Это моя сестра", que signifie "это" ici ?', o:['Ce/cette (accordé)','C\'est (présentatif invariable)','Cela ne veut rien dire'], a:1},
     {q:'"Это" en début de phrase change-t-il selon le genre du nom qui suit ?', o:['Oui','Non, il reste toujours "это"','Seulement au pluriel'], a:1}
   ]},
  {id:'verbes-irreguliers-1', title:'Les verbes irréguliers du présent (хотеть, есть, бежать)', level:'Verbes', cefr:'A1', cases:[],
   content:`Certains verbes très fréquents ne suivent ni le 1er groupe (-ать) ni le 2e groupe (-ить) et doivent être appris par cœur.

Хотеть (vouloir) change de radical au singulier et au pluriel : я хочу, ты хочешь, он хочет, мы хотим, вы хотите, они хотят — remarque le changement т → ч au singulier.

Есть (manger) : я ем, ты ешь, он ест, мы едим, вы едите, они едят.

Бежать (courir) : я бегу, ты бежишь, он бежит, мы бежим, вы бежите, они бегут.

Ces verbes reviennent tellement souvent dans la conversation quotidienne qu'il vaut mieux les mémoriser comme des blocs entiers plutôt que d'essayer de leur appliquer une règle de conjugaison.

⚠ Point de vigilance : ne confonds pas «есть» (manger) avec «есть» qui signifie aussi «il y a / il existe» (Я хочу есть = je veux manger, mais У меня есть машина = j'ai une voiture) — c'est le même mot écrit, avec deux sens et deux origines différentes.`,
   examples:[['Я хочу пить.','Je veux boire.'],['Ты хочешь чай?','Tu veux du thé ?'],['Мы едим суп.','Nous mangeons de la soupe.'],['Дети бегут в парк.','Les enfants courent au parc.'],['Они хотят домой.','Ils veulent rentrer à la maison.']],
   quiz:[
     {q:'Comment dit-on "je veux" (хотеть) ?', o:['я хочу','я хотим','я хочешь'], a:0},
     {q:'Comment dit-on "ils mangent" (есть) ?', o:['они едите','они едят','они ест'], a:1},
     {q:'Comment dit-on "tu cours" (бежать) ?', o:['ты бегу','ты бежишь','ты бежат'], a:1},
     {q:'Quel changement de consonne apparaît dans "хотеть" au singulier ?', o:['т → ч','д → ж','к → ц'], a:0},
     {q:'"Есть" peut aussi signifier :', o:['Boire','Il y a / il existe','Aller'], a:1}
   ]},
  {id:'v-na-lieu', title:'« В » ou « на » : choisir la bonne préposition de lieu', level:'Cas', cefr:'A1', cases:['prepositionnel'],
   content:`«В» (dans) et «на» (sur) sont toutes deux suivies du prépositionnel pour indiquer un lieu, mais leur usage ne correspond pas toujours à «dans»/«sur» en français — c'est une source d'erreurs classique.

«В» s'utilise pour un espace fermé ou perçu comme un contenant : в доме (dans la maison), в городе (dans la ville), в школе (à l'école).

«На» s'utilise pour une surface, un événement, ou certains lieux fixés par l'usage (souvent hérités du sens "sur une surface ouverte") : на улице (dans la rue, littéralement "sur la rue"), на почте (à la poste), на работе (au travail), на уроке (en cours), на юге (dans le sud).

Il n'existe pas de règle purement logique qui couvre tous les cas : certains mots comme почта, работа, юг utilisent «на» par tradition, sans lien évident avec une "surface". Le plus efficace est de mémoriser la préposition avec chaque mot de lieu, comme un couple indissociable.

⚠ Point de vigilance : le choix в/на détermine aussi la préposition de mouvement correspondante (в → в + accusatif, на → на + accusatif) : "Я иду на работу" (je vais au travail) et non "в работу".`,
   examples:[['Я живу в Москве.','J\'habite à Moscou.'],['Книга лежит на столе.','Le livre est sur la table.'],['Он работает на почте.','Il travaille à la poste.'],['Дети в школе.','Les enfants sont à l\'école.'],['Мы были на уроке.','Nous étions en cours.']],
   quiz:[
     {q:'Comment dit-on "au travail" (работа) ?', o:['в работе','на работе','за работой'], a:1},
     {q:'Comment dit-on "dans la ville" (город) ?', o:['в городе','на городе','с городом'], a:0},
     {q:'Comment dit-on "dans la rue" (улица) ?', o:['в улице','на улице','у улицы'], a:1},
     {q:'Existe-t-il une règle logique universelle pour choisir в ou на ?', o:['Oui, toujours','Non, certains mots s\'apprennent par cœur','Seulement pour les villes'], a:1},
     {q:'Comment dit-on "à l\'école" (школа) ?', o:['на школе','в школе','за школой'], a:1}
   ]},
  {id:'accusatif-anime', title:'L\'accusatif animé et inanimé', level:'Cas', cefr:'A1', cases:['accusatif'],
   content:`À l'accusatif, la forme dépend de si le nom est «animé» (personne, animal) ou «inanimé» (objet, concept) — c'est une distinction essentielle que le français ne connaît pas.

Pour les noms masculins INANIMÉS, l'accusatif est identique au nominatif : Я вижу стол (je vois une table) — стол ne change pas.

Pour les noms masculins ANIMÉS, l'accusatif est identique au génitif : Я вижу брата (je vois mon frère) — брат devient брата, comme au génitif.

Pour les noms féminins en -а/-я, la règle est différente et s'applique à tous, animés ou non : la terminaison devient -у/-ю : Я вижу маму (je vois maman), Я вижу книгу (je vois un livre).

Les noms neutres et la plupart des noms au pluriel suivent des règles proches : au pluriel, les noms animés (personnes/animaux) prennent aussi la forme du génitif pluriel à l'accusatif.

⚠ Point de vigilance : cette règle "animé = comme le génitif" ne s'applique qu'au masculin (singulier et pluriel) — au féminin en -а/-я, l'accusatif suit toujours sa propre terminaison en -у/-ю, qu'il s'agisse d'une personne ou d'un objet.`,
   examples:[['Я вижу стол.','Je vois une table.'],['Я вижу брата.','Je vois mon frère.'],['Он видит собаку.','Il voit un chien.'],['Мы видим друга.','Nous voyons un ami.'],['Она читает книгу.','Elle lit un livre.']],
   quiz:[
     {q:'À l\'accusatif, un nom masculin inanimé (стол) ressemble à :', o:['Son génitif','Son nominatif','Son datif'], a:1},
     {q:'À l\'accusatif, un nom masculin animé (брат) ressemble à :', o:['Son nominatif','Son génitif','Son instrumental'], a:1},
     {q:'Comment dit-on "je vois un ami" (друг, masc. animé) ?', o:['Я вижу друг','Я вижу друга','Я вижу другу'], a:1},
     {q:'La règle "animé = comme le génitif" s\'applique-t-elle au féminin en -а ?', o:['Oui, toujours','Non, le féminin en -а suit sa propre règle en -у/-ю','Seulement au pluriel'], a:1},
     {q:'Comment dit-on "je vois maman" (мама) ?', o:['Я вижу мама','Я вижу маму','Я вижу мамы'], a:1}
   ]},
  {id:'negation-indefinis', title:'La négation avec ничего, никто, нигде', level:'Structure', cefr:'A1', cases:[],
   content:`Le russe utilise la double négation (contrairement au français standard) : quand la phrase contient «не» (ne... pas), les mots indéfinis négatifs (personne, rien, nulle part) prennent eux aussi une forme négative en «ни-».

ничего = rien : Я ничего не знаю (Je ne sais rien) — littéralement "je rien pas sais".
никто = personne : Никто не пришёл (Personne n'est venu).
нигде = nulle part : Его нигде нет (Il n'est nulle part).
никогда = jamais : Я никогда не был в Китае (Je ne suis jamais allé en Chine).

Dans toutes ces phrases, «не» reste obligatoire devant le verbe, même si le mot négatif (ничего, никто...) est déjà présent — c'est l'inverse du français, où l'on ne dit jamais "je ne sais rien pas".

⚠ Point de vigilance : oublier «не» devant le verbe est une erreur fréquente chez les francophones qui, par réflexe, pensent qu'un seul mot négatif (comme "rien") suffit — en russe, il en faut toujours deux : ни-mot + не + verbe.`,
   examples:[['Я ничего не понимаю.','Je ne comprends rien.'],['Никто не звонил.','Personne n\'a appelé.'],['Здесь никого нет.','Il n\'y a personne ici.'],['Я нигде не могу найти ключи.','Je ne trouve les clés nulle part.'],['Он никогда не опаздывает.','Il n\'est jamais en retard.']],
   quiz:[
     {q:'Comment dit-on "je ne sais rien" ?', o:['Я ничего знаю','Я ничего не знаю','Я не знаю ничего не'], a:1},
     {q:'Faut-il garder "не" devant le verbe même avec "никто" ?', o:['Non, un seul mot négatif suffit','Oui, toujours les deux','Seulement au passé'], a:1},
     {q:'Comment dit-on "personne n\'est venu" ?', o:['Никто пришёл','Никто не пришёл','Не никто пришёл'], a:1},
     {q:'Comment dit-on "nulle part" ?', o:['никогда','никто','нигде'], a:2},
     {q:'"Никогда" signifie :', o:['Rien','Jamais','Personne'], a:1}
   ]},
  {id:'adverbes-o', title:'Les adverbes formés à partir des adjectifs (-о)', level:'Structure', cefr:'A1', cases:[],
   content:`La plupart des adverbes de manière se forment simplement en remplaçant la terminaison de l'adjectif masculin (-ый/-ий/-ой) par -о.

быстрый (rapide) → быстро (rapidement) : Он быстро бежит (Il court rapidement).
медленный (lent) → медленно (lentement).
хороший (bon) → хорошо (bien).
плохой (mauvais) → плохо (mal).
красивый (beau) → красиво (joliment, de façon élégante).

Ces adverbes en -о sont invariables : contrairement aux adjectifs, ils ne s'accordent jamais avec le sujet, quel que soit son genre ou son nombre.

Ils s'utilisent aussi dans des phrases impersonnelles très courantes pour exprimer un ressenti ou un jugement général : Здесь тепло (Il fait chaud ici), Это интересно (C'est intéressant), Мне скучно (Je m'ennuie, littéralement "à moi c'est ennuyeux").

⚠ Point de vigilance : ne confonds pas l'adjectif accordé (хороший, хорошая, хорошее — bon/bonne) avec l'adverbe invariable (хорошо — bien) : "хорошая книга" (un bon livre) mais "Она хорошо читает" (elle lit bien).`,
   examples:[['Он говорит быстро.','Il parle rapidement.'],['Ты хорошо танцуешь.','Tu danses bien.'],['Здесь очень тепло.','Il fait très chaud ici.'],['Это плохо.','C\'est mauvais.'],['Она красиво поёт.','Elle chante joliment.']],
   quiz:[
     {q:'Comment forme-t-on l\'adverbe à partir de "быстрый" (rapide) ?', o:['быстро','быстрый','быстрое'], a:0},
     {q:'"Хорошо" peut vouloir dire :', o:['Seulement "bon" (adjectif)','"Bien" (adverbe) ou "il fait bon"','Seulement un nom'], a:1},
     {q:'Les adverbes en -о s\'accordent-ils avec le sujet ?', o:['Oui, en genre','Non, ils sont invariables','Oui, en nombre seulement'], a:1},
     {q:'Comment dit-on "c\'est intéressant" ?', o:['Это интересный','Это интересно','Это интересная'], a:1},
     {q:'Quel adjectif donne l\'adverbe "плохо" (mal) ?', o:['плохой','плохая','плохое'], a:0}
   ]},
  {id:'u-menya-est', title:'Exprimer la possession : у меня есть...', level:'Structure', cefr:'A1', cases:['genitif'],
   content:`Le russe n'a pas de verbe équivalent à «avoir» pour exprimer la possession au quotidien — à la place, on utilise la structure «у + génitif + есть + nom au nominatif», littéralement «chez moi il y a».

У меня есть машина. = J'ai une voiture (littéralement : "chez moi il y a une voiture").
У тебя есть время? = Tu as le temps ? (littéralement : "chez toi il y a le temps ?")
У нас есть дети. = Nous avons des enfants.

Le pronom personnel se met au génitif après «у» : меня, тебя, его, её, нас, вас, их (formes de génitif des pronoms).

Pour la négation, «есть» disparaît et l'objet possédé passe au génitif : У меня нет машины (Je n'ai pas de voiture) — remarque que «машина» devient «машины» au génitif dans la phrase négative.

⚠ Point de vigilance : dans la construction négative, ne garde jamais «есть» — on dit «у меня нет времени» (je n'ai pas le temps) et jamais «у меня не есть время».`,
   examples:[['У меня есть брат.','J\'ai un frère.'],['У тебя есть собака?','Tu as un chien ?'],['У нас есть план.','Nous avons un plan.'],['У меня нет денег.','Je n\'ai pas d\'argent.'],['У неё нет времени.','Elle n\'a pas le temps.']],
   quiz:[
     {q:'Comment dit-on "j\'ai une voiture" ?', o:['Я есть машина','У меня есть машина','Мне есть машина'], a:1},
     {q:'Quel cas suit "у" pour exprimer la possession ?', o:['Le nominatif','L\'accusatif','Le génitif'], a:2},
     {q:'Comment dit-on "je n\'ai pas d\'argent" (деньги) ?', o:['У меня есть не деньги','У меня нет денег','Я не имею деньги'], a:1},
     {q:'Dans une phrase négative de possession, que devient l\'objet possédé ?', o:['Il reste au nominatif','Il passe au génitif','Il passe à l\'accusatif'], a:1},
     {q:'"У меня нет времени" signifie :', o:['J\'ai le temps','Je n\'ai pas le temps','J\'aurai le temps'], a:1}
   ]},
  {id:'jours-semaine-temps', title:'Les jours de la semaine et les prépositions de temps', level:'Structure', cefr:'A1', cases:['accusatif','prepositionnel'],
   content:`Pour dire "le lundi", "le mardi", etc. au sens de "tel jour, en général", le russe utilise «в + accusatif» pour la plupart des jours.

понедельник (lundi) → в понедельник (lundi / le lundi)
вторник (mardi) → во вторник (remarque le «во» au lieu de «в» pour faciliter la prononciation devant «вт»)
среда (mercredi) → в среду (le nom féminin среда change de terminaison à l'accusatif)
суббота (samedi) → в субботу

Pour dire "en telle semaine/tel mois", on utilise plutôt «на + prépositionnel» pour la semaine (на этой неделе = cette semaine) et «в + prépositionnel» pour le mois (в этом месяце = ce mois-ci).

⚠ Point de vigilance : «среда» et «суббота» changent de terminaison à l'accusatif (среду, субботу) comme tout nom féminin en -а, alors que «понедельник», «вторник» (masculins) restent identiques au nominatif et à l'accusatif inanimé.`,
   examples:[['Я работаю в понедельник.','Je travaille le lundi.'],['Встреча во вторник.','La réunion est mardi.'],['Мы едем в среду.','Nous partons mercredi.'],['На этой неделе я занят.','Cette semaine, je suis occupé.'],['В субботу мы отдыхаем.','Le samedi, nous nous reposons.']],
   quiz:[
     {q:'Comment dit-on "mardi" avec la préposition ?', o:['в вторник','во вторник','на вторник'], a:1},
     {q:'Comment dit-on "mercredi" (среда) avec la préposition ?', o:['в среда','в среду','на среде'], a:1},
     {q:'Quelle préposition utilise-t-on pour "cette semaine" ?', o:['в','на','у'], a:1},
     {q:'"Среда" change-t-elle de terminaison à l\'accusatif ?', o:['Non, jamais','Oui, comme tout féminin en -а','Seulement au pluriel'], a:1},
     {q:'Comment dit-on "le samedi" ?', o:['в субботу','в суббота','на субботу'], a:0}
   ]},
  {id:'particule-li', title:'Poser une question avec la particule ли', level:'Structure', cefr:'A1', cases:[],
   content:`En russe, une question fermée (réponse oui/non) se forme le plus souvent simplement par l'intonation, sans changer l'ordre des mots : «Ты дома?» (Tu es à la maison ?) se dit exactement comme «Ты дома.» (Tu es à la maison.) mais avec une intonation montante.

Pour une question plus formelle, indirecte, ou dans le discours rapporté, on utilise la particule «ли», qui se place juste après le mot sur lequel porte le doute, en général le verbe : Не знаю, придёт ли он (Je ne sais pas s'il viendra) — «ли» joue ici le rôle du «si» français dans une interrogation indirecte.

L'ordre est : [élément mis en doute] + ли + [reste de la phrase] : Знаешь ли ты его? (Le connais-tu, littéralement "sais-tu, lui, le connais-tu").

⚠ Point de vigilance : «ли» ne se traduit jamais par «si» dans une condition (si j'avais su... = «если» et non «ли») — «ли» sert uniquement à marquer le doute dans une interrogation, directe ou indirecte, jamais une condition hypothétique.`,
   examples:[['Ты дома?','Tu es à la maison ?'],['Не знаю, придёт ли он.','Je ne sais pas s\'il viendra.'],['Знаешь ли ты правду?','Connais-tu la vérité ?'],['Скажи, есть ли у тебя время.','Dis-moi si tu as le temps.'],['Я спросил, работает ли она.','J\'ai demandé si elle travaillait.']],
   quiz:[
     {q:'Comment forme-t-on une question simple oui/non en russe ?', o:['En inversant sujet/verbe','Par l\'intonation, sans changer l\'ordre des mots','Toujours avec "ли"'], a:1},
     {q:'Où se place "ли" dans la phrase ?', o:['En tout début de phrase','Juste après le mot mis en doute','À la toute fin'], a:1},
     {q:'"Ли" peut-il traduire "si" dans une phrase de condition (si j\'avais su) ?', o:['Oui, toujours','Non, cela se dit avec "если"','Seulement au passé'], a:1},
     {q:'"Не знаю, придёт ли он" signifie :', o:['Je sais qu\'il viendra','Je ne sais pas s\'il viendra','Il ne viendra jamais'], a:1},
     {q:'"Ли" sert à :', o:['Marquer le doute dans une question','Exprimer une négation','Former le pluriel'], a:0}
   ]},
  {id:'moch-umet', title:'Мочь et уметь : pouvoir vs savoir faire', level:'Verbes', cefr:'A1', cases:[],
   content:`Le français utilise «pouvoir» à la fois pour la capacité physique/circonstancielle et pour le savoir-faire appris, mais le russe distingue nettement les deux avec «мочь» et «уметь».

«Мочь» exprime une possibilité physique ou circonstancielle : Я не могу прийти сегодня (Je ne peux pas venir aujourd'hui — parce que je suis occupé, malade, etc.). Conjugaison irrégulière : я могу, ты можешь, он может, мы можем, вы можете, они могут.

«Уметь» exprime un savoir-faire acquis par apprentissage : Я умею плавать (Je sais nager — j'ai appris à nager). Conjugaison régulière du 1er groupe : я умею, ты умеешь, он умеет...

Comparer : «Я не могу плавать» (je ne peux pas nager en ce moment, par exemple l'eau est trop froide ou je suis blessé) contre «Я не умею плавать» (je ne sais pas nager, je n'ai jamais appris).

⚠ Point de vigilance : ne mélange pas les deux verbes pour parler d'une langue étrangère — on dit toujours «уметь» ou plus précisément «говорить по-русски» pour une compétence apprise, jamais «мочь говорить по-русски» sauf pour signaler un empêchement physique ponctuel (par exemple une extinction de voix).`,
   examples:[['Я не могу сегодня.','Je ne peux pas aujourd\'hui.'],['Ты умеешь готовить?','Tu sais cuisiner ?'],['Он умеет играть на гитаре.','Il sait jouer de la guitare.'],['Мы можем помочь.','Nous pouvons aider.'],['Она не умеет плавать.','Elle ne sait pas nager.']],
   quiz:[
     {q:'Quel verbe exprime un savoir-faire appris ?', o:['мочь','уметь','хотеть'], a:1},
     {q:'"Я не могу плавать" signifie plutôt :', o:['Je n\'ai jamais appris à nager','Je ne peux pas nager maintenant, pour une raison précise','Je déteste nager'], a:1},
     {q:'Comment dit-on "il sait jouer de la guitare" ?', o:['Он может играть на гитаре','Он умеет играть на гитаре','Он хочет играть на гитаре'], a:1},
     {q:'Comment conjugue-t-on "мочь" à la 1ère personne du singulier ?', o:['я мочу','я могу','я можу'], a:1},
     {q:'Pour parler d\'une compétence linguistique apprise, on utilise en général :', o:['мочь','уметь / говорить по-русски','хотеть'], a:1}
   ]},
  {id:'mouvement-2', title:'Les verbes de mouvement 2 : лететь/летать, плыть/плавать, нести/носить', level:'Verbes', cefr:'A2', cases:[],
   content:`Comme идти/ходить et ехать/ездить, ces trois paires de verbes de mouvement opposent une action «unidirectionnelle, en cours» (лететь, плыть, нести) à une action «habituelle ou multidirectionnelle» (летать, плавать, носить).

Лететь (voler, en avion, dans une direction précise, maintenant) / летать (voler, en général, habituellement, ou dans plusieurs directions) : Самолёт летит в Париж (L'avion vole vers Paris, maintenant) / Птицы летают (Les oiseaux volent, en général).

Плыть (nager/naviguer, dans une direction précise) / плавать (nager, en général, savoir nager) : Он плывёт к берегу (Il nage vers la rive) / Он хорошо плавает (Il nage bien, en général).

Нести (porter, transporter quelque chose dans une direction précise) / носить (porter, en général, ou porter habituellement, par exemple un vêtement) : Она несёт сумку (Elle porte un sac, là maintenant) / Она носит очки (Elle porte des lunettes, habituellement).

⚠ Point de vigilance : «носить» sert aussi à dire qu'on porte un vêtement ou des lunettes de façon habituelle — un sens qui n'a pas d'équivalent direct avec «нести», qui décrit uniquement un transport ponctuel et concret.`,
   examples:[['Самолёт летит в Москву.','L\'avion vole vers Moscou.'],['Птицы летают на юг зимой.','Les oiseaux volent vers le sud en hiver.'],['Он плывёт через реку.','Il traverse la rivière à la nage.'],['Я не умею плавать.','Je ne sais pas nager.'],['Она носит очки.','Elle porte des lunettes.']],
   quiz:[
     {q:'Quel verbe utiliser pour "l\'avion vole vers Paris maintenant" ?', o:['летать','лететь','плыть'], a:1},
     {q:'Quel verbe exprime une capacité générale de nager ?', o:['плыть','плавать','нести'], a:1},
     {q:'Comment dit-on "elle porte des lunettes" (habituellement) ?', o:['она несёт очки','она носит очки','она плывёт очки'], a:1},
     {q:'"Нести" décrit :', o:['Une habitude générale','Un transport ponctuel, dans une direction précise','Une capacité apprise'], a:1},
     {q:'"Птицы летают" signifie :', o:['Les oiseaux volent maintenant, vers un endroit précis','Les oiseaux volent, en général','Les oiseaux ne volent jamais'], a:1}
   ]},
  {id:'aspect-passe', title:'L\'aspect verbal au passé : choisir perfectif ou imperfectif', level:'Verbes', cefr:'A2', cases:[],
   content:`Au passé, le choix entre l'aspect imperfectif et l'aspect perfectif dépend de ce que l'on veut souligner : le déroulement/la répétition (imperfectif) ou le résultat/l'achèvement (perfectif).

Utilise l'IMPERFECTIF pour : une action en cours dans le passé (Я читал книгу, когда ты позвонил — Je lisais un livre quand tu as appelé), une action répétée ou habituelle (Каждый день я читал газету — Chaque jour je lisais le journal), ou pour simplement mentionner qu'une action a eu lieu sans insister sur le résultat (Я уже читал эту книгу — J'ai déjà lu ce livre, à un moment donné).

Utilise le PERFECTIF pour : une action ponctuelle achevée avec un résultat visible (Я прочитал книгу — J'ai lu le livre, en entier, jusqu'au bout) ou une suite d'actions ponctuelles (Он встал, оделся и вышел — Il s'est levé, habillé et sorti).

⚠ Point de vigilance : au passé, la question à se poser est «est-ce que je veux insister sur le résultat final (perfectif) ou sur le déroulement/la répétition (imperfectif) ?» — contrairement au français, où l'imparfait et le passé composé se distinguent surtout par la durée, ici c'est le résultat qui prime.`,
   examples:[['Я читал книгу вчера.','Je lisais / j\'ai lu un livre hier (sans insister sur la fin).'],['Я прочитал книгу вчера.','J\'ai fini de lire le livre hier.'],['Она писала письмо весь день.','Elle a écrit une lettre toute la journée (en cours).'],['Она написала письмо и отправила его.','Elle a écrit la lettre et l\'a envoyée (achevé).'],['Мы обедали, когда он пришёл.','Nous déjeunions quand il est arrivé.']],
   quiz:[
     {q:'Quel aspect insiste sur le résultat final d\'une action ?', o:['Imperfectif','Perfectif','Aucun des deux'], a:1},
     {q:'"Я читал книгу, когда ты позвонил" utilise quel aspect et pourquoi ?', o:['Perfectif, car l\'action est terminée','Imperfectif, car l\'action était en cours','Perfectif, car l\'action est répétée'], a:1},
     {q:'Pour une action répétée dans le passé, on utilise :', o:['L\'imperfectif','Le perfectif','Cela dépend du jour'], a:0},
     {q:'"Я прочитал книгу" signifie :', o:['J\'étais en train de lire un livre','J\'ai fini de lire le livre en entier','Je vais lire un livre'], a:1},
     {q:'Le critère principal pour choisir l\'aspect au passé en russe est :', o:['La durée de l\'action, comme en français','Le résultat/l\'achèvement vs le déroulement/la répétition','Le jour de la semaine'], a:1}
   ]},
  {id:'pronom-relatif-kotoryi', title:'Le pronom relatif который', level:'Structure', cefr:'A2', cases:[],
   content:`«Который» correspond à «qui/que/dont/lequel» en français et s'accorde en genre et en nombre avec le nom qu'il remplace, mais se décline en cas selon sa fonction dans la proposition relative.

Дом, который стоит на углу. (La maison qui se trouve au coin.) — который est au nominatif car il est sujet de «стоит».

Книга, которую я читаю. (Le livre que je lis.) — которую est à l'accusatif féminin car il est complément d'objet de «читаю».

Человек, которому я помог. (La personne que j'ai aidée.) — которому est au datif car «помочь» se construit avec le datif.

La règle est donc double : le GENRE et le NOMBRE de «который» s'accordent avec le nom qu'il remplace (antécédent), mais son CAS dépend de sa fonction dans sa propre proposition.

⚠ Point de vigilance : ne fais pas l'erreur d'accorder «который» avec le cas de l'antécédent — seuls le genre et le nombre suivent l'antécédent ; le cas, lui, dépend uniquement du rôle que joue «который» à l'intérieur de sa propre proposition relative.`,
   examples:[['Дом, который стоит на углу, старый.','La maison qui se trouve au coin est vieille.'],['Книга, которую я читаю, интересная.','Le livre que je lis est intéressant.'],['Девушка, с которой я говорил, — моя коллега.','La fille avec qui j\'ai parlé est ma collègue.'],['Друзья, которые приехали, устали.','Les amis qui sont arrivés sont fatigués.'],['Человек, которому я помог, поблагодарил меня.','La personne que j\'ai aidée m\'a remercié.']],
   quiz:[
     {q:'Le genre et le nombre de "который" s\'accordent avec :', o:['Le verbe de la relative','L\'antécédent (le nom qu\'il remplace)','Toujours le masculin singulier'], a:1},
     {q:'Le CAS de "который" dépend de :', o:['L\'antécédent','Sa fonction dans sa propre proposition relative','Rien, il est invariable'], a:1},
     {q:'Dans "книга, которую я читаю", pourquoi "которую" est-il à l\'accusatif ?', o:['Parce que "книга" est féminin','Parce qu\'il est complément d\'objet de "читаю"','Par hasard'], a:1},
     {q:'Comment traduit-on "который" le plus souvent ?', o:['Qui/que/dont/lequel','Ce','Où'], a:0},
     {q:'Dans "друзья, которые приехали", pourquoi "которые" est-il au pluriel ?', o:['Parce que "приехали" est au passé','Parce que "друзья" (l\'antécédent) est au pluriel','Par erreur, il devrait être singulier'], a:1}
   ]},
  {id:'participes-actifs-intro', title:'Les participes actifs présents (introduction)', level:'Lecture avancée', cefr:'A2', cases:[],
   content:`Le participe actif présent correspond au français «-ant» (lisant, travaillant) et se rencontre très souvent en lecture, bien qu'on l'utilise rarement à l'oral spontané.

Il se forme à partir du radical du présent + suffixe -ущий/-ющий (1er groupe) ou -ащий/-ящий (2e groupe), accordé comme un adjectif : читать → читающий (celui qui lit, lisant), говорить → говорящий (celui qui parle, parlant).

À la lecture, un participe actif remplace souvent une proposition relative avec «который» au présent : «человек, читающий газету» équivaut à «человек, который читает газету» (l'homme qui lit le journal) — les deux formulations sont correctes, mais la première est plus littéraire.

Pour l'instant, l'objectif n'est pas de produire ces formes à l'oral, mais de les reconnaître en lecture et de savoir les décomposer mentalement en «который + verbe au présent».

⚠ Point de vigilance : ne cherche pas à mémoriser toutes les terminaisons de déclinaison des participes dès ce stade — concentre-toi sur la reconnaissance : un mot qui ressemble à un adjectif long mais dérivé d'un verbe (souvent en -ущий/-ющий/-ащий/-ящий) est presque toujours un participe actif présent.`,
   examples:[['Студент, читающий книгу, — мой друг.','L\'étudiant qui lit un livre est mon ami.'],['Женщина, говорящая по-русски, — учительница.','La femme qui parle russe est professeure.'],['Дети, играющие во дворе, счастливы.','Les enfants qui jouent dans la cour sont heureux.'],['Человек, работающий здесь, очень добрый.','L\'homme qui travaille ici est très gentil.'],['Машина, едущая быстро, опасна.','La voiture qui roule vite est dangereuse.']],
   quiz:[
     {q:'Le participe actif présent correspond en français à :', o:['La forme en "-ant"','Le passé composé','Le futur'], a:0},
     {q:'"Читающий" vient de quel verbe ?', o:['говорить','читать','работать'], a:1},
     {q:'"Человек, читающий газету" équivaut à quelle formulation avec "который" ?', o:['Человек, который читал газету','Человек, который читает газету','Человек, который будет читать газету'], a:1},
     {q:'À ce stade, l\'objectif principal est de :', o:['Produire ces formes à l\'oral couramment','Les reconnaître en lecture','Les éviter complètement'], a:1},
     {q:'Quelle terminaison signale souvent un participe actif présent ?', o:['-ущий/-ющий/-ащий/-ящий','-л','-ть'], a:0}
   ]},
  {id:'numeraux-collectifs', title:'Les numéraux et l\'accord avec les noms au génitif pluriel', level:'Cas', cefr:'A2', cases:['genitif'],
   content:`Le russe applique une règle d'accord précise entre les nombres et les noms qui les suivent, différente selon la dernière chiffre du nombre.

Après 1 (et tout nombre finissant par 1, sauf 11) : le nom reste au NOMINATIF singulier : один стол, двадцать один стол (21 tables — littéralement "21 table").

Après 2, 3, 4 (et les nombres finissant par 2, 3, 4, sauf 12, 13, 14) : le nom passe au GÉNITIF SINGULIER : два стола, три стола, четыре стола (2/3/4 tables).

Après 5 et plus (et tous les nombres finissant par 5-9-0, ainsi que 11 à 14) : le nom passe au GÉNITIF PLURIEL : пять столов, десять столов, двадцать пять столов (5/10/25 tables).

Cette règle s'applique aussi aux adjectifs qui précèdent le nom : ils suivent une logique proche, généralement le génitif pluriel dès 2 et plus (два больших стола, пять больших столов).

⚠ Point de vigilance : la règle se base sur le DERNIER CHIFFRE du nombre, pas sur le nombre entier — «двадцать два» (22) se comporte comme «два» (accord en génitif singulier), et «сто одиннадцать» (111) se comporte comme «одиннадцать» (11 → génitif pluriel), car 11-14 sont une exception qui prend toujours le génitif pluriel.`,
   examples:[['У меня один брат.','J\'ai un frère.'],['У меня два брата.','J\'ai deux frères.'],['У меня пять братьев.','J\'ai cinq frères.'],['Двадцать один студент пришёл.','Vingt-et-un étudiants sont venus.'],['Одиннадцать книг лежит на столе.','Onze livres sont sur la table.']],
   quiz:[
     {q:'Quel cas suit le nombre "два" (2) ?', o:['Nominatif singulier','Génitif singulier','Génitif pluriel'], a:1},
     {q:'Quel cas suit le nombre "пять" (5) ?', o:['Nominatif singulier','Génitif singulier','Génitif pluriel'], a:2},
     {q:'Sur quoi se base la règle d\'accord ?', o:['Le nombre entier','Le dernier chiffre du nombre','La première lettre du nom'], a:1},
     {q:'Comment se comporte "двадцать два" (22) ?', o:['Comme "два" (génitif singulier)','Comme "пять" (génitif pluriel)','Comme "один" (nominatif singulier)'], a:0},
     {q:'Les nombres 11 à 14 suivent quelle règle, par exception ?', o:['Nominatif singulier, comme "один"','Génitif pluriel, comme 5 et plus','Ils n\'ont pas de règle'], a:1}
   ]},
  {id:'instrumental-avance', title:'Le cas instrumental : usages avancés (moyen, compagnie)', level:'Cas', cefr:'A2', cases:['instrumental'],
   content:`Au-delà de son usage de base, l'instrumental sert à exprimer le MOYEN par lequel on fait quelque chose, et la COMPAGNIE (avec qui) grâce à la préposition «с».

MOYEN (sans préposition) : Я пишу ручкой (J'écris avec un stylo), Мы едем поездом (Nous voyageons en train) — l'instrument ou le moyen de transport se met directement à l'instrumental, sans préposition.

COMPAGNIE (avec «с» + instrumental) : Я иду с другом (Je vais avec un ami), Она живёт с родителями (Elle vit avec ses parents).

L'instrumental sert aussi après certains verbes comme «быть» au passé/futur pour exprimer une profession ou un état temporaire : Он был врачом (Il était médecin — sous-entendu, à cette époque), Она станет учителем (Elle deviendra professeure).

⚠ Point de vigilance : pour le moyen de transport ou l'instrument, n'ajoute jamais de préposition (on ne dit pas «с ручкой» pour "avec un stylo" dans le sens instrumental — «ручкой» seul suffit) ; réserve «с + instrumental» uniquement au sens de compagnie ("avec quelqu'un" ou "avec quelque chose qui accompagne").`,
   examples:[['Я пишу карандашом.','J\'écris avec un crayon.'],['Мы едем автобусом.','Nous voyageons en bus.'],['Я иду в кино с сестрой.','Je vais au cinéma avec ma sœur.'],['Он был инженером.','Il était ingénieur.'],['Она режет хлеб ножом.','Elle coupe le pain avec un couteau.']],
   quiz:[
     {q:'Comment dit-on "j\'écris avec un stylo" (sans préposition) ?', o:['Я пишу с ручкой','Я пишу ручкой','Я пишу ручку'], a:1},
     {q:'Quelle préposition utilise-t-on pour la compagnie ("avec quelqu\'un") ?', o:['в','на','с'], a:2},
     {q:'Comment dit-on "nous voyageons en train" ?', o:['Мы едем с поездом','Мы едем поезда','Мы едем поездом'], a:2},
     {q:'"Он был врачом" signifie :', o:['Il est médecin maintenant','Il était médecin (à une époque donnée)','Il sera médecin'], a:1},
     {q:'Pour exprimer le moyen de transport, faut-il une préposition ?', o:['Oui, toujours "с"','Non, l\'instrumental seul suffit','Oui, toujours "на"'], a:1}
   ]},
  {id:'but-chtoby', title:'Exprimer le but : чтобы + infinitif', level:'Structure', cefr:'A2', cases:[],
   content:`«Чтобы» introduit une proposition de but, équivalente à «pour que / afin de» en français, et se construit différemment selon que le sujet est le même dans les deux propositions ou non.

Si le SUJET EST LE MÊME dans les deux propositions, «чтобы» est suivi de l'INFINITIF : Я учу русский, чтобы говорить с друзьями. (J'apprends le russe pour parler avec mes amis.)

Si le SUJET CHANGE entre les deux propositions, «чтобы» est suivi du PASSÉ (jamais du présent, même si le sens est futur) : Я говорю медленно, чтобы ты понял. (Je parle lentement pour que tu comprennes.) — remarque «понял» est au passé bien que l'action n'ait pas encore eu lieu au moment où l'on parle.

Cette règle du passé après «чтобы» avec changement de sujet est purement grammaticale et ne signifie pas que l'action est déjà accomplie.

⚠ Point de vigilance : ne mets jamais le verbe au présent après «чтобы» quand le sujet change — c'est une erreur fréquente chez les francophones qui traduisent littéralement "pour que tu comprennes" en cherchant un équivalent du subjonctif présent français, alors que le russe exige ici le passé.`,
   examples:[['Я работаю, чтобы зарабатывать деньги.','Je travaille pour gagner de l\'argent.'],['Он говорит громко, чтобы все услышали.','Il parle fort pour que tout le monde entende.'],['Мы пришли рано, чтобы занять места.','Nous sommes venus tôt pour prendre des places.'],['Я звоню, чтобы узнать новости.','J\'appelle pour avoir des nouvelles.'],['Она написала письмо, чтобы он не волновался.','Elle a écrit une lettre pour qu\'il ne s\'inquiète pas.']],
   quiz:[
     {q:'Quand le sujet est le même dans les deux propositions, "чтобы" est suivi de :', o:['L\'infinitif','Le passé','Le présent'], a:0},
     {q:'Quand le sujet change, "чтобы" est suivi de :', o:['L\'infinitif','Le passé','Le futur'], a:1},
     {q:'Dans "чтобы ты понял", pourquoi le passé est-il utilisé alors que rien n\'est encore arrivé ?', o:['C\'est une règle purement grammaticale après changement de sujet','Parce que l\'action a déjà eu lieu','C\'est une erreur du texte'], a:0},
     {q:'Comment dit-on "j\'apprends le russe pour parler avec mes amis" ?', o:['Я учу русский, чтобы говорю с друзьями','Я учу русский, чтобы говорить с друзьями','Я учу русский, чтобы говорил с друзьями'], a:1},
     {q:'"Чтобы" exprime :', o:['La cause','Le but','La condition'], a:1}
   ]},
  {id:'verbes-perception', title:'Les verbes de perception : видеть/слышать + accusatif ou как', level:'Structure', cefr:'A2', cases:[],
   content:`Les verbes de perception «видеть» (voir) et «слышать» (entendre) se construisent soit directement avec l'accusatif, soit avec «как» (comment) suivi d'une proposition complète, selon ce que l'on veut exprimer.

Construction directe (accusatif simple) : Я вижу дерево (Je vois un arbre) — on perçoit simplement l'objet, sans action associée.

Construction avec «как» + proposition : Я вижу, как он идёт (Je vois qu'il marche / Je le vois marcher) — on perçoit une action en train de se dérouler ; le verbe qui suit «как» reste conjugué normalement (idet, et non un infinitif).

Cette seconde construction est très fréquente pour décrire ce que l'on observe en train de se produire : Я слышу, как она поёт (J'entends qu'elle chante / je l'entends chanter).

⚠ Point de vigilance : contrairement au français «je le vois marcher» (infinitif) ou «je le vois qui marche», le russe utilise «как» + verbe conjugué, jamais l'infinitif après «видеть»/«слышать» — ne traduis donc pas littéralement l'infinitif français.`,
   examples:[['Я вижу дом.','Je vois une maison.'],['Я вижу, как дети играют.','Je vois les enfants jouer.'],['Мы слышим музыку.','Nous entendons de la musique.'],['Мы слышим, как он поёт.','Nous l\'entendons chanter.'],['Она видела, как он ушёл.','Elle l\'a vu partir.']],
   quiz:[
     {q:'Comment dit-on "je le vois marcher" ?', o:['Я вижу его идти','Я вижу, как он идёт','Я вижу его идёт'], a:1},
     {q:'Après "как" dans cette construction, le verbe est :', o:['À l\'infinitif','Conjugué normalement','Toujours au passé'], a:1},
     {q:'"Я вижу дерево" (sans "как") exprime :', o:['Une action en train de se dérouler','La simple perception d\'un objet','Un souhait'], a:1},
     {q:'Comment dit-on "nous l\'entendons chanter" ?', o:['Мы слышим его петь','Мы слышим, как он поёт','Мы слышим он поёт'], a:1},
     {q:'Le russe traduit-il littéralement l\'infinitif français après "voir/entendre" ?', o:['Oui, toujours','Non, il utilise "как" + verbe conjugué','Seulement au passé'], a:1}
   ]},
  {id:'correlation-temps', title:'La corrélation temporelle : когда, пока, до того как, после того как', level:'Structure', cefr:'A2', cases:[],
   content:`Ces connecteurs temporels permettent de situer une action par rapport à une autre et exigent chacun une construction particulière.

«Когда» (quand) est le plus neutre et s'utilise dans la plupart des contextes : Когда я пришёл, она спала. (Quand je suis arrivé, elle dormait.)

«Пока» (pendant que / tant que) insiste sur la simultanéité ou la durée : Пока ты готовишь, я накрою на стол. (Pendant que tu cuisines, je mettrai la table.) — au sens négatif «пока не» signifie «jusqu'à ce que» : Жди, пока я не вернусь (Attends jusqu'à ce que je revienne).

«До того как» (avant que) introduit une action antérieure : До того как он ушёл, мы поговорили. (Avant qu'il ne parte, nous avons parlé.)

«После того как» (après que) introduit une action postérieure : После того как она поела, она ушла. (Après avoir mangé, elle est partie.)

⚠ Point de vigilance : «пока не» (jusqu'à ce que) contient une négation «не» qui n'a pas de valeur négative en français — ne traduis pas «жди, пока я не вернусь» par «attends que je ne revienne pas», mais bien «attends jusqu'à ce que je revienne».`,
   examples:[['Когда я пришёл, она спала.','Quand je suis arrivé, elle dormait.'],['Пока ты готовишь, я отдыхаю.','Pendant que tu cuisines, je me repose.'],['Жди меня, пока я не вернусь.','Attends-moi jusqu\'à ce que je revienne.'],['До того как мы ушли, мы позвонили.','Avant de partir, nous avons appelé.'],['После того как он поел, он лёг спать.','Après avoir mangé, il s\'est couché.']],
   quiz:[
     {q:'"Пока" exprime en général :', o:['L\'antériorité','La simultanéité ou la durée','La postériorité'], a:1},
     {q:'"Пока не" signifie :', o:['Jamais','Jusqu\'à ce que','Avant que'], a:1},
     {q:'"До того как" introduit une action :', o:['Antérieure à l\'autre','Postérieure à l\'autre','Simultanée'], a:0},
     {q:'"После того как" introduit une action :', o:['Antérieure','Postérieure','Hypothétique'], a:1},
     {q:'La négation dans "пока не вернусь" signifie-t-elle une négation réelle en français ?', o:['Oui, "que je ne revienne pas"','Non, c\'est une tournure figée sans valeur négative en français','Oui, toujours'], a:1}
   ]},
  {id:'obligation-dolzhen', title:'Exprimer l\'obligation : должен, нужно, надо', level:'Structure', cefr:'A2', cases:[],
   content:`Le russe distingue plusieurs façons d'exprimer l'obligation, selon qu'elle porte sur une personne précise ou reste impersonnelle.

«Должен» (masc.) / должна (fém.) / должно (neutre) / должны (pluriel) s'accorde avec le sujet et exprime une obligation personnelle, souvent morale ou liée à un engagement : Я должен позвонить маме. (Je dois appeler maman.)

«Нужно» et «надо» sont impersonnels et invariables ; le sujet qui ressent l'obligation se met au DATIF : Мне нужно идти. / Мне надо идти. (Je dois partir — littéralement "à moi il est nécessaire de partir.")

«Нужно» est légèrement plus neutre/formel, «надо» plus courant à l'oral, mais les deux sont largement interchangeables dans la conversation quotidienne.

⚠ Point de vigilance : avec «нужно»/«надо», ne mets jamais le sujet au nominatif — on dit «мне надо» (à moi il faut) et non «я надо» ; le pronom se met systématiquement au datif (мне, тебе, ему, ей, нам, вам, им).`,
   examples:[['Я должен работать завтра.','Je dois travailler demain.'],['Она должна позвонить врачу.','Elle doit appeler le médecin.'],['Мне нужно идти домой.','Je dois rentrer à la maison.'],['Нам надо купить хлеб.','Nous devons acheter du pain.'],['Тебе нужно отдохнуть.','Tu dois te reposer.']],
   quiz:[
     {q:'Comment dit-on "je dois" (masculin, obligation personnelle) ?', o:['я нужно','я должен','я надо'], a:1},
     {q:'Avec "нужно"/"надо", à quel cas se met le sujet ?', o:['Nominatif','Datif','Accusatif'], a:1},
     {q:'Comment dit-on "je dois partir" avec "надо" ?', o:['Я надо идти','Мне надо идти','Меня надо идти'], a:1},
     {q:'"Должен" s\'accorde-t-il avec le sujet ?', o:['Oui, en genre et en nombre','Non, il est invariable','Seulement au pluriel'], a:0},
     {q:'"Нужно" et "надо" sont-ils interchangeables à l\'oral ?', o:['Non, jamais','Oui, largement, avec une nuance de registre','Seulement au passé'], a:1}
   ]},
  {id:'style-indirect-passe', title:'Le style indirect au passé', level:'Structure', cefr:'A2', cases:[],
   content:`Contrairement au français, le russe ne procède PAS à une concordance des temps quand on rapporte les paroles de quelqu'un — le verbe garde le même temps qu'il aurait eu dans le discours direct.

Discours direct : Он сказал: «Я работаю». (Il a dit : « Je travaille ».)
Discours indirect en russe : Он сказал, что он работает. (littéralement "Il a dit qu'il travaille") — le présent est conservé, alors qu'en français on dirait "il a dit qu'il travaillait" (imparfait).

De même pour le futur : Он сказал: «Я приду». → Он сказал, что он придёт. (Il a dit qu'il viendrait) — le futur russe reste au futur, contrairement au français qui utilise le conditionnel.

⚠ Point de vigilance : c'est une des différences les plus contre-intuitives pour un francophone — ne fais jamais reculer le temps du verbe dans le discours indirect russe ; le temps rapporté reste exactement celui du discours direct d'origine, qu'il s'agisse du présent ou du futur.`,
   examples:[['Он сказал, что он занят.','Il a dit qu\'il était occupé (littéralement : qu\'il est occupé).'],['Она сказала, что придёт завтра.','Elle a dit qu\'elle viendrait demain (littéralement : viendra).'],['Они сказали, что не понимают.','Ils ont dit qu\'ils ne comprenaient pas (littéralement : ne comprennent pas).'],['Он спросил, где я живу.','Il a demandé où j\'habitais (littéralement : où j\'habite).'],['Я думал, что она права.','Je pensais qu\'elle avait raison (littéralement : qu\'elle a raison).']],
   quiz:[
     {q:'Le russe applique-t-il une concordance des temps comme le français ?', o:['Oui, systématiquement','Non, le temps du discours direct est conservé','Seulement au futur'], a:1},
     {q:'"Он сказал, что он работает" se traduit en français par :', o:['Il a dit qu\'il travaille','Il a dit qu\'il travaillait','Il dira qu\'il travaille'], a:1},
     {q:'Au discours indirect rapportant un futur, le russe utilise :', o:['Le conditionnel, comme le français','Le futur, sans changement','Le passé'], a:1},
     {q:'Quelle est la principale difficulté pour un francophone sur ce point ?', o:['Ne pas reculer le temps du verbe comme on le ferait en français','Utiliser systématiquement le passé','Éviter "что"'], a:0},
     {q:'"Она сказала, что придёт завтра" utilise quel temps pour "придёт" ?', o:['Passé','Futur','Conditionnel'], a:1}
   ]},
  {id:'prefixes-verbaux-intro', title:'Les préfixes verbaux et le sens (по-, за-, вы-, при-)', level:'Verbes', cefr:'A2', cases:[],
   content:`Les préfixes ajoutés à un verbe imperfectif de base changent souvent son sens ET le rendent perfectif — comprendre les préfixes les plus courants aide à deviner le sens de nombreux verbes nouveaux.

«По-» ajoute souvent une nuance de "un peu, pendant un moment" ou marque simplement le perfectif d'un déplacement : идти → пойти (partir, se mettre à aller).

«За-» marque souvent le début d'une action : говорить → заговорить (se mettre à parler).

«Вы-» exprime fréquemment une idée de "sortie" ou l'achèvement complet d'une action : идти → выйти (sortir), учить → выучить (apprendre entièrement, par cœur).

«При-» exprime l'arrivée, l'approche : идти → прийти (arriver, venir), ехать → приехать (arriver en véhicule).

Ces préfixes s'appliquent à de nombreux verbes de base avec une logique de sens assez régulière, ce qui permet souvent de déduire le sens d'un verbe préfixé inconnu à partir du verbe simple.

⚠ Point de vigilance : un même préfixe n'a pas toujours exactement le même effet de sens sur tous les verbes — utilise cette lecture comme un guide de déduction utile, pas comme une règle mathématique absolue ; le sens précis de chaque verbe préfixé s'apprend aussi par la pratique et la lecture.`,
   examples:[['Я пойду домой.','Je vais rentrer à la maison.'],['Он вдруг заговорил по-русски.','Il s\'est soudain mis à parler russe.'],['Она вышла из комнаты.','Elle est sortie de la pièce.'],['Я выучил все слова.','J\'ai appris tous les mots par cœur.'],['Гости приехали вечером.','Les invités sont arrivés le soir.']],
   quiz:[
     {q:'Que marque souvent le préfixe "за-" ?', o:['La fin d\'une action','Le début d\'une action','La répétition'], a:1},
     {q:'Que marque souvent le préfixe "при-" ?', o:['Le départ','L\'arrivée','La sortie'], a:1},
     {q:'"Выучить" (préfixe вы-) exprime plutôt :', o:['Apprendre un peu','Apprendre entièrement, par cœur','Ne pas apprendre'], a:1},
     {q:'Le sens d\'un préfixe est-il rigoureusement identique sur tous les verbes ?', o:['Oui, toujours','Non, c\'est un guide utile mais avec des nuances selon les verbes','Les préfixes n\'ont aucun sens'], a:1},
     {q:'"Прийти" (при- + идти) signifie :', o:['Partir','Arriver, venir','Sortir'], a:1}
   ]},
  {id:'adjectifs-courts', title:'Les adjectifs courts (краткая форма)', level:'Structure', cefr:'A2', cases:[],
   content:`En plus de leur forme longue habituelle (используемая comme épithète avant le nom), de nombreux adjectifs ont une forme courte, utilisée uniquement comme attribut après «быть» (explicite ou sous-entendu), pour exprimer un état plutôt qu'une qualité permanente.

Forme longue : Она красивая. (Elle est belle — qualité générale, permanente.)
Forme courte : Она готова. (Elle est prête — état ponctuel, temporaire.)

La forme courte se forme en retirant la terminaison de l'adjectif long : готовый → готов (masc.) / готова (fém.) / готово (neutre) / готовы (pluriel). De même : рад (content, seulement à la forme courte, il n'y a pas de forme longue "радый" utilisée) : Я рад тебя видеть (Je suis content de te voir).

Certains adjectifs comme «рад» (content) et «должен» (devoir) n'existent pratiquement qu'à la forme courte dans l'usage courant.

⚠ Point de vigilance : la forme courte exprime souvent un état temporaire/circonstanciel alors que la forme longue exprime une qualité stable — «она больна» (elle est malade, en ce moment) contre «она больная» (qui pourrait sonner comme "c'est une malade", une qualité plus permanente et parfois péjorative) ; en cas de doute pour un état ponctuel, préfère la forme courte.`,
   examples:[['Я рад тебя видеть.','Je suis content de te voir.'],['Она готова к экзамену.','Elle est prête pour l\'examen.'],['Дверь закрыта.','La porte est fermée.'],['Мы согласны с тобой.','Nous sommes d\'accord avec toi.'],['Он болен сегодня.','Il est malade aujourd\'hui.']],
   quiz:[
     {q:'La forme courte d\'un adjectif exprime plutôt :', o:['Une qualité permanente','Un état ponctuel ou circonstanciel','Le pluriel'], a:1},
     {q:'Comment forme-t-on la forme courte féminine de "готовый" ?', o:['готово','готова','готовый'], a:1},
     {q:'"Рад" a-t-il couramment une forme longue utilisée ?', o:['Oui, très courante','Non, il s\'utilise presque toujours à la forme courte','Seulement au pluriel'], a:1},
     {q:'Comment dit-on "la porte est fermée" (état, forme courte) ?', o:['Дверь закрытая','Дверь закрыта','Дверь закрыть'], a:1},
     {q:'La forme courte s\'utilise :', o:['Seulement avant le nom','Comme attribut, après "être" explicite ou sous-entendu','Jamais dans une phrase simple'], a:1}
   ]},
  {id:'age-dates', title:'Exprimer l\'âge et les dates (années, mois)', level:'Cas', cefr:'A2', cases:['datif','genitif'],
   content:`Pour exprimer l'âge, le russe utilise le DATIF de la personne et le nombre suivi de год/года/лет selon la règle des nombres (1 → год, 2-4 → года, 5+ → лет).

Мне двадцать лет. (J'ai vingt ans — littéralement "à moi vingt ans".) Ей три года. (Elle a trois ans.) Ему один год. (Il a un an.)

Pour les DATES complètes (jour + mois + année), le jour et le mois se mettent au GÉNITIF, et on utilise un ordinal pour le jour : Я родился пятого мая тысяча девятьсот девяносто пятого года. (Je suis né le cinq mai mille neuf cent quatre-vingt-quinze — littéralement "du cinquième [jour] de mai, de l'année mille neuf cent quatre-vingt-quinze".)

Pour dire simplement "en telle année", on utilise «в + prépositionnel» : в две тысячи двадцать четвёртом году (en deux mille vingt-quatre).

⚠ Point de vigilance : l'année dans une date complète se met au GÉNITIF (l'année de quel jour/mois), mais quand on dit "en telle année" seule, elle se met au PRÉPOSITIONNEL avec «в» — ce sont deux constructions différentes à ne pas confondre.`,
   examples:[['Мне двадцать пять лет.','J\'ai vingt-cinq ans.'],['Сколько тебе лет?','Quel âge as-tu ?'],['Она родилась в тысяча девятьсот девяностом году.','Elle est née en mille neuf cent quatre-vingt-dix.'],['Мы поженились пятого июня.','Nous nous sommes mariés le cinq juin.'],['Ему исполнилось тридцать лет.','Il a eu trente ans (il vient d\'atteindre trente ans).']],
   quiz:[
     {q:'Quel cas exprime la personne dont on donne l\'âge ?', o:['Nominatif','Datif','Accusatif'], a:1},
     {q:'Après "двадцать" (20), utilise-t-on "год", "года" ou "лет" ?', o:['год','года','лет'], a:2},
     {q:'Dans une date complète, à quel cas se met l\'année ?', o:['Génitif','Prépositionnel','Nominatif'], a:0},
     {q:'Pour dire "en telle année" (seule), on utilise :', o:['в + génitif','в + prépositionnel','на + accusatif'], a:1},
     {q:'Comment dit-on "j\'ai trois ans" ?', o:['Мне три год','Мне три года','Мне три лет'], a:1}
   ]},
  {id:'pronoms-indefinis', title:'Les pronoms indéfinis (кто-то, что-нибудь, кое-что)', level:'Structure', cefr:'A2', cases:[],
   content:`Le russe forme des pronoms indéfinis (quelqu'un, quelque chose...) en ajoutant un suffixe à кто (qui) et что (quoi), et chaque suffixe apporte une nuance précise.

«-то» indique une existence certaine mais non précisée : кто-то позвонил (quelqu'un a appelé — j'ai entendu, mais je ne sais pas qui) ; что-то случилось (quelque chose est arrivé).

«-нибудь» indique une indétermination plus large, souvent dans une question, une condition, ou avec un sens de "n'importe qui/quoi" : Ты видел кого-нибудь? (Tu as vu quelqu'un ? — n'importe qui) ; Дай мне что-нибудь поесть (Donne-moi quelque chose à manger, peu importe quoi).

«Кое-» indique que le locuteur connaît l'identité mais préfère ne pas la préciser : Кое-кто мне сказал... (Quelqu'un [que je connais bien] m'a dit...).

⚠ Point de vigilance : «-то» s'utilise surtout dans les phrases affirmatives sur un fait déjà survenu, tandis que «-нибудь» s'utilise dans les questions, les ordres, les conditions et le futur — ne les confonds pas : «кто-то пришёл» (quelqu'un est venu, affirmation) contre «если кто-нибудь придёт» (si quelqu'un vient, condition).`,
   examples:[['Кто-то стучит в дверь.','Quelqu\'un frappe à la porte.'],['Ты хочешь что-нибудь съесть?','Tu veux manger quelque chose ?'],['Что-то случилось вчера.','Quelque chose est arrivé hier.'],['Если кто-нибудь спросит, скажи правду.','Si quelqu\'un demande, dis la vérité.'],['Кое-кто уже знает об этом.','Quelqu\'un (que je connais) est déjà au courant.']],
   quiz:[
     {q:'Quel suffixe indique une existence certaine mais non précisée ?', o:['-нибудь','-то','кое-'], a:1},
     {q:'Quel suffixe s\'utilise typiquement dans les questions et conditions ?', o:['-то','-нибудь','Aucun des deux'], a:1},
     {q:'"Кое-кто" indique que le locuteur :', o:['Ne sait vraiment pas qui c\'est','Connaît l\'identité mais préfère ne pas la préciser','Parle de plusieurs personnes'], a:1},
     {q:'Comment dit-on "quelqu\'un a appelé" (fait constaté) ?', o:['Кто-нибудь позвонил','Кто-то позвонил','Кое-то позвонил'], a:1},
     {q:'Comment dit-on "si quelqu\'un vient" (condition) ?', o:['если кто-то придёт','если кто-нибудь придёт','если кое-кто придёт'], a:1}
   ]},
  {id:'datif-impersonnel', title:'Le datif dans les constructions impersonnelles (мне нужно, мне холодно)', level:'Cas', cefr:'A2', cases:['datif'],
   content:`De nombreuses phrases russes exprimant un ressenti, un besoin ou un état n'ont pas de sujet au nominatif : la personne concernée se met au DATIF, et le reste de la phrase (souvent un adverbe en -о) reste invariable.

Ressenti physique : Мне холодно. (J'ai froid — littéralement "à moi froid".) Мне жарко. (J'ai chaud.) Ему больно. (Il a mal.)

État psychologique : Мне скучно. (Je m'ennuie.) Ей грустно. (Elle est triste.) Нам весело. (Nous nous amusons.)

Nécessité déjà vue : Мне нужно / надо идти. (Je dois partir.)

Possibilité/impossibilité : Мне можно войти? (Puis-je entrer ?) Тебе нельзя курить здесь. (Tu n'as pas le droit de fumer ici.)

⚠ Point de vigilance : dans toutes ces constructions, il n'y a jamais de sujet au nominatif équivalent au «je» français — ne cherche pas à traduire littéralement «je suis triste» par un adjectif accordé au nominatif ; utilise systématiquement [personne au datif] + [adverbe/mot d'état invariable].`,
   examples:[['Мне холодно.','J\'ai froid.'],['Ей грустно сегодня.','Elle est triste aujourd\'hui.'],['Нам весело здесь.','Nous nous amusons bien ici.'],['Тебе можно позвонить позже?','Tu peux (on peut te) appeler plus tard ?'],['Ему нельзя есть сладкое.','Il n\'a pas le droit de manger sucré.']],
   quiz:[
     {q:'Dans "мне холодно", à quel cas est "мне" ?', o:['Nominatif','Datif','Accusatif'], a:1},
     {q:'Comment dit-on "je m\'ennuie" ?', o:['Я скучный','Мне скучно','Меня скучно'], a:1},
     {q:'Ces constructions ont-elles un sujet au nominatif équivalent à "je" ?', o:['Oui, toujours','Non, jamais dans ce type de construction','Seulement au passé'], a:1},
     {q:'Comment dit-on "il a mal" ?', o:['Он больно','Ему больно','Его больно'], a:1},
     {q:'Comment dit-on "tu n\'as pas le droit de fumer ici" ?', o:['Тебе нельзя курить здесь','Ты нельзя курить здесь','Тебя нельзя курить здесь'], a:0}
   ]},
  {id:'participes-passifs', title:'Les participes passifs (formation et emploi)', level:'Lecture avancée', cefr:'B1', cases:[],
   content:`Le participe passif correspond au français «-é» (fait, écrit, lu) et sert à exprimer qu'un objet subit une action. Il est extrêmement fréquent dans la presse et les textes officiels.

Le participe passif COURT (utilisé comme attribut, avec accord en genre/nombre uniquement, jamais en cas) se forme souvent en -н/-ен/-т à partir du radical du perfectif : написать → написан/написана/написано/написаны (écrit) : Письмо написано. (La lettre est écrite.)

Le participe passif LONG (utilisé comme épithète avant le nom, décliné en genre/nombre/cas comme un adjectif) ajoute -ый/-ая/-ое/-ые : написанный текст (le texte écrit), закрытый магазин (le magasin fermé).

Le participe passif exprime presque toujours le résultat d'une action perfective, et remplace souvent une proposition relative passive : «книга, написанная автором» (le livre écrit par l'auteur) équivaut à «книга, которая была написана автором».

⚠ Point de vigilance : ne confonds pas la forme courte (attribut, invariable en cas, «письмо написано») et la forme longue (épithète, déclinée comme un adjectif complet, «написанный текст») — elles ne sont pas interchangeables dans la phrase : la forme courte ne s'utilise jamais directement devant le nom qu'elle qualifie.`,
   examples:[['Письмо уже написано.','La lettre est déjà écrite.'],['Магазин закрыт сегодня.','Le magasin est fermé aujourd\'hui.'],['Это написанный им роман.','C\'est le roman écrit par lui.'],['Дверь была открыта.','La porte était ouverte.'],['Задание выполнено вовремя.','Le devoir a été fait à temps.']],
   quiz:[
     {q:'Le participe passif exprime en général :', o:['Une action en cours','Le résultat d\'une action, subie par l\'objet','Une intention future'], a:1},
     {q:'La forme courte du participe passif s\'accorde en :', o:['Genre et nombre uniquement','Genre, nombre et cas','Rien, elle est invariable'], a:0},
     {q:'Où se place la forme longue du participe passif ?', o:['Après le nom, comme attribut','Avant le nom, comme épithète déclinée','Elle ne s\'utilise jamais avec un nom'], a:1},
     {q:'"Письмо написано" utilise quelle forme ?', o:['Longue','Courte','Aucune des deux'], a:1},
     {q:'"Книга, написанная автором" équivaut à quelle proposition relative ?', o:['Книга, которая пишет автора','Книга, которая была написана автором','Книга, которая напишет автора'], a:1}
   ]},
  {id:'cause-consequence', title:'L\'expression de la cause et de la conséquence', level:'Structure', cefr:'B1', cases:[],
   content:`Le russe dispose de plusieurs connecteurs pour exprimer la cause et la conséquence, avec des nuances de registre à connaître.

CAUSE : «потому что» (parce que) est neutre et le plus courant à l'oral comme à l'écrit : Я остался дома, потому что болел. (Je suis resté chez moi parce que j'étais malade.) «Так как» (étant donné que, puisque) est plus formel et se place souvent en tête de phrase : Так как шёл дождь, мы остались дома. (Puisqu'il pleuvait, nous sommes restés à la maison.) «Из-за того что» insiste sur une cause perçue négativement : Из-за того что он опоздал, мы пропустили поезд. (À cause du fait qu'il était en retard, nous avons raté le train.)

CONSÉQUENCE : «поэтому» (c'est pourquoi, donc) introduit la conséquence dans une deuxième phrase : Шёл дождь, поэтому мы остались дома. (Il pleuvait, c'est pourquoi nous sommes restés à la maison.) «Благодаря тому что» insiste sur une cause perçue positivement : Благодаря тому что он помог, мы успели. (Grâce au fait qu'il a aidé, nous avons réussi à temps.)

⚠ Point de vigilance : «из-за» et «благодаря» ne sont pas interchangeables malgré leur sens proche de "à cause de / grâce à" — «из-за» porte une connotation neutre à négative, tandis que «благодаря» porte presque toujours une connotation positive ; utiliser «благодаря» pour une cause négative sonnera étrange, voire ironique, à l'oreille d'un russophone.`,
   examples:[['Я опоздал, потому что попал в пробку.','Je suis arrivé en retard parce que j\'ai été pris dans les embouteillages.'],['Так как было поздно, мы вызвали такси.','Étant donné qu\'il était tard, nous avons appelé un taxi.'],['Из-за дождя матч отменили.','À cause de la pluie, le match a été annulé.'],['Она устала, поэтому легла спать рано.','Elle était fatiguée, c\'est pourquoi elle s\'est couchée tôt.'],['Благодаря твоей помощи всё получилось.','Grâce à ton aide, tout a réussi.']],
   quiz:[
     {q:'Quel connecteur de cause est le plus neutre et courant ?', o:['так как','потому что','из-за того что'], a:1},
     {q:'Quel connecteur introduit une conséquence ?', o:['поэтому','потому что','из-за'], a:0},
     {q:'"Благодаря" porte une connotation :', o:['Négative','Positive','Neutre, jamais marquée'], a:1},
     {q:'"Из-за" porte une connotation :', o:['Positive','Neutre à négative','Toujours joyeuse'], a:1},
     {q:'Peut-on utiliser "благодаря" pour une cause clairement négative sans que ce soit étrange ?', o:['Oui, sans problème','Non, cela sonnerait étrange ou ironique','Oui, c\'est la règle'], a:1}
   ]},
  {id:'concessives', title:'Les propositions concessives (хотя, несмотря на то что, даже если)', level:'Structure', cefr:'B1', cases:[],
   content:`Les propositions concessives expriment une opposition ou un contraste malgré lequel le fait principal se réalise quand même — l'équivalent de «bien que», «malgré», «même si» en français.

«Хотя» (bien que, quoique) est le plus courant et s'utilise avec un verbe conjugué normalement : Хотя было холодно, мы пошли гулять. (Bien qu'il fasse froid, nous sommes allés nous promener.)

«Несмотря на то что» (malgré le fait que) est plus formel et s'utilise aussi avec une proposition complète : Несмотря на то что он устал, он продолжил работать. (Malgré le fait qu'il était fatigué, il a continué à travailler.) Sa version simplifiée, «несмотря на» + nom au accusatif, s'utilise sans proposition : Несмотря на дождь, мы вышли. (Malgré la pluie, nous sommes sortis.)

«Даже если» (même si) introduit une condition concessive, souvent au futur ou au conditionnel : Даже если будет дождь, мы пойдём. (Même s'il pleut, nous irons.)

⚠ Point de vigilance : ne confonds pas «несмотря на то что» (+ proposition complète, verbe conjugué) et «несмотря на» (+ nom seul à l'accusatif, sans verbe) — la présence ou l'absence de «то что» détermine si tu dois construire une proposition entière ou simplement ajouter un groupe nominal.`,
   examples:[['Хотя было поздно, мы позвонили.','Bien qu\'il fût tard, nous avons appelé.'],['Несмотря на то что он занят, он помог мне.','Malgré le fait qu\'il soit occupé, il m\'a aidé.'],['Несмотря на дождь, матч состоялся.','Malgré la pluie, le match a eu lieu.'],['Даже если ты устал, приходи.','Même si tu es fatigué, viens.'],['Хотя я не согласен, я промолчал.','Bien que je ne sois pas d\'accord, je me suis tu.']],
   quiz:[
     {q:'Quel connecteur est suivi directement d\'un nom à l\'accusatif, sans verbe ?', o:['хотя','несмотря на','несмотря на то что'], a:1},
     {q:'"Несмотря на то что" est suivi de :', o:['Un nom seul','Une proposition complète avec verbe conjugué','Un infinitif'], a:1},
     {q:'"Даже если" introduit :', o:['Une cause','Une condition concessive','Une conséquence'], a:1},
     {q:'Comment dit-on "malgré la pluie" (sans verbe) ?', o:['несмотря на то что дождь','несмотря на дождь','хотя дождь'], a:1},
     {q:'"Хотя было холодно, мы пошли гулять" signifie :', o:['Parce qu\'il faisait froid, nous ne sommes pas sortis','Bien qu\'il fasse froid, nous sommes sortis quand même','Il ne faisait pas froid'], a:1}
   ]},
  {id:'nominalisation', title:'La nominalisation : substantifs verbaux en -ание/-ение/-ство', level:'Lecture avancée', cefr:'B1', cases:[],
   content:`Le russe forme très facilement des noms abstraits à partir de verbes, un procédé omniprésent dans la presse, les textes administratifs et académiques — savoir les reconnaître aide énormément en lecture.

Suffixe «-ание/-ение» (le plus courant, équivalent du français «-tion/-ment») : читать (lire) → чтение (la lecture), решить (décider) → решение (la décision), образовать (former) → образование (l'éducation, la formation), изменить (changer) → изменение (le changement).

Suffixe «-ство» (souvent pour des notions plus abstraites ou collectives) : общий (commun) → общество (la société), богатый (riche) → богатство (la richesse).

Ces noms permettent une écriture plus condensée et formelle qu'une proposition complète : au lieu de «то, что климат меняется» (le fait que le climat change), on écrira simplement «изменение климата» (le changement climatique) — un style beaucoup plus naturel en russe écrit soutenu.

⚠ Point de vigilance : en lecture, quand tu rencontres un nom long en -ание/-ение/-ство que tu ne connais pas, essaie de repérer le verbe ou l'adjectif dont il dérive (souvent en retirant le suffixe et en retrouvant l'infinitif en -ать/-ить/-еть) — cette stratégie de déduction fonctionne pour une grande partie du vocabulaire abstrait rencontré en B1.`,
   examples:[['Изменение климата беспокоит учёных.','Le changement climatique inquiète les scientifiques.'],['Его решение было неожиданным.','Sa décision a été inattendue.'],['Образование очень важно.','L\'éducation est très importante.'],['Общество меняется быстро.','La société change vite.'],['Чтение помогает изучать язык.','La lecture aide à apprendre une langue.']],
   quiz:[
     {q:'De quel verbe dérive "решение" (la décision) ?', o:['решать/решить','читать','делать'], a:0},
     {q:'"Образование" dérive de quel verbe ?', o:['образовать (former)','говорить','видеть'], a:0},
     {q:'Quel suffixe est souvent utilisé pour des notions collectives comme "société" ?', o:['-ание','-ство','-ость'], a:1},
     {q:'"Изменение климата" est une forme plus condensée de quelle proposition ?', o:['То, что климат меняется','Климат не меняется','Климат изменил'], a:0},
     {q:'Ces noms abstraits en -ание/-ение sont fréquents dans :', o:['Uniquement la langue parlée familière','La presse et les textes formels','Les seuls dialogues de film'], a:1}
   ]},
  {id:'irreel-passe', title:'Le conditionnel irréel du passé et les nuances de бы', level:'Structure', cefr:'B1', cases:[],
   content:`Le conditionnel avec «бы» s'utilise aussi pour exprimer un regret ou une hypothèse irréelle sur le passé, une nuance importante au-delà de son usage de base déjà vu.

Structure de base : [verbe au passé] + бы : Я сделал бы это. (Je ferais/j'aurais fait cela.) — la même forme sert à la fois pour le conditionnel présent et pour l'irréel du passé ; c'est le contexte qui permet de trancher.

Regret sur le passé : Если бы я знал, я бы пришёл. (Si j'avais su, je serais venu.) — notez que le verbe reste au passé imperfectif/perfectif selon le sens, jamais à un temps composé spécifique comme en français.

«Бы» peut aussi exprimer un souhait détaché de toute condition : Я хотел бы поехать в Россию. (Je voudrais aller en Russie.) — forme de politesse très fréquente, équivalente au conditionnel de politesse français.

⚠ Point de vigilance : le russe ne distingue pas formellement, par la grammaire, le conditionnel présent de l'irréel du passé — «я сделал бы это» peut signifier «je ferais cela» (maintenant) ou «j'aurais fait cela» (dans le passé) ; seul le contexte de la phrase (souvent introduit par «если бы» + circonstance passée) permet de savoir lequel des deux sens est visé.`,
   examples:[['Если бы я знал, я бы помог.','Si j\'avais su, j\'aurais aidé.'],['Я хотел бы задать вопрос.','Je voudrais poser une question.'],['Она сделала бы это иначе.','Elle aurait fait cela autrement / elle ferait cela autrement.'],['Если бы не дождь, мы бы пошли гулять.','S\'il n\'y avait pas eu la pluie, nous serions allés nous promener.'],['Мы хотели бы остаться дольше.','Nous voudrions rester plus longtemps.']],
   quiz:[
     {q:'La structure du conditionnel avec "бы" distingue-t-elle formellement le présent et l\'irréel du passé ?', o:['Oui, deux formes différentes existent','Non, la même forme sert aux deux, le contexte tranche','Seulement au pluriel'], a:1},
     {q:'Comment dit-on "je voudrais" (forme de politesse) ?', o:['я хочу бы','я хотел бы','я хотел бы бы'], a:1},
     {q:'"Если бы я знал, я бы пришёл" signifie :', o:['Si je sais, je viens','Si j\'avais su, je serais venu','Je saurai et je viendrai'], a:1},
     {q:'À quel temps se met le verbe avec "бы" ?', o:['Toujours au présent','Toujours au passé','Au futur uniquement'], a:1},
     {q:'Que faut-il pour savoir si "бы" exprime un conditionnel présent ou un irréel du passé ?', o:['Rien, c\'est toujours le présent','Le contexte de la phrase','La position du mot dans la phrase'], a:1}
   ]},
  {id:'tournures-impersonnelles-avancees', title:'Les tournures impersonnelles avancées (говорят, что; принято считать; кажется, что)', level:'Structure', cefr:'B1', cases:[],
   content:`Ces tournures impersonnelles permettent d'exprimer une opinion générale, une rumeur ou une impression sans désigner de sujet précis — très utiles pour nuancer un propos, notamment en lecture d'articles.

«Говорят, что...» (On dit que..., il paraît que...) rapporte une rumeur ou une opinion répandue sans source précise : Говорят, что зима будет холодной. (On dit que l'hiver sera froid.)

«Принято считать, что...» (Il est communément admis que..., on considère généralement que...) introduit une opinion largement partagée, plus formelle : Принято считать, что этот метод эффективен. (Il est communément admis que cette méthode est efficace.)

«Кажется, что...» (Il semble que...) exprime une impression subjective, souvent nuancée d'incertitude : Кажется, что он прав. (Il semble qu'il ait raison.) — au datif, «мне кажется, что» (il me semble que) permet d'attribuer cette impression à soi-même : Мне кажется, что это ошибка. (Il me semble que c'est une erreur.)

⚠ Point de vigilance : ces trois tournures introduisent toutes une proposition avec «что» + sujet + verbe conjugué normalement — ne cherche pas à mettre le verbe qui suit à l'infinitif ou dans une forme spéciale, la proposition subordonnée après «что» fonctionne comme une phrase complète autonome.`,
   examples:[['Говорят, что этот фильм очень хороший.','On dit que ce film est très bon.'],['Принято считать, что чтение полезно.','Il est communément admis que la lecture est utile.'],['Мне кажется, что она права.','Il me semble qu\'elle a raison.'],['Кажется, что скоро пойдёт снег.','Il semble qu\'il va bientôt neiger.'],['Говорят, что он уехал за границу.','On dit qu\'il est parti à l\'étranger.']],
   quiz:[
     {q:'"Говорят, что..." sert à :', o:['Affirmer un fait certain et vérifié','Rapporter une rumeur ou une opinion répandue','Poser une question'], a:1},
     {q:'"Принято считать, что..." est plutôt :', o:['Familier et incertain','Formel, exprimant une opinion largement partagée','Une insulte'], a:1},
     {q:'"Мне кажется, что..." exprime :', o:['Un fait certain','Une impression subjective, nuancée d\'incertitude','Un ordre'], a:1},
     {q:'Après ces tournures, comment est construite la suite de la phrase ?', o:['Avec "что" + proposition complète conjuguée normalement','Avec un infinitif','Avec un participe uniquement'], a:0},
     {q:'Comment dit-on "il me semble que c\'est une erreur" ?', o:['Я кажется, что это ошибка','Мне кажется, что это ошибка','Мне кажется это ошибку'], a:1}
   ]},
  {id:'registre-lexical', title:'Registre soutenu vs familier : variantes lexicales', level:'Lecture avancée', cefr:'B1', cases:[],
   content:`En B1, il devient utile de reconnaître qu'un même sens peut s'exprimer par des mots très différents selon le registre — familier à l'oral entre amis, ou soutenu à l'écrit et dans les contextes formels.

Pour «maison/appartement» : квартира (neutre, standard) reste identique dans tous les registres, mais пожить/жить au sens de "habiter" a un équivalent plus soutenu, «проживать», utilisé dans les documents administratifs : Он проживает по адресу... (Il réside à l'adresse...) contre l'oral courant «Он живёт на улице...».

Pour «parler» : говорить (neutre) contre le très familier «трепаться/болтать» (bavarder, papoter) qu'on n'utilisera jamais dans un contexte formel.

Pour «travail» : работа (neutre, courant) contre «трудовая деятельность» (activité professionnelle), tournure typique des documents officiels et CV.

⚠ Point de vigilance : en lecture d'articles de presse ou de textes administratifs, attends-toi à rencontrer un vocabulaire plus soutenu et souvent nominalisé (voir la leçon sur la nominalisation) que celui appris en conversation quotidienne — élargir ton vocabulaire passif dans ce registre soutenu est aussi important que le vocabulaire actif oral.`,
   examples:[['Он проживает в Москве.','Il réside à Moscou (registre administratif).'],['Он живёт в Москве.','Il habite à Moscou (registre neutre).'],['Мы просто болтали весь вечер.','Nous avons juste papoté toute la soirée (familier).'],['Трудовая деятельность началась в 2010 году.','L\'activité professionnelle a commencé en 2010 (registre formel).'],['Давай перестанем трепаться и поработаем.','Arrêtons de bavarder et travaillons (très familier).']],
   quiz:[
     {q:'"Проживать" appartient à quel registre ?', o:['Très familier','Administratif/soutenu','Argotique'], a:1},
     {q:'"Болтать/трепаться" appartiennent à quel registre ?', o:['Soutenu','Familier','Officiel'], a:1},
     {q:'"Трудовая деятельность" est l\'équivalent soutenu de :', o:['Работа (travail)','Дом (maison)','Еда (nourriture)'], a:0},
     {q:'Pourquoi est-il utile de connaître ces variantes en B1 ?', o:['Pour éviter tout vocabulaire soutenu','Pour comprendre la presse et les documents formels','Ce n\'est pas utile'], a:1},
     {q:'"Квартира" (appartement) change-t-il selon le registre ?', o:['Oui, il a un équivalent très différent à l\'écrit','Non, il reste identique dans tous les registres','Oui, seulement au pluriel'], a:1}
   ]},
];
