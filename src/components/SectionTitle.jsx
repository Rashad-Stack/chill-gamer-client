import PropTypes from "prop-types";

export default function SectionTitle({ title }) {
  return (
    <div className="space-y-1">
      <p className="text-body-4 text-primary-500 font-semibold">{title.sub}</p>
      <h4 className="text-heading-5 font-bold dark:text-white">{title.main}</h4>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.shape({
    sub: PropTypes.string,
    main: PropTypes.string,
  }),
};
