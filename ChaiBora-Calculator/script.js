// function for the chai bora 
function chaiBoraCalculator(amountOfCups) {

// ingredients required to make a cup of chai("ml, tablespoon(for tealeaves), teaspoon(for sugar) ")

    const amountOfWater = 200;
    const amountOfMilk = 50;
    const teaLeaves = 1; 
    const sugar = 2;

//total number of ingredients that will  be required to make a cup of tea to the amount of cups stated

    const totalamountOfWater = 200 * amountOfCups;
    const totalamountOfMilk = 50 * amountOfCups;
    const totalamountOfTeaLeaves = 1 * amountOfCups;
    const totalamountOfSugar = 2 * amountOfCups;

// what is written in the console after user says how many cups of tea they want

    console.log(`To make ${amountOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water ${totalamountOfWater} ml`);
    console.log(`Milk ${totalamountOfMilk} ml`);
    console.log(`Tea Leaves ${totalamountOfTeaLeaves} tablespoons`);
    console.log(`Sugar ${totalamountOfSugar} teaspoons`);

    console.log("Enjoy your Chai Bora!");

}

// what the user is required to answer (how many amount of cups they want)

let userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const amountOfCups = parseInt(userInput);

// to validate the function stated in order for it to run well 

if(!isNaN(amountOfCups) && amountOfCups > 0) {
    chaiBoraCalculator(amountOfCups);
} else {
    console.log("please enter a valid amount of cups");
}