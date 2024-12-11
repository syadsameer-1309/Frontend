let inputBox = document.getElementById('inputBox');
let addBtn = document.getElementById('addBtn');
let conatiner = document.getElementById('container');

addBtn.addEventListener('click',function(){
    let newli = document.createElement("li");
    newli.innerHTML = inputBox.value + "<button onClick='deleteList(event)'>Delete</button>"
    conatiner.append(newli)
})

function deleteList(event){
    event.target.parentElement.remove()
}