var square = document.getElementById("square")
var blue = function() {
    document.getElementById("square").style.backgroundColor = "blue" ; 
}
var red = function() {
    document.getElementById("square").style.backgroundColor = "red" ; 
}

var yellow = function() {
    document.getElementById("square").style.backgroundColor = "yellow" ; 
}

var green = function() {
    document.getElementById("square").style.backgroundColor = "green" ; 
}

var orange =  function() {
    document.getElementById("square").style.backgroundColor = "orange" ; 
}
square.addEventListener("mouseover", blue) ;

square.addEventListener("mousedown", red) ; 

square.addEventListener("mouseup", yellow)

square.addEventListener("dblclick", green);

document.addEventListener("scroll", orange);


document.addEventListener("keydown", function(event){
    if(event.keyCode === 82){
        console.log("r was pushed");
        red();
    } 
    else if(event.keyCode === 66){
        console.log("b was pushed"); 
        blue();
    }
    else if(event.keyCode === 79){
        console.log("o was pushed"); 
        orange();
    }
    else if(event.keyCode === 71){
        console.log("g was pushed"); 
        green();
    }
    else if(event.keyCode === 89){
        console.log("y was pushed"); 
        yellow();
    }
})
