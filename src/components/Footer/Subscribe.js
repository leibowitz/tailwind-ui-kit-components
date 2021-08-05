import { useContext } from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

import DefaultContext from "./context";

const Subscribe = ({ children }) => {
  const variant = useContext(DefaultContext);
  return (
    <div tw="md:max-w-md lg:col-span-2">
      <span
        css={[
          tw`text-base font-medium tracking-wide`,
          variant === "default" && tw`text-gray-800`,
          variant === "dark" && tw`text-gray-300`,
          variant === "accent" && tw`text-gray-100`,
        ]}
      >
        Subscribe for updates
      </span>
      <form tw="flex flex-col mt-4 md:flex-row">
        <input
          placeholder="Email"
          required
          type="text"
          css={[
            tw`flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline`,
            variant !== "accent" &&
              tw`border-gray-300 focus:border-deep-purple-accent-400`,
            variant === "accent" &&
              tw`border-transparent bg-deep-purple-900 focus:border-teal-accent-700`,
          ]}
        />
        <button
          type="submit"
          css={[
            tw`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none`,
            variant !== "accent" &&
              tw`text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700`,
            variant === "accent" &&
              tw`text-teal-900 hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700`,
          ]}
        >
          Subscribe
        </button>
      </form>
      <p
        css={[
          tw`mt-4 text-sm`,
          variant === "default" && tw`text-gray-800`,
          variant === "dark" && tw`text-gray-500`,
          variant === "accent" && tw`text-gray-300`,
        ]}
      >
        {children}
      </p>
    </div>
  );
};

Subscribe.propTypes = {
  children: PropTypes.node,
};

export default Subscribe;
