import React, { Component } from 'react';
//import API from '../utils/API'
import $ from "jquery";
import Quagga from 'quagga';

var _scannerIsRunning = false;
function startScanner() {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            numOfWorkers: navigator.hardwareConcurrency,
            target: document.querySelector('#scanner-container'),
            constraints: {
                width: 480,
                height: 100,
                facingMode: "environment"
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
                "i2of5_reader"
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
                    showBB: true
                }
            }
        },

    }, function (err) {
        if (err) {
            console.log(err);
            return
        }
        //console.log("Initialization finished. Ready to start");
        Quagga.start();

        // Set flag to is running
        _scannerIsRunning = true;
    });
    Quagga.onDetected(function (result) {
        console.log("Barcode detected and processed : " + result.codeResult.code);
        var myBarcode = result.codeResult.code;
        alert(myBarcode)
        const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
        const api_key = "hrsh89sx6t7478jna9yf81jqmxbhke";
        const barcodeurl = "https://api.barcodelookup.com/v2/products?barcode=";
        //const queryURL = proxyurl + barcodeurl + myBarcode + "&formatted=y&key=" + api_key;
        $.ajax({ url: (proxyurl + barcodeurl + myBarcode + "&formatted=y&key=" + api_key), method: "GET" }).then(function (response) {
            console.log(response);
            console.log('---------------------')
            var tit = response.products[0].manufacturer
            console.log(tit)
            var productName = response.products[0].product_name
            var myImage = response.products[0].images
            // title + product_name +
        })
    });
}
function myRes() {
    if (_scannerIsRunning) {
        Quagga.stop();
    } else {
        startScanner();
    }
}

function myBarCode(){
    var barcodeInput = $('#searchbtn').val().trim();
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
    const api_key = "hrsh89sx6t7478jna9yf81jqmxbhke";
    const barcodeurl = "https://api.barcodelookup.com/v2/products?barcode=";
    //const queryURL = proxyurl + barcodeurl + myBarcode + "&formatted=y&key=" + api_key;
    $.ajax({ url: (proxyurl + barcodeurl + barcodeInput + "&formatted=y&key=" + api_key), method: "GET" }).then(function (response) {
        console.log(response);
        console.log('---------------------')
        var tit = response.products[0].manufacturer
        console.log(tit)
        var productName = response.products[0].product_name
        var myImage = response.products[0].images
        // title + product_name +
    })
}


export class SearchPage extends Component {
    render() {
        return (
            <div>
                <input type="button" onClick={myRes} id="btn" value="Start/Stop the scanner" />
                <input type="number" id="searchbtn"/><button onClick={myBarCode}>Enter Barcode</button>
                <div id="scanner-container"></div>
            
                <div id="results"></div>

            </div>
        )
    }
}

export default SearchPage
