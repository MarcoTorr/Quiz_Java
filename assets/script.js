var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start");
var questionsEl1= document.querySelector("#Questions");
var ParagraphEl= document.querySelector("#intro");
var answersEl = document.querySelector("#List_Answers");
var answersEl1= document.querySelector("#Answer_1");
var answersEl2= document.querySelector("#Answer_2");
var answersEl3= document.querySelector("#Answer_3");
var answersEl4= document.querySelector("#Answer_4");
var results= document.querySelector("#results");
var viewHighscores = document.querySelector("#highscores");
var divList= document.querySelector("#Answers");
var List1= document.querySelector("#List1");
var List2= document.querySelector("#List2");
var List3= document.querySelector("#List3");
var List4= document.querySelector("#List4");


var pass;
var fails;
var timer;
var timerCount;
var rightCounter = 0;
var wrongCounter = 0;
var finalRights =0;
var finalWrongs =0;
var inputName = "";
var isFinish = false;
var i=0;

var questions = ["What does HTML stand for?","<p> is used to create a:", "Attribute that is used to round the border of an element:", "It is a programming API for HTML and XML documents:", "What is CSS used for?"];
var answers1 = ["HiThereMyLove","HitTheMudLow","HyperTextMarkupLanguage","HolaTioMiLoco"];
var rightanswer1 = "HyperTextMarkupLanguage";
var answers2 = ["Pokemon","Button","Pile","Paragraph"];
var rightanswer2 = "Paragraph";
var answers3 = ["Border-radius","Margin","Padding","Round-element"];
var rightanswer3 = "Border-radius";
var answers4 = ["RAM","DOM","CSS","RAT"];
var rightanswer4 = "DOM";
var answers5 = ["Apply styles and layout","Create and organize content of a webpage","Create a dynamic and interactive experience for the user","It has no use" ]
var rightanswer5 = "Apply styles and layout";

function init() {
    getRights();
    getWrongs();
    getName();
}

function startQuiz() {
    timerCount = 60;
    startButton.disabled = true;
    startButton.style.display="none";
    ParagraphEl.textContent= ("");
    
 
  
    renderQuestion()
    renderAnswers()
    startTimer()
} 


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isFinish && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          highscore();
          answersEl1.textContent = "";
          answersEl2.textContent = "";
          answersEl3.textContent = "";
          answersEl4.textContent = "";
          questionsEl1.textContent = "";
          results.textContent= "You have finished!";
          
        }
      }
      // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        answersEl1.textContent = "";
        answersEl2.textContent = "";
        answersEl3.textContent = "";
        answersEl4.textContent = "";
        questionsEl1.textContent = "";
        results.textContent= "Time is up!";
        highscore();
      }
    }, 1000);
}
function highscore(){
    var confirmHighscore= confirm("Do you want to save your highscore?");
    
    if (confirmHighscore ===true){
        var inputName= prompt("Please enter your name");  
        localStorage.setItem("name",inputName);  
        setFinalScore();
    } else{
        //lastinputName = newinputName;
    }
}
function renderQuestion() {
    
    questionsEl1.textContent = questions[i];
    //questionsEl1.setAttribute=("style","text-align:left; font-size:25 px;");
    
}


function renderAnswers() {
    
    if (i=== 0){
        var shuffleAnswers1=answers1.sort((a, b) => 0.5 - Math.random());
        answersEl1.textContent = shuffleAnswers1[0];
        answersEl2.textContent = shuffleAnswers1[1];
        answersEl3.textContent = shuffleAnswers1[2];
        answersEl4.textContent = shuffleAnswers1[3];
    } else if (i===1){
        var shuffleAnswers2=answers2.sort((a, b) => 0.5 - Math.random());
        answersEl1.textContent = shuffleAnswers2[0];
        answersEl2.textContent = shuffleAnswers2[1];
        answersEl3.textContent = shuffleAnswers2[2];
        answersEl4.textContent = shuffleAnswers2[3];
    } else if (i===2){
        var shuffleAnswers3=answers3.sort((a, b) => 0.5 - Math.random());
        answersEl1.textContent = shuffleAnswers3[0];
        answersEl2.textContent = shuffleAnswers3[1];
        answersEl3.textContent = shuffleAnswers3[2];
        answersEl4.textContent = shuffleAnswers3[3];
    } else if (i===3){
        var shuffleAnswers4=answers4.sort((a, b) => 0.5 - Math.random());
        answersEl1.textContent = shuffleAnswers4[0];
        answersEl2.textContent = shuffleAnswers4[1];
        answersEl3.textContent = shuffleAnswers4[2];
        answersEl4.textContent = shuffleAnswers4[3];
    }else if (i===4){
        var shuffleAnswers5=answers5.sort((a, b) => 0.5 - Math.random());
        answersEl1.textContent = shuffleAnswers5[0];
        answersEl2.textContent = shuffleAnswers5[1];
        answersEl3.textContent = shuffleAnswers5[2];
        answersEl4.textContent = shuffleAnswers5[3];
    }

}

