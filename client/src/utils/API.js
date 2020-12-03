import axios from "axios";

// const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
// const api_key = process.env.REACT_APP_GOOGLE_API_KEY;
// const barcodeurl = "https://api.barcodelookup.com/v2/products?barcode=";


export default {
  fromInputBarcode: function (barcodeInput) {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.barcodelookup.com/v2/products?barcode=" +
        barcodeInput +
        "&formatted=y&key=hrsh89sx6t7478jna9yf81jqmxbhke"
    );
  },
};