import PropTypes from "prop-types";

const Person = (person) => {
  return (
    <div>
      <img
        tw="object-cover w-24 h-24 rounded-full shadow"
        src="https://thispersondoesnotexist.com/image"
        alt="Person"
      />
      <div tw="flex flex-col justify-center items-start mt-2">
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
  person: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
  }),
};

const Team = ({ peoples, title, intro }) => {
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
          <Person key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

Team.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  peoples: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Team;
