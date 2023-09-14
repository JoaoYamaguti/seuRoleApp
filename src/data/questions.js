export const questions = [
  {
    key: 1,
    category: 'groupSize',
    question: 'Sairá sozinho ou irá com mais pessoas?',
    options: ['Individual', 'Casal', 'Grupo', 'Indiferente'],
    answer: ''
  },
  {
    key: 2,
    category: 'calmdown',
    question: 'Está preferindo um ambiente?',
    options: ['Tranquilo', 'Musica Ambiente', 'Agitado'],
    answer: ''
  },
  {
    key: 3,
    category: 'budget',
    question: 'Pretende gastar quanto?',
    options: ['Baixo', 'Medio', 'Alto'],
    answer: ''
  },
  {
    key: 4,
    category: 'outdoor',
    question: 'Você gosta de ambientes mais abertos ou fechados?',
    options: ['Ambiente Aberto', 'Ambiente Fechado'],
    answer: ''
  },
  {
    key: 5,
    category: 'distance',
    question: 'Qual seria mais ou menos a distância desejada?',
    options: ['-10 Km', '10 KM - 25 Km', '+ 25 Km'],
    answer: ''
  },
  {
    key: 6,
    category: 'transport',
    question: 'Qual meio de locomoção?',
    options: [
      'Transporte Público',
      'Transporte Próprio',
      'Transporte por aplicativo'
    ],
    answer: ''
  },
  {
    key: 7,
    category: 'action',
    question: 'O que gostaria de fazer?',
    options: ['Beber', 'Comer', 'Visitar', 'Laser'],
    answer: ''
  }
]

export const types = {
  key: 8,
  question: 'Tipo de Estabelecimentos:',
  types: [
    {
      action: 'Comer',
      options: ['Japoneis', 'Churrasco', 'Mexicano']
    },
    {
      action: 'Beber',
      options: ['Barzinho']
    },
    {
      action: 'Visitar',
      options: ['Parque']
    },
    {
      action: 'Laser',
      options: ['Clube']
    }
  ],
  answer: ''
}
