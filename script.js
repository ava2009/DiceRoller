const img = document.getElementById('img'); 
const img2 = document.getElementById('img2');
const btn = document.getElementById('btn');
let result = document.getElementById('result');

btn.addEventListener( 'click', () => {
    const randomFaceNum = Math.round(Math.random() * 5 + 1); // Setting up a new variable that represents a random face number for the first dice.
    img.src = `./img/face-${randomFaceNum}.png`; // This would generate a random face of the first dice.

    const randomFaceNum2 = Math.round(Math.random() * 5 + 1); // Setting up a new variable that represents a random face number for the second dice.
    img2.src = `./img/face-${randomFaceNum2}.png`; // This would generate a random face of the second dice.

    result.textContent = randomFaceNum + randomFaceNum2; // This is the sum of the first number and the second number, and is printed on the page.
});

