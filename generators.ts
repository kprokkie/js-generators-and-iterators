(() => {
    function* timestampGenerator() {
        console.log(Date.now());
        yield;
        console.log('execution continued');
    }

    // timestampGenerator();

    const timeIterator = timestampGenerator();
    // timeIterator.next();
    // timeIterator.next();

    // or 

    for (const value of timeIterator) {
        // console.log('log: ', value);
    }

    for (const value of timestampGenerator()) {
        // console.log('log: ', value);
    }
})();