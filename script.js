const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você decide mudar o visual e ir ao salão de beleza. Qual é a primeira coisa que você considera ao escolher um novo estilo de cabelo?",
        alternativas: [
            {
                texto: "Quero algo prático e fácil de manter.",
                afirmacao: "Você prefere um estilo prático que não demande muito tempo para arrumar."
            },
            {
                texto: "Quero algo moderno e que chame a atenção.",
                afirmacao: "Você gosta de estar na moda e escolhe um estilo que chame a atenção."
            }
        ]
    },
    {
        enunciado: "No salão, o cabeleireiro sugere algumas técnicas modernas de coloração. Como você reage?",
        alternativas: [
            {
                texto: "Aceito experimentar algo novo e diferente.",
                afirmacao: "Você é aberto a experimentar novas tendências e técnicas."
            },
            {
                texto: "Prefiro uma coloração mais tradicional.",
                afirmacao: "Você prefere se manter com cores mais clássicas e seguras."
            }
        ]
    },
    {
        enunciado: "Após a coloração, o cabeleireiro pergunta se você gostaria de fazer um tratamento capilar para melhorar a saúde do seu cabelo. O que você decide?",
        alternativas: [
            {
                texto: "Sim, quero o melhor tratamento disponível.",
                afirmacao: "Você se preocupa com a saúde do seu cabelo e opta pelo melhor tratamento."
            },
            {
                texto: "Não, prefiro manter minha rotina usual de cuidados.",
                afirmacao: "Você prefere seguir sua rotina usual de cuidados com o cabelo."
            }
        ]
    },
    {
        enunciado: "Depois do corte e coloração, o cabeleireiro sugere um penteado especial para um evento. Qual é a sua escolha?",
        alternativas: [
            {
                texto: "Sim, adoraria um penteado especial.",
                afirmacao: "Você gosta de estar preparado para eventos e aceita um penteado especial."
            },
            {
                texto: "Não, prefiro algo mais simples e natural.",
                afirmacao: "Você prefere um estilo mais natural e simples para o dia a dia."
            }
        ]
    },
    {
        enunciado: "Alguns dias depois, você nota que seu cabelo está diferente do que esperava. O que você faz?",
        alternativas: [
            {
                texto: "Volto ao salão para ajustes.",
                afirmacao: "Você confia no seu cabeleireiro e volta para ajustar o que não gostou."
            },
            {
                texto: "Procuro dicas online para resolver o problema em casa.",
                afirmacao: "Você gosta de soluções DIY e procura dicas para resolver em casa."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu estilo final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
