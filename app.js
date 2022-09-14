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
    rock.style.display = "none";
    game1.style.display = 'block';
    setTimeout(() => {
        game1.style.display = 'none';
      }, 1500)
    gameBtn1.style.display = "none";
    document.body.style.backgroundImage = `url(${backgroundImages[1]})`;
    document.body.style.backgroundColor = 'rgba(34, 30, 72, 1)';
    fireflyAppear;
});
// First game 
const fireflies = document.querySelector('#firefly')
// fireflies.addEventListener('click', (evt) => {
// setTimeout(() => {
//     fireflies.style.display = 'none';
//   }, Math.floor(Math.random() * (4000-1500) + 1500))
// });
function fireflyAppear()
    {
    //   document.getElementById('firefly').style.display ='none'; //first hide the button
      setTimeout(function(){ //using setTimeout function
      document.getElementById('firefly').style.display ='block'; //displaying the button again after 3000ms or 3 seconds
    }
    ,3000); 
    }
    









// const minTime = 1000;
// const maxTime = 4000;
// let msSinceClicked = 0;

// let waiting = false;
// fireflies.addEventListener("click", newPose)
// function newPose() {
//     //Makes button appear at random time between 1000 and 4000 ms.
//     const appear = Math.floor(Math.random() * (maxTime - minTime + minTime));
//     setTimeout(() => {
//         fireflies.style.display = 'none';
//         waiting = true;
//     }, appear);
// }
// fireflies.addEventListener("click", () => {
//     if (waiting) {
//         const score = 1000 - msSinceClicked;
//         waiting = false;
//     }else {
//         newPose();
//     }
// })