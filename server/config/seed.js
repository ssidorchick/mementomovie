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
        "name": "Death Wish",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/death_wish.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/death_wish.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/death_wish.jpg"
        },
        "pitch": "<p><strong>Charles Bronson&#39;s</strong> notorious <strong>revenge flick</strong> gets a <strong>violent remake!</strong></p>\n",
        "description": "<p><em>Death Wish</em> is a remake of the the 1974 revenge flick Death Wish. The crime thriller famously starred Charles Bronson as Paul Kersey, a man who turns to vigilantism after his wife is murdered and his daughter is sexually assaulted by muggers.</p>\n\n<p><em>Death Wish</em> is based on the novel by <strong>Brian Garfield</strong>. </p>\n\n<p>Joe Carnahan (<em>The Grey</em>) was supposed to re-imagine the original and transpose the setting to present day, downtown Los Angeles. But Carnahan dropped out of the production due to a dispute with the studio about who to cast in the Bronson role. Gerardo Naranjo, whose <em>Miss Bala</em> was nominated for the Academy Award for Best Foreign Language Film, took over directing duties. </p>\n",
        "actors": [
          "Frank Grillo"
        ],
        "directors": [
          "Joe Carnahan",
          "Gerardo Naranjo"
        ],
        "theatrical_release_date": "9999-99-99-Estimated"
      },
      {
        "name": "Vice",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/vice.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/vice.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/vice.jpg"
        },
        "pitch": "<p><strong>Hostel</strong> meets <strong>Blade Runner</strong> in this <strong>sci-fi thriller</strong> with <strong>Bruce Willis</strong></p>\n",
        "description": "<p>Set in the future, the sci-fi action thriller centers on Vice, a resort for the rich and wealthy. The location offers a special sort of amusement for its clientele: androids with erasable memories. The guests can live out their most devious fantasies, their vices with the artificial staff who won’t remember a thing when their memory is rebooted. When one them remembers what happened to her however, she is determined to shut the facility down. </p>\n\n<p>Bruce Willis stars as the owner of <em>Vice</em>. </p>\n",
        "actors": [
          "Ambyr Childers",
          "Bruce Willis",
          "Johnathon Schaech",
          "Bryan Greenberg",
          "Thomas Jane",
          "Charlotte Kirk"
        ],
        "directors": [],
        "theatrical_release_date": "2015-99-99-Estimated",
      },
      {
        "name": "The Divine Tragedies",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/the_divine_tragedies.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/the_divine_tragedies.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/the_divine_tragedies.jpg"
        },
        "pitch": "<p><strong>Dark horror</strong> flick about two brothers&#39; <strong>murderous and evil</strong> game</p>\n",
        "description": "<p><em>The Divine Tragedies</em> centers on two brothers who create a deadly game in order to test their self-believed superiority against the rest of the mundane mankind. </p>\n\n<p>However, the name of this game is murder, and when a single mother, named Genevieve, moves to the brothers’ neighborhood they believe they have found their first perfect kill. However, things are not as they seem, and a cop, lurking in the shadows, is hot on their trail.</p>\n",
        "actors": [
          "Graham Denman",
          "Jon Kondelik"
        ],
        "directors": [
          "Jose Prendes"
        ],
        "theatrical_release_date": "2015-99-99-Estimated"
      },
      {
        "name": "The Man With The Kaleidoscope Eyes",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/the_man_with_the_kaleidoscope_eyes.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/the_man_with_the_kaleidoscope_eyes.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/the_man_with_the_kaleidoscope_eyes.jpg"
        },
        "pitch": "<p>Gremlins director <strong>Joe Dante</strong> pays <strong>homage</strong> to B-movie icon <strong>Roger Corman</strong></p>\n",
        "description": "<p>Producing and directing B-movie icon Roger Corman is responsible for greatly advancing the careers of young once inexperienced filmmakers like Francis Ford Coppola, James Cameron and Joe Dante by giving them first assigments. The latter now writes his mentor a celluloid love letter with <em>The Man With The Kaleidoscope Eyes</em>.</p>\n\n<p>The biopic tells the story of how Cormen&#39;s cult flick <em>The Trip</em> was made. The 1967 movie centers on one LSD trip gone terribly wrong. The psychodelic flick was based on a screenplay by Jack Nicholson, starred Peter Fonda and Bruce Dern and was greatly helped by the fact that director Cormen (and large parts of cast &amp; crew) had investigated the movie&#39;s subject quite thoroughly on their own. </p>\n",
        "actors": [],
        "directors": [
          "Joe Dante"
        ],
        "theatrical_release_date": "9999-99-99-Estimated"
      },
      {
        "name": "Watchmen 2",
        "images": {
          "w380": "assets/images/w380/9999-99-99/watchmen_2.jpg",
          "w600": "assets/images/w600/9999-99-99/watchmen_2.jpg",
          "w920": "assets/images/w920/9999-99-99/watchmen_2.jpg"
        },
        "pitch": "<p>A <strong>follow-up</strong> to <strong>Zack Snyder</strong>&#39;s twisted <strong>graphic novel</strong> adaptation</p>\n",
        "description": "<p>Might a sequel/prequel to Zack Snyder&#39;s <em>Watchmen</em> movie be in th cards, now that the legendary graphic novel <em>Watchmen</em> received a prequel with <em>Before Watchmen</em>? </p>\n\n<p>The answer is: Highly unlikely. The twisted superhero movie grossed only $185 worldwide, which isn&#39;t that much considering the whopping budget of $130 million. </p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "9999-99-99"
      },
      {
        "name": "The Girl Who Conned The Ivy League",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/the_girl_who_conned_the_ivy_league.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/the_girl_who_conned_the_ivy_league.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/the_girl_who_conned_the_ivy_league.jpg"
        },
        "pitch": "<p>A college-set <strong>Catch Me If You Can</strong> fronted by the sultry <strong>Amanda Seyfried</strong></p>\n",
        "description": "<p><em>The Girl Who Conned The Ivy League</em> is based on the jawdropping true story of Esther Reed (Amanda Seyfried), a high school dropout who adopted multiple fake identities and conned her way into universities you&#39;d think would have sussed her out straight away like Harvard and Columbia. Eventually, she became the subject of a nationwide manhunt...</p>\n\n<p>This is the second time filmmakers Rob Epstein and Jeffrey Friedman have worked with Seyfried - they previously collaborated with her when she played the controversial lead in the pornstar biopic  Lovelace.</p>\n",
        "actors": [
          "Amanda Seyfried"
        ],
        "directors": [
          "Jeffrey Friedman",
          "Rob Epstein"
        ],
        "theatrical_release_date": "2014-99-99-Estimated"
      },
      {
        "name": "Dash and Lily's Book of Dares",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/dash_and_lily's_book_of_dares.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/dash_and_lily's_book_of_dares.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/dash_and_lily's_book_of_dares.jpg"
        },
        "pitch": "<p><strong>Lena Dunham</strong> adapts a novel from the authors of <strong>Nick &amp; Norah&#39;s Infinite Playlist</strong> </p>\n",
        "description": "<p>16-year-olds Dash and Lily are both alone in Manhattan on Christmas Eve. The title of the romantic comedy refers to a red Moleskine notebook, which Lily left in a bookstore, which Dash picks up by chance. The book contains a list of literary clues, which lead to another location and another clue. A back-and-forth of clues and dares ensues, which leads the teenagers across New York, while getting to know each other more and more though each other&#39;s writing. </p>\n\n<p>Writer/ director Lena Dunham recently teamed up with director and producer Judd Apatow (), for the HBO show <em>Girls</em>. </p>\n",
        "actors": [],
        "directors": [
          "Lena Dunham"
        ],
        "theatrical_release_date": "9999-99-99-Estimated"
      },
      {
        "name": "The Nut Job 2",
        "images": {
          "w380": "assets/images/w380/2016-01-15/the_nut_job_2.jpg",
          "w600": "assets/images/w600/2016-01-15/the_nut_job_2.jpg",
          "w920": "assets/images/w920/2016-01-15/the_nut_job_2.jpg"
        },
        "pitch": "<p>Another <strong>nut heist</strong> is afoot in the <strong>sequel</strong> to <strong>The Nut Job</strong></p>\n\n<hr>\n",
        "description": "<p>Nutty squirrel Surly (Will Arnett) will be back in the sequel to the 2014 animated hit The Nut Job. </p>\n",
        "actors": [
          "Will Arnett"
        ],
        "directors": [],
        "theatrical_release_date": "2016-01-15"
      },
      {
        "name": "Doc Of The Dead",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/doc_of_the_dead.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/doc_of_the_dead.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/doc_of_the_dead.jpg"
        },
        "pitch": "<p>Today, <strong>no living person</strong> has <em>escaped</em> a <strong>zombie</strong> movie</p>\n",
        "description": "<p>Doc of the Dead is an edgy, raw documentary exploring the zombie culture craze. The film brings together real footage, zombie experts, celebrities, and a host of popular culture enthusiasts, including filmmakers and others to participate in a dialogue and investigate how and why the zombies have taken over.</p>\n\n<p>Most interestingly, it explores the ramifications of a real zombie outbreak.  </p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2014-99-99-Estimated"
      },
      {
        "name": "Absolutely Anything",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/absolutely_anything.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/absolutely_anything.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/absolutely_anything.jpg"
        },
        "pitch": "<p><strong>Monty Python returns!</strong> Living members <strong>reunite</strong> to play a group of <strong>aliens</strong></p>\n",
        "description": "<p>The live-action comedy centers on a disillusioned schoolteacher (Simon Pegg) who becomes the living toy for a group of aliens (voiced by Michael Palin, Eric Idle, John Cleese and Terry Gilliam) that give him the power to do absolutely anything. </p>\n\n<p><i>Absolutely Anything</i> is a science fiction comedy that will reunite the living members Terry Gilliam, John Cleese and Michael Palin of the legendary comic group Monty Python.</p>\n",
        "actors": [
          "Robin Williams",
          "Terry Gilliam",
          "Eric Idle",
          "John Cleese",
          "Michael Palin",
          "Simon Pegg",
          "Kate Beckinsale",
          "Rob Riggle",
          "Eddie Izzard",
          "Joanna Lumley"
        ],
        "directors": [
          "Terry Jones"
        ],
        "theatrical_release_date": "2015-99-99-Estimated"
      },
      {
        "name": "Mobius",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/mobius.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/mobius.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/mobius.jpg"
        },
        "pitch": "<p><strong>Moby Dick</strong> in <strong>space</strong>, by one of today&#39;s most <strong>exciting filmmaker</strong>s</p>\n",
        "description": "<p>The egomaniacal Captain of a spaceship takes his crew on a suicide mission to catch an enigmatic alien. </p>\n\n<p>Lynne Ramsay (<i>We Need to Talk About Kevin</i>) is slated to write, produce and direct this space-set story based on the classic tale of <i>Moby Dick</i>. Before tackling <em>Mobius</em>, Ramsey is set to direct Natalie Portman and Michael Fassbender in the western Jane Got a Gun. </p>\n",
        "actors": [],
        "directors": [
          "Lynne Ramsay"
        ],
        "theatrical_release_date": "9999-99-99-Estimated"
      },
      {
        "name": "Fresh Meat",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/fresh_meat.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/fresh_meat.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/fresh_meat.jpg"
        },
        "pitch": "<p>An <strong>horror comedy</strong> about middle-class <strong>family</strong> with a taste for <strong>human flesh</strong></p>\n",
        "description": "<p>When a group of constantly bickering criminals take the Crane family hostage, they have no idea what they just headed into: although they might look like your aveerage middle class family, the Cranes have one rather peculiar habit: consuming human flesh!</p>\n",
        "actors": [
          "Temuera Morrison",
          "Jack Sergent-Shadbolt",
          "Kate Elliott",
          "Hanna Tevita",
          "Nicola Kawana"
        ],
        "directors": [
          "Danny Mulheron"
        ],
        "theatrical_release_date": "2014-99-99-Estimated"
      },
      {
        "name": "The Strange Case of Hyde",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/the_strange_case_of_hyde.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/the_strange_case_of_hyde.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/the_strange_case_of_hyde.jpg"
        },
        "pitch": "<p><strong>Two monsters</strong> clash in the street of London, in this <strong>sequel</strong> to <strong>Dr. Jekyll and Mr. Hyde</strong></p>\n",
        "description": "<p>London, 19th century: five years after Dr. Jekyl alias Mr. Hyde murdered numerous prostitutes, a new serial killer is terrorizing England&#39;s capital. To catch the monstruous criminal, Inspector Thomas Adye of Scotland Yard has to enlist the help of prison inmate Dr. Jekyl, who allegedly is cured of his murderous alter ego. But is the good Doctor really ready to roam the streets of London again?</p>\n\n<p><em>The Strange Case of Hyde</em> is based on the eponymous Dark Horse graphic novel, which itself is a sequel to Robert Louis Stevenson&#39;s classic novellla <em>Strange Case of Dr Jekyll and Mr Hyde</em>. </p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "9999-99-99-Estimated"
      },
      {
        "name": "Kolchak: The Night Stalker",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/kolchak_the_night_stalker.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/kolchak_the_night_stalker.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/kolchak_the_night_stalker.jpg"
        },
        "pitch": "<p><strong>Johnny Depp</strong> investigates supernatural occurrences under the direction of <strong>Edgar Wright</strong></p>\n",
        "description": "<p><em>Kolchak: The Night Stalker</em> is based on the eponymous 1970&#39;s TV series of the same name, where Carl Kolchak (Johnny Depp), an investigative journalist, is given leads that take him to dark, mysterious places that involve the supernatural.</p>\n\n<p>Edgar Wright is attached to direct, having pulled out of Marvel&#39;s Ant-Man. <em>Kolchak: The Night Stalker</em> is scribed by D.V. DeVincentis (<em>High Fidelity, Grosse Pointe Blank</em>).</p>\n",
        "actors": [
          "Johnny Depp"
        ],
        "directors": [
          "Edgar Wright"
        ],
        "theatrical_release_date": "9999-99-99-Estimated"
      },
      {
        "name": "Man Under",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/man_under.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/man_under.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/man_under.jpg"
        },
        "pitch": "<p><strong>Tim Robbins</strong> returns to the director chair with this <strong>fantastically cast comedy</strong></p>\n",
        "description": "<p>When an ordinary American family (consisting of Tim Robbins, Michelle Pfeiffer, and Chloe Grace Moretz) is featured in a trendy photography exhibition, they find themselves suddenly thrust into the spotlight of the modern art world.</p>\n\n<p>Tim Robbins will make his return to the director&#39;s chair for the first time since 1999&#39;s <em>Cradle Will Rock</em> with this family dramedy, written by <em>The Secret</em> screenwriter Ann Cherkis.</p>\n",
        "actors": [
          "Tim Robbins",
          "Michelle Pfeiffer",
          "Chloe Grace Moretz"
        ],
        "directors": [
          "Tim Robbins"
        ],
        "theatrical_release_date": "2014-99-99-Estimated"
      },
      {
        "name": "Fast & Furious 8",
        "images": {
          "w380": "assets/images/w380/9999-99-99-Estimated/fast_&_furious_8.jpg",
          "w600": "assets/images/w600/9999-99-99-Estimated/fast_&_furious_8.jpg",
          "w920": "assets/images/w920/9999-99-99-Estimated/fast_&_furious_8.jpg"
        },
        "pitch": "<p>A furiously fast <strong>eigth part</strong> of the incredibly succesful <strong>action series</strong></p>\n",
        "description": "<p>An 8th part of the <em>Fast &amp; the Furious</em> franchise is on the horizon with Lucas Black (<em>Fast &amp; the Furious: Tokyo Drift</em>) set to reprise his role a Sean Boswell.  </p>\n",
        "actors": [
          "Lucas Black"
        ],
        "directors": [],
        "theatrical_release_date": "9999-99-99-Estimated"
      },
      {
        "name": "Reboot",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/reboot.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/reboot.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/reboot.jpg"
        },
        "pitch": "<p><strong>Teenage zombies</strong> fight for <strong>justice</strong> in a <strong>dystopian future</strong> </p>\n",
        "description": "<p>After a deadly virus infects the human race, one corporation discovers a way to reanimate the dead for use as soldiers. The catch? The longer the time between death and reanimation, the less human the subject will be. 17-year-old Wren Connolly was dead for long enough to render her a cold, emotionless terminator. Yet, when Wren is tasked with recruiting Callum Reyes, a newcomer with most of his emotional instincts still in tact, she finds herself questioning right and wrong for the first time since her human life ended.</p>\n\n<p><em>Reboot</em> is based on the eponymous young adult novel by Amy Tintera, on shelves May 2013, and will be adapted by Lindsay Devlin, the scribe behind the more classical literary adaptation, Sleeping Beauty.</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2015-99-99-Estimated"
      },
      {
        "name": "The Second Best Exotic Marigold Hotel",
        "images": {
          "w380": "assets/images/w380/2015-03-06/the_second_best_exotic_marigold_hotel.jpg",
          "w600": "assets/images/w600/2015-03-06/the_second_best_exotic_marigold_hotel.jpg",
          "w920": "assets/images/w920/2015-03-06/the_second_best_exotic_marigold_hotel.jpg"
        },
        "pitch": "<p>More <strong>hilarious</strong> and <strong>bittersweet</strong> tales from the British <strong>senior</strong> residence in <strong>India</strong> </p>\n",
        "description": "<p>A sequel to the 2011 surprise hit continues its charm with the wit-fuelled title, <em>The Second Best Exotic Marigold Hotel</em>.</p>\n\n<p>The movie centers on  a group of senior residents of an elderly person&#39;s retreat in India played by acting legends Judi Dench (Skyfall), Maggie Smith (Downton Abbey) and Bill Nighy (<em>Love Actually</em>). The exotic home is run by the sympathetic but slightly incompetent Sonny Kapoor (Dev Patel).</p>\n\n<p>The primary cast members of <em>The Best Exotic Marigold Hotel</em> all return for a sequel making <em>The Second Best Marigold Hotel</em> a very mature class reunion indeed. </p>\n",
        "actors": [
          "Maggie Smith",
          "Bill Nighy",
          "Judi Dench",
          "Dev Patel",
          "Richard Gere",
          "Tamsin Greig",
          "David Strathairn",
          "Celia Imrie",
          "Tena Desae",
          "Lillete Dubey",
          "Ronald Pickup"
        ],
        "directors": [
          "John Madden"
        ],
        "theatrical_release_date": "2015-03-06"
      },
      {
        "name": "Addicted",
        "images": {
          "w380": "assets/images/w380/2014-10-10/addicted.jpg",
          "w600": "assets/images/w600/2014-10-10/addicted.jpg",
          "w920": "assets/images/w920/2014-10-10/addicted.jpg"
        },
        "pitch": "<p>A <strong>red-hot</strong> tale of female <strong>sex addiction</strong> based on <strong>Zane&#39;s best-seller</strong></p>\n",
        "description": "<p>Zoe Reynard (Sharon Leal) is an African American business woman who succesfuly manages to have a succesful career and be married to the man of her dreams. Or so it seems. The dark truth: Zoe is addicted - addicted to sex. Her perilious escapades of torrid lust threaten to destroy her career, her life - and her sanity. </p>\n\n<p><em>Addicted</em> is based on Zane&#39;s best-seller of the same name. </p>\n",
        "actors": [
          "Kat Graham",
          "Sharon Leal",
          "Tasha Smith",
          "Tyson Beckford",
          "William Levy",
          "Emayatzy Corinealdi",
          "Boris Kodjoe",
          "Garrett Hines"
        ],
        "directors": [
          "Bille Woodruff"
        ],
        "theatrical_release_date": "2014-10-10"
      },
      {
        "name": "Punk's Dead: SLC Punk 2",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/punk's_dead_slc_punk_2.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/punk's_dead_slc_punk_2.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/punk's_dead_slc_punk_2.jpg"
        },
        "pitch": "<p>The sequel to the <strong>90s hit comedy SLC Punk!</strong> </p>\n",
        "description": "<p>After 18 years of waiting, crowd-funding has birthed a sequel to James Merendino&#39;s cult comedy <em>SLC Punk!</em>.</p>\n\n<p>Set in Salt Lake City, Utah, <em>Punk&#39;s Dead: SLC Punk 2</em> follows a small group of punks in America&#39;s most conservative city, the movie sees Devon Sawa, Adam Pascal and James Duval all reprise their roles from the popular 90s comedy.</p>\n\n<p><em>Punk&#39;s Dead: SLC Punk 2</em> is written and directed by James Merendino, who also created the first movie.</p>\n",
        "actors": [
          "Devon Sawa",
          "Sarah Clarke",
          "James Duval",
          "Hannah Marks",
          "Ben Schnetzer",
          "Adam Pascal",
          "Michael A. Goorjian",
          "Machine Gun Kelly",
          "Jenny Jaffe",
          "Jarrod Phillips",
          "Tim Drake",
          "Levi Wilson",
          "Emma Pace",
          "Ricky Egan"
        ],
        "directors": [
          "James Merendino"
        ],
        "theatrical_release_date": "2014-99-99-Estimated"
      },
      {
        "name": "What If",
        "images": {
          "w380": "assets/images/w380/2014-08-08/what_if.jpg",
          "w600": "assets/images/w600/2014-08-08/what_if.jpg",
          "w920": "assets/images/w920/2014-08-08/what_if.jpg"
        },
        "pitch": "<p>Can <strong>Daniel Radcliffe</strong> escape the dreaded <strong>friend zone</strong>?</p>\n",
        "description": "<p>Meet Chantry and Wallace, the Harry and Sally for a new generation! </p>\n\n<p>Daniel Radcliffe stars as Wallace, a medical school dropout who has had his fair share of bad relationships. And he is about to embark on the most frustrating one yet - when he falls in love with the enchanting Chantry (Zoe Kazan) at a party. As can be expected, the beautiful young woman is already in a long term relationship with her dependable boyfriend Ben (Rafe Spall). Wallace decides to settle for the next best thing: a platonic relationship. But as sparks continue to fly, their friendship is repeatedly put to the test. </p>\n\n<p>Girls leading man Adam Driver (Star Wars: Episode VII) co-stars as Wallace&#39;s best buddy.</p>\n\n<p><em>What If</em> (formerly titled <em>The F Word</em>) is based on the play <em>Cigars and Toothpaste</em> by <strong>T.J. Dawe</strong>. The romantic comedy has a long production history including a change of leading men: Casey Affleck was initially in line to play Wallace.</p>\n",
        "actors": [
          "Zoe Kazan",
          "Daniel Radcliffe",
          "Adam Driver",
          "Rafe Spall",
          "Meghan Heffern",
          "Jemima Rooper",
          "Megan Park",
          "Amanda Crew",
          "Mackenzie Davis",
          "Lucius Hoyos",
          "Tommie-Amber Pirie",
          "Jonathan Cherry",
          "Rebecca Northan",
          "Jordan Hayes",
          "Oona Chaplin",
          "Adam Fergus"
        ],
        "directors": [
          "Michael Dowse"
        ],
        "theatrical_release_date": "2014-08-08"
      },
      {
        "name": "Life",
        "images": {
          "w380": "assets/images/w380/2014-99-99-Estimated/life.jpg",
          "w600": "assets/images/w600/2014-99-99-Estimated/life.jpg",
          "w920": "assets/images/w920/2014-99-99-Estimated/life.jpg"
        },
        "pitch": "<p>A <strong>James Dean biopic</strong> with heart-throb <strong>Robert Pattinson</strong></p>\n",
        "description": "<p><em>Life</em> centers on the relationship between 1950s movie star James Dean (Dane DeHaan) and photographer Dennis Stock (Robert Pattinson). Stock first discovered Dean shortly before his ascent to stardom thanks to <em>East of Eden</em>, and travelled the country with him taking snaps for Life magazine. These photos would go on to become legendary and make Dean a Hollywood icon.</p>\n\n<p>The biopic is being helmed by Anton Corbijn (<em>The American</em>). The famous music video director proved his talent at biopics with his stylish feature film debut, <em>Control</em>, which portrayed the life of tragic Joy Division frontman, <strong>Ian Curtis</strong>. </p>\n",
        "actors": [
          "Robert Pattinson",
          "Dane DeHaan",
          "Ben Kingsley",
          "Alessandra Mastronardi"
        ],
        "directors": [
          "Anton Corbijn"
        ],
        "theatrical_release_date": "2014-99-99-Estimated"
      },
      {
        "name": "Monty Clift",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/monty_clift.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/monty_clift.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/monty_clift.jpg"
        },
        "pitch": "<p><strong>Perfect</strong> casting? <strong>Matt Bomer</strong> stars as screen icon <strong>Montgomery Clift</strong></p>\n",
        "description": "<p>Matt Bomer (White Collar) stars as Montgomery Clift, the legendary Hollywood icon. In his prime, Monty Clift was considered among the best method actors in the world, right up there with Marlon Brando. A horrible car accident left the emotionally fragile thespian disturbed till the end of his life...</p>\n",
        "actors": [
          "Matt Bomer"
        ],
        "directors": [
          "Larry Moss"
        ],
        "theatrical_release_date": "2015-99-99-Estimated"
      },
      {
        "name": "Kill Bill: The Whole Bloody Affair",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/kill_bill_the_whole_bloody_affair.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/kill_bill_the_whole_bloody_affair.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/kill_bill_the_whole_bloody_affair.jpg"
        },
        "pitch": "<p><strong>Quentin Tarantino</strong> delivers <strong>the ultimate cut of Kill Bill</strong>!</p>\n",
        "description": "<p>Quentin Tarantino&#39;s <em>Kill Bill</em> as it was originally intended: an ultra-long martial arts epic!</p>\n\n<p>Uma Thurman stars as the former assassin The Bride who exacts revenge on those who killed her unborn child: her former lover and ex-partner in crime Bill (David Carradine) and the Deadly Viper Assassination Squad.</p>\n\n<p>The Oscar-winning director originally intended <em>Kill Bill</em> to be released as one movie. Instead the Uma Thurman starrer was diveded into two individual films: <em>Kill Bill: Vol. 1</em> and <em>Kill Bill: Vol. 2</em>.</p>\n",
        "actors": [
          "Uma Thurman",
          "Lucy Liu",
          "David Carradine",
          "Vivica A. Fox",
          "Daryl Hannah",
          "Michael Madsen",
          "Julie Dreyfus",
          "Chiaki Kuriyama",
          "Sonny Chiba",
          "Michael Parks",
          "Bo Svenson"
        ],
        "directors": [
          "Quentin Tarantino"
        ],
        "theatrical_release_date": "2015-99-99-Estimated"
      },
      {
        "name": "Dragon Blade",
        "images": {
          "w380": "assets/images/w380/2015-99-99-Estimated/dragon_blade.jpg",
          "w600": "assets/images/w600/2015-99-99-Estimated/dragon_blade.jpg",
          "w920": "assets/images/w920/2015-99-99-Estimated/dragon_blade.jpg"
        },
        "pitch": "<p><strong>Jackie Chan</strong> and <strong>Adrien Brody</strong> team up in <strong>ancient China</strong></p>\n",
        "description": "<p>Jackie Chan returns with an epic battle when Chinese and Roman soldiers join forces!</p>\n\n<p><em>Dragon Blade</em> revolves around Lucius (John Cusack), a Roman General who leads 1,000 soldiers into Han Dynasty, China. When the soldiers cross paths with military leader Huo An (Jackie Chan), they must join forces in order to defend Chinese borders against Tiberius (Adrien Brody, who has assassinated Rome&#39;s Consul Crassus and is in pusuit of Lucius with 100,000 men.</p>\n\n<p>This period epic has a record-breaking budget for a Chinese film. The film is inspired by real findings of Roman ruins in Liqian village, Gansu. </p>\n",
        "actors": [
          "Jackie Chan",
          "John Cusack",
          "Adrien Brody",
          "Peng Lin",
          "Paul Philip Clark",
          "Tomer Oz",
          "Si Won Choi",
          "Philippe Joly",
          "Joel Adrian",
          "Alfred Hsing",
          "Vander McLeod",
          "Harry Oram",
          "Pierre Bourdaud",
          "Miroslav Karel",
          "Fatih Gurlu"
        ],
        "directors": [
          "Daniel Lee"
        ],
        "theatrical_release_date": "2015-99-99-Estimated"
      },
      {
        "name": "Flash and Green Lantern Team-up",
        "images": {
          "w380": "assets/images/w380/2017-99-99-Estimated/flash_and_green_lantern_team-up.jpg",
          "w600": "assets/images/w600/2017-99-99-Estimated/flash_and_green_lantern_team-up.jpg",
          "w920": "assets/images/w920/2017-99-99-Estimated/flash_and_green_lantern_team-up.jpg"
        },
        "pitch": "<p><strong>Green Lantern</strong> and <strong>Flash</strong> re-team after <strong>Justice League</strong> movie!</p>\n",
        "description": "<p>DC superheroes Green Lantern and Flash are rumored to be co-starring in their own movie after  Justice League.</p>\n\n<p>With Batman v. Superman: Dawn of Justice featuring two of the franchise&#39;s biggest names in one movie, it isn&#39;t surprising that a Green Lantern/Flash is on the way too. The Flash and Green Lantern Team-up is one of three movies rumored to follow on from the <em>Justice League</em> movie, along with Wonder Woman and Man of Steel 2.</p>\n\n<p>While we may have to wait for the <em>Justice League</em> movie to see Green Lantern back in action, the fastest man on earth can currently be seen on The CW Television Network&#39;s The Flash.</p>\n",
        "actors": [],
        "directors": [],
        "theatrical_release_date": "2017-99-99-Estimated"
      },
      {
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
        "theatrical_release_date": "2019-99-99-Estimated"
      },
      {
        "name": "Bourne 5",
        "images": {
          "w380": "assets/images/w380/2016-07-15/bourne_5.jpg",
          "w600": "assets/images/w600/2016-07-15/bourne_5.jpg",
          "w920": "assets/images/w920/2016-07-15/bourne_5.jpg"
        },
        "pitch": "<p>The <strong>Bourne franchise</strong> goes in round <strong>5</strong> with <strong>Jeremy Renner</strong></p>\n",
        "description": "<p>Jeremy Renner (The Immigrant) will return as genetically enhanced black ops specialist Aaron Cross in the fifth part of the <em>Bourne</em> franchise. </p>\n",
        "actors": [
          "Jeremy Renner"
        ],
        "directors": [
          "Justin Lin"
        ],
        "theatrical_release_date": "2016-07-15"
      },
      {
        "name": "Sinister Six",
        "images": {
          "w380": "assets/images/w380/2016-11-11/sinister_six.jpg",
          "w600": "assets/images/w600/2016-11-11/sinister_six.jpg",
          "w920": "assets/images/w920/2016-11-11/sinister_six.jpg"
        },
        "pitch": "<p><strong>Spider-Man</strong>&#39;s <strong>greatest enemies</strong> unite for <strong>massive spin-off</strong>!</p>\n",
        "description": "<p>The Amazing Spider-Man 2 spin-off could see six of the title hero’s greatest enemies unite - and pose a seemingly unbeatable threat to his life and the safety of humanity. </p>\n\n<p>The <em>Sinister Six</em> is only one of two <em>Amazing Spider-Man</em> spin-offs, the other being Venom, centering on the titular fan favorite.</p>\n",
        "actors": [],
        "directors": [
          "Drew Goddard"
        ],
        "theatrical_release_date": "2016-11-11"
      },
      {
        "name": "The Man From Primrose Lane",
        "images": {
          "w380": "assets/images/w380/2016-99-99-Estimated/the_man_from_primrose_lane.jpg",
          "w600": "assets/images/w600/2016-99-99-Estimated/the_man_from_primrose_lane.jpg",
          "w920": "assets/images/w920/2016-99-99-Estimated/the_man_from_primrose_lane.jpg"
        },
        "pitch": "<p><strong>Murder</strong>, <strong>time travel</strong> and <strong>Bradley Cooper</strong> - what&#39;s not to <strong>like</strong>?</p>\n",
        "description": "<p><em>The Man From Primrose Lane</em> centers on true-crime writer David Neff (Bradley Cooper), who starts investigating the murder of a mysterious hermit known as &#39;the man with a thousand mittens.&#39; This investigation will lead David to unexpected and dangerous places, and demand from him to go back in time. Literally. </p>\n\n<p><em>The Man From Primrose Lane</em> is based on <strong>James Renner</strong>&#39;s eponymous novel. </p>\n",
        "actors": [
          "Bradley Cooper"
        ],
        "directors": [],
        "theatrical_release_date": "2016-99-99-Estimated"
      },
      {
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
        "theatrical_release_date": "2018-02-16"
      },
      {
        "name": "Shazam",
        "images": {
          "w380": "assets/images/w380/2016-99-99-Estimated/shazam.jpg",
          "w600": "assets/images/w600/2016-99-99-Estimated/shazam.jpg",
          "w920": "assets/images/w920/2016-99-99-Estimated/shazam.jpg"
        },
        "pitch": "<p><strong>Captain Marvel</strong>, of <strong>DC</strong>&#39;s most <strong>revered superheroes</strong>, to get his own movie </p>\n",
        "description": "<p>Every time young Billy Batson says the word &#39;Shazam,&#39; he is transformed into the adult superhero Captain Marvel, the world&#39;s mightiest mortal. This power was bestowed to him by the wizard Shazam. </p>\n\n<p>The long gestating project is based on the Captain Marvel comics, published first by Fawcett Comics and then later, famously, by DC Comics. </p>\n",
        "actors": [],
        "directors": [
          "Peter Segal"
        ],
        "theatrical_release_date": "2016-99-99-Estimated"
      },
      {
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
        "theatrical_release_date": "2017-04-07"
      },
      {
        "name": "Soul ReViver",
        "images": {
          "w380": "assets/images/w380/2016-99-99-Estimated/soul_reviver.jpg",
          "w600": "assets/images/w600/2016-99-99-Estimated/soul_reviver.jpg",
          "w920": "assets/images/w920/2016-99-99-Estimated/soul_reviver.jpg"
        },
        "pitch": "<p>The <strong>director</strong> of <strong>The Last Samurai</strong> adapts <strong>action-heavy</strong> <strong>manga series</strong>!</p>\n",
        "description": "<p><em>The Last Samurai</em> director Edward Zwick (Heart of the Sea) continues his flirt with Japanese cinema with <em>Soul ReViver</em>.</p>\n\n<p>Based on <strong>Tohru Fujisawa</strong> and <strong>Manabu Akishige</strong>&#39;s eponymous manga series, <em>Soul ReViver</em> centers on a former cop named Jin and a high school girl named Sekimachi. These &quot;soul revivers&quot; can go back and forth between the world of the living and the world of the dead, bringing back souls whose time hasn&#39;t arrived yet.</p>\n",
        "actors": [],
        "directors": [
          "Edward Zwick"
        ],
        "theatrical_release_date": "2016-99-99-Estimated"
      },
      {
        "name": "The Raid 3",
        "images": {
          "w380": "assets/images/w380/2016-99-99-Estimated/the_raid_3.jpg",
          "w600": "assets/images/w600/2016-99-99-Estimated/the_raid_3.jpg",
          "w920": "assets/images/w920/2016-99-99-Estimated/the_raid_3.jpg"
        },
        "pitch": "<p><strong>Epic</strong> final installment to the <strong>groundbreaking martial arts</strong> trilogy</p>\n",
        "description": "<p><em>The Raid 3</em>&#39;s story starts directly two hours before the end of The Raid 2: Berendal and will be the final bloody installment of Welsh director Gareth Evans&#39; bone-crunching trilogy. Following its groundbreaking martial arts prequels, the new movie promises to be more elegant and brutal than ever before. </p>\n",
        "actors": [
          "Iko Uwais"
        ],
        "directors": [
          "Gareth Evans"
        ],
        "theatrical_release_date": "2016-99-99-Estimated"
      },
      {
        "name": "Christ the Lord: Out of Egypt",
        "images": {
          "w380": "assets/images/w380/2016-03-23/christ_the_lord_out_of_egypt.jpg",
          "w600": "assets/images/w600/2016-03-23/christ_the_lord_out_of_egypt.jpg",
          "w920": "assets/images/w920/2016-03-23/christ_the_lord_out_of_egypt.jpg"
        },
        "pitch": "<p><strong>Anne Rice</strong>&#39;s biblical fictionalization comes to the <strong>big screen</strong></p>\n",
        "description": "<p><em>Christ The Lord: Out of Egypt</em> centers on the formative years of Jesus Christ. Still at a tender age, the seven-year-old boy and his family leave Egypt to return to Galilee where Jesus will come to terms with his identity, the importance of his existence and the journey that lies ahead of him.</p>\n\n<p><em>Christ The Lord: Out of Egypt</em> is based on <strong>Anne Rice</strong>&#39;s novel of the same name.</p>\n",
        "actors": [],
        "directors": [
          "Cyrus Nowrasteh"
        ],
        "theatrical_release_date": "2016-03-23"
      },
      {
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
        "theatrical_release_date": "2017-03-24"
      },
      {
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
        "theatrical_release_date": "2017-05-99"
      },
      {
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
        "theatrical_release_date": "2018-99-99-Estimated"
      },
      {
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
        "theatrical_release_date": "2018-99-99"
      },
      {
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
        "theatrical_release_date": "2017-99-99-Estimated"
      },
      {
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
        "theatrical_release_date": "2019-99-99-Estimated"
      },
      {
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
        "theatrical_release_date": "2018-05-04"
      },
      {
        "name": "How the Grinch Stole Christmas",
        "images": {
          "w380": "assets/images/w380/2017-11-17/how_the_grinch_stole_christmas.jpg",
          "w600": "assets/images/w600/2017-11-17/how_the_grinch_stole_christmas.jpg",
          "w920": "assets/images/w920/2017-11-17/how_the_grinch_stole_christmas.jpg"
        },
        "pitch": "<p><strong>Dr. Seuss&#39;</strong> notorious <strong>curmodgeon</strong> gets a much deserved <strong>animated movie</strong></p>\n",
        "description": "<p>Up on Mount Crumpit lives the curmodgeonly Grinch, bitter and alone except for his dog Max. When the Christmas holidays approach in the nearby village of Whoville, the Grinch decides  that he must find a way to &#39;keep Christmas from coming&#39; and concocts a devious plan to do just that...</p>\n\n<p><em>How the Grinch Stole Christmas</em> is based on <strong>Dr. Seuss</strong>&#39; eponymous children&#39;s story. The latter was already adapted into a  live-action feature starring Jim Carrey in 2000 and into a  half-hour TV animated special in 1966. </p>\n",
        "actors": [],
        "directors": [
          "Peter Candeland"
        ],
        "theatrical_release_date": "2017-11-17"
      },
      {
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
        "theatrical_release_date": "2018-05-18"
      },
      {
        "name": "Even Mice Belong in Heaven",
        "images": {
          "w380": "assets/images/w380/2017-99-99-Estimated/even_mice_belong_in_heaven.jpg",
          "w600": "assets/images/w600/2017-99-99-Estimated/even_mice_belong_in_heaven.jpg",
          "w920": "assets/images/w920/2017-99-99-Estimated/even_mice_belong_in_heaven.jpg"
        },
        "pitch": "<p><strong>Heartwarming animation</strong> based on popular Czech <strong>children&#39;s book</strong></p>\n",
        "description": "<p><em>Even Mice Belong in Heaven</em> is the touching story of predator and prey, having to learn to love one another.</p>\n\n<p>The movie focuses on a mouse and a fox, two of nature&#39;s mortal enemies. Following a fatal accident, the pair meets again in heaven. In their new environment, their story takes an unexpected turn.</p>\n\n<p><em>Even Mice Belong in Heaven</em> is adapted from the novel by <strong>Iva Prochazkova</strong>, who is also a script consultant on the movie.</p>\n",
        "actors": [],
        "directors": [
          "Denisa Grimmova Abrhamova",
          "Noro Drziak"
        ],
        "theatrical_release_date": "2017-99-99-Estimated"
      },
      {
        "name": "Pirates of the Caribbean: Dead Men Tell No Tales",
        "images": {
          "w380": "assets/images/w380/2017-07-07/pirates_of_the_caribbean_dead_men_tell_no_tales.jpg",
          "w600": "assets/images/w600/2017-07-07/pirates_of_the_caribbean_dead_men_tell_no_tales.jpg",
          "w920": "assets/images/w920/2017-07-07/pirates_of_the_caribbean_dead_men_tell_no_tales.jpg"
        },
        "pitch": "<p>Aye aye: <strong>Captain Jack Sparrow</strong> returns for a <strong>fifth time!</strong> </p>\n",
        "description": "<p>Aye aye me hearties: Johnny Depp has signed on to reprise his role as Captain Jack Sparrow in the fifth <em>Pirates of the Caribbean</em> movie.</p>\n\n<p><em>Pirates of the Caribbean: Dead Men Tell No Tales</em> follows our favorite captain on his search for the Trident, about which his father, Captain Teague (Keith Richards) has valuable information. As if the treasure hunt wasn’t dangerous enough as it is, Jack has to content with the angry ghost  of Captain Brand who still has unfinished business with Sparrow. </p>\n\n<p>The franchise has proven a treasure trove for the legendary thespian, who reportedly will be paid an unbelievable $116 million for the reprisal of his most famous role. <em>Pirates of the Caribbean 5</em> follows the worldwide success of the preeceding four <em>Pirates of the Caribbean</em> movies which have grossed a combined $1.6 billion worldwide.</p>\n",
        "actors": [
          "Johnny Depp",
          "Geoffrey Rush"
        ],
        "directors": [
          "Espen Sandberg",
          "Joachim Rønning"
        ],
        "theatrical_release_date": "2017-07-07"
      },
      {
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
        "theatrical_release_date": "2018-99-99-Estimated"
      },
      {
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
        "theatrical_release_date": "2018-99-99-Estimated"
      },
      {
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
        "theatrical_release_date": "2018-99-99-Estimated"
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
