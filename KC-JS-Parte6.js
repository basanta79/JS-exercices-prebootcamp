//KC_EJ31 Crear una clase Alumno

class Alumno{
	constructor(matricula, nombre, apellido, correo, inscrito){
		this.numeroMatricula=0;
      	this.nombre="";
      	this.apellido="";
      	this.correoElectronico="";
      	this.estatusInscrito = false;
		if ((typeof matricula) == "number") {this.numeroMatricula = matricula; }
		if ((typeof nombre)== "string"){ this.nombre = nombre; }
		if ((typeof apellido)== "string"){ this.apellido = apellido; }
		if ((typeof correo)== "string"){ this.correoElectronico = correo; }
		if ((typeof inscrito)== "boolean"){ this.estatusInscrito = inscrito; }
	}
}

//KC_EJ32 Crear la clase modulo
class Modulo {

	constructor(inicio, fin){
		this.listadoalumnos = new Array;
		this.fechaInicio = inicio;
		this.fechafin = fin;
	}

	setNewStudent(student){
		if (typeof student == Object){
			this.listadoalumnos.push(student);
		}
	}

	getStudent(name){
		
	}

	getStudentsEnrolled(){
		
	}
}