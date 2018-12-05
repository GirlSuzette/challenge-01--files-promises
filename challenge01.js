/**
 * setTimeout Problem
 *
 * The output will be 1 3 4 2 . Client wonders why 4 is logged before 2. 
 * The reason for that is that even though line 2 started executing before 
 * line 4 , it did not start executing for 3000ms and hence 4 is logged 
 * before 2 .
 * 
 * Client has decided to use promises to resolve this problem and also to 
 * use its code structure for this algorithm.
 **/

// console.log("1");
//     setTimeout(function () {
//         console.log("2");
//     }, 3000);

//     console.log("3");
//     setTimeout(function () {
//         console.log("4");
//     }, 1000);


let promise = new Promise(function (resolve) {
    console.log("1")
    // setTimeout(function () {
    //     resolve(console.log("2"));
    // }, 3000);
    setTimeout(() => resolve(console.log("2")), 3000);

}).then(
    function (resolve) {
        console.log("3"),
            setTimeout(function () {
                console.log("4");
            }, 1000)
    });