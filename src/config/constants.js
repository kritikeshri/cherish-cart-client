import config from "./config";

const API_BASE_URL = config.apiBaseUrl;
const ORDER_URL = `${API_BASE_URL}/order`;
const USER_URL = `${API_BASE_URL}/user`;

const CATEGORIES_URL = `${API_BASE_URL}/categories`;
const CART_ITEMS_URL = `${API_BASE_URL}/carts/items`;
const PRODUCTS_URL = `${API_BASE_URL}/products`;
const PRODUCTS_REVIEW_URL = `${API_BASE_URL}/products/reviews`;
const PRODUCTS_IMAGE_URL = `${API_BASE_URL}/products/images`;
const PRODUCTS_SEARCH_URL = `${API_BASE_URL}/products/search`;
const SELLERS_URL = `${API_BASE_URL}/sellers`;

const GET_DELIVERY_PERSON_BY_SELLER_ID_URL = `${API_BASE_URL}/api/user/fetch/seller/delivery-person?sellerId`;

export {
  API_BASE_URL,
  CATEGORIES_URL,
  CART_ITEMS_URL,
  PRODUCTS_URL,
  PRODUCTS_REVIEW_URL,
  PRODUCTS_IMAGE_URL,
  PRODUCTS_SEARCH_URL,
  SELLERS_URL,
  GET_DELIVERY_PERSON_BY_SELLER_ID_URL
};
