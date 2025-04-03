var turmasDatabase = [
    {
        nome: "Gênesis Tech 01",
        horario: "14h as 16h"
    },
    {
        nome: "Escolinha 10 a 12 anos",
        horario: "8h as 10h"
    }
]

function carregarLinhasTabela(){
    var tableTurmas = document.getElementById("linhasTurmas");
    var linhas = "<tr>";
    for (const turma of turmasDatabase) {
       linhas += "<td>" + turma.nome + "</td>" + "<td>" + turma.horario + "</td></tr>";
    }
    tableTurmas.innerHTML = linhas
}
carregarLinhasTabela();



function cadastrarTurma(event){
    event.preventDefault();
    var nomeTurma = document.getElementById("nome");
    var horarioTurma = document.getElementById("horario");
    turma = {
        nome: nomeTurma.value,
        horario: horarioTurma.value
    }
    turmasDatabase.push(turma);
    carregarLinhasTabela();
}
