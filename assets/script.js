// time interval
var counter = 30
var countdown = function(){
    console.log(counter);
    counter--;
    if (counter === 0){
        console.log("rip");
        clearInterval (startCountdown);
    };
};

var startCountdown = setInterval(countdown, 3000);