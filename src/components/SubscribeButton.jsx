export const SubscribeButton = ({
  variant = "desktop",
  size = "md",
  text = "Subscribe",
  onClick,
}) => {
  const baseStyles =
    "font-montserrat font-bold rounded-lg transition-all duration-200 active:translate-y-1 active:shadow-none relative uppercase tracking-wide";

  const variants = {
    desktop:
      "bg-black text-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] hover:bg-transparent hover:text-black hover:border-2 hover:border-black hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]",

    mobile:
      "bg-black text-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] active:shadow-[2px_2px_0_0_rgba(0,0,0,0.25)] hover:bg-transparent hover:text-black hover:border-2 hover:border-black hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]",

    outlineDesktop:
      "border-2 border-black text-black bg-transparent shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] hover:bg-black hover:text-white hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]",

    outlineMobile:
      "border-2 border-black text-black bg-transparent shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] hover:bg-black hover:text-white hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]",
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {text}
    </button>
  );
};
