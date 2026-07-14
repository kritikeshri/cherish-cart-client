import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CATEGORIES_URL } from "../config/constants";

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);
  // Need to make common function
  const retrieveAllCategories = async () => {
    const response = await axios.get(CATEGORIES_URL);
    return response.data;
  };

  useEffect(() => {
    const getAllCategories = async () => {
      const allCategories = await retrieveAllCategories();
      if (allCategories) {
        setCategories(allCategories.categories);
      }
    };

    getAllCategories();
  }, []);

  return (
    <div class="list-group form-card border-color">
      <Link
        to="/home/all/product/categories"
        class="list-group-item list-group-item-action bg-color custom-bg-text"
      >
        <b>All Categories</b>
      </Link>

      {categories.map((category) => {
        return (
          <Link
            to={`/home/product/category/${category.id}/${category.name}`}
            class="list-group-item list-group-item-action text-color custom-bg"
          >
            <b>{category.name}</b>
          </Link>
        );
      })}
    </div>
  );
};

export default GetAllCategories;
