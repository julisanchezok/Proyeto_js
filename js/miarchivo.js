
/* ORGANIZATION:

-Setting vars for login
-Verifying user existence
-Welcome message with name and gender 
-Pop up script 
-Log out Script 


*/


//Setting vars for login
let usuarioEnLS=JSON.parse(localStorage.getItem ('usuarios'));
let registro = document.getElementById('grancont')
let mainBody= document.getElementById('body')


const formularioLogin= document.getElementById('formularioLogin')

//Verifying user existence

const login = (e) => {
    e.preventDefault();

    const usuario = document.getElementById('inputUsuario').value
    const password = document.getElementById('contraseña').value
    const userEncontrado = usuarioEnLS.find(u=>u.inputUsuario === usuario)

    if (userEncontrado){
        if(userEncontrado.contraseña === password){
            console.log("logueado correctamente", userEncontrado)
            registro.className += ' d-none';
            mainBody.className+= ' d-block';
            popUp.className += '  d-flex justify-content-start flex-column align-items-center'
            mensajeBienvenida(userEncontrado);

        }
        else{
            console.log("usuario o contraseña incorrecta")
           } 
    }
   else{
    console.log("usuario o contraseña incorrecta")
   } 
}

formularioLogin.addEventListener('submit', login)

// Welcome message with name and gender 

function mensajeBienvenida(datos){
    let title = document.getElementById('welcome')
    const name = datos.inputName
    const gender = datos.inputSex
    if(gender == "Femenino"){
            title.innerText = "Bienvenida " + name +"!"
    }
    else{
            title.innerText = "Bienvenido " +  name +"!"
    }   
     
    let claseInscripto = document.getElementById('clasesInscripto')
    claseInscripto.innerHTML = datos.clase 


        
}


//Pop up script 

let popUp= document.getElementById('popUp')
let botonCerrarPP= document.getElementById('botonCerrarPop')

function cerrarPopUp(){
    popUp.className += ' d-none';
}

botonCerrarPP.onclick = () => {cerrarPopUp()}

setTimeout(() => {
    cerrarPopUp()
}, 15000)

// Log out Script 
let cerrarSesion= document.getElementById('logout')
cerrarSesion.onclick =() => {}
