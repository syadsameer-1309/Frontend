let createElement = document.createElement('h5');
createElement.textContent ="welcome"

let container = document.getElementById("container");
container.append(createElement)

let btn = document.getElementById('btn');

btn.addEventListener('click',function (){
    let newHeding = document.createElement('p');
    newHeding.textContent="Hello"
    container.append(newHeding)

})

let del = document.getElementById('one');
// del.remove()
let deleteBtn = document.getElementById('delete')

deleteBtn.addEventListener('click',function(){
    del.remove()
})

function deleteElement(event) {
    console.log(event.target.remove(  ));
    
}

