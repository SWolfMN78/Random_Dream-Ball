//test code to plug up the modals
$(document).ready(function() {
    //initialize Modals
    $(document).on('click', '#iNewAccount', function(event) {
        event.preventDefault();
        // $('#modal').iziModal('setZindex', 99999);
        // $('#modal').iziModal('open', { zindex: 99999 });
        $('#modal').iziModal('open');
    });
});