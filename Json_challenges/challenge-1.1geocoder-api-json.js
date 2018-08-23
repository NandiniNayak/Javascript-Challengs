 // <!-- https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding -->

const http = require('https');
var data = "";
http.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBzCLtntxL6RAc06HearVEPBO-1Roubbtw", (resp) => {
  // Json data has been received
    resp.on('data', (resp) => {
        // console.log(resp);
        data += resp;
    });
    resp.on('end', () => {
      console.log(data);
    });
});



// <!-- // {
// //    "results" : [
// //       {
// //          "address_components" : [
// //             {
// //                "long_name" : "1600",
// //                "short_name" : "1600",
// //                "types" : [ "street_number" ]
// //             },
// //             {
// //                "long_name" : "Amphitheatre Parkway",
// //                "short_name" : "Amphitheatre Pkwy",
// //                "types" : [ "route" ]
// //             },
// //             {
// //                "long_name" : "Mountain View",
// //                "short_name" : "Mountain View",
// //                "types" : [ "locality", "political" ]
// //             },
// //             {
// //                "long_name" : "Santa Clara County",
// //                "short_name" : "Santa Clara County",
// //                "types" : [ "administrative_area_level_2", "political" ]
// //             },
// //             {
// //                "long_name" : "California",
// //                "short_name" : "CA",
// //                "types" : [ "administrative_area_level_1", "political" ]
// //             },
// //             {
// //                "long_name" : "United States",
// //                "short_name" : "US",
// //                "types" : [ "country", "political" ]
// //             },
// //             {
// //                "long_name" : "94043",
// //                "short_name" : "94043",
// //                "types" : [ "postal_code" ]
// //             }
// //          ],
// //          "formatted_address" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
// //          "geometry" : {
// //             "location" : {
// //                "lat" : 37.42318789999999,
// //                "lng" : -122.0841212
// //             },
// //             "location_type" : "ROOFTOP",
// //             "viewport" : {
// //                "northeast" : {
// //                   "lat" : 37.42453688029149,
// //                   "lng" : -122.0827722197085
// //                },
// //                "southwest" : {
// //                   "lat" : 37.42183891970849,
// //                   "lng" : -122.0854701802915
// //                }
// //             }
// //          },
// //          "place_id" : "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
// //          "plus_code" : {
// //             "compound_code" : "CWF8+79 Mountain View, California, United States",
// //             "global_code" : "849VCWF8+79"
// //          },
// //          "types" : [ "street_address" ]
// //       }
// //    ],
// //    "status" : "OK"
// // } -->
