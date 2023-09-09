$(function() {
    $('.dropdown-item').each(function() {
        $(this).on('click', function() {
            var caption = $(this).text();
            Swal.fire('Opción seleccionada', 'Muy bien! Escogiste el premio: ' + caption, 'success');
        });
    });
});