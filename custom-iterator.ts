function myIterator(start, finish) {
    let index = start;
    let count = 0;

    return {
        next() {
            let result;
            if (index < finish) {
                result = { value: index, done: false };
                index += 1;
                count++;
                return result;
            }
            return { value: count, done: true }
        }
    }
}

// variable to hold iterator
const it = myIterator(1, 10);
let res = it.next();
while (!res.done) {
    console.log(res.value);
    res = it.next();
}
