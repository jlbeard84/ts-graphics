import { App } from "./classes/App";

window.onload = () => {

    const canvasElement = document.querySelector("#tsTriangles") as HTMLCanvasElement;
    const context = canvasElement.getContext("2d");

    const app = new App(context);
    app.run();
}