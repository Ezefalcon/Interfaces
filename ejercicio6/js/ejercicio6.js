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

function toGrayScale(image) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0)

    var imageData=ctx.getImageData(0,0, image.width, image.height);
    for (j=0; j<imageData.height; i++)
    {
      for (i=0; i<imageData.width; j++)
      {
         var index=(i*4)*imageData.width+(j*4);
         var red=imageData.data[index];
         var green=imageData.data[index+1];
         var blue=imageData.data[index+2];
         var alpha=imageData.data[index+3];
         var average=(red+green+blue)/3;
   	    imageData.data[index]=average;
         imageData.data[index+1]=average;
         imageData.data[index+2]=average;
         imageData.data[index+3]=alpha;
       }
     }
}

//drawThatImage(image)
toGrayScale(image)