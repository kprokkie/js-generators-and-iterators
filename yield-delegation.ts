function* generator1() {
    yield 1;
    yield 2;
    return 3;
}

// any built in or custom itrable
function generator3() {
    return [1, 2, 3, 4];
}

function* generator2() {
    const value = yield* generator3();
    // const value = yield* [1,2,3]; // can be any iterable
    // yield 4;
    // yield value;
}

const iterator = generator2();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const value of generator2()) {
//     console.log(value);
// }

for (const value of iterator) {
    if (value > 2) iterator.return();
    console.log(value);
}
