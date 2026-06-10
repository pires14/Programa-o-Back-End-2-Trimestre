/*
Desafio 
Enunciado: 
"Foi adicionado um novo campo de input do tipo number no HTML chamado 'Nível do Herói'. 
Modifique a classe Heroi para que o construtor também receba e armazene esse nível.
 No JavaScript da função, capture esse novo input e garanta que o nível seja exibido 
 no painel de resultado acessando a propriedade do objeto."
*/

/*O objeto é classificado com uma classe. */
/*Criação da classe */
class Heroi{
    constructor(nome,classe){
        this.nome = nome;
        this.classe = classe;
    }
}

function criarHeroi(){
    /*Capturando o que o usuário digitou/ selecionou na tela. */
    /*O input e select tem um valor.*/
    const nomeDigitado = document.getElementById('nomeInput').value;
    const classeSelecionada = document.getElementById('classeSelect').value;

    /*Criando o objeto dinâmicamente com os valores dos campos. */
    const novoHeroi = new Heroi(nomeDigitado, classeSelecionada);

    /*Exibindo na tela através das propriedades do objeto */
    document.getElementById('resultado').style.display = "block";
    document.getElementById('dadosHeroi').innerHTML = `
    Nome: ${novoHeroi.nome},<br> Classe: ${novoHeroi.classe}

    `;

}

