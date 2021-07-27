import React, { useState, useContext } from 'react';
import tw from 'twin.macro';

import MenuSvg from '../../static/menu.svg';
import CloseSvg from '../../static/close.svg';

import ItemLink from './NavItemLink';
import Company from './Company';
import SignIn from './SignIn';
import SignUp from './SignUp';
import DarkContext, { BoolProvider as DarkProvider } from './Context';

const DesktopNav = () => (
  <>
    <ul tw="flex items-center hidden space-x-8 lg:flex list-none">
      <li>
        <ItemLink title="Our product">
          Product
        </ItemLink>
      </li>
      <li>
        <ItemLink title="Features">
          Features
        </ItemLink>
      </li>
      <li>
        <ItemLink title="Product pricing">
          Pricing
        </ItemLink>
      </li>
    </ul>
    <Company large />
    <ul tw="flex items-center hidden ml-auto space-x-8 lg:flex list-none">
      <li>
        <SignIn />
      </li>
      <li>
        <SignUp />
      </li>
    </ul>
  </>
);

const MobileNav = () => (
  <nav>
    <ul tw="space-y-4 list-none">
      <li>
        <ItemLink title="Our product">
          Product
        </ItemLink>
      </li>
      <li>
        <ItemLink title="Features">
          Features
        </ItemLink>
      </li>
      <li>
        <ItemLink title="Product pricing">
          Pricing
        </ItemLink>
      </li>
      <li>
        <SignIn />
      </li>
      <li>
        <SignUp large />
      </li>
    </ul>
  </nav>
);

const MenuOpenButton = ({ setIsMenuOpen }) => {
  const dark = useContext(DarkContext);
  return (
    <button
      aria-label="Open Menu"
      title="Open Menu"
      css={[tw`p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline`, !dark && tw`hover:bg-deep-purple-50 focus:bg-deep-purple-50`]}
      onClick={() => setIsMenuOpen(true)}
    >
      <MenuSvg tw="w-5 text-gray-600" />
    </button>
  );
};

const MenuCloseButton = ({ setIsMenuOpen }) => (
  <button
    aria-label="Close Menu"
    title="Close Menu"
    tw="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    onClick={() => setIsMenuOpen(false)}
  >
    <CloseSvg tw="w-5 text-gray-600" />
  </button>
);

const NavContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dark = useContext(DarkContext);

  return (
    <div tw="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div tw="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
        <DesktopNav />
        <div tw="ml-auto lg:hidden">
          <MenuOpenButton setIsMenuOpen={setIsMenuOpen} />
          {isMenuOpen && (
            <div tw="absolute top-0 left-0 w-full">
              <div css={[tw`p-5 bg-white border rounded shadow-sm`, dark && tw`bg-gray-900`]}>
                <div tw="flex items-center justify-between mb-4">
                  <div>
                    <Company />
                  </div>
                  <div>
                    <MenuCloseButton setIsMenuOpen={setIsMenuOpen} />
                  </div>
                </div>
                <MobileNav />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Nav = ({ dark }) => {
  return (
    <DarkProvider value={dark}>
      <div css={[dark && tw`bg-gray-900`]}>
        <NavContent />
      </div>
    </DarkProvider>
  );
};

export default Nav;
