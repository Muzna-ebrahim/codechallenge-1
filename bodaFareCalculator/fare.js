// function for the boda boda ride fare estimator
function calculateBodaFare(distanceInKm) {
// the amount of fare for travel and the amount of kilometers travelled (Fare in KES), (Kilometres travelled in Km)
    
    const baseFare = 50;  
    const chargePerKm = 15;

// the total amount of fare required to be paid by the user

    const totalFare = 50 + (distanceInKm * 15);
    const bodaBodaFare = 50 + 15 ;

// what is written in the console after the user inputs the total km they want to travel via the boda boda

    console.log(`Uko kwote? Io ni ${distanceInKm} km`);
    console.log(`Ukikalia Pikipiki:KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${bodaBodaFare}`);
    console.log(`Total: KES ${totalFare}`);

    console.log("Panda Pikipiki!");
}

// what the user is required to answer(like the distance in km they want to travel)
let userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:") ;
const distanceInKm = parseInt(userInput);

// the message that is going to be displayed after the user inputs the prompt above

if(!isNaN(distanceInKm) && distanceInKm > 0){
    calculateBodaFare(distanceInKm);
} else {
    console.log("please enter a valid number of kilometers you want to travel");
}