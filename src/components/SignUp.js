import NavItemLink from "./NavItemLink";

const SignUp = ({ large, text }) => (
  <NavItemLink large={large} title="Sign up" button={!text}>
    Sign Up
  </NavItemLink>
);

export default SignUp;
