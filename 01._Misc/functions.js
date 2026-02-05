
//Hoisting
console.log(getRandomInt(100,50));



function getRandomInt(min,max){
    return Math.floor(Math.random() * (max+1-min)+min);
}

const getRandomIntAnonymous = function (min,max){
    return Math.floor(Math.random() * (max+1-min)+min);
};


const getRandomIntArrowFunction = (min,max) =>{
    return Math.floor(Math.random() * (max+1-min)+min);
};

//Javascript: functions as first class citizens


                            // String, function refrence.
function genericActionPerformer(name, action){
    return action(name)
}


//task: eat, Valdemar
// create a callback function called eatingAction
// and use the genericActionPerformer to
//console.log Valdemar is eating

function eatingAction(name){
    return name + " is eating";
}

console.log(genericActionPerformer("Valdemar", eatingAction));


// Task, run, sidi
// Declare an anonymous functoin called runningActoin
// make it return 'Sidi is running'
// Console.log it

const runningAction = function (name){
    return name +  " is running";
};

const runningActionArrowFunction = (name) =>{
    return name + " is running";
}

console.log(genericActionPerformer("Sidi", runningAction));


// task: extra challenge
// In a single line below write
// Kristian is laughing

genericActionPerformer("Kristian is laughing", console.log);


console.log(genericActionPerformer("Kristian", (name) => name + " is laughing"));

