
		//LOOPS
		for (var i=0 ; i <= 10; i++){
			console.log (i); //Se puede modificar variable para ir manipulando ej: console.log (i/2);

		}
		var hola = 6
		for (var i=0 ; i <= hola; i++){
			console.log (i); //Se puede modificar variable para ir manipulando ej: console.log (i/2);

		}

		var hola = 6
		for (var i=0 ; i <= hola; i++){
			console.log (i); 

		}
		//Loop infinito
		var chao = true
		while(chao==true )
		//Pregunta si loop es verdadero
		{


		}
		var chao = true
		while(chao){
			chao=false
			console.log ("chao");
		}

		//Toma de decisiones.
		//If: compara "a" con "b"

		var queEstaPasando = 5;

		if (queEstaPasando > 3){	
			console.log("mayor");
		}else if(queEstaPasando == 0){
			console.log("nada");

		}else if(queEstaPasando < 3){
			console.log("menor");

		}
		
			

		//Switch: busca caso por caso, no olvidar "break;"

		switch (){
			var valor = 2;
				case 3:
						console.log("vale 3");
					break;
				case 5:
						console.log("vale 5");
					break;
				default 
						console.log("cualquier valor");
					break;

		}

		//Tarea 
		var esPrimo = 5;
		if (esPrimo > 3){	
			console.log("true");
		}else if(esPrimo == 0){
			console.log("false");}


		var esPrimo = 0;
		if (esPrimo > 3){	
			console.log("mayor");
		}else if(esPrimo == 0){
			console.log("igual");
		}else if(esPrimo < 3){
			console.log("menor");
		}

//for (var i=0 ; i <= 10; i++)

		var esPrimo = 5;
		if (esPrimo == 4){	
			console.log("true");
		}else{
			console.log("false");}

		var esPrimo = 3;
		if (esPrimo == 3){	
			console.log("true");
		}else{
			console.log("false");}
		

		var chao = true
		while(chao){
			chao=false
			console.log ("chao");
		}


		function esPrimo (numero){
			for (var i=2 ; i < numero; i++){
			if(numero % i == 0){
				console.log ("No es primo");
				return false;
			}
		}
		return true;
		}


		function esPrimo (numero){
			for (var i=2 ; i < numero; i++){
			if(numero % i == 0){
				console.log ("No es primo");
				return false;
			}
		}
		return true;
		}
		
		

		function esPrimo (numero){
			for (var i=2 ; i < 100; i++){
			if(numero % i == 0){
				console.log ("sddgsdg");	
			}
		}
		}

//Métodos: Funciones predefinidas que se pueden aplicar a una variable en particular.

//Métodos para STRING

var hola = "fuckJavascript"
hola.length //length: función para contar las letras que tiene mi palabra.
for (var i=2 ; i < hola.length; i++){} //Me muestra el numero de caracteres de cualquier palabra que ponga en la variable "hola"

hola.toLowerCase() //toLowerCase: funcion que transforma caracteres en minúscula.

//Para cambiar aspecto de la variable con string debo darle su valor a la variable con ella misma.
hola = hola.toLowerCase()

//concat(): Concatenar palabras

hola.concat(" chao1 ","chao2 ","chao3")

//split(): Dividir palabras

hola.split("") // ("") es un espacio.

//indexOf(): En que posición dentro de mi string, empieza el string que quiero encontrar, retorna el valor de su posición, devuelve un número si no existe devuelve -1.
hola.indexOf("J")
//charAt():Para saber que palabra hay en esa posición, busco el número en vez de la palabra.
hola.charAt(5)

//substr():Substring, pongo un string dentro de otro para devolver, encontrar una palabra dentro de una frase. Parto de un lugar y pongo largo determinado.
var nombre = "Macarena Oviedo";
nombre.substr(9,4);
//Después de 9 caracteres, que me devuelva los 4 que vienen.
//Defino desde cuando empiezo y cuando termino.

nombre.substr(8,nombre.indexOf("a")-1);

//slice():Me devuelve información. Defino donde empieza donde termina.
var nombre = "Macarena Oviedo";
nombre.slice(6,nombre.indexOf("A")-1);
//Empieza desde el carácter 6, restale uno antes de A, me estaría restando el espacio entre Macarena y Oviedo.

var nombre = "Macarena Oviedo";
nombre.slice(7,nombre.indexOf("O")-1);
//Devuelve
"a"

//array(): Arreglo o matriz. (Corchetes que se muestran cuando split separa las palabras.)
//Matriz 2 dimensiones
//Arreglo "n" dimensiones siempre se define con un paréntesis cuadrado. [] (puede ser infinita la info dentro de el)
//Para acceder  a mi información: 
//Arreglo de 1 dimensión.
//Arreglo[n]: n puede ser cualquier número se pone el número de la posición (ejemplo cuadritos, hielera.)
//Arreglo[2] Dame la cajita 2.

//Matriz: Arreglo de dos dimensiones, se le dan dos coordenadas, cuando son mas dimensiones es lo mismo.
//Arreglo[2][3]

//Métodos para ARRAY

var arreglo = [3,"hola", 5] //Hola es posición (cajita) 1 porque computador cuenta desde 0.
arreglo[1]
//Devuelve
"Hola"

arreglo[1].length //Me trae el numero de caracteres que tiene "Hola"

//arreglo.push(): Ingresa datos y modifica todo. Empuja la nueva información para poder meterse.
arreglo.push(7)
arreglo
//Devuelve
[3,"hola", 5, 7]

//arreglo.pop(): Me saca la última info (última cajita) en este caso me saca 7.
arreglo.pop()
[3,"hola", 5]

//arreglo.join(): Me junta los caracteres dentro del array con signos, espacios, etc.
arreglo.join(&)
//Devuelve

[3&"hola"&5]

//arreglo.sort(): Me ordenar cifras de mayor a menor y de menor a mayor. 
var arreglo2 = [24, 65, 2, 87, 90]

arreglo2.sort()
//Devuelve
[2, 24, 65, 87, 90]

arreglo2.reverse()
//Devuelve
[90, 87, 65, 24, 2]

//Puedo concatenar 2 arreglos a diferencia del .push() que solo agrega 1.
arreglo.concat(arreglo2)
[3,"hola",5, 24, 65, 2, 87, 90]


//TAREA

function m(){
		var numeros = 10;
		for (var i=0 ; i <= numeros; i++){
			numeros.push("Naranja");

		console.log (i); 
		}
		 
	}


function m(){
		var numeros = 10;
			numeros.push(
				for (var i=0 ; i <= numeros; i++){
			console.log (i);
		}
		);
	}


function m(){
	var numeros = [10];
	for (var i=0 ; i <= Math.random(); i++){
		numeros.push(i);
		console.log (numeros);
	}
		
}


function m(){
	var numeros = [5];
	for (var i=0 ; i <= 10; i++){
		numeros.push(1);
		console.log (numeros);
	}
		
}

function m(){
	var numeros = [5];
		numeros.push(1);
		console.log (numeros);
	
		
}

for (var i=0 ; i <= 10; i++){
	console.log (i);
}



function m(){
	var numeros = [5];
	for (var i=0 ; i < 10; i++){
		numeros.push(Math.round(Math.random() * i);
		console.log (numeros);
	}
		
}


function m(){
	var numeros = [];
	for (var i=0, i<10; i++){
		numeros.push(Math.round(Math.random() * i))
		console.log (numeros);
	}
		
}
















