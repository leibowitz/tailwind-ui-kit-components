import NavItemLink from "./NavItemLink";
import PropTypes from "prop-types";

const SignUp = ({ large, text }) => (
  <NavItemLink large={large} title="Sign up" button={!text}>
    Sign Up
  </NavItemLink>
);

SignUp.propTypes = {
  text: PropTypes.string,
  large: PropTypes.bool,
};

export default SignUp;
