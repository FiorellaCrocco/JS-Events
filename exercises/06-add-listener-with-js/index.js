window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here

let botton = document.getElementById("theGreen");

/* botton.addEventListener("click", function(){
	alert("wuju");
}) */

/* Las funciones de flechas se definen antes de llamarlas*/
const alertwuju = ()=> {
	alert("wuju");
}

/* Hay que decir que función utilizar pero no llamarla o saldrá antes */
botton.addEventListener("click", alertwuju);

/* function alertwuju(){
	alert("wuju");
} */
