function getComplementaryColors() {
    const colorPicker = document.getElementById('colorPicker');
    const color = colorPicker.value.slice(1); // Remove the '#' from the color value

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=complement&count=1`)
        .then(response => response.json())
        .then(data => {
            displayColors(data.colors);
        })
        .catch(error => console.error('Error fetching complementary colors:', error));
}

function displayColors(colors) {
    const colorResults = document.getElementById('colorResults');
    colorResults.innerHTML = ''; // Clear previous results

    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color.hex.value;
        colorResults.appendChild(colorBox);
    });
}
