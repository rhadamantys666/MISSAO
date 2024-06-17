const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando vc era mais novo, vc aprendeu a ter uma educação financeira adequada, aprendeu a investir e a ter disciplina, hoje aos quarenta anos vc pode se aposentar e viver uma vida tranquila viajando. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é horrível!",
                afirmacao: "voce nao queria se aposentar. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Ficou muito feliz que finalmente poderá aproveitar a vida."
            }
        ]
    },
    {
        enunciado: "Além de fazer investimentos para sua empresa, você  também investiu na sua aposentadoria, oq você faz agora?",
        alternativas: [
            {
                texto: "Continua trabalhando igual louco(a) até porque dinheiro é o mais importante, e posso compensar o tempo perdido no futuro.",
                afirmacao: "Voce ira morrer trabalhando"
            },
            {
                texto: "Decide que chegou a hora de aproveitar todo seu esforço e investimento com viagens e criando novas experiências.",
                afirmacao: "voce ira ter experiencias incriveis na sua vida"
            }
        ]
    },
    {
        enunciado: "Bom... Você nota que  já está ficando velho, e que está na hora de parar definitivamente de frequentar a empresa e de  trabalhar, o que você faz?",
        alternativas: [
            {
                texto: "Prepara seus funcionários e guia novos líderes para prosseguir com seu legado.",
                afirmacao: "escolha certa! Agora voce poderá aproveitar, pois tera um bom sucessor."
            },
            {
                texto: "Ninguém é tão bom quanto você, então você nunca deixa de trabalhar e continua sendo o líder da empresa.",
                afirmacao: "Voce morreu e sua empresa faliu"
            }
        ]
    },
    {
        enunciado: "Após dias pensando, você entendeu que a vida é muito curta para passar apenas trabalhando e poupando dinheiro, sendo assim você decide dar um tempo da empresa e vai viajar, para onde você vai?",
        alternativas: [
            {
                texto: "Para uma ilha no Recife passar um mês se divertindo e aproveitando.",
                afirmacao: "Uau novas aventuras lhe esperam."
            },
            {
                texto: "Ir a um restaurante caro de sua cidade.",
                afirmacao: "Voce teve uma noite muito agradavel sozinho."
            }
        ]
    },
    {
        enunciado: "Se você escolheu ir para ilha, lá você conhece uma pessoa a qual se apaixona, ele(a) é incrível. O tempo vai passando e chega a hora de você voltar , o que você faz?",
        alternativas: [
            {
                texto: "Deixo a oportunidade de ter o amor da minha vida e volto para casa.",
                afirmacao: "Infelizmente voce nunca mais a viu e passou o resto da sua vida sozinho."
            },
            {
                texto: "Decido passar mais um tempo na ilha para conhecê-la melhor e realmente entender quais minhas intenções com ela..",
                afirmacao: "Isso ai, otima escolha! Voces se conheceram e passaram o resto da vida juntos e felizes "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();