import { useContext } from 'react';

import HeaderContainer from './HeaderContainer';
import HeaderContent from './HeaderContent';
import CallToAction from './CallToAction';
import AccentContext, { BoolProvider as AccentProvider } from './Context';

const HeaderBlocks = () => (
  <div tw="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div tw="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div tw="flex flex-col mb-16 sm:text-center sm:mb-0">
        <a href="/" tw="mb-6 sm:mx-auto">
          <HeaderContainer />
        </a>
        <HeaderContent />
        <CallToAction />
      </div>
    </div>
  </div>
);

const HeaderWrapper = ({ children }) => {
  const accent = useContext(AccentContext);
  if (accent) {
    return (
      <div tw="bg-deep-purple-accent-700">
        {children}
      </div>
    );
  }
  return (
    <>
      {children}
    </>
  );
};

const Header = ({ accent }) => (
  <AccentProvider value={accent}>
    <HeaderWrapper>
      <HeaderBlocks />
    </HeaderWrapper>
  </AccentProvider>
);

export default Header;
