//Tarea Avance
//1

function m(){
	var numeros = [];
	for (var i=0, v=10; i<v; i++){
		numeros.push(Math.round(Math.random() * v))
	}
		console.log (numeros);
}

//2

function m(){
	var numeros = [];
	for (var i=0, v=10; i<v; i++){
		numeros.push(Math.round(Math.random() * v))
	}
		console.log (numeros);
}

//Funcion ordenar sin .sort();
function m(){
	if (numeros.length > 0){	
		console.log("hola");
	}
}//Falta completar

//Tarea Bonus
function m(ordenar){
	var numeros = [];
	for (var i=0, v=10; i<v; i++){
		numeros.push(Math.round(Math.random() * v))
	}
		console.log (numeros.sort(function (a, b) { 
    return a - b;
}));
}

function m(reversa){
	var numeros = [];
	for (var i=0, v=10; i<v; i++){
		numeros.push(Math.round(Math.random() * v));
		numeros.sort();
	}
		console.log (numeros.reverse(function (a, b) { 
    return a - b;
}));
}















