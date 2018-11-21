function arrayNumbersTo(end){
    let result= new Array;
    for (let iterator=1; iterator<=end; iterator++){
        result.push(iterator);
    }
    return result;
}

function sumaArrayElements(arr){
    let result =0;
    arr.forEach(item =>{
        result+=item;
    });
    return result;
}

function naturalNumbersTo(){
    let end = document.getElementById("KC_18_numero").value;
    let result = new Array;
    result = arrayNumbersTo(end);
    return document.getElementById("KC_EJ18_label").innerHTML = result;
}

function evenNumbers(){
    let numbersInRow = document.getElementById("KC_19_numeros").value;
    let numbersArray = new Array;
    let resultArray = new Array;
    numbersArray = numbersInRow.split(',');
    if (numbersArray.length != 10){
        return document.getElementById("KC_EJ19_label").innerHTML = "Debe haber 10 números";
    }
    numbersArray.forEach(item =>{
        if ((item % 2)==0) {
            resultArray.push(item);
        }
    })
    return document.getElementById("KC_EJ19_label").innerHTML = resultArray;
}

function addNaturalNumbers(){
    let end = document.getElementById("KC_20_numero").value;
    let arr = new Array;
    let result=0;
    arr = arrayNumbersTo(end);
    console.log(arr);
    result = sumaArrayElements(arr);
    console.log(result);
    return document.getElementById("KC_20_Suma").value = result;
}

function prodTable(){
	let numero = document.getElementById("KC_21_tabla").value;
	let tabla = new Array;
	let result="<br>";
	for (let iterator =1; iterator<=10; iterator++){
			tabla.push(`${iterator} x ${numero} = ${iterator*numero}`);
	}
	tabla.forEach(item =>{
		console.log(item);
		result = result + item + "<br>";
	});
	return document.getElementById("KC_EJ21_label").innerHTML = result;
	
}

let people = new Array;
function storePeople(){	
	let name = document.getElementById("KC_22_name").value;
	let age =  document.getElementById("KC_22_age").value;
	people.push({'nombre': name, 'edad':age});	
}

function findAdults(){
	console.log(people);
	let result= "";
	if (people.length==10){
		people.forEach( item => {
			if (item ['edad']>17){
				result = result + "," + item['nombre'];
			}
		});
		return document.getElementById("KC_EJ22_label").innerHTML = result;
	}else{
		return document.getElementById("KC_EJ22_label").innerHTML = "Debe haber 10 personas";
	}
}

let scores = new Array;
function storeScores(){
	let data = document.getElementById("KC_23_input").value;
	let result = "";
	let mean =0;
	if (data==="terminar"){
		scores.forEach( item => {
			mean=0;
			item['scores'].forEach(item => {
				mean = mean + parseInt(item);
			});
			mean = mean / item['scores'].length;
			result = result + "<br>" +item['name'] + ":" + mean;
		});
		return document.getElementById("KC_EJ23_label").innerHTML = result;
		console.log(result);
	}else{
		let dataSplit = data.split(' ');
		let scoreSplit= dataSplit[1].split(',');
		scores.push({'name': dataSplit[0], 'scores':scoreSplit});
		console.log(scores);
	}
}

function average(arr){
    let result=0;
    arr.forEach(element=>{
        result += parseInt(element);
    });
    result = result/arr.length;
    return result;
}

function storeScores2(){
	let data = document.getElementById("KC_24_input").value;
	let result = "";
    let mean = 0;
    let arrResult = new Array;
	if (data==="terminar"){
		scores.forEach( item => {
			mean=0;
            mean= average(item['scores']); // KC_EJ29
			/********** KC_EJ24
            item['scores'].forEach(item_ => {
				mean = mean + parseInt(item_);
            });
            mean = mean / item['scores'].length;
            ********************/
            arrResult.push({'name': item['name'] , 'mean': mean});
			//result = result + "<br>" +item['name'] + ":" + mean;
        });
        let arrSorted = arrResult.sort(function(a,b){
            return a['mean']-b['mean'];
        });
        for (let i=arrSorted.length-1; i>=0; i--){
            result = result + "<br>" + arrSorted[i]['name'] + ":" + arrSorted[i]['mean'];
        }
        console.log(arrSorted);
		return document.getElementById("KC_EJ24_label").innerHTML = result;
	}else{
		let dataSplit = data.split(' ');
		let scoreSplit= dataSplit[1].split(',');
		scores.push({'name': dataSplit[0], 'scores':scoreSplit});
		console.log(scores);
	}
}

let target=0;
let attempts =5;
function calculateRandom(){
    target = Math.floor(Math.random()*100);
    attempts=5;
    console.log(target);

}

function tryNumber(){
    let number = parseInt(document.getElementById("KC_25_input").value);
    if (number===target){
        calculateRandom();
        return document.getElementById("KC_EJ25_label").innerHTML = "¡Bien, has adivinado!";
    }else if (attempts>1){
        attempts--;
        if (number > target){
            return document.getElementById("KC_EJ25_label").innerHTML = `Intenta con un número menor, te quedan ${attempts} oportunidades`;
        }else{
            return document.getElementById("KC_EJ25_label").innerHTML = `Intenta con un número mayor, te quedan ${attempts} oportunidades`;
        }
    }else{
        calculateRandom();
        return document.getElementById("KC_EJ25_label").innerHTML = "¡Ohh, se han acabado las oprtunidades!";
    }
}