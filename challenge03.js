/**
 * Let's code some things:
 * 
 * 
 * Define the 'getSum' function that uses the 'sum' promise and chaining 
 * to get the next result in browser:
 *
 * Example 1 --> getSum(1)
 * 
 * 1
 * 3
 * 5
 * 7
 * 
 * Example 2 --> getSum(2)
 *
 * 2
 * 4
 * 6
 * 8
 * 
 * Restrictions:
 * 
 * - The 'sum' promise should resolve whatever num and reject when is not number.
 * - Catch error and display in browser:
 * 
 * Example getSum('car')
 *
 * It failed! Error: Not number.
 *
 **/

function sum(num) {
    return new Promise(function (resolve, reject) {
        if (typeof num === "number") {
            resolve(num);
        } else {
            reject("Not number");
        }
    })

}

function addDom(num) {
    var li = document.createElement("li");
    li.textContent = num;
    document.querySelector("ul").appendChild(li);
    console.log(num);
}

function getSum(num) {
    sum(num).then(function (resolve) {
        addDom(num)
        return resolve + 2
    }).then(function (resolve) {
        addDom(resolve)
        return resolve + 2;
    }).then(function (resolve) {
        addDom(resolve)
        return resolve + 2;
    }).then(function (resolve) {
        addDom(resolve)
        return resolve + 2;
    }).catch(function (err) {
        console.log("It failed! Error")
    })
}


/*-------------------Driver Code-------------------------*/

console.log("==== challenge03 : Driver code ====");

//when argument is a number: 1
getSum(1);
//when argument is a number: 2
// getSum(2);
// //when argument is not a number
// getSum('car');