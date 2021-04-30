// focused test, it will only run focused test, leave other test cases

fdescribe ("Math test suite", () => {

    // pre test: initialize environment before each test
    beforeEach( () => {
        // called before running each it/test case
        console.log("****math before each")
    })

    // post test: cleanup environment, resoruces after each test
    afterEach( () => {
        // called after running each it /test case
        console.log("*****math after each")
    })

    // test suite contains 1 or more test cases
    // it is a test case
    it("should add two positive numbers", () => {
        // test case begin here
        // assertion, validation of actual and expected
        // expect(actual).toBe(expected result)
        console.log("**running test 1")
        expect(1 + 1).toBe(2)
        // test case end here for sync test
    })

    // async test, karma has a callback function for async test
    // done is a function, should be invoked when test complete
    it ("should add two negatve number async with timer", (done) => {
        console.log("**running test 2")
        setTimeout( () => {
            console.log("Timeout callback")
            expect (-1 + -1).toBe(-2)
            done();// officially test case ends
        }, 1000)
        console.log("exiting negative test")
    }, 20000) // 20000 ms max timeout karma to wait for this test case, by default karma follow 5000 milli seconds

})