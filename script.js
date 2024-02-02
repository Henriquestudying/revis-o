const nome = prompt('Olá, qual é o seu nome?');
const cpf = Number(prompt('Qual é o seu CPF?'));
let idade = Number(prompt('Qual a sua idade?'));
let telefone = Number(prompt('Digite seu Telefone Celular:'));
const endereco = prompt('Qual é o seu endereço?');
const email = prompt('Digite seu email:');
const sexo = prompt('Qual seu sexo? (M/F)');
const cidade = prompt('Qual a sua cidade?');
const estado = prompt('Qual o seu Estado?');

if (!/\d/.test(nome) &&
(!isNaN(cpf) && cpf.toString().length >= 8 && cpf.toString().length <= 11) &&
    (!isNaN(idade) && idade > 0) &&
    (!isNaN(telefone) && telefone.toString().length <= 9 && telefone.toString().length <= 11) &&
    endereco &&
    email.includes('@') &&
    !/\d/.test(cidade) &&
    !/\d/.test(estado) &&
    sexo.toUpperCase() == 'M' || sexo.toUpperCase() == 'F') {
        
    console.log(`Nome: ${nome}
Idade: ${idade} anos
CPF: ${cpf}
Sexo: ${sexo}
Telefone: ${telefone}
Email: ${email}
Endereço: ${endereco}
Cidade: ${cidade}
Estado: ${estado}

Cadastro concluído com sucesso`);
    alert('Cadastro concluído com sucesso');
} else {
    console.log('Dados inválidos')
    alert('Dados inválidos');
}


// Endereço: ${endereco}
// Cidade: ${cidade}
// Estado: ${estado}
