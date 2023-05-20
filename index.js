var numberOfDrums=document.querySelectorAll(".drum").length;

for(var i=0;i < numberOfDrums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var cp=this.innerHTML;
        playDrums(cp);
        buttonAnimation(cp);
                
    });
}

document.addEventListener("keydown",function(event)
{
    var kp=event.key;
    playDrums(kp);
    buttonAnimation(kp);
});


function playDrums(cp)
{
    switch (cp) {
        case "w || W":
            var audio=new Audio("./sounds/tom-1.mp3");
            break;

        case "a || A":
            var audio=new Audio("./sounds/tom-2.mp3");
            break;
         case "s || S":
            var audio=new Audio("./sounds/tom-3.mp3");
            break;
        
        case "d || D":
            var audio=new Audio("./sounds/tom-4.mp3");
            break;
        case "j || J":
            var audio=new Audio("./sounds/snare.mp3");
            break;
        case "k || K":
            var audio=new Audio("./sounds/crash.mp3");
            break;
        case "l || L":
            var audio=new Audio("./sounds/kick-bass.mp3");
            break;
    
        default:
            break;
    }
    audio.play();
}


function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}

        


