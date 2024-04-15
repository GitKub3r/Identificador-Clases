let boxList = document.querySelectorAll(".box");

let btnStart = document.getElementById("btnStart");

let txtError = document.getElementById("error");

let maxNumber = document.getElementById("max");
let randomNumber;


btnStart.addEventListener("click", function(event) {
    if (maxNumber.value > 0) {
        txtError.classList.remove("error");
        
        reset();
        generateNumbers();
        addColor();
    } else {
        txtError.classList.add("error");
    }
});

function addColor() {
    for (const item of boxList) {
        switch (item.textContent) {
            case "1":
                item.classList.add("box1");
                break;

            case "2":
                item.classList.add("box2");
                break;

            case "3":
                item.classList.add("box3");
                break;

            case "4":
                item.classList.add("box4");
                break;

            case "5":
                item.classList.add("box5");
            break;

            default:
                item.classList.add("boxN");
                break;
        }
    }
}

function generateNumbers() {
    for (const item of boxList) {
        randomNumber = Math.floor((Math.random() * maxNumber.value) + 1);
        item.textContent = randomNumber;
    }
    
    addColor();
}

function reset() {
    for (const item of boxList) {
        item.classList.remove("box1", "box2", "box3", "box4", "box5", "boxN");
        item.textContent = "";
    }
}

const person = {
    name: "Sergio",
    surname: "González Alcántara",
    age: 19,

    sayHello: () => {
        console.log("Hello!");
    },

    sayGoodBye: () => {
        console.log("Good Bye!");
    },
}


