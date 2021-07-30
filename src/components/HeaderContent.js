import tw from "twin.macro";
import PropTypes from "prop-types";
import { useContext } from "react";

import HeaderTitle from "./HeaderTitle";
import AccentContext from "./Context";

const HeaderContent = ({ title, text }) => {
  const accent = useContext(AccentContext);
  return (
    <div tw="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <HeaderTitle>{title}</HeaderTitle>

      <p
        css={[
          tw`text-base md:text-lg`,
          accent ? tw`text-indigo-100` : tw`text-gray-700`,
        ]}
      >
        {text}
      </p>
    </div>
  );
};

HeaderContent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeaderContent;
