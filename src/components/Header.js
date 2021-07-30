import { useContext } from "react";
import PropTypes from "prop-types";

import HeaderContainer from "./HeaderContainer";
import HeaderContent from "./HeaderContent";
import CallToAction from "./CallToAction";
import AccentContext, { BoolProvider as AccentProvider } from "./Context";

const HeaderBlocks = ({ title, text }) => (
  <div tw="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div tw="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div tw="flex flex-col mb-16 sm:text-center sm:mb-0">
        <a href="/" tw="mb-6 sm:mx-auto">
          <HeaderContainer />
        </a>
        <HeaderContent title={title} text={text} />
        <CallToAction />
      </div>
    </div>
  </div>
);

HeaderBlocks.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

const HeaderWrapper = ({ children }) => {
  const accent = useContext(AccentContext);
  if (accent) {
    return <div tw="bg-deep-purple-accent-700">{children}</div>;
  }
  return <>{children}</>;
};

HeaderWrapper.propTypes = {
  children: PropTypes.node,
};

const Header = ({ title, text, accent }) => (
  <AccentProvider value={accent}>
    <HeaderWrapper>
      <HeaderBlocks title={title} text={text} />
    </HeaderWrapper>
  </AccentProvider>
);

Header.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  accent: PropTypes.bool,
};

export default Header;
