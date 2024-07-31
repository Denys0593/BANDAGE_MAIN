/**
 * @typedef {import("@prismicio/client").Content.ShopcardsSlice} ShopcardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ShopcardsSlice>} ShopcardsProps
 * @param {ShopcardsProps}
 */
const Shopcards = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for shopcards (variation: {slice.variation}) Slices
    </section>
  );
};

export default Shopcards;
