
const nome = prompt('Digite seu nome:')

let pergunta = prompt('Já visitou alguma cidade? S/N ').toUpperCase()
let count = 0 //contador p/ a quantidade de cidades
let cidadevisitadas = " " //variavel para armazenar as cidades listadas

while (true){
    if (pergunta === "S"){
        let cidades = prompt(`Qual cidade você visitou ${nome}?`).toUpperCase()
        count = count + 1
        cidadevisitadas = cidadevisitadas + cidades + ", "

        let pergunta2 = prompt(`Já visitou outra cidade? S/N`).toUpperCase()

        if (pergunta2 === "S") {
            let cidades = prompt(`Qual cidade você visitou ${nome}?`)
            count = count + 1
            cidadevisitadas = cidadevisitadas + cidades + ", "
        } 

        else
        {
            alert("Encerrando")
            break
        }
    
    } else {
        alert(`Não há registros de cidades visitadas por ${nome}`)
        break
    }
        
    
}

if (pergunta === "N") {
    alert(`Cliente ${nome} verificou-se que você não realizou viagens com a nossa companhia. Tenha um bom dia.`)
} 
else {
    alert(`Cliente ${nome} verificou-se que você viajou para ${count} diferentes. Sendo elas: ${cidadevisitadas}`)
}
