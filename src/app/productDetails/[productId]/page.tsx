async function getProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function page(params: { productId: number }) {
  const { productId } = await params;
  const product = getProduct(productId);

  return (
    <>
      <div>hello product ID</div>
    </>
  );
}
