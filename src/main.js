import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { money } from './exchange.js';

// $(document).ready(function() {
//   $('#convert').click(function(event) {
//     event.preventDefault();
//     const amount = $('#number').val();
//     const currency = $("#money").val();
//     $("#numbers").val("");
//     $("#money").val("");

//     let promise = new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });

//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       let country = 0;
//       let unit = 0;
//       $('.showResults').text(`You would have ${body.conversion_rates[currency] * amount} ${unit} in ${country}`);
//       $('.showErrors').text("");
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//       $('.showResults').text("");
//     });
//   });
// });

$(document).ready(function() {
  $('#convert').click(function() {
    event.preventDefault();
    const amount = $('#number').val();
    const currency = $("#money").val();
    $("#numbers").val("");
    $("#money").val("");

   (async () => {
      try {
        const response = await fetch( `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
        if (!response.ok) {
          ShowError(response.statusText);
        } else {
          const jsonifiedResponse = await response.json();
          showElements(jsonifiedResponse);
       }
      } catch(error) {
        console.log(error);
      }
    }) ();
    function showElements(response) {
      $('.showResults').text(`You would have ${response.conversion_rates[currency] * amount} unit in country`);
      $('.showErrors').text("");
    }
    
    function ShowError(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showResults').text("");
    }
  });
});