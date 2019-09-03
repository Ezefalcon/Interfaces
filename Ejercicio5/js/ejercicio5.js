const WIDTH = 500;
const HEIGHT = 500;

function createImage(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    canvas.height = HEIGHT
    canvas.width = WIDTH
    var imageData = ctx.createImageData(canvas.width, canvas.height);

    let half = imageData.width / 2;

    for(let i=0;i<half;i++){
        let color= (i / half) * 255;
        console.log(color)
        for(let j=0;j<imageData.height;j++){
            setPixel(imageData,i,j,color,color,0, 255);
        }
    }

    for(let i=half;i<imageData.width;i++){
        let color= (1 - (i-half) / half) * 255;
        for(let j=0;j<imageData.height;j++){
            setPixel(imageData,i,j,255,color,0, 255);
        }
    }

    ctx.putImageData(imageData,0,0);
    console.log("Finished excecution");
    
}
function setPixel(imageData, i, j, r, g, b, a){
    index = (i+j * imageData.width) * 4;
    imageData.data[index+0] = r
    imageData.data[index+1] = g
    imageData.data[index+2] = b
    imageData.data[index+3] = a;
}

createImage();
