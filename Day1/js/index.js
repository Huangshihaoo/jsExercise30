const keys = document.querySelectorAll(".key");

keys.forEach((item) => {
    item.addEventListener("click", function() {
        const val = this.getAttribute("data-val");
        hover(item)
        play(val);

    });
});

const arr = new Map([
    ["a", "CALP"],
    ["s", "HIHAT"],
    ["d", "KICK"],
    ["f", "OPENHAT"],
    ["g", "BOOM"],
    ["h", "RIDE"],
    ["j", "SNARE"],
    ["k", "TOM"],
    ["l", "TINK"],
]);

document.addEventListener("keyup", function(e) {
    const val = arr.get(e.key);
    hover(document.querySelector(`div[data-val="${val}"]`))
    if (val) play(val);
});

function play(val) {
    const video = document.querySelector(`video[data-val="${val}"]`);
    video.currentTime = 0;
    video.play();
}

function hover(ele) {
    ele.classList.add("active");
    let time = setTimeout(() => {
        ele.classList.remove("active");
        clearTimeout(time);
    }, 200);
}