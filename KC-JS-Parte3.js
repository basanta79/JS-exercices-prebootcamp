function getSlice(){
	let numbers=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
	let start = parseInt(document.getElementById("KC_13_start").value);
    let end = parseInt(document.getElementById("KC_13_end").value);
	let result;
	if (start < 0 | end > 19){
		document.getElementById("KC_13_Result").value = "";
		return document.getElementById("KC_EJ13_label").innerHTML = "el rango debe situarse entre 1 y 20";
	}
	result = numbers.slice(start,end);
	document.getElementById("KC_EJ13_label").innerHTML = "";
	return document.getElementById("KC_13_Result").value =result;
}

function getLength(){
	let inputString = document.getElementById("KC_14_string").value;
	return document.getElementById("KC_14_Result").value = inputString.length;
}

function setQualificationsAndNames(){
	let name1 = document.getElementById("KC_15_name1").value;
	let name2 = document.getElementById("KC_15_name2").value;
	let name3 = document.getElementById("KC_15_name3").value;
	let qualif1 = document.getElementById("KC_15_qualif1").value;
	let qualif2 = document.getElementById("KC_15_qualif2").value;
	let qualif3 = document.getElementById("KC_15_qualif3").value;
	let notas = new Array;
	notas.push({"nombre": name1, "nota": qualif1});
	notas.push({"nombre": name2, "nota": qualif2});
	notas.push({"nombre": name3, "nota": qualif3});
	console.log(notas);	
}

function getNameWithIndex(){
	let names= ['Pedro Picapiedra', 'Pablo Marmol', 'Bob Esponja', 'Patricio'];
	let index = document.getElementById("KC_16_index").value;
	if (index>(names.length-1)){
		document.getElementById("KC_16_Name").value = "";
		return document.getElementById("KC_EJ16_label").innerHTML = `el rango debe situarse entre 0 y ${names.length-1}`;
	}else{
		document.getElementById("KC_EJ16_label").innerHTML = "";
		return document.getElementById("KC_16_Name").value = names[index];
	}
}

function getMailWithName(){
	let info = {
		'Pedro' : 'pedro@gamil.com', 
		'Pablo': 'pablo@gmail.com', 
		'Bob': 'bob@gmail.com',
		'Patricio': 'patricio@gmail.com'
	};
	let name = document.getElementById("KC_17_name").value;
	let email = info[name];
	if (email===undefined){
		document.getElementById("KC_17_Mail").value = "";
		return document.getElementById("KC_EJ17_label").innerHTML = 'No se ha encontrado ese nombre';
	}else{
		document.getElementById("KC_EJ17_label").innerHTML = '';
		return document.getElementById("KC_17_Mail").value = email;
		
	}
	
}
