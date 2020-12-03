import React, { Component } from "react";
// import API from '../utils/API'
// import ResultCard from "../components/ResultCard/ResultCard"
import $ from "jquery";
import Quagga from "quagga";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

var _scannerIsRunning = false;
function startScanner() {
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        numOfWorkers: navigator.hardwareConcurrency,
        target: document.querySelector("#scanner-container"),
        constraints: {
          width: 480,
          height: 100,
          facingMode: "environment",
        },
      },
      decoder: {
        readers: [
          "code_128_reader",
          "ean_reader",
          "ean_8_reader",
          "code_39_reader",
          "code_39_vin_reader",
          "codabar_reader",
          "upc_reader",
          "upc_e_reader",
          "i2of5_reader",
        ],
        debug: {
          showCanvas: true,
          showPatches: true,
          showFoundPatches: true,
          showSkeleton: true,
          showLabels: true,
          showPatchLabels: true,
          showRemainingPatchLabels: true,
          boxFromPatches: {
            showTransformed: true,
            showTransformedBox: true,
            showBB: true,
          },
        },
      },
    },
    function (err) {
      if (err) {
        console.log(err);
        return;
      }
      //console.log("Initialization finished. Ready to start");
      Quagga.start();

      // Set flag to is running
      _scannerIsRunning = true;
    }
  );
  Quagga.onDetected(function (result) {
    console.log("Barcode detected and processed : " + result.codeResult.code);
    var myBarcode = result.codeResult.code;
    alert(myBarcode);
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
    const api_key = process.env.REACT_APP_GOOGLE_API_KEY;
    console.log(api_key)
    const barcodeurl = "https://api.barcodelookup.com/v2/products?barcode=";
    $.ajax({
      url: proxyurl + barcodeurl + myBarcode + "&formatted=y&key=" + api_key,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log("---------------------");
      var tit = response.products[0].manufacturer;
      console.log(tit);
      var productName = response.products[0].product_name;
      var myImage = response.products[0].images;
      // title + product_name +
    });
  });
}
function myRes() {
  if (_scannerIsRunning) {
    Quagga.stop();
  } else {
    startScanner();
  }
}

function myBarCode() {
  var barcodeInput = $("#searchbtn").val().trim();
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
  const api_key = process.env.REACT_APP_GOOGLE_API_KEY;
  const barcodeurl = "https://api.barcodelookup.com/v2/products?barcode=";
  $.ajax({
    url: proxyurl + barcodeurl + barcodeInput + "&formatted=y&key=" + api_key,
    method: "GET",
  }).then(function (response) {
    console.log(response);   //019100109995
    console.log("---------------------");
    var manufacturer = response.products[0].manufacturer;
    var productName = response.products[0].product_name;
    var myImage = response.products[0].images[0];
    //var totalResults = [productName, myImage, manufacturer]
  });
}

export class SearchPage extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={6}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={6}>
            <div id="scanner-container"></div>
          </Grid>

          <Grid item xs={6}>
            <Button
              id="btn"
              variant="contained"
              color="primary"
              type="button"
              className="button-block"
              onClick={myRes}
            >
              Start/Stop Scanner
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} lg={6}>
            <TextField
              type="number"
              placeholder="barcode #"
              fullWidth
              id="searchbtn"
              variant="outlined"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              size="md"
              variant="contained"
              color="primary"
              type="submit"
              className="button-block"
              onClick={myBarCode}
            >
              Enter Barcode
            </Button>
          </Grid>
          {/* <ResultCard
            component={ResultCard}
          /> */}
        </Grid>
        <div id="scanner-container"></div>

        <div id="results"></div>

      </div>
    );
  }
}

export default SearchPage;