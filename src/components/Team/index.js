import PropTypes from "prop-types";
import tw from "twin.macro";

const Card = ({ name, role, description }) => (
  <>
    <p tw="text-lg font-bold">{name}</p>
    <p tw="mb-4 text-xs text-gray-800">{role}</p>
    <p tw="text-sm tracking-wide text-gray-800 text-left">{description}</p>
  </>
);

Card.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
};

const Person = ({ small, center, square, ...person }) => {
  if (square) {
    return (
      <div css={[!center && tw`grid sm:grid-cols-3`]}>
        <div
          css={[
            tw`relative rounded shadow`,
            !center && tw`sm:h-auto w-full h-48 max-h-full`,
            center && tw`pb-56 mb-4 lg:pb-64`,
          ]}
        >
          <img
            tw="absolute object-cover w-full h-full rounded"
            src="https://thispersondoesnotexist.com/image"
            alt="Person"
          />
        </div>
        <div
          css={[
            tw`flex flex-col`,
            center && tw`sm:text-center`,
            !center && tw`justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2`,
          ]}
        >
          <Card {...person} />
        </div>
      </div>
    );
  }

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
          center && tw`items-center`,
          !small && !center && tw`items-start mt-2`,
          small && tw`justify-center mt-2`,
        ]}
      >
        <Card {...person} />
      </div>
    </div>
  );
};

Person.propTypes = {
  small: PropTypes.bool,
  center: PropTypes.bool,
  square: PropTypes.bool,
  person: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
  }),
};

const Team = ({ peoples, title, intro, small, center, square }) => {
  return (
    <div tw="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div tw="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 tw="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {title}
        </h2>
        <p tw="text-base text-gray-700 md:text-lg">{intro}</p>
      </div>
      <div
        css={[
          tw`grid gap-10 mx-auto lg:max-w-screen-lg`,
          square && !center
            ? tw`lg:grid-cols-2`
            : tw`sm:grid-cols-2 lg:grid-cols-4`,
        ]}
      >
        {peoples.map((person, index) => (
          <Person
            key={index}
            {...person}
            small={small}
            center={center}
            square={square}
          />
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
  square: PropTypes.bool,
  peoples: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Team;
