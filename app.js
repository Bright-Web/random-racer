// ---------- Data ---------- //

let cars = [
    {
        name: "Sports Car",
        mainImage: "/assets/select-images/car-select.png",
        specialImage: "/assets/select-images/car-nitro.png",
        raceImage: "/assets/car-race.png",
        sound: ""
    },
    {
        name: "Pickup Truck",
        mainImage: "/assets/select-images/truck-select.png",
        specialImage: "/assets/select-images/truck-nitro.png",
        raceImage: "/assets/truck-race.png",
        sound: ""
    },
    {
        name: "Police Car",
        mainImage: "/assets/select-images/police-select.png",
        specialImage: "/assets/select-images/police-nitro.png",
        raceImage: "/assets/police-race.png",
        sound: ""
    },
    {
        name: "Taxi",
        mainImage: "/assets/select-images/taxi-select.png",
        specialImage: "/assets/select-images/taxi-nitro.png",
        raceImage: "/assets/taxi-race.png",
        sound: ""
    },
    {
        name: "Ambulance",
        mainImage: "/assets/select-images/ambulance-select.png",
        specialImage: "/assets/select-images/ambulance-nitro.png",
        raceImage: "/assets/ambulance-race.png",
        sound: ""
    }
]


// ---------- GLOBAL VARIABLES ---------- //

let carOne = document.querySelector('.lane-1-car');
let carTwo = document.querySelector('.lane-2-car');
let carOneCount = 0;
let carTwoCount = 0;
let carOneMoveNumber = "";
let carTwoMoveNumber = "";
let raceButton = document.querySelector('.race-button');
let carSelector = document.querySelectorAll('.car');
let carImage = document.querySelectorAll('.car-image');
let selectedText = document.querySelectorAll('.selectedText');
let winnerMessage = document.querySelector('.winnerMessage');
let startMessage = document.querySelector('.startMessage');
let winnerText = document.querySelector('.winnerText');
let selectScreen = document.querySelector('.selectScreen');
let raceScreen = document.querySelector('.raceScreen');
let resetButton = document.querySelector('.reset');
let startButton = document.querySelector('.start');
let cancelButton = document.querySelector('.cancel');

let selectedOne = ""
let selectedTwo = ""

let car1 = document.querySelector('.car-1');



// ---------- Event Listeners and Called Fuctions ---------- //

displayCars();

// Click listener that assigns the clicked cars to the selected variable
carSelector.forEach((car, i) => {
    car.addEventListener('click', () => {
        if (selectedOne === ""){
            selectedOne = cars[i];
            selectedText[i].classList.remove('hidden')
            carSelector[i].classList.add('steelBg')
        }else if (selectedTwo === ""){
            selectedTwo = cars[i]
            selectedText[i].classList.remove('hidden')
            carSelector[i].classList.add('steelBg')
            startMessage.classList.remove('hidden')
        }else{
            return
        }
    })
    
 });

raceButton.addEventListener('click', function () {
    moveCarOne();
    moveCarTwo();
});


resetButton.addEventListener('click', function () {
    reset();
});
startButton.addEventListener('click', function () {
    nextScreen();
});
cancelButton.addEventListener('click', function () {
    reset();
});





// ---------- FUNCTIONS ---------- //


function reset() {
    startMessage.classList.add('hidden')
    selectScreen.classList.remove("hidden")
    raceScreen.classList.add("hidden")
    selectedOne = ""
    selectedTwo = ""
    carOneCount = 0;
    carTwoCount = 0;
    carOneMoveNumber = "";
    carTwoMoveNumber = "";
    carOne.style.left = carOneCount + "%";
    carTwo.style.left = carOneCount + "%";
    winnerMessage.classList.add('hidden');
    selectedText.forEach(el => {
        el.classList.add('hidden')
    });
    carSelector.forEach(el => {
        el.classList.remove('steelBg')
    });
    
}

function nextScreen() {
    selectScreen.classList.add("hidden")
    raceScreen.classList.remove("hidden")
    carOne.style.backgroundImage = "url(" + selectedOne.raceImage + ")"
    carTwo.style.backgroundImage = "url(" + selectedTwo.raceImage + ")"

}

// Displays cars on selector screen
function displayCars() {
for (let i = 0; i < carSelector.length; i++) {
    const car = carImage[i];
    let image = cars[i].mainImage
    car.src = image
    }       
}

function moveCarOne(){
    randomNumber();
    carOneCount += carOneMoveNumber;
    carOne.style.left = carOneCount + "%";
    checkWinner(carOneCount, selectedOne);
};

function moveCarTwo(){
    randomNumber();
    carTwoCount += carTwoMoveNumber;
    carTwo.style.left = carTwoCount + "%";
    checkWinner(carTwoCount, selectedTwo);
};

function randomNumber() {
    carOneMoveNumber = Math.floor((Math.random() * 10)+1)
    carTwoMoveNumber = Math.floor((Math.random() * 10)+1)
};


// Checks to see if a car has reached the finish line (its car count is 100 or more)
function checkWinner(carCount, selectedCar) {

    if (carCount > 99){
        winnerMessage.classList.remove('hidden');
        winnerText.innerHTML = selectedCar.name + " Wins !"
    }
};

carSelector.forEach((background, i) => {
    background.addEventListener('mouseover', () => {
        carSelector[i].classList.add('blackBg')
        const car = carImage[i];
        car.src = cars[i].specialImage
    })

 });

 carSelector.forEach((background, i) => {
    background.addEventListener('mouseout', () => {
        carSelector[i].classList.remove('blackBg')
        const car = carImage[i];
        car.src = cars[i].mainImage
    })

 });