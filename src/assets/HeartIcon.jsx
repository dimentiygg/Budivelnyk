function HeartIcon({ elementId }) {
  return (
    <svg
      className={`${
        elementId === 4 ? ' fill-orn2' : 'fill-wht'
      } ease-in-out duration-200`}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path d="M14 8.75c-4.633 0-8.584 3.467-8.584 7.967 0 3.105 1.454 5.718 3.38 7.883 1.922 2.158 4.4 3.97 6.639 5.487l3.865 2.616a1.25 1.25 0 001.4 0l3.865-2.616c2.24-1.517 4.716-3.329 6.636-5.487 1.929-2.165 3.382-4.778 3.382-7.883 0-4.5-3.95-7.967-8.583-7.967-2.39 0-4.492 1.12-6 2.57-1.509-1.45-3.612-2.57-6-2.57z"></path>
    </svg>
  );
}

export default HeartIcon;
