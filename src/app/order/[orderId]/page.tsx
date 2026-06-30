import OrderPage from "./OrderPage";

type Props = {
  params: {
    orderId: string;
  };
};

export default async function page({ params }: Props) {
  const { orderId } = await params;

  return (
    <>
      <OrderPage orderId={orderId} />
    </>
  );
}
