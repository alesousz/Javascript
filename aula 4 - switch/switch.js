alert("BEM VINDO A CALCULADORA");

let encerrar = false;
let opcao = 0;

while (opcao !== 5) {
    opcao = parseFloat(prompt('Escolha uma opção:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair'));

    if (isNaN(opcao)) {
        alert('Por favor, digite um número válido para a opção.');
        continue; // Reinicia o loop
    }

    // Verifica se a opção é diferente de 5 antes de prosseguir
    if (opcao !== 5) {
        const x = parseFloat(prompt('Digite um número:'));
        const y = parseFloat(prompt('Digite outro número:'));

        if (isNaN(x) || isNaN(y)) {
            alert('Por favor, digite números válidos.');
            continue; // Reinicia o loop
        }

        let resultado = 0;

        switch (opcao) {
            case 1:
                resultado = x + y;
                alert(`O resultado de ${x} + ${y} é ${resultado}`);
                break;
            case 2:
                resultado = x - y;
                alert(`O resultado de ${x} - ${y} é ${resultado}`);
                break;
            case 3:
                resultado = x * y;
                alert(`O resultado de ${x} x ${y} é ${resultado}`);
                break;
            case 4:
                if (y !== 0) {
                    resultado = x / y;
                    alert(`O resultado de ${x} / ${y} é ${resultado}`);
                } else {
                    alert("Não é possível dividir por zero. Por favor, escolha um novo denominador.");
                }
                break;
            default:
                alert('Opção inválida. Por favor, escolha uma opção válida.');
        }
    }
}

alert('PROGRAMA ENCERRADO');
