export class Stroke {
    constructor({ startX, startY, color, width, lineCap, lineJoin }) {
        this.startX = startX;
        this.startY = startY;
        this.color = color;
        this.width = width;
        this.lineCap = lineCap;
        this.lineJoin = lineJoin;
        this.points = [];
    }

    addPoint(x, y) {
        this.points.push({ x, y });
    }
}
