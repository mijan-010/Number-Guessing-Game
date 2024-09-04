let playerOne = document.querySelector(".playerOne")
let inputOne = document.querySelector(".inputOne")
let buttonOne = document.querySelector(".buttonOne")
let errorOne = document.querySelector(".errorOne")
let player1 = document.querySelector(".player1")



let playerTwo = document.querySelector(".playerTwo")
let inputTwo = document.querySelector(".inputTwo")
let buttonTwo = document.querySelector(".buttonTwo")
let errorTwo = document.querySelector(".errorTwo")
let player2 = document.querySelector(".player2")
let chance = document.querySelector(".chance")


let count = 5;

buttonOne.addEventListener("click",function(){
    if(!inputOne.value){
        errorOne.innerHTML="Enter a number: ";

    }else if(isNaN(inputOne.value)){
        errorOne.innerHTML="Enter a number: ";

    }else if(!(inputOne.value<=10 && inputOne.value>0)){
        errorOne.innerHTML="Enter a number 1 to 10: ";

    }else{
        player2.style.display ="block"
        chance.innerHTML=`Chance : ${count}`
        player1.style.display ="none"
    }
})


buttonTwo.addEventListener("click", function(){
    if(!inputTwo.value){
        errorTwo.innerHTML="Enter a number: ";

    }else if(isNaN(inputTwo.value)){
        errorTwo.innerHTML="Enter a number: ";

    }else if(!(inputTwo.value<=10 && inputTwo.value>0)){
        errorTwo.innerHTML="Enter a number 1 to 10:"   
    }
    else{
        errorTwo.innerHTML=""

        if(count>1){
            count--
            chance.innerHTML=`Chance : ${count}`
            if(inputOne.value==inputTwo.value){
                playerTwo.innerHTML= "Player Two Winer!"
                buttonTwo.style.display= "none"
                inputTwo.value=""
            }
        }else{
            count=0
            chance.innerHTML=`Chance : ${count}`
            playerTwo.innerHTML="Player Two Loser!"
            buttonTwo.style.display="none"
            inputTwo.value=""


        }
    }
})
