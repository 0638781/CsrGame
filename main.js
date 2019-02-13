// Variable
let car = {
    make: 'Jeep',
    model: 'Wrangler',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage = this.mileage + 8;
        alert(`New mileage ${this.mileage}`);

    },
}

// Functions
const rewriteStats(){

}

// Captures keyboard input. Depending on the letter pressed it
// will "call" (execute) different funtions. */
document.onkeyup = (event) => {
    // Captures the key press, converts into lowercase and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === 'd') {
        car.driveToWork();
        rewriteStats();
    }
}