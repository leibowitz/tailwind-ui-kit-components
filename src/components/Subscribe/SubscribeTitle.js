import PropTypes from "prop-types";

const SubscribeTitle = ({ title }) => {
  return (
    <h2 tw="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
      {title}
    </h2>
  );
};

SubscribeTitle.propTypes = {
  title: PropTypes.string,
};

export default SubscribeTitle;
