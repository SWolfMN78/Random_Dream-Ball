var team_one = [{
        name: "Dino Saul",
        power: 10,
        skill: 0,
        used: false
    },
    {
        name: "Puck Daddy",
        power: 4,
        skill: 0,
        used: false
    },
    {
        name: "Jimbo Jonez",
        power: 3,
        skill: 1,
        used: false
    },
    {
        name: "Boo Radley",
        power: 6,
        skill: 0,
        used: false
    },
    {
        name: "Sly Stone",
        power: 8,
        skill: 0,
        used: false
    },
    {
        name: "Wall-E",
        power: 7,
        skill: 2,
        used: false
    }
];

var team_two = [{
        name: "A",
        power: 1,
        skill: 0,
        used: false
    },
    {
        name: "B",
        power: 8,
        skill: 1,
        used: false
    },
    {
        name: "C",
        power: 6,
        skill: 1,
        used: false
    },
    {
        name: "D",
        power: 5,
        skill: 1,
        used: false
    },
    {
        name: "E",
        power: 2,
        skill: 2,
        used: false
    },
    {
        name: "F",
        power: 9,
        skill: 0,
        used: false
    }
];

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
var username = localStorage.getItem("username");
var OwnerId = localStorage.getItem("username");

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
            $(document).on("click", "li.updateID", changeID);
            $(document).on("click", "li.updateRosterID", changeRosterID);

            // Getting a reference to the input field where user adds a new Athlete
            var $newItemInput = $("input.new-item");
            // Our new Athletes will go inside the dreamballContainer
            var $dreamballContainer1 = $(".athlete-container1");
            var $dreamballContainer2 = $(".athlete-container2");
            //var $dreamballContainer3 = $(".athlete-container3");
            //var $dreamballContainer4 = $(".athlete-container4");

            // fetch the logged in user
            // TODO - add logic to just use the OwnerId from localStorage, if available
            $.get("/api/owners/login/" + username, function(data) {
                // ? TODO ? maybe check localStorage for OwnerId first
                //   - depends on how we handle the cover.html page
                //   - maybe need a scheme for clearing OwnerId on 'initial' load???
                if (data) {
                    console.log("login result:", data);
                    OwnerId = data.id;
                } else {
                    // TODO better alert
                    // alert user to login
                    alert("Please login to be able to manage your team!");
                    return false;
                }
                console.log("after login, OwnerId:", OwnerId);

                // Getting Athletes from database when page loads
                getAthletes();
            });
        }

        var t1_score = 0;
        var t2_score = 0;
        for (var i = 0; i < 6; ++i) {
            var t2 = team_two.filter(p => !p.used);
            var rnd = Math.floor(Math.random() * t2.length);
            var t1_player = team_one[i];
            var t2_player = t2[rnd];
            var t2_index = team_two.findIndex(p => p.name === t2_player.name);
            team_two[t2_index].used = true;

            if (t1_player.skill === 2 || t2_player.skill === 2) {
                // if blocker
                if (t1_player.skill === 2 && t2_player.skill === 2) {
                    if (t1_player.power > t2_player.power) {
                        t1_score++;
                        console.log("T1 Goal!", t1_player.name)
                    } else if (t2_player.power > t1_player.power) {
                        t2_score++;
                        console.log("T2 Goal!", t2_player.name)
                    }
                }
            } else {
                // else no blocker
                if (t1_player.power > t2_player.power) {
                    t1_score++;
                    console.log("T1 Goal!", t1_player.name)
                } else if (t2_player.power > t1_player.power) {
                    t2_score++;
                    console.log("T2 Goal!", t2_player.name)
                }
            }
            if (t1_player.skill === 1)
                console.log(t2_player.name, "was bruised.");
            if (t2_player.skill === 1)
                console.log(t1_player.name, "was bruised.");
        };

        console.log("Score:  Team One [", t1_score, "], Team Two [", t2_score, "]");