if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

//test code to plug up the modals
$(document).ready(function() {

});

//Set up New Account Information
$()

//Below is the modal information that has been cleaned up.
$("#modal-custom-signup").iziModal({
  history: false,
  overlayClose: false,
  width: 600,
  overlayColor: 'rgba(0, 0, 0, 0.6)',
  transitionIn: 'bounceInDown',
  transitionOut: 'bounceOutDown',
  navigateCaption: true,
  navigateArrows: "false",
});

$("#modal-custom-login").iziModal({
  history: false,
  overlayClose: false,
  width: 600,
  overlayColor: 'rgba(0, 0, 0, 0.6)',
  transitionIn: 'bounceInDown',
  transitionOut: 'bounceOutDown',
  navigateCaption: true,
  navigateArrows: "false",
});

$("#modal-custom-rules").iziModal({
  history: false,
  overlayClose: false,
  width: 1200,
  overlayColor: 'rgba(0, 0, 0, 0.6)',
  transitionIn: 'bounceInDown',
  transitionOut: 'bounceOutDown',
  navigateCaption: true,
  navigateArrows: "false",
});

$(document).on('click', '#iNewAccount', function(event) {
  event.preventDefault();
  $('#modal-custom-signup').iziModal('open');
});

$(document).on('click', '#iExisting', function(event) {
  event.preventDefault();
  $('#modal-custom-login').iziModal('open');
});

$(document).on('click', '#iRules', function(event) {
  event.preventDefault();
  $('#modal-custom-rules').iziModal('open');
});

$("#modal-custom-signup").on('click', 'button.submit', function()
{
  console.log("in #modal-custom-signup #b_create on-click");
  var newOwner = {};
  // verify passwords match
  if ($('#create_pass').val().trim() === $('#create_verify').val().trim())
  {
    newOwner = {
      userName: $('#create_name').val().trim(),
      passWord: $('#create_pass').val().trim()
    }
  }
  // first, check if username exists
  $.ajax("/api/owners/"+newOwner.userName, {
    type: "GET",
    data: newOwner
  }).then(
    function(owner) {
      console.log("owner:", owner);
      if (owner) {
        // popup/alert to choose new username
        alert("Username already exists, please choose a new one!");
        return false;
      } else {
        // if not already existing, then create it
        $.ajax("/api/owners/new", {
          type: "POST",
          data: newOwner
        }).then(
          function() {
            console.log("created new User");

            // one thing we need to do is have the OwnerId available to the app
            // so, for now, store the username in localStorage
            localStorage.setItem("username", newOwner.userName);

            // now dismiss the modal and switch to teamEdit
            // TODO
          }
        );
      }
    }
  );
});
