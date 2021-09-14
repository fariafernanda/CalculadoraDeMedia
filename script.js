function calculaMedia(){
    var nota1 = parseFloat(document.getElementById("primeiraNota").value);
    var nota2 = parseFloat(document.getElementById("segundaNota").value);
    var nota3 = parseFloat(document.getElementById("terceiraNota").value);
    var nota4 = parseFloat(document.getElementById("quartaNota").value);
    var mediaNecessaria = parseFloat(document.getElementById("mediaNecessaria").value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    var notaFinal = media.toFixed(1);

    var resultado = "A sua média foi " + notaFinal + ".";
    
    var mensagemFinal = undefined;

    if (notaFinal>=mediaNecessaria){
        mensagemFinal = `${resultado} Parabéns, você foi aprovada(o)!`;
        } else {
             mensagemFinal = `${resultado} Você foi reprovada(o)!`;
        }

        
    var elementoResultado = document.getElementById("results");
    
    elementoResultado.innerHTML = mensagemFinal;
   
}
