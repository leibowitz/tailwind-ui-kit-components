import tw from 'twin.macro';

import HightLightSvg from '../../static/highlight.svg';
import ArrowSvg from '../../static/arrow.svg';

const Subscribe = ({ accent }) => {
  return (
    <div css={[tw`relative`, accent ? tw`bg-deep-purple-accent-400` : tw`bg-gray-900`]}>
      <div tw="absolute inset-x-0 bottom-0">
        <HightLightSvg tw="w-full -mb-1 text-white" />
      </div>
      <div tw="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div tw="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 tw="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br tw="hidden md:block" />
            jumps over a{' '}
            <span css={[tw`relative inline-block`, accent && tw`px-2`]}>
              {accent && <div tw="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />}
              <span css={[accent && tw`relative text-teal-900`]}>lazy dog</span>
              {!accent && <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />}
            </span>
          </h2>
          <p css={[tw`mb-6 text-base md:text-lg`, accent ? tw`text-indigo-100` : tw`font-thin tracking-wide text-gray-300`]}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo. Sed ut perspiciatis unde omnis.
          </p>
          <form tw="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Email"
              required
              type="text"
              css={[tw`flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 rounded appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline`, accent ? tw`border-transparent bg-deep-purple-900 focus:border-teal-accent-700` : tw`border-gray-400 bg-transparent focus:border-deep-purple-accent-200`]}
            />
            <a
              href="/"
              css={[tw`inline-flex items-center justify-center w-full h-12 px-6 tracking-wide transition duration-200 rounded shadow-md md:w-auto focus:shadow-outline focus:outline-none`, accent ? tw`font-semibold text-teal-900 hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700` : tw`font-medium text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700`]}
            >
              Subscribe
            </a>
          </form>
          <p css={[tw`max-w-md mb-10 text-xs tracking-wide sm:text-sm sm:mx-auto md:mb-16`, accent ? tw`text-indigo-100` : tw`text-gray-500`]}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p>
          <a
            href="/"
            aria-label="Scroll down"
            css={[tw`flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-solid border-gray-400 rounded-full hover:shadow hover:scale-110`, accent ? tw`hover:text-teal-accent-400 hover:border-teal-accent-400` : tw`hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400`]}
          >
            <ArrowSvg />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
