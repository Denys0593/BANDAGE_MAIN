/**
 * @typedef {import("@prismicio/client").Content.EditorsPickSlice} EditorsPickSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EditorsPickSlice>} EditorsPickProps
 * @param {EditorsPickProps}
 */
const EditorsPick = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for editors_pick (variation: {slice.variation})
      Slices
    </section>
  );
};

export default EditorsPick;
