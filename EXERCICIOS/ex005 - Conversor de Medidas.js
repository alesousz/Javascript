alert('BEM-VINDO AO CONVERSOR DE MEDIDAS')
let opcao = 0

while(opcao!==7){
    opcao = parseInt(prompt('Escolha a opção deseja converter:\n1 -  milimetro(mm)\n2 - centimentro(cm)\n3 - decimetro(dm)\n4 - decametro(dam)\n5 - hectometro(hm)\n6 - quilometro(km)\n7 - Sair'))
    
    if (isNaN(opcao) || opcao >= 8) {
        alert('Por favor, digite um número válido para a opção.');
        continue; }
    
    
    if (opcao !==7){
        const metros = parseFloat(prompt('Digite o valor a ser convertido:'))
    


    let resultado = 0
    switch(opcao){
        case 1: {
            resultado = metros * 1000
            alert(`${metros} metros = ${resultado} mm `)
           break
        }
        case 2: {
            resultado = metros * 100
            alert(`${metros} metros = ${resultado} cm`)
            break
        }
        case 3:
            resultado = metros * 10
            alert(`${metros} metros = ${resultado} dm`)
            break
        case 4:
            resultado = metros / 10
            alert(`${metros} metros = ${resultado} dam`)
            break
        case 5:
            resultado = metros / 100
            alert(`${metros} metros = ${resultado} hm`)
            break
        case 6:
            resultado = metros / 1000
            alert(`${metros} metros = ${resultado} km`)
            break
        case 7:
            break
        default:
            alert('Opção invalida')

    }
    }
}
alert('PROGRAMA ENCERRADO!')

