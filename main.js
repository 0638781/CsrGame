// VARIABLES
let car = {
    make: 'Jeep',
    model: 'Wrangler',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New mileage ${this.mileage}`);

    },

    driveAroundUSA(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 6000;
        alert(`New mileage ${this.mileage}`);
        alert('Car needs a tuneup!');
        this.isWorking = false;

    },
 
    getTuneUp(){
        alert('Car is ready to go!');
        this.working = true;
    }

    honk(){
        alert('Honk! Honk!');
    }
}

// FUNCTIONS
const rewriteStats = () => {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Color: ${car.color}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`Isworking: ${car.isworking}`);
    console.log(`--------------`);
}

// MAIN PROCESS
// Captures keyboard input. Depending on the letter pressed it
// will "call" (execute) different funtions. */
document.onkeyup = (event) => {
    // Captures the key press, converts into lowercase and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === 'h') {
        car.honk();
        rewriteStats();
    }

    if (letter === 'd') {
        car.driveToWork();
        rewriteStats();
    }

    if (letter === 'r') {
        car.driveAroundUSA();
        rewriteStats();
    }
    
    if (letter === 't') {
        car.getTuneup();
        rewriteStats();
    }
}