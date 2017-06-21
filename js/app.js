var jsonE = '{"estudiantes" : [' +
	'{"codigo" : "001", "nombre" : "Julio Florez", "nota":"3.5"},'+
	'{"codigo" : "002", "nombre" : "Maria Martinez","nota":"3.5"},'+
	'{"codigo" : "003", "nombre" : "Pablo Perez", "nota":"3.6"},'+
	'{"codigo" : "004", "nombre" : "Americo Bespusio", "nota":"3.8"},'+
	'{"codigo" : "005", "nombre" : "Alberto Estrada", "nota":"4.6"},'+
	'{"codigo" : "006", "nombre" : "George Roache", "nota":"4.4"},'+
	'{"codigo" : "007", "nombre" : "Diego Quintero", "nota":"4.2"},'+
	'{"codigo" : "008", "nombre" : "Gustavo Taborda", "nota":"3.9"},'+
	'{"codigo" : "009", "nombre" : "Karen Parra", "nota":"3.7"},'+
	'{"codigo" : "010", "nombre" : "Claudio Avellaneda", "nota":"3.0"}]}';

	var jsonO = JSON.parse(jsonE); //Convierte a un JSON

	//Muestra listado general de estudiantes con sus notas
	function mostrarListado(json) { 
		var codigo = "";
		var nombre ="";
		var nota="";
		var i;
		for (i = 0; i < json.estudiantes.length; i++) {
			codigo += json.estudiantes[i].codigo +"<br>";
			nombre+=  json.estudiantes[i].nombre + "<br>";
			nota+= json.estudiantes[i].nota + "<br>";
		}

		document.getElementById("Codigo").innerHTML = 
		codigo;
		document.getElementById("Nombre").innerHTML = nombre;
		document.getElementById("Nota").innerHTML = nota;


	}
	//Muestra el promedio general de todos los estudiantes
	function mostrarPromedioGeneral(json) {
		var sum=0;
		var prom=0;
		var i;
		for (i = 0; i < json.estudiantes.length; i++) {
			sum+=(Number(json.estudiantes[i].nota))
			}
			prom= sum/json.estudiantes.length;
			document.getElementById("promedio-General").innerHTML = "El promedio general de los estudiantes es: " + prom.toFixed(2);;
			}

	function mostrarNotaMayor(json){//Muestra la nota mayor de todos los estudiantes
		
		var notaAlta = Number(json.estudiantes[0].nota);
		var pos = 0;
		
		for (i = 0; i < json.estudiantes.length; i++) {

		if (Number(json.estudiantes[i].nota) > notaAlta) {
		notaAlta = Number(json.estudiantes[i].nota);
		pos = i;
			}
		}
		document.getElementById("nota-Mayor").innerHTML = "La nota mas alta de los estudiantes es:   Código: " + json.estudiantes[pos].codigo+ " Nombre: " + json.estudiantes[pos].nombre + "<br>" + " Con una nota de: " + json.estudiantes[pos].nota.toString() ;

	}
	
	function mostrarNotaMenor(json){//Muestra la nota menor de todos los estudiantes
		
		var notaBaja = Number(json.estudiantes[0].nota);
		var pos = 0;
		
		for (i = 0; i < json.estudiantes.length; i++) {

		if (Number(json.estudiantes[i].nota) < notaBaja) {
		notaBaja = Number(json.estudiantes[i].nota);
		pos = i;
			}
		}
		document.getElementById("nota-Menor").innerHTML = "La nota mas baja de los estudiantes es:   Código: " + json.estudiantes[pos].codigo+ " Nombre: " + json.estudiantes[pos].nombre + "<br>" + " Con una nota de: " + json.estudiantes[pos].nota.toString() ;

	}

	function eventoCargar(){//Muestra un mensaje de bienvenida
		alert("Bienvenido a la sección Notas")
	}

	function borrarTexto(){//Borra todo el texto del contenedor y da un mensaje de agradecimiento
		alert("Gracias por consultarnos")
		document.getElementById("Codigo").innerHTML = 
		"";
		document.getElementById("Nombre").innerHTML = "";
		document.getElementById("Nota").innerHTML = "";
		document.getElementById("nota-Menor").innerHTML = "";
		document.getElementById("nota-Mayor").innerHTML = "";
		document.getElementById("promedio-General").innerHTML = "";
	}