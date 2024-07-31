/**
 * @typedef {import("@prismicio/client").Content.LogosSlice} LogosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogosSlice>} LogosProps
 * @param {LogosProps}
 */
const Logos = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for logos (variation: {slice.variation}) Slices
    </section>
  );
};

export default Logos;
