let secretnumber = Math.trunc(Math.random() * 10 + 1);
console.log(secretnumber)
let Score = 5;
let Highscore=0;

document.querySelector(".check").addEventListener("click", function () {
    const guessnumber = Number(document.querySelector(".guess").value);
    console.log(guessnumber);
    if(Score>1){
        document.querySelector(".score").textContent=Score;
        if(!guessnumber){
            document.querySelector(".message").textContent="no number";
        }
        else if(guessnumber === secretnumber){
            document.querySelector(".message").textContent="!!! YOU WON !!!";
            if(Score>Highscore){
                Highscore=Score;
                document.querySelector(".high").textContent=Highscore;
            }
        }
        else if(guessnumber < secretnumber){
            document.querySelector(".message").textContent="number is small";
            Score=Score-1;
        }
        else if(guessnumber > secretnumber){
            document.querySelector(".message").textContent="number is greater";
            Score=Score-1;
        }

    }
    else{
        document.querySelector(".main-score").textContent="You left out of chances";
        document.querySelector(".message").textContent="*** YOU LOST THE GAME ***";
    }
    
})
//reset button
document.querySelector(".resetbtn").addEventListener("click",function(){
    secretnumber = Math.trunc(Math.random() * 10 + 1);
    console.log(secretnumber)
    Score=5;
    document.querySelector(".message").textContent="no input selected";
    document.querySelector(".score").textContent=Score;
})