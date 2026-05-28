class Monstro{
    constructor(nome,hp){
        this.nome = nome;
        this.hp = Number(hp);
    }
    receberDano(qtd_dano){
        this.hp -= qtd_dano;
        if(this.hp <= 0){
            this.hp = 0;
            return `${this.nome} foi aniquilado ☠☠`;
        }
        return `${this.nome} sofreu ${qtd_dano} de dano! 🤕🤕`;
    }
}

let monstroBatalha;
function iniciarJogo(){
    const nomeDigitado = document.getElementById('nomeMonstro').value;
    const hpInicial = document.getElementById('hpMonstro').value;

monstroBatalha = new Monstro(nomeDigitado, hpInicial);

function trocaTela(){
    document.getElementById('painel-combate').display="block";
}
}