answersEl1.addEventListener("click",function(){
    if (i=== 0){
        if (answersEl1.textContent == rightanswer1){
            rightCounter++;
            results.textContent= "Right";
            i++;
            renderQuestion();
            renderAnswers();
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++ ; 
            i++;
            renderQuestion();
            renderAnswers();  
        }
    } else if (i===1){
        if (answersEl1.textContent == rightanswer2){
            rightCounter++;
            results.textContent= "Right";
            i++;
            renderQuestion();
            renderAnswers();  
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++ ;
            i++;
            renderQuestion();
            renderAnswers();  
        } 
    } else if (i===2){
        if (answersEl1.textContent == rightanswer3){
            rightCounter++;
            results.textContent= "Right";
            i++;
            renderQuestion();
            renderAnswers();  
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++ ;
            i++;
            renderQuestion();
            renderAnswers();     
        }
    } else if (i===3){
        if (answersEl1.textContent == rightanswer4){
            rightCounter++;
            results.textContent= "Right";
            i++;
            renderQuestion();
            renderAnswers();  
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++;
            i++;
            renderQuestion();
            renderAnswers();      
        }
    } else {
        if (answersEl1.textContent == rightanswer5){
            rightCounter++;
            results.textContent= "Right";
            i++;
            renderQuestion();
            renderAnswers();  
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++;
            i++;
            renderQuestion();
            renderAnswers();      
        }
    } 
    setscore();
    checkFinish();  
});

answersEl2.addEventListener("click",function(){
    if (i=== 0){
        if (answersEl2.textContent == rightanswer1){
            rightCounter++;
            i++;
            renderQuestion();
            renderAnswers();  
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++;
            i++;
            renderQuestion();
            renderAnswers();      
        }
    } else if (i===1){
        if (answersEl2.textContent == rightanswer2){
            rightCounter++;
            results.textContent= "Right";
            i++;
            renderQuestion();
            renderAnswers();  
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++ ;
            i++;
            renderQuestion();
            renderAnswers();     
        } 
    } else if (i===2){
        if (answersEl2.textContent == rightanswer3){
            rightCounter++;
            i++;
            renderQuestion();
            renderAnswers();  
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++ ;
            i++;
            renderQuestion();
            renderAnswers();     
        }
    } else if (i===3){
        if (answersEl2.textContent == rightanswer4){
            rightCounter++;
            results.textContent= "Right";
            i++;
            renderQuestion();
            renderAnswers();  
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++ ;
            i++;
            renderQuestion();
            renderAnswers();     
        }
    } else {
        if (answersEl2.textContent == rightanswer5){
            rightCounter++;
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++ ;
            i++;
            renderQuestion();
            renderAnswers();     
        }
    }  
    setscore();
    checkFinish; 
});

answersEl3.addEventListener("click",function(){
    if (i=== 0){
        if (answersEl3.textContent == rightanswer1){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();  
    } else if (i===1){
        if (answersEl3.textContent == rightanswer2){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();   
    } else if (i===2){
        if (answersEl3.textContent == rightanswer3){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();  
    } else if (i===3){
        if (answersEl3.textContent == rightanswer4){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();  
    } else {
        if (answersEl3.textContent == rightanswer5){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();  
    }   
    setscore();
    checkFinish();
});

answersEl4.addEventListener("click",function(){
    if (i=== 0){
        if (answersEl4.textContent == rightanswer1){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();  
    } else if (i===1){
        if (answersEl4.textContent == rightanswer2){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();   
    } else if (i===2){
        if (answersEl4.textContent == rightanswer3){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();  
    } else if (i===3){
        if (answersEl4.textContent == rightanswer4){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();  
    } else {
        if (answersEl4.textContent == rightanswer5){
            rightCounter++
            results.textContent= "Right";
        } else {
            timerdecrease()
            results.textContent= "Wrong";
            wrongCounter++    
        }
        i++;
        renderQuestion();
        renderAnswers();  
    }
    setscore();
    checkFinish();   
});

function timerdecrease(){
    timerCount = timerCount - 10;
}
function setscore() {
    localStorage.setItem("rightCount", rightCounter);
    localStorage.setItem("wrongCount", wrongCounter)
}
function setFinalScore(){
    localStorage.setItem("finalRights",rightCounter)
    localStorage.setItem("finalWrongs",wrongCounter)
}

function getRights() {
    var storedRights = localStorage.getItem("finalRights");
    if (storedRights === null) {
      finalRights = 0;
    } else {
      finalRights = storedRights;
    }
}
  
function getWrongs() {
    var storedWrongs = localStorage.getItem("finalWrongs");
    if (storedWrongs === null) {
      finalWrongs = 0;
    } else {
      finalWrongs = storedWrongs;
    }
}

function getName() {
    var storedName = localStorage.getItem("name");
    if (storedName === null) {
      inputName = "";
    } else {
      inputName = storedName;
    }
}
  
function checkFinish() {
    var both = (Number(wrongCounter)+Number(rightCounter));
    if (both === 5) {
      isFinish = true;
    }else {
        isFinish= false;
    }

}
init();

viewHighscores.addEventListener("click",function(){
   
    var show = confirm("The last highschore is from:"+ inputName +"     "+ "Right answers: "+ finalRights +"    "+ "Wrong answers: "+ finalWrongs);
});
startButton.addEventListener("click", startQuiz);

startButton.addEventListener("click",function(){
    startQuiz();
    List1.style.display="block";
    List2.style.display="block";
    List3.style.display="block";
    List4.style.display="block";
    divList.style.display="block";
});