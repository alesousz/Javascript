let array = []
let sair = false
do {
    
    opcao = parseInt(prompt(`Cartas no baralho: ${array}\n1-) Adicionar uma carta\n2-) Puxar uma carta\n3-) Sair`))
    switch(opcao){
        case 1:
            adicionarcarta = prompt('Qual carta gostaria de adicionar ao baralho?')
            array.unshift(adicionarcarta)
            break
        case 2:
            alert(`A carta ${array[0]} foi removida do baralho`) 
            removido = array.shift  
            break
        case 3:
            alert("Encerrando o programa")
            sair = true
            break
    }

}while(sair === false)