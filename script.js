const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const image = document.getElementById('image');
const song = document.getElementById('song');

// Handle "Yes" button click: Navigate to pictures.html
yesBtn.addEventListener('click', () => {
    song.play(); // Optional: Play the song if you want
    // Navigate to the pictures page
    window.location.href = 'pictures.html';
});

// Handle "No" button hover: Make it "naughty" by moving it randomly around the screen
noBtn.addEventListener('mouseenter', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    // Generate random x and y positions for the button within the container
    const randomX = Math.random() * (containerRect.width - noBtn.offsetWidth);
    const randomY = Math.random() * (containerRect.height - noBtn.offsetHeight);
    
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.classList.add('move'); // Activate moving class
});
