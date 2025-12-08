export async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Response("Failed to find products", {
      status: 404,
      statusText: "Products not found",
    });
  }
  const products = await response.json();

  return products;
}
