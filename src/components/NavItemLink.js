import tw from 'twin.macro';
import { useContext } from 'react';

import DarkContext from './Context';

const ItemLink = ({title, children}) => {
  const dark = useContext(DarkContext);

  return (
    <a
      href="/"
      aria-label={title}
      title={title}
      css={[tw`font-medium tracking-wide transition-colors duration-200 no-underline`, dark ? tw`text-gray-100 hover:text-teal-accent-400` : tw`text-gray-700 hover:text-deep-purple-accent-400`]}
    >
      {children}
    </a>
  );
};

export default ItemLink;
