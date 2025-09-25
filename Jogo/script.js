alert('Este site pode não funcionar perfeitamente em dispositivos móveis!')

const boardSize = 30; // número de casas
let playerPos = 0;

// Questões
const questions = [
  // Matemática fácil
  { q: "Quanto é 7 + 5?", options: ["12", "13", "11"], answer: "12" },
  { q: "Quanto é 20 - 8?", options: ["10", "12", "14"], answer: "12" },
  { q: "Quanto é 9 × 3?", options: ["27", "21", "18"], answer: "27" },
  { q: "Quanto é 81 ÷ 9?", options: ["7", "8", "9"], answer: "9" },
  { q: "Qual é o sucessor de 99?", options: ["100", "101", "98"], answer: "100" },

  // Português fácil
  { q: "Qual é o plural de 'cão'?", options: ["cãos", "cães", "caes"], answer: "cães" },
  { q: "Na frase 'A menina brinca feliz', o sujeito é:", options: ["A menina", "brinca", "feliz"], answer: "A menina" },
  { q: "Qual a forma correta: 'Ele ___ ao cinema ontem.'", options: ["vai", "foi", "iria"], answer: "foi" },
  { q: "O antônimo de 'alegre' é:", options: ["feliz", "triste", "contente"], answer: "triste" },
  { q: "O feminino de 'ator' é:", options: ["atriz", "atora", "atresa"], answer: "atriz" },

  // Matemática intermediária
  { q: "Resolva: 45 ÷ 5", options: ["8", "9", "10"], answer: "9" },
  { q: "Qual é a metade de 250?", options: ["100", "125", "150"], answer: "125" },
  { q: "Quanto é 15 × 12?", options: ["160", "170", "180"], answer: "180" },
  { q: "A raiz quadrada de 144 é:", options: ["10", "12", "14"], answer: "12" },
  { q: "Qual número é primo?", options: ["21", "19", "25"], answer: "19" },

  // Português intermediário
  { q: "Qual frase está correta?", options: ["Eu vi ela ontem.", "Eu a vi ontem.", "Eu vi ela ontem a."], answer: "Eu a vi ontem." },
  { q: "O coletivo de 'peixe' é:", options: ["cardume", "manada", "rebanho"], answer: "cardume" },
  { q: "Em 'As flores são lindas', o núcleo do sujeito é:", options: ["As", "flores", "lindas"], answer: "flores" },
  { q: "Qual palavra é um adjetivo?", options: ["correr", "feliz", "amigo"], answer: "feliz" },
  { q: "Complete: 'Se eu ___ rico, viajaria o mundo.'", options: ["fosse", "fui", "serei"], answer: "fosse" },

  // Matemática mais difícil
  { q: "Resolva: 72 ÷ 8 × 3", options: ["24", "27", "30"], answer: "27" },
  { q: "Qual é 25% de 200?", options: ["40", "45", "50"], answer: "50" },
  { q: "Resolva: (12 + 8) × 2", options: ["38", "40", "42"], answer: "40" },
  { q: "Qual é o valor de 2³ × 5?", options: ["30", "35", "40"], answer: "40" },
  { q: "Se um carro anda 60 km em 1 hora, em 3,5 horas andará:", options: ["200 km", "210 km", "220 km"], answer: "210 km" },

  // Português mais difícil
  { q: "Qual é a função da palavra 'rápido' em 'Ele correu rápido'?", options: ["Substantivo", "Adjetivo", "Advérbio"], answer: "Advérbio" },
  { q: "Qual é a forma correta: 'Se eu ___, teria ido.'", options: ["soubesse", "saber", "soube"], answer: "soubesse" },
  { q: "A palavra 'invisível' é formada por:", options: ["prefixo + radical + sufixo", "radical + sufixo", "prefixo + radical"], answer: "prefixo + radical + sufixo" },
  { q: "Qual a figura de linguagem em 'O vento cantava nas árvores'?", options: ["Metáfora", "Personificação", "Hipérbole"], answer: "Personificação" },
  { q: "Na frase 'O livro que li é interessante', 'que' é:", options: ["Pronome relativo", "Conjunção", "Artigo"], answer: "Pronome relativo" },

  // Matemática avançada
  { q: "Resolva: 15²", options: ["200", "210", "225"], answer: "225" },
  { q: "O MMC de 6 e 8 é:", options: ["24", "30", "48"], answer: "24" },
  { q: "O MDC de 36 e 48 é:", options: ["6", "12", "18"], answer: "12" },
  { q: "Se x = 2, calcule 3x² + 4x", options: ["20", "24", "28"], answer: "20" },
  { q: "Quanto é 0,25 em fração simplificada?", options: ["1/2", "1/3", "1/4"], answer: "1/4" },

  // Português avançado
  { q: "Em 'apesar de chover', 'apesar de' é:", options: ["locução adjetiva", "locução conjuntiva", "locução verbal"], answer: "locução conjuntiva" },
  { q: "Qual é a voz passiva de 'O aluno resolveu a questão'?", options: ["A questão é resolvida pelo aluno.", "A questão foi resolvida pelo aluno.", "O aluno foi resolvido pela questão."], answer: "A questão foi resolvida pelo aluno." },
  { q: "Qual oração é subordinada adverbial?", options: ["Ele estudou porque queria passar.", "Ele é alto e forte.", "Maria leu o livro e escreveu."], answer: "Ele estudou porque queria passar." },
  { q: "Qual é o plural de 'mal'?", options: ["males", "mals", "maus"], answer: "males" },
  { q: "Em 'os homens sábios', a palavra 'sábios' é:", options: ["adjunto adnominal", "predicativo", "aposto"], answer: "adjunto adnominal" },

  // Matemática desafiadora
  { q: "Resolva: √(196)", options: ["12", "13", "14"], answer: "14" },
  { q: "Um número ímpar entre 100 e 110 é:", options: ["102", "105", "108"], answer: "105" },
  { q: "Qual é 15% de 400?", options: ["50", "55", "60"], answer: "60" },
  { q: "Se um triângulo tem lados 3, 4 e 5, ele é:", options: ["equilátero", "isósceles", "retângulo"], answer: "retângulo" },
  { q: "Qual é o próximo número da sequência: 2, 4, 8, 16, ?", options: ["24", "30", "32"], answer: "32" },

  // Português desafiador
  { q: "Qual a figura de linguagem em 'Estou morrendo de rir'?", options: ["Metáfora", "Hipérbole", "Ironia"], answer: "Hipérbole" },
  { q: "Na frase 'João é mais alto que Pedro', temos:", options: ["comparação", "causa", "condição"], answer: "comparação" },
  { q: "Em 'Estava cansado, mas estudou', a conjunção 'mas' indica:", options: ["oposição", "adição", "causa"], answer: "oposição" },
  { q: "O aumentativo de 'casa' é:", options: ["casão", "casarão", "caseiro"], answer: "casarão" },
  { q: "Qual é a classificação da palavra 'extraordinário'?", options: ["adjetivo", "substantivo", "advérbio"], answer: "adjetivo" }
];


