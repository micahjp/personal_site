export function startWindowDrag(mousedownEvent) {
    console.log(mousedownEvent.target);
    mousedownEvent.preventDefault();

    let windowElement;
    let titleBar;

    if (mousedownEvent.target.tagName !== "HEADER") {
        if (mousedownEvent.target.parentElement.tagName === "HEADER") {
            windowElement = document.getElementById(mousedownEvent.target.parentElement.dataset.target);
            titleBar = document.getElementById(mousedownEvent.target.parentElement.id);
        } else {
            throw new Error("Unable to find Title Bar");
        }
    } else {
        windowElement = document.getElementById(mousedownEvent.currentTarget.dataset.target);
        titleBar = document.getElementById(mousedownEvent.target.id);
    }

    // cursor
    titleBar.classList.remove("grab");
    titleBar.classList.add("grabbing");

    // bring clicked window to front
    document.querySelectorAll("div.window").forEach((win) => {
        win.style.zIndex = 1;
    });
    windowElement.style.zIndex++;

    const click_x = mousedownEvent.clientX;
    const click_y = mousedownEvent.clientY;
    const start_x = parseInt(windowElement.style.left || 0, 10);
    const start_y = parseInt(windowElement.style.top || 0, 10);

    function dragWindow(mousemoveEvent) {
        const x = mousemoveEvent.clientX - click_x;
        const y = mousemoveEvent.clientY - click_y;
        const new_left = x + start_x;
        const new_top = y + start_y;

        if (new_left >= 0 && new_left + windowElement.clientWidth < window.innerWidth) {
            windowElement.style.left = `${new_left}px`;
        } else {
            windowElement.style.left = 0 > new_left ? 0 : `${window.innerWidth - windowElement.clientWidth}px`;
        }

        if (new_top >= 0 && new_top  + windowElement.clientHeight < window.innerHeight - document.getElementById("dock").offsetHeight) {
            windowElement.style.top = `${new_top}px`;
        } else {
            windowElement.style.top = 0 > new_top ? 0 : `${window.innerHeight - windowElement.clientHeight - document.getElementById("dock").offsetHeight}px`;
        }
    }

    function stopWindowDrag() {
        // cursor
        titleBar.classList.add("grab");
        titleBar.classList.remove("grabbing");
        document.removeEventListener("mousemove", dragWindow);
        document.removeEventListener("mouseup", stopWindowDrag);
    }

    document.addEventListener("mousemove", dragWindow);
    document.addEventListener("mouseup", stopWindowDrag);
}


export function hideWindow(event) {
    document.getElementById(event.currentTarget.dataset.target).style.display = "none";
}


export function showWindow(event) {
    document.getElementById(event.currentTarget.dataset.target).style.display = "unset";
}

export function maximizeWindow(event) {
    
}
