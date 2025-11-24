export const SubscribeButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="button-black md:px-8 md:py-3 md:text-base lg:px-10 lg:py-4 lg:text-lg active:shadow-[2px_2px_0_0_rgba(0,0,0,0.25)]"
    >
      {text}
    </button>
  );
};
