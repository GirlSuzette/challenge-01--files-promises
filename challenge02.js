/**
 *
 * Write a simple 'get' function to make a GET request from data json file that 
 * returns a promise with the following requirements:
 * 
 * 1) Do XMLHttpRequest to get data.
 * 2) Open data.
 * 3) Check the status 200 and resolve the promise with the response text, 
 *    Otherwise reject with the status text.
 * 4) Handle network error.
 * 5) Make request.
 *
 * Check driver code to manage a success promise or error.
 *
 **/

function get(data) {
  // Return a new promise.
  return new Promise(function (resolve, reject) {
    // Do XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // Open data
    xhr.open('GET', data, true);
    // Onload function
    xhr.onload = function () {
      // check the status 200
      if (xhr.status == 200) {
        // Resolve the promise with the response text
        resolve(xhr.response);
      } else {
        // Otherwise reject with the status text
        reject(xhr.statusText);
      }
    };
    // Handle network error
    xhr.onerror = function () {
      reject("Newtwork Error");
    }
    // Make the request
    xhr.send();
  });
}

/*-------------------Driver Code-------------------------*/

console.log("==== challenge02 : Driver code ====");

get('data.json').then(function (response) {
  console.log("Success!", response);
}, function (error) {
  console.error("Failed!", error);
})