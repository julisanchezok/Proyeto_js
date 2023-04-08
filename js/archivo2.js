
console.log("estoy en archivo 2")

function agregarusuario(){

document.getElementById('esteformulario').addEventListener('click', function(e){
//e.preventDefault();   //cuando toco registrarme agrega el usuario 

//intento con el for para recorrer formulario 
let formulario=document.getElementById('esteformulario');
let usuario_deArray ={};

for( let i=0; i<formulario.elements.length; i++){
    const elemento = formulario.elements[i];
    usuario_deArray[elemento.id] = elemento.value;
}
//si el usuario esta vacio 
if (usuario_deArray.inputUsuario === '') {
    console.log('El campo de nombre de usuario está vacío');
    return; // devuelve la función para detener la ejecución
}

localStorage.setItem("datos", JSON.stringify(usuario_deArray));
localStorage.setItem("usuario", JSON.stringify(usuario_deArray.inputUsuario));
localStorage.setItem("clave", JSON.stringify(usuario_deArray.contraseña));


});
}

agregarusuario();
usuarioEnLS=localStorage.getItem ('usuario');


let datos = localStorage.getItem("datos")
JSON.parse(datos)
console.log(datos)

