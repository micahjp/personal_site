document.querySelectorAll("header.titleBar").forEach((header)=>{
    header.addEventListener("mousedown", startWindowDrag);
});


document.querySelectorAll(".toggleDisplay").forEach(button => {
    button.addEventListener("click", displayWindow);
});

document.querySelectorAll("button.close").forEach((button) => {
    button.addEventListener("click", hideWindow);
});

