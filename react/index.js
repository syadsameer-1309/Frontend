let countValue = 0;

let counterDisplay = document.getElementById("result");
let addBtn = document.getElementById("incBtn")
let minusBtn = document.getElementById("decBtn")

let updateCounter = function(){
    counterDisplay.textContent = countValue
}


addBtn.addEventListener('click',function(){
    countValue++;
    updateCounter()
})

minusBtn.addEventListener('click',function(){
    countValue--
    updateCounter()
})

