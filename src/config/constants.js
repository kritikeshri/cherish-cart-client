import config from "./config";

const API_BASE_URL = config.apiBaseUrl;
const CATEGORY_URL = `${API_BASE_URL}/category`;
const PRODUCT_URL = `${API_BASE_URL}/product`;
const ORDER_URL = `${API_BASE_URL}/order`;
const ORDER_ADD_BY_USER_ID = `${ORDER_URL}/add?userId=`;
const CART_URL = `${API_BASE_URL}/cart`;
const USER_URL = `${API_BASE_URL}/user`;

const CATEGORIES_URL = `${API_BASE_URL}/categories`;
const CART_ITEMS_URL = `${API_BASE_URL}/carts/items`;

const CART_FETCH_BY_USER_ID = `${CART_URL}/fetch?userId=`;
const CART_DELETE = `${CART_URL}/delete`;
const CART_UPDATE = `${CART_URL}/update`;
const CART_ADD = `${CART_URL}/add`;

const GET_ALL_ORDERS = `${ORDER_URL}/fetch/all`;
const GET_ORDER_BY_ID = `${ORDER_URL}/fetch?orderId=`;
const GET_ORDER_BY_USER_ID = `${ORDER_URL}/fetch/user-wise?userId=`;
const GET_ORDER_BY_SELLER_ID = `${ORDER_URL}/fetch/seller-wise?sellerId=`;
const GET_ORDER_BY_DELIVERY_PERSON_ID = `${ORDER_URL}/fetch/delivery-wise?deliveryPersonId=`;
const GET_ORDER_DELIVERY_STATUS_ALL = `${ORDER_URL}/fetch/delivery-status/all`;
const GET_ORDER_DELIVERY_TIME_ALL = `${ORDER_URL}/fetch/delivery-time/all`;
const UPDATE_ORDER_DELIVERY_STATUS = `${ORDER_URL}/update/delivery-status`;
const ASSIGN_ORDER_DELIVERY_PERSON = `${ORDER_URL}/assign/delivery-person`;

const GET_PRODUCT_FETCH_ALL = `${PRODUCT_URL}/fetch/all`;
const SEARCH_PRODUCT_BY_NAME = `${PRODUCT_URL}/search?productName=`;
const GET_PRODUCT_BY_ID = `${PRODUCT_URL}/fetch?productId=`;
const PRODUCT_ADD = `${PRODUCT_URL}/add`;
const PRODUCT_UPDATE_DETAIL = `${PRODUCT_URL}/update/detail`;
const PRODUCT_UPDATE_IMAGE = `${PRODUCT_URL}/update/image`;
const DELETE_PRODUCT_BY_ID_SELLER = `${PRODUCT_URL}/delete?productId=`;
const GET_PRODUCT_FETCH_SELLER_WISE = `${PRODUCT_URL}/fetch/seller-wise?sellerId=`;
const ADD_PRODUCT_REVIEW = `${PRODUCT_URL}/review/add`;
const GET_PRODUCT_REVIEWS_BY_ID = `${PRODUCT_URL}/review/fetch?productId=`;
const PRODUCT_IMAGE_BASE = `${PRODUCT_URL}/`;

const USER_ADMIN_REGISTER = `${USER_URL}/admin/register`;
const USER_LOGIN = `${USER_URL}/login`;
const USER_REGISTER = `${USER_URL}/register`;
const GET_USERS_BY_ROLE_CUSTOMER = `${USER_URL}/fetch/role-wise?role=Customer`;
const GET_USERS_BY_ROLE_DELIVERY = `${USER_URL}/fetch/role-wise?role=Delivery`;
const GET_USERS_BY_ROLE_SELLER = `${USER_URL}/fetch/role-wise?role=Seller`;
const DELETE_USER_SELLER = `${USER_URL}/delete/seller?sellerId=`;
const GET_SELLER_DELIVERY_PERSONS = `${USER_URL}/fetch/seller/delivery-person?sellerId=`;
const DELETE_SELLER_DELIVERY_PERSON_BY_ID = `${USER_URL}/delete/seller/delivery-person?deliveryId=`;

export {
  API_BASE_URL,
  CATEGORIES_URL,
  CART_ITEMS_URL,
  CATEGORY_URL,
  PRODUCT_URL,
  CART_FETCH_BY_USER_ID,
  CART_DELETE,
  CART_UPDATE,
  CART_ADD,
  GET_ALL_ORDERS,
  GET_ORDER_BY_ID,
  GET_ORDER_BY_USER_ID,
  GET_ORDER_BY_SELLER_ID,
  GET_ORDER_BY_DELIVERY_PERSON_ID,
  GET_ORDER_DELIVERY_STATUS_ALL,
  GET_ORDER_DELIVERY_TIME_ALL,
  UPDATE_ORDER_DELIVERY_STATUS,
  ASSIGN_ORDER_DELIVERY_PERSON,
  GET_PRODUCT_FETCH_ALL,
  SEARCH_PRODUCT_BY_NAME,
  GET_PRODUCT_BY_ID,
  PRODUCT_ADD,
  PRODUCT_UPDATE_DETAIL,
  PRODUCT_UPDATE_IMAGE,
  DELETE_PRODUCT_BY_ID_SELLER,
  GET_PRODUCT_FETCH_SELLER_WISE,
  ADD_PRODUCT_REVIEW,
  GET_PRODUCT_REVIEWS_BY_ID,
  PRODUCT_IMAGE_BASE,
  USER_ADMIN_REGISTER,
  USER_LOGIN,
  USER_REGISTER,
  GET_USERS_BY_ROLE_CUSTOMER,
  GET_USERS_BY_ROLE_DELIVERY,
  GET_USERS_BY_ROLE_SELLER,
  DELETE_USER_SELLER,
  GET_SELLER_DELIVERY_PERSONS,
  DELETE_SELLER_DELIVERY_PERSON_BY_ID,
};
