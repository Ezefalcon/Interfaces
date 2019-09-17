export class Polygon {
    constructor() {
        this.circlesList = [];
        this.center = null;
    }

    addCircle(circle) {
        this.circlesList.push(circle);
    }

    joinWithCircle(canvas, circle, lineToPosX, lineToPosY) {
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(circle.posX,circle.posY);
        ctx.lineTo(lineToPosX, lineToPosY);
        ctx.strokeStyle = "#c8c334";
        ctx.stroke();
        ctx.closePath();
    }

    drawLineToLastCircle(canvas, circle) {
        if(this.circlesList[1]!=null) {
            this.joinWithCircle(canvas, circle, this.circlesList[this.circlesList.length-2].posX,
                this.circlesList[this.circlesList.length-2].posY);
        }
    }

    getCenter() {
        let sumX=0;
        let sumY=0;
        this.circlesList.forEach((x) => {
            sumX+=x.posX;
            sumY+=x.posY;
        });
        return [sumX/this.circlesList.length, sumY/this.circlesList.length];
    }

    closePolygon(canvas) {
        this.joinWithCircle(canvas, this.circlesList[this.circlesList.length - 1], this.circlesList[0].posX, this.circlesList[0].posY);
    }


    setCenter(circle) {
        this.center = circle;
    }

    makePolygons() {
        for (let i=0; i<this.circlesList.length;i++) {
            this.circlesList[i].makeCircleOnCanvas();
            if(i>0) {
                this.joinWithCircle(this.circlesList[i].canvas, this.circlesList[i],
                    this.circlesList[i-1].posX, this.circlesList[i-1].posY)
            }
        }
    }
}