'use strict';

const btn_registrar = document.querySelector('#btn-registrar');
const input_nombre = document.querySelector('#txt-nombre');
const input_telefono = document.querySelector('#txt-telefono');
const input_email = document.querySelector('#txt-email');
const input_mensaje = document.querySelector('#txt-mensaje');


localStorage.clear();


let info=[];

if (localStorage.getItem('lista_info')) {
    info = JSON.parse(localStorage.getItem('lista_info'));
}

const limpiar = () => {
    input_nombre.value = '';
    input_telefono.value = '';
    input_email.value = '';
    input_mensaje.value = '';
  
};

const agregar_info = (pnombre, ptelefono, pemail, pmensaje) => {
    let nueva_info = {
        'nombre': pnombre,
        'telefono': ptelefono,
        'email': pemail,
        'mensaje': pmensaje
        
    };
    info.push(nueva_info);

    localStorage.setItem('lista_info', JSON.stringify(info));

    Swal.fire({
        'icon': 'success',
        'title': 'Mensaje enviado correctamente',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        limpiar();
        
    });

};



const validar = () => {
    let error = false;

    let expresion= /^[a-zA-ZñáÁéé ]+$/g;
    let prueba= expresion.test(input_nombre.value);
    let expresion2= /^[0-9]+([.][0-9]+)?$/;
    let prueba2= expresion2.test(input_telefono.value);

 
    console.log('Prueba del nombre', expresion.test(input_nombre.value));
    
    console.log('numero prueba', expresion2.test(input_telefono.value));

    const inputs_requeridos = document.querySelectorAll('[required]');
    inputs_requeridos.forEach(input => {
        if (input.value == '')  {
            input.classList.add('input_error');
            Swal.fire({
                'icon': 'error',
                'title': 'Oops...ha ocurrido un error',
                'confirmButtonText': 'Porfavor siga el formato correcto'
            }).then(() => {
                limpiar();
            });
            error = true;
        } else {
            input.classList.remove('input_error');
        }
    });
    return error;
};

const obtener_datos = () => {
    let error = validar();

    if (error) {
        console.log('Por favor rellene los espacios en blanco');
    } else {
        let nombre = input_nombre.value;
        let telefono = input_telefono.value;
        let email = input_email.value;
        let mensaje = input_mensaje.value;

        agregar_info( nombre, telefono, email, mensaje );
    }

};




btn_registrar.addEventListener('click', obtener_datos);