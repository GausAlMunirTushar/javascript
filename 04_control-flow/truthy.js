const userEmail = [];

if (userEmail) {
    console.log(`Got user email`)
} else {
    console.log(`Dont' have user email`)
}


// truthy and falsy value in js
// falsy values
// false, 0, -0, BigtInt 0n, "", null, undefined, NaN

// truthy vlaues
// [], true, "0", "false", " ",  function () {},  

if (userEmail.length === 0) {
    console.log(`Array is empty`)
}


// Nullish Coalescing Operator (??) : null, undefied
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10



// terniary operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log('more than 80')