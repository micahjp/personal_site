function start_drag(mousedownEvent) {
    const windowElement = document.getElementById("window")

    const click_x = mousedownEvent.clientX;
    const click_y = mousedownEvent.clientY;
    const start_x = parseInt(windowElement.style.left || 0, 10);
    const start_y = parseInt(windowElement.style.top || 0, 10);

    function on_mousemove(mousemoveEvent) {
        const x = mousemoveEvent.clientX - click_x;
        const y = mousemoveEvent.clientY - click_y;

        console.log(`x position = ${x} | y position = ${y}`);

        windowElement.style.left = `${x + start_x}px`;
        windowElement.style.top = `${y + start_y}px`;
    }

    function end_drag() {
        document.removeEventListener("mousemove", on_mousemove);
        document.removeEventListener("mouseup", end_drag);
    }

    document.addEventListener("mousemove", on_mousemove);
    document.addEventListener("mouseup", end_drag);
}

document.getElementById("window").addEventListener("mousedown", start_drag);
