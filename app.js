// ---------- Data ---------- //

let cars = [
    {
        name: "Sports Car",
        mainImage: "/assets/car-race.png",
        specialImage: "/assets/car1.png",
        raceImage: "/assets/car-race.png",
        sound: ""
    },
    {
        name: "Pickup Truck",
        mainImage: "/assets/truck-race.png",
        specialImage: "/assets/car2.png",
        raceImage: "/assets/truck-race.png",
        sound: ""
    },
    {
        name: "Police Car",
        mainImage: "/assets/police-race.png",
        specialImage: "/assets/car1.png",
        raceImage: "/assets/police-race.png",
        sound: ""
    },
    {
        name: "Taxi",
        mainImage: "/assets/taxi-race.png",
        specialImage: "/assets/car2.png",
        raceImage: "/assets/taxi-race.png",
        sound: ""
    },
    {
        name: "Ambulance",
        mainImage: "/assets/ambulance-race.png",
        specialImage: "/assets/car1.png",
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
let carOneWins = "Car 1 Wins!!!";
let carTwoWins = "Car 2 Wins!!!";
let carSelector = document.querySelectorAll('.car');
let winnerMessage = document.querySelector('.winnerMessage');
let selectScreen = document.querySelector('.selectScreen');
let raceScreen = document.querySelector('.raceScreen');

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
        }else if (selectedTwo === ""){
            selectedTwo = cars[i]
            nextScreen();
        }else{
            return
        }
    })
 });

raceButton.addEventListener('click', function () {
    moveCarOne();
    moveCarTwo();
});





// ---------- FUNCTIONS ---------- //

function nextScreen() {
    selectScreen.classList.add("hidden")
    raceScreen.classList.remove("hidden")
    carOne.style.backgroundImage = "url(" + selectedOne.raceImage + ")"
    carTwo.style.backgroundImage = "url(" + selectedTwo.raceImage + ")"

}





// Displays cars on selector screen
function displayCars() {
for (let i = 0; i < carSelector.length; i++) {
    const car = carSelector[i];
    let image = cars[i].mainImage
    car.innerHTML = '<img src="'+ image + '">'
    }       
}

function moveCarOne(){
    randomNumber();
    carOneCount += carOneMoveNumber;
    carOne.style.left = carOneCount + "%";
    checkWinner(carOneCount, carOneWins);
};

function moveCarTwo(){
    randomNumber();
    carTwoCount += carTwoMoveNumber;
    carTwo.style.left = carTwoCount + "%";
    checkWinner(carTwoCount, carTwoWins);
};

function randomNumber() {
    carOneMoveNumber = Math.floor((Math.random() * 10)+1)
    carTwoMoveNumber = Math.floor((Math.random() * 10)+1)
};


// Checks to see if a car has reached the finish line (its car count is 100 or more)
function checkWinner(carCount) {
    if (carCount > 99){
        winnerMessage.classList.remove('hidden')
    }
};

carSelector.forEach((background, i) => {
    background.addEventListener('mouseover', () => {
        carSelector[i].classList.add('blackBg')
    })
 });

 carSelector.forEach((background, i) => {
    background.addEventListener('mouseout', () => {
        carSelector[i].classList.remove('blackBg')
    })
 });