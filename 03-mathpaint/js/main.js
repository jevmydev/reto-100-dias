import { Stroke } from "./stroke.js";

const mathpaint = document.getElementById("mathpaint");
const context = mathpaint.getContext("2d");

const canvasState = {
    startX: 0,
    startY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    offsetX: 0,
    offsetY: 0,
    zoom: 1
};

const strokes = [];

function init() {
    resizeMathPaint();
}

function draw(stroke) {
    context.beginPath();
    context.lineWidth = stroke.width;
    context.strokeStyle = stroke.color;
    context.lineCap = stroke.lineCap;
    context.lineJoin = stroke.lineJoin;

    context.moveTo(stroke.startX + canvasState.offsetX, stroke.startY + canvasState.offsetY);
    stroke.points.forEach((point) => {
        context.lineTo(point.x + canvasState.offsetX, point.y + canvasState.offsetY);
    });
    context.stroke();
}

const mouseDragging = (e) => {
    if (canvasState.isDragging) {
        const dx = e.clientX - canvasState.dragStartX;
        const dy = e.clientY - canvasState.dragStartY;

        canvasState.offsetX += dx;
        canvasState.offsetY += dy;

        canvasState.dragStartX = e.clientX;
        canvasState.dragStartY = e.clientY;

        context.clearRect(0, 0, mathpaint.width, mathpaint.height);
        redrawStrokes();
    }
};

const mouseDown = (e) => {
    const isLeftMouseDown = e.button === 0;

    if (isLeftMouseDown) {
        canvasState.startX = e.offsetX - canvasState.offsetX;
        canvasState.startY = e.offsetY - canvasState.offsetY;

        const newStroke = new Stroke({ startX: canvasState.startX, startY: canvasState.startY, color: "#020202", width: 4, lineCap: "rounded", lineJoin: "rounded" });
        strokes.push(newStroke);
        newStroke.addPoint(canvasState.startX, canvasState.startY);

        draw(newStroke);
        mathpaint.addEventListener("mousemove", mouseMoving);
    } else {
        canvasState.isDragging = true;
        mathpaint.classList.add("mathpaint__canvas--cursorgrabbing");
        canvasState.dragStartX = e.clientX;
        canvasState.dragStartY = e.clientY;
        mathpaint.addEventListener("mousemove", mouseDragging);
    }
};

const mouseMoving = (e) => {
    const currentStroke = strokes[strokes.length - 1];

    if (currentStroke) {
        const adjustedX = e.offsetX - canvasState.offsetX;
        const adjustedY = e.offsetY - canvasState.offsetY;

        currentStroke.addPoint(adjustedX, adjustedY);
        draw(currentStroke);
    }
};

const mouseUp = (e) => {
    const isLeftMouseDown = e.button === 0;

    if (isLeftMouseDown) {
        mathpaint.removeEventListener("mousemove", mouseMoving);
    } else {
        canvasState.isDragging = false;
        mathpaint.classList.remove("mathpaint__canvas--cursorgrabbing");
        mathpaint.removeEventListener("mousemove", mouseDragging);
    }
};

const mouseLeave = () => {
    if (canvasState.isDragging) {
        canvasState.isDragging = false;
        mathpaint.classList.remove("mathpaint__canvas--cursorgrabbing");
    }

    mathpaint.removeEventListener("mousemove", mouseMoving);
    mathpaint.removeEventListener("mousemove", mouseDragging);
};

const redrawStrokes = () => {
    strokes.forEach((stroke) => draw(stroke));
};

const resizeMathPaint = () => {
    mathpaint.width = window.innerWidth;
    mathpaint.height = window.innerHeight;
    redrawStrokes();
};

const handleScroll = (e) => {
    e.preventDefault();
    const isScrollUp = e.deltaY < 0;

    if (isScrollUp) canvasState.zoom += 0.1;
    else canvasState.zoom -= 0.1;

    canvasState.zoom = Math.min(Math.max(canvasState.zoom, 0.5), 2);

    mathpaint.style.transform = `scale(${canvasState.zoom})`;
    mathpaint.style.transformOrigin = "top left";
};

mathpaint.addEventListener("mousedown", mouseDown);
mathpaint.addEventListener("mouseup", mouseUp);
mathpaint.addEventListener("mouseleave", mouseLeave);
mathpaint.addEventListener("contextmenu", (e) => e.preventDefault());

window.addEventListener("resize", resizeMathPaint);
window.addEventListener("wheel", handleScroll, { passive: false });

init();
