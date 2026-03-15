export const getCategories = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/categories/");
  const data = await response.json();
  return data;
};