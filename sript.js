let show = document.getElementById("here");

function create(mess, annimation) {
    let delay = Math.floor(Math.random() * 5000) + 1000;
    return new Promise((resolve) => {
        let line = document.createElement("div");
        line.classList.add("line");
        line.innerHTML = `<span>${mess}</span>` + annimation;
        show.appendChild(line);

        setTimeout(() => {
            line.innerHTML = `<span>${mess}</span>:-    Done✅`;
            resolve();
        }, delay);
    });
}

let three = `<div class="effects">
                <div class="effect"></div>
                <div class="effect"></div>
                <div class="effect"></div>
            </div>`;

function grant() {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.innerHTML = `<video src="Assetes/Screen_Recording_20250817_110838_YouTube.mp4" autoplay class="grant" ></video>`;
            resolve();
        }, 2000);
    });
}

async function access() {
    await create("Initializing Hacking ", three);
    await create("Initialized Hacking connecting to server", three);
    await create("Reading your Files", three);
    await create("Password files Detected", three);
    await create("Sending all passwords and personal files to server", three);
    await create("Cleaning up", three);

    await grant();
}

access();