document.addEventListener("keydown",function(event){
         if(event.code === "KeyA"){
            console.log("The 'A' key is pressed.");
            new Audio("white_keys/A.mp3").play();
         }
         else if(event.code === "KeyS"){
             console.log("The 'S' key is pressed.");
             new Audio("white_keys/S.mp3").play();
         }
        else if(event.code === "KeyD"){
            console.log("The 'D' key is pressed.");
            new Audio("white_keys/D.mp3").play();
        }
        else if(event.code === "KeyF"){
            console.log("The 'F' key is pressed.");
            new Audio("white_keys/F.mp3").play();
        }
        else if(event.code === "KeyG"){
            console.log("The 'G' key is pressed.");
            new Audio("white_keys/G.mp3").play();
        }
        else if(event.code === "KeyH"){
            console.log("The 'H' key is pressed.");
            new Audio("white_keys/H.mp3").play();
        }
        else if(event.code === "KeyJ"){
            console.log("The 'J' key is pressed.");
            new Audio("white_keys/J.mp3").play();
        }
        else if(event.code === "KeyW"){
            console.log("The 'W' key is pressed.");
            new Audio("black_keys/W.mp3").play();
        }
        else if(event.code === "KeyE"){
            console.log("The 'E' key is pressed.");
            new Audio("black_keys/E.mp3").play();
        }
        else if(event.code === "KeyT"){
            console.log("The 'T' key is pressed.");
            new Audio("black_keys/T.mp3").play();
        }
        else if(event.code === "KeyY"){
            console.log("The 'Y' key is pressed.");
            new Audio("black_keys/Y.mp3").play();
        }
        else if(event.code === "KeyU"){
            console.log("The 'U' key is pressed.");
            new Audio("black_keys/U.mp3").play();
        }
        else {
            console.log("Wrong key pressed!");
        }
    }
)
