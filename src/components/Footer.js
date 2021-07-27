import CompanyLogoSvg from '../../static/company-logo.svg';
import TwitterSvg from '../../static/twitter.svg';
import InstagramSvg from '../../static/instagram.svg';
import FacebookSvg from '../../static/facebook.svg';

const Title = ({ children }) => (
  <p tw="font-semibold tracking-wide text-gray-800">
    {children}
  </p>
);

const Item = ({ children }) => (
  <li>
    <a
      href="/"
      tw="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
    >
      {children}
    </a>
  </li>
);

const SocialLink = ({ children }) => (
  <a
    href="/"
    tw="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
  >
    {children}
  </a>
);

const FooterEnd = () => (
  <div tw="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
    <p tw="text-sm text-gray-600">
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

const CompanyLink = () => (
  <a
    href="/"
    aria-label="Go home"
    title="Company"
    tw="inline-flex items-center"
  >
    <CompanyLogoSvg tw="w-8 text-deep-purple-accent-400" />
    <span tw="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
      Company
    </span>
  </a>
);

const AboutCompany = () => (
  <div tw="md:max-w-md lg:col-span-2 text-left">
    <CompanyLink />
    <div tw="mt-4 lg:max-w-sm">
      <p tw="text-sm text-gray-800">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.
      </p>
      <p tw="mt-4 text-sm text-gray-800">
        Eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo.
      </p>
    </div>
  </div>
);

const Footer = () => {
  return (
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
  );
};

export default Footer;
