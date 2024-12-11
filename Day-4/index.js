let raining = "yes"

if (raining == "yes") {
    console.log("take umbralla");

} else {
    console.log("enjoy the sunny");

}

let signalColor = "green"

if (signalColor === "red") {
    console.log("stop");

} if (signalColor === "orange") {
    console.log("get ready");
}
else if (signalColor === "green") {
    console.log("Go");
}
else {
    console.log("invalid color");

}


let score = null;

if (score < 50) {
    console.log("you need to improve");

} else if (score >= 50 && score <= 70) {
    console.log("Good Job");

}
else {
    console.log("excelent");

}


let character = 'a';

if (character == 'a' || character == 'e' || character == 'i' || character == 'o' ||
    character == 'u'
) {
    console.log("vowel");
    
}
else{
    console.log("consonant");
    
}

let result = "JavaScript" === "javascript" ? "both are same" : "not same"

console.log(result);
