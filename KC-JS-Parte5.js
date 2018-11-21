function pintar_fila(){
    let tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    document.getElementById("table_KC_EJ26").appendChild(tr);
}

function createRows(){
    let numFiles=parseInt(document.getElementById("KC_26_input").value);
    let table = document.createElement('table')
    table.id='table_KC_EJ26';
    document.getElementById("KC_EJ26_label").appendChild(table);
    for (let i=0; i<numFiles; i++){
        pintar_fila();
    }
}

Array.prototype.removeSpaces = function (){
    let arrResult = new Array;
    this.forEach(element => {
        if (element!==' '){
            arrResult.push(element);
        }
    });
    return arrResult;
}

function es_palindromo(texto){
    let result = true;
    console.log(texto);
    let arrText = texto.split('').removeSpaces();
    let arrTextReverse = texto.split('').reverse().removeSpaces();
    console.log(arrText);
    console.log(arrTextReverse);
    for(let i=0; i<arrText.length; i++){
        console.log(arrText[i] + "-" + arrTextReverse[i]);
        if (arrText[i]!==arrTextReverse[i]){
            result=false;
        }
    }
    return result;
}

function isPalindrome(){
    let text=document.getElementById("KC_27_input").value;
    let resultado = es_palindromo(text);
    if (resultado) {
        return document.getElementById("KC_EJ27_label").innerHTML = 'El texto ingresado ES palindromo';
    }else{
        return document.getElementById("KC_EJ27_label").innerHTML = 'El texto ingresado NO ES palindromo';
    }
}

function drawSquareInConsole(){
    let sideLength = parseInt(document.getElementById("KC_28_input").value);
    let text="";
    for (let i=0; i<sideLength; i++){
        text="";
        if ((i===0) | (i===(sideLength-1))){ 
            text=text.padEnd(sideLength,'+'); 
        }else{
            text="+";
            text= text.padEnd(sideLength-1, ' ');
            text= text + "+";
        };
        console.log(text);
    };
}

let beverage;
let partialAmount;
let beverages =['Fanta','Pepsi','7UP'];
let coins=[0.1,0.2,0.5,1.0];
const price=1;
function selectBeverage(){
    let beverageElements = document.getElementsByName("beverage");
    partialAmount = 0;
    for (i=0; i<beverageElements.length;i++){
        if (beverageElements[i].checked){
            beverage = beverages[i];
            break;
        }
    }
    console.log(beverage);
    return document.getElementById("KC_EJ30_label").innerHTML = `Se ha seleccionado ${beverage} y quedan ${price - partialAmount} Euros.`;
}

function insertCoin(){
    let coinElements = document.getElementsByName("Coin");
    let txtResult;
    if (beverage==undefined){
        return document.getElementById("KC_EJ30_label").innerHTML = `Debe seleccionar una bebida y pulsar \"seleccionar bebida\"`;
    }
    for (let i=0; i<coinElements.length; i++){
        if (coinElements[i].checked){
            console.log(coins[i]);
            console.log(partialAmount);
            partialAmount += coins[i];
            partialAmount = (Math.round(partialAmount*100)/100); //to avoid the problem of accuracy in floating point numbers
        }
    }
    //console.log(coin);
    if (price > partialAmount){
        txtResult = `Se ha seleccionado ${beverage} y quedan ${Math.round((price - partialAmount)*100)/100} Euros.`;
        
    }else if(price == partialAmount){
        txtResult = `Disfrute de su  ${beverage}.`;
        beverage=undefined;
    }else{
        txtResult = `Disfrute de su ${beverage} el cambio es ${Math.round((partialAmount - price)*100)/100} Euros.`;
        beverage=undefined;
    }
     return document.getElementById("KC_EJ30_label").innerHTML = txtResult;
    
}