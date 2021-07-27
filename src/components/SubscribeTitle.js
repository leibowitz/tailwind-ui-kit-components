import tw from 'twin.macro';
import { useContext } from 'react';

import AccentContext from './Context';

const SubscribeTitle = () => {
  const accent = useContext(AccentContext);
  return (
    <h2 tw="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
      The quick, brown fox
      <br tw="hidden md:block" />
      jumps over a{' '}
      <span css={[tw`relative inline-block`, accent && tw`px-2`]}>
        {accent && <div tw="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />}
        <span css={[accent && tw`relative text-teal-900`]}>lazy dog</span>
        {!accent && <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />}
      </span>
    </h2>
  );
};

export default SubscribeTitle;
