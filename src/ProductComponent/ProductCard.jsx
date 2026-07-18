import { Link } from "react-router-dom";
import CategoryNavigator from "../CategoryComponent/CategoryNavigator";
import { PRODUCTS_IMAGE_URL } from "../config/constants";

const ProductCard = (product) => {
  const descriptionToShow = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      const truncatedText = description.substring(0, maxLength);
      return truncatedText + "...";
    }
  };

  return (
    <div className="col">
      <div className="card product-card rounded-card custom-bg h-100 shadow-lg">
        <img
          src={`${PRODUCTS_IMAGE_URL}/${product.item.image1}`}
                    className="card-img-top img-fluid rounded"
          alt="img"
          style={{
            height: "250px",
            width: "100%",
            objectFit: "contain",
            padding: "15px",
            backgroundColor: "#fff"
          }}
        />

        <div className="card-body text-color">
          <h5 className="card-title d-flex justify-content-between">
            <div>
              <b>{product?.item?.name}</b>
            </div>
          </h5>
          <p className="card-text">
            <b>{descriptionToShow(product?.item?.description, 50)}</b>
          </p>
          <h6>
            <CategoryNavigator
              item={{
                id: product?.item?.category?.id,
                name: product?.item?.category?.name,
              }}
            />
          </h6>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between mt-2">
            <Link
              to={`/product/${product?.item?.id}/category/${product?.item?.category?.id}`}
              className="btn bg-color custom-bg-text btn-sm ms-2"
            >
              Add to Cart
            </Link>

            <span className="fw-bold text-color">
              <p><b>Price : &#8377;{product?.item?.price}</b></p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
