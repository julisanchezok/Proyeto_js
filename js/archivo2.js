
console.log("estoy en archivo 2")

//el array usuarios va a ser del elemento usuarios de  LS y si no existe es vacio
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function redireccionar() {
    console.log("entre en la funcion redirec")
    window.location.href = "../index.html";
}


function agregarusuario(){

document.getElementById('esteformulario').addEventListener('submit', function(e){

e.preventDefault();   

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

//si el usuario ya existe
const user = usuarios.find( u => u.inputUsuario === usuario_deArray.inputUsuario)
if (user){
    console.log("El nombre usuario ya existe")
    
}


//cada vez q nos registramos guardamos ese usuario en LS
usuarios.push(usuario_deArray)
localStorage.setItem("usuarios", JSON.stringify(usuarios))

console.log("redireccionando al usuario")
redireccionar()



 });
}






agregarusuario();

