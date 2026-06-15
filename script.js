let productos = JSON.parse(localStorage.getItem("productos")) || [];


function guardar(){
    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );
}


function mostrar(){

    let lista = document.getElementById("lista");

    lista.innerHTML="";


    productos.forEach((p,index)=>{

        lista.innerHTML += `
        <li>
        ${p.nombre} - Stock: ${p.cantidad}

        <button onclick="eliminar(${index})">
        Eliminar
        </button>

        </li>
        `;

    });

}


function agregarProducto(){

let nombre=document.getElementById("producto").value;
let cantidad=document.getElementById("cantidad").value;


productos.push({
    nombre,
    cantidad
});


guardar();
mostrar();

}


function eliminar(index){

productos.splice(index,1);

guardar();
mostrar();

}


mostrar();
