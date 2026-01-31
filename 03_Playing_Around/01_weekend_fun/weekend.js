

import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = createInterface({ input, output });
const date = new Date();

while(true){


console.log("Vælg en af følgende muligheder:");
console.log("1: Print dit navn");
console.log("2: Lavet et plus stykke");
console.log("3: Hvilken dag er det ?");
console.log("4: Hvem har lavet denne app");


const chosenOption = await rl.question("Vælg en mulighed: ")

   switch(parseInt(chosenOption)){
case 1 : await option1()
break;

case 2 : await option2()
break;


case 3 : console.log(new Date().toISOString().split('T')[0]);
break;

case 4: console.log("Gustav har lavet denne app :) ")
break;

default : console.log("Vælg en gyldig mulighed!!!!!!!!!!!!!")
break;
    }
    console.log("____________________________________________________________________________________________________________")
}



async function option1(){
const name = await rl.question("Hvad er dit navn?")
console.log("Hej med dig " + name)

}


async function option2(){
const number1 = await rl.question("Skriv første tal!")

const number2 = await rl.question("Skriv andede tal!")

console.log(parseFloat(number1)+parseFloat(number2))

}