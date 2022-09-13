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

//Start Button
const startBtn = document.querySelector('#start');
const startPage = document.querySelector('.startPg');

startBtn.addEventListener('click', (evt) => {
    startPage.style.display = "none";
//Transitioning to story start
    storyPt1.style.display = "block";
    document.body.style.backgroundImage = `url(${backgroundImages[0]})`;
    rock.style.display = 'block';
    firstStory.style.display = 'block';
})

//Story Start
const storyPt1 = document.querySelector('.storyStart');
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const firstStory = document.querySelector('#firstPt')
let currentStryIndex = 0
let previousStryIndex = 0
class storyTexts {
    constructor(text){
        this.text = text;
    }
}
const story = [
    new storyTexts("There once was a pet rock..."),
    new storyTexts("He lived in the window and watched the days go by.")
]
nextBtn.addEventListener('click', (nextStory) => {
    firstStory.style.display = 'none';
    // const story1 = document.getElementsByClassName('.story');
    // for (let i=0;i<story1.length;i+=3){
    //   story1[i].style.display = 'block';
    // }
})

// Start first game
const gameBtn1 = document.querySelector('#gameBtn1')
const game1 = document.querySelector('.gameStart1')
gameBtn1.addEventListener('click', (evt) => {
    // firstStory.style.display = 'none';
    rock.style.display = "none";
    game1.style.display = 'block';
    gameBtn1.style.display = "none";
    document.body.style.backgroundImage = `url(${backgroundImages[1]})`;
    document.body.style.backgroundColor = 'rgba(34, 30, 72, 1)';
});


