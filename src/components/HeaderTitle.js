import LogoSvg from '../../static/logo.svg';

const HeaderTitle = () => (
  <h2 tw="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
    <span tw="relative inline-block">
      <LogoSvg />
      <span tw="relative">The</span>
    </span>{' '}
    quick, brown fox jumps over a lazy dog
  </h2>
);

export default HeaderTitle;