// Cria o tabuleiro
function createBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  for (let i = 0; i < boardSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    if (i === playerPos) {
      const player = document.createElement("div");
      player.classList.add("player");
      player.textContent = "P";
      cell.appendChild(player);
    } else {
      cell.textContent = i + 1;
    }
    board.appendChild(cell);
  }
}

// Inicia o jogo
function startGame() {
  playerPos = 0;
  document.getElementById("status").textContent = "";
  createBoard();
  askQuestion();
}

// Faz pergunta
function askQuestion() {
  const questionBox = document.getElementById("question-box");
  const randomQ = questions[Math.floor(Math.random() * questions.length)];
  questionBox.style.display = "block";
  document.getElementById("question").textContent = randomQ.q;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  randomQ.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, randomQ.answer);
    answersDiv.appendChild(btn);
  });
}

// Verifica resposta
function checkAnswer(selected, correct) {
  if (selected === correct) {
    playerPos += 1; // avança 3 casas
    document.getElementById("status").textContent = "✅ Resposta certa! Avance 2 casas.";
  } else {
    playerPos -= 2; // retrocede 1 casa
    if (playerPos < 0) playerPos = 0;
    document.getElementById("status").textContent = "❌ Resposta errada! Volte 2 casas.";
  }

  // Chegou ao fim?
  if (playerPos >= boardSize - 1) {
    playerPos = boardSize - 1;
    createBoard();
    document.getElementById("status").textContent = "🎉 Você chegou ao fim da trilha!";
    document.getElementById("question-box").style.display = "none";
    return;
  }

  createBoard();
  setTimeout(askQuestion, 1000);
}

createBoard();