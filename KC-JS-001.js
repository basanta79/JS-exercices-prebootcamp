
function calcularArea(){
    var radioCirculo = document.getElementById("radio").value;
    if (isNaN(radioCirculo)){
        areaCirculo = 'El radio ha de ser un valor numerico';
    }else{
        var areaCirculo = (Math.round((Math.PI*(radioCirculo**2))*100))/100;
    }
    document.getElementById("resultado").value= areaCirculo;

}

function calcularTodo(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var suma = numero1+numero2;
    var resta = numero1-numero2;
    var multiplicacion = numero1*numero2;
    console.log(multiplicacion);
    var division = numero1/numero2;
    console.log(division);
    var exponencial = numero1**numero2;
    console.log(exponencial);
    var resto = numero1%numero2;
    console.log(resto);
    
    document.getElementById("suma").value= suma;
    document.getElementById("resta").value= resta;
    document.getElementById("multiplicacion").value= multiplicacion;
    document.getElementById("division").value= division;
    document.getElementById("exponencial").value= exponencial;
    document.getElementById("resto").value= resto;

}