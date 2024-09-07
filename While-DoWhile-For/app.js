//While Loops

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }


// let i = 10;

// while (i > 0) {
//     console.log(i);
//     //i--;
//     i -= 2;
// }

//Break and Continue

/*
let i = 0;

while (i < 10) {
    if (i == 3 || i == 5) {
        i++;
        continue;
    }
    console.log(i);
    i++;
    
}*/


//Do-While Loops
/*
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10); */


const langs = ["Python", "JavaScript", "Java"];

/*
let index = 0;

while (index < langs.length){
    console.log(langs[index]);
    index++;
}*/

/*
for (let index = 0; index < langs.length; index++) {
    console.log(langs[index]);
}
*/

//forEach
/*
langs.forEach(function(lang,index) {
    console.log(lang,index);
});*/


// Map

/*
const users = [
    { name: "Serhat",age:23},
    { name:"Oğuz",age:25},
    { name:"Emre",age:28}
];

const names = users.map(function(users){
    return users.name;
});
const ages = users.map(function(users){
    return users.age;
})
console.log(names);
console.log(ages);
*/


// For in
const user = {
    name:"Serhat",
    age:23,
    
};
for (let key in user) {
    console.log(key,user[key]);
}