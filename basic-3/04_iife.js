// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB Connected`)
})();

// ()()
( function aurCode() {
    // named IIFE
    console.log(`DB Connected Two`)
})();

( (name) => {
    console.log(`DB Connected Three ${name}`)
})('MongoDB')