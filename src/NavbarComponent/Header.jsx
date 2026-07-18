import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/e_logo.png";
import axios from "axios";
import { useEffect, useState } from "react";

import { CATEGORIES_URL } from "../config/constants";

const Header = () => {
  const [categories, setCategories] = useState([]);
  // Need to make common function
  const retrieveAllCategories = async () => {
    console.log("Fetching categories...");
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
    <div>
      <nav className="navbar  navbar-expand-lg custom-bg text-color">
        <div className="container-fluid text-color">
          <img
            src={logo}
            width="65"
            height="auto"
            className="d-inline-block align-top"
            alt=""
          />
          <Link to="/" className="navbar-brand">
            <i>
              <b className="text-color ms-2">Cherish Cart</b>
            </i>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
