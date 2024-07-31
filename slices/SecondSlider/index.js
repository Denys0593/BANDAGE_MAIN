/**
 * @typedef {import("@prismicio/client").Content.SecondSliderSlice} SecondSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SecondSliderSlice>} SecondSliderProps
 * @param {SecondSliderProps}
 */
const SecondSlider = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for second_slider (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SecondSlider;
