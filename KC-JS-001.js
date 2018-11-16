
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
    
    document.getElementById("suma").value= numero1+numero2;
    document.getElementById("resta").value= numero1-numero2;
    document.getElementById("multiplicacion").value= numero1*numero2;
    document.getElementById("division").value= numero1/numero2;
    document.getElementById("exponencial").value= numero1**numero2;
    document.getElementById("resto").value= numero1%numero2;

}