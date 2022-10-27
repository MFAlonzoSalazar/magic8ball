let answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don’t count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
  ];

let answer = document.getElementById("answers");
let answerTriangle = document.getElementById("triangle");
let eightBall = document.getElementById("eight-ball");
let askButton = document.getElementById("ask");
let inputField = document.getElementById("question");

askButton.onclick = function(event) {
    inputField.value;
    if(inputField.value.length > 10) {
        askButton.setAttribute('disabled', true);
        event.preventDefault();
        console.log('in here');
        eightBall.classList.add('animate-shake');
        answerTriangle.classList.add('fade-out');
        
        setTimeout(() => {
            let randomAnswer = Math.floor(Math.random()*20);
            answer.innerText = answers[randomAnswer];
            answerTriangle.classList.remove('fade-out');
        }, 2000);
        
        setTimeout(() => {
            answerTriangle.classList.add('fade-in');
        }, 2000);
        
        setTimeout(() => {
            answerTriangle.classList.remove('fade-in');
            eightBall.classList.remove('animate-shake');
            askButton.removeAttribute('disabled');
        }, 3000);
    } else if (inputField.value.length === 0) {
        alert("You havent entered a question");
    } else {
        alert("That wasn't a long enough question, please ask a longer question");
    }
}



