function displayWindow(event) {
    console.log(event.currentTarget.dataset.target);
    document.getElementById(event.currentTarget.dataset.target).style.display = "unset";
}
