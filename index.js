const startBtn = document.getElementById("startBtn");
const video = document.getElementById("video");

async function startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false
    });
    video.srcObject = stream;
    await video.play();
    startBtn.style.display = "none";
}

async function tryAutoStart() {
    try {
        await startCamera();
    } catch (err) {
        // Autostart faalt vaak op iOS → toon knop
        startBtn.style.display = "inline-block";
    }
}

startBtn.addEventListener("click", async () => {
    try {
        await startCamera();
    } catch (e) {
        alert("Camera-permissie nodig of niet beschikbaar.");
    }
});

tryAutoStart();