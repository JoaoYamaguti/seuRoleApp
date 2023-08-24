const data = [
  {
    id: 1,
    name: 'Parque Ecológico do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  },
  {
    id: 2,
    name: 'Parque da Maluquice do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  },
  {
    id: 3,
    name: 'Parque Ecológico do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  },
  {
    id: 4,
    name: 'Parque Ecológico do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  },
  {
    id: 5,
    name: 'Parque Ecológico do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  },
  {
    id: 6,
    name: 'Parque Ecológico do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  },
  {
    id: 7,
    name: 'Parque Ecológico do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  },
  {
    id: 8,
    name: 'Parque Ecológico do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  },
  {
    id: 9,
    name: 'Parque Ecológico do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  },
  {
    id: 10,
    name: 'Parque Ecológico do Tietê',
    description:
      'Parque amplo com plantas e animais nativos, além de atividades recreativas e um museu.',
    rate: '4.5',
    address:
      'Via Parque, 8055 - Vila Santo Henrique, São Paulo - SP, 03719-000',
    hours: [
      { weekDay: 'sunday', open: '06:00', close: '17:00' },
      { weekDay: 'monday', open: '06:00', close: '17:00' },
      { weekDay: 'tuesday', open: '06:00', close: '17:00' },
      { weekDay: 'wednesday', open: '06:00', close: '17:00' },
      { weekDay: 'thursday', open: '06:00', close: '17:00' },
      { weekDay: 'friday', open: '06:00', close: '17:00' },
      { weekDay: 'saturday', open: '06:00', close: '17:00' }
    ],
    images: [
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMfbQErVgYFdgXcNtliaNAO78-yv2Nh-fuMTpy4=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipMIJClqZqfGhfK9-QAJ6MsGp3dqd_uw-J-jNfDa=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipOaFZw9Q-Mvf-ohr4SGSQhJ5ctB3APajevv7pMq=s680-w680-h510'
      },
      {
        path: 'https://lh3.googleusercontent.com/p/AF1QipPty2UtguymqHB8sysizUOm3y2Vq9TAjPs72iBs=s680-w680-h510'
      }
    ],
    categories: [
      { category: 'groupSize', options: 'Indiferente' },
      { category: 'calmdown', options: 'Tranquilo' },
      { category: 'budget', options: 'Baixo' },
      { category: 'outdoor', options: 'Ambiente Aberto' },
      { category: 'action', options: 'Visitar' },
      { category: 'type', options: 'Parque' }
    ]
  }
]
export default data
