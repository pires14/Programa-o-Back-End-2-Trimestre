/* usar arma.tolowercase(), etc*/
function lutar(){
let classe = document.getElementById('classe').value;
let arma = document.getElementById('arma').value.trim();
const log = document.getElementById('log');

if(!arma){
    log.innerHTML = "X Você esqueceu de equipar uma arma.";
    return;}
    
    let dado = Math.floor(Math.random() * 20) +1;
    let resultado = `Dado: ${dado} | <strong>${classe}<strong> | Arma: <strong> ${arma}<strong> `;

    switch(classe){
        case "Guerreiro":
            if(arma.toLowerCase()=== "Espada" && dado > 5){
            resultado += "<span class= 'sucesso'> SUCESSO: VOCÊ DECAPITOU COM UM GOLPE DE ESPADA!!!!</span>";/*Span class serve para chamar a classe do CSS */
        }
            else if(dado > 12){
            resultado += "<span class= 'sucesso'>   VITÓRIA: VOCÊ ESMAGOU O INIMIGO.</span>";
        }
            else{
            resultado += "<span class= 'derrota> DERROTA: VOCÊ MORREU!! FIM DE JOGO. Sua</span>";
    }
    break;

        case "Mago":
            if(arma.toLowerCase()=== "Cajado" && dado > 8){
                resultado += "<span class= 'sucesso'> SUCESSO: VOCÊ FARMOU AURA COM O CAJADO E VENCEU O INIMIGO!!!</span>";
            }
            else if(dado > 20){
                resultado += "<span class= 'sucesso'> SUCESSO: VOCÊ DEU UM ATAQUE CRÍTICO E HUMILHOU O INIMIGO!!!!</span>";
            }
            else{
                resultado += "<span class= 'derrota'> DERROTA: VOCÊ MORREU E FOI HUMILHADO POR TODOS. FIM DE JOGO.!!!!</span>"
            }
        case "Arqueiro":
            if(arma.toLowerCase()=== "Arco" && dado > 10){
                resultado += "<span class= 'sucesso'> SUCESSO: VOCÊ DERROTOU O INIMIGO E O HUMILHOU COM O ARCO!!</span>";
            }
            else{
                resultado +=  "<span class= 'derrota'> DERROTA: O SEU ARCO QUEBROU E VOCÊ MORREU!!! FIM DE JOGO.</span>"
            }
}
}
