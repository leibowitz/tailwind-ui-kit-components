import tw from "twin.macro";
import PropTypes from "prop-types";
import { useContext } from "react";

import { Context } from "./index";

const SubscribeContent = ({ text }) => {
  const { accent, dark } = useContext(Context);

  return (
    <p
      css={[
        tw`mb-6 text-base md:text-lg`,
        accent && tw`text-indigo-100`,
        dark && tw`font-thin tracking-wide text-gray-300`,
        !accent && !dark && tw`text-gray-700`,
      ]}
    >
      {text}
    </p>
  );
};

SubscribeContent.propTypes = {
  text: PropTypes.string,
};

export default SubscribeContent;
