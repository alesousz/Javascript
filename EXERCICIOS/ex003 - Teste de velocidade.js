const carro1_nome = prompt('Digite o nome do 1° carro')
const carro1_vel = parseFloat(prompt('Digite a velocidade do 1° carro'))
const carro2_nome = prompt('Digite o nome do 2° carro')
const carro2_vel = parseFloat(prompt('Digite a velocidade do 2° carro'))

if (carro1_vel > carro2_vel) 
{
    alert(`O carro ${carro1_nome} é o mais rápido`);
} 
else if (carro2_vel > carro1_vel) 
{
    alert(`O carro ${carro2_nome} é mais rapido`)
} 
else 
{alert(`A velocidade dos carros ${carro1_nome} e ${carro2_nome} são iguais`);

} 