// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-dev").on("click", function(event) {
    var id = $(this).data("id");
    var newDev = $(this).data("newdev");

    var newDevState = {
      ownerID: newDev,
      id: id
    };

    // Send the PUT request.
    $.ajax("/api/dreamballs/" + id, {
      type: "PUT",
      data: newDevState
    }).then(
      function() {
        console.log("changed dev to", newDev);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newDreamBall = {
      charName: $("#bu").val().trim(),
      ownerID: $("[name=ownerID]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/dreamballs", {
      type: "POST",
      data: newDreamBall
    }).then(
      function() {
        console.log("created new dreamball");
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
    $.ajax("/api/userids", {
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

  $(".delete-dreamball").on("click", function(event) {
    var id = $(this).data("id");
    console.log("deleted dreamball");
    // Send the DELETE request.
    $.ajax("/api/dreamballs/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted dreamball", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});



