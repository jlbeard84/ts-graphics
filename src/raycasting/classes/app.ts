export class App {

    public static MAP_WIDTH: number = 24;
    public static MAP_HEIGHT: number = 24;

    private _context: CanvasRenderingContext2D;
    private _canvasWidth: number;
    private _canvasHeight: number;

    private _worldMap: number[][];
    private _posX: number = 22;
    private _posY: number = 12;
    private _dirX: number = -1;
    private _dirY: number = 0;
    private _planeX: number = 0;
    private _planeY: number = 0.66;

    private _time: number = 0;
    private _oldTime: number = 0;

    constructor(
        context: CanvasRenderingContext2D) {
        
        this._context = context;
        this._canvasWidth = this._context.canvas.width;
        this._canvasHeight = this._context.canvas.height;
    }

    public run(): void {

        this._worldMap = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];

        this.runLoop();
    }

    private runLoop(): void {

        requestAnimationFrame(this.runLoop.bind(this));

        this._context.clearRect(
            0, 
            0, 
            this._canvasWidth, 
            this._canvasHeight);

        for (let x = 0; x < this._canvasWidth; x++) {
            // calculate ray position and direction
            let cameraX = 2 * x / this._canvasWidth - 1;
            let rayDirX = this._dirX + this._planeX * cameraX;
            let rayDirY = this._dirY + this._planeY * cameraX;

            // which map box is vector in
            let mapX = Number(this._posX);
            let mapY = Number(this._posY);

            // length of ray from current position to next x or y side
            let sideDistX: number;
            let sideDistY: number;

            // length of ray from one x or y side to next x or y side
            let deltaDistX: number = Math.abs(1 / rayDirX);
            let deltaDistY: number = Math.abs(1 / rayDirY);
            let perpWallDist: number;

            // what direction to move in x or y (+1/-1)
            let stepX: number;
            let stepY: number;

            let hit: number = 0;
            let side: number;

            // calculcate step and initial sideDist
            if (rayDirX < 0) {
                stepX = -1;
                sideDistX = (this._posX - mapX) * deltaDistX;
            } else {
                stepX = 1;
                sideDistX = (mapX + 1 - this._posX) * deltaDistX;
            }

            if (rayDirY < 0) {
                stepY = -1;
                sideDistY = (this._posY - mapY) * deltaDistY;
            } else {
                stepY = 1;
                sideDistY = (mapY + 1 - this._posY) * deltaDistY;
            }

            // DDA 
            while (hit === 0) {
                // jump to next map square || X direction || Y direction
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += stepX;
                    side = 0;
                } else {
                    sideDistY += deltaDistY;
                    mapY += stepY;
                    side = 1;
                }

                if (this._worldMap[mapX][mapY] > 0) {
                    hit = 1;
                }
            }

            // calculate distance projected on camera direction
            if (side === 0) {
                perpWallDist = (mapX - this._posX + (1 - stepX) / 2) / rayDirX;
            } else {
                perpWallDist = (mapY - this._posY + (1 - stepY) / 2) / rayDirY;
            }

            // calculate height of line to be drawn on screen
            let lineHeight: number = Math.floor(this._canvasHeight / perpWallDist);

            // get actual canvas line height
            let drawStart: number = -lineHeight / 2 + this._canvasHeight / 2;

            drawStart = drawStart < 0
                ? 0
                : drawStart;

            let drawEnd: number = lineHeight / 2 + this._canvasHeight / 2;

            drawEnd = drawEnd >= this._canvasHeight
                ? this._canvasHeight - 1
                : drawEnd;

            let hexColor: string;

            switch(this._worldMap[mapX][mapY]) {
                case 1:
                    hexColor = side === 0
                        ? "#FF0000"
                        : "#8B0000";
                    break;
                case 1:
                    hexColor = side === 0
                        ? "#008000"
                        : "#006400";
                    break;
                case 1:
                    hexColor = side === 0
                        ? "#0000FF"
                        : "#00008B";
                    break;
                case 1:
                    hexColor = side === 0
                        ? "#FFFFFF"
                        : "#DCDCDC";
                    break;
                default:
                    hexColor = side === 0
                        ? "#FFFF00"
                        : "#BDB76B";
                    break;
            }

            this._context.beginPath();
            this._context.moveTo(x, drawStart);
            this._context.lineTo(drawStart, drawEnd);
            this._context.closePath();
            
            this._context.lineWidth = 1;
            this._context.strokeStyle = hexColor;
            this._context.stroke();
        }
    }
}
