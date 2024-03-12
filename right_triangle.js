function drawTriangle(height, char) {
    for (let i = 1; i <= height; i++) {
        let row = ''; 
        for (let j = 0; j < i; j++) {
            row += char;
        }
        console.log(row);
    }
}
drawTriangle(5, '&'); 


function drawTriangle(height, char) {
    for (let i = 1; i <= height; i++) {
    console.log(char.repeat(i));
    }
}
drawTriangle(5, '#');