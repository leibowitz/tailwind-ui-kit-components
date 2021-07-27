const Person = () => {
  return (
    <div>
      <img
        tw="object-cover w-24 h-24 rounded-full shadow"
        src="https://thispersondoesnotexist.com/image"
        alt="Person"
      />
      <div tw="flex flex-col justify-center items-start mt-2">
        <p tw="text-lg font-bold">John Smith</p>
        <p tw="mb-4 text-xs text-gray-800">Product Manager</p>
        <p tw="text-sm tracking-wide text-gray-800 text-left">
          Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
          cuppa unhand me sir hadn't done it in donkey's years sod's law.
        </p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div tw="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div tw="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <Person />
      </div>
    </div>
  );
};

export default Team;
