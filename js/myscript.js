//when pressed start button
function main() {
    //hide welcome page
    var welcomeHTML = document.getElementById("welcomeID");
    welcomeHTML.classList.add("none");

    //run cardgen (value for card quantity)
    cardGen(5);

    //show timer
    var timerboxHTML = document.getElementsByClassName("timerbox");
    timerboxHTML[0].classList.remove("none");
    //run timer (value for time countdown starts)
    //this function includes also check() for check user input
    timer(5);
}

//CARD GEN//////////////////////////////////////////////////

function cardGen(value) {
    //get container
    var contentHTML = document.getElementById("containerID");

    //create cards
    for (let i = 0; i < value; i++){
        //gen random numbers
        var number = Math.floor(Math.random()*10);
        //add classes
        var cardHTML = document.createElement("div");
        cardHTML.classList.add("mycard");
        cardHTML.setAttribute("id", "card-"+i);

        //set number
        cardHTML.innerHTML = number;

        //append cards to container
        contentHTML.append(cardHTML);
    }
}

//TIMER//////////////////////////////////////////////////

function timer(value) {

    //initial time for countdown
    var time = value;

    //insert time to timerbox
    var timerHTML = document.getElementById("timerID");
    timerHTML.innerHTML = time;
    
    //decrement time
    time--;

    //countdown
    var counts = setInterval(function (){
        console.log(time);
        timerHTML.innerHTML = time;
        time--;
        //stop countdown when reaches 0
        if (time < 0){
            clearInterval(counts);
            inputPageGen(5);
        }
    }, 1000);
}

//INPUTPAGE GEN//////////////////////////////////////////////////

function inputPageGen (value){
    //hide timerbox
    var timerboxHTML = document.getElementsByClassName("timerbox");
    timerboxHTML[0].classList.add("none");
    //show bottonbox
    var buttonboxHTML = document.getElementById("buttonboxID");
    buttonboxHTML.classList.remove("none");
    //array for card generated number
    var cardContent = [];

    for (let i = 0; i < value; i++){
        //insert each card number to array
        var cardHTML = document.getElementById("card-"+i);
        cardContent[i] = cardHTML.innerHTML;

        //delete card innerhtml
        cardHTML.innerHTML = "";

        //create input tag in card innerhtml
        var inputHTML = document.createElement("input")
        inputHTML.setAttribute("type", "text");

        //set id on each input tags
        inputHTML.setAttribute("id", "input-"+i);
        inputHTML.setAttribute("maxlength", "1");

        //append to input tags into card innerhtml
        cardHTML.append(inputHTML);
    }
    //when clicked check run check()
    var button = document.getElementById("buttonID");
    button.addEventListener("click", function(){ check(cardContent, value); }); //<<< value for generated card number
}

//CHECK GEN//////////////////////////////////////////////////

function check(array, value){
    console.log(array);

    //create array of user input values
    var input = [];
    for(let i = 0; i< value; i++){
        input[i] = document.getElementById("input-"+i).value;
    }
    console.log(input);

    //check if user input values correspond to generated card numbers
    for(let i = 0; i< value; i++){

        if(input[i] === array[i]){
            //change card backgr color
            var card = document.getElementById("card-"+i);
            card.classList.add("bg-success");
        }

        if(input[i] !== array[i])  {
            //change card backgr color
            var card = document.getElementById("card-"+i);
            card.classList.add("bg-danger");
        }
    }
}