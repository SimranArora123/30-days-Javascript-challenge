var numberofbutton=document.querySelectorAll(".button").length;
for(var j=0;j<numberofbutton;j++){
    document.querySelectorAll(".button")[j].addEventListener("click",function(){
        var buttonStyle=this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}
//adding keypress function which will describe  what will happen when a particular key is clicked
document.addEventListener("keypress",function(event){
    sound(event.key);
    animation(event.key);
});
//sound function
function sound(key){
    switch(key){
        case "A":
            var sound1 =new Audio("sound/one.wav");
            sound1.play();
            break;
            case "B":
            var sound2= new Audio("sound/two.wav");
            sound2.play();
            break;
            case "C":
                var sound3 =new Audio("sound/three.wav");
                sound3.play();
                break;
                case "D":
            var sound4 =new Audio("sound/four.wav");
            sound4.play();
            break;
            case "E":
            var sound5 =new Audio("sound/five.wav");
            sound5.play();
            break;
            case "F":
                var sound6 =new Audio("sound/six.wav");
                sound6.play();
                break;
                case "G":
                    var sound7 =new Audio("sound/seven.wav");
                    sound7.play();
                    break;
            default: console.log(key);
    }
}
