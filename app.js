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


//general
const rock = document.querySelector('.rock')
