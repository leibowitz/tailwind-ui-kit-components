import tw from 'twin.macro';

const CallToAction = ({ accent }) => (
  <div>
    <a
      href="/"
      css={[tw`inline-flex items-center justify-center h-12 px-6 tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none`, accent ? tw`font-semibold text-teal-900 hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100` : tw`text-white font-medium bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700`]}
    >
      Get started
    </a>
  </div>
);

export default CallToAction;
