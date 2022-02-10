let info = {
 personagem: 'Margarida',
 origem: 'Pato Donald',
 nota: 'Namorada do personagem principal nos quadrinhos do pato Donald'
}

console.log('Bem vinda, ' + info.personagem);

info['recorrente'] = 'sim';

let info2 = {
 personagem: 'Tio Patinhas',
 origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
 nota: 'O ultimo MacPatinhas',
 recorrente: 'sim'
}

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);

if (info.recorrente === 'sim' && info2.recorrente === 'sim') {
 console.log('Ambos recorrentes');
}


let leitor = {
 nome: 'Julia',
 sobrenome: 'Pessoa',
 idade: 21,
 livrosFavoritos: [{
  titulo: 'O Pior Dia de Todos',
  autor: 'Daniela Kopsch',
  editora: 'Tordesilhas'
 }]
}

console.log('O livro favorito de ' + leitor.nome + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

leitor.livrosFavoritos.push({
 titulo: 'Harry Poter',
 autor: 'JK Rowling',
 editora: 'Rocco'
})

console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');