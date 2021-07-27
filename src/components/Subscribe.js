import tw from 'twin.macro';

import SubscribeHeader from './SubscribeHeader';
import SubscribeTitle from './SubscribeTitle';
import SubscribeContent from './SubscribeContent';
import SubscribeForm from './SubscribeForm';

const Subscribe = ({ accent }) => {
  return (
    <div css={[tw`relative`, accent ? tw`bg-deep-purple-accent-400` : tw`bg-gray-900`]}>
      <SubscribeHeader />
      <div tw="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div tw="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <SubscribeTitle accent={accent} />
          <SubscribeContent accent={accent} />
          <SubscribeForm accent={accent} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
