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
        "name": "X-Men: Days Of Future Past",
        "images": {
          "w380": "images/w380/2014-05-23/x-men_days_of_future_past.jpg",
          "w600": "images/w600/2014-05-23/x-men_days_of_future_past.jpg"
        },
        "pitch": "<p><strong>X-Men: First Class sequel</strong> will unite the iconic <strong>original</strong> with the <strong>new cast</strong></p>\n",
        "description": "<p>The title <em>Days Of Future Past</em> suggests that the film will be based on the comic <em>The Uncanny X-Men</em>, which featured a storyline with that title. The latter is set in an alternative future where all mutants are hunted down by giant robots called Sentinels to be held captive in camps. The X-Men must travel back in time to change the course of history in order to prevent this. The beginning of <em>X-Men: Days Of Future Past</em> is set 11 years after its predecessor. </p>\n\n<p>Matthew Vaughn, director of the successful reboot <em>X-Men: First Class</em>, was originally set to direct again but dropped out in that capacity, although he has stayed on as a producer. Bryan Singer (<em>X-Men and X2: X-Men United</em>) is now the man helming the widely awaited <em>First Class</em> sequel and has stated that the script won´t stick completely to the source material. </p>\n\n<p>The &#39;original&#39; Professor X (Patrick Stewart), Magneto (Ian McKellen) and their former selves played by James McAvoy and  Michael Fassbender  respectively will all feature in the film.  Jennifer Lawrence and Nicholas Hoult are also returning to their roles, as is our favorite muscular mutant Hugh Jackman. <em>Game of Throne&#39;s</em> Peter Dinklage has also been signed up to make his first appearance in the <em>X-Men</em> franchise.</p>\n",
        "actors": [
          "James McAvoy",
          "Michael Fassbender",
          "Jennifer Lawrence",
          "Peter Dinklage",
          "Hugh Jackman",
          "Nicholas Hoult",
          "Shawn Ashmore",
          "Anna Paquin",
          "Ellen Page",
          "Ian McKellen",
          "Patrick Stewart",
          "Omar Sy",
          "Halle Berry",
          "Fan Bingbing",
          "Daniel Cudmore",
          "Adan Canto",
          "Evan Peters",
          "Josh Helman",
          "Booboo Stewart"
        ],
        "directors": [
          "Bryan Singer"
        ],
        "theatrical_release_date": "2014-05-23"
      },
      {
        "name": "Dawn of the Planet of the Apes",
        "images": {
          "w380": "images/w380/2014-07-11/dawn_of_the_planet_of_the_apes.jpg",
          "w600": "images/w600/2014-07-11/dawn_of_the_planet_of_the_apes.jpg"
        },
        "pitch": "<p>The <strong>spectacular sequel</strong> to <strong>Rise of the Planet of the Apes</strong>!</p>\n",
        "description": "<p>Set 10 years after the events depicted in <em>Rise of the Planet of the Apes</em>, this spectacular sequel showcases the escalating conflict between a group of human survivors and the nation of genetically enhanced apes led by Caesar (Andy Serkis). A fragile peace is reached but war is about to brake lose. And there can be only one dominant species on the planet. </p>\n\n<p>Rupert Wyatt (The Gambler), the director of the critically acclaimed predecessor, passed on the chance to helm <em>Dawn of the Planet of the Apes</em> due to a scheduling conflict. A suitable replacement was found swiftly in the person of Matt Reeves. The filmmaker has ample experience staging science fiction spectacle on a massive scale, having directed found footage epic <em>Cloverfield</em>. </p>\n",
        "actors": [
          "Jason Clarke",
          "Andy Serkis",
          "Judy Greer",
          "Kodi Smit-McPhee",
          "Enrique Murciano",
          "Toby Kebbell",
          "Keri Russell",
          "Gary Oldman",
          "Karin Konoval",
          "Kirk Acevedo",
          "Keir O'Donnell",
          "J.D. Evermore"
        ],
        "directors": [
          "Matt Reeves"
        ],
        "theatrical_release_date": "2014-07-11"
      },
      {
        "name": "Road to Paloma",
        "images": {
          "w380": "images/w380/2014-07-11/road_to_paloma.jpg",
          "w600": "images/w600/2014-07-11/road_to_paloma.jpg"
        },
        "pitch": "<p><strong>Native American life</strong> is examined in this biker movie by <strong>Jason Momoa</strong></p>\n",
        "description": "<p><em>Jason Momoa</em> (Game of Thrones) headlines his own directorial debut about a Native American returning to the Mojave Desert after having been pursued by the FBI. The towering biker exacted revenge on the murderers of his mother and now plans to spread her ashes in the Teton mountain range. </p>\n",
        "actors": [
          "Jason Momoa",
          "Lisa Bonet",
          "Sarah Shahi",
          "Jill Wagner",
          "Michael Raymond-James",
          "Linden Chiles",
          "Tanoai Reed",
          "Steve Reevis",
          "Chris Browning",
          "Wes Studi",
          "Timothy V. Murphy"
        ],
        "directors": [
          "Jason Momoa"
        ],
        "theatrical_release_date": "2014-07-11"
      },
      {
        "name": "Boyhood",
        "images": {
          "w380": "images/w380/2014-07-11/boyhood.jpg",
          "w600": "images/w600/2014-07-11/boyhood.jpg"
        },
        "pitch": "<p><strong>Richard Linklater</strong>&#39;s decade-spanning <strong>dream project</strong></p>\n",
        "description": "<p>Over a decade of toil comes to fruition in Richard Linklater&#39;s <em>Boyhood</em>. Starring Ethan Hawke (<em>Before Midnight</em>, <em>Training Day</em>) and Patricia Arquette (<em>Medium</em>) as the parents of a young boy (Ellar Coltrane), the drama follows his progression from the age of 6 until he&#39;s an 18-year old adult. </p>\n\n<p>Previously known as <em>Growing Up</em> and referred to as &#39;The 12 Year Project&#39;, <em>Boyhood</em> is another exercise in cinematic experimentation by Linklater. In order to catch Salmon&#39;s aging as precisely as possible, Linklater shot the equivalent of a short film yearly ever since 2002 - cinematic aging at its most realistic. That&#39;s commitment, right?</p>\n",
        "actors": [
          "Ellar Coltrane",
          "Patricia Arquette",
          "Ethan Hawke",
          "Evie Thompson",
          "Jordan Howard",
          "Nick Krause",
          "Tamara Jolaine"
        ],
        "directors": [
          "Richard Linklater"
        ],
        "theatrical_release_date": "2014-07-11"
      },
      {
        "name": "Land Ho!",
        "images": {
          "w380": "images/w380/2014-07-11/land_ho!.jpg",
          "w600": "images/w600/2014-07-11/land_ho!.jpg"
        },
        "pitch": "<p>The <strong>sweet</strong> indie <strong>road movie</strong> is a <strong>hilarious crowd-pleaser</strong>! </p>\n",
        "description": "<p>With the landscape of Iceland providing the spectacular backround, <em>Land Ho!</em> follows ex-brothers-in-law Colin (Paul Eenhoorn) and Mitch (Earl Lynn Nelson) on their epic road trip. The two senior citizens are quite different. Where Colin is a tender and gentle man, Mitch is a rambunctious force of nature, foul-mouthed and full of life. Together they embark on a bittersweet exploration of Iceland. </p>\n\n<p>A warm comedy focused on the simple things in life, <em>Land Ho!</em> took the Sundance Film Festival 2014 by storm. </p>\n",
        "actors": [
          "Paul Eenhoorn",
          "Earl Lynn Nelson",
          "Karrie Crouse",
          "Elizabeth McKee",
          "Alice Olivia Clarke"
        ],
        "directors": [
          "Martha Stephens",
          "Aaron Katz"
        ],
        "theatrical_release_date": "2014-07-11"
      },
      {
        "name": "Mood Indigo",
        "images": {
          "w380": "images/w380/2014-07-18/mood_indigo.jpg",
          "w600": "images/w600/2014-07-18/mood_indigo.jpg"
        },
        "pitch": "<p><strong>Michel Gondry</strong> is back to his quirky <strong>brilliance</strong> in this <strong>imaginative</strong> love story</p>\n",
        "description": "<p>Set in a fanciful world where reality has dream-like qualities, we find Colin (Romain Duris), a successful entrepreneur and creator of a cocktail-mixing piano. Longing to find love, he eventually meets the effervescent Chloë (Audrey Tautou), the manifestation of a Duke Ellington song. However, their blossoming romance becomes tainted when Chloë suffers from an unusual illness caused by a flower growing in her lungs. Desperate to save her, Colin will do everything he can to keep his love alive. </p>\n\n<p>Michel Gondry (<i>Eternal Sunshine of the Spotless Mind</i>, <em>Science of Sleep</em>) directs the movie, which is an adaptation of <strong>Boris Vian</strong>&#39;s novel of the same name. </p>\n",
        "actors": [
          "Audrey Tautou",
          "Romain Duris",
          "Omar Sy",
          "Gad Elmaleh",
          "Tilly Scott Pedersen",
          "Aïssa Maïga",
          "Charlotte Le Bon ",
          "Philippe Torreton",
          "Sacha Bourdo",
          "Vincent Rottiers",
          "Laurent Lafitte",
          "Alain Chabat",
          "Zinedine Soualem"
        ],
        "directors": [
          "Michel Gondry"
        ],
        "theatrical_release_date": "2014-07-18"
      },
      {
        "name": "Sex Tape",
        "images": {
          "w380": "images/w380/2014-07-18/sex_tape.jpg",
          "w600": "images/w600/2014-07-18/sex_tape.jpg"
        },
        "pitch": "<p>Will a <strong>Jason Segel</strong> and <strong>Cameron Diaz</strong> <strong>Sex Tape</strong> surface in this <strong>rom-com</strong>?</p>\n",
        "description": "<p>Jay (Jason Segel) and Annie (Cameron Diaz) used to have an active sex life, but after ten years and two kids, the couple are struggling to be intimate. To spice things up a little, they decide to make a kinky sex tape. However, the next day the tape is missing - leading to a lot of panic and a frantic quest to retrieve it!</p>\n\n<p>Director Jake Kasdan re-teams with his <em>Bad Teacher</em> stars Cameron Diaz and  Jason Segel for this hilariously rauchy rom-com.</p>\n",
        "actors": [
          "Jason Segel",
          "Cameron Diaz",
          "Rob Corddry",
          "Jack Black",
          "Rob Lowe",
          "Giselle Eisenberg",
          "Ellie Kemper",
          "Jolene Blalock",
          "Randall Park",
          "Timothy Brennen",
          "Kate Jurdi"
        ],
        "directors": [
          "Jake Kasdan"
        ],
        "theatrical_release_date": "2014-07-18"
      },
      {
        "name": "I Origins",
        "images": {
          "w380": "images/w380/2014-07-18/i_origins.jpg",
          "w600": "images/w600/2014-07-18/i_origins.jpg"
        },
        "pitch": "<p>Director of  <strong>Another Earth</strong> gets set for second <strong>cosmogonal masterpiece</strong></p>\n",
        "description": "<p>A scientist on the verge of a breakthrough realizes that if his theory is accurate, it might change society as we know it, in terms of our beliefs in science and spirituality. He travels to India in search of Salomina, a young Indian girl who he believes is the only person that could prove or disprove his theory.</p>\n\n<p><em>I Origins</em>  comes from breakthrough filmmaker Mike Cahill. The director&#39;s first feature film <em>Another Earth</em> won twice at the 2011 Sundance Film Festival. </p>\n",
        "actors": [
          "Michael Pitt",
          "Brit Marling",
          "Astrid Berges-Frisbey",
          "Steven Yeun",
          "Archie Panjabi",
          "Kashish",
          "Cara Seymour",
          "William Mapother"
        ],
        "directors": [
          "Mike Cahill"
        ],
        "theatrical_release_date": "2014-07-18"
      },
      {
        "name": "Wish I Was Here",
        "images": {
          "w380": "images/w380/2014-07-18/wish_i_was_here.jpg",
          "w600": "images/w600/2014-07-18/wish_i_was_here.jpg"
        },
        "pitch": "<p><strong>Zach Braff</strong>&#39;s tragicomedic quasi <strong>follow-up</strong> to <strong>Garden State</strong></p>\n",
        "description": "<p>Aiden Bloom (Zach Braff) is 35 and still reaching for that horizon: The struggling actor continually fantasizes about being the great futuristic Space-Knight he always wanted to be when he was a kid. When his ailing father (Mandy Patinkin) can&#39;t look after his 5 and 12-year old children anymore, Aiden reluctantly agrees to homeschool them.  What ensues is chaos and life lesson learned the unexpected way...</p>\n\n<p>Zach Braff described <em>Wish I Was Here</em> as a follow-up in tone to his directorial debut <em>Garden State</em>. It&#39;s not directly connected to that film though. The film premiered at the Sundance Film Festival 2014.</p>\n",
        "actors": [
          "Zach Braff",
          "Mandy Patinkin",
          "Kate Hudson",
          "Josh Gad",
          "Joey King",
          "Pierce Gagnon",
          "Ashley Greene",
          "Donald Faison",
          "James Avery",
          "Michael Weston",
          "McKaley Miller"
        ],
        "directors": [
          "Zach Braff"
        ],
        "theatrical_release_date": "2014-07-18"
      },
      {
        "name": "The Purge: Anarchy",
        "images": {
          "w380": "images/w380/2014-07-18/the_purge_anarchy.jpg",
          "w600": "images/w600/2014-07-18/the_purge_anarchy.jpg"
        },
        "pitch": "<p>The <strong>sequel</strong> to the horrifying 2013 <strong>surprise hit</strong> </p>\n",
        "description": "<p>The sequel to the surprise hit The Purge is set in the same dystopian society. The rule is simple: For one night a year, all crime is legal. This so-called &#39;Purge&#39; allows mobs of murderous folk to &#39;vent&#39; their anger - an oppostunity of which they take full advantage.</p>\n\n<p>Frank Grillo (The Grey, <em>Minority Report</em>) stars in <em>The Purge: Anarchy</em>, following his appearance in Captain America: The Winter Soldier. </p>\n",
        "actors": [
          "Frank Grillo",
          "Michael K. Williams",
          "Carmen Ejogo",
          "Zach Gilford",
          "Kiele Sanchez",
          "Zoe Soul",
          "Keith Stanfield",
          "Edwin Hodge",
          "Nicholas Gonzalez",
          "Cortney Palm",
          "Brandon Keener"
        ],
        "directors": [
          "James DeMonaco"
        ],
        "theatrical_release_date": "2014-07-18"
      },
      {
        "name": "Planes: Fire & Rescue",
        "images": {
          "w380": "images/w380/2014-07-18/planes_fire_&_rescue.jpg",
          "w600": "images/w600/2014-07-18/planes_fire_&_rescue.jpg"
        },
        "pitch": "<p><strong>Dusty</strong> Crophopper becomes a <strong>firefighter</strong> in the <strong>sequel</strong> to <strong>Disney</strong>&#39;s <strong>Planes</strong>! </p>\n",
        "description": "<p>Dusty Crophopper (Dane Cook) returns in Planes: Fire &amp; Rescue, the sequel to 2013&#39;s Planes. After he discovers he may never race again, Dusty heads to Piston Peak and decides to become a firefighter. There, he is taught by the legendary Blade Ranger and joins a quirky team, including Lil&#39; Dipper (Julie Bowen), who takes Dusty to her heart. Then, when a massive wildfire burns in Piston Peak, Dusty faces his toughest task yet.</p>\n\n<p>Bobs Gannaway will direct Planes: Fire &amp; Rescue, which is set to be released just one year after the original, on July 18th 2014.</p>\n",
        "actors": [
          "Julie Bowen",
          "Dane Cook",
          "Regina King",
          "Jerry Stiller",
          "Fred Willard",
          "Wes Studi",
          "Anne Meara",
          "Dale Dye",
          "Corri English",
          "Ed Harris",
          "Erik Estrada"
        ],
        "directors": [
          "Bobs Gannaway"
        ],
        "theatrical_release_date": "2014-07-18"
      },
      {
        "name": "Alive Inside",
        "images": {
          "w380": "images/w380/2014-07-18/alive_inside.jpg",
          "w600": "images/w600/2014-07-18/alive_inside.jpg"
        },
        "pitch": "<p>A <strong>documentary</strong> about the powerful <strong>impact</strong> of music on <strong>Alzheimer patients</strong></p>\n",
        "description": "<p>On a whim, social worker Dan Cohen decided to bring iPods to the nursing home where he works. </p>\n\n<p><em>Alive Inside</em> revolves around the consequences this decision had for the patients suffering from Alzheimer disease who found themselves “awakened” through music form their pasts. Excited Dan turned to famous neurologist Dr. Oliver Sacks – who is played by Robin Williams in <em>Awakenings</em> – to further explore what effects music has on our brains. </p>\n\n<p><em>Alive Inside: A Story of Music &amp; Memory</em> wil have its world premiere at the Sundance Film Festival 2014. </p>\n",
        "actors": [
          "Dan Cohen",
          "Louise Dueno",
          "Nell Hardie",
          "Norman Hardie",
          "Michael Rossato-Bennett",
          "Yvonne Russell"
        ],
        "directors": [
          "Michael Rossato-Bennett"
        ],
        "theatrical_release_date": "2014-07-18"
      },
      {
        "name": "Among Ravens",
        "images": {
          "w380": "images/w380/2014-07-18/among_ravens.jpg",
          "w600": "images/w600/2014-07-18/among_ravens.jpg"
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
        "theatrical_release_date": "2014-07-18"
      },
      {
        "name": "A Master Builder",
        "images": {
          "w380": "images/w380/2014-07-23/a_master_builder.jpg",
          "w600": "images/w600/2014-07-23/a_master_builder.jpg"
        },
        "pitch": "<p><strong>Jonathan Demme</strong> helms drama about <strong>dying egomaniac</strong> making peace with his <strong>sins</strong></p>\n",
        "description": "<p>Oscar-winning director Jonathan Demme (<em>Silence of the Lambs, The Manchurian Candidate</em>) helms <em>A Master Builder</em>, the story of a dying man trying to make amends.</p>\n\n<p>Halvard Solness (Wallace Shawn) is an architect nearing the end of his life. Having spent his lifetime being an abusive egotist, he attempts to make peace with his wife Aline (Julie Hagerty), his employees and his mistress.</p>\n\n<p><em>A Master Builder</em> is a re-working of the 1892 play by <strong>Henrik Ibsen</strong>. The movie is adapted by Wallace Shawn, who also stars in the drama.</p>\n",
        "actors": [
          "Wallace Shawn",
          "Julie Hagerty",
          "Lisa Joyce",
          "Larry Pine",
          "Andre Gregory",
          "Emily Cass McDonnell",
          "Jeff Biehl",
          "Sheilagh Weymouth",
          "Winsome Brown",
          "Joanna Howard",
          "Marjorie Graham"
        ],
        "directors": [
          "Jonathan Demme"
        ],
        "theatrical_release_date": "2014-07-23"
      },
      {
        "name": "Hercules",
        "images": {
          "w380": "images/w380/2014-07-25/hercules.jpg",
          "w600": "images/w600/2014-07-25/hercules.jpg"
        },
        "pitch": "<p><strong>Perfect</strong> casting: <strong>Dwayne Johnson</strong> as <strong>Hercules!</strong></p>\n",
        "description": "<p><em>Hercules</em> follows the eponymous warrior (Dwayne Johnson aka The Rock) as he leads a team of mercenaries to train the Thracian army in order to defeat an evil warlord.</p>\n\n<p>With Disney&#39;s take on the character being the most famous in recent memory, it was time for a brutal epic version of the character&#39;s adventures. <em>Hercules</em> is exactly that, having been based on <strong>Steve Moore</strong>&#39;s and <strong>Admira Wijaya</strong>&#39;s graphic novel <i>Hercules: The Thracian Wars</i>.  </p>\n",
        "actors": [
          "Dwayne Johnson",
          "Ian McShane",
          "John Hurt",
          "Joseph Fiennes",
          "Rufus Sewell",
          "Aksel Hennie",
          "Isaac Andrews",
          "Ingrid Bolsø Berdal",
          "Irina Shayk",
          "Reece Ritchie",
          "Joe Anderson",
          "Tobias Santelmann"
        ],
        "directors": [
          "Brett Ratner"
        ],
        "theatrical_release_date": "2014-07-25"
      },
      {
        "name": "Very Good Girls",
        "images": {
          "w380": "images/w380/2014-07-25/very_good_girls.jpg",
          "w600": "images/w600/2014-07-25/very_good_girls.jpg"
        },
        "pitch": "<p><strong>Dakota Fanning</strong> and <strong>Elizabeth Olsen</strong> plan to lose their <strong>virginity</strong> in <strong>indie drama</strong></p>\n",
        "description": "<p>Two lifelong best friends (Dakota Fanning and Elizabeth Olsen) make a pact to lose their virginity during their first summer out of high school. But when they both fall for the same guy (Boyd Holbrook), their friendship is tested for the first time. </p>\n\n<p>Naomi Foner, the writer behind<em>Tunning On Empty</em> gives her directorial debut with <em>Very Good Girls</em>, which also boasts Demi Moore and Richard Dreyfuss as Olsen&#39;s parents and Peter Sarsgaard as Fanning&#39;s boss at her summer job. Ex-Rilo Kiley frontwoman Jenny Lewis adds an indie-rock edge to the score. </p>\n",
        "actors": [
          "Elizabeth Olsen",
          "Dakota Fanning",
          "Kiernan Shipka",
          "Clark Gregg",
          "Ellen Barkin",
          "Peter Sarsgaard",
          "Demi Moore",
          "Boyd Holbrook",
          "Richard Dreyfuss"
        ],
        "directors": [
          "Naomi Foner"
        ],
        "theatrical_release_date": "2014-07-25"
      },
      {
        "name": "And So It Goes",
        "images": {
          "w380": "images/w380/2014-07-25/and_so_it_goes.jpg",
          "w600": "images/w600/2014-07-25/and_so_it_goes.jpg"
        },
        "pitch": "<p><strong>Michael Douglas</strong> and <strong>Diane Keaton</strong> fall in love à la <strong>It&#39;s Complicated</strong></p>\n",
        "description": "<p>Egotistical realtor Oren (Michael Douglas) doesn&#39;t give a damn about anybody but himself. This is about to change when his estranged son suddenly leaves him alone with a granddaughter (Sterling Jerins) he never knew he had. With the help of his kind neighbor, Leah (Diane Keaton), Oren resolutely learns to care again - and perhaps even fall in love.</p>\n\n<p><em>And So It Goes</em> boasts a team of true romantic comedy experts behind the camera: director Rob Reiner is responsible for <em>When Harry Met Sally</em>, while the screenplay is written by <strong>Mark Andreus</strong>, who penned the modern genre classic <em>As Good As It Gets</em>. </p>\n\n<p>P.J. Hogan was attached as the director of <em>And So it Goes</em> but dropped out and was subsequently replaced by producer Rob Reiner. </p>\n",
        "actors": [
          "Michael Douglas",
          "Diane Keaton",
          "Sterling Jerins",
          "Scott Shepherd",
          "Meryl Williams",
          "Frankie Valli",
          "Paloma Guzmán",
          "Theo Stockman",
          "David Aaron Baker",
          "Albert Jones"
        ],
        "directors": [
          "Rob Reiner"
        ],
        "theatrical_release_date": "2014-07-25"
      },
      {
        "name": "A Most Wanted Man",
        "images": {
          "w380": "images/w380/2014-07-25/a_most_wanted_man.jpg",
          "w600": "images/w600/2014-07-25/a_most_wanted_man.jpg"
        },
        "pitch": "<p>Another <strong>Classic</strong> by <strong>Tinker Tailer Soldier Spy novelists</strong> gets <strong>adaptation</strong></p>\n",
        "description": "<p>A Chechen Muslim (Grigoriy Dobrygin) illegally immigrates to Hamburg, Germany where he becomes entangled in the international war on terror and creates huge problems for the intelligence agencies of three different countries.  </p>\n\n<p><em>A Most Wanted Man</em> is adapted from the eponymous novel by the bestselling author <strong>John le Carré</strong>. The novelist is famous for having written several masterpieces of the spy genre such as <em>Tinker Tailor Soldier Spy</em>, <em>The Constant Gardener</em>, <em>The Spy Who Came in from the Cold</em>. </p>\n",
        "actors": [
          "Grigoriy Dobrygin",
          "Daniel Brühl",
          "Kostja Ullmann",
          "Nina Hoss",
          "Willem Dafoe",
          "Robin Wright",
          "Philip Seymour Hoffman",
          "Rachel McAdams",
          "Martin Wuttke",
          "Rainer Bock",
          "Vicky Krieps",
          "Homayoun Ershadi",
          "Charlotte Schwab",
          "Neil Malik Abdullah"
        ],
        "directors": [
          "Anton Corbijn"
        ],
        "theatrical_release_date": "2014-07-25"
      },
      {
        "name": "Good People",
        "images": {
          "w380": "images/w380/2014-07-25/good_people.jpg",
          "w600": "images/w600/2014-07-25/good_people.jpg"
        },
        "pitch": "<p><strong>Kate Hudson</strong> and <strong>James Franco</strong> team up to front <strong>recession-era crime thriller</strong></p>\n",
        "description": "<p>When Scott (James Franco) and Anna Reed (Kate Hudson), an American couple in London, become mired in debt renovating Anna&#39;s family home, they don&#39;t know what to do. But their guardian angel must be working overtime, because when their reclusive lodger kicks the bucket they stumble across £200,000 in cash stashed in his room - more than enough to pay off their debts. But on swiping the cash, they leave themselves vulnerable to violent criminals who want the money back. </p>\n\n<p>The indie thriller is adapted from <strong>Marcus Sakey</strong>&#39;s popular crime thriller novel, also titled <em>Good People</em>.</p>\n\n<p><em>Good People</em> is directed by Danish director Henrik Ruben Genz and is his English language directorial debut. </p>\n",
        "actors": [
          "James Franco",
          "Tom Wilkinson",
          "Omar Sy",
          "Kate Hudson",
          "Anna Friel",
          "Diarmaid Murtagh",
          "Sam Spruell",
          "Michael Jibson",
          "Diana Hardcastle",
          "Oliver Dimsdale",
          "Lasco Atkins"
        ],
        "directors": [
          "Henrik Ruben Genz"
        ],
        "theatrical_release_date": "2014-07-25"
      },
      {
        "name": "Magic in the Moonlight",
        "images": {
          "w380": "images/w380/2014-07-25/magic_in_the_moonlight.jpg",
          "w600": "images/w600/2014-07-25/magic_in_the_moonlight.jpg"
        },
        "pitch": "<p>The legendary auteur returns to <strong>France</strong> with <strong>Emma Stone</strong> in tow</p>\n",
        "description": "<p><em>Vicky Cristina Barcelona</em> was that rare thing: a box office hit that also went down well with critics. So we&#39;re guessing Woody Allen is following the &#39;if it ain&#39;t broke, why fix it?&#39; school of thought in returning to the scene of the crime to shoot a new movie in the south of France.</p>\n\n<p>Just as Scarlett Johansson made waves in her role as an American girl summering in Spain in <em>Vicky Cristina Barcelona</em>, Allen seems interested in casting another husky voiced American, Emma Stone to take the lead role in the romantic comedy.</p>\n\n<p>Set in the 1920s, <em>Magic in the Moonlight</em> centers on an Englishman (Colin Firth) who comes to the South of France to unmask a swindle. </p>\n",
        "actors": [
          "Emma Stone",
          "Colin Firth",
          "Eileen Atkins",
          "Marcia Gay Harden",
          "Hamish Linklater",
          "Jacki Weaver",
          "Jeremy Shamos",
          "Erica Leerhsen"
        ],
        "directors": [
          "Woody Allen"
        ],
        "theatrical_release_date": "2014-07-25"
      },
      {
        "name": "Lucy",
        "images": {
          "w380": "images/w380/2014-07-25/lucy.jpg",
          "w600": "images/w600/2014-07-25/lucy.jpg"
        },
        "pitch": "<p>From the director of <strong>Nikita</strong>: <strong>Scarlett Johansson</strong>&#39;s most <strong>ass-kicking role</strong> </p>\n",
        "description": "<p>When drug mule Lucy (Scarlett Johansson) by accident gets a good dose of what she is transporting into her system, she suddenly acquires superhuman strength and fighting know-how. She also gains a whole heap of other neat tricks: she&#39;s able to absorb knowledge instantaneously, is unable to feel pain and can move objects with her mind. In short: Lucy is one sexy fighting machine!</p>\n\n<p>Luc Besson (<em>The Fifth Element</em>, <em>Columbiana</em>) is writing and directing the sci-fi action flick. The filmmaker is responsible for some of the most iconic action heroines of screen history: the eponymous <em>Nikita</em> in the French assassin thriller (1990), Leeloo (Milla Jovovich) in <em>The Fifth Element</em> or Mathilde (Natalie Portman) in <em>Léon</em>. Scarlett Johansson&#39;s Lucy continues this trend!</p>\n\n<p>Morgan Freeman co-stars as a professor well-versed in evolution and neurology who Lucy is on a mission to find.</p>\n",
        "actors": [
          "Scarlett Johansson",
          "Morgan Freeman",
          "Min-sik Choi",
          "Analeigh Tipton",
          "Mason Lee",
          "Pilou Asbæk",
          "Amr Waked",
          "Frédéric Chau",
          "Jan Oliver Schroeder",
          "Yvonne Gradelet",
          "Paul Chan"
        ],
        "directors": [
          "Luc Besson"
        ],
        "theatrical_release_date": "2014-07-25"
      },
      {
        "name": "The Kill Team",
        "images": {
          "w380": "images/w380/2014-07-25/the_kill_team.jpg",
          "w600": "images/w600/2014-07-25/the_kill_team.jpg"
        },
        "pitch": "<p>Prize-winning <strong>Afghanistan war documentary</strong> set to <strong>shock America</strong></p>\n",
        "description": "<p>Dan Krauss&#39;s Afghanistan war documentary follows Private Adam Winfield, who tried to draw attention to war crimes in Afghanistan that were committed by soldiers close to him. </p>\n\n<p><em>The Kill Team</em> won the Grand Jury Prize when it premiered at Tribeca Film Festival, also proving a hit on the circuit at San Francisco International Film Festival, HotDocs and AFI Docs. </p>\n",
        "actors": [],
        "directors": [
          "Dan Krauss"
        ],
        "theatrical_release_date": "2014-07-25"
      },
      {
        "name": "Happy Christmas",
        "images": {
          "w380": "images/w380/2014-07-25/happy_christmas.jpg",
          "w600": "images/w600/2014-07-25/happy_christmas.jpg"
        },
        "pitch": "<p>The <strong>director</strong> of <strong>Drinking Buddies</strong> &amp; the <strong>creator</strong> of <strong>Girls</strong> team up!</p>\n",
        "description": "<p>Anna Kendrick (<em>Up in the Air, Pitch Perfect</em>) plays Jenny, a young woman who moves in with her brother (played by director Joe Swanberg), his wife (Melanie Lynskey) and their little son after breaking up with her boyfriend. Happy Christmas is Jenny&#39;s emotional and humorous journey to becoming a responsible adult.</p>\n\n<p>Girls creator Lena Dunham plays the woman’s college friend whom she reconnects with when she moves in with her brother. <em>Happy Christmas</em> had its world premiere at the Sundance Film Festival 2014. </p>\n",
        "actors": [
          "Anna Kendrick",
          "Melanie Lynskey",
          "Lena Dunham",
          "Mark Webber",
          "Joe Swanberg"
        ],
        "directors": [
          "Joe Swanberg"
        ],
        "theatrical_release_date": "2014-07-25"
      },
      {
        "name": "Sharknado 2: The Second One",
        "images": {
          "w380": "images/w380/2014-07-30/sharknado_2_the_second_one.jpg",
          "w600": "images/w600/2014-07-30/sharknado_2_the_second_one.jpg"
        },
        "pitch": "<p><strong>Sharks</strong>! In a <strong>tornado</strong>! <strong>Again</strong>! </p>\n",
        "description": "<p>After the stormy success of <em>Sharknado</em>, Syfy unleashes the sequel to the disaster horror with bite: <em>Sharknado 2: The Second One</em>. A terrifying tornado full of sharks will hit New York City. With their previous experience with the phenomenon, only Fin (Ian Ziering) and April (Tara Reid) can save the city!</p>\n\n<p><strong>The biting follow-up has its world premiere Wednesday, July 30 at 9/8c on Syfy.</strong> </p>\n",
        "actors": [
          "Ian Ziering",
          "Tara Reid",
          "Kelly Osbourne",
          "Judah Friedlander",
          "Andy Dick",
          "Judd Hirsch",
          "Mark McGrath",
          "Vivica A. Fox",
          "Kari Wuhrer",
          "Courtney Baxter",
          "D.C. Douglas"
        ],
        "directors": [
          "Anthony C. Ferrante"
        ],
        "theatrical_release_date": "2014-07-30"
      },
      {
        "name": "War Story",
        "images": {
          "w380": "images/w380/2014-07-30/war_story.jpg",
          "w600": "images/w600/2014-07-30/war_story.jpg"
        },
        "pitch": "<p><strong>Ben Kingsley</strong> and <strong>Catherine Keener</strong> co-star in emotional <strong>war drama</strong></p>\n",
        "description": "<p>The great  Catherine Keener (<em>Being John Malovich, Capote</em>) plays a war photojournalist suffering from trauma after the death of a colleague. Academy Award winner Ben Kingsley (<em>Ghandi</em>, Iron Man 3) co-stars.</p>\n\n<p>Moving to Sicily in order to recover from her job, war correspondent Lee sees a young girl who she recognizes from one of her photographs taken in Libya. Their encounter is the start of a complex and emotional journey the two women.</p>\n\n<p><em>War Story</em> is directed by Mark Jackson (<em>Without</em>), who also wrote the screenplay with Kristin Gore (<em>Arctic Tale, Futurama</em>).</p>\n",
        "actors": [
          "Catherine Keener",
          "Hafsia Herzi",
          "Ben Kingsley",
          "Vincenzo Amato",
          "Donatella Finocchiaro",
          "Guido Caprino",
          "Luana Toscano",
          "Wejdi Trabelsi",
          "Rosario Petix",
          "Giuseppe Petix",
          "Loredana Marino",
          "Amalia Contarini"
        ],
        "directors": [
          "Mark Jackson"
        ],
        "theatrical_release_date": "2014-07-30"
      },
      {
        "name": "Rurôni Kenshin: The Great Kyôto Fire Arc",
        "images": {
          "w380": "images/w380/2014-07-99-Summer/rurôni_kenshin_the_great_kyôto_fire_arc.jpg",
          "w600": "images/w600/2014-07-99-Summer/rurôni_kenshin_the_great_kyôto_fire_arc.jpg"
        },
        "pitch": "<p>Swords up! <strong>Rogue samurai</strong> returning for Rurôni Kenshin <strong>sequel</strong></p>\n",
        "description": "<p>Director Keishi Ohtomo’s <em>Rurôni Kenshin</em> getting a sequel.</p>\n\n<p>The live-action film adaptations, which tell the story of a rogue samurai (Takeru Satô) slashing his way through late-Nineteenth-century Japan, are taken directly from the manga series, known to English audiences as <em>Samurai X</em>.</p>\n\n<p>Joining the principle cast from the first <em>Rurouni Kenshin</em> are Tatsuya Fujiwara, known for his leading roles in <em>Battle Royale</em> and <em>Death Note</em>, as villain Makoto Shishio, as well as Ryunosuke Kamiki (<em>Summer Wars</em>) as Shishio&#39;s sword swinging right hand man.</p>\n",
        "actors": [
          "Ryunosuke Kamiki",
          "Tatsuya Fujiwara",
          "Takeru Satô",
          "Emi Takei"
        ],
        "directors": [
          "Keishi Ohtomo"
        ],
        "theatrical_release_date": "2014-07-99-Summer"
      },
      {
        "name": "Calvary",
        "images": {
          "w380": "images/w380/2014-08-01/calvary.jpg",
          "w600": "images/w600/2014-08-01/calvary.jpg"
        },
        "pitch": "<p>The <strong>director of The Guard</strong> reunites with his muse <strong>Brendan Gleeson</strong></p>\n",
        "description": "<p>Father James Lavelle (Brendan Gleeson) is a good-natured priest primarily occupied with doing good in his Irish parish. But his efforts are constantly undermined by his bigoted, hateful community. When he receives a death threat during confession, his life is turned upside down.</p>\n\n<p>John Michael McDonagh already worked with Brendan Gleeson in his celebrated first feature <em>The Guard</em>. In the latter Gleeson charmed audiences worldwide as a likable, slightly corrupt and foul-mouthed Irish cop who nevertheless has his heart in the right place. </p>\n",
        "actors": [
          "Brendan Gleeson",
          "David Wilmot",
          "Isaach de Bankolé",
          "Kelly Reilly",
          "Chris O'Dowd",
          "Aidan Gillen",
          "Dylan Moran",
          "M. Emmet Walsh",
          "Marie-Josée Croze",
          "Domhnall Gleeson"
        ],
        "directors": [
          "John Michael McDonagh"
        ],
        "theatrical_release_date": "2014-08-01"
      },
      {
        "name": "Guardians of the Galaxy",
        "images": {
          "w380": "images/w380/2014-08-01/guardians_of_the_galaxy.jpg",
          "w600": "images/w600/2014-08-01/guardians_of_the_galaxy.jpg"
        },
        "pitch": "<p>The Avengers <strong>aren’t the only</strong> Marvel <strong>superhero team</strong> out there! </p>\n",
        "description": "<p>Expanding the Marvel Cinematic Universe into the cosmos, <em>Guardians of the Galaxy</em> revolves around devil-may-care fighter adventurer Peter Quill (Chris Pratt) who finds himself relentless pursued by a bounty hunter after stealing a mysterious orb coveted by the villainous Ronan the Accuser (Lee Pace). To stay alive,  Quill has to form an unlikely alliance with a band of space misfits: Rocket (voiced by Bradley Cooper), a gun-toting, wisecracking raccoon; Groot (voiced by Vin Diesel), a tree-like humanoid; the lethal and mysterious Gamora (Zoe Saldana); and  revenge-thirsty Drax the Destroyer (Dave Bautista).  Together they are the <em>Guardians of the Galaxy</em>!</p>\n\n<p>Josh Brolin briefly features as Thanos (the villain in The Avenger&#39;s post-credits sequence) in the movie. The character is set to play increasingly larger roles in The Avengers: Age Of Ultron and The Avengers 3. <em>Guardians of the Galaxy</em> director James Gunn is also responsible for <em>Super</em>, one of the strangest, most unique superhero movies of all time. </p>\n",
        "actors": [
          "Chris Pratt",
          "Lee Pace",
          "Zoe Saldana",
          "Michael Rooker",
          "Dave Bautista",
          "John C. Reilly",
          "Glenn Close",
          "Ophelia Lovibond",
          "Karen Gillan",
          "Benicio del Toro",
          "Gregg Henry",
          "Vin Diesel",
          "Bradley Cooper",
          "Josh Brolin"
        ],
        "directors": [
          "James Gunn"
        ],
        "theatrical_release_date": "2014-08-01"
      },
      {
        "name": "Cabin Fever: Patient Zero",
        "images": {
          "w380": "images/w380/2014-08-01/cabin_fever_patient_zero.jpg",
          "w600": "images/w600/2014-08-01/cabin_fever_patient_zero.jpg"
        },
        "pitch": "<p><strong>Cabin Fever</strong> gets a <strong>reboot</strong> with <strong>Sean Astin</strong> in the lead</p>\n",
        "description": "<p>A Caribbean cruise turns into a horror trip, when a cruiser is stranded on an island where medical experiments are conducted. Soon they find themselves in a desperate fight for survival...</p>\n\n<p><em>Cabin Fever: Patient Zero</em> is a reboot of the Cabin fever franchise. Eli Roth who directed the first part and produced the second one is not involved in this one. The movie will  be followed by a sequel named <em>Cabin Fever: Outbreak</em>, which should be in cinemas 2014. </p>\n",
        "actors": [
          "Sean Astin",
          "Brando Eaton",
          "Jillian Murray",
          "Ben Hollingsworth",
          "Currie Graham",
          "Ryan Donowho",
          "Mitch Ryan",
          "Solly Duran",
          "Lydia Hearst",
          "Claudette Lalí"
        ],
        "directors": [
          "Kaare Andrews"
        ],
        "theatrical_release_date": "2014-08-01"
      },
      {
        "name": "Behaving Badly",
        "images": {
          "w380": "images/w380/2014-08-01/behaving_badly.jpg",
          "w600": "images/w600/2014-08-01/behaving_badly.jpg"
        },
        "pitch": "<p><strong>Selena Gomez</strong> and <strong>Nat Wolff</strong> headline <strong>black comedy</strong> </p>\n",
        "description": "<p>Wouldn’t you didn’t do everything to be together with the adorable Selena Gomez? Of course you would!</p>\n\n<p>In <em>Behaving Badly</em> the Spring Breakers beauty plays Nina Pennington, adored by young Nick Stevens (Nat Wolff). The latter – you guessed it- would do anything to be together with the girl of his dreams. Even making a bet with a mobster’s son which turns out to be a really bad idea...</p>\n\n<p><em>Behaving Badly</em> is based on <strong>Ric Browde</strong>&#39;s novel <em>While I&#39;m Dead...Feed The Dog</em>.</p>\n",
        "actors": [
          "Selena Gomez",
          "Heather Graham",
          "Cary Elwes",
          "Dylan McDermott",
          "Austin Stowell ",
          "Nat Wolff",
          "Mary-Louise Parker",
          "Elisabeth Shue",
          "Patrick Warburton",
          "Ashley Rickards",
          "Gary Busey"
        ],
        "directors": [
          "Tim Garrick"
        ],
        "theatrical_release_date": "2014-08-01"
      },
      {
        "name": "Get On Up",
        "images": {
          "w380": "images/w380/2014-08-01/get_on_up.jpg",
          "w600": "images/w600/2014-08-01/get_on_up.jpg"
        },
        "pitch": "<p>The <strong>momentous life</strong> of the <strong>Godfather of Soul</strong> by the director of <strong>The Help</strong></p>\n",
        "description": "<p>The big screen adaptation of the memorable and inspirational life of late soul legend James Brown is long overdue. Chadwick Boseman, who delivered a knock-out performance as legendary ballplayer Jackie Robinson in 42, stars as the musician. The Godfather of Soul led a turbulent life which included drug abuse and four marriages.</p>\n\n<p>Producer Brian Grazer, a longtime friend of James Brown, started working on <em>Get On Up</em> with the soul legend himself before his death in 2006. Rolling Stones frontman <em>Mick Jagger</em>, who also knew Brown, is on board as a producer. <em>Get on Up</em> reunites Viola Davis and Octavia Spencer with director Tate Taylor. They all worked on the Oscar-winning <em>The Help</em>.</p>\n",
        "actors": [
          "Chadwick Boseman",
          "Viola Davis",
          "Octavia Spencer",
          "Nelsan Ellis",
          "Dan Aykroyd",
          "Jill Scott",
          "Keith Robinson",
          "Lennie James",
          "Fred Melamed",
          "Tika Sumpter",
          "Clyde Jones",
          "Liz Mikel"
        ],
        "directors": [
          "Tate Taylor"
        ],
        "theatrical_release_date": "2014-08-01"
      },
      {
        "name": "Child Of God",
        "images": {
          "w380": "images/w380/2014-08-01/child_of_god.jpg",
          "w600": "images/w600/2014-08-01/child_of_god.jpg"
        },
        "pitch": "<p><strong>James Franco</strong> adapts another <strong>literary classic</strong> for the <strong>big-screen</strong>! </p>\n",
        "description": "<p><em>Child of God</em> focuses on an violent exile in 1960s Tennessee named Lester Ballard (Scott Haze), whose life goes on a downward spiral as he gradually becomes ever more isolated from society, ending up residing in a cave.</p>\n\n<p>Based on the eponymous novel by Cormac McCarthy, this marks another ambitious directing project for James Franco after As I Lay Dying and <em>Interior, Leather Bar</em>. <em>Child of God</em> will be shown at both the 2013 editions of the Venice and Toronto film festivals.</p>\n",
        "actors": [
          "James Franco",
          "Tim Blake Nelson",
          "Jim Parrack",
          "Scott Haze",
          "Fallon Goodson",
          "Vince Jolivette"
        ],
        "directors": [
          "James Franco"
        ],
        "theatrical_release_date": "2014-08-01"
      },
      {
        "name": "Outpost 37",
        "images": {
          "w380": "images/w380/2014-08-01/outpost_37.jpg",
          "w600": "images/w600/2014-08-01/outpost_37.jpg"
        },
        "pitch": "<p><strong>Soldiers&#39; fight</strong> against an <strong>alien threat</strong> is documented by filmmakers!</p>\n",
        "description": "<p><em>Outpost 37</em> tells the story of documentarians following an elite unit of soldiers equipped to combat an alien threat. The movie employs the proven found footage narrative in the vein of <em>Cloverfield</em>.  </p>\n\n<p>In the wake of an alien invasion, documentary filmmakers follow a group of specialist soldiers to <em>Outpost 37</em>, the most dangerous outpost in the world - only to uncover that the catastrophic invasion was just the beginning.</p>\n\n<p>The sci-fi movie is the directorial debut from Jabbar Raisani, who has served as a VFX artist on Game of Thrones, <em>Predators</em> and <em>Machete</em>.</p>\n",
        "actors": [
          "Adrian Paul",
          "Reiley McClendon",
          "Douglas Tait",
          "Darron Meyer",
          "Brandon Auret",
          "Rick Ravanello",
          "Matthew Holmes",
          "Joe Reegan",
          "Sven Ruygrok",
          "Andy Davoli",
          "Nic Rasenti",
          "Scott E. Miller",
          "Stevel Marc",
          "Kenneth Fok",
          "Michael Dube"
        ],
        "directors": [
          "Jabbar Raisani"
        ],
        "theatrical_release_date": "2014-08-01"
      },
      {
        "name": "Louder Than Words",
        "images": {
          "w380": "images/w380/2014-08-01/louder_than_words.jpg",
          "w600": "images/w600/2014-08-01/louder_than_words.jpg"
        },
        "pitch": "<p><strong>David Duchovny</strong> stars in this <strong>emotional drama</strong> about mourning parents building a hospital!</p>\n",
        "description": "<p>David Duchovny and Hope Davis star as a mourning couple who will stop at nothing to pay tribute to their late daughter - by building a hospital.</p>\n\n<p>After the untimely death of their young daughter, parents John (David Duchovny) and Brenda Fareri (Hope Davis) relentlessly strive to collect donations to build a state-of-the-art children&#39;s hospital.</p>\n\n<p><em>Louder than Words</em> is based on an incredible true story.</p>\n",
        "actors": [
          "Adelaide Kane",
          "David Duchovny",
          "Timothy Hutton",
          "Craig Bierko",
          "Xander Berkeley",
          "Hope Davis",
          "Scott Cohen",
          "Ben Rosenfield",
          "Victoria Tennant",
          "Morgan Griffin",
          "Olivia Steele-Falconer",
          "Arabella Field",
          "Gary Wilmes",
          "Cassidy Hinkle",
          "Alex Ziwak"
        ],
        "directors": [
          "Anthony Fabian"
        ],
        "theatrical_release_date": "2014-08-01"
      },
      {
        "name": "The Death of Superman Lives: What Happened?",
        "images": {
          "w380": "images/w380/2014-08-01/the_death_of_superman_lives_what_happened_.jpg",
          "w600": "images/w600/2014-08-01/the_death_of_superman_lives_what_happened_.jpg"
        },
        "pitch": "<p><strong>Documentary</strong> explores <strong>Nicolas Cage</strong>&#39;s failed <strong>Superman</strong> movie!</p>\n",
        "description": "<p>Years before the <em>Superman</em> franchise was rebooted with <em>Superman Returns</em> (and again rebooted with Zack Snyder&#39;s Man of Steel), a totally different version of the Kyrptonian&#39;s big screen reboot was in production starring Nicolas Cage (<em>The Wicker Man, Leaving Las Vegas</em>).</p>\n\n<p><em>The Death of &quot;Superman Lives&quot;: What Happened?</em> is the documentary that explores the failed Superman project helmed by Tim Burton (<em>Edward Scissorhands</em>, <em>Batman</em>) and penned by Kevin Smith (<em>Clerks</em>, Tusk). With interviews from Cage, Burton and Smith (to name a few), the documentary shows us the radical ideas that came close to shaping the DC universe on the big screen - for better and for worse.</p>\n\n<p>Nicolas Cage is among the biggest Superman fans of all time, having named his child after the superhero&#39;s Kryptonian birth name, Kal-El.</p>\n",
        "actors": [
          "Nicolas Cage",
          "Tim Burton",
          "Kevin Smith",
          "Lorenzo di Bonaventura",
          "Colleen Atwood",
          "Jon Schnepp",
          "Wesley Strick",
          "Grant Morrison",
          "Steve Johnson",
          "Brom ",
          "Eric Powell",
          "Pete von Sholly",
          "Kerry Gammill",
          "Liam Sharp"
        ],
        "directors": [
          "Jon Schnepp"
        ],
        "theatrical_release_date": "2014-08-01"
      },
      {
        "name": "Sharktopus vs. Pteracuda",
        "images": {
          "w380": "images/w380/2014-08-02/sharktopus_vs._pteracuda.jpg",
          "w600": "images/w600/2014-08-02/sharktopus_vs._pteracuda.jpg"
        },
        "pitch": "<p><strong>Sharktopus</strong> returns to fight another <strong>mutated monster</strong>!</p>\n",
        "description": "<p><em>Sharktopus</em>, the half-shark, half-octopus is back in the sequel to 2010s eponymous monster B-movie.</p>\n\n<p><em>Sharktopus vs. Pteradcuda</em> begins with yet another wacky scientific experiment, alarmingly similar to the one that birthed Sharktopus. The new hybrid creature is named Pteracuda, half pteradactyl and half barracuda. Inevitably, the offspring of Sharktopus emerges to battle the creature in a fight for mutated-monster dominance!</p>\n\n<p><em>Sharktopus vs. Pteracuda</em> is produced by legendary exploitation movie producer, Roger Corman (<em>Grand Theft Auto, Death Race 2000</em>).</p>\n",
        "actors": [
          "Robert Carradine",
          "Rib Hillis",
          "Katie Savoy",
          "Tony Evangelista",
          "Hector Then",
          "Hensy Pichardo"
        ],
        "directors": [
          "Kevin O'Neill"
        ],
        "theatrical_release_date": "2014-08-02"
      },
      {
        "name": "Dragonball Z: Battle of Gods",
        "images": {
          "w380": "images/w380/2014-08-05/dragonball_z_battle_of_gods.jpg",
          "w600": "images/w600/2014-08-05/dragonball_z_battle_of_gods.jpg"
        },
        "pitch": "<p><strong>Goku returns</strong> for the first <strong>Dragon Ball</strong> movie in <strong>17 years</strong>!</p>\n",
        "description": "<p>Dragonball Z: Battle of Gods marks the long-awaited next chapter of the Dragonball saga, promising more action-packed adventures from the franchise&#39;s most beloved characters.</p>\n\n<p>When Beerus, also known as the God of Destruction, hears about the incredibly powerful Saiyan who defeated Frieza and Majin Buu, he plans to live up to his name and destroy him. To defeat his enemy, Goku must become a Super Saiyan God - a level of power only he is capable of.</p>\n\n<p>Dragonball Z: Battle of Gods is based on a story from <strong>Akira Toriyama</strong>&#39;s Manga comic, adapted by Yûsuke Watanabe.</p>\n",
        "actors": [],
        "directors": [
          "Masahiro Hosoda"
        ],
        "theatrical_release_date": "2014-08-05"
      },
      {
        "name": "Mercenaries",
        "images": {
          "w380": "images/w380/2014-08-05/mercenaries.jpg",
          "w600": "images/w600/2014-08-05/mercenaries.jpg"
        },
        "pitch": "<p><strong>Terminator 3</strong> star <strong>Kristanna Loken</strong> leads <strong>female mercenaries</strong>&#39; mission</p>\n",
        "description": "<p>Kristanna Loken, star of <em>Terminator 3: Rise of the Machines</em>, leads a team of tough female commandos in <em>Mercenaries</em>.</p>\n\n<p>During a tour through an incredibly perilous war zone, a diplomatic official is captured and imprisoned. In order to get the official to safety, an expert team of brave female commandos is formed for the near-impossible rescue mission.</p>\n\n<p><em>Mercenaries</em> is directed by Christopher Ray (<em>Asteroid vs. Earth, Shark Week</em>) and written by Edward DeRuiter (<em>2-Headed Shark Attack, Prison Raid</em>). Kristanna Loken made history in 2003 by becoming the first female ever to play a Terminator in the popular time-travelling franchise.</p>\n",
        "actors": [
          "Kristanna Loken",
          "Brigitte Nielsen",
          "Vivica A. Fox",
          "Cynthia Rothrock",
          "Zoe Bell",
          "Nicole Bilderback",
          "Tim Abell",
          "Tiffany Panhilason",
          "Gerald Webb",
          "Alexis Raich",
          "Damion Poitier",
          "Morgan Benoit",
          "Alicia Vigil",
          "Scott Thomas Reynolds",
          "Edward DeRuiter"
        ],
        "directors": [
          "Christopher Ray"
        ],
        "theatrical_release_date": "2014-08-05"
      },
      {
        "name": "The Inbetweeners 2",
        "images": {
          "w380": "images/w380/2014-08-06/the_inbetweeners_2.jpg",
          "w600": "images/w600/2014-08-06/the_inbetweeners_2.jpg"
        },
        "pitch": "<p>The UK&#39;s <strong>most successful</strong> comedy gets a <strong>raunchy sequel</strong> set in <strong>Australia</strong>!</p>\n",
        "description": "<p>Fans of crude British gross-out humor rejoice: There will be a sequel to <em>The Inbetweeners</em>! Expect masturbation jokes, binge drinking and British accents en masse - but <strong>this time in Australia</strong>! </p>\n\n<p>The first movie was based on Channel 4&#39;s hit British sitcom of the same name, which centers on four male nerds, played by James Buckley, Blake Harrison, Joe Thomas and Simon Bird , who are united by their ill-fated romantic enterprises. </p>\n\n<p>Released in 2011, <em>The Inbetweeners</em> made a massive $67 million in Britain alone, along with a further $20 million in global markets – making it the most successful British comedy of all time. </p>\n\n<p>Expect <em>The Inbetweeners 2</em> to do similarly great business!</p>\n",
        "actors": [
          "James Buckley",
          "Blake Harrison",
          "Joe Thomas",
          "Simon Bird ",
          "Daisy Ridley"
        ],
        "directors": [
          "Iain Morris",
          "Damon Beesley"
        ],
        "theatrical_release_date": "2014-08-06"
      },
      {
        "name": "Teenage Mutant Ninja Turtles",
        "images": {
          "w380": "images/w380/2014-08-08/teenage_mutant_ninja_turtles.jpg",
          "w600": "images/w600/2014-08-08/teenage_mutant_ninja_turtles.jpg"
        },
        "pitch": "<p>The <strong>heroes</strong> in a <strong>half-shell</strong> are <strong>back</strong> on the <strong>big screen!</strong></p>\n",
        "description": "<p>The Ninja Turtles are back in this live-action adventure film featuring the popular sewer-dwelling, reptile ninjas Leonardo (voiced by Johnny Knoxville), Michelangelo (Noel Fisher), Donatello (Jeremy Howard), Raphael (Alan Ritchson) and their pal, roving reporter April (Megan Fox). </p>\n\n<p><em>Teenage Mutant Ninja Turtles</em> marks the return of Megan Fox (<em>Jennifer&#39;s Body</em>, This Is 40) in a blockbuster franchise after her departure from Michael Bay&#39;s <em>Transformers</em>.</p>\n",
        "actors": [
          "Noel Fisher",
          "Jeremy Howard",
          "Pete Ploszek",
          "William Fichtner",
          "Danny Woodburn",
          "Alan Ritchson",
          "Megan Fox",
          "Whoopi Goldberg",
          "Will Arnett",
          "Johnny Knoxville",
          "Tony Shalhoub",
          "Minae Noji",
          "Abby Elliott"
        ],
        "directors": [
          "Jonathan Liebesman"
        ],
        "theatrical_release_date": "2014-08-08"
      },
      {
        "name": "Into the Storm",
        "images": {
          "w380": "images/w380/2014-08-08/into_the_storm.jpg",
          "w600": "images/w600/2014-08-08/into_the_storm.jpg"
        },
        "pitch": "<p><strong>Teens</strong> try to <strong>survive a Category 6 tornado</strong> - the worst in <strong>U.S. history</strong></p>\n",
        "description": "<p>A group of thrill-seeking high school students, professional storm chasers and ordinary citizens try to survive a devastating tornado. </p>\n\n<p><em>Into the Storm</em> is told through video cameras and cellphones -  hence using the tried &#39;found footage&#39; narrative seen in <em>Paranormal Activity</em>, <em>Cloverfield</em> and <em>Chronicle</em>. The unique disaster thriller was formally known as <em>Black Sky</em>. The movie is directed by <em>Final Destination 5</em> helmer Steven Quale.</p>\n",
        "actors": [
          "Richard Armitage",
          "Matt Walsh",
          "Nathan Kress",
          "Jeremy Sumpter",
          "Sarah Wayne Callies",
          "Kyle Davis",
          "Stephanie Koenig",
          "Scott Lawrence",
          "Alycia Debnam Carey",
          "Arlen Escarpeta",
          "London Elise Moore",
          "Jon Reep",
          "Max Deacon",
          "Gino Borri"
        ],
        "directors": [
          "Steven Quale"
        ],
        "theatrical_release_date": "2014-08-08"
      },
      {
        "name": "What If",
        "images": {
          "w380": "images/w380/2014-08-08/what_if.jpg",
          "w600": "images/w600/2014-08-08/what_if.jpg"
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
        "name": "Step Up All In",
        "images": {
          "w380": "images/w380/2014-08-08/step_up_all_in.jpg",
          "w600": "images/w600/2014-08-08/step_up_all_in.jpg"
        },
        "pitch": "<p><strong>Cast members</strong> from <strong>all  the previous</strong> movies <strong>Step Up</strong> again for epic <strong>fifth part!</strong></p>\n",
        "description": "<p><em>Step Up All In</em> is the fifth part of the hugely succesful dance franchise. </p>\n\n<p>In an dream line-up for fans of the franchise, the stars of the previous <em>Step Up</em> movies come together in Las Vegas to battle it out once and for all.</p>\n\n<p><em>Step Up All In</em> is the directorial debut from Trish Sie. The movie is written by John Swetnam, scribe of the found-footage disaster movie Into the Storm.</p>\n",
        "actors": [
          "Stephen Boss",
          "Ryan Guzman",
          "Briana Evigan",
          "Adam G. Sevani",
          "Misha Gabriel Hamilton",
          "Alyson Stoner",
          "Mari Koda",
          "Luis Rosado",
          "Izabella Miko",
          "Karin Konoval",
          "Chadd Smith",
          "Martín Lombard",
          "Abigail Rich",
          "Christie Laing",
          "Christopher Scott Cherot",
          "Allie Meixner"
        ],
        "directors": [
          "Trish Sie"
        ],
        "theatrical_release_date": "2014-08-08"
      },
      {
        "name": "The Hundred-Foot Journey",
        "images": {
          "w380": "images/w380/2014-08-08/the_hundred-foot_journey.jpg",
          "w600": "images/w600/2014-08-08/the_hundred-foot_journey.jpg"
        },
        "pitch": "<p><strong>Ratatouille</strong> meets <strong>Slumdog Millionaire</strong> in rags-to-riches <strong>book adaptation</strong></p>\n",
        "description": "<p>The delicious story of Indian chef Hassan Haji (Manish Dayal) is the focus of <em>The Hundred-Foot Journey</em>. Coming from the modest environment of his family&#39;s Mumbai restaurant, this feel-good movie sees a young Hassan (Rohan Chand) conquer the scene of the Parisian haute cuisine - not without a few cultural faux pas along the way, of course. </p>\n\n<p><em>The Hundred-Foot Journey</em> is an adaptation of the eponymous 2010 novel. <em>Chocolat</em> and <em>The Cider House Rules</em> vet Lasse Hallström directs this heartwarming fish-out-of-water story. <em>The Hundred-Foot Journey</em> also stars Dame Helen Mirren and was written by Steven Knight (<em>Eastern Promises, Dirty Pretty Things</em>).</p>\n",
        "actors": [
          "Helen Mirren",
          "Manish Dayal",
          "Charlotte Le Bon ",
          "Om Puri",
          "Rohan Chand",
          "Amit Shah",
          "Michel Blanc",
          "Farzana Dua Elahe",
          "Dillon Mitra",
          "Juhi Chawla",
          "Caroline Amiguet",
          "Clément Sibony",
          "Emanuele Secci",
          "Tatyana Richaud",
          "Malcolm Granath"
        ],
        "directors": [
          "Lasse Hallström"
        ],
        "theatrical_release_date": "2014-08-08"
      },
      {
        "name": "James Cameron’s Deepsea Challenge 3D",
        "images": {
          "w380": "images/w380/2014-08-08/james_cameron’s_deepsea_challenge_3d.jpg",
          "w600": "images/w600/2014-08-08/james_cameron’s_deepsea_challenge_3d.jpg"
        },
        "pitch": "<p><strong>A 3D documentary</strong> about <strong>James Cameron</strong>&#39;s record-breaking dive</p>\n",
        "description": "<p>A manned submersible named Deepsea Challenger sets off on a series of dives to explore the deepest point of Earth&#39;s surface underwater. On board, <em>Avatar</em> director and explorer James Cameron. </p>\n\n<p>The 3D project is directed by Andrew Wight (<em>Sanctum</em>), and V/X wizards Ray Quint and John Bruno.The latter won an Oscar for his Visual Effects work on Cameron&#39;s underwater thriller <em>The Abyss</em>.</p>\n",
        "actors": [
          "Frank Lotito",
          "Lachlan Woods",
          "Paul Henri"
        ],
        "directors": [
          "John Bruno",
          "Ray Quint",
          "Andrew Wight"
        ],
        "theatrical_release_date": "2014-08-08"
      },
      {
        "name": "About Alex",
        "images": {
          "w380": "images/w380/2014-08-08/about_alex.jpg",
          "w600": "images/w600/2014-08-08/about_alex.jpg"
        },
        "pitch": "<p><strong>The Big Chill</strong> for <strong>Millennials</strong> with an <strong>incredible cast</strong></p>\n",
        "description": "<p>This star-studded <em>Big Chill</em> for a new generation revolves around 11 college friends, who come together after one of them attempts suicide. Over the course of a weekend full of heartbreak, sorrow and laughter, they try to understand when and why their lives became so damned complicated.</p>\n\n<p>The movie features a star-studded cast that includes Aubrey Plaza (Parks and Recreation), Max Greenfield (New Girl), Maggie Grace (Taken 2, <em>LOST</em>) and Max Minghella (<em>The Social Network</em>). The movie is the directorial debut from Jesse Zwick, who also wrote the screenplay.</p>\n",
        "actors": [
          "Maggie Grace",
          "Aubrey Plaza",
          "Jane Levy ",
          "Max Greenfield",
          "Max Minghella",
          "Jason Ritter",
          "Nate Parker",
          "Adam Saunders",
          "Rey Lucas"
        ],
        "directors": [
          "Jesse Zwick"
        ],
        "theatrical_release_date": "2014-08-08"
      },
      {
        "name": "Piranha Sharks",
        "images": {
          "w380": "images/w380/2014-08-08/piranha_sharks.jpg",
          "w600": "images/w600/2014-08-08/piranha_sharks.jpg"
        },
        "pitch": "<p><strong>Jaws</strong> meets <strong>Gremlins</strong> in another <strong>Shark-fusion</strong> <strong>horror comedy</strong></p>\n",
        "description": "<p>Bio-engineers take a break from creating labradoodles and micro-pigs for something much more threatening: Piranha sized mini-sharks!</p>\n\n<p>When bio-engineered <em>Piranha Sharks</em> are kept in rich people&#39;s personal aquariums, the trend inevitably leads to the creature&#39;s escape into New York City&#39;s water supply. In a <em>Gremlins</em> style frenzy, the <em>Piranha Sharks</em> breed rapidly and terrorize the city. In total dismay, the mayor calls for a team of exterminators to go head-to-head with the tiny terrors.</p>\n\n<p><em>Piranha Sharks</em> is written and directed by Leigh Scott (<em>Flu Bird Horror, Transmorphers</em>). The movie is just one of many shark-fusion monster movies to be created following the surprise success of <em>Sharktopus</em>, joining a repertoire of playfully insane features that includes Sharknado 2: The Second One, Sharktopus vs. Pteracuda, Sharktopus vs Mermantula and Atomic Shark.</p>\n",
        "actors": [
          "Collin Galyean",
          "Ramona Mallory",
          "Josh Hammond",
          "John Wells",
          "Frederic Doss",
          "Jon-Christian Costable",
          "GinaMarie Zimmerman",
          "Amy Blackman",
          "Ashe Parker",
          "Martin Ewens",
          "Brandon Stacy",
          "Benjamin Kanes",
          "Barry Ratcliffe",
          "Kristina Page",
          "Al Snow",
          "Noel Thurman",
          "Jessica Sonneborn",
          "Raffaela Perra",
          "LeAnn England",
          "Michael Pantozzi"
        ],
        "directors": [
          "Leigh Scott"
        ],
        "theatrical_release_date": "2014-08-08"
      },
      {
        "name": "Batman: Assault on Arkham",
        "images": {
          "w380": "images/w380/2014-08-12/batman_assault_on_arkham.jpg",
          "w600": "images/w600/2014-08-12/batman_assault_on_arkham.jpg"
        },
        "pitch": "<p>Batman returns in animation based on Arkham Asylum game series</p>\n",
        "description": "<p>Gotham is in trouble when a group of villains known as The Suicide Squad are assembled. They plot to retrieve top secret information from Gotham&#39;s high security prison, Arkham Asylum. Things get even worse for the city when Squad member Harley Quinn (Hyden Walch) frees The Joker (Troy Baker) during the break-in. Batman (Kevin Conroy) must use all his wit and strength to defeat both The Joker and The Suicide Squad.</p>\n\n<p><em>Batman: Assault on Arkham</em> is based on the hugely popular Arkham Asylum game series. The Blu-Ray/DVD also includes a large collection of bonus material focusing on the origins of the asylum and the character of Harley Quinn. </p>\n",
        "actors": [
          "Kevin Conroy",
          "Troy Baker",
          "Hynden Walch",
          "Martin Jarvis",
          "Giancarlo Esposito",
          "Eliza Dushku",
          "Matthew Gray Gubler",
          "Neal McDonough",
          "Nolan North",
          "Kevin Grevioux",
          "CCH Pounder",
          "James Patrick Stuart"
        ],
        "directors": [
          "Jay Oliva"
        ],
        "theatrical_release_date": "2014-08-12"
      },
      {
        "name": "Septic Man",
        "images": {
          "w380": "images/w380/2014-08-12/septic_man.jpg",
          "w600": "images/w600/2014-08-12/septic_man.jpg"
        },
        "pitch": "<p>A sewage worker is <strong>hideously transformed</strong> by <strong>dangerous killer</strong></p>\n",
        "description": "<p><em>Septic Man</em> is the horror flick from the makers of <em>Monsters Brawl</em>!</p>\n\n<p>Jack (Jason David Brown) is a sewage worker determined to uncover the cause of a water contamination crisis in his hometown. Getting trapped in a septic tank causes him to undergo a horrific transformation. Desperate to escape, Jack teams up with a submissive giant to overpower the murderous lunatic, Lord Auch (Tim Burd).</p>\n\n<p><em>Septic Man</em> helmer Jesse Thomas Cook reteams with Jason David Brown for the movie, having previously co-wrote 2011&#39;s <em>Monsters Brawl</em> together.</p>\n",
        "actors": [
          "Jason David Brown",
          "Molly Dunsworth",
          "Robert Maillet",
          "Tim Burd",
          "Julian Richings",
          "Stephen McHattie",
          "Nicole G. Leier",
          "Kirill Belousov"
        ],
        "directors": [
          "Jesse Thomas Cook"
        ],
        "theatrical_release_date": "2014-08-12"
      },
      {
        "name": "Let's Be Cops",
        "images": {
          "w380": "images/w380/2014-08-13/let's_be_cops.jpg",
          "w600": "images/w600/2014-08-13/let's_be_cops.jpg"
        },
        "pitch": "<p><strong>Damon Wayans Jr.</strong> and <strong>Jake Johnson</strong> pretend to be <strong>cops</strong> in <strong>R-rated comedy</strong> </p>\n",
        "description": "<p><em>Let&#39;s Be Cops</em> centers on two best buddies (Damon Wayans Jr. and Jake Johnson) who love to reap the benefits of pretending to be cops. When the two get mixed up with some real-life mobsters however, the game suddenly turns serious. </p>\n",
        "actors": [
          "Jake Johnson",
          "Damon Wayans Jr.",
          "Nina Dobrev",
          "Andy Garcia",
          "James D'Arcy",
          "Keegan-Michael Key",
          "Jonathan Lajoie",
          "Angela Kerecz",
          "Rob Riggle",
          "Tom Mardirosian",
          "Natasha Leggero",
          "Rebecca Koon",
          "Joshua Ormond",
          "L. Warren Young",
          "Nelson Bonilla"
        ],
        "directors": [
          "Luke Greenfield"
        ],
        "theatrical_release_date": "2014-08-13"
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
