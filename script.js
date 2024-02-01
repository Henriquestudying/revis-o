const nome = prompt('Olá, qual é o seu nome?')
let cpf = Number(prompt('Qual é o seu CPF?'))
let idade = Number(prompt('Qual a sua idade?'))
let telefone = Number(prompt('Digite seu Telefone Celular:'))
const endereco = prompt('Qual é o seu endereço?')
const email = prompt('Digite seu email:')
const sexo = prompt('Qual seu sexo?')
const cidade = prompt('Qual a sua cidade?')
const estado = prompt('Qual o seu Estado?')

if (nome &&
    cpf &&
    idade && 
    telefone && 
    endereco && 
    email && 
    sexo && 
    cidade && 
    estado){
    console.log(`Nome: ${nome}
CPF: ${cpf}
Idade: ${idade} anos
Telefone: ${telefone}
Email: ${email}
Sexo: ${sexo}
Endereço: ${endereco}
Cidade: ${cidade}
Estado: ${estado}

Cadastro concluído com sucesso`);
    alert('Cadastro concluído com sucesso')
}
else{
    alert('Dados inválidos')
}