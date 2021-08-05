import { useContext } from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

import DefaultContext from "./context";

const Subscribe = ({ children }) => {
  const variant = useContext(DefaultContext);
  return (
    <div tw="md:max-w-md lg:col-span-2">
      <span css={[tw`text-base font-medium tracking-wide`, tw`text-gray-300`]}>
        Subscribe for updates
      </span>
      <form tw="flex flex-col mt-4 md:flex-row">
        <input
          placeholder="Email"
          required
          type="text"
          css={[
            tw`flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline`,
            tw`border-gray-300 focus:border-deep-purple-accent-400`,
          ]}
        />
        <button
          type="submit"
          css={[
            tw`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none`,
            tw`text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700`,
          ]}
        >
          Subscribe
        </button>
      </form>
      <p tw="mt-4 text-sm text-gray-500">{children}</p>
    </div>
  );
};

Subscribe.propTypes = {
  children: PropTypes.node,
};

export default Subscribe;
