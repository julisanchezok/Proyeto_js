
/* ORGANIZATION:

-Setting vars for login
-Verifying user existence
-verifying if formulario exists and if the user is logged 
-function when the user is loged 
-Welcome message with name and gender 
-Pop up script 
-Log out Script
-AJAX FETCH ACTIVITIES 
-function for on click event 
-reading values and adding the class marked 
-function for close Pop up ((activities))
-function for each button in Actividades    




*/


//Setting vars for login
let usuarioEnLS=JSON.parse(localStorage.getItem ('usuarios'));
let registro = document.getElementById('grancont')
let mainBody= document.getElementById('body')
let popUp= document.getElementById('popUp')
let logeoprevio = false;
const formularioLogin= document.getElementById('formularioLogin')

let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

let claseAsociada = localStorage.getItem ('claseSeleccionada');

//Verifying user existence
const login = (e) => {
   // e.preventDefault();
    logeoprevio = true;
    const usuario = document.getElementById('inputUsuario').value
    const password = document.getElementById('contraseña').value
    const userEncontrado = usuarioEnLS.find(u=>u.inputUsuario === usuario)
    if (userEncontrado){
        if(userEncontrado.contraseña === password){
            localStorage.setItem('isLoggedIn', true);
            if (!isLoggedIn) {
                let JsonUsuario = JSON.stringify(userEncontrado)
                sessionStorage.setItem("usuarioIniciado", JsonUsuario);
                estaLog();
                
            }
            } 
        else{
            console.log("usuario o contraseña incorrecta")
           } 
    }
   else {
    console.log("usuario o contraseña incorrecta")
   } 

}

//verifying if formulario exists and if the user is logged 
if(formularioLogin){
       if (isLoggedIn){
        let userEncontrado = JSON.parse(sessionStorage.getItem("usuarioIniciado"))
        estaLog()
        }  
        else{
        formularioLogin.addEventListener('submit', login)
    }
    formularioLogin.addEventListener('submit', login)

}

//function when the user is loged 

    function estaLog() {
        const userEncontrado = JSON.parse(sessionStorage.getItem("usuarioIniciado"));
      
        if (userEncontrado) {
          mainBody.className = mainBody.className.replace('d-none', 'd-block');
          registro.className = registro.className.replace('d-block', 'd-none');
      
          if (claseAsociada) {
            popUp.className = popUp.className.replace('d-none', 'd-block');
            popUp.className += '  d-flex justify-content-start flex-column align-items-center';
      
            mensajeBienvenida(userEncontrado.inputName, userEncontrado.inputSex);
        
            console.log("logueado correctamente", userEncontrado);
          }
        }
      }
      




// Welcome message with name and gender 

function mensajeBienvenida(name, gender){
    let title = document.getElementById('welcome')
    let names= name;
    let genders = gender;
    if(genders == "Femenino"){
            title.innerText = "Bienvenida " + names +"!"
    }
    else{
            title.innerText = "Bienvenido " +  names +"!"
    }   
     
    let claseInscripto = document.getElementById('clasesInscripto')
    let claseAso = localStorage.getItem ('claseSeleccionada');
    claseInscripto.innerHTML = claseAso
        
}


//Pop up script 


let botonCerrarPP= document.getElementById('botonCerrarPop')

if(popUp){
    function cerrarPopUp(){
        popUp.className = popUp.className.replace('d-block', 'd-none')
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

//log out script
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
                            const containerHorarios = document.createElement("div");
                            containerHorarios.className += "horarios-container";

                            horarios.forEach((horario, index) => {
                            const horarioInput = document.createElement("input");
                            horarioInput.type = "checkbox";
                            horarioInput.id = `horario-${index}`;
                            horarioInput.value = horario;
                            horarioInput.className += "form-check-input";

                            const horarioLabel = document.createElement("label");
                            horarioLabel.innerText = horario;
                            horarioLabel.htmlFor = `horario-${index}`;
                            horarioLabel.className += "form-check-label";

                            const horarioContainer = document.createElement("div");
                            horarioContainer.className += "form-check";

                            horarioContainer.appendChild(horarioInput);
                            horarioContainer.appendChild(horarioLabel);
                            containerHorarios.appendChild(horarioContainer);
                            });

                            containerPInsc.appendChild(containerHorarios);

                        const button_Inscripcion= document.createElement("button");
                        button_Inscripcion.className += 'btn btn-primary'
                        button_Inscripcion.id = 'agregarClase'
                        button_Inscripcion.innerText = "Inscribirse";
                        containerPInsc.appendChild(button_Inscripcion);    
                        document.getElementById("agregarClase").addEventListener("click", addClass )


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

    //reading values and adding the class marked 
    const addClass = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let claseSeleccionada;

        checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            claseSeleccionada = checkbox.value;
        }
        });

        
        localStorage.setItem('claseSeleccionada', claseSeleccionada);
        const containerPInsc = document.getElementById("PopUpInscripcion");
        containerPInsc.innerHTML += "<p> Inscripción realizada! <p>"
        

        setTimeout(() => {
            cerrarPopUpInscripcion();
          }, 2000);


    }
    
    //function for close Pop up ((activities))
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
