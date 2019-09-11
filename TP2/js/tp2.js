// Array of circles
var circlesList = [];
// AddEventListener for exercise 1
var canvas1 = document.getElementById('canvas1');
if(canvas1!=null) {
    createSquare(canvas1)
    canvas1.addEventListener("click", function(e) {
        getPosYAndXFromCanvas(e, this);
    });
}
//AddEventListener for exercise 2
var canvas2 = document.getElementById('canvas2');
if(canvas2!=null){
    canvas2.addEventListener("click", function(e) {
        createCircleOnClick(e, this);
    });
}
//AddEventListener for exercise 3
var canvas3 = document.getElementById('canvas3');
if(canvas3!=null){
    canvas3.addEventListener("click", function(e) {
        let circle = createCircleOnClick(e, this);
        drawLineToLastCircle(canvas3, circle);
    });
}
//AddEventListener for exercise 4
var canvas4 = document.getElementById('canvas4');
var closeButton = document.getElementById('closeButton');
if(canvas4!=null){
    var circle;
    closeButton.addEventListener("click", function(e) {
        joinWithCircle(canvas4, circle, circlesList[0].posX, circlesList[0].posY);
    });
    canvas4.addEventListener("click", function(e) {
        circle = createCircleOnClick(e, this);
        drawLineToLastCircle(canvas4, circle);
    });
}
//AddEventListener for exercise 4
var canvas5 = document.getElementById('canvas5');
var getCenterButton = document.getElementById('getCenter');
if(canvas5!=null){
    var circle;
    closeButton.addEventListener("click", function(e) {
        joinWithCircle(canvas5, circle, circlesList[0].posX, circlesList[0].posY);
    });
    canvas5.addEventListener("click", function(e) {
        circle = createCircleOnClick(e, this);
        drawLineToLastCircle(canvas5, circle);
    });
    getCenterButton.addEventListener("click", function (e) {
        let center = getCenter();
        makeCircle(new Circle(center[0],center[1], 7, "#1cc805"), canvas5);
    });
}


// Ejercicio 1
function getPosYAndXFromCanvas(e, canvas) {
    //dentro del Element del document
    var eX = e.layerX;
    var eY = e.layerY;
    console.log("Posicion en X: "+ eX);
    console.log("Posicion en Y: "+ eY);
}

function createSquare(canvas) {
    var ctx = canvas.getContext('2d');
    // x, y, w, h
    ctx.fillRect(0, 0, 500, 500);
}

function createCircleOnClick(e, canvas2) {
    let circle = new Circle(e.layerX, e.layerY, 20, "#c82124")
    makeCircle(circle, canvas2);
    circlesList.push(circle);
    return circle;
}

function makeCircle(circle,canvas) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.posX,circle.posY, circle.radio, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

function drawLineToLastCircle(canvas3, circle) {
    if(circlesList[1]!=null) {
        joinWithCircle(canvas3, circle, circlesList[circlesList.length-2].posX,
            circlesList[circlesList.length-2].posY);
    }
}

function joinWithCircle(canvas, circle, lineToPosX, lineToPosY) {
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(circle.posX,circle.posY);
    ctx.lineTo(lineToPosX, lineToPosY);
    ctx.strokeStyle = "#c8c334";
    ctx.stroke();
    ctx.closePath();
}

function getCenter() {
    let sumX=0;
    let sumY=0;
    circlesList.forEach((x) => {
        sumX+=x.posX;
        sumY+=x.posY;
    });
    return [sumX/circlesList.length, sumY/circlesList.length];
}

function Circle(posX, posY, radio, color) {
    this.posX = posX;
    this.posY = posY;
    this.radio = radio;
    this.color = color;
}
