let encerramento = true;

alert("BEM-VINDO AO MENU INTERATIVO")
do {
    let opcao = parseInt(prompt(`Escolha uma das opções abaixo:\n1-) Teste de Integridade\n2-) Teste de Sistemas\n3-) Teste de Resistencia\n4-) Teste de performance\n5-) Encerrar o Programa`))
    switch (opcao){
        case 1:
            alert("Opção 1 escolhida - Teste de Integridade")
            break
        case 2: 
            alert("Opção 2 escolhida - Teste de Sistemas")
            break
        case 3:
            alert("Opção 3 escolhida - Teste de Resistencia")
            break
        case 4:
            alert("Opção 4 escolhida - Teste de performance")
            break
        case 5:
            alert("Encerrando o programa") 
            encerramento = false;
            break

    }
} while (encerramento === true)