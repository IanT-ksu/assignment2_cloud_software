const form = document.getElementById("submitForm");
const counterOutput = document.getElementById("stats");

const targetRose = document.getElementById("flower_rose");
const targetHydrangea = document.getElementById("flower_hydrangea");
const targetOrchid = document.getElementById("flower_orchid");
const targetSunflower = document.getElementById("flower_sunflower");
const targetPetunia = document.getElementById("flower_petunia");
const targetDaisy = document.getElementById("flower_daisy");
const targetPansy = document.getElementById("flower_pansy");
const targetZinnia = document.getElementById("flower_zinnia");

let roseCounter = 0;
let hydrangeaCounter = 0;
let orchidCounter = 0;
let sunflowerCounter = 0;
let petuniaCounter = 0;
let daisyCounter = 0;
let pansyCounter = 0;
let zinniaCounter = 0;


form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (targetRose.checked) {
        roseCounter++;
    }
    else if (targetHydrangea.checked) {
        hydrangeaCounter++;
    }
    else if (targetOrchid.checked) {
        orchidCounter++;
    }
    else if (targetSunflower.checked) {
        sunflowerCounter++;
    }
    else if (targetPetunia.checked) {
        petuniaCounter++;
    }
    else if (targetDaisy.checked) {
        daisyCounter++;
    }
    else if (targetPansy.checked) {
        pansyCounter++;
    }
    else if (targetZinnia.checked) {
        zinniaCounter++;
    }
    else {

    }

    counterOutput.innerHTML = "Rose: " + roseCounter +
        "<br>Hydrangea: " + hydrangeaCounter +
        "<br>Orchid: " + orchidCounter +
        "<br>Sunflower: " + sunflowerCounter +
        "<br>Petunia: " + petuniaCounter +
        "<br>Daisy: " + daisyCounter +
        "<br>Pansy: " + pansyCounter +
        "<br>Zinnia: " + zinniaCounter;
});

const planted_flowers = document.querySelectorAll("#planted");
const response_message = document.getElementById("result");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch("response.php", {
            method: "POST",
            body: formData
        });

        console.log(response);

        const data = await response.json();

        console.log(data);

        response_message.textContent = data.message;

        planted_flowers.forEach(image => {
            image.src = "/imgs/" + data.flower + ".jpg";
            image.alt = "Planted " + data.flower + " picture";
        });
    }
    catch (error) {
        console.error("An error occurred: " + error);
    }
});

form.addEventListener('reset', function (e) {
    planted_flowers.forEach(image => {
            image.src = "/imgs/icon.png";
            image.alt = "Planted flower picture";
        });
    response_message.textContent = "";
});