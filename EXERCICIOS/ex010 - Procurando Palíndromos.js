alert("INDENTIFICADOR DE PALINDROMOS")
let palavra = prompt('Digite uma palavra')

let palavrareversa = ' '

for (i = palavra.length - 1 ; i >= 0 ; i--) {
    palavrareversa = palavrareversa + palavra[i]
}
if (palavra  === palavrareversa) {
    alert(`A palavra ${palavra} é um palindromo`)
} else {
    alert(`A palavra ${palavra} não é um palindromo`)
}
alert(`${palavrareversa}`)