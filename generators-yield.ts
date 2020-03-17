(() => {
    function* timestampGenerator() {
        let time = Date.now();
        console.log('real time: ', time);
        // yield time;

        let addTime = yield time;
        console.log('add time: ', addTime);

        if (addTime) time += addTime;
        console.log('updated time: ', time);
    }

    // timestampGenerator();

    const timeIterator = timestampGenerator();
    const value1 = timeIterator.next(); // return {value: value, done: boolean}
    console.log('Data from yield1: ', value1);
    //timeIterator.next();
    const value2 = timeIterator.next(1000 * 60);
    console.log('Data from yield2: ', value2);

})();