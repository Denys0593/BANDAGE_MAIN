import ProductPagePage from "./ProductPagePage";

import { createClient } from "@/prismicio";

export const metadata = {
  title: "Product Page",
};

const ProductPage = async () => {
  const client = createClient();
  const { data } = await client.getSingle("productpage");

  return (
    <>
      <ProductPagePage data={data} />
    </>
  );
};

export default ProductPage;
