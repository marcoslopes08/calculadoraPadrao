/* função que INSERE os números e sinais dentro do Display Resultado */
function insert(num) { 

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

/* função que LIMPA TUDO DE UMA SÓ VEZ dentro do Display Resultado */
function clean() { 

    document.getElementById('resultado').innerHTML = "";

}

/* função que LIMPA 'caracter por caracter' que foi inserido dentro do Display Resultado */
function back () {

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}

/* função que EXECUTA qualquer conta dentro do Display Resultado */
function calcular () {

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);    
    
}