
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {  

  $(document).on("click", "button.delete", deleteDreamBall);
  $(document).on("click", "button.updateID", changeID);
  $(document).on("click", "button.updateRosterID", changeRosterID);
  
  // Getting a reference to the input field where user adds a new Athlete
  var $newItemInput = $("input.new-item");
  // Our new Athletes will go inside the dreamballContainer
  var $dreamballContainer1 = $(".athlete-container1");
  var $dreamballContainer2 = $(".athlete-container2");
  //var $dreamballContainer3 = $(".athlete-container3");
  //var $dreamballContainer4 = $(".athlete-container4");

  // Our initial Athletes array
  var  athletes= [];

  // Getting Athletes from database when page loads
  getDreamBalls();  

  //Adding rows of Athletes
  function initializeRows() {
    //$dreamballContainer1.empty();
    $dreamballContainer2.empty();
    //$dreamballContainer3.empty();
    //$dreamballContainer4.empty();

    //var rowsToAdd1 = [];
    var rowsToAdd2 = [];
    //var rowsToAdd3 = [];
    //var rowsToAdd4 = [];
    for (var i = 0; i < athletes.length; i++) {
      //console.log("//////" + dreamballs[i].ownerID)
      switch (athletes[i].OwnerId){
      /*case 1:
      rowsToAdd1.push(createNewRow(athletes[i]));
      break;*/
      case 2:
      rowsToAdd2.push(createNewRow(athletes[i]));
      break;
      /*case 3:
      rowsToAdd3.push(createNewRow(athletes[i]));
      break;
      case 4:
      rowsToAdd4.push(createNewRow(athletes[i]));
      break;*/
      }
      
    }
    //$dreamballContainer1.prepend(rowsToAdd1);
    $dreamballContainer2.prepend(rowsToAdd2);
    //$dreamballContainer3.prepend(rowsToAdd3);
    //$dreamballContainer4.prepend(rowsToAdd4);
  }

  function initializeRosterRows() {
    $dreamballContainer1.empty();
    var rowsToAdd1 = [];
    for (var i = 0; i < athletes.length; i++) {
      if (athletes[i].OwnerId ===1){
      rowsToAdd1.push(createRosterRow(athletes[i]));
      }
    }
    $dreamballContainer1.prepend(rowsToAdd1);
  }


  // This function gets Athletes from database 
  function getDreamBalls() {
    $.get("/api/athletes", function(data) {
      athletes = data;
      initializeRows();
      initializeRosterRows();
    });
  }

  // This function deletes an Athlete when the user clicks the delete button
  function deleteDreamBall(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/athletes/" + id
    }).then(getDreamBalls);
  }

  function createNewRow(athlete) {
    var $newInputRow = $(
      [
        "<li class='list-group-item athlete-item'>",
        "<span>",
        athlete.athleteName,
        "</span>",
        "<button class='delete btn btn-default'>x</button>",
        "<button class='updateID btn btn-primary btn-default'>>>></button>",
        "</li>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", athlete.id);
    $newInputRow.find("button.updateID").data("athlete", athlete);
    $newInputRow.data("athlete", athlete);
    
    return $newInputRow;
  }

  function createRosterRow(athlete) {
    var $newRosterRow = $(
      [
        "<li class='list-group-item athlete-item'>",
        "<span>",
        "<button class='updateRosterID btn btn-primary btn-default'><span><<<</span></button>",
        athlete.athleteName,
        "</span>",
        "<button class='delete btn btn-default'>x</button>",
        "</li>"
      ].join("")
    );

    $newRosterRow.find("button.delete").data("id", athlete.id);
    //$newRosterRow.find("button.updateRosterID").data("athlete", athlete);
    $newRosterRow.find("button.updateRosterID").data("athlete", athlete);
    $newRosterRow.data("athlete", athlete);
    
    return $newRosterRow;
  }

  
  function updateDreamBall(athlete) {
    $.ajax({
      method: "PUT",
      url: "/api/athletes",
      data: athlete
    }).then(getDreamBalls);
  }

  function changeID() {
    var newDreamBall = $(this).data("athlete");
    console.log(newDreamBall);
    var newOwnerID = 1;
    console.log("newOwnerID = " + newOwnerID)
    newDreamBall.OwnerId = newOwnerID;
    console.log("newOwnerID.OwnerId = " + newDreamBall.OwnerId);  
    updateDreamBall(newDreamBall); 
  }

  function changeRosterID() {
    var newDreamBall = $(this).data("athlete");
    console.log(newDreamBall);
    var newOwnerID = 2;
    console.log("newOwnerID = " + newOwnerID)
    newDreamBall.OwnerId = newOwnerID;
    console.log("newOwnerID.OwnerId = " + newDreamBall.OwnerId);  
    updateDreamBall(newDreamBall); 
  }


  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newDreamBall = {
      athleteName: $("#bu").val().trim(),
      OwnerId: $("[name=OwnerId]:checked").val().trim()
    };
      
    //console.log("And the ownerID is = " + newDreamBall.ownerID);

    // Send the POST request.
    $.ajax("/api/athletes", {
      type: "POST",
      data: newDreamBall
    }).then(
      function() {
        console.log("created new athlete");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-userform").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUserID = {
      userName: $("#user").val().trim(),
      teamName: $("#tname").val().trim(),
      passWord: $("#pass").val().trim(),
      
    };

    // Send the POST request.
    $.ajax("/api/owners/new", {
      type: "POST",
      data: newUserID
    }).then(
      function() {
        console.log("created new UserID");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-athelete").on("click", function(event) {
    var id = $(this).data("id");
    console.log("deleted athletes");
    // Send the DELETE request.
    $.ajax("/api/athletes/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted athletes", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

