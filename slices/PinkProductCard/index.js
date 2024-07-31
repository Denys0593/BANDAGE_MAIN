/**
 * @typedef {import("@prismicio/client").Content.PinkProductCardSlice} PinkProductCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PinkProductCardSlice>} PinkProductCardProps
 * @param {PinkProductCardProps}
 */
const PinkProductCard = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pink_product_card (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PinkProductCard;
