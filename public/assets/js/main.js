//test code to plug up the modals
$(document).ready(function() {
    //initialize Modals
    $(document).on('click', '#iNewAccount', function(event) {
        event.preventDefault();
        // $('#modal').iziModal('setZindex', 99999);
        $('#modal-custom').iziModal('open', { zindex: 99999 });
        // $('#modal-custom').iziModal('open');
    });
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
    // onOpened: function() {

    // },
    // onClosed: function() {

    // }
});

$(document).on('click', '#iNewAccount', function(event) {
    event.preventDefault();
    $('#modal-custom-signup').iziModal('open');
});

$(document).on('click', '#iExisting', function(event) {
    event.preventDefault();
    $('#modal-custom-login').iziModal('open');
});

//rules on what will happen.
$("#modal-custom").on('click', 'header a', function(event) {
    event.preventDefault();
    var $this = $(this);
    var index = $this.index();
    $this.addClass('active').siblings('a').removeClass('active');

    var $sections = $this.closest('div').find('.sections');
    var $currentSection = $this.closest("div").find("section").eq(index);
    //var $nextSection = $this.closest("div").find("section").eq(index).siblings('section');

    $sections.css('height', $currentSection.innerHeight());

    function changeHeight() {
        $this.closest("div").find("section").eq(index).fadeIn().siblings('section').fadeOut(100);
    }

    if ($currentSection.innerHeight() > $sections.innerHeight()) {
        changeHeight();
    } else {
        setTimeout(function() {
            changeHeight();
        }, 150);
    }

    if ($this.index() === 0) {
        $("#modal-custom .iziModal-content .icon-close").css('background', '#ddd');
    } else {
        $("#modal-custom .iziModal-content .icon-close").attr('style', '');
    }
});