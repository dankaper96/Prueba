/*-----------------------------------------------------------------------------------
	Nombre: DISEÑOS DE SITIOS WEB | Fase de Construcción
	URI: 
	Descripcion: Unidad 1 y 2: Fase de Construcción - Crear un OVI en formato WEB con HTML5 y CSS3.
	Autores: Jhonattan Guillermo Rodriguez Rojas - 
-----------------------------------------------------------------------------------*/
function mostrarOcultar(id){
var elemento = document.getElementById(id);
if(!elemento) {
return true;
}
if (elemento.style.display == "none") {
elemento.style.display = "block"
} else {
elemento.style.display = "none"
};
return true;
};


