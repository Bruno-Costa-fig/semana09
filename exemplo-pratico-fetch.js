fetch("https://viacep.com.br/ws/63505020/json/"
// , {
//   method: "GET",
//   body: "63505020",
//   headers: {
//     "authorization-token": "Bearer kadakhkjshfkjhkjhkjhkj"
//   }
// }
)
.then((response) => response.json())
.then((response) => console.log(response))
.catch((erro) => console.log(erro))