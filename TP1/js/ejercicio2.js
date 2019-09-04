var ctx = document.getElementById("canvas").getContext("2d");
ctx.fillStyle = "#000000";
// x, y, w,h
ctx.fillRect(0, 0, 500, 500);

ctx.beginPath()
ctx.arc(450, 110,100, Math.PI * 1/2, Math.PI * 3/2)
ctx.lineWidth =15;
ctx.lineCap = 'round';
ctx.strokeStyle = 'rgba(255,127,0,0.5)';
ctx.strokeStyle();