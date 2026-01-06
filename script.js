let userScore=0;
let compScore=0;
let attempts=0;

let choices=document.querySelectorAll(".choice")

let genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let n=Math.floor(Math.random()* options.length);
    return options[n];
}



choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame=(userChoice)=>{
    let msg=document.getElementById("message");
    let user=document.getElementById("user");
    let comp=document.getElementById("comp");
    let ats=document.getElementById("attempts")

    let compChoice=genCompChoice();
    console.log("User: ",userChoice);
    console.log("Computer: ",compChoice);

    if(userChoice===compChoice){
        msg.innerHTML="Its a Draw ";
        msg.innerHTML+="<br> Computer chose "+compChoice;
    }
    else if(
        (userChoice==="rock" && compChoice==="scissors")||
        (userChoice==="paper" && compChoice==="rock")||
        (userChoice==="scissors" && compChoice==="paper")
    ){  
        userScore++;
        user.innerHTML=userScore;
        msg.innerHTML="You Won ! 🤩 ";
        msg.innerHTML+="<br>computer chose "+compChoice;

    }
    else{
        compScore++;
        comp.innerHTML=compScore;
        msg.innerHTML="You Lose 😕 ";
        msg.innerHTML+="<br> Computer chose "+compChoice;
    }
    attempts++;
    ats.innerHTML="Attempts: "+attempts;

}

