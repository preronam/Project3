import React, { useState } from "react";
import API from "../utils/API";
import ResultCard from "../components/ResultCard/ResultCard";
// import $ from "jquery";
// import Quagga from "quagga";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

/////////// <------open SCANNER CODE /////////////////////
// var _scannerIsRunning = false;

// function startScanner() {
//   Quagga.init(
//     {
//       inputStream: {
//         name: "Live",
//         type: "LiveStream",
//         numOfWorkers: navigator.hardwareConcurrency,
//         target: document.querySelector("#scanner-container"),
//         constraints: {
//           width: 480,
//           height: 100,
//           facingMode: "environment",
//         },
//       },
//       decoder: {
//         readers: [
//           "code_128_reader",
//           "ean_reader",
//           "ean_8_reader",
//           "code_39_reader",
//           "code_39_vin_reader",
//           "codabar_reader",
//           "upc_reader",
//           "upc_e_reader",
//           "i2of5_reader",
//         ],
//         debug: {
//           showCanvas: true,
//           showPatches: true,
//           showFoundPatches: true,
//           showSkeleton: true,
//           showLabels: true,
//           showPatchLabels: true,
//           showRemainingPatchLabels: true,
//           boxFromPatches: {
//             showTransformed: true,
//             showTransformedBox: true,
//             showBB: true,
//           },
//         },
//       },
//     },
//     function (err) {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       //console.log("Initialization finished. Ready to start");
//       Quagga.start();

//       // Set flag to is running
//       _scannerIsRunning = true;
//     }
//   );
//   Quagga.onDetected(function (result) {
//     console.log("Barcode detected and processed : " + result.codeResult.code);
//     var myBarcode = result.codeResult.code;
//     alert(myBarcode);
//     const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
//     const api_key = process.env.REACT_APP_GOOGLE_API_KEY;
//     console.log(api_key)
//     const barcodeurl = "https://api.barcodelookup.com/v2/products?barcode=";
//     $.ajax({
//       url: proxyurl + barcodeurl + myBarcode + "&formatted=y&key=" + api_key,
//       method: "GET",
//     }).then(function (response) {
//       console.log(response);
//       console.log("---------------------");
//       var tit = response.products[0].manufacturer;
//       console.log(tit);
//       var productName = response.products[0].product_name;
//       var myImage = response.products[0].images;
//       // title + product_name +
//     });
//   });
// }

// function myRes() {
//   if (_scannerIsRunning) {
//     Quagga.stop();
//   } else {
//     startScanner();
//   }
// }


///////////// BARCODE SEARCH BELOW /////////////



function SearchPageRefactor() {
  const [products, setProduct] = useState([]);
  const [productSearch, setProductSearch] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setProductSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.fromInputBarcode(productSearch)
      .then((res) => setProduct(res.data.products[0]))
      // (console.log(setProduct))
      // (console.log((res.data).products[0].images))
      // return title=(res.data).product[0].product_name;
      .catch((err) => console.log(err));
  };

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
          >
            Start/Stop Scanner
          </Button>
        </Grid>
        <Grid item xs={6} sm={3} lg={6}>
          <TextField
            placeholder="barcode #"
            fullWidth
            name="ProductSearch"
            variant="outlined"
            autoFocus
            value={productSearch}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <Button
            size="md"
            variant="contained"
            color="primary"
            type="submit"
            className="button-block"
            onClick={handleFormSubmit}
          >
            Enter Barcode
          </Button>
        </Grid>

        {/* {products.map((product) => {
        return ( */}

        <Grid item xs={6}>
          <ResultCard
            id={products.id}
            title={products.product_name}
            subheader={products.manufacturer}
            image={products.images}
            description={products.description}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchPageRefactor;


