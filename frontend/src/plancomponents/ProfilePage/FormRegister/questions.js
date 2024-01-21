export const objektque = [
   
    {
        question: "Jaka jest twoja waga?(w kilogramach)",
        nameid: "weight",
        answers : "number"
    },
    {
        question: "Jaka jest twoja waga docelowa?(w kilogramach)",
        nameid: "weightGoal",
        answers : "number"
    },
    {
        question: "Jaki jest twoj wzrost?(w centymetrach)",
        nameid: "height",
        answers : "number"
    },
    {
        question: "Jaki jest twoj wiek?",
        nameid: "age",
        answers : "number"
    },
    {
        question: "Jaka jest twoja płeć?",
        nameid: "gender",
        answers : [
            "kobieta",
            "mezczyzna"
        ],
        values : [
            "0", //kobieta
            "1" //mezczyzna
        ]
    },
    {
        question: "Jaki jest twoj cel?",
        nameid: "objective",
        name: "cel",
        answers : [
            "Redukcja",
            "Masa",
            "Siła"
        ],
        values : [
            "0", //redukcja
            "1", //masa
            "2" //siła
        ]
    },
    {
        question: "Jaki jest twoj stopien zaawansowania?",
        nameid: "level",
        name: "stopień zaawansowania",
        answers : [
             "Początkujacy",
             "Średniozaawansowany",
             "Zaawansowany"
        ],
        values : [
            "0", // początkujacy
            "1", // średniozaawansowany
            "2" // Zaawansowany
        ]
    },
    {
        question: "Ile dni w tygodniu chcesz trenowac?",
        nameid: "days",
        name: "dni treningowe",
        answers : [
             "2",
             "3",
             "4",
             "5"
        ]
    },
    {
        question: "Ile czasu masz na trening?",
        nameid: "time",
        name: "czas na trening",
        answers : [
             "do 60 minut",
             "do 90 minut",
             "Bez ograniczenia"
        ],
        values : [
            "0", // do 60 minut
            "1", // do 90 minut
            "2" // Bez ograniczenia
        ]
    },
    {
        question: "Jaka masz aktywnosc pozatreningowa?",
        nameid: "activity",
        name: "aktywność pozatreningowa",
        answers : [
             "praca siedząca, brak innych treningów, spacery tylko w wypadku potrzeb",
             "umiarkowana aktywność, kilka razy spacer w tygodniu",
             "duża aktywność, dodatkowe treningi, duża liczba spacerów"
        ]
        ,
        values : [
            "0", // praca siedząca
            "1", // umiarkowana aktywność
            "2" // duża aktywność
        ]
    },
    {
        question: "Czy chcesz miec priorytet na jakas czesc ciala?",
        nameid: "priority",
        name: "priorytet",
        answers : [
             "Nie",
             "Klatka",
             "Plecy",
             "Barki",
             "Ramiona",
             "Nogi",
             "Tyłek"
        ],
        values : [
            "0", //nie
            "1", //plecy
            "2", //barki
            "3", //ramiona
            "4", //nogi
            "5", //tyłek
            "6" //klatka
        ]
    },
];