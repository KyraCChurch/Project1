//general
const rock = document.querySelector('.rock');
const restart = document.querySelector('.reset');
restart.addEventListener('click', (evt) => {
    startPage.style.display = "block";
    storyPt1.style.display = "none";
    rock.style.display = "none";
});

//Story text
class storyText {
    constructor(text){
    this.text = text; 
    }
};

const storyTexts = [
new storyText('There once was a pet rock...'),
new storyText('He lived in the window and watched the days go by.'),
new storyText('But one day he '),
new storyText('blah'),
new storyText('blaj'),
new storyText('blah'),
new storyText('blah')
];

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
const nextBtn = document.querySelector('#next')
nextBtn.addEventListener('click', (evt) => {

    })


