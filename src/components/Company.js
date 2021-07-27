import tw from 'twin.macro';
import { useContext } from 'react';

import DarkContext from './Context';
import CompanyLogoSvg from '../../static/company-logo.svg';

const Company = ({ large }) => {
  const dark = useContext(DarkContext);

  return (
    <a
      href="/"
      aria-label="Company"
      title="Company"
      css={[tw`inline-flex items-center no-underline`, large && tw`lg:mx-auto`]}
    >
      <CompanyLogoSvg css={[tw`w-8`, dark ? tw`text-teal-accent-400` : tw`text-deep-purple-accent-400`]} />
      <span css={[tw`ml-2 text-xl font-bold tracking-wide uppercase`, dark ? tw`text-gray-100` : tw`text-gray-800`]}>
        Company
      </span>
    </a>
  );
};

export default Company;
