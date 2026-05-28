/*
Desafio 
Enunciado: 
"Foi adicionado um novo campo de input do tipo number no HTML chamado 'Nível do Herói'. 
Modifique a classe Heroi para que o construtor também receba e armazene esse nível.
 No JavaScript da função, capture esse novo input e garanta que o nível seja exibido 
 no painel de resultado acessando a propriedade do objeto."
*/ 
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
class heroi{
    constructor(nome,classe, nivel){
        this.nome = nome;
        this.classe = classe;
        this.nivel = nivel;
    }
}

function criarHeroi(){
    /*Capturando o que o usuário digitou/ selecionou na tela. */
    /*O input e select tem um valor.*/
    const nomeDigitado = document.getElementById('nomeInput').value;
    const classeSelecionada = document.getElementById('classeSelect').value;
    const nivelSelecionado = document.getElementById('nivelInput').value;
    
    /*Criando o objeto dinâmicamente com os valores dos campos. */
    const novoHeroi = new heroi(nomeDigitado, classeSelecionada, nivelSelecionado);
    if(nivelSelecionado < 0){
        alert("Não é possível adicionar números negativos.")
        return;
    } else{
        document.getElementById('resultado').style.display = "block";
        document.getElementById('dadosHeroi').innerHTML = `
        Nome: ${novoHeroi.nome},<br> Classe: ${novoHeroi.classe}<br> Nível: ${novoHeroi.nivel}
        `;
    }
    /*Exibindo na tela através das propriedades do objeto */
}