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

const Person = ({ layout, ...person }) => {
  if (layout.startsWith("square")) {
    return (
      <div css={[layout === "square-left" && tw`grid sm:grid-cols-3`]}>
        <div
          css={[
            tw`relative rounded shadow`,
            layout === "square-left" && tw`sm:h-auto w-full h-48 max-h-full`,
            layout === "square-center" && tw`pb-56 mb-4 lg:pb-64`,
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
            layout === "square-center" && tw`sm:text-center`,
            layout === "square-left" &&
              tw`justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2`,
          ]}
        >
          <Card {...person} />
        </div>
      </div>
    );
  }

  return (
    <div
      css={[
        layout === "round-small" && tw`flex`,
        layout === "round-center" && tw`flex flex-col items-center`,
      ]}
    >
      <img
        css={[
          tw`object-cover rounded-full shadow`,
          layout === "round-left" ? tw`w-24 h-24` : tw`w-20 h-20`,
          layout === "round-small" && tw`mr-4`,
        ]}
        src="https://thispersondoesnotexist.com/image"
        alt="Person"
      />
      <div
        css={[
          tw`flex flex-col`,
          layout === "round-center" && tw`items-center`,
          layout === "round-left" && tw`items-start mt-2`,
          layout === "round-small" && tw`justify-center mt-2`,
        ]}
      >
        <Card {...person} />
      </div>
    </div>
  );
};

Person.propTypes = {
  layout: PropTypes.string,
  person: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
  }),
};

const Team = ({ peoples, title, intro, layout }) => {
  // layout:
  // square
  // - left
  // - center
  // - hover
  // round
  // - left
  // - small
  // - center
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
          layout === "square-left" && tw`lg:grid-cols-2`,
          layout === "square-center" && tw`sm:grid-cols-2 lg:grid-cols-4`,
          layout === "square-hover" && tw`sm:grid-cols-2 lg:grid-cols-4`,
          layout === "round-center" && tw`sm:grid-cols-2 lg:grid-cols-4`,
          layout === "round-left" && tw`sm:grid-cols-2 lg:grid-cols-4`,
          layout === "round-small" &&
            tw`sm:grid-cols-2 lg:grid-cols-3 row-gap-8 sm:row-gap-10`,
        ]}
      >
        {peoples.map((person, index) => (
          <Person key={index} {...person} layout={layout} />
        ))}
      </div>
    </div>
  );
};

Team.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  layout: PropTypes.string,
  peoples: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Team;
