import tw from 'twin.macro';
import { useContext } from 'react';

import DarkContext from './Context';

const SignIn = () => {
  const dark = useContext(DarkContext);

  return (
    <a
      href="/"
      aria-label="Sign in"
      title="Sign in"
      css={[tw`font-medium tracking-wide transition-colors duration-200 no-underline`, dark ? tw`text-gray-100 hover:text-teal-accent-400` : tw`text-gray-700 hover:text-deep-purple-accent-400`]}
    >
      Sign in
    </a>
  );
};

export default SignIn;
