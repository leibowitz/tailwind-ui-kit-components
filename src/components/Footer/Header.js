import React, { useContext } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

import DefaultContext from "./context";

const Header = ({ children }) => {
  const variant = useContext(DefaultContext);
  return (
    <p
      css={[
        tw`text-base font-bold tracking-wide`,
        variant === "default" && tw`text-gray-800`,
        variant === "dark" && tw`text-gray-300`,
        variant === "accent" && tw`text-gray-300`,
      ]}
    >
      {children}
    </p>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
