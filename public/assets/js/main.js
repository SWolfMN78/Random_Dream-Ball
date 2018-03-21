//test code to plug up the modals
$(document).ready(function() {

});

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