//repeats the same set interval after given peiod of 
//time
function login() {
    const interval = 1000; // Set the interval time in milliseconds

    const intervalID = setInterval(() => {
        console.log("Welcome to our page");
        console.log("Fill the form below");
    }, interval);

    // Stop the interval after a certain time (for example, 5 seconds)
    setTimeout(() => {
        clearInterval(intervalID);
        console.log("Interval has been cleared.");
    }, 5000); // 5000 milliseconds (5 seconds)
}

login(); // Call the function to start the interval
