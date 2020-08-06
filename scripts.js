
//Declare reusable global variables
var yourScore = 0;
var i=0;
//var refTime = 10;

// Array for ALL Questions called questionBank
var questionBank = [
    {question : "What does Timon say grubs taste like??",
    choices : ["Heaven","Steak","Candy","Chicken"],
    answer: "Chicken"}
    ,
    {question : "What area is Simba specifically forbidden from going to?",
    choices : ["The Elephant Graveyard","Rafiki's Tree","The Cheetah Hunting Ground","The Watering Hole"],
    answer: "The Elephant Graveyard"}
    ,
    {question : "What does Hakuna Matata mean?",
    choices : ["Return Home","Family First","No worries","Just Relax"],
    answer: "No worries"}
    ,
    {question : "What kind of animal is Timon?",
    choices : ["Gopher","Meerkat","Rat","Spider Monkey"],
    answer: "Meerkat"}
    ,
    {question : "What does Timon think stars are?",
    choices : ["Balls of gas burning millions of miles away","The Great Kings of the Past","Heaven","Fireflies that got stuck in the big blueish black thing"],
    answer: "Fireflies that got stuck in the big blueish black thing"}
    ,
    {question : "The first major character to appear on screen is...",
    choices : ["Mufasa","Sarabi","Zazu","Rafiki"],
    answer: "Zazu"}
    ,
    {question : "What kind of animal is Zazu?",
    choices : ["Hornbill","Tucan","Parrot","Macaw"],
    answer: "Hornbill"}
    ,
    {question : "WHAT DOES 'SIMBA' MEAN IN SWAHILI?",
    choices : ["Lion","King","Cub","Heir"],
    answer: "Lion"}
    ,
    {question : "What are Mufasa's last words?",
    choices : ["Run, Simba! Run!","You must!","Avengeme, my son","Scar, Brother, help me!"],
    answer: "Scar, Brother, help me!"}
    ,
    {question : "Which of these species is NOT present in the opening scene?",
    choices : ["African Buffalo","Aardvark","Zabra","Wildebeast"],
    answer: "Aardvark"}
    ,
    {question : "Who is the last new character introduced in the film?",
    choices : ["Simba and Nala's daughter","Simba's brother","Nala's brother","Simba and Nala's son"],
    answer: "Simba and Nala's daughter"}
    ,
    {question : "What song do Nala and Simba fall in love to?",
    choices : ["Love is in the air","Can you feel the love tonight","Tonight we love each other","At last we find love"],
    answer: "Can you feel the love tonight"}
    ,
    {question : "What is Nala's mother's name?",
    choices : ["Savanna","Sarafina","Zira","Kiara"],
    answer: "Sarafina"}
    ,
    {question : "Which character speaks to Simba right before he becomes king?",
    choices : ["Nobody","Rafiki","Nala","Zazu"],
    answer: "Rafiki"}
    ,
    {question : "What insect is Pumba chasing when he gets separated from Timon?",
    choices : ["Ant","Centipede","Beetle","Dragonfly"],
    answer: "Beetle"}
    ,
    {question : "How many of the hyenas fall into thorn bushes while chasing Simba out of the Pridelands?",
    choices : ["All of them","Two","One","None!"],
    answer: "One"}
    ,
    {question : "What does Scar say while he strikes Simba's mother?",
    choices : ["I'll not suffer fools like you!","I'm ten times the king Mufasa was!","You're just like Mufasa. Useless!","You will hunt or you will die!"],
    answer: "I'm ten times the king Mufasa was!"}
    ,
    {question : "How many times does it rain in the movie?",
    choices : ["Once","Twice","Thrice","Four Times"],
    answer: "Twice"}
    ,
    {question : "What type of animal is Rafiki?",
    choices : ["Baboon","Mandrill","Tamarin","Spider Monkey"],
    answer: "Mandrill"}
    ,
    {question : "What is Simba's mother's name?",
    choices : ["Sarabi","Uru","Zuza","Shenzi"],
    answer: "Sarabi"}
    ,
    {question : "WHAT KIND OF ANIMAL IS INVOLVED IN THAT TERRIBLE STAMPEDE?",
    choices : ["Buffalo","Antelope","Wildebeest","Zebra"],
    answer: "Wildebeest"}
    ,
    {question : "FINISH THE LYRICS: I'VE NEVER SEEN A KING OF BEASTS WITH QUITE SO...",
    choices : ["Many piglets","Small a mane","Little hair","Many claws"],
    answer: "Little hair"}
    
]

