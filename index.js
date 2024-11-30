document.getElementById("window").addEventListener("mousedown", start_drag);

function start_drag(mousedownEvent) {
    const windowElement = document.getElementById("window")

    const click_x = mousedownEvent.clientX;
    const click_y = mousedownEvent.clientY;
    const start_x = parseInt(windowElement.style.left || 0, 10);
    const start_y = parseInt(windowElement.style.top || 0, 10);

    function on_mousemove(mousemoveEvent) {
        const x = mousemoveEvent.clientX - click_x;
        const y = mousemoveEvent.clientY - click_y;
        const new_left = x + start_x;
        const new_top = y + start_y;

        console.log(`window iw = ${window.innerWidth} | window_x = ${new_left + windowElement.clientWidth}`)
        if (new_left >= 0 && new_left + windowElement.clientWidth < window.innerWidth) {
            windowElement.style.left = `${new_left}px`;
        } else {
            if (new_left < 0) {
                windowElement.style.left = 0;
            } else {
                windowElement.style.left = `${window.innerWidth - windowElement.clientWidth}px`;
            }
        }

        if (new_top >= 0 && new_top  + windowElement.clientHeight < window.innerHeight - document.getElementById("dock").clientHeight) {
            windowElement.style.top = `${new_top}px`;
        } else {
            windowElement.style.top = 0 > new_top ? 0 : `${window.innerHeight - windowElement.clientHeight - document.getElementById("dock").clientHeight}px`;
        }
    }

    function end_drag() {
        document.removeEventListener("mousemove", on_mousemove);
        document.removeEventListener("mouseup", end_drag);
    }

    document.addEventListener("mousemove", on_mousemove);
    document.addEventListener("mouseup", end_drag);
}

const buttons = document.querySelectorAll(".toggleDisplay");
buttons.forEach(button => {
    button.addEventListener("click", show_element);
});

function show_element(event) {
    console.log(event.currentTarget.dataset.target);
    document.getElementById(event.currentTarget.dataset.target).style.display = "unset";
}


document.getElementById("windowButton").addEventListener("click", do_action);
function do_action(event) {
    document.getElementById(event.currentTarget.dataset.target).style.display = "none";
}
