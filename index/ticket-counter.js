var numbers = [];
var finalAmount = 0;
var totalAmount = 0;

init();

function init() {
    const isStorageFullOfNumbers = window.localStorage.getItem("numbers");

    if (isStorageFullOfNumbers) {
        var numList = document.getElementById("num-list");
        var listTitle = document.getElementById("list-title");

        var storageArr = JSON.parse(window.localStorage.getItem("numbers"));
        var totalAmount = calculateTotalAmountOfTickets(storageArr);

        console.log(
            `
             Storage: ${window.localStorage.getItem("numbers")}
             Storage Length: ${window.localStorage.length}
             
             `
        );
    
    
        for (let i = 0; i < storageArr.length; i++) {
            numList.innerHTML += '<li class="list-group-item">' + storageArr[i] + '</li>';
        }

        listTitle.innerText = "Counted Packs - Total: " + totalAmount;
    }
}

function addPackNumberToList() {
    // console.log(`
    //     Pack 1: ${firstPackInput} \n
    //     Pack 2: ${secondPackInput}
    // `);

    var firstPackInput = document.getElementById("first-pack-input").valueAsNumber;
    
    var secondPackInput = document.getElementById("second-pack-input").valueAsNumber;

    var addButton = document.getElementById("add-btn");

    var numList = document.getElementById("num-list");

    var listTitle = document.getElementById("list-title");

    

        if (!isNaN(firstPackInput) && !isNaN(secondPackInput)) {
            if (firstPackInput > secondPackInput) {
                firstPackInput++;
                finalAmount = firstPackInput - secondPackInput;
            } else {
                secondPackInput++;
                finalAmount = secondPackInput - firstPackInput;
            }

            numbers.push(finalAmount);
            
            numList.innerHTML += '<li class="list-group-item">' + finalAmount + '</li>';

            finalAmount = 0;
            
            totalAmount = calculateTotalAmountOfTickets(numbers);

            console.log("Total Amount:" + totalAmount);

            listTitle.innerText = "Counted Packs - Total: " + totalAmount;

            totalAmount = 0;
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

