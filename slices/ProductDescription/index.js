/**
 * @typedef {import("@prismicio/client").Content.ProductDescriptionSlice} ProductDescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductDescriptionSlice>} ProductDescriptionProps
 * @param {ProductDescriptionProps}
 */
const ProductDescription = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product_description (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProductDescription;
