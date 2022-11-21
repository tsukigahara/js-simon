function cardGen() {
    var welcomeHTML = document.getElementById("welcomeID");
    welcomeHTML.classList.add("none");
    var contentHTML = document.getElementById("containerID");
    for (let i = 0; i < 5; i++){
        var number = Math.floor(Math.random()*10);
        var cardHTML = document.createElement("div");
        cardHTML.classList.add("mycard");
        cardHTML.setAttribute("id", "card-"+i);
        cardHTML.innerHTML = number;
        contentHTML.appendChild(cardHTML);
    }
    var timerboxHTML = document.getElementsByClassName("timerbox");
    timerboxHTML[0].classList.remove("none");
    timer(5);
    Check();
}

function timer(value) {
    var time = value;
    var timerHTML = document.getElementById("timerID");
    timerHTML.innerHTML = time;
    time--;
    counts = setInterval(function (){
        console.log(time);
        timerHTML.innerHTML = time;
        time--;
        if (time < 0){
            clearInterval(counts);
        }
    }, 1000);
}

function Check (){
    
}