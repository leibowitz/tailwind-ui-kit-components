import tw from 'twin.macro';

const SignUp = ({ large }) => (
  <a
    href="/"
    css={[tw`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`, large && tw`w-full`]}
    aria-label="Sign up"
    title="Sign up"
  >
    Sign up
  </a>
);

export default SignUp;
