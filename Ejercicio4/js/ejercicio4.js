const WIDTH = 500;
const HEIGHT = 500;

function createImage(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = HEIGHT
    canvas.width = WIDTH
    var imageData = ctx.createImageData(WIDTH, HEIGHT);
    for (i = 0; i < imageData.width; i++) {
        for(j = 0; j<imageData.height; j++){
            r= j / imageData.height * 255;
            g = j / imageData.height * 255;
            b = j / imageData.height * 255;
            a = 255;
            setPixel(imageData, i,j,r,g,b,a);
        }
    }
    ctx.putImageData(imageData,0,0)
}

function setPixel(imageData, i, j, r, g, b, a){
    index = (i+j * imageData.width) * 4;
    imageData.data[index+0] = r
    imageData.data[index+1] = g
    imageData.data[index+2] = b
    imageData.data[index+3] = a;
}
createImage();
