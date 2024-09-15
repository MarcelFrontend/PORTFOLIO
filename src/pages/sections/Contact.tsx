import Arrow from "@/assets/icons/arrow-up-right.svg";
const Contact = () => {
  return (
    <div id="contact" className=" mt-32 md:mt-52">
      <div className=" max-w-96 md:max-w-[50rem] lg:max-w-[62rem] mx-auto flex items-center md:justify-between  flex-col md:flex-row gap-3 rounded-3xl bg-gradient-to-r from-emerald-400 to-sky-400 py-8 md:px-8">
        <div className="flex items-center md:items-start justify-center flex-col  gap-3 md:gap-5  text-center md:text-start text-black">
          <span className=" max-w-64 md:max-w-[23rem] lg:max-w-full font-serif  text-2xl md:text-4xl font-bold">
            Let&apos;s create something amazing together
          </span>
          <p className=" max-w-72 md:max-w-[32rem] lg:max-w-[44rem] md:text-2xl">
            Ready to bring your project to life? Let&apos;s connect and discuss
            how I can help you achieve your goals.
          </p>
        </div>
        <button className="md:min-w-[150px] flex items-center gap-2 bg-black text-white px-6 py-4 text-xs md:text-xl rounded-xl hover:-translate-y-1 transition-transform group">
          Contact me
          <Arrow className=" h-3 md:h-5 w-auto group-hover:rotate-45 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Contact