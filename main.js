console.log("Console log!");

const teamTwo = [{
    id: 1,
    name: "Nathan",
    favoriteColor: "red",
    email: "divorcedlawyer1988@hotmail.com",
    uniqueThing: "I produce and edit videos",
    image: "https://avatars.githubusercontent.com/u/86999347?v=4"
},
{
    id: 2 ,
    name: "Joe",
    email: "josephgibbs188@gmail.com",
    favoriteColor: "blue",
    uniqueThing: "Burned arm",
    image: "https://avatars.githubusercontent.com/u/83508920?v=4"
},
{
    id: 3,
    name: "Elle",
    email: "hello@ellelawrence.com",
    favoriteColor: "black",
    uniqueThing: "full sleeve of tattoos",
    image: "https://avatars.githubusercontent.com/u/86808230?v=4"
},
{
    id: 4,
    name: "madden",
    email: "maddenpurcell@gmail.com",
    favoriteColor: "Hunter Green",
    uniqueThing: "Has pet Gecko named 'Gre'",
    image: "https://avatars.githubusercontent.com/u/86082231?v=4"
}];

const filter = (array, email, color) => {
    return teamTwo.filter(teamMate => teamMate.email === email && teamMate.favoriteColor === color);
}

const testArray = ["bees", "peas", "Wiis", "skis"];

console.log(filter(teamTwo, "hello@ellelawrence.com", "black"));

const mainText = document.querySelector('#main');

mainText.innerHTML = "Other text";

const mainBtn = document.getElementById("main-btn");

// console.log(mainBtn);

// const mainBtn = document.querySelector('#main-btn');

// console.log(mainBtn);

// function askUser(user) {
//     return `please go to bed ${user}`;
// }

// function threatenUser(user) {
//     return `march that caboose on up to bed NOW, ${user}`;
// }

// function twoArguments(user, cb) {
//     return cb(user);
// }

// console.log(twoArguments("Randall", askUser));
// console.log(twoArguments("Randall", threatenUser));


const changeText = (event) => {
    if(event.target.id === "main-btn") {
        document.querySelector('#text').innerHTML = "You clicked that button";
    }
}

const wholeBody = document.querySelector('body');

//mainBtn.addEventListener('click', changeText);

wholeBody.addEventListener('click', changeText);

