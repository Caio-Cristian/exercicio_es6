"use strict";

var alunos = [{
  nome: "Ana",
  nota: 8
}, {
  nome: "João",
  nota: 5
}, {
  nome: "Maria",
  nota: 7
}, {
  nome: "Pedro",
  nota: 4
}, {
  nome: "Lucas",
  nota: 6
}];
function filtrarMaiorIgualSeis(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var MaiorIgualSeis = filtrarMaiorIgualSeis(alunos);
console.log("Alunos com notas maiores ou iguais a 6:", MaiorIgualSeis);