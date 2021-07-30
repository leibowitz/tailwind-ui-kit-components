import tw from "twin.macro";
import { useContext } from "react";

import ArrowSvg from "../../static/arrow.svg";
import AccentContext from "./Context";

const SubscribeScroll = () => {
  const accent = useContext(AccentContext);

  return (
    <a
      href="/"
      aria-label="Scroll down"
      css={[
        tw`flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-solid border-gray-400 rounded-full hover:shadow hover:scale-110`,
        accent
          ? tw`hover:text-teal-accent-400 hover:border-teal-accent-400`
          : tw`hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400`,
      ]}
    >
      <ArrowSvg />
    </a>
  );
};

export default SubscribeScroll;
