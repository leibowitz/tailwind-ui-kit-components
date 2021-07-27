import tw from 'twin.macro';

import CompanyLogoSvg from '../../static/company-logo.svg';

const Company = ({ large }) => (
  <a
    href="/"
    aria-label="Company"
    title="Company"
    css={[tw`inline-flex items-center no-underline`, large && tw`lg:mx-auto`]}
  >
    <CompanyLogoSvg tw="w-8 text-deep-purple-accent-400" />
    <span tw="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
      Company
    </span>
  </a>
);

export default Company;
