import { useContext } from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

import { Context } from "./index";

const SubscribeTitle = ({ title }) => {
  const { accent, dark } = useContext(Context);

  return (
    <h2
      css={[
        tw`mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none`,
        accent || dark ? tw`text-white` : tw`text-gray-900`,
      ]}
    >
      {title}
    </h2>
  );
};

SubscribeTitle.propTypes = {
  title: PropTypes.string,
};

export default SubscribeTitle;
