var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
    if (video.paused) {
        video.play();
        updateVolume();
    }
});

document.querySelector("#pause").addEventListener("click", function() {
    if (!video.paused) {
        video.pause();
    }
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate -= 0.1;
    console.log("New Speed: ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    if (video.playbackRate < 1.0) {
        video.playbackRate += 0.1;
        console.log("New Speed: ", video.playbackRate);
    }
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current Time: ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;
    this.textContent = video.muted ? "Unmute" : "Mute";
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    updateVolume();
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});

function updateVolume() {
    document.querySelector("#volume").textContent = (video.volume * 100).toFixed(0) + "%";
}
