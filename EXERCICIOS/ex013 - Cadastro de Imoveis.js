let opcao = 0;
let imoveis = [];
let imovel = {}; // movido para fora do loop for
do {
  opcao = parseInt(
    prompt(
      "Bem-vindo ao Cadastro de Imoveis\n1-) Cadastrar Imovel\n2-) Consultar imoveis\n3-) Sair"
    )
  );
  switch (opcao) {
    case 1:
      imovel = {};
      imovel.proprietario = prompt("Insira o nome do proprietario:");
      imovel.quarto = prompt("Insira a quantidade de quartos:");
      imovel.banheiro = prompt("Insira a quantidade de banheiros:");
      imovel.garagem = prompt("A casa possui garagem? S/N").toUpperCase();
      imoveis.unshift(imovel);
      break;

    case 2:
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          `IMOVEL ${i + 1}\n1-) Proprietario: ${
            imoveis[i].proprietario // corrigido
          })\n2-) Quartos: ${imoveis[i].quarto}\n3-) Banheiros: ${
            imoveis[i].banheiro
          }\n4-) Garagem: ${imoveis[i].garagem}`
        );
      }
      break;

    case 3:
      alert("ENCERRANDO PROGRAMA");
      break;
  }
} while (opcao !== 3);
