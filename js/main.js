const cards = document.querySelectorAll('.memory-cards')
let firstClick;
let secondClick;
let isCardFlip = false;
let score = 1
const clock = document.getElementById('clock')

alert("You have 45 seconds to flip every card!!! Game begins when you press ok")

function countDown(){
  let MaxTime = 45;
  let decrease;
  let seconds = setInterval(() => {
   decrease = MaxTime -= 1;
   clock.innerHTML = decrease
   if(decrease === 0){
     alert("Game Over")
     clearInterval(seconds)   
   }
  }, 1000);
}
countDown()

function toggleCards(){
  //will add the class toggle which will make backface dissapear
  this.classList.toggle('toggle')

   if(isCardFlip === false){
  // the fist card click will set boolean to true and "this" refers to element clicked
     firstClick = this;
     //first click will set iscardflip to true which will allow our else case to kick in

     isCardFlip = true;
     console.log(firstClick.dataset.logo)
  } 
    else {
      // we entered the else case because iscardflip was true hence it will give a clicke element value to secondclick
      //  iscard flip become false and this will be the second card clicked
      secondClick = this;
      isCardFlip = false
      console.log(secondClick.dataset.logo)
      // we will match our cards in html with js using the data property
      if(firstClick.dataset.logo === secondClick.dataset.logo){
        firstClick.removeEventListener('click',toggleCards)
        secondClick.removeEventListener('click',toggleCards)
        // if we get a match we want user score to be updated
     document.getElementById('scores').innerHTML = score++
     // pop up to declare winner
     if(score === 7){
       //allow time to display last card
       setTimeout(()=>{
        alert("You won!!")
       },300)
       
     }
        console.log(score)
      } else {
        // if we do not get a match we ant to untoggle and hide the card again
        //set timeout will allow user .7 seconds to se the card clicked
        setTimeout(()=>{
        firstClick.classList.remove('toggle')
        secondClick.classList.remove('toggle')},700)   
      }
    }  
  }
// we will loop through all our elements and assing a random position every time the board is reset
function randomPositioning(){
for(let i = 0; i < cards.length; i++){
  cards[i].style.order = Math.floor(Math.random()*12)
}
}

// will loop throgh all our elements and will add a click event with the togglefunction
function selectcard(){
  for (let i = 0; i < cards.length; i++){
    let card = cards[i]
    card.addEventListener('click',toggleCards)
  }
}
selectcard()
randomPositioning()


function Player2(){
  
}


