import React, { useContext } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

import CompanyLogoSvg from "~/static/company-logo.svg";
import TwitterSvg from "~/static/twitter.svg";
import InstagramSvg from "~/static/instagram.svg";
import FacebookSvg from "~/static/facebook.svg";
import CurveSvg from "~/static/curve.svg";
import DefaultContext from "./context";
import Subscribe from "./Subscribe";

const Title = ({ children }) => {
  const variant = useContext(DefaultContext);
  return (
    <p
      css={[
        tw`font-semibold tracking-wide`,
        variant === "default" && tw`text-gray-800`,
        variant === "dark" && tw`text-gray-300`,
        variant === "accent" && tw`text-teal-accent-400`,
      ]}
    >
      {children}
    </p>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

const Item = ({ children }) => {
  const variant = useContext(DefaultContext);
  return (
    <li>
      <a
        href="/"
        css={[
          tw`transition-colors duration-300`,
          variant === "default" &&
            tw`text-gray-600 hover:text-deep-purple-accent-400`,
          variant === "dark" && tw`text-gray-500 hover:text-teal-accent-400`,
          variant === "accent" && tw`text-gray-300 hover:text-teal-accent-400`,
        ]}
      >
        {children}
      </a>
    </li>
  );
};

Item.propTypes = {
  children: PropTypes.node,
};

const SocialLink = ({ children }) => {
  const variant = useContext(DefaultContext);
  return (
    <a
      href="/"
      css={[
        tw`transition-colors duration-300`,
        variant === "default" &&
          tw`text-gray-500 hover:text-deep-purple-accent-400`,
        variant === "dark" && tw`text-gray-500 hover:text-teal-accent-400`,
        variant === "accent" && tw`text-gray-300 hover:text-teal-accent-400`,
      ]}
    >
      {children}
    </a>
  );
};

SocialLink.propTypes = {
  children: PropTypes.node,
};

const FooterEnd = ({ name }) => {
  const variant = useContext(DefaultContext);
  return (
    <div tw="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
      <p
        css={[
          tw`text-sm`,
          variant === "default" && tw`text-gray-600`,
          variant === "dark" && tw`text-gray-500`,
          variant === "accent" && tw`text-gray-300`,
        ]}
      >
        © Copyright 2021 {name} All rights reserved.
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

FooterEnd.propTypes = {
  name: PropTypes.string,
};

const CompanyLink = ({ name }) => {
  const variant = useContext(DefaultContext);
  return (
    <a href="/" aria-label="Go home" title={name} tw="inline-flex items-center">
      <CompanyLogoSvg
        css={[
          tw`w-8`,
          variant === "default"
            ? tw`text-deep-purple-accent-400`
            : tw`text-teal-accent-400`,
        ]}
      />
      <span
        css={[
          tw`ml-2 text-xl font-bold tracking-wide uppercase`,
          variant === "default" && tw`text-gray-800`,
          variant === "dark" && tw`text-gray-300`,
          variant === "accent" && tw`text-gray-300`,
        ]}
      >
        {name}
      </span>
    </a>
  );
};

CompanyLink.propTypes = {
  name: PropTypes.string,
};

const AboutCompany = ({ name, children }) => {
  const variant = useContext(DefaultContext);
  return (
    <div tw="md:max-w-md lg:col-span-2 text-left">
      <CompanyLink name={name} />
      <div tw="mt-4 lg:max-w-sm">
        <p
          css={[
            tw`text-sm`,
            variant === "default" && tw`text-gray-800`,
            variant === "dark" && tw`text-gray-500`,
            variant === "accent" && tw`text-gray-300`,
          ]}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

AboutCompany.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

const Footer = ({
  company,
  name,
  description,
  categories,
  variant,
  subscribe,
}) => {
  return (
    <DefaultContext.Provider value={variant}>
      <div
        css={[
          variant === "dark" && tw`bg-gray-900`,
          variant === "accent" && tw`relative mt-16 bg-deep-purple-accent-400`,
        ]}
      >
        {variant === "accent" && (
          <CurveSvg tw="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400" />
        )}
        <div tw="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div tw="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            {name && <AboutCompany name={name}>{description}</AboutCompany>}
            {categories && (
              <div tw="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 text-left">
                {Object.keys(categories).map((category) => (
                  <div key={category}>
                    <Title>{category}</Title>
                    <ul tw="mt-2 space-y-2">
                      {categories[category].map((item, index) => (
                        <Item key={index}>{item.name}</Item>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {subscribe && <Subscribe>{subscribe}</Subscribe>}
          </div>
          <FooterEnd name={company} />
        </div>
      </div>
    </DefaultContext.Provider>
  );
};

Footer.propTypes = {
  name: PropTypes.string,
  subscribe: PropTypes.node,
  description: PropTypes.node,
  company: PropTypes.string,
  categories: PropTypes.object,
  variant: PropTypes.string,
};

Footer.defaultProps = {
  variant: "default",
};

export default Footer;
