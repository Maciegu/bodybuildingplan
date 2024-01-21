import {CwiczeniaNaBarki,CwiczeniaNaBiceps,CwiczeniaNaBrzuch,CwiczeniaNaKlatke,CwiczeniaNaNogi,CwiczeniaNaPlecy,CwiczeniaNaTriceps} from './AllexercisesForPC.js';

const AllPlans = [
    {
        days: 2,
        name: "FULL BODY WORKOUT"
    },
    {
        days: 2,
        name: "UPPER LOWER"
    },
    {
        days: 3,
        name: "UPPER LOWER UPPER",
        priority: ["klatka","plecy","ramiona","barki"]
    },
    {
        days: 3,
        name: "LOWER UPPER LOWER",
        priority: ["nogi","tyłek"]
    },
    {
        days: 3,
        name: "FULL BODY WORKOUT"
    },
    {
        days: 3,
        name: "PUSH PULL LEGS",
        priority: ["klatka","plecy","ramiona","barki"]
    },
    {
        days: 4,
        name: "PUSH PULL UPPER LOWER",
        priority: ["klatka","plecy","ramiona","barki"]
    },
    {
        days: 4,
        name: "UPPER LOWER UPPER LOWER"
    },
    {
        days: 5,
        name: "PUSH PULL LEGS UPPER LOWER"
    },
    {
        days: 5,
        name: "SPLIT"
    },
];


const findWorkoutPlan = (days, priority) => {
    // Filter plans based on the specified number of days
    const filteredPlans = AllPlans.filter(plan => plan.days === days);

    if (filteredPlans.length === 0) {
        // No plans with the specified number of days found
        return null;
    }

    // Check if any of the filtered plans has priority muscle group
    const priorityPlans = filteredPlans.filter(plan =>
        plan.priority && plan.priority.some(group => priority.includes(group))
    );

    if (priorityPlans.length > 0) {
        // If there are plans with priority, choose one randomly
        const randomPriorityPlan = priorityPlans[Math.floor(Math.random() * priorityPlans.length)];
        return randomPriorityPlan;
    } else {
        // If no plans with priority, choose one randomly from all filtered plans
        const randomPlan = filteredPlans[Math.floor(Math.random() * filteredPlans.length)];
        return randomPlan;
    }
};

const getRandomExercise = (exerciseList, targetMuscle, exerciseLevel) => {
    // Filter exercises based on target muscle and exercise level
    const filteredExercises = exerciseList.filter(exercise =>
        exercise.target === targetMuscle && exercise.level === exerciseLevel
    );

    if (filteredExercises.length === 0) {
        // If no exercises match the criteria, return null
        return null;
    }

    // Randomly choose one exercise from the filtered list
    const randomExercise = filteredExercises[Math.floor(Math.random() * filteredExercises.length)];
    return randomExercise.name;
};


