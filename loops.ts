// IIFE for block scoping of variable
(() => {

    const arr = [1, 2, 3, 4, 5];

    // for in loop
    for (let i = 0; i < arr.length; i++) {
        if (i > 2) break;
        console.log(arr[i] * 2);
    }

    // forEach loop
    arr.forEach((value) => {
        console.log(value * 3);
    });

    // for of loop
    for (const value of arr) {
        console.log(value * 4);
    }

    // Symbol Iterator
    const it = arr[Symbol.iterator]();
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

})();
