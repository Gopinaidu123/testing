var time =600; // 22 minutes in seconds
const Timedone = setInterval(function() {
    time = time -1;
    console.log(  parseInt(time/3600), ":",parseInt(time/60) , ":" , time % 60);
    document.getElementsByClassName("hours")[0].innerHTML = parseInt(time/3600) + " hr : ";
    document.getElementsByClassName( "minutes")[0].innerHTML = parseInt(time/60) + " min : ";
    document.getElementsByClassName("seconds")[0].innerHTML = time % 60 + " sec";
} , 1000);
 setTimeout(function() {
    if (time <= 0) {
        clearInterval(Timedone);
        document.querySelector(".card-parent").innerHTML = "<h1>Time is up!</h1>";
    }
}, 1000);
