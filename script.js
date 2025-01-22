//Variable y método para que las opciones de header cambien de color al hacer hover
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('active');
    });
});

//Variables y métodos para que se copie el email al hacer click en el botón y se muestre una notificación
const btn = document.querySelector('.btn');
const notificacion = document.querySelector('.notification');

btn.addEventListener('click', (e) => {
e.preventDefault();
const email = btn.getAttribute('data-email');
navigator.clipboard.writeText(email).then(() => {
    notificacion.style.display = 'block';
    setTimeout(() => {
    notificacion.style.display = 'none';
    }, 2000);
}).catch(err => {
    console.error('Failed to copy email', err);
});
});

//Variable y método para que se abra el CV en una ventana nueva al hacer click en el botón
const boton = document.querySelector('download-cv');

boton.addEventListener('click', () => {
    window.open('albert_cv.pdf', '_blank');
});