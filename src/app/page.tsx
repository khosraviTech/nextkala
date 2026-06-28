import ProductList from "@/app/productDetails/[productId]/ProductList";

export default async function Home() {
  const productsData = await fetch("https://dummyjson.com/products").then(
    (res) => res.json(),
  );

  return (
    <main>
      <h1 className="text-center">All Products:</h1>
      <ProductList products={productsData.products} />
    </main>
  );
}
