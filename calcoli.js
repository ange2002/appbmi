/* Calcoli per la app sul BMI */
function calcolo(){
//identificare i dati del form
var peso=document.forms.BMI.peso.valueAsNumber;
var altezza=document.forms.BMI.altezza.valueAsNumber;
var sesso=document.forms.BMI.sesso.value;
/* i dati non possono essere vuoti --> required */
// verifico se l'utente è m o f
if(sesso="m"){
	// applico la formula bmi per m
	var totale= peso/(altezza*altezza);
        /*Math.pow(base,exo)
	 *Math.pow(altezza,2)*/
	document.getElementById('calcola').innerHTML="BMI ="+totale;
	}
        else if(sesso="f"{
	// applico formula bmi per f
	var totale= (peso/(altezza*altezza))*0.9; 
	document.getElementById('calcola').innerHTML="BMI ="+totale;
	}
function annulla(){
	document.getElementById('calcola').innerHTML=" ";
}
