export class Circle {
    constructor(posX, posY, radio, color, canvas) {
        this.posX = posX;
        this.posY = posY;
        this.radio = radio;
        this.color = color;
        this.canvas = canvas;
    }

    isClicked(posX, posY) {
        let distance = Math.sqrt(Math.pow(posX - this.posX, 2) + Math.pow(posY - this.posY, 2));
        return distance < this.radio;
    }

    makeCircleOnCanvas() {
        let ctx = this.canvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.posX,this.posY, this.radio, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    move(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }
}