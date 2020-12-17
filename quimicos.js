'use strict';

let sct_cards = document.querySelector('#seccion_productos');
let buscando = document.querySelector('#buscar');

const mostrar_cards = () =>{

    sct_cards.innerHTML = '';
    let filtro = buscando.value.toLowerCase();

    productos.forEach(obj_producto =>{

        if (obj_producto.nombre.toLowerCase().includes(filtro)) {

            if(obj_producto.tipo == 'Quimicos'){
                let card = document.createElement('div');
                card.classList.add('card');
    
            let foto = document.createElement('img');
            foto.classList.add('foto');
            foto.src = obj_producto.foto;
    
            let nombre = document.createElement('h2');
            nombre.innerText = `${obj_producto.nombre}`;
            nombre.classList.add('nombre');
    
            let precio = document.createElement('p');
            precio.innerText= `Precio:${obj_producto.precio}`;
            precio.classList.add('precio');
    
            let marca = document.createElement('p');
            marca.innerText= `Marca: ${obj_producto.marca}`;
            marca.classList.add('marca');
    
            let tipo = document.createElement('p');
            tipo.innerText= `Tipo: ${obj_producto.tipo}`;
            tipo.classList.add('tipo');
    
            
    
            card.appendChild(foto);
            card.appendChild(nombre);
            card.appendChild(precio);
            card.appendChild(marca);
            
    
            sct_cards.appendChild(card);
    
    

            }


           
        



        }

    })

}

buscando.addEventListener('keyup', mostrar_cards)
mostrar_cards();