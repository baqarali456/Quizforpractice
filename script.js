let json = [
    {
        questionNo: "What is your Prime Minister",
        mcq: [
            {
                option: "Narendra modi", answer: true,
            },
            {
                option: "Akhilesh Yadav", answer: false
            },
            { option: "Rahul Gandhi", answer: false },
            { option: "Yogi Adityanath", answer: false },

        ]
    },
    {
        questionNo: "What is the capital of India",
        mcq: [

            { option: "Mumbai", answer: false },
            { option: "Delhi", answer: true },
            { option: "Bangalore", answer: false },
            { option: "Kolkata", answer: false },

        ]
    },
    {
        questionNo: "Who was the first Prime Minister of India?",
        mcq: [
            {
                option: "Indira Gandhi", answer: false
            },
            { option: "Narendra Modi", answer: false },
            { option: "Jawaharlal Nehru", answer: true },
            { option: "Rajiv Gandhi", answer: false },

        ]
    },
    {
        questionNo: "Who is Sachin Tendulkar?",
        mcq: [
            {
                option: "Indian Hockey player", answer: false
            },
            { option: "Indian Cricketer", answer: true },
            { option: "Indian Kabaddi player", answer: false },
            { option: "Indian Kabaddi player", answer: false },

        ]
    },
];

const question = document.getElementById('question');
const answers_list = document.querySelector('.answers-list')


const next_btn = document.getElementById('next-btn');

let index = 0;
let str = "";

function showMcq(index) {
    question.innerHTML = `${index + 1}-${json[index].questionNo}`;
    let options = json[index].mcq;
    str = "";
    options.forEach((ele) => {
        str += `
    <div class="answers">${ele.option} <img src=${ele.answer?'./check.png':'./no.png'} alt=""></div>
    `
    })
    answers_list.innerHTML = str;
    if(index == json.length - 1){
        next_btn.innerHTML = "Restart"
    }
    
}
showMcq(0);




next_btn.addEventListener('click', function (e) {
    if(e.target.innerHTML == "Next"){
        if (index < json.length - 1) {
            index++;
            showMcq(index);
        }
        
    }
    else if(e.target.innerHTML == "Restart"){
         index = 0;
         showMcq(index);
         e.target.innerHTML = "Next"
    } 
});

answers_list.addEventListener('click',(e)=>{
  if(e.target.classList.contains('answers')){
    document.querySelectorAll('img').forEach(ele=>{
        ele.classList.add('active');
    });
  }
});







