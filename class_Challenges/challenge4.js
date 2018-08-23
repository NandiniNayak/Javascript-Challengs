// 3. Reverse-Geocoder Terminal App [INTERMEDIATE] Pure JS (run via Node)
// Make a reverse-geocoder. Make the program visit this URL: http://www.ip-api.com/csv and then you must display the returned data in a user-friendly way. This involves processing comma-separated strings into different variables, and using the HTTP module that comes built into Javascript. To store the data from the URL and use it later, you'll probably need to look for some Node.JS "http.get" tutorials to do things properly. Similar examples use NASA's URL API!

// note : http://ip-api.com/json/ gives json format

// CHALLENGE 3 HINT:
const http = require('http');
// const URL = require('url');
//
// var testURL = URL("http://www.ip-api.com/csv");
let data = "";

http.get("http://www.ip-api.com/csv", (resp) => {
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(data);
        console.log(typeof(data));
        // myObj = JSON.parse();
        // console.log(myObj);
        processGeoData();
        function processGeoData() {
          let res = data.split(",");
          console.log(res);
        }
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
