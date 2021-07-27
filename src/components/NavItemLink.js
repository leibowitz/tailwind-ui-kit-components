const ItemLink = ({title, children}) => (
  <a
    href="/"
    aria-label={title}
    title={title}
    tw="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 no-underline"
  >
    {children}
  </a>
);

export default ItemLink;
