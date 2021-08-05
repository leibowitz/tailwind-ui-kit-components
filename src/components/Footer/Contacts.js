import { useContext } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

import DefaultContext from "./context";

const Contacts = ({ email, phone, address }) => {
  const variant = useContext(DefaultContext);
  return (
    <div tw="space-y-2 text-sm">
      <p
        css={[
          tw`text-base font-bold tracking-wide`,
          variant === "default" && tw`text-gray-800`,
          variant === "dark" && tw`text-gray-300`,
          variant === "accent" && tw`text-gray-300`,
        ]}
      >
        Contacts
      </p>
      <div tw="flex">
        <p
          css={[
            tw`mr-1`,
            variant === "default" && tw`text-gray-800`,
            variant === "dark" && tw`text-gray-500`,
            variant === "accent" && tw`text-gray-300`,
          ]}
        >
          Phone:
        </p>
        <a
          href={`tel:${phone}`}
          aria-label="Our phone"
          title="Our phone"
          css={[
            tw`transition-colors duration-300`,
            variant === "default"
              ? tw`text-deep-purple-accent-400 hover:text-deep-purple-700`
              : tw`text-teal-accent-400 hover:text-teal-accent-700`,
          ]}
        >
          {phone}
        </a>
      </div>
      <div tw="flex">
        <p
          css={[
            tw`mr-1`,
            variant === "default" && tw`text-gray-800`,
            variant === "dark" && tw`text-gray-500`,
            variant === "accent" && tw`text-gray-300`,
          ]}
        >
          Email:
        </p>
        <a
          href={`mailto:${email}`}
          aria-label="Our email"
          title="Our email"
          css={[
            tw`transition-colors duration-300`,
            variant === "default"
              ? tw`text-deep-purple-accent-400 hover:text-deep-purple-700`
              : tw`text-teal-accent-400 hover:text-teal-accent-700`,
          ]}
        >
          {email}
        </a>
      </div>
      <div tw="flex">
        <p
          css={[
            tw`mr-1`,
            variant === "default" && tw`text-gray-800`,
            variant === "dark" && tw`text-gray-500`,
            variant === "accent" && tw`text-gray-300`,
          ]}
        >
          Address:
        </p>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our address"
          title="Our address"
          css={[
            tw`transition-colors duration-300`,
            variant === "default"
              ? tw`text-deep-purple-accent-400 hover:text-deep-purple-700`
              : tw`text-teal-accent-400 hover:text-teal-accent-700`,
          ]}
        >
          {address}
        </a>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
};

export default Contacts;
