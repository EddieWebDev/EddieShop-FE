import axios from "axios";

const categoriesApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getAllCategories = async () => {
  const response = await categoriesApi.get("/api/web-shop/categories");
  return response.data;
};

export const getCategoryById = async (id) => {
  const response = await categoriesApi.get(`/api/web-shop/categories/${id}`);
  return response.data;
};

export const createCategory = async (newCategory) => {
  await categoriesApi.post(`/api/web-shop/categories`, newCategory);
};

export const deleteCategory = async (id) => {
  await categoriesApi.delete(`/api/web-shop/categories/${id}`);
};
