
function rockfunction(){
    document.getElementsByClassName("img1")[0].src="images/rock.JFIF"
    var user="rock"
    var randomNum = Math.floor((Math.random() * 3)+1);
    randomNum=="rock"
    if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/rock.JFIF"
        document.querySelector("h1").innerHTML="You Tied"
    }
    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF"
        document.querySelector("h1").innerHTML="You Lose"
    }
    else if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.JFIF"
        document.querySelector("h1").innerHTML="You win"
    }
}
function paperfunction(){
    document.getElementsByClassName("img1")[0].src="images/paper.JFIF"
    var user="paper"
    var randomNum = Math.floor((Math.random() * 3)+1);
    randomNum=="paper"
    if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/rock.JFIF"
        document.querySelector("h1").innerHTML="You Win"
    }
    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF"
        document.querySelector("h1").innerHTML="You Tied"
    }
    else if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.JFIF"
        document.querySelector("h1").innerHTML="You Lose"
    }
}
function scissorsfunction(){
    document.getElementsByClassName("img1")[0].src="images/scissors.JFIF"
    var user="scissors"
    var randomNum = Math.floor((Math.random() * 3)+1);
    randomNum=="scissors"
    if(randomNum==1){
        document.getElementsByClassName("img2")[0].src="images/rock.JFIF"
        document.querySelector("h1").innerHTML="You Lose"
    }
    else if(randomNum==2){
        document.getElementsByClassName("img2")[0].src="images/paper.JFIF"
        document.querySelector("h1").innerHTML="You Win"
    }
    else if(randomNum==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.JFIF"
        document.querySelector("h1").innerHTML="You Tied"
    }
}