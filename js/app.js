
//variables


const conversor1 = document.querySelector('#conversor-1');

const conversor2 = document.querySelector('#conversor-2');

const conversor3 = document.querySelector('#conversor-3');


const conversor4 = document.querySelector('#conversor-4');

const conversor5 = document.querySelector('#conversor-5');

const btnVolver = document.querySelector('#btn-volver');

const menu = document.querySelector('#menu');

const conversores = document.querySelectorAll('.conversores');

const inputAll = document.querySelectorAll('.valor');


const inputKm = document.querySelector('#km');

const inputKm2 = document.querySelector('#km2');

const inputKm3 = document.querySelector('#km3');

const inputMi = document.querySelector('#m');

const inputLe = document.querySelector('#le');

const inputMts = document.querySelector('#mts');

const inputCm = document.querySelector('#cm');

const inputMts2 = document.querySelector('#mts2');

const inputCm2 = document.querySelector('#cm2');

const inputMl = document.querySelector('#ml');

const btnOk = document.querySelectorAll('.btn-OK');

const mensajeDiv = document.querySelector('#mensaje-box');

const formulario = document.querySelector('#formulario');

const footer=document.querySelector('#footer');


//addevenlisteners
eventos();
function eventos() {

    menu.addEventListener('click', verificarOpcion);
    btnVolver.addEventListener('click', volverMenu);


}

function verificarOpcion(e) {
    const id = e.target.id;
    menu.style.display = 'none';
    footer.style.marginTop='13%';
    btnVolver.style.display = 'block';
    if (id === 'conv-uno') {
        conversor1.style.display = 'grid';
        inputKm.addEventListener('blur', verificar);
        inputMi.addEventListener('blur', verificar);
        return;

    } else if (id === 'conv-dos') {
        conversor2.style.display = 'grid';

        inputMts.addEventListener('blur', verificar);
        inputKm2.addEventListener('blur', verificar);
        return;

    } else if (id === 'conv-tres') {
        conversor3.style.display = 'grid';
        inputMts2.addEventListener('blur', verificar);
        inputCm.addEventListener('blur', verificar);
        return;

    } else if (id === 'conv-cuatro') {
        conversor4.style.display = 'grid';
        inputCm2.addEventListener('blur', verificar);
        inputMl.addEventListener('blur', verificar);
        return;

    } else if (id === 'conv-cinco') {
        console.log('entroo')

        conversor5.style.display = 'grid';
        inputKm3.addEventListener('blur', verificar);
        inputLe.addEventListener('blur', verificar);
        return;
    }
}

function volverMenu() {

    menu.style.display = 'block';
    btnVolver.style.display = 'none';
    for (let i = 0; i < conversores.length; i++) {
        conversores[i].style.display = 'none';
    }
    mensajeDiv.style.display = 'none';
    footer.style.marginTop='3.37%';
    resetFormulario();

}





//funciones
function verificar(e) {

    const valor = e.target;
    if (valor.value === '' || isNaN(valor.value)) {
        mandarMensaje('Coloca un parametro valido', 'error');
        for (let i = 0; i < btnOk.length; i++) {
            btnOk[i].style.background = 'red';
            btnOk[i].disabled = true;
        }
        return;
    }
    mandarMensaje('Este es el resultado');
    for (let i = 0; i < btnOk.length; i++) {
        btnOk[i].style.background = 'green';
    }
    if (valor.id === 'km' || valor.id === 'm') {

        calcularConv1(valor);

    } else if (valor.id === 'mts' || valor.id === 'km2') {

        calcularConv2(valor);


    } else if (valor.id === 'cm' || valor.id === 'mts2') {

        calcularConv3(valor);

    } else if (valor.id === 'ml' || valor.id === 'cm2') {

        calcularConv4(valor);

    } else if (valor.id === 'le' || valor.id === 'km3') {

        calcularConv5(valor);

    }

}

function calcularConv1(e) {

    if (e.id === 'km') {
        inputKm.style.border = '2px solid green'
        inputMi.disabled = true;
        inputMi.style.border = '2px solid red';
        inputMi.value = inputKm.value * 0.621371;

    } else {
        inputMi.style.border = '2px solid green'
        inputKm.disabled = true;
        inputKm.style.border = '2px solid red';
        inputKm.value = inputMi.value * 1.60934;
    }
    setTimeout(function () {
        resetFormulario();
    }, 3000);


}

function calcularConv2(e) {

    if (e.id === 'mts') {
        inputMts.style.border = '2px solid green'
        inputKm2.disabled = true;
        inputKm2.style.border = '2px solid red';
        inputKm2.value = inputMts.value / 1000;

    } else {
        inputKm2.style.border = '2px solid green'
        inputMts.disabled = true;
        inputMts.style.border = '2px solid red';
        inputMts.value = inputKm2.value * 1000;
    }
    setTimeout(function () {
        resetFormulario();
    }, 3000);


}

function calcularConv3(e) {

    if (e.id === 'cm') {
        inputCm.style.border = '2px solid green'
        inputMts2.disabled = true;
        inputMts2.style.border = '2px solid red';
        inputMts2.value = inputCm.value / 100;

    } else {
        inputMts2.style.border = '2px solid green'
        inputCm.disabled = true;
        inputCm.style.border = '2px solid red';
        inputCm.value = inputMts2.value * 100;
    }
    setTimeout(function () {
        resetFormulario();
    }, 3000);


}

function calcularConv4(e) {

    if (e.id === 'ml') {
        inputMl.style.border = '2px solid green'
        inputCm2.disabled = true;
        inputCm2.style.border = '2px solid red';
        inputCm2.value = inputMl.value / 10;

    } else {
        inputCm2.style.border = '2px solid green'
        inputMl.disabled = true;
        inputMl.style.border = '2px solid red';
        inputMl.value = inputCm2.value * 10;
    }
    setTimeout(function () {
        resetFormulario();
    }, 3000);


}
function calcularConv5(e) {

    if (e.id === 'le') {
        inputLe.style.border = '2px solid green';
        inputKm3.disabled = true;
        inputKm3.style.border = '2px solid red';
        inputKm3.value = inputLe.value * 4.83803;

    } else {
        inputKm3.style.border = '2px solid green'
        inputLe.disabled = true;
        inputLe.style.border = '2px solid red';
        inputLe.value = inputKm3.value * 0.207124;
    }
    setTimeout(function () {
        resetFormulario();
    }, 3000);


}



function mandarMensaje(mensaje, tipo) {

    const parrafoMensaje = document.createElement('p');
    parrafoMensaje.textContent = mensaje;
    parrafoMensaje.classList.add("parrafo-mensaje");
    mensajeDiv.appendChild(parrafoMensaje);
    if (tipo === 'error') {
        mensajeDiv.style.display = 'flex';
        mensajeDiv.style.background = 'red';

    } else {
        mensajeDiv.style.display = 'flex';
        mensajeDiv.style.background = 'green';
    }
    setTimeout(function () {
        parrafoMensaje.remove();
        mensajeDiv.style.display = 'none';
        resetFormulario();

    }, 3000);

}


function resetFormulario() {
    formulario.reset();
    for (let i = 0; i < inputAll.length; i++) {
        inputAll[i].style.border = 'none';
        inputAll[i].style.borderHover = '2px solid blue';
        inputAll[i].disabled = false;
    }
    for (let i = 0; i < btnOk.length; i++) {
        btnOk[i].style.background = 'blue';
        btnOk[i].disabled = false;
    }

}