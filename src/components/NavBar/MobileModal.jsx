export default function MobileModal(isOpen) {
  return (
    <>
      {isOpen && (
        <div
          className={`absolute top-0 right-0 w-80 h-80 h-screen min-h-full bg-orn`}
        ></div>
      )}
    </>
  );
}
