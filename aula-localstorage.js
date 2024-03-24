// adicionar / atualizar valores no localStorage
localStorage.setItem('name', 'Bruno');
//                 chave(key) | Valor (value)

// ler valores do localStorage
let resultado = localStorage.getItem('name')

// // remover os valores pela chave
// localStorage.removeItem('name')
// // remover todos os valores
// localStorage.clear()

// exemplo objeto no localStorage
// let brunoUsuario = {
//   nome: 'Bruno',
//   senha: 1234,
//   email: 'email@email.com'
// }

// localStorage.setItem("usuario", JSON.stringify(brunoUsuario))
// let valorUsuario = JSON.parse(localStorage.getItem("usuario"))

// console.log(valorUsuario.nome)
// console.log(typeof valorUsuario)

// exemplo array no localStorage
let brunoUsuario = {
  nome: 'Bruno',
  senha: 1234,
  email: 'email@email.com'
}

const listaUsuarios = []

listaUsuarios.push(brunoUsuario)

localStorage.setItem('lista-usuarios', JSON.stringify(listaUsuarios))

let listaNoLocalStorage = JSON.parse(localStorage.getItem('lista-usuarios'))

let rodrigoUsuario = {
  nome: 'Rodrigo',
  senha: 9090,
  email: 'rodrigo@email.com'
}

listaNoLocalStorage.push(rodrigoUsuario)

localStorage.setItem('lista-usuarios', JSON.stringify(listaNoLocalStorage))