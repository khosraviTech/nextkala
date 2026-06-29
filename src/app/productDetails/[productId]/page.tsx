
import ProductDetails from "./ProductDetails";

type Props = {
  params: {
    productId: number;
  };
};

async function getProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function page({ params }: Props) {
  
  const { productId } = await params;
  console.log("productID is : " + productId);
  const product = await getProduct(productId);
  console.log("product is : " + product);

  return (
    <>
     <ProductDetails  product={product} />
    </>
  );
}
