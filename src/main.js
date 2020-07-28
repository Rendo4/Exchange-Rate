import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#convert').submit(function(event) {
    event.preventDefault();
    const amount = $('#dollars').val();
    const currency = $("#money").val();
    $("#dollas").val("");
    $("#money").val("");

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

    request.onreadystatechange = function() {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }

      request.open("GET", url, true);
      request.send();

      const getElements = function(response) {
        $('.showResults').text('You would have this amount in this currency');
      };
    };
  });
});