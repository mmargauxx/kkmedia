/**
 * @typedef {import("@prismicio/client").Content.ProjectSliceSlice} ProjectSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectSliceSlice>} ProjectSliceProps
 * @param {ProjectSliceProps}
 */
const ProjectSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectSlice;
