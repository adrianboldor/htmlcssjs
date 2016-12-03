/**
 * Created by fasttrackit on 12/3/2016.
 */
console.info("page loaded");
var person = {
    name: "Adrian",
    employed: true,
    employer: "SDL",
    employedDuration: 0,
    skills: ["html","js","css"]
}
if (person.employed) {
    console.info("Employed by ", person.employer, " for ", person.employedDuration, " years");
}
console.debug(person);

function getNameWelcome(name){
    var welcomeMessage = "Hello "+ name +"! Welcome to FasttrackIT!";
    return welcomeMessage;
}

console.info(getNameWelcome(person.name));


var importantText = document.getElementById("text-important");
var wannabe = document.getElementById("wannabe");

importantText.onmouseover = function () {
    wannabe.style.display = "inline";
}

importantText.onmouseout = function () {
    wannabe.style.display = "none";
}

var category = document.getElementsByClassName("category");

for (var i=0;i<category.length;i++){
    category[i].onclick = function () {

        this.style.borderColor = "red";
    }
}


