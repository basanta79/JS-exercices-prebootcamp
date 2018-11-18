

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