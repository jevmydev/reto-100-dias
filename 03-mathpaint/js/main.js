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
const redoStack = [];

function init() {
    resizeMathPaint();
}

function draw(stroke) {
    context.beginPath();
    context.lineWidth = stroke.width * canvasState.zoom;
    context.strokeStyle = stroke.color;
    context.lineCap = stroke.lineCap;
    context.lineJoin = stroke.lineJoin;

    context.moveTo((stroke.startX + canvasState.offsetX) * canvasState.zoom, (stroke.startY + canvasState.offsetY) * canvasState.zoom);
    stroke.points.forEach((point) => {
        context.lineTo((point.x + canvasState.offsetX) * canvasState.zoom, (point.y + canvasState.offsetY) * canvasState.zoom);
    });
    context.stroke();
}

function redrawStrokes() {
    context.clearRect(0, 0, mathpaint.width, mathpaint.height);
    context.save();
    strokes.forEach((stroke) => draw(stroke));
    context.restore();
}

function mouseDragging(e) {
    if (canvasState.isDragging) {
        const dx = (e.clientX - canvasState.dragStartX) / canvasState.zoom;
        const dy = (e.clientY - canvasState.dragStartY) / canvasState.zoom;

        canvasState.offsetX += dx;
        canvasState.offsetY += dy;

        canvasState.dragStartX = e.clientX;
        canvasState.dragStartY = e.clientY;

        redrawStrokes();
    }
}

function mouseDown(e) {
    const isLeftMouseDown = e.button === 0;

    if (isLeftMouseDown) {
        canvasState.startX = e.offsetX / canvasState.zoom - canvasState.offsetX;
        canvasState.startY = e.offsetY / canvasState.zoom - canvasState.offsetY;

        const newStroke = new Stroke({
            startX: canvasState.startX,
            startY: canvasState.startY,
            color: "#020202",
            width: 4,
            lineCap: "rounded",
            lineJoin: "rounded"
        });

        strokes.push(newStroke);
        redoStack.length = 0;
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
}

function mouseMoving(e) {
    const currentStroke = strokes[strokes.length - 1];
    if (currentStroke) {
        const adjustedX = e.offsetX / canvasState.zoom - canvasState.offsetX;
        const adjustedY = e.offsetY / canvasState.zoom - canvasState.offsetY;

        currentStroke.addPoint(adjustedX, adjustedY);
        draw(currentStroke);
    }
}

function mouseUp(e) {
    const isLeftMouseDown = e.button === 0;

    if (isLeftMouseDown) {
        mathpaint.removeEventListener("mousemove", mouseMoving);
    } else {
        canvasState.isDragging = false;
        mathpaint.classList.remove("mathpaint__canvas--cursorgrabbing");
        mathpaint.removeEventListener("mousemove", mouseDragging);
    }
}

function mouseLeave() {
    if (canvasState.isDragging) {
        canvasState.isDragging = false;
        mathpaint.classList.remove("mathpaint__canvas--cursorgrabbing");
    }

    mathpaint.removeEventListener("mousemove", mouseMoving);
    mathpaint.removeEventListener("mousemove", mouseDragging);
}

function resizeMathPaint() {
    mathpaint.width = window.innerWidth;
    mathpaint.height = window.innerHeight;
    redrawStrokes();
}

function undo() {
    if (strokes.length > 0) {
        const stroke = strokes.pop();
        redoStack.push(stroke);
        redrawStrokes();
    }
}

function redo() {
    if (redoStack.length > 0) {
        const stroke = redoStack.pop();
        strokes.push(stroke);
        redrawStrokes();
    }
}

function handleKeyboardShortcuts(e) {
    if (e.ctrlKey) {
        if (e.key === "z") {
            e.preventDefault();
            undo();
        } else if (e.key === "y") {
            e.preventDefault();
            redo();
        }
    }
}

function handleScroll(e) {
    e.preventDefault();
    const isScrollUp = e.deltaY < 0;

    if (isScrollUp) canvasState.zoom += 0.1;
    else canvasState.zoom -= 0.1;

    canvasState.zoom = Math.min(Math.max(canvasState.zoom, 0.5), 2);

    redrawStrokes();
}

mathpaint.addEventListener("mousedown", mouseDown);
mathpaint.addEventListener("mouseup", mouseUp);
mathpaint.addEventListener("mouseleave", mouseLeave);
mathpaint.addEventListener("contextmenu", (e) => e.preventDefault());

window.addEventListener("keydown", handleKeyboardShortcuts);
window.addEventListener("resize", resizeMathPaint);
window.addEventListener("wheel", handleScroll, { passive: false });

init();
