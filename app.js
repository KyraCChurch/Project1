//general
const backgroundImages = [
    "https://i.im.ge/2022/09/11/O4cgNy.210fb8977200036036103eceb02fa4ae.jpg",
    "https://cdna.artstation.com/p/assets/images/images/015/690/214/original/daniel-gianino-fairy-forest1.gif?1549276717"
]
const rock = document.querySelector('.rock');
const restart = document.querySelector('.reset');
restart.addEventListener('click', (evt) => {
    startPage.style.display = "block";
    storyPt1.style.display = "none";
    rock.style.display = "none";
    firstStory.style.display = 'none';
    game1.style.display = 'none';
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

// Story Start
const storyPt1 = document.querySelector('.storyStart');
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
let storyPosition = 0;
const story = document.getElementsByClassName('story')
const totalTexts = story.length;
const wizRock = document.querySelector('#wizardRockPic')
const poof = document.querySelector('#poof')

document.getElementById('next').addEventListener('click', function() {
  moveToNextStory();
  if (storyPosition === 6){
    wizRock.style.display = 'block';
    poof.style.display = 'block';
  } 
  if (storyPosition === 7){
    poof.style.display = 'none';
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
const gameBtn1 = document.querySelector('#gameBtn1')
const game1 = document.querySelector('.gameStart1')
gameBtn1.addEventListener('click', (evt) => {
    rock.style.display = "none";
    game1.style.display = 'block';
    setTimeout(() => {
        game1.style.display = 'none';
      }, 1500)
    gameBtn1.style.display = "none";
    document.body.style.backgroundImage = `url(${backgroundImages[1]})`;
    document.body.style.backgroundColor = 'rgba(34, 30, 72, 1)';
    setTimeout(() => {
        fireflies.style.display = 'block';
      }, Math.floor(Math.random() * (4000-1500) + 1500))
    });
// First game 
const fireflies = document.querySelector('#firefly')
const multiples = document.querySelector('.fireflies')
fireflies.addEventListener('click', (evt) => {
    fireflies.style.display = 'none';
    for (let i=0;i<multiples.length;i++){
    setTimeout(function(){ 
        document.getElementById('firefly').style.display ='block';
    }, Math.floor(Math.random() * (4000-1000) + 1000));
    setTimeout(() => {
        fireflies.style.display = 'none';
      }, 4500)
    }
})

    



