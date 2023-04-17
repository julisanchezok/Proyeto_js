
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
let isLoggedIn = false;

//Verifying user existence
const login = (e) => {
    e.preventDefault();

    const usuario = document.getElementById('inputUsuario').value
    const password = document.getElementById('contraseña').value
    const userEncontrado = usuarioEnLS.find(u=>u.inputUsuario === usuario)

    if (userEncontrado){
        if(userEncontrado.contraseña === password){
            localStorage.setItem('isLoggedIn', true);
            if (localStorage.getItem('isLoggedIn')) {
                mainBody.className += ' d-block';
                registro.className += ' d-none';
                mainBody.className+= ' d-block';
                popUp.className += '  d-flex justify-content-start flex-column align-items-center'
                mensajeBienvenida(userEncontrado);
                isLoggedIn = true;
                console.log("logueado correctamente", userEncontrado)
            } 
        }
        else{
            console.log("usuario o contraseña incorrecta")
           } 
    }
   else{
    console.log("usuario o contraseña incorrecta")
   } 

}

if(formularioLogin){
    formularioLogin.addEventListener('submit', login)
}



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

if(popUp){
    function cerrarPopUp(){
        popUp.className += ' d-none';
    }
}


if(popUp){
    botonCerrarPP.onclick = () => {cerrarPopUp()}
}

if(popUp){
setTimeout(() => {
    cerrarPopUp()
}, 20000)
}

let cerrarSesion = document.getElementById('logout');
if(cerrarSesion){
    cerrarSesion.onclick = () => {
        localStorage.setItem('isLoggedIn', false);
        location.reload();
    };
}


//AJAX FETCH ACTIVITIES 



const promesa = new Promise((resolve, reject) => {

    const actividadesContainer = document.getElementById('actividades')
    fetch('../data/actividades.json')
    .then(data => data.json())
    .then(actividades => {
        console.log(actividades)
        actividades.forEach(actividad => {
            actividadesContainer.innerHTML+=`
            <div class="item" data-actividad="${actividad.nombre}">
                <img src=${actividad.imgUrl} class="itemimg" alt="${actividad.nombre}">
                <h4 class="text_item" > ${actividad.nombre} </h4>
                <p> ${actividad.descripcion}</p>
                <button id="inscripcion" class="btn btn-primary"> Inscribirme </button>
            </div>
            `
        });
        //for each button I click on, it will show up the div class
        const res =  inscribirseboton();
    })

    resolve(
       console.log("¡La promesa se resolvió correctamente!")
    );
    reject('Hubo un error al resolver la promesa');


  });
  
  promesa.then((resultado) => {
    console.log(resultado); // prints: "¡La promesa se resolvió correctamente!"
  })
  .catch((error) => {
    console.error(error); // prints: "Hubo un error al resolver la promesa"
  });
  
// function for on click event 
//   const inscripcion = (e) => {
   
//     const containerPInsc = document.getElementById("PopUpInscripcion")
//     containerPInsc.className += ' d-block'
//     fetch('../data/actividades.json')
//     .then(data => data.json())
//     .then(actividades => {
//         actividades.forEach(actividad => {

//         containerPInsc.innerHTML += `
        
//         <button id="botonCerrarPop"> X </button>
//         <p id="welcome"></p>
//         <p> Horarios de ${actividad.nombre}: </p>
//         <p id="clasesInscripto"> ${actividad.horario}</p>
    
//     `;
//     })
//     })
//     }
//js
    // const inscripcion = (e) => {
    //     const actividad = e.target.getAttribute('data-actividad');
    //     const containerPInsc = document.getElementById("PopUpInscripcion");
    //     containerPInsc.className += ' d-block'
    //     containerPInsc.innerHTML += `
    //         <button id="botonCerrarPop"> X </button>
    //         <p id="welcome"></p>
    //         <p> Horarios de ${actividad.nombre}: </p>
    //     `;
    //     fetch('../data/actividades.json')
    //     .then(data => data.json())
    //     .then(actividades => {
    //         const horarios = actividades.find(a => a.nombre === actividad).horario;
    //         horarios.forEach(horario => {
    //             const p = document.createElement('p');
    //             p.innerHTML = horario;
    //             containerPInsc.appendChild(p);
    //         });
    //     });
    // }

    const inscripcion = (e) => {
        const actividad = e.target.closest('.item').dataset.actividad;
        const containerPInsc = document.getElementById("PopUpInscripcion");
        containerPInsc.className = containerPInsc.className.replace('d-none', 'd-block');
        containerPInsc.innerHTML = `
            <button id="botonCerrarPopUpInscripcion"> X </button>
            <p id="welcome"></p>
            <p> Horarios de ${actividad}: </p>
        `;
        fetch('../data/actividades.json')
            .then(data => data.json())
            .then(actividades => {
                const actividadEncontrada = actividades.find(a => a.nombre === actividad);
                if (actividadEncontrada) {
                    const horarios = actividadEncontrada.horario;
                    if (horarios) {
                        const clasesInscripto = document.createElement("p");
                        clasesInscripto.id = "clasesInscripto";
                        clasesInscripto.innerText = horarios;
                        containerPInsc.appendChild(clasesInscripto);
                    } else {
                        containerPInsc.innerHTML += "<p>No hay horarios disponibles para esta actividad</p>";
                    }
                } else {
                    containerPInsc.innerHTML += "<p>No se encontró la actividad seleccionada</p>";
                }
            });
        containerPInsc.className = containerPInsc.className.replace('d-none', 'd-block');
        document.getElementById("botonCerrarPopUpInscripcion").addEventListener("click", cerrarPopUpInscripcion);
    }
    
    const cerrarPopUpInscripcion = () => {
        const containerPInsc = document.getElementById("PopUpInscripcion");
        containerPInsc.className = containerPInsc.className.replace('d-block', 'd-none');

    }



//function for each button in Actividades    
function inscribirseboton() {
    const botonesInscripcion = document.querySelectorAll("#actividades .item #inscripcion");
    botonesInscripcion.forEach((boton) => {
        boton.addEventListener("click", inscripcion);
    });
}

