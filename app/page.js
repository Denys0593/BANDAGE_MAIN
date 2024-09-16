import { createClient } from "@/prismicio";
import Main from "./Main";

export const metadata = {
  title: "bandage",
};

export default async function Home() {
  const client = createClient();
  const { data } = await client.getSingle("index");

  return (
    <>
      <Main data={data} />
    </>
  );
}
