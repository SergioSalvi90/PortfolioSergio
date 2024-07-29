emailjs.init("VWmy-cRoA6ymfPqpG");

// Función para enviar el mensaje
function enviarMensaje() {
    // Campos del formulario
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var tema = document.getElementById("tema").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validar que los campos no estén vacíos 
    if (!nombre || !telefono || !correo || !tema || !mensaje) {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // Validar formato del correo (opcional)
    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Enviar el formulario utilizando Email.js
    emailjs.send("service_brzoetu", "template_c4f2uwo", {
        to_name: nombre,
        from_email: correo,
        phone: telefono,
        subject: tema,
        message: mensaje
    })
    .then(function(response) {
        console.log("Correo enviado con éxito", response);
        alert("Tu mensaje ha sido enviado con éxito.");
    }, function(error) {
        console.log("Error al enviar el correo", error);
        alert("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo." + error.text);
    });
}

document.getElementById('downloadCv').addEventListener('click', function() {
    // Solicitar el idioma mediante un prompt
    let idioma = prompt("Selecciona el idioma: 'es' para Español, 'en' para Inglés");

    // Ajustar la ruta según el idioma seleccionado
    if (idioma === 'es') {
        window.open('public/cv/cv_es.pdf', '_blank'); // Ruta al archivo en español
    } else if (idioma === 'en') {
        window.open('public/cv/cv_en.pdf', '_blank'); // Ruta al archivo en inglés
    } else {
        alert('Idioma no válido. Por favor, selecciona "es" o "en".');
    }
});






let menuVisible = false;
// Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    if(menuVisible){
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}
document.querySelector('.nav-responsive').addEventListener('click', mostrarOcultarMenu);


const links = document.querySelectorAll('#nav ul li a');
links.forEach(link => {
    link.addEventListener('click', seleccionar);
});


// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
