$(function() {
    var contactForm = $('[name="contactForm"]');
    contactForm.on('submit', function(event) {
        var userName = $('[name="userName"]').val();
        var userEmail = $('[name="userEmail"]').val();
        var userMessage = $('[name="userMessage"]').val();
        event.preventDefault();
        if (userName === '') {
            showMessage('Error', 'Ingrese su nombre por favor.', 'error');
        }
        else if (!/^[A-Za-z\s]+$/.test(userName)) {
            showMessage('Error', 'El nombre ingresado no es válido.', 'error');
        }
        else if (userEmail === '') {
            showMessage('Error', 'Ingrese su correo electrónico por favor.', 'error');
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userEmail)) {
            showMessage('Error', 'El correo electrónico ingresado no es válido.', 'error');
        }
        else if (userMessage === '') {
            showMessage('Error', 'Ingrese un mensaje por favor.', 'error');
        }
        else if (!/^.{10,}$/.test(userMessage)) {
            showMessage('Error', 'El mensaje debe contener minimamente 10 caracteres.', 'error');
        }
        else {
            showMessage(`¡Bienvenid@ ${userName}!`, 'Sus datos fueron registrados correctamente.', 'success');
            $('[name="userName"]').val('');
            $('[name="userEmail"]').val('');
            $('[name="userMessage"]').val('');
        }
    });
});

function showMessage(messageTitle, messageText, messageIcon) {
    Swal.fire({
        title: messageTitle,
        text: messageText,
        icon: messageIcon,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
}