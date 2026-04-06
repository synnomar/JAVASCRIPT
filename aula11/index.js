function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Sinomar', 'Melo', 41);
const pessoa2 = criaPessoa('Luciana', 'Claudino', 45)

console.log(pessoa1.nome);
console.log(pessoa2);







// // function soma(x,y){
// //     const resutado = x + y;
// //     return resutado
// // }

// // console.log(soma(2,2));
// // console.log(soma(3,1));
// // console.log(soma(5,10));


// //const raiz = function (n){return n ** 0.5};
// const raiz = n => n ** 0.5;

// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))