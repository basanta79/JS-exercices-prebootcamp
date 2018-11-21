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

function removeSpaces(){
    
}

function es_palindromo(texto){
    let result = true;
    let arrToCompare = new Array;
    console.log(texto);
    let arrText = texto.split('');
    arrText.forEach(element => {
        if (element!==' '){
            arrToCompare.push(element);
        }
    });
    console.log(arrToCompare);
    let arrTextReverse = texto.split('');
    arrTextReverse.reverse();
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