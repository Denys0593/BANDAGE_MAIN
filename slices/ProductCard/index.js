/**
 * @typedef {import("@prismicio/client").Content.ProductCardSlice} ProductCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductCardSlice>} ProductCardProps
 * @param {ProductCardProps}
 */
const ProductCard = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product_card (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProductCard;
