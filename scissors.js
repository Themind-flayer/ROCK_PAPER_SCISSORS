let user_wins=0;
let comp_wins=0;

const choices=document.querySelectorAll(".choice");
const disc = document.querySelector("#discription");
const userScr = document.querySelector("#user_points");
const compScr=document.querySelector("#comp_points");


//GENERATING RAMDOM CHOICES BY USING RANDOM FUNCTION
const getCompChoice = () => {  
    const options = ["rock","paper","scissors"];
    const idx=Math.floor(Math.random() * 3);
    return options[idx];
}

//DETERMINING WIN CONDITIONS BY USING USER AND COMPUTER CHOICES
const playGame =(user_choice) => {
    const comp_choice =getCompChoice();
    console.log("userchoice is"+user_choice);
    console.log(comp_choice);

    if(user_choice === comp_choice)
    {
        draw();
    }
    else{  //logic for Winner.
        let userWin =true;
        if(user_choice === "rock")
        {
            userWin = comp_choice ==="paper" ? false : true;
        }
        else if(user_choice === "paper")
        {
            userWin = comp_choice ==="scissors" ? false : true;
        }
        else
        {
            userWin = comp_choice ==="rock" ? false : true;
        }
        showWinner(userWin ,user_choice,comp_choice);
        
    }
}
const showWinner = (userWin, user_choice ,comp_choice) => {
    if(userWin)
    {
        console.log("You WIN");
        disc.innerText=`You WIN :) your ${user_choice} beats ${comp_choice}`;
        disc.style.backgroundColor = "green";
        user_wins++;
        userScr.innerText=user_wins;

    }
    else{
        console.log("You LOSE");
        disc.innerText=`You lost :( ${comp_choice} beats your ${user_choice}`;
        disc.style.backgroundColor = "red";
        comp_wins++;
        compScr.innerText=comp_wins;

    }
}

const draw = () =>{
    console.log("The game is draw!");
    disc.innerText="DRAW !!";
    disc.style.backgroundColor="black";
}


//GETTING USER CHOICES BY TRACKING THE CLICK EVENT.
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const user_choice = choice.getAttribute("id");
        playGame(user_choice);
    });
});