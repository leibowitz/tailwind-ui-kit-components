import React from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

import SubscribeHeader from "./SubscribeHeader";
import SubscribeTitle from "./SubscribeTitle";
import SubscribeContent from "./SubscribeContent";
import SubscribeForm from "./SubscribeForm";

export const Context = React.createContext({ dark: false, accent: false });

const Subscribe = ({ title, text, note, accent, dark }) => {
  return (
    <Context.Provider value={{ dark, accent }}>
      <div
        css={[
          tw`relative`,
          accent && tw`bg-deep-purple-accent-400`,
          dark && tw`bg-gray-900`,
        ]}
      >
        <SubscribeHeader />
        <div tw="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div tw="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <SubscribeTitle title={title} />
            <SubscribeContent text={text} />
            <SubscribeForm note={note} />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

Subscribe.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  note: PropTypes.string,
  accent: PropTypes.bool,
  dark: PropTypes.bool,
};

export default Subscribe;
