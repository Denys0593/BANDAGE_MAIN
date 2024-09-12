import { createClient } from "@/prismicio";

import "../productList.scss";

import PrismicSingleCard from "./PrismicSingleCard";

export function generateMetadata({ params: { uid } }) {
  return {
    title: uid,
  };
}

const SingleCard = async ({ params: { uid } }) => {
  const client = createClient();
  const { data } = await client.getSingle("productcard");

  return (
    <>
      <PrismicSingleCard uid={uid} data={data} />
    </>
  );
};

export default SingleCard;
