
//making blur logic

var hasShownWelcomeMessage = localStorage.getItem('hasShownWelcomeMessage');
var consent = JSON.parse(localStorage.getItem('consent'));

if (!hasShownWelcomeMessage || !consent) {
  // Show the welcome message and set the flag in local storage
  var result = confirm("This website is very funny 😄 . If you open it, you won't be able to resist smiling! and also fall in love 💌 with shubham OR you may be abuse him !! so you have to open this at your risk !! ");
  localStorage.setItem('hasShownWelcomeMessage', true);
  
  if (!result) {
    // If user clicks Cancel, blur the website content and reset consent flag
    localStorage.setItem('consent', false);
    document.body.classList.add('blurred');
  } else {
    // If user clicks OK, set consent flag to true and display website content
    localStorage.setItem('consent', true);
    document.body.classList.add('visible');
  }
} else {
  // If the welcome message has been shown before, check if user gave consent
  if (!consent) {
    // If user hasn't given consent, blur the website content
    document.body.classList.add('blurred');
  } else {
    // If user has given consent, display website content
    document.body.classList.add('visible');

  }
}


        // Function to scroll to the target div when the page loads
        
        window.onload = function() {
            var targetDiv = document.getElementById('targetDiv');
            if (targetDiv) {
                targetDiv.scrollIntoView();
            }
        };
    







/*--------------------
Vars
--------------------*/
let progress = 50
let startX = 0
let active = 0
let isDown = false

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}  

/*--------------------
Animate
--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}  
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })  
})  

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}  

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })  
  }  
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}  

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}  

const handleMouseUp = () => {
  isDown = false
}  

/*--------------------
Listeners
--------------------*/
document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)


// second js

const container = document.getElementById("container");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}  

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }  

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }  

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});  

// btnYes.addEventListener("click", (e) => {

//   console.log("click");  
  
//   alert("i love you");
// });




// Play audio when the button is clicked
var audio = document.getElementById("myAudio");

function songPlay() {
  audio.play();
  setTimeout(function() {
    audio.pause();
  }, 18000); // Stop playback after 17 seconds (17,000 milliseconds)
}


// hiding and showing div

const takingAns = ()  =>{
  let a = prompt('To confirm, type "i love you" in the box below');
  let b="i love you";

    if (a != b){
    alert("my stupid sweet 💗 heart darling just copy & paste you text from 'I love you' ");
    takingAns();
    }

}





btnYes.addEventListener("click", (e) => {
  

  //hiding yes no button

  var yesNO = document.getElementById('yes-no');
  yesNO.classList.add('unvis');

  // alert("i love you");
  takingAns();
  
  songPlay();

  // showing next part
  var nextPart = document.getElementById('next-part');
  nextPart.classList.remove('unvis');
  
  
});


