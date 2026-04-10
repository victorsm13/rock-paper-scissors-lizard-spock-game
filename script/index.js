const jsPedra = document.querySelector('.jsPedra');
const jsPapel = document.querySelector('.jsPapel');
const jsTesoura = document.querySelector('.jsTesoura');

let jsResultado = document.querySelector('.jsResultado');

let vitorias = 0;
let perdas = 0;
let empates = 0;


function movimentoComputador(){

    let movimento;

    const numero = Math.floor(Math.random() * 3 + 1);
    
    if(numero == 1){
        movimento = 'pedra';
    } else if (numero == 2){
        movimento = 'papel';
    } else{
        movimento = 'tesoura';
    }

    return movimento;
}

function jogo(movimentoJogador){

    let resultado = '';

    const movimento = movimentoComputador()

    if(movimentoJogador === 'pedra'){

         if(movimento === 'pedra'){

        empates++;
        resultado = ` <p>Deu empate! O computador escolheu <span class='moviComputador'>pedra</span></p>
            <p><span id="vitoria">Vitórias: </span>${vitorias} - <span id="perda">Perdas:</span> ${perdas} - <span id="empate">Empates:</span> ${empates}</p>
        `;
    } else if(movimento === 'papel'){

        perdas++;
        resultado = ` <p>Você perdeu! O computador escolheu <span class='moviComputador'>papel</span></p>
            <p><span id="vitoria">Vitórias: </span>${vitorias} - <span id="perda">Perdas:</span> ${perdas} - <span id="empate">Empates:</span> ${empates}</p>
        `;

    } else if(movimento === 'tesoura'){

        vitorias++;
        resultado = ` <p>Você ganhou! O computador escolheu <span class='moviComputador'>tesoura</span></p>
            <p><span id="vitoria">Vitórias: </span>${vitorias} - <span id="perda">Perdas:</span> ${perdas} - <span id="empate">Empates:</span> ${empates}</p>
        `;
    }

    jsResultado.innerHTML = resultado;

    } else if(movimentoJogador === 'papel'){

        if(movimento === 'pedra'){

        vitorias++;
        resultado = ` <p>Você ganhou! O computador escolheu <span class='moviComputador'>pedra</span></p>
            <p><span id="vitoria">Vitórias: </span>${vitorias} - <span id="perda">Perdas:</span> ${perdas} - <span id="empate">Empates:</span> ${empates}</p>
        `;
    } else if(movimento === 'papel'){

        empates++;
        resultado = ` <p>Deu empate! O computador escolheu <span class='moviComputador'>papel</span></p>
            <p><span id="vitoria">Vitórias: </span>${vitorias} - <span id="perda">Perdas:</span> ${perdas} - <span id="empate">Empates:</span> ${empates}</p>
        `;

    } else if(movimento === 'tesoura'){

        perdas++;
        resultado = ` <p>Você perdeu! O computador escolheu <span class='moviComputador'>tesoura</span></p>
            <p><span id="vitoria">Vitórias: </span>${vitorias} - <span id="perda">Perdas:</span> ${perdas} - <span id="empate">Empates:</span> ${empates}</p>
        `;
    }

    jsResultado.innerHTML = resultado;

    } else{
        if(movimento === 'pedra'){

        perdas++;
        resultado = ` <p>Você perdeu! O computador escolheu <span class='moviComputador'>pedra</span></p>
            <p><span id="vitoria">Vitórias: </span>${vitorias} - <span id="perda">Perdas:</span> ${perdas} - <span id="empate">Empates:</span> ${empates}</p>
        `;
    } else if(movimento === 'papel'){

        vitorias++;
        resultado = ` <p>Você ganhou! O computador escolheu <span class='moviComputador'>papel</span></p>
            <p><span id="vitoria">Vitórias: </span>${vitorias} - <span id="perda">Perdas:</span> ${perdas} - <span id="empate">Empates:</span> ${empates}</p>
        `;

    } else if(movimento === 'tesoura'){

        empates++;
        resultado = ` <p>Deu empate! O computador escolheu <span class='moviComputador'>tesoura</span></p>
            <p><span id="vitoria">Vitórias: </span>${vitorias} - <span id="perda">Perdas:</span> ${perdas} - <span id="empate">Empates:</span> ${empates}</p>
        `;
    }

    jsResultado.innerHTML = resultado;

    }

}


jsPedra.addEventListener('click', ()=>{
    jogo('pedra');
});

jsPapel.addEventListener('click', ()=>{
    jogo('papel');
});

jsTesoura.addEventListener('click', ()=>{
    jogo('tesoura');
});

