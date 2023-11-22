let dinheirototal = parseFloat(prompt("Quanto dinheiro você tem na conta?"))
let continuar = true;

do {

    let menu = parseInt(prompt(`SALDO DISPONIVEL: ${dinheirototal} R$\n1-) Depositar saldo\n2-) Transferir saldo\n3-) Encerrar programa`))
    switch (menu) {
        case 1: {
            adicionar = parseFloat(prompt("Quanto quer depositar?"))
            dinheirototal = dinheirototal + adicionar
            alert(`O saldo atual agora é ${dinheirototal} R$`)
            break
        }
        case 2: {
            transferir = parseFloat(prompt("Quanto quer transferir?"))
            dinheirototal = dinheirototal - transferir
            alert(`O saldo atual agora é ${dinheirototal} R$`)
            break
        }
        case 3: {
            alert('Encerrando o programa')
            continuar = false;
        }
        
    }
} while (continuar === true);
