import { Triangle } from "./Triangle";

export class App {

    public static TRIANGLE_SIZE: number = 100;
    public static NUM_TRIANGLES: number = 3;

    private _context: CanvasRenderingContext2D;
    private _beginPosition: number = 1;
    private _canvasWidth: number;
    private _canvasHeight: number;
    private _triangles: Triangle[] = [];

    constructor(
        context: CanvasRenderingContext2D) {
        
        this._context = context;
        this._canvasWidth = this._context.canvas.width;
        this._canvasHeight = this._context.canvas.height;
    }

    public run(): void {

        for (let i = 0; i < App.NUM_TRIANGLES; i++) {
            this._triangles.push(
                new Triangle(
                    this._beginPosition + (i * 110),
                    App.TRIANGLE_SIZE,
                    this._context,
                    this._canvasWidth,
                    this._canvasHeight
                )
            );
        }

        this.runLoop();
    }

    private runLoop(): void {

        requestAnimationFrame(this.runLoop.bind(this));

        this._context.clearRect(
            0, 
            0, 
            this._canvasWidth, 
            this._canvasHeight);

        for (let i = 0; i < this._triangles.length; i++) {
            this._triangles[i].update();
            this._triangles[i].draw();    
        }
    }
}
