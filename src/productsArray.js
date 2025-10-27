const productsArray = [
  { id: 1, title: "Glasses", price: 44.99 },
  { id: 2, title: "Camera", price: 199.99 },
  { id: 3, title: "Laptop", price: 449.99 }
];

function getProductData(id) {
  // Convert to number in case id is passed as a string
  const productData = productsArray.find(product => product.id === Number(id));

  if (!productData) {
    console.warn(`The product you're looking for doesn't exist (id: ${id})`);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
