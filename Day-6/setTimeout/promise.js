let promise = new Promise((resolve, reject) => {
    let delivered = true;

    if (delivered == true) {
        resolve("Your Product delivered succesfully! Pay the amount")
    }else{
        reject("Your product is not delivered yetplease reaise complaint")
    }
})

promise.then(function(msg){
console.log(msg);

}).catch(function(err){
console.log(err);

})