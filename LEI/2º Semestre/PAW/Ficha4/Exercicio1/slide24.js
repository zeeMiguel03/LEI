function callback(args) {
    console.log("Do work");
    setTimeout(() => callback2(args), 5000); 
}

function callback2(args) {
    console.log("Do more work");
}

function workA(args, callback) {
    setTimeout(() => callback(args), 5000);
}

console.log("Program continues...");

workA("someArgs", callback);
