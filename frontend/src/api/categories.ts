export const getCategories = async () => {
  const response = await fetch("https://api.chandalururuchulu.com/api/categories/");
  const data = await response.json();
  return data;
};