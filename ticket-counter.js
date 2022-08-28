var numbers = [];
var finalAmount = 0;
var totalAmount = 0;

console.log(`Total Amount Line 5: ${totalAmount}`);

init();

function init() {
    const isStorageFullOfNumbers = window.localStorage.getItem("numbers");

    if (isStorageFullOfNumbers) {
        var numList = document.getElementById("num-list");
        var listTitle = document.getElementById("list-title");

        var storageArr = JSON.parse(window.localStorage.getItem("numbers"));
        totalAmount = calculateTotalAmountOfTickets(storageArr);

        console.log(`Total Amount Line 19: ${totalAmount}`);

        // console.log(
        //     `
        //      Storage: ${window.localStorage.getItem("numbers")}
        //      Storage Length: ${window.localStorage.length}
             
        //      `
        // );
    
    
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

            console.log(`Total Amount Line 79: ${totalAmount}`);

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

