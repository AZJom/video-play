document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("player1");
    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var slowerButton = document.getElementById("slower");
    var fasterButton = document.getElementById("faster");
    var skipButton = document.getElementById("skip");
    var muteButton = document.getElementById("mute");
    var volumeSlider = document.getElementById("slider");
    var volumeText = document.getElementById("volume");
    var vintageButton = document.getElementById("vintage");
    var originalButton = document.getElementById("orig");

    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            updateVolume();
        }
    });

    pauseButton.addEventListener("click", function() {
        if (!video.paused) {
            video.pause();
        }
    });

    slowerButton.addEventListener("click", function() {
        video.playbackRate -= 0.1;
        console.log("New Speed: ", video.playbackRate);
    });

    fasterButton.addEventListener("click", function() {
        if (video.playbackRate < 1.0) {
            video.playbackRate += 0.1;
            console.log("New Speed: ", video.playbackRate);
        }
    });

    skipButton.addEventListener("click", function() {
        if (video.currentTime + 10 < video.duration) {
            video.currentTime += 10;
        } else {
            video.currentTime = 0;
        }
        console.log("Current Time: ", video.currentTime);
    });

    muteButton.addEventListener("click", function() {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? "Unmute" : "Mute";
    });

    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        updateVolume();
    });

    vintageButton.addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    originalButton.addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

    function updateVolume() {
        volumeText.textContent = (video.volume * 100).toFixed(0) + "%";
    }
});
