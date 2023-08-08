const sailboatIcon = document.getElementById('sailboatIcon');

const sailingPath = [
    { x: '10%', y: '30%' }, // Starting at the center of the top loop
    { x: '5%', y: '20%' },  // Top left
    { x: '15%', y: '20%' }, // Top right
    { x: '10%', y: '30%' }, // Back to the center of the top loop
    { x: '5%', y: '40%' },  // Bottom left of top loop and top left of bottom loop
    { x: '15%', y: '40%' }, // Bottom right of top loop and top right of bottom loop
    { x: '10%', y: '50%' }, // Center of the bottom loop
    { x: '5%', y: '60%' },  // Bottom left
    { x: '15%', y: '60%' }, // Bottom right
    { x: '10%', y: '50%' }, // Back to the center of the bottom loop
];


let currentCoordinate = 0;

function animateSailboat() {
    if (currentCoordinate < sailingPath.length) {
        sailboatIcon.style.left = sailingPath[currentCoordinate].x;
        sailboatIcon.style.top = sailingPath[currentCoordinate].y;
        currentCoordinate++;
        currentCoordinate++;
    } else {
        currentCoordinate = 0;  // Reset to the start of the path
    }
    setTimeout(animateSailboat, 2.500);  // The boat will pause for 2.5 seconds at each coordinate.
}

animateSailboat();
