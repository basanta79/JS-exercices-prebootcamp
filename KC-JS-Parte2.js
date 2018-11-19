

function factorConverionEur2Usd(defaultValue, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let arrResponse = JSON.parse(this.responseText);
            //document.getElementById("dollars").value= arr.response[results];
            //console.log(arrResponse);
            console.log(arrResponse.results.EUR_USD.val);
            callback (arrResponse.results.EUR_USD.val);
        }else{
            callback (defaultValue);
        }
    };
    xhttp.open("GET","https://free.currencyconverterapi.com/api/v6/convert?q=EUR_USD",true);
    xhttp.send("");
}

function factorConverionUsd2Eur(defaultValue, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let arrResponse = JSON.parse(this.responseText);
            //document.getElementById("dollars").value= arr.response[results];
            //console.log(arrResponse);
            console.log(arrResponse.results.USD_EUR.val);
            callback (arrResponse.results.USD_EUR.val);
        } else {
            callback (defaultValue);
        }
    };
    xhttp.open("GET","https://free.currencyconverterapi.com/api/v6/convert?q=USD_EUR",true);
    xhttp.send("");
}

function media3notas_aptitud () {
    let nota1 = parseFloat(document.getElementById("KC_07_nota1").value);
    let nota2 = parseFloat(document.getElementById("KC_07_nota2").value);
    let nota3 = parseFloat(document.getElementById("KC_07_nota3").value);
    let arrayNotas = [nota1, nota2, nota3];
    document.getElementById("KC_07_notaMedia").value= round2decimals(calcularMedia(arrayNotas));
    if (round2decimals(calcularMedia(arrayNotas))>5){
        return document.getElementById("KC_EJ07_label").innerHTML = "APTO";
    }else{
        return document.getElementById("KC_EJ07_label").innerHTML = "NO APTO";
    }
}

function NumberEvaluation(numberP){
    let number = parseFloat(document.getElementById("KC_08_number").value);
    let signo=0;
    let paridad=0;
    let resultado="";
    if (number==0) {return document.getElementById("KC_08_resultado").value = "es cero."};
    signo = number>0;
    paridad = (number%2)===0;
    signo? resultado = "positivo " : resultado = "negativo ";
    paridad? resultado = resultado + "par." : resultado = resultado + "impar."; 
    return document.getElementById("KC_08_resultado").value = resultado;
}

function conversionUsdEurUsd(){
    let direction = document.getElementsByName("conversionDirection");
    let amount = document.getElementById("KC_09_import").value;
    let factor=0;
    if (isNotPositiveNumber(amount)){
        document.getElementById("KC_EJ09_label").innerHTML = "El valor a convertir a de ser numerico y mayor de 0";
    }else{
        //console.log(direction[0].checked);
        if (direction[0].checked){
            factor = factorConverionEur2Usd(1.1, conversionUsdEurUsdCallback);
        }else{
            factor = factorConverionUsd2Eur(0.8, conversionUsdEurUsdCallback);
        }
    }
}

function conversionUsdEurUsdCallback(factorConversion){
    let amount = document.getElementById("KC_09_import").value;
    document.getElementById("KC_EJ09_label").innerHTML = "powered by free.currencyconverterapi.com";
    return document.getElementById("KC_09_result").value = round2decimals(amount * factorConversion);
}

function nameThroughChapter(){
    let nombres = {
        1: 'La amenaza fantasma',
        2: 'El ataque de los clones',
        3: 'La venganza de los Sith',
        4: 'Una nueva esperanza',
        5: 'El imperio contraataca',
        6: 'El retorno del Jedi',
        7: 'El despertar dela fuerza',
        8: 'El último Jedi'
    }
    let chapter = document.getElementById("KC_10_chapter").value;
    if ((parseInt(chapter)<1) | (parseInt(chapter)>8) | (chapter === '')){
        return document.getElementById("KC_EJ10_label").innerHTML = "El valor debe estar entre 1 y 8";
    }else{
        return document.getElementById("KC_EJ10_label").innerHTML = nombres[chapter];
    }
}

function findLargestAndSmaller(){
    let number1 = parseFloat(document.getElementById("KC_11_number1").value);
    let number2 = parseFloat(document.getElementById("KC_11_number2").value);
    let number3 = parseFloat(document.getElementById("KC_11_number3").value);
    document.getElementById("KC_11_Largest").value = Math.max(number1,number2,number3);
    document.getElementById("KC_11_Smaller").value = Math.min(number1,number2,number3);
}

function consonantOrVocal(){
    let vocals=['a','e','i','o','u'];
    let character = document.getElementById("KC_12_character").value;
    let vocal=false;
    if (!isNaN(character)){
        return document.getElementById("KC_EJ12_label").innerHTML = "El caracter ha de ser letra";
    }
    for(let i=0; i<vocals.length; i++){
        vocal= (vocals[i]==character);
        if (vocal){
            return document.getElementById("KC_12_KindaChar").value ="Es una vocal";
        }
    }
    return document.getElementById("KC_12_KindaChar").value ="Es una consonante";
    /*
    vocals.forEach((item)=> {
        console.log(typeof(item));
        console.log(typeof(character));
        console.log(item===character);
        console.log(vocal);
        if (!vocal){
            console.log(vocal);
            vocal= (item==character);
        }
        console.log(vocal);
    })
    console.log(vocal);
    return document.getElementById("KC_12_KindaChar").value ="Es una consonante";*/
}