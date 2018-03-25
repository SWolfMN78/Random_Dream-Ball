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
  width: 600,
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
  $.ajax("/api/owners/new", {
    type: "POST",
    data: newOwner
  }).then(
    function() {
      console.log("created new UserID");
      // Reload the page to get the updated list
      //location.reload();
    }
  );
});
