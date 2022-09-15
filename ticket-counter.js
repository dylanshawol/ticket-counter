var numbers = [];
var finalAmount = 0;
var totalAmount = 0;

init();

function init() {
    const storedNumbers = JSON.parse(window.localStorage.getItem("numbers"));

    if (storedNumbers) {
        var numList = document.getElementById("num-list");
        var listTitle = document.getElementById("list-title");

        numbers = storedNumbers;

        const storedTotal = calculateTotalAmountOfTickets(numbers);
    
        for (let i = 0; i < numbers.length; i++) {
            numList.innerHTML += '<li class="list-group-item">' + numbers[i] + '</li>';
        }
        

        listTitle.innerText = "Counted Packs - Total: " + storedTotal;

    }
}

function addPackNumberToList() {
    var firstPackInput = document.getElementById("first-pack-input");
    
    var secondPackInput = document.getElementById("second-pack-input");

    var firstPackNum = firstPackInput.valueAsNumber;

    var secondPackNum = secondPackInput.valueAsNumber;

    var addButton = document.getElementById("add-btn");

    var numList = document.getElementById("num-list");

    var listTitle = document.getElementById("list-title");

    
        if (!isNaN(firstPackNum) && !isNaN(secondPackNum)) {
            if (firstPackNum > secondPackNum) {
                firstPackNum++;
                finalAmount = firstPackNum - secondPackNum;
            } else {
                secondPackNum++;
                finalAmount = secondPackNum - firstPackNum;
            }

            numbers.push(finalAmount);
            
            numList.innerHTML += '<li class="list-group-item">' + finalAmount + '</li>';

            finalAmount = 0;
            
            totalAmount += calculateTotalAmountOfTickets(numbers);

            console.log(totalAmount);

            listTitle.innerText = "Counted Packs - Total: " + totalAmount;

            totalAmount = 0;

            firstPackInput.value = null;
            
            secondPackInput.value = null;
        }
    

    window.localStorage.setItem("numbers", JSON.stringify(numbers));
}

function calculateTotalAmountOfTickets(arr) {
    var totalAmount = 0;
    
    for (let i = 0; i < arr.length; i++) {
        totalAmount += arr[i]
    }

    return totalAmount;
}

function clearList() {
    numbers = [];
    finalAmount = 0;
    totalAmount = 0;
    window.localStorage.clear();
    window.location.reload(true);
}

