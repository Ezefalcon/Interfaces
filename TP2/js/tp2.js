"use strict";

import { Circle } from "./Circle.js";
import { Polygon } from "./Polygon.js";

// List of polygons
var polygonsList = [];
// Current polygon
var polygon = new Polygon();

// AddEventListener for exercise 1
var canvas1 = document.getElementById('canvas1');
if(canvas1!=null) {
    createSquare(canvas1)
    canvas1.addEventListener("click", function(e) {
        getPosYAndXFromCanvas(e, this);
    });
}
//AddEventListener for exercise 6
var canvas6 = document.getElementById('canvas6');
var closeButton = document.getElementById('closeButton');
if(canvas6!=null) {
    let isClosed=false;
    let circle;
    closeButton.addEventListener("click", function(e) {
        if (!isClosed) {
            closeAndMakeCircle(circle);
            closeButton.innerText = "Crear nuevo poligono";
            isClosed = true;
        } else {
            closeButton.innerText = "Cierre el poligono";
            polygon = new Polygon();
            isClosed = false;
        }
    });
    canvas6.addEventListener("click", function(e) {
        let onMove = document.getElementById('onMove').checked;
        if (!onMove) {
            circle = new Circle(e.layerX, e.layerY, 20, "#c82124", canvas6);
            circle.makeCircleOnCanvas();
            polygon.addCircle(circle);
            polygon.drawLineToLastCircle(canvas6, circle);
        }
    });
}

function closeAndMakeCircle() {
    polygon.closePolygon(canvas6);
    let center = polygon.getCenter();
    let circle = new Circle(center[0],center[1], 7, "#1cc805", canvas6);
    circle.makeCircleOnCanvas();
    polygon.setCenter(circle);
    polygonsList.push(polygon);
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

addEventListener('DOMContentLoaded', () => {
    var selectedPolygon, selectedCircle;
    canvas6.onmousedown = e => {
        for(let poly of polygonsList) {
            if(poly.center!=null) {
                if(poly.center.isClicked(e.layerX, e.layerY)) {
                    selectedPolygon = poly;
                    break;
                }
            }
        }
        for(let poly of polygonsList) {
            for (let circle of poly.circlesList) {
                if (circle.isClicked(e.layerX, e.layerY)) {
                    selectedCircle = circle;
                    break;
                }
            }
        }
    }
    canvas6.onmousemove = event => {
        if(selectedCircle!=null) {
            selectedCircle.move(event.layerX, event.layerY);
            drawEmAgain();
        }
    }

    canvas6.onmouseup = event => {
        selectedCircle = null;
        selectedPolygon = null;
    }
});

function drawEmAgain() {
    var ctx = canvas6.getContext('2d');
    ctx.clearRect(0,0, canvas6.width, canvas6.height)
    for (let poly of polygonsList) {
        poly.makePolygons();
    }
    closeAndMakeCircle();
}


