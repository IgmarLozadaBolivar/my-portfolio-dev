const lightModeButton = document.getElementById('light-mode');
const darkModeButton = document.getElementById('dark-mode');
const translateButtons = document.querySelectorAll('.translate-button');
const mailtoButton = document.getElementById('mailto');

lightModeButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('dark');
});

darkModeButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('dark');
});

mailtoButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = `
        <p>Correo: losadabolivar@gmail.com</p>
        <p>Teléfono: +57 324 401 9649</p>
    `;
    Swal.fire({
        title: 'Contacto!',
        html: message,
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: `
            👌 Great!
        `,
    });
});

translateButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let message = '';
        if (button.id === 'translate-en') {
            message = 'This feature will be available soon!';
        } else if (button.id === 'translate-es') {
            message = '¡Esta función estará disponible próximamente!';
        }
        Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 3000
        });
    });
});