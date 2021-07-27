import { useContext } from 'react';
import tw from 'twin.macro';

import CompanyLogoSvg from '../../static/company-logo.svg';
import TwitterSvg from '../../static/twitter.svg';
import InstagramSvg from '../../static/instagram.svg';
import FacebookSvg from '../../static/facebook.svg';
import Context, { BoolProvider } from './Context';

const Title = ({ children }) => {
  const dark = useContext(Context);
  return (
    <p css={[tw`font-semibold tracking-wide`, dark ? tw`text-gray-300` : tw`text-gray-800`]}>
      {children}
    </p>
  );
}

const Item = ({ children }) => {
  const dark = useContext(Context);
  return (
    <li>
      <a
        href="/"
        css={[tw`transition-colors duration-300`, dark ? tw`text-gray-500 hover:text-teal-accent-400` : tw`text-gray-600 hover:text-deep-purple-accent-400`]}
      >
        {children}
      </a>
    </li>
  );
}

const SocialLink = ({ children }) => {
  const dark = useContext(Context);
  return (
    <a
      href="/"
      css={[tw`transition-colors duration-300`, dark ? tw`text-gray-500 hover:text-teal-accent-400` : tw`text-gray-500 hover:text-deep-purple-accent-400`]}
    >
      {children}
    </a>
  );
};

const FooterEnd = () => {
  const dark = useContext(Context);
  return (
    <div tw="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
      <p css={[tw`text-sm`, dark ? tw`text-gray-500` : tw`text-gray-600`]}>
        © Copyright 2021 Lorem Inc. All rights reserved.
      </p>
      <div tw="flex items-center mt-4 space-x-4 sm:mt-0">
        <SocialLink>
          <TwitterSvg tw="h-5" />
        </SocialLink>
        <SocialLink>
          <InstagramSvg tw="h-6" />
        </SocialLink>
        <SocialLink>
          <FacebookSvg tw="h-5" />
        </SocialLink>
      </div>
    </div>
  );
};

const CompanyLink = () => {
  const dark = useContext(Context);
  return (
    <a
      href="/"
      aria-label="Go home"
      title="Company"
      tw="inline-flex items-center"
    >
      <CompanyLogoSvg css={[tw`w-8`, dark ? tw`text-teal-accent-400` : tw`text-deep-purple-accent-400`]} />
      <span css={[tw`ml-2 text-xl font-bold tracking-wide uppercase`, dark ? tw`text-gray-300` : tw`text-gray-800`]}>
        Company
      </span>
    </a>
  );
};

const AboutCompany = () => {
  const dark = useContext(Context);
  return (
    <div tw="md:max-w-md lg:col-span-2 text-left">
      <CompanyLink />
      <div tw="mt-4 lg:max-w-sm">
        <p css={[tw`text-sm`, dark ? tw`text-gray-500` : tw`text-gray-800`]}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <p css={[tw`mt-4 text-sm`, dark ? tw`text-gray-500` : tw`text-gray-800`]}>
          Eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>
  );
};

const Footer = ({ dark }) => {
  return (
    <BoolProvider value={dark}>
      <div css={[dark && tw`bg-gray-900`]}>
        <div tw="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div tw="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <AboutCompany />
            <div tw="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 text-left">
              <div>
                <Title>Category</Title>
                <ul tw="mt-2 space-y-2">
                  <Item>News</Item>
                  <Item>World</Item>
                  <Item>Games</Item>
                  <Item>References</Item>
                </ul>
              </div>
              <div>
                <Title>Business</Title>
                <ul tw="mt-2 space-y-2">
                  <Item>Web</Item>
                  <Item>eCommerce</Item>
                  <Item>Business</Item>
                  <Item>Entertainment</Item>
                  <Item>Portfolio</Item>
                </ul>
              </div>
              <div>
                <Title>Apples</Title>
                <ul tw="mt-2 space-y-2">
                  <Item>Media</Item>
                  <Item>Brochure</Item>
                  <Item>Nonprofit</Item>
                  <Item>Educational</Item>
                  <Item>Projects</Item>
                </ul>
              </div>
              <div>
                <Title>Cherry</Title>
                <ul tw="mt-2 space-y-2">
                  <Item>Infopreneur</Item>
                  <Item>Personal</Item>
                  <Item>Wiki</Item>
                  <Item>Forum</Item>
                </ul>
              </div>
            </div>
          </div>
          <FooterEnd />
        </div>
      </div>
    </BoolProvider>
  );
};

export default Footer;
