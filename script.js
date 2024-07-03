const lightModeButton = document.getElementById('light-mode');
const darkModeButton = document.getElementById('dark-mode');
const translateButtons = document.querySelectorAll('.translate-button');

lightModeButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('dark');
});

darkModeButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('dark');
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