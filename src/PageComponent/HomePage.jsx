import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductComponent/ProductCard";
import Carousel from "./Carousel";
import Footer from "../NavbarComponent/Footer";
import config from "../config/config";
import { CATEGORIES_URL } from "../config/constants";

const HomePage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tempSearchText, setTempSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        if (categoryId == null && searchText === "") {
          // Fetch all products
          response = await axios.get(
            `${config.apiBaseUrl}/product/fetch/all`
          );
        } else if (searchText) {
          // Fetch products by name
          response = await axios.get(
            `${config.apiBaseUrl}/product/search?productName=${searchText}`
          );
        } else {
          // Fetch products by category
          const getProductsByCategoryUrl = `${CATEGORIES_URL}/${categoryId}/products`;
          response = await axios.get(getProductsByCategoryUrl);
        }
        if (response.data) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryId, searchText]);

  const searchProducts = (e) => {
    e.preventDefault();
    setSearchText(tempSearchText);
  };

  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="d-flex aligns-items-center justify-content-center mt-5">
        <form class="row g-3">
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              id="inputPassword2"
              placeholder="Enter Product Name..."
              onChange={(e) => setTempSearchText(e.target.value)}
              style={{
                width: "350px",
              }}
              value={tempSearchText}
              required
            />
          </div>
          <div class="col-auto">
            <button
              type="submit"
              class="btn bg-color custom-bg-text mb-3"
              onClick={searchProducts}
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="col-md-12 mt-3 mb-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => {
            return <ProductCard item={product} key={product.id} />;
          })}
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
