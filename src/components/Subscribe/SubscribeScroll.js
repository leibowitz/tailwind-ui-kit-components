import { useContext } from "react";
import tw from "twin.macro";

import ArrowSvg from "~/static/arrow.svg";
import { Context } from "./index";

const SubscribeScroll = () => {
  const { accent, dark } = useContext(Context);

  return (
    <a
      href="/"
      aria-label="Scroll down"
      css={[
        tw`flex items-center justify-center w-10 h-10 mx-auto duration-300 transform border border-solid border-gray-400 rounded-full hover:shadow hover:scale-110`,
        (accent || dark) && tw`text-white`,
        !accent && !dark && tw`text-gray-600`,
        accent && tw`hover:text-teal-accent-400 hover:border-teal-accent-400`,
        dark &&
          tw`hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400`,
      ]}
    >
      <ArrowSvg />
    </a>
  );
};

export default SubscribeScroll;
