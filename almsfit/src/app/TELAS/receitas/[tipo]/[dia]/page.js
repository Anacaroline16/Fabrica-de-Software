import ChecklistClient from './checklistClient.js';

export default async function ChecklistPage({ params }) {
  const { tipo, dia } = params;
  const exercicios = await buscarExercicios(tipo, dia);
  
  return <ChecklistClient exercicios={exercicios} tipo={tipo} dia={dia} />;
}

function buscarExercicios(tipo, dia) {
  const exerciciosPorTipoEDia = {
    lombares: {
      segunda: [
        { nome: "Prancha", series: 3, repeticoes: "40s", descanso: "30s" },
        { nome: "Ponte de Glúteo", series: 3, repeticoes: 15, descanso: "45s" },
        { nome: "Hiperextensão no Banco", series: 3, repeticoes: 12, descanso: "45s" },
        { nome: "Alongamento de piriforme", series: 3, repeticoes: "30s cada lado", descanso: "20s" },
        { nome: "Abdominal isométrico", series: 3, repeticoes: "45s", descanso: "45s" },
        { nome: "Elevação de perna reta", series: 3, repeticoes: 12, descanso: "30s" }
    ],
        terca: [
        { nome: "Dead bug", series: 3, repeticoes: 12, descanso: "30s" },
        { nome: "Alongamento de cadeia posterior", series: 3, repeticoes: "40s", descanso: "30s" },
        { nome: "Ponte unilateral", series: 3, repeticoes: 10, descanso: "45s" },
        { nome: "Bird dog", series: 3, repeticoes: 10, descanso: "30s" },
        { nome: "Postura da criança (yoga)", series: 3, repeticoes: "1min", descanso: "30s" },
        { nome: "Respiração diafragmática", series: 1, repeticoes: "5min", descanso: "N/A" }
    ],
        quarta: [
        { nome: "Pilates básico (100)", series: 1, repeticoes: 100, descanso: "N/A" },
        { nome: "Flexão de joelhos com bola", series: 3, repeticoes: 12, descanso: "45s" },
        { nome: "Extensão torácica na parede", series: 3, repeticoes: 10, descanso: "30s" },
        { nome: "Glute kickback", series: 3, repeticoes: 15, descanso: "45s" },
        { nome: "Postura da esfinge", series: 3, repeticoes: "30s", descanso: "30s" },
        { nome: "Agachamento com apoio", series: 3, repeticoes: 12, descanso: "45s" }
    ],
      quinta: [
        { nome: "Prancha lateral (joelhos no chão)", series: 3, repeticoes: "30s", descanso: "30s" },
        { nome: "Alongamento de isquiotibiais", series: 3, repeticoes: "40s cada perna", descanso: "20s" },
        { nome: "Mobilidade de quadril", series: 3, repeticoes: 12, descanso: "30s" },
        { nome: "Abdução de quadril deitado", series: 3, repeticoes: 15, descanso: "30s" },
        { nome: "Rolamento de coluna (leve)", series: 3, repeticoes: 8, descanso: "30s" },
        { nome: "Isometria abdominal", series: 3, repeticoes: "45s", descanso: "45s" }
    ],
        sexta: [
        { nome: "Pilates (roll up adaptado)", series: 3, repeticoes: 8, descanso: "30s" },
        { nome: "Gato-camelo com respiração", series: 3, repeticoes: 10, descanso: "30s" },
        { nome: "Elevação de pelve", series: 3, repeticoes: 12, descanso: "45s" },
        { nome: "Alongamento de glúteo sentado", series: 3, repeticoes: "40s cada lado", descanso: "20s" },
        { nome: "Marcha no solo", series: 3, repeticoes: "1min", descanso: "30s" },
        { nome: "Mobilidade de tornozelo", series: 3, repeticoes: 15, descanso: "30s" }
    ],
        sabado: [
        { nome: "Caminhada leve", series: 1, repeticoes: "20min", descanso: "N/A" },
        { nome: "Postura do gato com extensão", series: 3, repeticoes: 10, descanso: "30s" },
        { nome: "Rotação de tronco deitado", series: 3, repeticoes: 12, descanso: "30s" },
        { nome: "Yoga (movimentos lentos)", series: 1, repeticoes: "10min", descanso: "N/A" },
        { nome: "Alongamento cervical e lombar", series: 3, repeticoes: "30s", descanso: "20s" },
        { nome: "Respiração consciente", series: 1, repeticoes: "5min", descanso: "N/A" }
    ]
    },
    superiores: {
        segunda: [
            { nome: "Flexão de braço", series: 4, repeticoes: 12, descanso: "60s" },
            { nome: "Remada curvada", series: 3, repeticoes: 10, descanso: "60s" },
            { nome: "Elevação lateral", series: 3, repeticoes: 15, descanso: "45s" },
            { nome: "Rosca direta", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Tríceps banco", series: 3, repeticoes: 15, descanso: "45s" },
            { nome: "Encolhimento de ombros", series: 3, repeticoes: 12, descanso: "60s" }
        ],
        terca: [
            { nome: "Flexão diamante", series: 4, repeticoes: 10, descanso: "60s" },
            { nome: "Remada unilateral", series: 3, repeticoes: 12, descanso: "60s" },
            { nome: "Desenvolvimento com halteres", series: 3, repeticoes: 12, descanso: "60s" },
            { nome: "Rosca martelo", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Tríceps testa", series: 3, repeticoes: 10, descanso: "45s" },
            { nome: "Puxada alta elástica", series: 3, repeticoes: 15, descanso: "45s" }
        ],
        quarta: [
            { nome: "Flexão com apoio de joelhos", series: 4, repeticoes: 15, descanso: "45s" },
            { nome: "Crucifixo reto", series: 3, repeticoes: 12, descanso: "60s" },
            { nome: "Elevação frontal", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Bíceps concentrado", series: 3, repeticoes: 10, descanso: "45s" },
            { nome: "Tríceps coice", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Remada baixa com elástico", series: 3, repeticoes: 15, descanso: "60s" }
        ],
        quinta: [
            { nome: "Supino reto (halteres)", series: 4, repeticoes: 10, descanso: "60s" },
            { nome: "Barra fixa ou australiana", series: 3, repeticoes: 8, descanso: "90s" },
            { nome: "Elevação lateral inclinada", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Rosca inversa", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Tríceps mergulho", series: 3, repeticoes: 10, descanso: "60s" },
            { nome: "Mobilidade de ombro", series: 3, tempo: "30s", descanso: "30s" }
        ],
        sexta: [
            { nome: "Flexão pliométrica (explosiva)", series: 4, repeticoes: 8, descanso: "90s" },
            { nome: "Pull-over com peso", series: 3, repeticoes: 12, descanso: "60s" },
            { nome: "Remada aberta", series: 3, repeticoes: 12, descanso: "60s" },
            { nome: "Rosca direta com barra", series: 3, repeticoes: 10, descanso: "45s" },
            { nome: "Tríceps francês", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Prancha com toque de ombro", series: 3, repeticoes: 10, descanso: "45s" }
        ],
        sabado: [
            { nome: "Alongamento de costas e ombros", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Mobilidade escapular", series: 3, repeticoes: 12, descanso: "30s" },
            { nome: "Pêndulo de braço", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Liberação miofascial", series: 1, tempo: "3min", descanso: "N/A" },
            { nome: "Yoga para ombros", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Isometria de escápulas", series: 3, tempo: "30s", descanso: "30s" }
        ]
        },
    inferiores: {
        segunda: [
            { nome: "Agachamento livre", series: 4, repeticoes: 8, descanso: "90s" },
            { nome: "Afundo estacionário", series: 3, repeticoes: 10, descanso: "60s" },
            { nome: "Elevação pélvica", series: 3, repeticoes: 12, descanso: "60s" },
            { nome: "Stiff com peso", series: 3, repeticoes: 10, descanso: "60s" },
            { nome: "Panturrilha em pé", series: 4, repeticoes: 15, descanso: "30s" },
            { nome: "Abdução de quadril", series: 3, repeticoes: 15, descanso: "45s" }
        ],
        terca: [
            { nome: "Agachamento sumô", series: 4, repeticoes: 10, descanso: "90s" },
            { nome: "Afundo lateral", series: 3, repeticoes: 10, descanso: "60s" },
            { nome: "Glúteo quatro apoios", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Step-up", series: 3, repeticoes: 10, descanso: "60s" },
            { nome: "Passada com peso", series: 3, repeticoes: 12, descanso: "60s" },
            { nome: "Isometria de coxa na parede", series: 3, tempo: "45s", descanso: "30s" }
        ],
        quarta: [
            { nome: "Agachamento búlgaro", series: 3, repeticoes: 8, descanso: "90s" },
            { nome: "Leg press", series: 4, repeticoes: 12, descanso: "60s" },
            { nome: "Flexão de joelho deitado", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Ponte com bola suíça", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Elevação de panturrilha sentado", series: 4, repeticoes: 20, descanso: "30s" },
            { nome: "Extensão de quadril", series: 3, repeticoes: 15, descanso: "45s" }
        ],
        quinta: [
            { nome: "Corrida leve ou escadas", series: 1, tempo: "15min", descanso: "N/A" },
            { nome: "Agachamento com salto", series: 3, repeticoes: 8, descanso: "90s" },
            { nome: "Afundo alternado", series: 3, repeticoes: 10, descanso: "60s" },
            { nome: "Stiff unilateral", series: 3, repeticoes: 10, descanso: "60s" },
            { nome: "Abdução com elástico", series: 3, repeticoes: 15, descanso: "45s" },
            { nome: "Mobilidade de quadril", series: 3, tempo: "30s", descanso: "30s" }
        ],
        sexta: [
            { nome: "Agachamento profundo com pausa", series: 3, repeticoes: 6, descanso: "120s" },
            { nome: "Elevação de pelve com carga", series: 3, repeticoes: 10, descanso: "60s" },
            { nome: "Step-up elevado", series: 3, repeticoes: 8, descanso: "60s" },
            { nome: "Isometria de glúteo", series: 3, tempo: "45s", descanso: "30s" },
            { nome: "Panturrilha unilateral", series: 3, repeticoes: 12, descanso: "30s" },
            { nome: "Mobilidade tornozelo", series: 3, tempo: "30s", descanso: "30s" }
        ],
        sabado: [
            { nome: "Alongamento posterior", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Liberação com bola de massagem", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Agachamento leve", series: 3, repeticoes: 15, descanso: "45s" },
            { nome: "Yoga (postura do guerreiro)", series: 3, tempo: "30s", descanso: "30s" },
            { nome: "Ativação de glúteos", series: 3, repeticoes: 15, descanso: "30s" },
            { nome: "Caminhada inclinada", series: 1, tempo: "20min", descanso: "N/A" }
        ]
    },
    cardiacos: {
        segunda: [
            { nome: "Caminhada rápida", series: 1, tempo: "15min", descanso: "N/A" },
            { nome: "Polichinelo leve", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Elevação de joelho", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Corrida no lugar (leve)", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Step touch", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Alongamento geral", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        terca: [
            { nome: "Bicicleta ergométrica", series: 1, tempo: "20min", descanso: "N/A" },
            { nome: "Dança leve", series: 3, tempo: "2min", descanso: "30s" },
            { nome: "Marcha estacionária", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Elevação de calcanhar", series: 3, repeticoes: 15, descanso: "30s" },
            { nome: "Rotação de tronco em pé", series: 3, repeticoes: 12, descanso: "30s" },
            { nome: "Caminhada com inclinação", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        quarta: [
            { nome: "Pular corda leve (ou simular)", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Caminhada em escada", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Sobe e desce no banco", series: 3, repeticoes: 10, descanso: "30s" },
            { nome: "Step aeróbico", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Mobilidade articular", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Respiração consciente", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        quinta: [
            { nome: "HIIT leve (20s ON/40s OFF)", series: 6, tempo: "20s", descanso: "40s" },
            { nome: "Corrida leve em circuito", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Caminhada com braços ativos", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Flexão em pé na parede", series: 3, repeticoes: 12, descanso: "30s" },
            { nome: "Mobilidade de ombro e quadril", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Alongamento cardíaco", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        sexta: [
            { nome: "Corrida leve de 10-15min", series: 1, tempo: "15min", descanso: "N/A" },
            { nome: "Bicicleta 20min", series: 1, tempo: "20min", descanso: "N/A" },
            { nome: "Abdominais leves", series: 3, repeticoes: 12, descanso: "30s" },
            { nome: "Movimento de esquiador sem impacto", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Postura de prancha (breve)", series: 3, tempo: "30s", descanso: "30s" },
            { nome: "Alongamento respiratório", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        sabado: [
            { nome: "Caminhada em grupo", series: 1, tempo: "30min", descanso: "N/A" },
            { nome: "Dança aeróbica leve", series: 1, tempo: "15min", descanso: "N/A" },
            { nome: "Agachamento sem peso", series: 3, repeticoes: 12, descanso: "30s" },
            { nome: "Mobilidade torácica", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Alongamento global", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Controle de respiração", series: 1, tempo: "5min", descanso: "N/A" }
        ]
    },
    iniciantes: {
        segunda: [
            { nome: "Caminhada", series: 1, tempo: "15min", descanso: "N/A" },
            { nome: "Agachamento básico", series: 3, repeticoes: 8, descanso: "60s" },
            { nome: "Flexão na parede", series: 3, repeticoes: 6, descanso: "45s" },
            { nome: "Elevação de joelho em pé", series: 3, repeticoes: 10, descanso: "30s" },
            { nome: "Prancha de joelhos", series: 3, tempo: "20s", descanso: "30s" },
            { nome: "Alongamento leve", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        terca: [
            { nome: "Marcha no lugar", series: 3, tempo: "2min", descanso: "30s" },
            { nome: "Remada com elástico", series: 3, repeticoes: 10, descanso: "45s" },
            { nome: "Ponte de glúteo", series: 3, repeticoes: 8, descanso: "45s" },
            { nome: "Bíceps com garrafa", series: 3, repeticoes: 10, descanso: "45s" },
            { nome: "Abdução lateral em pé", series: 3, repeticoes: 12, descanso: "30s" },
            { nome: "Mobilidade cervical", series: 1, tempo: "3min", descanso: "N/A" }
        ],
        quarta: [
            { nome: "Step leve", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Rosca direta com elástico", series: 3, repeticoes: 10, descanso: "45s" },
            { nome: "Elevação frontal com peso leve", series: 3, repeticoes: 8, descanso: "45s" },
            { nome: "Isometria de coxa", series: 3, tempo: "20s", descanso: "30s" },
            { nome: "Puxada elástica nas costas", series: 3, repeticoes: 10, descanso: "45s" },
            { nome: "Alongamento posterior", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        quinta: [
            { nome: "Agachamento com apoio", series: 3, repeticoes: 6, descanso: "60s" },
            { nome: "Mobilidade de tornozelo", series: 3, repeticoes: 12, descanso: "30s" },
            { nome: "Alongamento de braço", series: 3, tempo: "30s", descanso: "30s" },
            { nome: "Prancha adaptada", series: 3, tempo: "15s", descanso: "30s" },
            { nome: "Marcha estacionária com braços", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Respiração profunda", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        sexta: [
            { nome: "Dança leve", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Extensão de joelho sentado", series: 3, repeticoes: 12, descanso: "45s" },
            { nome: "Elevação de panturrilha", series: 3, repeticoes: 15, descanso: "30s" },
            { nome: "Flexão isométrica", series: 3, tempo: "15s", descanso: "30s" },
            { nome: "Caminhada", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Relaxamento guiado", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        sabado: [
            { nome: "Alongamento total", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Rolamento de coluna leve", series: 3, repeticoes: 6, descanso: "30s" },
            { nome: "Yoga adaptado", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Mobilidade de quadril e ombro", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Respiração diafragmática", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Meditação curta", series: 1, tempo: "5min", descanso: "N/A" }
        ]
    },
    idosos: {
        segunda: [
            { nome: "Caminhada com apoio", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Sentar e levantar da cadeira", series: 3, repeticoes: 6, descanso: "60s" },
            { nome: "Elevação de braços", series: 3, repeticoes: 8, descanso: "45s" },
            { nome: "Marcha lenta no lugar", series: 3, tempo: "1min", descanso: "30s" },
            { nome: "Rotação cervical", series: 3, repeticoes: 5, descanso: "30s" },
            { nome: "Alongamento de panturrilha", series: 2, tempo: "30s", descanso: "30s" }
        ],
        terca: [
            { nome: "Caminhar segurando em apoio", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Agachamento parcial com cadeira", series: 3, repeticoes: 5, descanso: "60s" },
            { nome: "Rosca com elástico", series: 3, repeticoes: 8, descanso: "45s" },
            { nome: "Elevação de perna lateral em pé", series: 3, repeticoes: 6, descanso: "45s" },
            { nome: "Mobilidade de ombro", series: 3, repeticoes: 8, descanso: "30s" },
            { nome: "Respiração consciente", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        quarta: [
            { nome: "Bicicleta leve (se disponível)", series: 1, tempo: "15min", descanso: "N/A" },
            { nome: "Alongamento de braços", series: 3, tempo: "30s", descanso: "30s" },
            { nome: "Elevação de calcanhar", series: 3, repeticoes: 10, descanso: "45s" },
            { nome: "Flexão de braço com peso leve", series: 3, repeticoes: 6, descanso: "60s" },
            { nome: "Posição de equilíbrio unipodal (com apoio)", series: 3, tempo: "15s", descanso: "45s" },
            { nome: "Relaxamento guiado", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        quinta: [
            { nome: "Marcha com obstáculos pequenos", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Mobilidade torácica", series: 3, repeticoes: 8, descanso: "30s" },
            { nome: "Estabilidade de tornozelo", series: 3, repeticoes: 10, descanso: "30s" },
            { nome: "Exercício sentado com peso leve", series: 3, repeticoes: 8, descanso: "45s" },
            { nome: "Yoga adaptado", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Postura correta", series: 3, tempo: "30s", descanso: "30s" }
        ],
        sexta: [
            { nome: "Alongamento completo", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Caminhada em grupo", series: 1, tempo: "15min", descanso: "N/A" },
            { nome: "Equilíbrio lateral", series: 3, tempo: "15s", descanso: "45s" },
            { nome: "Rotação de tronco sentado", series: 3, repeticoes: 6, descanso: "30s" },
            { nome: "Fortalecimento com faixa elástica", series: 3, repeticoes: 8, descanso: "45s" },
            { nome: "Meditação guiada", series: 1, tempo: "5min", descanso: "N/A" }
        ],
        sabado: [
            { nome: "Dança leve ou hidroginástica (se possível)", series: 1, tempo: "20min", descanso: "N/A" },
            { nome: "Alongamento global", series: 1, tempo: "10min", descanso: "N/A" },
            { nome: "Exercício respiratório", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Relaxamento corporal", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Mobilidade suave", series: 1, tempo: "5min", descanso: "N/A" },
            { nome: "Caminhada leve", series: 1, tempo: "10min", descanso: "N/A" }
        ]
    }
  };

  return exerciciosPorTipoEDia[tipo]?.[dia] || [];
}