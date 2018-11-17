function isNotPositiveNumber(value){
    return ((isNaN(value)) || (value<=0))
}

function round2decimals(value){
    return Math.round(value*100)/100;
}

function calcularArea(){
    var radioCirculo = parseFloat(document.getElementById("radio").value);
    //console.log(radioCirculo);
    if (isNotPositiveNumber(radioCirculo)){
        areaCirculo = 'El radio ha de ser un valor numerico y mayor que 0';
    }else{
        var areaCirculo = round2decimals(Math.PI*(radioCirculo**2));
    }
    document.getElementById("resultado").value= areaCirculo;

}

function calcularTodo(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    
    document.getElementById("suma").value= numero1+numero2;
    document.getElementById("resta").value= numero1-numero2;
    document.getElementById("multiplicacion").value= numero1*numero2;
    document.getElementById("division").value= numero1/numero2;
    document.getElementById("exponencial").value= numero1**numero2;
    document.getElementById("resto").value= numero1%numero2;

}

function eurosAdollar() {
    //factor de conversion a 17/02/2018 1,14
    let euros = parseFloat(document.getElementById("euros").value);
    let factorConversion = 1.14;
    if (isNotPositiveNumber(euros)){
        document.getElementById("currency_conversion_powered").innerHTML = "El valor a convertir a de ser numerico y mayor de 0";
    }else{
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                let arrResponse = JSON.parse(this.responseText);
                //document.getElementById("dollars").value= arr.response[results];
                console.log(arrResponse);
                console.log(arrResponse.results.EUR_USD.val);
                factorConversion=arrResponse.results.EUR_USD.val;
            }
            document.getElementById("dollars").value= euros * factorConversion;
            document.getElementById("currency_conversion_powered").innerHTML = "powered by free.currencyconverterapi.com";
        };
        xhttp.open("GET","https://free.currencyconverterapi.com/api/v6/convert?q=EUR_USD",true);
        xhttp.send("");
    }
}

function media3notas() {
        let nota1 = parseFloat(document.getElementById("nota1").value);
        let nota2 = parseFloat(document.getElementById("nota2").value);
        let nota3 = parseFloat(document.getElementById("nota3").value);
        if (isNaN(nota1)) nota1=0;
        if (isNaN(nota2)) nota2=0;
        if (isNaN(nota3)) nota3=0;
        document.getElementById("notaMedia").value= round2decimals((nota1 + nota2 + nota3)/3);
    
}