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