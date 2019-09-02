document.querySelector("#filter").addEventListener("click", () => {
    toGrayScale(image);
});

var image = new Image();
image.src = "image.jpg";

image.onload = function() {
  drawThatImage(this)
}

function drawThatImage(image){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
}

async function toGrayScale(image) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    console.log(canvas.width)
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    var imageData=ctx.getImageData(0,0, canvas.width, canvas.height);
    
    for (i = 0; i < imageData.width; i++) {
      for(j = 0; j < imageData.height; j++) {
        index = (i+j * imageData.width) * 4;
         var r=imageData.data[index];
         var g=imageData.data[index+1];
         var b=imageData.data[index+2];
         var a=imageData.data[index+3];
         var average=(r+g+b)/3;
        setPixel(imageData, i, j, average,average,average,average)
       }
     }
     console.log("Finished execution");

}

function setPixel(imageData, i, j, r, g, b, a){
  index = (i+j * imageData.width) * 4;
  imageData.data[index+0] = r
  imageData.data[index+1] = g
  imageData.data[index+2] = b
  imageData.data[index+3] = a;
}