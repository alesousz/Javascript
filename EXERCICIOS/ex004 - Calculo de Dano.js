//personagem 1

const nome_personagem1 = prompt('Digite o nome do campeão')
const pontosDeDano1 = parseFloat(prompt(`Digite os pontos de ataque de ${nome_personagem1}`))
//personagem 2

const nome_personagem2 = prompt('Digite o nome do campeão')
let pontosDeVida2 = parseFloat(prompt(`Digite os pontos de vida de ${nome_personagem2}`))
const pontosDeDefesa2 = parseFloat(prompt(`Digite os pontos de defesa de ${nome_personagem2}`))
const escudo = confirm(`O campeão ${nome_personagem2} tem um escudo? `)
//if e else
let DanoCausado = 0
if (pontosDeDano1 > pontosDeDefesa2 && escudo === false) {
    DanoCausado = pontosDeDano1 - pontosDeDefesa2
    alert(`O dano de ${nome_personagem1} em ${nome_personagem2} foi de ${DanoCausado}`)
} else if (pontosDeDano1 > pontosDeDefesa2 && escudo === true) {
    DanoCausado = (pontosDeDano1 - pontosDeDefesa2) / 2
    alert(`O dano de ${nome_personagem1} em ${nome_personagem2} foi de ${DanoCausado}`)
} else if (pontosDeDano1 <= pontosDeDefesa2) {
    alert(`O dano de ${nome_personagem1} não foi suficiente para dano em ${nome_personagem2}`)
}

//

const pontosDeVidaPerdido = pontosDeVida2 - DanoCausado
alert(`O campeão ${nome_personagem2} teve sua vida reduzida de ${pontosDeVida2} para ${pontosDeVidaPerdido}, resultado de um dano de ${DanoCausado} `)