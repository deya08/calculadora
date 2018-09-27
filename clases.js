function  Calculadora(numA, numB){
	this.numA=numA;
	this.numB=numB;
	this.sumar=function(){
		var suma=this.numA+this.numB;
		alert(suma);
		return suma;	
	}
