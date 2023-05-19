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
        case "w":
            var audio=new Audio("./sounds/tom-1.mp3");
            break;

        case "a":
            var audio=new Audio("./sounds/tom-2.mp3");
            break;
         case "s":
            var audio=new Audio("./sounds/tom-3.mp3");
            break;
        
        case "d":
            var audio=new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            var audio=new Audio("./sounds/snare.mp3");
            break;
        case "k":
            var audio=new Audio("./sounds/crash.mp3");
            break;
        case "l":
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

// this.style.color="white";
//         var audio=new Audio("./sounds/tom-1.mp3");
//         


