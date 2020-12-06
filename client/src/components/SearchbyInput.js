import React, { useState } from "react";
import API from "../utils/API";
import ResultCard from "./ResultCard/ResultCard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";



function SearchbyInput() {
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

export default SearchbyInput;


