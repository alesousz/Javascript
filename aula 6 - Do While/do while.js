let velocidade = 0

do {
    alert(`A velocidade do veiculo é ${velocidade} km/h`)
    velocidade += 20
    if (velocidade === 100){
        alert("Velocidade MAXIMA ALCANÇADA DESLIGANDO E EXPLODINDO COM TODOS ABORDO... SE FODEM HUMANOS!")
        break
    }
} while (velocidade > 0) 
    

alert(`Velocidade final: ${velocidade} km/h`)