//----Fisher Yates Randomizer- special function that reliably randomizes arrays found on internet---//
//Ref: https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/---//
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//Using shuffle randomizer to randomize QuestionBank objects using Fisher Yates Randomizer
var random10Test = shuffle(questionBank);

//Choosing 11 Questions from randomized Question Array
random10Test = random10Test.slice(0, 11);

//Countown timer function
var refTime = 60;
function countDownTime() {
    if (refTime < 0) {
        toDashboard()
    }  else {
        setTimeout(function(){countDownTime();}, 1000);
        $('#clock-timer').text(refTime);
        refTime--; 
    }
} 

function toDashboard () {
    location.replace('reportDashboard.html');    
    event.preventDefault()
}
//Function that display the hidden question on each page to pass page validation
function firstQuestion() { 
    countDownTime()
     $('#question-area').text(random10Test[0].question);
     $('#option-area-1').val(random10Test[0].choices[0]);
     $('#option-area-2').val(random10Test[0].choices[1]);
     $('#option-area-3').val(random10Test[0].choices[2]);
     $('#option-area-4').val(random10Test[0].choices[3]);
     clickEffect();
     newQuestion();
     }

//To display only 10 randomized questions each time but 11th in the array hidden 
//in the main pages for validation
firstQuestion();

function newQuestion(){
    if( i === 10)
    {    
    location.replace('reportDashboard.html');
    event.preventDefault();    
    } else {
     $('#question-area').text(random10Test[i+1].question);
     $('#option-area-1').val(random10Test[i+1].choices[0]);
     $('#option-area-2').val(random10Test[i+1].choices[1]);
     $('#option-area-3').val(random10Test[i+1].choices[2]);
     $('#option-area-4').val(random10Test[i+1].choices[3]);
     resetAnswer();
    i++;
}}

//Function that resets the previous styling done after chosing and answer
function resetAnswer() {
    $('.checkbox').prop('checked', false);
    $('.form-control').css('background-color', '#e9ecef');    
}

//Function that calls test Condition function when clicked
function clickEffect() {
document.getElementById('check1').addEventListener('click', testConditions);
document.getElementById('check2').addEventListener('click', testConditions);
document.getElementById('check3').addEventListener('click', testConditions);
document.getElementById('check4').addEventListener('click', testConditions); 
}   

//Function that test if a test gets the answer correct or wrong, updates
//the score count and penalizes the tester with -2 points if he gets a question wrong
function testConditions() {console.log(yourScore)
    event.preventDefault()
    //Reads the question text and allocates it the name 'whichQuestion       
    whichQuestion = $(this).parent().parent().parent().siblings('.containerParent')
    .children().children().children('.question-area').text();
    //Finds question text that matches 'whichQuestion' text in the array and call it 'answerTest'
    var answerTest = random10Test.find(({question}) => question === whichQuestion);
    //Queries the answer to 'answerTest' above and record it as 'actualAnswer'
    actualAnswer = answerTest.answer;
    //Checks the answer chosen and record 'chosenAnswer'
    chosenAnswer = $(this).children().siblings('.form-control').val();
    //Test correct/wrong answer, increase score if correct or punish by removing seconds if wrong,
    //updates it in local storage and style the answer section appropriately. Move to newQuestion 
    //function after 94secs/ Fastest dual click time recorded is around 93ms.
    if (chosenAnswer === actualAnswer) {
        event.preventDefault()
        yourScore++;
        localStorage.setItem('Your Score', yourScore);
        $(this).children().children().children('.checkbox').prop('checked', true);
        $(this).children().siblings('.form-control').css('background-color', 'green');
        setTimeout(function(){newQuestion()},94); 
    }else {
        event.preventDefault()
        yourScore;
        localStorage.setItem('Your Score', yourScore);
        refTime = refTime-5;
        $(this).children().children().children('.checkbox').prop('checked', true);
        $(this).children().siblings('.form-control').css('background-color', 'red');
        setTimeout(function(){newQuestion()},94); 
    }     
 }
 
