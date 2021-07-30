import tw from "twin.macro";
import PropTypes from "prop-types";
import { useContext } from "react";

import DarkContext from "./Context";

const ItemLink = ({ title, large, button, children }) => {
  const dark = useContext(DarkContext);

  const textClasses = [
    tw`font-medium tracking-wide transition-colors duration-200 no-underline`,
    dark
      ? tw`text-gray-100 hover:text-teal-accent-400`
      : tw`text-gray-700 hover:text-deep-purple-accent-400`,
  ];

  const buttonClasses = [
    tw`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none no-underline`,
    large && tw`w-full`,
  ];

  return (
    <a
      href="/"
      aria-label={title}
      title={title}
      css={button ? buttonClasses : textClasses}
    >
      {children}
    </a>
  );
};

ItemLink.propTypes = {
  title: PropTypes.string,
  large: PropTypes.bool,
  button: PropTypes.bool,
  children: PropTypes.node,
};

export default ItemLink;
