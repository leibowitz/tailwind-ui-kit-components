import tw from 'twin.macro';

import DotsSvg from '../../static/dots.svg';

const HeaderContainer = ({ accent }) => (
  <div css={[tw`flex items-center justify-center w-12 h-12 rounded-full`, accent ? tw`bg-teal-accent-400` : tw`bg-indigo-50`]}>
    <DotsSvg css={[tw`w-10 h-10`, accent ? tw`text-deep-purple-900` : tw`text-deep-purple-accent-400`]} />
  </div>
);

export default HeaderContainer;