//Retrieve score count from local storage and push it to the html page 
totalScore = localStorage.getItem('Your Score');
$('#yourScore').text(totalScore);

//Fuction that starts the Quiz.
startQuiz();

//Button Function to present 'Dashboard' elements and hide 'Completetion'
//Add the last recorded score count to local storage and run the function 
//that adds new array.
function displayReport() {
    $('.completion').hide();
    $('.dashboard').show();
    scoreDash = localStorage.getItem('Your Score') ; 
    var namePlayer = $('.submit-button').siblings().val();
    namePlayer = namePlayer.toUpperCase();
    if ((scoreDash != null)||(namePlayer != null)) {
    event.preventDefault()
    addNewArray();
    $('#yourDash').text(scoreDash);
    $('#player-name').text(namePlayer + ','); 
    } else {
        location.replace('index.html');
    }
};

//Button Function to Start Again or Return.
  $('#try-again').click(function(){ 
    event.preventDefault();
    location.replace('index.html');
  });

//Function that clears the HTML elements that present the score list. 
//without clearing the local storage.
  $('#reset-scoresheet').click(function(){
    $('thead').remove();
    $('tr').remove();
    $('th').remove();
    localStorage.clear();
  });  

//Function that moves user to exam page on clicking 'Start' Button.
function startQuiz() {
    $('#start-button').on('click', function() {
        location.replace('exampg.html');               
    })}

//Function that Manages the Score Board with data updated on local storage.  
    function addNewArray () {
        event.preventDefault();
        //Read a player name as entered & Final recorded score from Local Storage.
        var namePlayer = $('.submit-button').siblings().val();
        namePlayer = namePlayer.toUpperCase();
        scoreDash = localStorage.getItem('Your Score');
        var scoreList = [];
        var thisPlayer = {
            Name: namePlayer,
            Score: scoreDash  
        };
        //Add the name and score to the score array and call the array scoreList
        scoreList.push(thisPlayer);
        scoreList = scoreList.concat(JSON.parse(localStorage.getItem('scoreList')|| '[]'));
        (((scoreList[0].Name)==="") || (scoreList[0].Score) === null || undefined); 
        //Ensure result is NOT added to Array when either name or score are null or undefined 
        //But ONLY added when both values are defined. If NOT, force the user to restart the test           
        if (((scoreList[0].Name)==="")||(scoreList[0].Score) === null || undefined) {
            location.replace('index.html');
        } else {
        localStorage.setItem('scoreList', JSON.stringify(scoreList));
        }
        //Read the array from local storage, clear the local storage, truncate the array to lenght of 6 
        //only and write it back to the local storage for reuse.
        scoreList = JSON.parse(localStorage.getItem('scoreList'));
        localStorage.clear();
        console.log(scoreList = scoreList.slice(0,6));
        localStorage.setItem('scoreList', JSON.stringify(scoreList));
        scoreList = JSON.parse(localStorage.getItem('scoreList'));
        console.log(scoreList[0].Score);
        console.log(scoreList[0].Name + ' : ' + scoreList[0].Score);         
        //FUnction to sort Array in Ascending order
        console.log(scoreList);
        insertTable();        
    };

//Function that dynamically inserts the table of scorers
function insertTable() {
    scoreList = JSON.parse(localStorage.getItem('scoreList'));
    scoreList = scoreList.sort((a, b) => parseFloat(b.Score) - parseFloat(a.Score));
        $('#scoreDashboard').append('<thead><tr><th scope="col-9">S/N</th><th scope="col">Name</th><th scope="col">Score</th></tr></thead><tbody>');
          for (var i = 0; i < scoreList.length; i++) {         
        $('#scoreDashboard').append('<tr><th scope="col-9">' + (i+1) + '</th><td>' + scoreList[i].Name+ '</td><td>' + scoreList[i].Score + '</td></tr>');
        }
    $('#scoreDashboard').children().append('</tbody>');    
}




    


