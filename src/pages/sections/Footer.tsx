import Arrow from "@/assets/icons/arrow-up-right.svg";

const Footer = () => {
  const arrowStyle =
    " h-3 md:h-5 w-auto group-hover:rotate-45 transition-transform";
  const btnStyle =
    "flex items-center gap-2 group hover:underline underline-offset-4";

  return (
    <footer className="w-screen relative container mt-24">
      <div className="absolute h-[400px] md:w-[54rem] lg:w-[87rem] bottom-0 left-1/2 -translate-x-1/2 md:[mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] md:bg-emerald-400/30 pointer-events-none"></div>
      <hr className="mb-3" />
      <div className="flex items-center justify-between  flex-col md:flex-row">
        <span className="text-white/50">© 2024 All rights reserved.</span>
        <ul className="flex  flex-col md:flex-row  gap-3 md:gap-7 my-4">
          <li>
            <button className={btnStyle}>
              YouTube <Arrow className={arrowStyle} />
            </button>
          </li>
          <li>
            <button className={btnStyle}>
              Twitter <Arrow className={arrowStyle} />
            </button>
          </li>
          <li>
            <button className={btnStyle}>
              Instagram <Arrow className={arrowStyle} />
            </button>
          </li>
          <li>
            <button className={btnStyle}>
              LinkedIn <Arrow className={arrowStyle} />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
