import { createClient } from "@/prismicio";

import "../productList.scss";

import PrismicSingleCard from "./PrismicSingleCard";

const SingleCard = async ({ params: { uid } }) => {
  const client = createClient();
  const { data } = await client.getSingle("productcard");

  return (
    <>
    <div>opapapa</div>
      {/* <PrismicSingleCard uid={uid} data={data} /> */}
    </>
  );
};

export default SingleCard;
