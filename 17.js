function corrigir() {
    const respostas = {
      q1: "a", 
      q2: "b", 
      q3: "b", 
      q4: "c"  
    };

    let acertos = 0;

    for (let questao in respostas) {
      const escolhida = document.querySelector(`input[name="${questao}"]:checked`);
      if (escolhida && escolhida.value === respostas[questao]) {
        acertos++;
      }
    }

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Você acertou ${acertos} de 4 questões.`;
  }