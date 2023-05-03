import axios from "axios";

const productsApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getAllProducts = async () => {
  const response = await productsApi.get("/api/web-shop/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await productsApi.get(`/api/web-shop/products/${id}`);
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await productsApi.get(`/api/web-shop/products/category/${category}`);
  return response.data;
};

export const createProduct = async (newProduct) => {
  await productsApi.post(`/api/web-shop/products`, newProduct);
};

export const updateProduct = async (updatedProduct) => {
  const { id } = updatedProduct;
  await productsApi.put(`/api/web-shop/products/${id}`, updatedProduct);
};

export const deleteProduct = async (id) => {
  await productsApi.delete(`/api/web-shop/products/${id}`);
};

export const searchProduct = async (searchWord) => {
  const response = await productsApi.get(`/api/web-shop/products/search/${searchWord}`);
  return response.data;
};
