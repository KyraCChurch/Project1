//general
const backgroundImages = [
    "https://i.im.ge/2022/09/11/O4cgNy.210fb8977200036036103eceb02fa4ae.jpg",
    "https://cdna.artstation.com/p/assets/images/images/015/690/214/original/daniel-gianino-fairy-forest1.gif?1549276717"
]
const rock = document.querySelector('.rock');
const wizRock = document.querySelector('#wizardRockPic')
const restart = document.querySelector('.reset');
const poof = document.querySelector('#poof')
restart.addEventListener('click', (evt) => {
    startPage.style.display = "block";
    document.body.style.backgroundImage = `url(${backgroundImages[0]})`;
    rock.style.display = 'none';
    // storyPt1.style.display = "none";
    // game1.style.display = 'none';
});
const deathScreen = document.querySelector('.death');
//Start Button
const startBtn = document.querySelector('#start');
const startPage = document.querySelector('.startPg');

startBtn.addEventListener('click', (evt) => {
    startPage.style.display = "none";
//Transitioning to story start
    storyPt1.style.display = "block";
    document.body.style.backgroundImage = `url(${backgroundImages[0]})`;
    rock.style.display = 'block';
})

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
    // rock.style.display = 'none';
    setTimeout(() => {
    game1.style.display = 'none';
      }, 1500)
    gameBtn1.style.display = "none";
    document.body.style.backgroundImage = `url(${backgroundImages[1]})`;
    document.body.style.backgroundColor = 'rgba(32, 30, 64, 1)';
    makeBox()
    });
// First game 
var clickedTime; 
var createdTime; 
var reactionTime; 
		
			function makeBox() {
					var time=Math.random();
					time=time*3000;
				
				setTimeout(function() {
						
					var top= Math.random();
						top= top*300;
					var left= Math.random();
						left= left*500; 
						
					document.getElementById("fireflies").style.top = top + "px";
					document.getElementById("fireflies").style.left = left + "px"; 
				
					document.getElementById("fireflies").style.display="block";
					
					createdTime=Date.now();
					
				}, time); 
			
			}
			
			document.getElementById("fireflies").onclick=function() {
			
				clickedTime=Date.now();
				
				reactionTime=(clickedTime-createdTime)/1000;
				
				this.style.display="none";
				
				makeBox();
				
				
			}
			
			makeBox(); 


    



