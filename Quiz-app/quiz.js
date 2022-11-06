const quizData = [{    //quiz Data
        question: "What was Meta Platforms Inc formerly known as?",
        a: 'Oracle',
        b: 'Facebook',
        c: 'Twitter',
        d: 'Twitch',
        correct: "b"
    },

    {
        question: "In 1768, Captain James Cook set out to explore which ocean?",
        a: 'Pacific Ocean',
        b: 'Atlantic Ocean',
        c: 'Indian Ocean',
        d: 'Arctic Ocean',
        correct: 'a'
    },

    {
        question: "What is actually electricity?",
        a: 'A flow of water',
        b: 'A flow of air',
        c: 'A flow of electrons',
        d: 'A flow of atoms',
        correct: 'c'
    },

    {
        question: "Which of the following is not an international organisation?",
        a: ' FIFA',
        b: 'NATO',
        c: 'ASEAN',
        d: 'FBI',
        correct: 'd'
    },

    {
        question: "What is the speed of sound?",
        a: '120 km/h',
        b: '1,200 km/h',
        c: '400 km/h',
        d: '700 km/h',
        correct: 'd'
    },

    {
        question: "In total, how many novels were written by the Bronte sisters?",
        a: '4',
        b: '5',
        c: '6',
        d: '7',
        correct: 'd'
    }
]


//assign question and possible answes to variables using jQuery
const question = $("#question");
a_text = $("#a_text"); 
b_text = $("#b_text");
c_text = $("#c_text");
d_text = $("#d_text");
const submitBtn = $("#submit");
//let answer = undefined;
const quiz = document.getElementById("quiz");




let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAns(); //deselect the dot from the questions

    currentQuizData = quizData[currentQuiz];//assign html text to variables
    $(question).text(currentQuizData.question);
    $(a_text).text(currentQuizData.a);
    $(b_text).text(currentQuizData.b);
    $(c_text).text(currentQuizData.c);
    $(d_text).text(currentQuizData.d);

    // const quiz = $(quiz);

}


function getSelected() {
    let answerEls = $('.answer:checked'); // checks if the answer is checked
    let answer = undefined;
    var retval = [];
    answerEls.each(function () {                             
        retval.push($(this).attr('id')); //loops through the ids of the class answer and assigns them to the retval array. checks which answer is selected and then assigns it to answer  
        if (answerEls) {                
            answer = Object.assign(retval);// the var answer is an Object so we will transform it to an array using Object.assign. Last but not least! we will transform the var answer to String because it must be the same type as the correct answers.
			
			
            answer = retval.toString();


        }
    });
    return answer;
}



function deselectAns() {
    $(document).ready(function () {
        $(".answer").each(function () {
            $(this).prop('checked', false);
        });
    });;

    /*
    deselects the answers

    */
}





$(submitBtn).on('click', function () {

    const answer = getSelected();
   // console.log(answer);




    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
        `;
        }
           
        };
    



});





