import { motion } from "framer-motion";
import Star from "@/assets/icons/star.svg";

const tapeContent = [
  "performant",
  "accessible",
  "secure",
  "interactive",
  "scalable",
  "user friendly",
  "maintaiable",
  "search optimized",
  "usable",
  "reliable",
  "responsive",
];

const Tape = () => {
  return (
    <section className="w-full overflow-hidden my-36 md:my-64 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400 text-black">
      <div className="flex flex-1 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex  gap-6 md:gap-8 -translate-x-1/2 pr-10"
          initial={{ translateX: "-50%" }}
          animate={{ translateX: "0" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
        >
          {[...tapeContent, ...tapeContent].map((content, index) => (
            <div
              key={index}
              className="flex items-center  gap-6 md:gap-8  py-0.5 md:py-2"
            >
              <span className="uppercase whitespace-nowrap font-bold  text-xs md:text-xl lg:text-3xl">
                {content}
              </span>
              <Star className=" size-9 lg:size-12 -rotate-6" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Tape
