
const WIDTH = 500;
const HEIGHT = 500;

function createImage(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    var imageData = ctx.createImageData(WIDTH, HEIGHT);
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i + 0] = 190;  // R value
        imageData.data[i + 1] = 232;    // G value
        imageData.data[i + 2] = 123;  // B value
        imageData.data[i + 3] = 255;  // A value
    }
    ctx.putImageData(imageData,20,20)
}
createImage();