const RedItem = ({ href, children }) => {
  return (
    <a
      className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
      href={href}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default RedItem;
