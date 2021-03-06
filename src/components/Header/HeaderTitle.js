import tw from "twin.macro";
import PropTypes from "prop-types";
import { useContext } from "react";

import LogoSvg from "~/static/logo.svg";
import AccentContext from "~/src/Context";

const HeaderTitle = ({ children }) => {
  const accent = useContext(AccentContext);
  return (
    <h2
      css={[
        tw`max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto`,
        accent ? tw`text-white` : tw`text-gray-900`,
      ]}
    >
      <span tw="relative inline-block">
        <LogoSvg
          css={[
            tw`absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block`,
            accent ? tw`text-deep-purple-accent-100` : tw`text-blue-gray-100`,
          ]}
        />
        <span tw="relative">{children}</span>
      </span>
    </h2>
  );
};

HeaderTitle.propTypes = {
  children: PropTypes.node,
};

export default HeaderTitle;
