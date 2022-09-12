//general
const rock = document.querySelector('.rock');
const restart = document.querySelector('.reset');
restart.addEventListener('click', (evt) => {
    startPage.style.display = "block";
    storyPt1.style.display = "none";
    rock.style.display = "none";
});

//Start Button
const startBtn = document.querySelector('#start');
const startPage = document.querySelector('.startPg');

startBtn.addEventListener('click', (evt) => {
    startPage.style.display = "none";
//Transitioning to story start
    storyPt1.style.display = "block";
    document.body.style.background = "url('https://i.im.ge/2022/09/11/O4cgNy.210fb8977200036036103eceb02fa4ae.jpg') cover 0";
    rock.style.display = 'block';
})

//Story Start
const storyPt1 = document.querySelector('.storyStart');
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const firstStory = document.querySelector('#firstPt')
let currentStryIndex = 0
let previousStryIndex = 0

nextBtn.addEventListener('click', (evt) => {
    firstStory.style.display = 'block';
    firstStory.style.display = 'none';
    var elems = document.getElementsByClassName('.story');
    for (var i=0;i<elems.length;i+=5){
      elems[i].style.display = 'block';
    }
})