const twoDaysPlan = {
    "FULL BODY WORKOUT": [
        {
            day: 1,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
        {
            day: 2,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        }
    ],
    "UPPER LOWER": [
        {
            day: 1,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria", 3),
            
        },
        {
            day: 2,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne2: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch2: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        }
    ]
};

const threeDaysPlan = {
    "FULL BODY WORKOUT": [
        {
            day: 1,       
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
        {
            day: 2,
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            plecy: getRandomExercise(CwiczeniaNaPlecy,"Przód",3),
            klatka: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy: getRandomExercise(CwiczeniaNaPlecy,"Przód",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
        {
            day: 3,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
    ],

    "UPPER LOWER UPPER": [
        {
            day: 1,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 2,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
        {
            day: 3,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
    ],
    "LOWER UPPER LOWER": [
        {
            day: 1,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
        {
            day: 2,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 3,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        }
    ],
    "PUSH PULL LEGS": [
        {
            day: 1,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 2,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 3,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
    ]
};




const fourDaysPlan = {
    "PUSH PULL UPPER LOWER": [
        {
            day: 1,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 2,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 3,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 4,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        }
    ],
    "UPPER LOWER UPPER LOWER": [
        {
            day: 1,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 2,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
        {
            day: 3,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 4,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        }
    ]
};

const fiveDaysPlan = {
    "PUSH PULL LEGS UPPER LOWER": [
        {
            day: 1,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 2,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 3,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
        {
            day: 4,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
            triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
            barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
        },
        {
            day: 5,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        }
    ],
        "SPLIT": [
        {
            day: 1,
            klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
            barki1: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            barki2: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            biceps1: getRandomExercise(CwiczeniaNaBiceps,"Przód",3),
            biceps2: getRandomExercise(CwiczeniaNaBiceps,"Przód",3),
        },
        {
            day: 2,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
        {
            day: 3,
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            barki1: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            barki2: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            triceps1: getRandomExercise(CwiczeniaNaTriceps ,"Długa",3),
            triceps2: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
        },
        {
            day: 4,
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
            nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
            nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
            lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
            brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
            nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
        },
        {
            day: 5,
            plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
            plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
            barki1: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            barki2: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
            triceps1: getRandomExercise(CwiczeniaNaTriceps,"Długa",3),
            triceps2: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
        }
    ]
};


const findWorkoutObject = (days, name) => {
    let selectedPlan;

    switch (days) {
        case 2:
            selectedPlan = twoDaysPlan;
            break;
        case 3:
            selectedPlan = threeDaysPlan;
            break;
        case 4:
            selectedPlan = fourDaysPlan;
            break;
        case 5:
            selectedPlan = fiveDaysPlan;
            break;
        default:
            return null; // Jeśli dni nie pasują do żadnego planu, zwracamy null
    }

    // Sprawdź, czy istnieje plan o podanej nazwie
    const workoutPlan = selectedPlan[name];

    if (workoutPlan) {
        return workoutPlan;
    } else {
        return null; // Jeśli nie znaleziono planu o podanej nazwie, zwracamy null
    }
};

// const selectedPlan = findWorkoutPlan(4, []);
// console.log(selectedPlan);

// const foundWorkout = findWorkoutObject(selectedPlan.days, selectedPlan.name);
// console.log(foundWorkout);

function PlanCreator(days,priority){
    if (days && priority) {
        const selectedPlan = findWorkoutPlan(days, [priority]);
        console.log(selectedPlan);
        const planName = selectedPlan.name;

        // Sprawdzenie, czy selectedPlan zawiera właściwość 'days' i 'name'
        if (selectedPlan && selectedPlan.days && selectedPlan.name) {
            const foundWorkout = findWorkoutObject(selectedPlan.days, selectedPlan.name);
            console.log(foundWorkout);

            return {foundWorkout, planName};
        } else {
            console.error("Nieprawidłowy format planu treningowego.");
            return null; // Lub inna wartość reprezentująca brak danych
        }
    } else {
        console.error("Brak wymaganych danych (days lub priority).");
        return null; // Lub inna wartość reprezentująca brak danych
    }
}


export default PlanCreator;





























// const twoDaysPlan = (name) => [
//     {
//         name: "FULL BODY WORKOUT",
//         day: 1,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//         name: "FULL BODY WORKOUT",
//         day: 2,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//         name: "UPPER LOWER",
//         day: 1,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch("Izometria"),3),
//     },
//     {
//         name: "UPPER LOWER",
//         day: 2,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
// ];

// const threeDaysPlan = (name) => [
//     {
//         name: "FULL BODY WORKOUT",
//         day: 1,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },

//     {
//         name: "FULL BODY WORKOUT",
//         day: 2,
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         plecy: getRandomExercise(CwiczeniaNaPlecy,"Przód",3),
//         klatka: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy: getRandomExercise(CwiczeniaNaPlecy,"Przód",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//         name: "FULL BODY WORKOUT",
//         day: 3,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         nogi: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//         name: "UPPER LOWER UPPER",
//         day: 1,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//         name: "UPPER LOWER UPPER",
//         day: 2,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//         name: "UPPER LOWER UPPER",
//         day: 3,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 1,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//      
//         day: 2,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 3,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//     
//         day: 1,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//     
//         day: 2,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//     
//         day: 3,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
// ];




// const fourDaysPlan = (name) => [
//     {
//      
//         day: 1,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 2,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 3,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 4,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//      
//         day: 1,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 2,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//      
//         day: 3,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 4,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
// ];

// const fiveDaysPlan = (name) => [
//     {
//      
//         day: 1,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 2,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 3,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//      
//         day: 4,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         biceps: getRandomExercise(CwiczeniaNaBiceps,"Krótka",3),
//         triceps: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//         barki: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//     },
//     {
//      
//         day: 5,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//         name: "SPLIT",
//         day: 1,
//         klatka1: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         klatka2: getRandomExercise(CwiczeniaNaKlatke,"Przód",3),
//         barki1: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         barki2: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         biceps1: getRandomExercise(CwiczeniaNaBiceps,"Przód",3),
//         biceps2: getRandomExercise(CwiczeniaNaBiceps,"Przód",3),
//     },
//     {
//         name: "SPLIT",
//         day: 2,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//         name: "SPLIT",
//         day: 3,
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         barki1: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         barki2: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         triceps1: getRandomExercise(CwiczeniaNaTriceps ,"Długa",3),
//         triceps2: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//     },
//     {
//         name: "SPLIT",
//         day: 4,
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tylek: getRandomExercise(CwiczeniaNaNogi,"Tyłek",3),
//         nogi_ogolne: getRandomExercise(CwiczeniaNaNogi,"Ogólne",3),
//         nogi_tyl: getRandomExercise(CwiczeniaNaNogi,"Tył",3),
//         lydki: getRandomExercise(CwiczeniaNaNogi,"Łydki",3),
//         brzuch: getRandomExercise(CwiczeniaNaBrzuch,"Izometria",3),
//         nogi_przod: getRandomExercise(CwiczeniaNaNogi,"Przód",3),
//     },
//     {
//         name: "SPLIT",
//         day: 5,
//         plecy1: getRandomExercise(CwiczeniaNaPlecy,"Pionowe",3),
//         plecy2: getRandomExercise(CwiczeniaNaPlecy,"Poziome",3),
//         barki1: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         barki2: getRandomExercise(CwiczeniaNaBarki,"Przód",3),
//         triceps1: getRandomExercise(CwiczeniaNaTriceps ,"Długa",3),
//         triceps2: getRandomExercise(CwiczeniaNaTriceps,"Krótka",3),
//     },
// ];
