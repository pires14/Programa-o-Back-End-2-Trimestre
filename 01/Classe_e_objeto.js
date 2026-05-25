/*
Desafio 
Enunciado: 
"Foi adicionado um novo campo de input do tipo number no HTML chamado 'Nível do Herói'. 
Modifique a classe Heroi para que o construtor também receba e armazene esse nível.
 No JavaScript da função, capture esse novo input e garanta que o nível seja exibido 
 no painel de resultado acessando a propriedade do objeto."
*/

let pessoa = {
    nome: "João",
    idade: 17,
    altura: 1.8,
    profissao: "Estudante",

    estudar: function(){
        console.log("O joão foi estudar.");
    }
};
console.log(pessoa.nome);
pessoa.estudar();