import tw from "twin.macro";
import PropTypes from "prop-types";
import { useContext } from "react";

import SubscribeScroll from "./SubscribeScroll";
import AccentContext from "~/src/Context";

const SubscribeForm = ({ note }) => {
  const accent = useContext(AccentContext);
  return (
    <>
      <form tw="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
        <input
          placeholder="Email"
          required
          type="text"
          css={[
            tw`flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 rounded appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline`,
            accent
              ? tw`border-transparent bg-deep-purple-900 focus:border-teal-accent-700`
              : tw`border-gray-400 bg-transparent focus:border-deep-purple-accent-200`,
          ]}
        />
        <a
          href="/"
          css={[
            tw`inline-flex items-center justify-center w-full h-12 px-6 tracking-wide transition duration-200 rounded shadow-md md:w-auto focus:shadow-outline focus:outline-none`,
            accent
              ? tw`font-semibold text-teal-900 hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700`
              : tw`font-medium text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700`,
          ]}
        >
          Subscribe
        </a>
      </form>
      <p
        css={[
          tw`max-w-md mb-10 text-xs tracking-wide sm:text-sm sm:mx-auto md:mb-16`,
          accent ? tw`text-indigo-100` : tw`text-gray-500`,
        ]}
      >
        {note}
      </p>
      <SubscribeScroll />
    </>
  );
};

SubscribeForm.propTypes = {
  note: PropTypes.string,
};

export default SubscribeForm;
