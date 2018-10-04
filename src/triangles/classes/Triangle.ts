import { App } from "./App";

export class Triangle {

    public static TRIANGLE_SPEED: number = 3;

    private _position: number;
    private _size: number;
    private _directionIsDown: boolean = true;
    private _canvasHeight: number;
    private _canvasWidth: number;

    private _context: CanvasRenderingContext2D;

    constructor(
        position: number,
        size: number,
        context: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number) {

        this._position = position;
        this._size = size;
        this._context = context;
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
    }

    public update() {

        const testPosition = this._position + this._size;

        if (testPosition >= this._canvasHeight) {
            this._directionIsDown = false;
        } else if (testPosition <= this._size) {
            this._directionIsDown = true;
        }

        this._position = this._directionIsDown 
            ? this._position += Triangle.TRIANGLE_SPEED
            : this._position -= Triangle.TRIANGLE_SPEED;
    }

    public draw() {
        const middlePosition = this._position +this._size;

        this._context.beginPath();
        this._context.moveTo(this._position, this._position);
        this._context.lineTo(this._position, middlePosition);
        this._context.lineTo(middlePosition, middlePosition);
        this._context.closePath();
        
        this._context.lineWidth = 1;
        this._context.strokeStyle = "#666666";
        this._context.stroke();
    }
}
