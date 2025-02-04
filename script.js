import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const imageDisplay = document.getElementById('imageDisplay');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseButtons = document.getElementById('responseButtons');

let noClickCount = 0;
let buttonHeight = 48; // Starting height in pixels
let buttonWidth = 80;
let fontSize = 20; // Starting font size in pixels
const imagePaths = [
  "./images/image1.gif",
  "./images/image2.gif",
  "./images/image3.gif",
  "./images/image4.gif",
  "./images/image5.gif",
  "./images/image6.gif",
  "./images/image7.gif"
];

// Add event listener for "No" button
noButton.addEventListener('click', function () {
  if (noClickCount < 5) {
    noClickCount++;
    imageDisplay.src = imagePaths[noClickCount];
    buttonHeight += 35; // Increase height by 35px on each click
    buttonWidth += 35; // Increase width by 35px on each click
    fontSize += 25; // Increase font size by 25px on each click
    yesButton.style.height = `${buttonHeight}px`; // Update button height
    yesButton.style.width = `${buttonWidth}px`; // Update button width
    yesButton.style.fontSize = `${fontSize}px`; // Update font size
    if (noClickCount < 6) {
      noButton.textContent = ["No", "Are you sure?", "Pookie please", "Don't do this to me :(", "You're breaking my heart", "I'm gonna cry..."][noClickCount];
    }
  }
});

// Add event listener for "Yes" button
yesButton.addEventListener('click', () => {
  imageDisplay.src = './images/image7.gif'; // Change to image7.gif
  valentineQuestion.textContent = "Yayyy!! :3"; // Change the question text
  responseButtons.style.display = 'none'; // Hide both buttons
  confetti(); // Trigger confetti animation
});