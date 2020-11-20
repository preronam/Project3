import axios from "axios";

export default {

    barcode: function () {
        return axios.get("barcode/api" + { token } + { barcode });
    },

    cosmotic: function (id) {
        return axios.get("cosmotic/api" + { name });
    }
};
