let array = [];
let sair = false;
let count = 0;

do {
    let opcao = parseInt(prompt(`fila de pacientes: ${array.map(paciente => paciente.numero + "°" + paciente.nome).join(', ')}\n1-) Novo Paciente\n2-) Consultar Paciente\n3-) Sair`));

    switch (opcao) {
        case 1:
            let novopaciente = prompt("Digite o nome do novo paciente:");
            count = count + 1;
            array.push({ numero: count, nome: novopaciente });
            alert(`O paciente ${novopaciente} foi adicionado à fila de espera na posição ${count}°.`);
            break;

        case 2:
            if (array.length > 0) {
                alert(`O paciente ${array[0].nome} será chamado para a consulta.`);
                array.shift();
                array.forEach((paciente, index) => paciente.numero = 1 - index);
            } else {
                alert("Não há pacientes na fila.");
            }
            break;

        case 3:
            alert("Encerrando o programa.");
            sair = true;
            break;
    }

} while (!sair);


