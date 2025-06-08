// the function of the mobile money transaction
function estimateTransactionFee(amountToSend) {

// this is the fee structure of the mobile money transaction fee(in percentage and KES)

    const basicTransactionFee = 0.015;
    const minimumFee = 10;
    const maximumFee = 70;   

// calculations for the mobile money transaction fee

    let transactionFee = basicTransactionFee * amountToSend;

// the transaction fee that is required based on the 1.5% rule

    if (transactionFee <= minimumFee ) {
        transactionFee = minimumFee
    } else if (transactionFee >= maximumFee ) {
        transactionFee = maximumFee
    }

    const totalDebited = transactionFee + amountToSend;

    // what is displayed on the console after the user has entered the amount of money to send

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be Debited: KES ${totalDebited}`);

    console.log("Send Money Securely!");
}

// the prompt(where the user is required to enter the amount of money they would like to send)

let userInput = prompt("Unatuma Ngapi? (KES)");
const amountToSend = parseFloat(userInput);

// calling the function 

if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("please enter a valid amount of money you would like to send");
}