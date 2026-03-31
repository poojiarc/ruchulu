export const getProducts = async () => {
  const response = await fetch("https://api.chandalururuchulu.com/api/products/");
  const data = await response.json();
  return data;
};