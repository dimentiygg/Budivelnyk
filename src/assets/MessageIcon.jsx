function MessageIcon({ elementId }) {
  return (
    <svg
      className={`${
        elementId === 3 ? ' fill-orn2' : 'fill-wht'
      } ease-in-out duration-200`}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fillRule="evenodd"
        d="M13.336 7.588a84.295 84.295 0 0113.499.067l2.706.23a4.443 4.443 0 014.014 3.753l.17 1.115c.58 3.78.525 7.63-.16 11.392a3.905 3.905 0 01-3.842 3.205h-14.96a2.08 2.08 0 00-.986.248l-6.519 3.504A1.25 1.25 0 015.417 30V15.805a8.217 8.217 0 017.598-8.192l.321-.025zm-.003 8.245a2.083 2.083 0 100 4.167 2.083 2.083 0 000-4.167zm6.667 0A2.083 2.083 0 1020 20a2.083 2.083 0 000-4.167zm4.583 2.084a2.083 2.083 0 114.167 0 2.083 2.083 0 01-4.167 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default MessageIcon;
