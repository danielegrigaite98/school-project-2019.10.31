const lines = document.querySelector(".line");
window.addEventListener("laod", start);

function start() {
    lines.forEach(drawThis);
}

function drawThis(line, i) {
    console.log(i);
    setTimeout(function () {
                line.classList.add("draw");
            },i * 1000); }
