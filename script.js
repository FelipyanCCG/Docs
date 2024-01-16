var navbar = document.getElementById("navbar");
var body = document.getElementById("body");  // Agregamos el elemento body
var contenido = document.getElementById("contenido");
var headerSection = document.querySelector('.header-section');
var headerSectionHeight = headerSection.offsetHeight;

// Evento de desplazamiento
window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || window.pageYOffset;
    var distanciaDesdeLaCima = contenido.getBoundingClientRect().top;

    // Control de opacidad
    contenido.style.opacity = distanciaDesdeLaCima - window.innerHeight < 0 ? 1 : 0;

    // Cambios en la barra de navegación
    if (scrollTop >= headerSectionHeight) {
        navbar.classList.add('navbar-scrolled');
        body.classList.add('navbar-scrolled');  // Agregamos la clase al body
    } else {
        navbar.classList.remove('navbar-scrolled');
        body.classList.remove('navbar-scrolled');  // Quitamos la clase al body
    }
});

var imagesMasivos = [
    "https://i.ibb.co/0sW6HFj/Screenshot-7.png",
    "https://i.ibb.co/xSBLHxX/Screenshot-8.png",
    "https://i.ibb.co/zNMk0ZQ/Screenshot-9.png"
];

var imagesDibanka = [
    "https://i.ibb.co/P9bntsv/Screenshot-10.png",
    "https://i.ibb.co/MsZZDxt/Screenshot-11.png",
    "https://i.ibb.co/SKXPN6Y/Screenshot-12.png"
];

var imagesVus = [
    "https://i.ibb.co/rkWk9pC/Screenshot-13.png",
    "https://i.ibb.co/tXQGD7s/Screenshot-14.png",
    "https://i.ibb.co/RyG3kbw/Screenshot-15.png" 
];

function changeImage(imgElementId, images) {
    var imgElement = document.getElementById(imgElementId);
    var randomImage = images[Math.floor(Math.random() * images.length)];
    imgElement.src = randomImage;
}

// Inicia el cambio de imagen cada segundo
var intervalIdMasivos = setInterval(function () {
    changeImage('dynamic-image-Masivos', imagesMasivos);
}, 3000);

var intervalIdDibanka = setInterval(function () {
    changeImage('dynamic-image-Dibanka', imagesDibanka);
}, 3000);

var intervalIdVus = setInterval(function () {
    changeImage('dynamic-image-Vus', imagesVus);
}, 3000);

// Pausa y reanuda el cambio de imagen al pasar el ratón
function setupImageHoverEvent(imgElementId, intervalId, images) {
    var imgElement = document.getElementById(imgElementId);

    imgElement.addEventListener('mouseover', function () {
        clearInterval(intervalId);
    });

    imgElement.addEventListener('mouseout', function () {
        intervalId = setInterval(function () {
            changeImage(imgElementId, images);
        }, 2000);
    });
}

// Configura eventos para cada imagen
setupImageHoverEvent('dynamic-image-Masivos', intervalIdMasivos, imagesMasivos);
setupImageHoverEvent('dynamic-image-Dibanka', intervalIdDibanka, imagesDibanka);
setupImageHoverEvent('dynamic-image-Vus', intervalIdVus, imagesVus);

// Contenido rotativo
document.addEventListener('DOMContentLoaded', function () {
    const contents = ['Contenido 1', 'Contenido 2', 'Contenido 3'];
    let index = 0;

    setInterval(function () {
        document.getElementById('dynamicContent').textContent = contents[index++ % contents.length];
    }, 3000);
});
