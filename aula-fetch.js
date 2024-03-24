// EXEMPLO PADRÃO USANDO FETCH
// por padrão ele usa o METHOD GET
// fetch("https://api.github.com/users/Bruno-Costa-fig")
// .then((response) => response.json())
// .then((resultado) => {
//   const nomeUsuario = document.getElementById("nome_usuario")
//   nomeUsuario.innerText = resultado.name

//   const foto = document.getElementById("foto_url")
//   foto.src = resultado.avatar_url

// })
// .catch((erro) => console.log(erro))

// console.log("Mensagem de teste")
// console.log(dadosUsuario)
let dadosUsuario = {}

// EXEMPLO USANDO ASYNC / AWAIT
async function lerDados(){
  try {
    let response = await fetch("https://api.github.com/users/Bruno-Costa-fig")
    dadosUsuario = await response.json()
  } catch (erro) {
    console.log(erro)
  } finally {

  }
}

lerDados()

console.log(dadosUsuario)