

var image = new Image();
image.src = "./img/image.jpg";

image.onload = function() {
  drawThatImage(this)
  document.querySelector("#filter").addEventListener("click", function() {
    toGrayScale();
  });
}

function drawThatImage(img){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    var imageData=ctx.getImageData(0,0, canvas.width, canvas.height);
    console.log(imageData)
}

function toGrayScale() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    var imageData=ctx.getImageData(0,0, canvas.width, canvas.height);
    console.log(imageData)
    for (i = 0; i < imageData.width; i++) {
      for(j = 0; j < imageData.height; j++) {
        var index=(j*4)*imageData.width+(i*4);
         var r=imageData.data[index];
         var g=imageData.data[index+1];
         var b=imageData.data[index+2];
         var average=(r+g+b)/3;
        setPixel(imageData, i, j, average,average,average,255)
       }
     }
     ctx.putImageData(imageData, 0,0);
     
     console.log(imageData)
     console.log("Finished execution");
}

function setPixel(imageData, i, j, r, g, b, a) {
  index = (i+j * imageData.width) * 4;
  imageData.data[index+0] = r
  imageData.data[index+1] = g
  imageData.data[index+2] = b
  imageData.data[index+3] = a;
}