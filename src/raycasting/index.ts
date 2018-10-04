import { App } from "./classes/app";

window.onload = () => {

    const canvasElement = document.querySelector("#tsRaycasting") as HTMLCanvasElement;
    const context = canvasElement.getContext("2d");

    const app = new App(context);
    app.run();
}