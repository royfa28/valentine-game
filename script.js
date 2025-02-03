const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const result = document.getElementById('result');

let moveDistance = 20;

// Set boundaries for the "No" button
function getBoundaries() {
    return {
        top: 0,
        bottom: window.innerHeight - noButton.offsetHeight,
        left: 0,
        right: window.innerWidth - noButton.offsetWidth
    };
}

noButton.addEventListener('click', () => {
    moveNoButton();
});

yesButton.addEventListener('click', () => {
    result.textContent = "Yay! I'm so happy! ❤️";
    result.style.color = "#ff1493"; // Deep pink color
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
});

function moveNoButton() {
    const boundary = getBoundaries();

    const randomX = (Math.random() - 0.5) * moveDistance * 2; // More randomness
    const randomY = (Math.random() - 0.5) * moveDistance * 2;

    let newLeft = noButton.offsetLeft + randomX;
    let newTop = noButton.offsetTop + randomY;

    // Enforce hard boundaries using the button's edges
    if (newLeft < boundary.left) newLeft = boundary.left;
    if (newTop < boundary.top) newTop = boundary.top;
    if (newLeft + noButton.offsetWidth > boundary.right) newLeft = boundary.right - noButton.offsetWidth;
    if (newTop + noButton.offsetHeight > boundary.bottom) newTop = boundary.bottom - noButton.offsetHeight;

    noButton.style.position = 'absolute';
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;

    // Increase the distance for next time
    moveDistance += 5;
}