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
    Movie.create({
        "name": "X-Men: Days Of Future Past",
        "theatrical_release_date": "2014-05-23",
        "square_image": {
          "w380": "images/2014-05-23/x-men_days_of_future_past.jpg"
        }
      },
      {
        "name": "Dawn of the Planet of the Apes",
        "theatrical_release_date": "2014-07-11",
        "square_image": {
          "w380": "images/2014-07-11/dawn_of_the_planet_of_the_apes.jpg"
        }
      },
      {
        "name": "Road to Paloma",
        "theatrical_release_date": "2014-07-11",
        "square_image": {
          "w380": "images/2014-07-11/road_to_paloma.jpg"
        }
      },
      {
        "name": "Boyhood",
        "theatrical_release_date": "2014-07-11",
        "square_image": {
          "w380": "images/2014-07-11/boyhood.jpg"
        }
      },
      {
        "name": "Land Ho!",
        "theatrical_release_date": "2014-07-11",
        "square_image": {
          "w380": "images/2014-07-11/land_ho!.jpg"
        }
      },
      {
        "name": "Mood Indigo",
        "theatrical_release_date": "2014-07-18",
        "square_image": {
          "w380": "images/2014-07-18/mood_indigo.jpg"
        }
      },
      {
        "name": "Sex Tape",
        "theatrical_release_date": "2014-07-18",
        "square_image": {
          "w380": "images/2014-07-18/sex_tape.jpg"
        }
      },
      {
        "name": "I Origins",
        "theatrical_release_date": "2014-07-18",
        "square_image": {
          "w380": "images/2014-07-18/i_origins.jpg"
        }
      },
      {
        "name": "Wish I Was Here",
        "theatrical_release_date": "2014-07-18",
        "square_image": {
          "w380": "images/2014-07-18/wish_i_was_here.jpg"
        }
      },
      {
        "name": "The Purge: Anarchy",
        "theatrical_release_date": "2014-07-18",
        "square_image": {
          "w380": "images/2014-07-18/the_purge_anarchy.jpg"
        }
      },
      {
        "name": "Planes: Fire & Rescue",
        "theatrical_release_date": "2014-07-18",
        "square_image": {
          "w380": "images/2014-07-18/planes_fire_&_rescue.jpg"
        }
      },
      {
        "name": "Alive Inside",
        "theatrical_release_date": "2014-07-18",
        "square_image": {
          "w380": "images/2014-07-18/alive_inside.jpg"
        }
      },
      {
        "name": "Among Ravens",
        "theatrical_release_date": "2014-07-18",
        "square_image": {
          "w380": "images/2014-07-18/among_ravens.jpg"
        }
      },
      {
        "name": "A Master Builder",
        "theatrical_release_date": "2014-07-23",
        "square_image": {
          "w380": "images/2014-07-23/a_master_builder.jpg"
        }
      },
      {
        "name": "Hercules",
        "theatrical_release_date": "2014-07-25",
        "square_image": {
          "w380": "images/2014-07-25/hercules.jpg"
        }
      },
      {
        "name": "Very Good Girls",
        "theatrical_release_date": "2014-07-25",
        "square_image": {
          "w380": "images/2014-07-25/very_good_girls.jpg"
        }
      },
      {
        "name": "And So It Goes",
        "theatrical_release_date": "2014-07-25",
        "square_image": {
          "w380": "images/2014-07-25/and_so_it_goes.jpg"
        }
      },
      {
        "name": "A Most Wanted Man",
        "theatrical_release_date": "2014-07-25",
        "square_image": {
          "w380": "images/2014-07-25/a_most_wanted_man.jpg"
        }
      },
      {
        "name": "Good People",
        "theatrical_release_date": "2014-07-25",
        "square_image": {
          "w380": "images/2014-07-25/good_people.jpg"
        }
      },
      {
        "name": "Magic in the Moonlight",
        "theatrical_release_date": "2014-07-25",
        "square_image": {
          "w380": "images/2014-07-25/magic_in_the_moonlight.jpg"
        }
      },
      {
        "name": "Lucy",
        "theatrical_release_date": "2014-07-25",
        "square_image": {
          "w380": "images/2014-07-25/lucy.jpg"
        }
      },
      {
        "name": "The Kill Team",
        "theatrical_release_date": "2014-07-25",
        "square_image": {
          "w380": "images/2014-07-25/the_kill_team.jpg"
        }
      },
      {
        "name": "Happy Christmas",
        "theatrical_release_date": "2014-07-25",
        "square_image": {
          "w380": "images/2014-07-25/happy_christmas.jpg"
        }
      },
      {
        "name": "Sharknado 2: The Second One",
        "theatrical_release_date": "2014-07-30",
        "square_image": {
          "w380": "images/2014-07-30/sharknado_2_the_second_one.jpg"
        }
      },
      {
        "name": "War Story",
        "theatrical_release_date": "2014-07-30",
        "square_image": {
          "w380": "images/2014-07-30/war_story.jpg"
        }
      },
      {
        "name": "Rurôni Kenshin: The Great Kyôto Fire Arc",
        "theatrical_release_date": "2014-07-99-Summer",
        "square_image": {
          "w380": "images/2014-07-99-Summer/rurôni_kenshin_the_great_kyôto_fire_arc.jpg"
        }
      },
      {
        "name": "Calvary",
        "theatrical_release_date": "2014-08-01",
        "square_image": {
          "w380": "images/2014-08-01/calvary.jpg"
        }
      },
      {
        "name": "Guardians of the Galaxy",
        "theatrical_release_date": "2014-08-01",
        "square_image": {
          "w380": "images/2014-08-01/guardians_of_the_galaxy.jpg"
        }
      },
      {
        "name": "Cabin Fever: Patient Zero",
        "theatrical_release_date": "2014-08-01",
        "square_image": {
          "w380": "images/2014-08-01/cabin_fever_patient_zero.jpg"
        }
      },
      {
        "name": "Behaving Badly",
        "theatrical_release_date": "2014-08-01",
        "square_image": {
          "w380": "images/2014-08-01/behaving_badly.jpg"
        }
      },
      {
        "name": "Get On Up",
        "theatrical_release_date": "2014-08-01",
        "square_image": {
          "w380": "images/2014-08-01/get_on_up.jpg"
        }
      },
      {
        "name": "Child Of God",
        "theatrical_release_date": "2014-08-01",
        "square_image": {
          "w380": "images/2014-08-01/child_of_god.jpg"
        }
      },
      {
        "name": "Outpost 37",
        "theatrical_release_date": "2014-08-01",
        "square_image": {
          "w380": "images/2014-08-01/outpost_37.jpg"
        }
      },
      {
        "name": "Louder Than Words",
        "theatrical_release_date": "2014-08-01",
        "square_image": {
          "w380": "images/2014-08-01/louder_than_words.jpg"
        }
      },
      {
        "name": "The Death of Superman Lives: What Happened?",
        "theatrical_release_date": "2014-08-01",
        "square_image": {
          "w380": "images/2014-08-01/the_death_of_superman_lives_what_happened_.jpg"
        }
      },
      {
        "name": "Sharktopus vs. Pteracuda",
        "theatrical_release_date": "2014-08-02",
        "square_image": {
          "w380": "images/2014-08-02/sharktopus_vs._pteracuda.jpg"
        }
      },
      {
        "name": "Dragonball Z: Battle of Gods",
        "theatrical_release_date": "2014-08-05",
        "square_image": {
          "w380": "images/2014-08-05/dragonball_z_battle_of_gods.jpg"
        }
      },
      {
        "name": "Mercenaries",
        "theatrical_release_date": "2014-08-05",
        "square_image": {
          "w380": "images/2014-08-05/mercenaries.jpg"
        }
      },
      {
        "name": "The Inbetweeners 2",
        "theatrical_release_date": "2014-08-06",
        "square_image": {
          "w380": "images/2014-08-06/the_inbetweeners_2.jpg"
        }
      },
      {
        "name": "Teenage Mutant Ninja Turtles",
        "theatrical_release_date": "2014-08-08",
        "square_image": {
          "w380": "images/2014-08-08/teenage_mutant_ninja_turtles.jpg"
        }
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
