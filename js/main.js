let beneficiosArr = [
    { img: "community.svg", text: "Sentido de pertenencia" },
    { img: "self-love.svg", text: "Aumento del autoestima" },
    { img: "diversity.svg", text: "Representación diversa" }
];
let testimoniosArr = [
    { title: "92,7%", text: "Se sienten inseguras sobre su aspecto físico" },
    { title: "56,4%", text: "Siguen en Instagram a personas que no conocen solo por su aspecto físico" },
    { title: "45,5%", text: "No se sienten representadas en los medios" }
];

let slideIndex = 0;
let cardsTestimoniosArr = [];

const form = document.querySelector("#form-contact");
const inputNombre = form.querySelector("#nombre");
const inputEmail = form.querySelector("#email");
const inputMensaje = form.querySelector("#mensaje");
let errorDiv = document.querySelector("#errorDiv");
let errorText = document.querySelector("#error");

document.addEventListener('DOMContentLoaded', () => {
    // Scrollspy init
    let elemsScrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elemsScrollspy);

    // Sidebar nav init
    let elemsSidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elemsSidenav);

    // Parallax init
    let elemsParallax = document.querySelectorAll('.parallax');
    M.Parallax.init(elemsParallax);


    crearBeneficios();
    crearTestimonios();
});

function crearBeneficios() {
    console.log(beneficiosArr);
    let html = "";

    beneficiosArr.forEach(elem => {
        html += /* html */ `
            <card-beneficios img="${elem.img}" text="${elem.text}"></card-beneficios>
        `;
    });

    document.querySelector("#beneficiosContainer").innerHTML = html;
}

function crearTestimonios() {
    console.log(testimoniosArr);
    let html = "";

    testimoniosArr.forEach(elem => {
        html += /* html */ `
            <card-testimonios class="col s12 l4" title="${elem.title}" text="${elem.text}"></card-testimonios>
        `;
    });

    document.querySelector("#testimoniosContainer").innerHTML = html;
}

function resetError() {
    let errorSpans = document.querySelectorAll(".helper-text");
    errorSpans.forEach(span => {
        span.innerHTML = "";
    });
}

function mostrarError(error, input, span) {
    let errorSpan = document.querySelector(`.${span}`);
    errorSpan.innerHTML = error;
    input.classList.add("error");
}

form.addEventListener("submit", evento => {
    console.log(evento);
    evento.preventDefault();
    console.log("submit form");

    resetError();

    const nombreCompleto = inputNombre.value;
    const email = inputEmail.value;
    const mensaje = inputMensaje.value;

    // Verifico los datos
    let regNombre = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regNombre.test(nombreCompleto)) {
        // mostrar error
        mostrarError("Debes escribir tu nombre completo!", inputNombre, "span-nombre");
    } else {
        inputNombre.classList.add("valido");
    }

    if (!regEmail.test(email)) {
        // mostrar error
        mostrarError("Debes escribir tu email!", inputEmail, "span-email");
    } else {
        inputEmail.classList.add("valido");
    }

    if (mensaje === "") {
        // mostrar error
        mostrarError("Háblanos sobre ti!", inputMensaje, "span-mensaje");
    } else {
        inputMensaje.classList.remove("error");
        inputMensaje.classList.add("valido");
    }

    const inputsArr = form.querySelectorAll(".valido");

    if (inputsArr.length === 3) {
        setTimeout(() => {
            inputsArr.forEach(input => {
                input.classList.remove("valido");
            });
            form.reset();
            alert("Tu información ha sido enviada con éxito!");
            inputsArr = "";
        }, 1000);
    };
});
