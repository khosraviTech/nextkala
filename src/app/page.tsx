import ProductList from "@/app/productDetails/[productId]/ProductList";

export default async function Home() {
  const productsData = await fetch("https://dummyjson.com/products").then(
    (res) => res.json(),
  );

  return (
    <main>
      <ProductList products={productsData.products} />
    </main>
  );
}
