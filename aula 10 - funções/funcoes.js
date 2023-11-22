//retornos valorA E valorB
function soma(a, b) {
  let resultado = a + b;
  alert(`A soma de ${a} + ${b} = ${resultado}`);
}

let valorA = parseFloat(prompt("Indique o valor de A:"));
let valorB = parseFloat(prompt("Indique o valor de B:"));

soma(valorA, valorB);

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, //O mesmo que nome: nome
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

criarUsuario("Alexandre", "alexandre@gmail.com", "123456", "3454");

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado(
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "email",
  "senha"
);
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: "",
};
parametrosDoJeitoCerto(dadosDoUsuario);

//RETORNOS com return
function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}
const resultado = calcularMedia(7, 2);
console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500);
console.log(notebook);

function areaRetangulo(base, altura) {
  return base * altura;
}
console.log(areaRetangulo);
