/*
  Callback é uma função que é passada como parâmetro para uma outra função.
*/

localStorage.setItem("turma", "Fullstack")

const promessa = new Promise((resolve, reject) => {
  const turma = localStorage.getItem("turma")

  if(turma == 'Futuro DEV'){
    resolve("Vocês fazem parte dessa turma!")
  } else {
    reject("Vocês não são desta turma!")
  }
})

promessa
.then((mensagem) => console.log(mensagem))
.catch((erro) => console.log(erro))