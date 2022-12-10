/* SALUDAR */
function saludar (mensaje){
    let nombreIngresado = prompt ("Ingresar nombre");
    alert (mensaje + " " + nombreIngresado);
}
saludar ("Hola");


/* SOLICITAR DATOS DEL AUTO - CONTROL DE FLUJOS*/
function cotizarSeguro () {

    let marca = prompt ("Ingrese la marca de su auto");
    let anio = prompt ("Ingrese el año de su auto");
    
    if ((marca != "") && (anio != "")) {
    alert ("El seguro contratado será para el auto " + marca + " " + "del año " + anio); 
    } else{
    alert ("Error: debe ingresar todos los datos de su vehículo");
}
}
cotizarSeguro ();


/* SOLICITAR QUE SELECCIONE UN PLAN - SWITCH*/
function Seleccionarplan (){

    let entrada =  prompt("Seleccionar el tipo de plan (1 o 2)");
    while (entrada != "ESC") {
        switch (entrada) {
            case "1":
                alert("Plan Básico");
                break;
            case "2":
                alert("Plan Completo");
                break;
            default:
                alert("Error");
                break;
        }
    entrada = prompt("Seleccionar el tipo de plan (1 o 2)");
}
}
Seleccionarplan ();


/* OBJETO */
class auto {
    constructor (marca, modelo, anio, nombre){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.nombre = nombre;
    }

}


/* ARRAY */
const autos = [];
    autos.push (new auto ("Toyota", "Corolla", "2022", "Juan"));
    autos.push (new auto ("Volkswagen", "Gol", "2019", "Maria"));
    autos.push (new auto ("Ford", "Fiesta", "2021", "Marcos"));
console.log (autos);


/* INDICAR DATOS DEL AUTO SEGÚN EL NOMBRE DEL PROPIETARIO - FIND */
function buscarAuto (clientes, auto){
    return clientes.find(objeto => objeto.nombre === auto);
}
for (let i=0; i < 1; i++){
    let busqueda = buscarAuto (autos, prompt("Ingrese el nombre del propietario"));
    if (busqueda != undefined){
        alert ("Propietario: " + busqueda.nombre + " Auto: " + busqueda.marca + " Año: " + busqueda.anio);
    } else {
        alert ("El cliente no existe");
    }
}


/* FILTER */
const resultado = autos.filter ((el) => el.anio.includes ("2022"));
console.log (resultado)