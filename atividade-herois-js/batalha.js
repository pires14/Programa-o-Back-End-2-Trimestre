function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');

    if(!arma){
        log.innerHTML = "⚔️Escolha uma arma⚔️";
        return;
    }

    const dado = Math.floor(Math.random() * 20) + 1;
    let resultado = `🎲 Dado: ${dado} | <strong>${classe}</strong> com <strong>${arma}</strong>`;

    switch(classe){
        case "guerreiro":
        if(arma.toLowerCase()==="espada" && dado>5){
            resultado += "<span class='sucesso'> VITÓRIA: Você corta o oponente ao meio com um só golpe de sua espada </span>";
            log.innerHTML = resultado;
        
        }else if(dado >12){
            resultado += "<span class='sucesso'> DANO CRÍTICO NO OPONENTE: Mesmo sem sua fiel lâmina você esmaga o oponente</span>";
            log.innerHTML = resultado;
        
        }else{
            resultado += "<span class='derrota'> DERROTA: O oponente foi mais rápido, "+arma+" foi inútil e você morreu!!. Fim de jogo.</span>";
            log.innerHTML = resultado;
        }
        break;
        
        case "mago":
        if(arma.toLowerCase()==="cajado" && dado>8){
            resultado += "<span class='sucesso'> VITÓRIA: Você vaporiza o oponente com um só raio de seu cajado. </span>";
            log.innerHTML = resultado;
        }else if(dado === 15){
            resultado += "<span class='sucesso'> VITÓRIA: Você esmaga o oponente mesmo sem seu fiel cajado. </span>";
            log.innerHTML = resultado;
        
        }else{
            resultado += "<span class='derrota'> DERROTA: O oponente foi mais rápido, "+arma+" foi inútil e você morreu!!. Fim de jogo. </span>";
            log.innerHTML = resultado;
        }
        break;

        case "arqueiro":
        if(arma.toLowerCase()==="arco" && dado>10){
            resultado += "<span class='sucesso'> VITÓRIA: Você acerta em cheio a cabeça do seu oponente com uma só flecha </span>";
            log.innerHTML = resultado;
        }else{
            resultado += "<span class='derrota'> DERROTA: O oponente foi mais rápido, "+arma+" foi inútil e você morreu!! Fim de jogo. </span>";
            log.innerHTML = resultado;
        }
        break;
        
        default:
            resultado = "Você ficou paralisado de medo.";
    }
}
