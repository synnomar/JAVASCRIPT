const nome = prompt('Digite seu nome completo: ');
document.body.innerHTML += `O seu nome é: ${nome} <br />`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra S no seu nome? ${nome.indexOf('S')}<br />`;
document.body.innerHTML += ` Qual o último índice da letra R no seu nome? ${nome.lastIndexOf('r')} <br />`;
document.body.innerHTML += ` As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += ` As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += ` O seu nome em letras maiúsculas é: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += ` O seu nome em letras minúsculas é: ${nome.toLowerCase()}<br />`;

