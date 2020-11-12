function EhNumero(NumStr){
    return !isNaN(parseFloat(NumStr)) && isFinite(NumStr);
}

function CancelarTodaOperacao(){
    OperacaoCorrente = "";

    document.querySelector("#outputCorrente").innerHTML = "0";
    document.querySelector("#outputAcumulador").innerHTML = "";

    ArrayOperacao = [];
}

function CancelarOperacao(){
    OperacaoCorrente = "";
    
    document.querySelector("#outputCorrente").innerHTML = "";
}

function AdicionarNum(NumPad){
    OperacaoCorrente = document.querySelector("#outputCorrente").innerHTML;

    if(OperacaoCorrente == "0"){
        OperacaoCorrente += NumPad;

        document.querySelector("#outputCorrente").innerHTML = OperacaoCorrente;
    }else{
        OperacaoCorrente += NumPad;

        document.querySelector("#outputCorrente").innerHTML = OperacaoCorrente;
    }
}

function AdicionarPonto(){
    OperacaoCorrente = document.querySelector("#outputCorrente").innerHTML;

    if(!OperacaoCorrente.includes(".")) {
        document.querySelector("#outputCorrente").innerHTML += ".";
    }
}

function TrocarSinal(){
    OperacaoCorrente = document.querySelector("#outputCorrente").innerHTML;

    if (Number(OperacaoCorrente) > 0) {
        document.querySelector("#outputCorrente").innerHTML = "-" + OperacaoCorrente; 
    } else {
        document.querySelector("#outputCorrente").innerHTML = OperacaoCorrente.replace("-", "");
    }
}

function CalcularResultado(){
    var Acao = "";
    var NumCorrente = 0;

    var Total = 0;

    ArrayOperacao.push(Number(document.querySelector("#outputCorrente").innerHTML))

    if(EhNumero(ArrayOperacao[ArrayOperacao.length - 1]) == false || ArrayOperacao[ArrayOperacao.length - 1] == ""){
        ArrayOperacao.pop();
    }   
    

    ArrayOperacao.forEach(valor => {
        if (!isNaN(valor)) {
            if (NumCorrente == "") {
                NumCorrente = valor;
            } else {
                Total += CalcularAcao(NumCorrente, valor, Acao);
                NumCorrente = "";
            }
        } else {
            Acao = valor;
        }
    });

    if (NumCorrente != "") {
        Total = CalcularAcao(NumCorrente, Total, Acao)
    }

    document.querySelector("#outputCorrente").innerHTML = Total;
    document.querySelector("#outputAcumulador").innerHTML = "";
    OperacaoCorrente = "";
    ArrayOperacao = [];
}

function AcumularAcao(Acao){
    OperacaoCorrente = document.querySelector("#outputCorrente").innerHTML;

    if(OperacaoCorrente.length === 0){
        return
    }else{
        ArrayOperacao.push(Number(OperacaoCorrente));
        ArrayOperacao.push(Acao);

        document.querySelector("#outputAcumulador").innerHTML += " " + OperacaoCorrente + " " + Acao;
        
        document.querySelector("#outputCorrente").innerHTML = "";
        OperacaoCorrente = "";
    }
}

function CalcularAcao(Num01, Num02, Acao){
    switch(Acao){
        case "+":
            return Num01 + Num02;
        case "-":
            return Num01 - Num02;
        case "*":
            return Num01 * Num02;
        case "/":
            if(Num02 == 0) {break} else {return Num01 / Num02}
        case "%":
            return Num01 % Num02;
    }

    alert("Não é possível dividir por zero");
    return 0;
}

ArrayOperacao = [];


