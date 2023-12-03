
// Questions that will be asked
const Questions = [{
    q: "What is the name of the Island that Sora, and his friend's go to together?",
    a: [{ text: "Isles of Destiny", isCorrect: false },
    { text: "Destiny's Isle", isCorrect: false },
    { text: "Destiny Islands", isCorrect: true },
    { text: "Islands of Destiny", isCorrect: false }
    ]

},
{
    q: "Who are the two friends who accompany Sora on his journey?",
    a: [{ text: "Riku and Kairi", isCorrect: false, isSelected: false },
    { text: "Donald and Mickey", isCorrect: false },
    { text: "Goofy and Mickey", isCorrect: false },
    { text: "Donald and Goofy", isCorrect: true }
    ]

},
{
    q: "What is the name of the Sora's Keyblade?",
    a: [{ text: "Keyblade", isCorrect: false },
    { text: "Kingdom Hearts", isCorrect: false },
    { text: "Kingdom Key", isCorrect: true },
    { text: "Kingdom Keyblade", isCorrect: false }
    ]

},
{
    q: "How many Princesses of heart are there?",
    a: [{ text: "6", isCorrect: false },
    { text: "7", isCorrect: true },
    { text: "8", isCorrect: false },
    { text: "9", isCorrect: false }
    ]

},
{
    q: "What is the name of the kind of enemies Sora and his friends fight on their first journey?",
    a: [{ text: "Heartless", isCorrect: true },
    { text: "Darkness", isCorrect: false },
    { text: "Shadow", isCorrect: false },
    { text: "Darkside", isCorrect: false }
    ]

},
{
    q: "Who is the final boss of Sora and his friends first adventure?",
    a: [{ text: "Ansem the wise", isCorrect: false },
    { text: "Ansem the evil", isCorrect: false },
    { text: "Ansem the heartless", isCorrect: false },
    { text: "Ansem seeker of darkness", isCorrect: true }
    ]

},
{
    q: "What castle did Sora and his friends stumble upon after their first adventure?",
    a: [{ text: "Castle of Darkness", isCorrect: false },
    { text: "Castle Oblivion", isCorrect: true },
    { text: "Disney Castle", isCorrect: false },
    { text: "Castle of Destiny", isCorrect: false }
    ]

},
{
    q: "What is the name of the town where Sora and his friends reawaken from their nap?",
    a: [{ text: "Town of light", isCorrect: false },
    { text: "Twilight Town", isCorrect: true },
    { text: "Town of Destiny", isCorrect: false },
    { text: "Disney Town", isCorrect: false }
    ]

},
{
    q: "What is the name of Mickey's teacher?",
    a: [{ text: "Master Dis Ney", isCorrect: false },
    { text: "Master Dat Ney", isCorrect: false },
    { text: "Master Yen Sid", isCorrect: true },
    { text: "Master Ansem", isCorrect: false }
    ]

},
{
    q: "What is the name of the type of enemies Sora and his friends face in their second adventure?",
    a: [{ text: "Somebodies", isCorrect: false },
    { text: "Nobodies", isCorrect: true },
    { text: "Anybodies", isCorrect: false },
    { text: "Darkness", isCorrect: false }
    ]

},
{
    q: "What is the name of the group that Sora and his friends must defeat in their second adventure?",
    a: [{ text: "Darkness", isCorrect: false },
    { text: "XIII Darknesses", isCorrect: false },
    { text: "The 13th Orginization", isCorrect: false },
    { text: "Orginazation XIII", isCorrect: true }
    ]

    },
    {
        q: "Who is the final boss of Sora's second adventure?",
        a: [{ text: "Ansem", isCorrect: false },
        { text: "Xemnas", isCorrect: true },
        { text: "NoHeart", isCorrect: false },
        { text: "Xehanort", isCorrect: false }
        ]

    },
    {
        q: "What is the name of Sora's other",
        a: [{ text: "Ventus", isCorrect: false },
        { text: "Xion", isCorrect: false },
        { text: "Roxas", isCorrect: true },
        { text: "Vanitas", isCorrect: false }
        ]

    }

]

let currQuestion = 0
let score = 0

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}