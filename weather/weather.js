const axios = require("axios");
const http = require("http");

// Make the API request using Axios
axios
  .get(
    "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
  )
  .then(function (response) {
    // Start the HTTP server and pass the response data to it
    http
      .createServer((req, res) => {
        res.write(JSON.stringify(response.data, null, 2));
        res.end();
      })
      .listen(8080);
  })
  .catch(function (error) {
    console.log(error);
  });
