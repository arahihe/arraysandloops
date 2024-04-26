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

//Online Status
const emptyArray = [];
const activeUsers = ['mockIng99', 'J0eyPunch', 'glassedFer'];

onlineUsers = (listOfActiveUsers, numberOfUsersToPrint = 2) => {
    if(listOfActiveUsers.length == 0){
        return 'no users active.';
    }
    let activeUsersToDisplay = [];
    
    if(numberOfUsersToPrint > listOfActiveUsers.length){
        numberOfUsersToPrint = listOfActiveUsers.length;
    }
    for (let index = 0; index < numberOfUsersToPrint; index++) {
        activeUsersToDisplay.push(listOfActiveUsers[index]);
    }
    const stringOfActiveUsers = activeUsersToDisplay.join(',');
    if(listOfActiveUsers.length > numberOfUsersToPrint){
        return `${stringOfActiveUsers} and ${listOfActiveUsers.length - numberOfUsersToPrint} more online`; 
    }
    return stringOfActiveUsers;
}

console.log(onlineUsers(activeUsers, 2));

//Array of Multiples
function arrayMulti(number, length) {
    const multipArray = []; 

    for (let i = 1; i <= length; i++){
        const multiple = number * i;
        multipArray.push(multiple);
    }
    return multipArray;
}
console.log(arrayMulti(17, 6));

//Positive dominance
function positiveDom(arr) {
    let posCount = 0;
    let negCount = 0;

    arr.forEach(element => {
        if (element > 0) {
            posCount++;
        }
        else if (element < 0) {
            negCount++;
        }
    });

    if (posCount >= negCount){
        return true;
    }
    else {
        return false;
    }
}
console.log(positiveDom([-1, -3, -5, 4, 6767]));