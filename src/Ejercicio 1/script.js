$(document).ready(function() {
    $('.dropdown-item rounded-2 active').on('click', function() {
        var caption = $('.dropdown-item rounded-2 active').val();
        Swal.fire('Button pressed', 'You pressed the button with the caption: ' + caption, 'success')
    });
    console.log($('.dropdown-item rounded-2 active').val());
});