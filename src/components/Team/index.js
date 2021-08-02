import PropTypes from "prop-types";
import tw from "twin.macro";

const Person = ({ small, center, ...person }) => {
  return (
    <div css={[small && tw`flex`, center && tw`flex flex-col items-center`]}>
      <img
        css={[
          tw`object-cover rounded-full shadow`,
          small || center ? tw`w-20 h-20` : tw`w-24 h-24`,
          small && tw`mr-4`,
        ]}
        src="https://thispersondoesnotexist.com/image"
        alt="Person"
      />
      <div
        css={[
          tw`flex flex-col`,
          !small && tw`items-start mt-2`,
          center ? tw`items-center` : tw`justify-center`,
        ]}
      >
        <p tw="text-lg font-bold">{person.name}</p>
        <p tw="mb-4 text-xs text-gray-800">{person.role}</p>
        <p tw="text-sm tracking-wide text-gray-800 text-left">
          {person.description}
        </p>
      </div>
    </div>
  );
};

Person.propTypes = {
  small: PropTypes.bool,
  center: PropTypes.bool,
  person: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
  }),
};

const Team = ({ peoples, title, intro, small, center }) => {
  return (
    <div tw="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div tw="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 tw="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {title}
        </h2>
        <p tw="text-base text-gray-700 md:text-lg">{intro}</p>
      </div>
      <div tw="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {peoples.map((person, index) => (
          <Person key={index} {...person} small={small} center={center} />
        ))}
      </div>
    </div>
  );
};

Team.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  small: PropTypes.bool,
  center: PropTypes.bool,
  peoples: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Team;
