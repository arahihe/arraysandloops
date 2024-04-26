//Suma
const resistanceArray = [-1,5,6,3];
function sumResistance(resistanceArray){
    let sum = 0;
    for (let index = 0; index < resistanceArray.length; index++) {
    		console.log(index, resistanceArray[index], index < resistanceArray.length);
        sum = sum + Math.abs(resistanceArray[index]);
    }
    return sum + "  ohms";
}
console.log(sumResistance(resistanceArray));

//Divison
let number = [6];
function divNum(number){
    return [number / 2, number /2];
}
console.log(divNum(number));

//Secret Society
const namSec = ["Franco", "Nia", "Esperanza"];

function secretName(arr){
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0)));
    return res.sort().join();
}
console.log(secretName(namSec));

//Online status
function userStatus(user){
    usersOnline = users.filter(user => ononline(user));
    const usersOffline = users.length - usersOnline.length;
}

let status = '';

if (usersOnline.length === 0){
    statusUser = 'No users online';
}
else if (usersOnline.length === 1){
    statusUser = 
}