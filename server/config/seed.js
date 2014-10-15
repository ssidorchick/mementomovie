/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model'),
    Profile = require('../api/profile/profile.model'),
    Movie = require('../api/movie/movie.model');

var populateUsers = function(cb) {
  User.find({}).remove(function() {
    User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@test.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@admin.com',
        password: 'admin'
      },
      cb
    );
  });
};

var populateProfiles = function(cb) {
  Profile.find({}).remove(function() {
    User.find().stream()
      .on('data', function(user) {
        this.pause();
        Profile.create({ userId: user._id }, function() {
          this.resume();
        }.bind(this));
      })
      .on('close', function() {
        cb();
      });
  });
};

var populateMovies = function(cb) {
  Movie.find({}).remove(function() {
    Movie.create(
      {
        "permalink": "pioneer",
        "name": "Pioneer",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/pioneer.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/pioneer.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/pioneer.jpg"
        },
        "pitch": "<p><strong>George Clooney</strong> produces this <strong>deep sea</strong>-set <strong>conspiracy thriller</strong></p>\n",
        "description": "<p><em>Pioneer</em> is a remake of the Norwegian conspiracy thriller of the same name. </p>\n\n<p>The original is set in the beginning of the 1980s, when the Norwegian oil boom led to unforeseen prosperity in the country. Responsible for the boom was discovering large oil and gas resources at the bottom of the North Sea. </p>\n\n<p>The movie centers on a pair of deep-sea diving brothers, who work for oil companies, testing whether pipelines can be installed in the great depth of the North Sea. When tragedy strikes, one of them finds himself in the midst of a vast conspiracy. </p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "9999-99-99-Estimated",
        "year": "9999"
      },
      {
        "permalink": "the-raven-boys",
        "name": "The Raven Boys",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/the_raven_boys.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/the_raven_boys.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/the_raven_boys.jpg"
        },
        "pitch": "<p>The <strong>dark</strong> YA novel about a <strong>clairvoyant girl</strong> and <strong>sinister gang</strong> of boys <strong>comes</strong> to the <strong>big screen!</strong></p>\n",
        "description": "<p>New Line Studio is set to adapt the YA novel <em>The Raven Boys</em> for the big screen. The story follows a teenage girl by the name of Blue Sargent, who is from a long line of clairvoyants and can predict when someone is close to death. Blue meets one such boy a rich but troubled private school student who belongs to a gang called The Raven Boys. In a bid to try and help him, Blue gets pulled into their sinister paranormal world.</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "9999-99-99-Estimated",
        "year": "9999"
      },
      {
        "permalink": "among-ravens",
        "name": "Among Ravens",
        "images": {
          "w380": "assets/images/w380/2014-07-18/among_ravens.jpg",
          "w600": "assets/images/w600/2014-07-18/among_ravens.jpg",
          "w920": "assets/images/w920/2014-07-18/among_ravens.jpg"
        },
        "pitch": "<p><strong>Johnny Sequoyah</strong> and <strong>Amy Smart</strong> headline this ensemble <strong>indie dramedy</strong> </p>\n",
        "description": "<p>Amy Smart (<em>The Butterfly Effect</em>, <em>Crank</em>) and Johnny Sequoyah, the star of Alfonso Cuarón&#39;s Believe, feature in this indie dramedy inspired by real events.</p>\n\n<p><em>Among Ravens</em> takes place during a weekend holiday, where a group of close friends and family gather for their annual meet-up. As they celebrate the fourth of July, a nature photographer (Will McCormack) begins to change the complex group dynamic. </p>\n\n<p>Told from the perspective of 10-year-old Joey (Johnny Sequoyah), <em>Among Ravens</em> explores how the group&#39;s unravelling friendships affect the young girl.</p>\n",
        "actors": [
          "Amy Smart",
          "Joshua Leonard",
          "Christian Campbell",
          "Russell Friedenberg",
          "Victoria Smurfit",
          "Natalie Imbruglia",
          "Will McCormack",
          "Johnny Sequoyah",
          "Castille Landon",
          "Vinnie Duyck"
        ],
        "directors": [
          "Russell Friedenberg"
        ],
        "theatrical_release_date": "2014-07-18",
        "year": "2014"
      },
      {
        "permalink": "the-feud",
        "name": "The Feud",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/the_feud.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/the_feud.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/the_feud.jpg"
        },
        "pitch": "<p><strong>The Conjuring</strong> writers pen adrenaline-charged <strong>Hong Kong</strong> action flick</p>\n",
        "description": "<p><em>The Feud</em> centers on two legendary Hong Kong clans caught up in an ancient conflict.</p>\n\n<p>The action thriller is penned by the talented writing duo behind the critically acclaimed horror movie, The Conjuring, Chad Hayes and Carey Hayes.</p>\n\n<p>Co-producer Mike Karz said:&#39; &#39;The Feud&#39; is an adrenaline-charged global action film, and the perfect addition to our growing repertoire.’</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "9999-99-99-Estimated",
        "year": "9999"
      },
      {
        "permalink": "leviathan--2",
        "name": "Leviathan",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/leviathan.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/leviathan.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/leviathan.jpg"
        },
        "pitch": "<p><strong>Social drama</strong> on human insecurities from the <strong>director</strong> of <strong>The Return</strong></p>\n",
        "description": "<p><em>Leviathan</em> illustrates a social microcosm of the world by presenting the human insecurities that rise in a &quot;new country.&quot; Encompassing multiple characters, the movie unravels to express the human condition when a dispute over land in an isolated Russian town causes a ripple effect of drama that effects the entire town&#39;s community.</p>\n\n<p>Andrey Zvyagintsev&#39;s debut feature <em>The Return</em> won the Golden Lion at the Venice Film Festival 2003, while <em>Leviathan</em> has been nominated for the Palme d&#39;Or at the Cannes Film Festival 2014.</p>\n",
        "actors": [
          "Vladimir Vdovichenkov",
          "Elena Lyadova",
          "Aleksey Serebryakov",
          "Anna Ukolova",
          "Roman Madyanov",
          "Alim Bidnenko",
          "Sergey Pokhodaev",
          "Kristina Pakarina",
          "Lesya Kudryashova"
        ],
        "directors": [
          "Andrey Zvyagintsev"
        ],
        "theatrical_release_date": "2015-99-99-Estimated",
        "year": "2015"
      },
      {
        "permalink": "maniac-cop-prequel",
        "name": "Maniac Cop Prequel",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/maniac_cop_prequel.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/maniac_cop_prequel.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/maniac_cop_prequel.jpg"
        },
        "pitch": "<p><strong>Nicolas Winding Refn</strong> to revive a <strong>franchise favorite</strong></p>\n",
        "description": "<p>Nicolas Winding Refn (<i>Drive</i>, <i>Bronson</i>) will produce and possibly direct a prequel to the 1988 cult horror film <i>Maniac Cop</i>. The original film starred Robert Z&#39;Dar as the titular lead, a horrendously psychotic cop committing random acts of bloody murder. Original director William Lustig and writer Larry Cohen are also on board as producers. </p>\n\n<p>Two sequels have followed the original film, including  (1990) and  (1993). </p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "9999-99-99-Estimated",
        "year": "9999"
      },
      {
        "permalink": "attila-marcel",
        "name": "Attila Marcel",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/attila_marcel.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/attila_marcel.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/attila_marcel.jpg"
        },
        "pitch": "<p>The first <strong>live-action</strong> film from the director of the wonderful <strong>Triplets of Belleville</strong></p>\n",
        "description": "<p>Paul (Guillaume Gouix) lost his memory as well as the ability to speak on the day he saw his parents die. Raised by his two eccentric aunts, who want nothing more than to see the wounded child become a famed piano player, Paul becomes and old man before his age. When he encounters  Mme. Proust (Anne Le Ny) he might finally be able to confront his past, as the lady is in possession of a herbal tea recipe that can bring back the most distant memories...</p>\n\n<p><em>Attila Marcel</em> is the first live-action feature film from French director Sylvain Chomet, who made the celebrated animation films <em>Triplets of Belleville</em> and <em>The Illusionist</em>. The filmmaker directed several not animated short films however, most prominetly a segment in the anthology film <em>Paris, je t&#39;aime</em>. </p>\n",
        "actors": [
          "Guillaume Gouix",
          "Anne Le Ny",
          "Hélène Vincent",
          "Bernadette Lafont",
          "Luis Rego",
          "Jean-Claude Dreyfus"
        ],
        "directors": [
          "Sylvain Chomet"
        ],
        "theatrical_release_date": "2014-99-99-Estimated",
        "year": "2014"
      },
      {
        "permalink": "lost-found",
        "name": "Lost & Found",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/lost_&_found.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/lost_&_found.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/lost_&_found.jpg"
        },
        "pitch": "<p><strong>About a Boy</strong>&#39;s Benjamin Stockham goes on a <strong>treasure hunt</strong> in <strong>family movie</strong> </p>\n",
        "description": "<p><em>Lost &amp; Found</em> is the exciting story of teenage brothers attempting to find a lost treasure, featuring About a Boy&#39;s Benjamin Stockham.</p>\n\n<p>While spending their vacation with their estranged uncle on a mysterious island, teenage brothers Mark (Benjamin Stockham) and Andy (Justin Kelly) discover that there may be a secret fortune hidden somewhere. The treasure is theirs for the taking, as long as they find it before their vacation ends...</p>\n\n<p><em>Lost &amp; Found</em> is the directorial debut of Joseph Itaya, who also wrote the script.</p>\n",
        "actors": [
          "Justin Kelly",
          "Benjamin Stockham",
          "Celeste Desjardin",
          "Greg Bryk",
          "Kim Selby",
          "Matt Connors",
          "Robert B. Kennedy",
          "Catherine McNally"
        ],
        "directors": [
          "Joseph Itaya"
        ],
        "theatrical_release_date": "2015-99-99-Estimated",
        "year": "2015"
      },
      {
        "permalink": "sisterhood-everlasting",
        "name": "Sisterhood Everlasting",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/sisterhood_everlasting.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/sisterhood_everlasting.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/sisterhood_everlasting.jpg"
        },
        "pitch": "<p>The <strong>next fun installment</strong> of <strong>Traveling Pants series</strong> </p>\n",
        "description": "<p>In an attempt to reunite her three best girlfriends aka the &quot;Sisterhood of the Traveling Pants,&quot; Tibby (Amber Tamblyn) arranges a live-changing trip for them. Will the old friends be able to bridge the distance?</p>\n\n<p>Ken Kwapis, who directed the first installment of the series, is back in the directing chair for part 3. The script by Liz Garcia (<em>Dawson&#39;s Creek</em>) is based on the popular novel <em>Sisterhood Everlasting</em> by <strong>Ann Brashares</strong>.  </p>\n",
        "actors": [
          "Amber Tamblyn",
          "Blake Lively",
          "America Ferrera",
          "Alexis Bledel"
        ],
        "directors": [
          "Ken Kwapis"
        ],
        "theatrical_release_date": "2015-99-99-Estimated",
        "year": "2015"
      },
      {
        "permalink": "casablanca-sequel",
        "name": "Casablanca Sequel",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/casablanca_sequel.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/casablanca_sequel.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/casablanca_sequel.jpg"
        },
        "pitch": "<p>Could cinema&#39;s most <strong>iconic couple</strong> be <strong>returning</strong> to the screen for a sequel?</p>\n",
        "description": "<p>Every line a memorable quote, every look an immortal shot, <em>Casablanca</em> is without a doubt one of the most quintessential films of the twentieth century. \nProducer Cass Warner, granddaughter to Warner Bros. co-founder Harry Warner, is looking to create a follow-up to cinema&#39;s most timeless romance.\nThe proposed sequel would be based on the story, &#39;Return to Casablanca,&#39; written in 1988 by one of the original film&#39;s writers, the late Howard Koch, and would follow the life of original protagonists Rick and Ilsa&#39;s son, Richard. </p>\n\n<p>Upon its release in 1942, <em>Casablanca</em> garnered the Best Picture, Director, and Screenplay Oscars and has been racking up accolades ever since, consistently topping critics&#39; lists of history&#39;s best. Spin-offs and continuations have been proposed throughout the years, and always turned down out of respect to the original.\nNeedless to say, the mere mention of a sequel stirs heated controversy with fans.\nGiven Cass and Koch&#39;s strong ties, both professional and familial, to the original film, we&#39;d say they might be the ones to do a sequel justice. Then again, if anything in Hollywood is too sacred to be touched, it is surely <em>Casablanca</em>. </p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "9999-99-99-Estimated",
        "year": "9999"
      },
      {
        "permalink": "the-magnificent-seven",
        "name": "The Magnificent Seven",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/the_magnificent_seven.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/the_magnificent_seven.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/the_magnificent_seven.jpg"
        },
        "pitch": "<p>The <strong>Magnificent Seven</strong> ride again in this star-studded <strong>remake</strong> of the 1960’s classic!</p>\n",
        "description": "<p><i>The Magnificent Seven</i> is a start-studded remake of the 1960 classic, in which seven gunfighters are assembled to help defend an oppressed Mexican peasant village.</p>\n\n<p>Writer, John Lee Hancock (Saving Mr. Banks), has been brought in to rework Nic Pizzolatto&#39;s (True Detective) screenplay for the rebooted action movie.</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "9999-99-99-Estimated",
        "year": "9999"
      },
      {
        "permalink": "hellboy-3",
        "name": "Hellboy 3",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/hellboy_3.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/hellboy_3.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/hellboy_3.jpg"
        },
        "pitch": "<p>The <strong>final</strong> installment of the <strong>Hellboy</strong> story where his <strong>true destiny</strong> is relieved!   </p>\n",
        "description": "<p>Guillermo del Toro has announced that he and Ron Perlman are together in trying to get <em>Hellboy 3</em> made. Perlman has emphasized the importance of the final installment, saying that,  &#39;Everything that was done in both movies was leading up to this destiny, written in stone, of what Hellboy has been summoned to Earth to do.&#39; Sadly, Guillermo del Toro doesn&#39;t seem very optimistic for the possibility of a third part, as no studio seems willing to shoulder the estimated production costs of $140 million. </p>\n",
        "actors": [
          "Ron Perlman"
        ],
        "directors": [
          "Guillermo del Toro"
        ],
        "theatrical_release_date": "9999-99-99-Estimated",
        "year": "9999"
      },
      {
        "permalink": "the-invisible-man",
        "name": "The Invisible Man",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/the_invisible_man.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/the_invisible_man.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/the_invisible_man.jpg"
        },
        "pitch": "<p><strong>H.G. Wells&#39;</strong> Invisible Man gets revamped à la <strong>Sherlock Holmes</strong></p>\n",
        "description": "<p>This adaptation of H.G. Wells eponymous classic follows Griffin, an optics scientist who discovers the secret to invisibility. When he uses himself as a guinea pig, he becomes permanently stuck in the invisible form. </p>\n\n<p>The long-gestating project has been on Universal Studio&#39;s back burner since 2007, when David S. Goyer was first attached to direct and pen the script. The writer has had a lot on his plate since with the adaptations of comic book blockbusters like <em>The Dark Knight Rises</em> and Man of Steel. He mentioned the project in December 2011, stating that,</p>\n\n<blockquote>\n<p>It’s still alive… Now we’re going through the casting process. If they get the right lead, they’ll make it.</p>\n</blockquote>\n\n<p>The novel has been adapted to television and film before, though Goyer said that this reinterpretation would feature the characters re-imagined in a larger-than-life setting in the vein of <em>Sherlock Holmes</em> with Robert Downey Jr.</p>\n\n<p>. </p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "9999-99-99-Estimated",
        "year": "9999"
      },
      {
        "permalink": "lawless--5",
        "name": "Lawless",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/lawless.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/lawless.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/lawless.jpg"
        },
        "pitch": "<p><strong>Bill Hader</strong> headlines <strong>highschool reunion comedy</strong> as over-motivated organizer</p>\n",
        "description": "<p><em>Lawless</em> centers on the head of a high school reunion committee (Bill Hader), who, determined to make this year&#39;s reunion the biggest and best ever, travels to Hollywood to try and\npersuade the former most popular guy in school - now a big movie star - to come back for the reunion.</p>\n\n<p>The indie comedy is written and directed by Andrew Mogel and Jarrad Paul, the dream team behind the script for the 2008 Jim Carrey movie, <em>Yes Man</em>.</p>\n\n<p><em>Lawless</em> was previously known under the title <em>20 Year Itch</em>. </p>\n",
        "actors": [
          "Bill Hader"
        ],
        "directors": [
          "Jarrad Paul",
          "Andrew Mogel"
        ],
        "theatrical_release_date": "2014-99-99-Estimated",
        "year": "2014"
      },
      {
        "permalink": "the-anomaly",
        "name": "The Anomaly",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/the_anomaly.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/the_anomaly.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/the_anomaly.jpg"
        },
        "pitch": "<p><strong>Source Code</strong>-esque <strong>terrorism thriller</strong> </p>\n",
        "description": "<p>Global terrorism is the hot topic at the heart of <em>The Anomaly</em>, which sees a confused ex-soldier awake in the back of a van alongside a kidnapped boy. Why is he there? How did he get there? He&#39;s only got 9 minutes and 30 seconds to find out. </p>\n\n<p>The thriller stars Ian Somerhalder (<em>The Vampire Diaries</em>) and Luke Hemsworth, big bro of Liam Hemsworth (<em>The Hunger Games</em>). </p>\n",
        "actors": [
          "Luke Hemsworth",
          "Ian Somerhalder",
          "Brian Cox",
          "Alexis Knapp",
          "Ali Cook",
          "Niall Greig Fulton",
          "Art Parkinson",
          "Michael Bisping",
          "Reuben Dabrow"
        ],
        "directors": [
          "Noel Clarke"
        ],
        "theatrical_release_date": "2014-99-99-Estimated",
        "year": "2014"
      },
      {
        "permalink": "da-sweet-blood-of-jesus",
        "name": "Da Sweet Blood of Jesus",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/da_sweet_blood_of_jesus.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/da_sweet_blood_of_jesus.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/da_sweet_blood_of_jesus.jpg"
        },
        "pitch": "<p><strong>Spike Lee</strong> makes a <strong>steamy</strong> non-vampire <strong>movie</strong> about the <strong>addiction to blood</strong></p>\n",
        "description": "<p><em>Da Sweet Blood of Jesus</em> marks Spike Lee&#39;s bloody, heartfelt and incredibly weird remake of <strong>Bill Gunn</strong>&#39;s 1973 blaxploitation movie <em>Ganja and Hess</em>.  </p>\n\n<p>Set mostly on a windswept Martha&#39;s Vineyard estate, the strange horror drama centers on Dr. Hess Greene (Stephen Tyrone Williams), a wealthy Academic looking into surgical Ashanti rites which invovle the draining of blood. When an intruder mortally wounds Hess, he performs those rites on himself and survives... with a thirst for BLOOD! </p>\n\n<p>Zaraah Abrahams plays Ganja, the ex-wife of Hess&#39; former assistant and the woman he falls for. </p>\n\n<p>Lee controversially took to Kickstarter to finance <em>Da Sweet Blood of Jesus</em>. </p>\n",
        "actors": [
          "Zaraah Abrahams",
          "Felicia Pearson",
          "Elvis Nolasco",
          "Stephen Tyrone Williams",
          "Rami Malek"
        ],
        "directors": [
          "Spike Lee"
        ],
        "theatrical_release_date": "2014-99-99-Estimated",
        "year": "2014"
      },
      {
        "permalink": "animal-farm",
        "name": "Animal Farm",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/animal_farm.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/animal_farm.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/animal_farm.jpg"
        },
        "pitch": "<p><strong>George Orwell&#39;s</strong> classic gets <strong>adaptation</strong> from  <strong>MO-CAP</strong> expert <strong>Andy Serkis</strong></p>\n",
        "description": "<p>In George Orwell&#39;s classic political satire, farm animals successfully overthrow their cruel human owner only to then fall into harsh oppression by their like: &#39;All animals are equal, but some animals are more equal than others...&#39;</p>\n\n<p>Andy Serkis (<em>Lord of the Rings</em>) will not only star in but also direct the project. Additionally, his production studio &#39;The Imaginarium&#39; will use the same Performance Capture technology they so succesfully applied in <em>Rise of the Planet of the Apes</em>. </p>\n",
        "actors": [
          "Andy Serkis"
        ],
        "directors": [
          "Andy Serkis"
        ],
        "theatrical_release_date": "2015-99-99-Estimated",
        "year": "2015"
      },
      {
        "permalink": "pawn-sacrifice",
        "name": "Pawn Sacrifice",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/pawn_sacrifice.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/pawn_sacrifice.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/pawn_sacrifice.jpg"
        },
        "pitch": "<p>The <strong>Rocky 4</strong> of <strong>chess</strong> with <strong>Elijah Wood</strong> as <strong>Bobby Fisher</strong></p>\n",
        "description": "<p><em>Pawn Sacrifice</em> is the true story of eccentric chess prodigy <strong>Bobby Fischer</strong> (Tobey Maguire) and his legendary match against his archrival, the seemingly invincible Soviet champion Boris Spassky (Liev Schreiber). </p>\n\n<p>The drama has been gestating for several years, with David Fincher once considering directing <em>Pawn Sacrifice</em>.  </p>\n",
        "actors": [
          "Tobey Maguire",
          "Liev Schreiber",
          "Peter Sarsgaard",
          "Lily Rabe",
          "Michael Stuhlbarg",
          "Robin Weigert",
          "Evelyne Brochu",
          "Seamus Davey-Fitzpatrick",
          "Andreas Apergis",
          "Aiden Lovekamp"
        ],
        "directors": [
          "Edward Zwick"
        ],
        "theatrical_release_date": "2014-99-99-Estimated",
        "year": "2014"
      },
      {
        "permalink": "popeye",
        "name": "Popeye",
        "images": {
          "w380": "assets/images/w380/2014-09-26/popeye.jpg",
          "w600": "assets/images/w600/2014-09-26/popeye.jpg",
          "w920": "assets/images/w920/2014-09-26/popeye.jpg"
        },
        "pitch": "<p><strong>Popeye</strong> the sailor man in <strong>eye popping 3D</strong> debut on the big screen!</p>\n",
        "description": "<p>The world’s most muscular sailor will eat his spinach on the big screen! In 3D! </p>\n",
        "actors": [],
        "directors": [
          "Genndy Tartakovsky"
        ],
        "theatrical_release_date": "2014-09-26",
        "year": "2014"
      },
      {
        "permalink": "the-good-dinosaur",
        "name": "The Good Dinosaur",
        "images": {
          "w380": "assets/images/w380/2015-11-25/the_good_dinosaur.jpg",
          "w600": "assets/images/w600/2015-11-25/the_good_dinosaur.jpg",
          "w920": "assets/images/w920/2015-11-25/the_good_dinosaur.jpg"
        },
        "pitch": "<p><strong>Pixar</strong> works their magic again and this time it&#39;s <strong>prehistoric!</strong> </p>\n",
        "description": "<p>Pixar asks: What if the cataclysmic asteroid that forever changed life on Earth by chance missed our planet completely and dinosaurs never became extinct? </p>\n\n<p><em>The Good Dinosaur</em>, described as &#39;hilarious and heartfelt&#39;,  centers on Arlo (Lucas Neff) a teenage dinosaur who befriends a human boy named Spot. </p>\n",
        "actors": [
          "Neil Patrick Harris",
          "Judy Greer",
          "Bill Hader",
          "Frances McDormand",
          "John Lithgow",
          "John Ratzenberger",
          "Lucas Neff",
          "Adam Stedman"
        ],
        "directors": [
          "Bob Peterson",
          "Peter Sohn"
        ],
        "theatrical_release_date": "2015-11-25",
        "year": "2015"
      },
      {
        "permalink": "mortdecai",
        "name": "Mortdecai",
        "images": {
          "w380": "assets/images/w380/2015-02-06/mortdecai.jpg",
          "w600": "assets/images/w600/2015-02-06/mortdecai.jpg",
          "w920": "assets/images/w920/2015-02-06/mortdecai.jpg"
        },
        "pitch": "<p><strong>Johnny Depp</strong> stars as a rogue on the hunt for lost <strong>Nazi treasures</strong>!</p>\n",
        "description": "<p>Johnny Depp stars alongside Ewan McGregor (The Impossible) and Gwyneth Paltrow (Iron Man 3) as the titular art dealer Charlie Mortdecai, a charming scoundrel on the hunt for a lost painting. Rumor has it that the piece of art harbors the code to a bank account filled with Nazi gold. His misadventures take Mortdecai from Jersey to Moscow, while spies, violence and mustaches feature prominently.</p>\n\n<p><em>Mortdecai</em> is based on <strong>Kyril Bonfiglioli</strong>&#39;s <em>The Great Mortdecai Moustache Mystery</em>. The comedic crime novel was the late author&#39;s final book.</p>\n",
        "actors": [
          "Johnny Depp",
          "Ewan McGregor",
          "Gwyneth Paltrow",
          "Olivia Munn",
          "Paul Bettany",
          "Michael Culkin",
          "Oliver Platt",
          "Jeff Goldblum",
          "Michael Byrne",
          "Aubrey Plaza",
          "Carly Steel"
        ],
        "directors": [
          "David Koepp"
        ],
        "theatrical_release_date": "2015-02-06",
        "year": "2015"
      },
      {
        "permalink": "hector-and-the-search-for-happiness",
        "name": "Hector and the Search for Happiness",
        "images": {
          "w380": "assets/images/w380/2014-09-19/hector_and_the_search_for_happiness.jpg",
          "w600": "assets/images/w600/2014-09-19/hector_and_the_search_for_happiness.jpg",
          "w920": "assets/images/w920/2014-09-19/hector_and_the_search_for_happiness.jpg"
        },
        "pitch": "<p>A <strong>psychiatrist</strong> goes on a <strong>worldwide search</strong> for the secret of <strong>happiness</strong></p>\n",
        "description": "<p>Hector (Simon Pegg) is an eccentric psychiatrist who has one essential problem: he can&#39;t make people any happier - a considerable obstacle for any successful psychiatrist. Hence, Hector decides to go on a voyage around the globe to find the secret to this elusive thing, happiness. </p>\n\n<p><em>Hector and the Search for Happiness</em> is based on <em>Francois Lelord</em>&#39;s charming bestseller of the same name. </p>\n",
        "actors": [
          "Simon Pegg",
          "Jean Reno",
          "Toni Collette",
          "Desiree Zurowski",
          "Chad Willett",
          "Rosamund Pike",
          "Christopher Plummer",
          "Jakob Davies",
          "Stellan Skarsgard",
          "Veronica Ferres"
        ],
        "directors": [
          "Peter Chelsom"
        ],
        "theatrical_release_date": "2014-09-19",
        "year": "2014"
      },
      {
        "permalink": "cell",
        "name": "Cell",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/cell.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/cell.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/cell.jpg"
        },
        "pitch": "<p><strong>Stephen King</strong>&#39;s awesome <strong>zombie</strong> novel heading to the <strong>big screen</strong></p>\n",
        "description": "<p><em>Cell</em> revolves around graphic artist Clayton Riddell (John Cusack) who is desperately trying to reach his family after a pulse transmitted via mobile phones turns people into zombies (or &#39;crazies&#39;).</p>\n\n<p>The horror movie is based on <strong>Stephen King</strong>&#39;s 2006 novel, <em>Cell</em>. The novelist actually co-wrote the screenplay for the movie adaptation alongside <em>The Last House on the Left</em> screenwriter Adam Alleca.</p>\n",
        "actors": [
          "John Cusack",
          "Samuel L. Jackson",
          "Isabelle Fuhrman"
        ],
        "directors": [
          "Tod Williams"
        ],
        "theatrical_release_date": "2015-99-99-Estimated",
        "year": "2015"
      },
      {
        "permalink": "sundowning",
        "name": "Sundowning",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/sundowning.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/sundowning.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/sundowning.jpg"
        },
        "pitch": "<p><strong>M. Night Shyamalan</strong> delivers <strong>nerve-racking</strong> psychological <strong>thriller</strong></p>\n",
        "description": "<p>M. Night Shyamalan (<em>The Sixth Sense</em>), the <strong>Alfred Hitchcock</strong> of our age, delivers his first micro-budgeted project with <em>Sundowning</em>. Appropriately the movie is a blood-curdling psychological thriller. </p>\n\n<p>Kathryn Hahn (Tomorrowland) stars as a single mother, taking her two children to their grandparents where family life takes a decidedly disturbing turn...</p>\n\n<p>&quot;Sundowning&quot; is a psychological phenomenon. Restlessness and confusion are its symptom.  </p>\n",
        "actors": [
          "Kathryn Hahn",
          "Ed Oxenbould",
          "Deanna Dunagan",
          "Brian Gildea"
        ],
        "directors": [
          "M. Night Shyamalan"
        ],
        "theatrical_release_date": "2015-99-99-Estimated",
        "year": "2015"
      },
      {
        "permalink": "power-rangers",
        "name": "Power Rangers",
        "images": {
          "w380": "assets/images/w380/2016-99-99-Estimated/power_rangers.jpg",
          "w600": "assets/images/w600/2016-99-99-Estimated/power_rangers.jpg",
          "w920": "assets/images/w920/2016-99-99-Estimated/power_rangers.jpg"
        },
        "pitch": "<p>The <strong>Power Rangers</strong> return in <strong>mighty blockbuster reboot</strong>!</p>\n",
        "description": "<p>Go Go Power Rangers! A group of teenagers is given superpowers to defend earth from evil forces. But they are to find out that  balancing their school lives with the responsibility of saving the world isn&#39;t that easy. </p>\n\n<p>The hugely successful TV show <em>Mighty Morphin Power Rangers</em> first aired in 1993 and has remained a cult classic ever since. Two  <em>Power Rangers</em> feature films followed: <em>Mighty Morphin Power Rangers The Movie</em> in 1995 and <em>Turbo A Power Rangers Movie</em> in 1997.</p>\n\n<p>Zack Stentz and Ashley Miller, the duo behind <em>Thor</em> and <em>X-Men: First Class</em>&#39; screenplays, scribe the <em>Power Rangers Reboot</em> - with Roberto Orci (The Amazing Spider-Man 2, Star Trek Into Darkness) onboard as an Executive Producer.</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2016-99-99-Estimated",
        "year": "2016"
      },
      {
        "permalink": "the-forest",
        "name": "The Forest",
        "images": {
          "w380": "assets/images/w380/2016-01-08/the_forest.jpg",
          "w600": "assets/images/w600/2016-01-08/the_forest.jpg",
          "w920": "assets/images/w920/2016-01-08/the_forest.jpg"
        },
        "pitch": "<p>A <strong>spooky horror</strong> movie produced by <strong>David Goyer</strong> of The <strong>Dark Knight</strong> fame</p>\n",
        "description": "<p><em>The Forest</em> is a horror movie set in the Aokigahara forest of Japan. The woods are renowned as a popular suicides spot.</p>\n\n<p>The horror flick is produced by David S. Goyer, who besides co-scripting the <em>Dark Knight</em> movies is also responsible for the screenplays for spooky genre fare like <em>The Unborn</em> and <em>The Puppet Masters</em>. </p>\n",
        "actors": [],
        "directors": [
          "Jason Zada"
        ],
        "theatrical_release_date": "2016-01-08",
        "year": "2016"
      },
      {
        "permalink": "captain-america-3",
        "name": "Captain America 3",
        "images": {
          "w380": "assets/images/w380/2016-05-06/captain_america_3.jpg",
          "w600": "assets/images/w600/2016-05-06/captain_america_3.jpg",
          "w920": "assets/images/w920/2016-05-06/captain_america_3.jpg"
        },
        "pitch": "<p><strong>Captain America</strong> will return for a <strong>third</strong> solo <strong>adventure</strong></p>\n",
        "description": "<p>A third Captain America movie is on the way, centering more or less exclusively on Steve Rogers (Chris Evans) and his alter ego. </p>\n\n<p>With the addition of new blood to the Marvel Universe (yes, we&#39;re looking at you Ant-Man and Doctor Strange), <em>Captain America 3</em> is now on route and will butt heads with Batman v. Superman: Dawn of Justice for an opening in May 2016. </p>\n\n<p>Fact is: Marvel signed up Chris Evans for seven movies. </p>\n",
        "actors": [
          "Chris Evans"
        ],
        "directors": [
          "Joe Russo",
          "Anthony Russo"
        ],
        "theatrical_release_date": "2016-05-06",
        "year": "2016"
      },
      {
        "permalink": "the-best-man-3",
        "name": "The Best Man 3",
        "images": {
          "w380": "assets/images/w380/2016-04-15/the_best_man_3.jpg",
          "w600": "assets/images/w600/2016-04-15/the_best_man_3.jpg",
          "w920": "assets/images/w920/2016-04-15/the_best_man_3.jpg"
        },
        "pitch": "<p>Get ready for another <strong>reunion</strong> with the <strong>third part</strong> of the <strong>Best Man</strong> franchise!</p>\n",
        "description": "<p>Coming together after 15 years for The Best Man Holiday, Mia (Monica Calhoun), Lance (Morris Chestnut), Harper (Taye Diggs) may reunite again for a third part of the <em>Best Man</em> franchise. </p>\n\n<p>Following on from the hugely successful The Best Man Holiday, the third part to the franchise, named <em>The Best Man Wedding</em>, focuses on the most unexpected marriage yet.</p>\n\n<p>Like its two predecessors, romantic comedy threequel <em>The Best Man Wedding</em> is yet again written, directed and produced by Malcolm D. Lee (<em>Undercover Brother, Scary Movie 5</em>).</p>\n",
        "actors": [
          "Nia Long",
          "Regina Hall"
        ],
        "directors": [
          "Malcolm D. Lee"
        ],
        "theatrical_release_date": "2016-04-15",
        "year": "2016"
      },
      {
        "permalink": "the-irishman",
        "name": "The Irishman",
        "images": {
          "w380": "assets/images/w380/2016-99-99-Estimated/the_irishman.jpg",
          "w600": "assets/images/w600/2016-99-99-Estimated/the_irishman.jpg",
          "w920": "assets/images/w920/2016-99-99-Estimated/the_irishman.jpg"
        },
        "pitch": "<p>The dream reunion: <strong>Scorsese</strong> may direct <strong>De Niro</strong>, <strong>Pesci</strong> - and <strong>Pacino</strong></p>\n",
        "description": "<p>Based on the book <em>I Heard You Paint Houses</em> by <strong>Charles Brandt</strong>, <em>The Irishman</em> will follow Frank Sheeran (Robert De Niro), a teamster who doubled as an organized crime hitman. </p>\n\n<p>Martin Scorsese&#39;s slow moving project has been long rumored to reunite the legendary director with Robert De Niro and Joe Pesci. <em>The Irishman</em> would mark their first movie together since <em>Casino</em>. The crime drama would also mark the first time Scorsese worked with Al Pacino.  </p>\n",
        "actors": [
          "Robert De Niro",
          "Joe Pesci",
          "Al Pacino"
        ],
        "directors": [
          "Martin Scorsese"
        ],
        "theatrical_release_date": "2016-99-99-Estimated",
        "year": "2016"
      },
      {
        "permalink": "gods-of-egypt--583327",
        "name": "Gods of Egypt",
        "images": {
          "w380": "assets/images/w380/2016-02-12/gods_of_egypt.jpg",
          "w600": "assets/images/w600/2016-02-12/gods_of_egypt.jpg",
          "w920": "assets/images/w920/2016-02-12/gods_of_egypt.jpg"
        },
        "pitch": "<p><strong>Nikolaj Coster-Waldau</strong> and <strong>Gerard Butler</strong> play rival <strong>gods</strong> in <strong>fantasy epic</strong></p>\n",
        "description": "<p>Set in Ancient Egypt, <em>Gods of Egypt</em> centers on a thief (Brenton Thwaites ) teaming up with a group of gods on a fantastical mission. Our criminal hero is joined by Horus (Nikolaj Coster-Waldau), the God of the sky, and Hathor, the Goddess of love, to avenge the death of Horus&#39; father, Osiris. The latter was killed by Set (Gerard Butler), the god of the desert.</p>\n\n<p>The fantasy epic is directed by Alex Proyas (<em>I Robot</em>) whose talent for delivering visually spectacular genre pics can be witnessed in <em>The Crow</em> or <em>Dark City</em>. </p>\n",
        "actors": [
          "Nikolaj Coster-Waldau",
          "Gerard Butler",
          "Geoffrey Rush",
          "Brenton Thwaites ",
          "Courtney Eaton ",
          "Elodie Yung",
          "Chadwick Boseman"
        ],
        "directors": [
          "Alex Proyas"
        ],
        "theatrical_release_date": "2016-02-12",
        "year": "2016"
      },
      {
        "permalink": "allegiant-part-2",
        "name": "Allegiant - Part 2",
        "images": {
          "w380": "assets/images/w380/2017-03-24/allegiant_-_part_2.jpg",
          "w600": "assets/images/w600/2017-03-24/allegiant_-_part_2.jpg",
          "w920": "assets/images/w920/2017-03-24/allegiant_-_part_2.jpg"
        },
        "pitch": "<p>The <strong>conclusion</strong> of the epic <strong>dystopian series</strong> starring <strong>Shailene Woodley</strong></p>\n",
        "description": "<p>Set in a world where the population of a dystopian Chicago is separated into five different factions, <em>Allegiant – Part 2</em> marks the epic conclusion of the story of &quot;divergent&quot; Beatrice ‘Tris’ Prior (Shailene Woodley). </p>\n\n<p>The dystopian sci-fi movie is based on the final novel of Veronica Roth’s <em>Divergent</em> series. Like The Hunger Games: Mockingjay - Part 2 and The Twilight Saga: Breaking Dawn - Part 2, <em>Allegiant – Part 2</em> marks another instance of distributor Lionsgate giving the final book of a successful young adult franchise enough room to breath by adapting it into two feature films. </p>\n",
        "actors": [
          "Shailene Woodley",
          "Theo James",
          "Naomi Watts"
        ],
        "directors": [],
        "theatrical_release_date": "2017-03-24",
        "year": "2017"
      },
      {
        "permalink": "the-big-short",
        "name": "The Big Short",
        "images": {
          "w380": "assets/images/w380/2016-99-99-Estimated/the_big_short.jpg",
          "w600": "assets/images/w600/2016-99-99-Estimated/the_big_short.jpg",
          "w920": "assets/images/w920/2016-99-99-Estimated/the_big_short.jpg"
        },
        "pitch": "<p>A <strong>movie</strong> based on the <strong>Michael Lewis</strong>’ great <strong>book</strong> about the <strong>financial crisis</strong></p>\n",
        "description": "<p><em>The Big Short</em> is based on best-selling author <strong>Michael Lewis</strong>’ (<em>Liar’s Poker</em>) critically acclaimed <em>The Big Short: Inside the Doomsday Machine</em>. The non-fiction book deals with the financial crisis of 2007-2008. Shocking, funny, informative - in short: irresistible. Expect the qualities of Lewis’ book to apply to the movie as well! </p>\n\n<p>Some of <strong>Lewis</strong>’ books have already successfully found their way to the big screen. The sports dramas <em>The Blind Side</em> and <em>Moneyball</em> were both based on his books. Brad Pitt, who starred in the latter, is also involved in <em>The Big Short</em> albeit only in the role of a producer. </p>\n",
        "actors": [],
        "directors": [
          "Adam McKay"
        ],
        "theatrical_release_date": "2016-99-99-Estimated",
        "year": "2016"
      },
      {
        "permalink": "the-jungle-book-origins",
        "name": "The Jungle Book: Origins",
        "images": {
          "w380": "assets/images/w380/2016-10-21/the_jungle_book_origins.jpg",
          "w600": "assets/images/w600/2016-10-21/the_jungle_book_origins.jpg",
          "w920": "assets/images/w920/2016-10-21/the_jungle_book_origins.jpg"
        },
        "pitch": "<p><strong>Andy Serkis</strong> heads into the <strong>jungle</strong> for some <strong>bare necessities</strong> </p>\n",
        "description": "<p>Based on <strong>Rudyard Kipling</strong>’s immortal classic, <em>The Jungle Book: Origins</em> tells the story of Mowgli, a young boy raised by wolves. </p>\n\n<p>Kipling’s Mowgli stories have been adapted into feature films several times, most famously by Disney in 1967. Unlike that animated movie however, this <em>Jungle Book</em> will feature real actors. </p>\n\n<p>As Kipling&#39;s literature classic has become accessible in the public domain, Hollywood is all over Mowgli&#39;s adventures: Andy Serkis&#39;s <em>The Jungle Book: Origins</em> isn’t the only modern adaptation: Jon Favreau helms a rival The Jungle Book for Disney. </p>\n",
        "actors": [],
        "directors": [
          "Andy Serkis"
        ],
        "theatrical_release_date": "2016-10-21",
        "year": "2016"
      },
      {
        "permalink": "avatar-4",
        "name": "Avatar 4",
        "images": {
          "w380": "assets/images/w380/2018-99-99-Estimated/avatar_4.jpg",
          "w600": "assets/images/w600/2018-99-99-Estimated/avatar_4.jpg",
          "w920": "assets/images/w920/2018-99-99-Estimated/avatar_4.jpg"
        },
        "pitch": "<p><strong>James Cameron</strong> returns to <strong>Pandora</strong> for the <strong>fourth part</strong> of his <strong>epic tetralogy</strong></p>\n",
        "description": "<p>There were rumors that <em>Avatar 4</em> will be set before the events of the first <em>Avatar</em> and show the early expeditions of Pandora by human explorers and what went wrong between Na&#39;vi and earthlings. </p>\n\n<p>Nothing is confirmed, however, and Avatar 4 could also &quot;just&quot; be another sequel. </p>\n",
        "actors": [
          "Stephen Lang",
          "Sigourney Weaver"
        ],
        "directors": [
          "James Cameron"
        ],
        "theatrical_release_date": "2018-99-99-Estimated",
        "year": "2018"
      },
      {
        "permalink": "pacific-rim-2",
        "name": "Pacific Rim 2",
        "images": {
          "w380": "assets/images/w380/2017-04-07/pacific_rim_2.jpg",
          "w600": "assets/images/w600/2017-04-07/pacific_rim_2.jpg",
          "w920": "assets/images/w920/2017-04-07/pacific_rim_2.jpg"
        },
        "pitch": "<p>A follow-up to <strong>Guillermo del Toro</strong>&#39;s action-packed <strong>robot apocalypse</strong> </p>\n",
        "description": "<p>A sequel to Guillermo del Toro&#39;s massive summer 2013 blockbuster.  </p>\n\n<p>The first film follows mankind&#39;s battle for survival against the murderous sea monsters known as the Kaiju, as soldiers fight from the pilot seats of massive robots. For the sequel del Toro has hinted at a Kaiju-Jaeger hybrid! </p>\n\n<p>Until 2017&#39;s <em>Pacific Rim 2</em>, fans of the franchise can enjoy it&#39;s continuation in the comic book series that began with <em>Year Zero</em>, and a Pacific Rim Cartoon.</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2017-04-07",
        "year": "2017"
      },
      {
        "permalink": "gambit-spin-off",
        "name": "Gambit Spin-off",
        "images": {
          "w380": "assets/images/w380/2017-99-99-Estimated/gambit_spin-off.jpg",
          "w600": "assets/images/w600/2017-99-99-Estimated/gambit_spin-off.jpg",
          "w920": "assets/images/w920/2017-99-99-Estimated/gambit_spin-off.jpg"
        },
        "pitch": "<p><strong>Channing Tatum</strong> plays dream role of <strong>Gambit</strong> in <strong>X-Men spin-off</strong>!</p>\n",
        "description": "<p>Remy LeBeau, better known as Gambit, finally appears in his own movie. The movie is set after X-Men: Apocalypse with the suave Cajun again played by Channing Tatum. </p>\n\n<p>Gambit is one of the most popular <em>X-Men</em> characters of all time. Fans anticipated a solo movie ever since the first <em>X-Men</em> film was released in 2000. The character had an unsatisfying supporting role in <em>X-Men Origins: Wolverine</em> and was played by Taylor Kitsch (John Carter). Raised as a professional thief, Gambit is known for his charming, yet unpredictable character. His ability to charge items with bio-kinetic energy makes him a great threat to his foes. </p>\n",
        "actors": [
          "Channing Tatum"
        ],
        "directors": [],
        "theatrical_release_date": "2017-99-99-Estimated",
        "year": "2017"
      },
      {
        "permalink": "batman-reboot",
        "name": "Batman Reboot",
        "images": {
          "w380": "assets/images/w380/2019-99-99-Estimated/batman_reboot.jpg",
          "w600": "assets/images/w600/2019-99-99-Estimated/batman_reboot.jpg",
          "w920": "assets/images/w920/2019-99-99-Estimated/batman_reboot.jpg"
        },
        "pitch": "<p><strong>Zach Snyder</strong>&#39;s <strong>Batman</strong> gets his own movie!</p>\n",
        "description": "<p>After appearing in Batman v. Superman: Dawn of Justice and the Justice League movie, Ben Affleck&#39;s Batman features in his own movie.</p>\n\n<p>Bruce Wayne returns as the caped crusader in the first stand-alone movie since Christopher Nolan and David S. Goyer&#39;s <em>The Dark Knight Trilogy</em> ended in 2012. Although no actors are officially attatched, the character is played by Affleck in his upcoming appearances, so it is more than likely that he will reprise the role.</p>\n\n<p>The <em>Batman Reboot</em> is one of many DC Universe features planned, along with a Flash and Green Lantern Team-up, Wonder Woman, Shazam and the sequel to Zack Snyder&#39;s first outing with Superman, Man of Steel 2.</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2019-99-99-Estimated",
        "year": "2019"
      },
      {
        "permalink": "larrikins",
        "name": "Larrikins",
        "images": {
          "w380": "assets/images/w380/2018-02-16/larrikins.jpg",
          "w600": "assets/images/w600/2018-02-16/larrikins.jpg",
          "w920": "assets/images/w920/2018-02-16/larrikins.jpg"
        },
        "pitch": "<p><strong>Animated comedy</strong> set in the <strong>Australian outback</strong> </p>\n",
        "description": "<p>Named after the Australian slang for roustabout youngsters, <em>Larrikins</em> is an all-animal comedy set in the Australian outback, the story of an uptight, desert-dwelling bilby (if you don&#39;t know what that is: it&#39;s a big-eared mammal that looks like a cross between a rabbit and a rat). The Dreamworks animated comedy sees the bilby leave the security of his family burrow for a musical adventure.</p>\n\n<p>Cult comedian/writer/composer <strong>Tim Minchin</strong> will score <em>Larrikins</em>. He was also behind the score for the much-lauded <em>Matilda the Musical</em>. </p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2018-02-16",
        "year": "2018"
      },
      {
        "permalink": "the-amazing-spider-man-3",
        "name": "The Amazing Spider-Man 3",
        "images": {
          "w380": "assets/images/w380/2018-99-99/the_amazing_spider-man_3.jpg",
          "w600": "assets/images/w600/2018-99-99/the_amazing_spider-man_3.jpg",
          "w920": "assets/images/w920/2018-99-99/the_amazing_spider-man_3.jpg"
        },
        "pitch": "<p>The <strong>third installment</strong> to an <strong>amazing</strong> web-slinging <strong>trilogy</strong>!</p>\n",
        "description": "<p>Since Marvel has officially confirmed that Andrew Garfield will star as Spidey in <em>The Amazing Spider-man 3</em>. Following on from The Sinister Six movie, spider-man will tackle his greatest threat(s) yet in the third installment.</p>\n\n<p>Marc Webb, who helmed the first movie, will also be responsible for part three.</p>\n",
        "actors": [
          "Andrew Garfield"
        ],
        "directors": [
          "Marc Webb"
        ],
        "theatrical_release_date": "2018-99-99",
        "year": "2018"
      },
      {
        "permalink": "star-wars-episode-viii",
        "name": "Star Wars: Episode VIII",
        "images": {
          "w380": "assets/images/w380/2017-99-99-Estimated/star_wars_episode_viii.jpg",
          "w600": "assets/images/w600/2017-99-99-Estimated/star_wars_episode_viii.jpg",
          "w920": "assets/images/w920/2017-99-99-Estimated/star_wars_episode_viii.jpg"
        },
        "pitch": "<p>We feel a disturbance in the force: the <strong>Star Wars</strong> saga <strong>continues</strong>!</p>\n",
        "description": "<p>The Star Wars saga continues with an eighth installment from Looper&#39;s Rian Johnson. </p>\n\n<p>Star Wars: Episode VIII is the second installment of the new <em>Star Wars</em> trilogy. Following on from Star Wars: Episode VII, J.J. Abrams steps away from the director&#39;s chair.</p>\n\n<p>Rian Johnson (Brick, Looper) is attatched to write and direct the project. Johnson will also write the screenplay for Star Wars: Episode IX. Creator George Lucas serves as a creative consultant on the movie.</p>\n",
        "actors": [],
        "directors": [
          "Rian Johnson"
        ],
        "theatrical_release_date": "2017-99-99-Estimated",
        "year": "2017"
      },
      {
        "permalink": "the-croods-2",
        "name": "The Croods 2",
        "images": {
          "w380": "assets/images/w380/2017-11-03/the_croods_2.jpg",
          "w600": "assets/images/w600/2017-11-03/the_croods_2.jpg",
          "w920": "assets/images/w920/2017-11-03/the_croods_2.jpg"
        },
        "pitch": "<p><strong>The Flintstones</strong> for millenials are <strong>BACK</strong>!</p>\n",
        "description": "<p>It&#39;ll come as no surprise to you guys that <em>The Croods 2</em> follows the same prehistoric family that we first met in The Croods. If you haven&#39;t seen The Croods, it centers on a family of cavemen, following an overprotective patriarch as he led his family on their first trip out of the cave and gradually learned to loosen up. </p>\n\n<p>Writers-directors Kirk De Micco and Chris Sanders will be returning to head up the good ship Crood, so fans of the first film should expect more of the same funny fare.  </p>\n",
        "actors": [
          "Nicolas Cage",
          "Emma Stone",
          "Ryan Reynolds"
        ],
        "directors": [
          "Chris Sanders",
          "Kirk De Micco"
        ],
        "theatrical_release_date": "2017-11-03",
        "year": "2017"
      },
      {
        "permalink": "the-avengers-3",
        "name": "The Avengers 3",
        "images": {
          "w380": "assets/images/w380/2018-99-99-Estimated/the_avengers_3.jpg",
          "w600": "assets/images/w600/2018-99-99-Estimated/the_avengers_3.jpg",
          "w920": "assets/images/w920/2018-99-99-Estimated/the_avengers_3.jpg"
        },
        "pitch": "<p><strong>Earth&#39;s</strong> mightiest <strong>heroes</strong> are <strong>bound</strong> to <strong>assemble</strong> for a <strong>third</strong> time</p>\n",
        "description": "<p>Marvel&#39;s first superhero mash-up took in a whopping $1.5 billion worldwide in 2012. Expect similar numbers for The Avengers: Age Of Ultron and <em>The Avengers 3</em>.</p>\n\n<p>Since the first The Avengers, several Marvel stalwarts have joined the MCU. From Star Lord/Peter Quill (Chris Pratt) and his Guardians of the Galaxy to <em>Age of Ultron</em> newbies, Scarlett Witch (Elizabeth Olsen) and Quicklisilver (Aaron Taylor-Johnson): <em>The Avengers 3</em> can  draw on unlimited resources in terms of Marvel characters. </p>\n\n<p>Not clear, however, is if the roles of Thor, Captain America and Hulk are still going to played by the same actors as in the predecessors. One casting decision is made though: Robert Downey Jr. still is Iron Man!</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2018-99-99-Estimated",
        "year": "2018"
      },
      {
        "permalink": "justice-league",
        "name": "Justice League",
        "images": {
          "w380": "assets/images/w380/2017-05-99/justice_league.jpg",
          "w600": "assets/images/w600/2017-05-99/justice_league.jpg",
          "w920": "assets/images/w920/2017-05-99/justice_league.jpg"
        },
        "pitch": "<p><strong>Superman</strong> and <strong>Batman</strong> and co. unite in <strong>DC&#39;s</strong> answer to <strong>The Avengers</strong>!</p>\n",
        "description": "<p>Superman (Henry Cavill), Batman (Ben Affleck) and Wonder Woman (Gal Gadot) join an elite team of DC superheroes to fight evil.</p>\n\n<p>The road to the Justice League movie was long and arduous. Mad Max: Fury Road director George Miller came close to shooting his version in the early 2000s which was cancelled in the last minute.  </p>\n\n<p>Years later, Will Beall (Gangster Squad) delivered a script for the long-gestating project which was not accepted by Warner Bros. The studio decided to go with screenwriter David S. Goyer instead. Understandably so, as Goyer&#39;s credential couldn&#39;t be more excellent, having contributed to the screenplays for <em>Justice League</em> predecessors Batman v. Superman: Dawn of Justice and Man of Steel.</p>\n\n<p>Ben Affleck and Chris Terrio previously worked together on the Oscar-winning movie Argo, with Affleck directing and Terrio penning the screenplay.</p>\n",
        "actors": [
          "Henry Cavill",
          "Ben Affleck",
          "Gal Gadot"
        ],
        "directors": [
          "Zack Snyder"
        ],
        "theatrical_release_date": "2017-05-99",
        "year": "2017"
      },
      {
        "permalink": "the-fantastic-four-2",
        "name": "The Fantastic Four 2",
        "images": {
          "w380": "assets/images/w380/2017-07-14/the_fantastic_four_2.jpg",
          "w600": "assets/images/w600/2017-07-14/the_fantastic_four_2.jpg",
          "w920": "assets/images/w920/2017-07-14/the_fantastic_four_2.jpg"
        },
        "pitch": "<p><strong>The Fantastic Four</strong> prevent Doom <strong>again</strong> in <strong>sequel</strong> to <strong>reboot</strong>!</p>\n",
        "description": "<p>The Invisible Woman (Kate Mara), The Human Torch (Michael B. Jordan), Mr. Fantastic (Miles Teller) and The Thing (Jamie Bell) return in this sequel for <em>Chronicle</em> director Josh Trank’s reboot of Marvel’s most fantastic team of superheroes. </p>\n",
        "actors": [
          "Kate Mara",
          "Miles Teller",
          "Jamie Bell",
          "Michael B. Jordan"
        ],
        "directors": [],
        "theatrical_release_date": "2017-07-14",
        "year": "2017"
      },
      {
        "permalink": "avatar-3",
        "name": "Avatar 3",
        "images": {
          "w380": "assets/images/w380/2017-99-99-Estimated/avatar_3.jpg",
          "w600": "assets/images/w600/2017-99-99-Estimated/avatar_3.jpg",
          "w920": "assets/images/w920/2017-99-99-Estimated/avatar_3.jpg"
        },
        "pitch": "<p><strong>Part 3</strong> in <strong>James Cameron</strong>&#39;s <strong>epic</strong> Pandora <strong>tetralogy</strong></p>\n",
        "description": "<p>James Cameron plans to make four <em>Avatar</em>  movies. </p>\n\n<p><em>Avatar 3</em> is filmed back-to-back with its predecessor and Avatar 4.</p>\n\n<p>Sam Worthington  and Zoe Saldana will be back, respectively reprising their roles as Jack Sully and Neytiri. </p>\n",
        "actors": [
          "Zoe Saldana",
          "Sam Worthington",
          "Stephen Lang"
        ],
        "directors": [
          "James Cameron"
        ],
        "theatrical_release_date": "2017-99-99-Estimated",
        "year": "2017"
      },
      {
        "permalink": "the-amazing-spider-man-4",
        "name": "The Amazing Spider-Man 4",
        "images": {
          "w380": "assets/images/w380/2018-05-04/the_amazing_spider-man_4.jpg",
          "w600": "assets/images/w600/2018-05-04/the_amazing_spider-man_4.jpg",
          "w920": "assets/images/w920/2018-05-04/the_amazing_spider-man_4.jpg"
        },
        "pitch": "<p>The fourth part of the <strong>Marvel superhero franchise</strong></p>\n",
        "description": "<p><em>The Amazing Spider Man 4</em> continues the adventures of Peter Parker as Spider-Man, after the events of The Amazing Spider-Man 3.</p>\n\n<p>Scheduled for a 2018 release, Sony Pictures vice chairman Jeff Blake has claimed that:\n“Spider-Man is our most important, most successful, and most beloved franchise, so we’re thrilled that we are in a position to lock in these prime release dates over the next five years.”</p>\n\n<p>Marc Webb has chosen not to direct the fourth movie, stating that he would like to be involved as a consultant instead.</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2018-05-04",
        "year": "2018"
      },
      {
        "permalink": "madagascar-4",
        "name": "Madagascar 4",
        "images": {
          "w380": "assets/images/w380/2018-05-18/madagascar_4.jpg",
          "w600": "assets/images/w600/2018-05-18/madagascar_4.jpg",
          "w920": "assets/images/w920/2018-05-18/madagascar_4.jpg"
        },
        "pitch": "<p><strong>Alex, Marty, Melman and Gloria are back</strong> in the <strong>4th</strong> part of the <strong>successful</strong> animated series!</p>\n",
        "description": "<p>With the spin-off Penguins of Madagascar to be released in 2015, another <em>Madagascar</em> movie seems inevitable, with Alex, Marty, Melman and Gloria again enchanting young and old alike. </p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2018-05-18",
        "year": "2018"
      },
      {
        "permalink": "man-of-steel-2",
        "name": "Man of Steel 2",
        "images": {
          "w380": "assets/images/w380/2018-99-99-Estimated/man_of_steel_2.jpg",
          "w600": "assets/images/w600/2018-99-99-Estimated/man_of_steel_2.jpg",
          "w920": "assets/images/w920/2018-99-99-Estimated/man_of_steel_2.jpg"
        },
        "pitch": "<p><strong>Superman</strong> returns in sequel to <strong>Zack Snyder</strong>&#39;s Man of Steel</p>\n",
        "description": "<p>After Man of Steel, Batman v. Superman: Dawn of Justice and Justice League,  Henry Cavill&#39;s Superman returns for another stand-alone adventure.</p>\n\n<p>Following the journey of famed Kryptonian Kal-El, <em>Man of Steel 2</em> continues the story of the leading member of the Justice League.</p>\n",
        "actors": [
          "Henry Cavill"
        ],
        "directors": [],
        "theatrical_release_date": "2018-99-99-Estimated",
        "year": "2018"
      },
      {
        "permalink": "star-wars-episode-ix",
        "name": "Star Wars: Episode IX",
        "images": {
          "w380": "assets/images/w380/2019-99-99-Estimated/star_wars_episode_ix.jpg",
          "w600": "assets/images/w600/2019-99-99-Estimated/star_wars_episode_ix.jpg",
          "w920": "assets/images/w920/2019-99-99-Estimated/star_wars_episode_ix.jpg"
        },
        "pitch": "<p>The force is obviously with us: a <strong>ninth part</strong> of the <strong>Star Wars</strong> series! </p>\n",
        "description": "<p>The ninth episode of the beloved <em>Star Wars</em> saga: a long time of, in a galaxy far far away...</p>\n\n<p>When The Walt Disney Company acquired Lucasfilm in October 2012, the rights for the <em>Star Wars</em> franchise also went to Disney, which has ambitious plans for the beloved series: Episode VII will be released in 2015, with Episode VIII and <em>Episode IX</em> following in two year steps. George Lucas serves as a creative consultant, while Kathleen Kennedy (longtime producing partner of Steven Spielberg), who succeeded Lucas as President of Lucasfilm, serves as an executive producer.</p>\n\n<p>The script is set to be penned by Rian Johnson, who also writes and directs Star Wars: Episode VIII:</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2019-99-99-Estimated",
        "year": "2019"
      },
      {
        "permalink": "battle-angel",
        "name": "Battle Angel",
        "images": {
          "w380": "assets/images/w380/2018-99-99-Estimated/battle_angel.jpg",
          "w600": "assets/images/w600/2018-99-99-Estimated/battle_angel.jpg",
          "w920": "assets/images/w920/2018-99-99-Estimated/battle_angel.jpg"
        },
        "pitch": "<p><strong>James Cameron</strong> to direct a <strong>popular</strong> post-apocalyptic <strong>cyborg</strong> <strong>manga</strong> </p>\n",
        "description": "<p>James Cameron plans to direct a live action adaptation of Yukito Kishiro&#39;s <i>Battle Angel</i> series. The graphic novels center on a female cyborg named Alita&#39;s quest to discover her identity and purpose. However with James Cameron planning on focusing his attention on  sequels, it seems Battle Angel will remain in the development pipeline for a while yet. </p>\n",
        "actors": [],
        "directors": [
          "James Cameron"
        ],
        "theatrical_release_date": "2018-99-99-Estimated",
        "year": "2018"
      },
      cb
    );
  });
};

populateUsers(function() {
  console.log('finished populating users');

  populateProfiles(function() {
    console.log('finished populating profiles');
  });
});

populateMovies(function() {
  console.log('finished populating movies');
});
