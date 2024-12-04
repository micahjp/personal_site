import * as windows from "./windows.js";

document.querySelectorAll("header.titleBar").forEach((header)=>{
    header.addEventListener("mousedown", windows.startWindowDrag);
});

document.querySelectorAll("button.show").forEach(button => {
    button.addEventListener("click", windows.showWindow);
});

document.querySelectorAll("button.hide").forEach((button) => {
    button.addEventListener("click", windows.hideWindow);
});

