//general
const backgroundImages = [
    "https://i.im.ge/2022/09/11/O4cgNy.210fb8977200036036103eceb02fa4ae.jpg",
    "https://cdna.artstation.com/p/assets/images/images/015/690/214/original/daniel-gianino-fairy-forest1.gif?1549276717",
    "https://steamuserimages-a.akamaihd.net/ugc/100603690274632772/7538841421DEA4DA2E4F1DFE1EA1D1C2D0C0632E/"
]
const rock = document.querySelector('.rock');
const wizRock = document.querySelector('#wizardRockPic')
const restart = document.querySelector('.reset');
const poof = document.querySelector('#poof')
restart.addEventListener('click', (evt) => {
    startPage.style.display = "block";
    let storyPosition = 0;
    fireflies.style.display = "none";
    document.body.style.backgroundImage = `url(${backgroundImages[0]})`;
    rock.style.display = 'none';
    wizRock.style.display = 'none';
    storyPt1.style.display = 'none';
    document.getElementById("death").style.display = "none";
    document.getElementById('rockDeath').style.display = 'none';
  document.querySelector(".win").style.display = "none";
  document.body.style.backgroundColor = 'rgb(216, 219, 184)';
})

// const deathScreen = document.querySelector('.death');
//Start Button
const startBtn = document.querySelector('#start');
const startPage = document.querySelector('.startPg');

startBtn.addEventListener('click', (evt) => {
    startPage.style.display = "none";
//Transitioning to story start
    storyPt1.style.display = "block";
    document.body.style.backgroundImage = `url(${backgroundImages[0]})`;
    rock.style.display = 'block';
});

// Story 
const storyPt1 = document.querySelector('.storyStart');
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
let storyPosition = 0;
const story = document.getElementsByClassName('story')
const totalTexts = story.length;
const storyCarousel = document.querySelector('#storyCarousel')

document.getElementById('next').addEventListener('click', function() {
  moveToNextStory();
  if (storyPosition === 6){
    wizRock.style.display = 'block';
    poof.style.display = 'block';
  } 
  if (storyPosition === 7){
    poof.style.display = 'none';
  }
  if (storyPosition === 13){
    wizRock.style.display = "none"
    gameModal.style.display = 'block';
    storyCarousel.style.display = 'none';
  }
})
document.getElementById('prev').addEventListener('click', function() {
  moveToPrevStory();
});

function updateStoryPos() {
  for (let stories of story) {
    stories.classList.remove('story--visible');
    stories.classList.add('story--hidden');
  }

  story[storyPosition].classList.add('story--visible')
}

function moveToNextStory() {
  updateStoryPos()

  if (storyPosition === totalTexts - 1) {
    storyPosition = 0;
  } else {
    storyPosition++;
  }
}
function moveToPrevStory() {
  updateStoryPos()

  if (storyPosition === 0) {
    storyPosition = 0;
  } else {
    storyPosition--;
  }
}

// Start first game
const gameModal = document.querySelector('#gameModal')
const gameBtn1 = document.querySelector('#gameBtn1')
const game1 = document.querySelector('.gameStart')
gameBtn1.addEventListener('click', (evt) => {
    game1.style.display = 'block';
    gameModal.style.display = 'none';
    rock.style.top = '500px';
    setTimeout(() => {
    game1.style.display = 'none';
      }, 1500)
    gameBtn1.style.display = "none";
    document.body.style.backgroundImage = `url(${backgroundImages[1]})`;
    document.body.style.backgroundColor = 'rgba(32, 30, 64, 1)';
    game()
    });
// Game 
var clickedTime; 
var createdTime; 
var reactionTime; 
const fireflies = document.getElementById("fireflies")	

function game() {
  function startFlies() {
    var time=Math.random();
    time=time*3000;

  setTimeout(function() {
      
    var top= Math.random();
      top= top*300;
    var left= Math.random();
      left= left*500; 
      
    fireflies.style.top = top + "px";
    fireflies.style.left = left + "px"; 
  
    fireflies.style.display="block";
    
    createdTime=Date.now();
    
  }, time); 

}

fireflies.onclick=function() {

  clickedTime=Date.now();
  
  reactionTime=(clickedTime-createdTime);
  
  if (reactionTime >= 2000){
    death();
    return;
  } else{
    win();
    return;
  }
  
}

startFlies(); 
}

function death(){
  rock.style.display = "none";
  document.body.style.backgroundImage = `url(${backgroundImages[2]})`;
  document.body.style.backgroundColor = 'rgba(0, 0, 6, 1)';
  document.getElementById("death").style.display = "block";
  document.getElementById('rockDeath').style.display = 'block';
  fireflies.style.display = "none";
}

function win(){
  document.querySelector(".win").style.display = "block"
  document.body.style.backgroundImage = `url(${backgroundImages[0]})`;
  document.body.style.backgroundColor = 'rgb(216, 219, 184)';
  fireflies.style.display = "none";
}

    
