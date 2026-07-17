import config from "./config";

const API_BASE_URL = config.apiBaseUrl;

const USERS_URL = `${API_BASE_URL}/user`;
const USERS_LOGIN_URL = `${API_BASE_URL}/user/login`;
const USERS_REGISTER_URL = `${API_BASE_URL}/user/register`;
const CATEGORIES_URL = `${API_BASE_URL}/categories`;
const CART_ITEMS_URL = `${API_BASE_URL}/carts/items`;
const PRODUCTS_URL = `${API_BASE_URL}/products`;
const PRODUCTS_REVIEW_URL = `${API_BASE_URL}/products/reviews`;
const PRODUCTS_IMAGE_URL = `${API_BASE_URL}/products/images`;
const PRODUCTS_SEARCH_URL = `${API_BASE_URL}/products/search`;
const SELLERS_URL = `${API_BASE_URL}/sellers`;
const ORDERS_URL = `${API_BASE_URL}/order`;
const ORDER_ASSIGN_URL = `${API_BASE_URL}/order/assign`;
const ORDER_STATUS_URL = `${API_BASE_URL}/order/status`;

const DELIVERY_PERSON_URL = `${API_BASE_URL}/delivery-persons`;

//Recheck these APIs
const GET_DELIVERY_PERSON_BY_SELLER_ID_URL = `${API_BASE_URL}/user/fetch/seller/delivery-person?sellerId`;
const GET_ALL_DELIVER_STATUSES_URL = `${API_BASE_URL}/order/delivery-statuses`;
const GET_ALL_DELIVER_TIMES_URL = `${API_BASE_URL}/order/delivery-times`;
const REGISTER_USER_ADMIN_URL = `${API_BASE_URL}/user/admin/add`;
const DELETE_SELLER_BY_SELLER_ID_URL = `${API_BASE_URL}/user/delete/seller`;
const DELETE_DELIVERY_PERSON_BY_DELIVERY_ID_URL = `${API_BASE_URL}/user/delete/seller/delivery-person`;

export {
  API_BASE_URL,
  USERS_URL,
  USERS_LOGIN_URL,
  USERS_REGISTER_URL,
  CATEGORIES_URL,
  CART_ITEMS_URL,
  PRODUCTS_URL,
  PRODUCTS_REVIEW_URL,
  PRODUCTS_IMAGE_URL,
  PRODUCTS_SEARCH_URL,
  SELLERS_URL,
  ORDERS_URL,
  ORDER_ASSIGN_URL,
  ORDER_STATUS_URL,
  DELIVERY_PERSON_URL,
  GET_DELIVERY_PERSON_BY_SELLER_ID_URL,
  GET_ALL_DELIVER_STATUSES_URL,
  GET_ALL_DELIVER_TIMES_URL,
  REGISTER_USER_ADMIN_URL,
  DELETE_SELLER_BY_SELLER_ID_URL,
  DELETE_DELIVERY_PERSON_BY_DELIVERY_ID_URL
};
