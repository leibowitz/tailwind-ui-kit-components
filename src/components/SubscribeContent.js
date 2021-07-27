import tw from 'twin.macro';
import { useContext } from 'react';

import AccentContext from './Context';

const SubscribeContent = () => {
  const accent = useContext(AccentContext);
  return (
    <p css={[tw`mb-6 text-base md:text-lg`, accent ? tw`text-indigo-100` : tw`font-thin tracking-wide text-gray-300`]}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae. explicabo. Sed ut perspiciatis unde omnis.
    </p>
  );
};

export default SubscribeContent;
