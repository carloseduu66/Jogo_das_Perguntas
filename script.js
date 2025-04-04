// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {pergunta: "Qual é o maior planeta do Sistema Solar?",
        respostas: [
            {opcao: "Terra", correto: false},
            {opcao: "Marte", correto: false},
            {opcao: "Júpiter", correto: true},
            {opcao: "Saturno", correto: false}
    ]},
    {pergunta: "Em qual continente fica o Brasil?",
        respostas: [
            {opcao: "África", correto: false},
            {opcao: "América do Sul", correto: true},
            {opcao: "Europa", correto: false},
            {opcao: "Ásia", correto: false}
    ]},
    {pergunta: "Qual é a capital da França?",
        respostas: [
            {opcao: "Londres", correto: false},
            {opcao: "Berlim", correto: false},
            {opcao: "Paris", correto: true},
            {opcao: "Madri", correto: false}
    ]},
    {pergunta: "Quem pintou a Mona Lisa?",
        respostas: [
            {opcao: "Vincent van Gogh", correto: false},
            {opcao: "Pablo Picasso", correto: false},
            {opcao: "Leonardo da Vinci", correto: true},
            {opcao: "Claude Monet", correto: false}
    ]},
    {pergunta: "Qual é o elemento químico com o símbolo 'O'?",
        respostas: [
            {opcao: "Ouro", correto: false},
            {opcao: "Oxigênio", correto: true},
            {opcao: "Prata", correto: false},
            {opcao: "Hidrogênio", correto: false}
    ]},
    {pergunta: "Qual é o maior oceano do mundo?",
        respostas: [
            {opcao: "Oceano Atlântico", correto: false},
            {opcao: "Oceano Índico", correto: false},
            {opcao: "Oceano Pacífico", correto: true},
            {opcao: "Oceano Ártico", correto: false}
    ]},
    {pergunta: "Qual é o país mais populoso do mundo?",
        respostas: [
            {opcao: "Índia", correto: false},
            {opcao: "Estados Unidos", correto: false},
            {opcao: "China", correto: true},
            {opcao: "Brasil", correto: false}
    ]},
    {pergunta: "Qual é a moeda oficial do Japão?",
        respostas: [
            {opcao: "Yuan", correto: false},
            {opcao: "Won", correto: false},
            {opcao: "Iene", correto: true},
            {opcao: "Dólar", correto: false}
    ]},
    {pergunta: "Qual é o animal conhecido como 'Rei da Selva'?",
        respostas: [
            {opcao: "Elefante", correto: false},
            {opcao: "Leão", correto: true},
            {opcao: "Tigre", correto: false},
            {opcao: "Urso", correto: false}
    ]},
    {pergunta: "Qual é o planeta mais próximo do Sol?",
        respostas: [
            {opcao: "Vênus", correto: false},
            {opcao: "Terra", correto: false},
            {opcao: "Mercúrio", correto: true},
            {opcao: "Marte", correto: false}
    ]},
    {pergunta: "Quantos dias tem uma semana?",
        respostas: [
            {opcao: "5", correto: false},
            {opcao: "6", correto: false},
            {opcao: "7", correto: true},
            {opcao: "8", correto: false}
    ]},
    {pergunta: "Quanto é 2 + 2?",
        respostas: [
            {opcao: "3", correto: false},
            {opcao: "4", correto: true},
            {opcao: "5", correto: false},
            {opcao: "6", correto: false}
    ]},
    {pergunta: "Qual é a cor do céu em um dia ensolarado?",
        respostas: [
            {opcao: "Azul", correto: true},
            {opcao: "Verde", correto: false},
            {opcao: "Vermelho", correto: false},
            {opcao: "Rosa", correto: false}
    ]},
    {pergunta: "Qual desses animais é um mamífero?",
        respostas: [
            {opcao: "Cobra", correto: false},
            {opcao: "Tubarão", correto: false},
            {opcao: "Cachorro", correto: true},
            {opcao: "Galinha", correto: false}
    ]},
    {pergunta: "Qual é o principal ingrediente do pão?",
        respostas: [
            {opcao: "Farinha", correto: true},
            {opcao: "Açúcar", correto: false},
            {opcao: "Sal", correto: false},
            {opcao: "Leite", correto: false}
    ]},
    {pergunta: "Qual é o número que vem depois do 9?",
        respostas: [
            {opcao: "10", correto: true},
            {opcao: "11", correto: false},
            {opcao: "8", correto: false},
            {opcao: "12", correto: false}
    ]},
    {pergunta: "Que cor se obtém ao misturar azul e amarelo?",
        respostas: [
            {opcao: "Verde", correto: true},
            {opcao: "Vermelho", correto: false},
            {opcao: "Laranja", correto: false},
            {opcao: "Roxo", correto: false}
    ]},
    {pergunta: "Em que estação do ano caem as folhas das árvores?",
        respostas: [
            {opcao: "Primavera", correto: false},
            {opcao: "Verão", correto: false},
            {opcao: "Outono", correto: true},
            {opcao: "Inverno", correto: false}
    ]},
    {pergunta: "Qual desses animais voa?",
        respostas: [
            {opcao: "Gato", correto: false},
            {opcao: "Papagaio", correto: true},
            {opcao: "Jacaré", correto: false},
            {opcao: "Cachorro", correto: false}
    ]},
    {pergunta: "Qual é o nome do nosso satélite natural?",
        respostas: [
            {opcao: "Lua", correto: true},
            {opcao: "Sol", correto: false},
            {opcao: "Terra", correto: false},
            {opcao: "Vênus", correto: false}
    ]},
    {pergunta: "Qual é o menor número par?",
        respostas: [
            {opcao: "1", correto: false},
            {opcao: "2", correto: true},
            {opcao: "3", correto: false},
            {opcao: "5", correto: false}
    ]},
    {pergunta: "O que usamos para ver as horas?",
        respostas: [
            {opcao: "Relógio", correto: true},
            {opcao: "Bússola", correto: false},
            {opcao: "Termômetro", correto: false},
            {opcao: "Luneta", correto: false}
    ]},
    {pergunta: "Qual é o plural de 'cão'?",
        respostas: [
            {opcao: "Cões", correto: false},
            {opcao: "Cães", correto: true},
            {opcao: "Cãos", correto: false},
            {opcao: "Cãones", correto: false}
    ]},
    {pergunta: "Qual é a capital do Brasil?",
        respostas: [
            {opcao: "São Paulo", correto: false},
            {opcao: "Rio de Janeiro", correto: false},
            {opcao: "Brasília", correto: true},
            {opcao: "Salvador", correto: false}
    ]},
    {pergunta: "O que usamos para escrever no caderno?",
        respostas: [
            {opcao: "Caneta", correto: true},
            {opcao: "Tesoura", correto: false},
            {opcao: "Cola", correto: false},
            {opcao: "Régua", correto: false}
    ]},
    {pergunta: "Quantas patas tem um cachorro?",
        respostas: [
            {opcao: "Duas", correto: false},
            {opcao: "Três", correto: false},
            {opcao: "Quatro", correto: true},
            {opcao: "Cinco", correto: false}
    ]},
    {pergunta: "Qual destes é um meio de transporte?",
        respostas: [
            {opcao: "Avião", correto: true},
            {opcao: "Sofá", correto: false},
            {opcao: "Geladeira", correto: false},
            {opcao: "Ventilador", correto: false}
    ]},
    {pergunta: "O que usamos para cortar papel?",
        respostas: [
            {opcao: "Tesoura", correto: true},
            {opcao: "Cola", correto: false},
            {opcao: "Lápis", correto: false},
            {opcao: "Borracha", correto: false}
    ]},
    {pergunta: "Qual é o formato da Terra?",
        respostas: [
            {opcao: "Quadrado", correto: false},
            {opcao: "Triangular", correto: false},
            {opcao: "Esférico", correto: true},
            {opcao: "Retangular", correto: false}
    ]},
    {pergunta: "Em que planeta nós vivemos?",
        respostas: [
            {opcao: "Marte", correto: false},
            {opcao: "Júpiter", correto: false},
            {opcao: "Terra", correto: true},
            {opcao: "Vênus", correto: false}
    ]}
]


// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos; // Incrementa o contador de acertos
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
