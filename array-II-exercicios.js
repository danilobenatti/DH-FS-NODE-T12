let arrayFrase = [
    "Não",
    "fracassei,",
    "simplesmente",
    "encontrei",
    "dez",
    "mil",
    "soluções",
    "equivocadas"
]

let fraseNova = arrayFrase.join(" ");

console.log(fraseNova);

//-------------------------------------

let aluno = [
    {
      nome: "Álvaro",
      media: 9,
      curso: "Android"
    },
    {
      nome: "Daniel",
      media: 6,
      curso: "Full Stack"
    },
    {
      nome: "Alexis",
      media: 3,
      curso: "iOS"
    }
  ];

  let alunoFormado = aluno.pop();

  let alunoDesistente = aluno.shift();

  aluno.unshift({
      nome: 'Mariana',
      media: 9,
      curso: 'Full Stack'
  });
  aluno.unshift({
    nome: 'Francisco',
    media: 2,
    curso: 'Android'
});

  console.log(alunoFormado);
  console.log(alunoDesistente);
  console.log(aluno);

  //-------------------------------------

  let estudantes = [
    {
      nome: 'Álvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    }
  ]

  estudantes.push({
      nome: 'João',
      media: 5,
      curso: 'iOS',
    },
    {
      nome: 'Miguel',
      media: 2,
      curso: 'Android',
    });
  console.log(estudantes);
