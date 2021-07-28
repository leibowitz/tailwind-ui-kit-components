import tw from 'twin.macro';
import { useContext } from 'react';

import AccentContext from './Context';

const SubscribeContent = ({ text }) => {
  const accent = useContext(AccentContext);
  return (
    <p css={[tw`mb-6 text-base md:text-lg`, accent ? tw`text-indigo-100` : tw`font-thin tracking-wide text-gray-300`]}>
      {text}
    </p>
  );
};

export default SubscribeContent;
