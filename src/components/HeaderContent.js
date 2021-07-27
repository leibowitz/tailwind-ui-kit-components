import tw from 'twin.macro';

import HeaderTitle from './HeaderTitle';

const HeaderContent = ({ accent }) => (
  <div tw="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <HeaderTitle accent={accent} />

    <p css={[tw`text-base md:text-lg`, accent ? tw`text-indigo-100` : tw`text-gray-700`]}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque rem aperiam, eaque ipsa quae.
    </p>
  </div>
);

export default HeaderContent;
