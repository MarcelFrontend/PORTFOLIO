import { motion } from "framer-motion";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import headerAvatar from "@/assets/images/memoji-computer.png";
import Star from "@/assets/icons/star.svg"; // gwiazda
import Plus from "@/assets/icons/sparkle.svg"; //bardziej jak plus
import grainBg from "@/assets/images/grain.jpg";

const Hero = () => {
  const btnStyle = "px-4 py-2 rounded-xl";
  const orbitStyle =
    "absolute border rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5";
  const miniPlanetStyle = "absolute bg-gray-800/75 rounded-full";
  const orbitElStyle = "absolute text-emerald-500";
  return (
    <section
      id="home"
      className="relative flex items-center justify-center flex-col gap-8 [mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)] 
     py-10 md:py-40 overflow-hidden"
    >
      {/* 4 obwody, 4 gwiazdy, 3 plusy i 3 planety */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainBg.src})` }}
      ></div>
      {/* First orbit */}
      <div className="absolute flex items-center justify-center border-2 border-white pointer-events-none -z-10">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className={`${orbitStyle} size-[45rem]`}
        >
          <Star
            className={`${orbitElStyle} -left-10 size-[5rem] top-1/2 -translate-y-1/2  slow-spin`}
          />
          <Plus
            className={`${orbitElStyle} -right-20 size-[2.5rem] top-1/4 md-spin opacity-30`}
          />
        </motion.div>
        {/* Second orbit */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className={`${orbitStyle} size-[65rem]`}
        >
          <Plus
            className={`${orbitElStyle} -right-20 size-12 bottom-0 md-spin opacity-15`}
          />
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 4,
            }}
            className="absolute left-20 top-1/2 size-5 bg-white/25 rounded-full overflow-hidden"
          >
            <div className={`${miniPlanetStyle} left-0 top-[2px] size-1.5`} />
            <div
              className={`${miniPlanetStyle} left-[5px] top-[10px] size-1.5`}
            />
            <div className={`${miniPlanetStyle} right-0 top-0 size-1.5`} />
          </motion.div>
        </motion.div>
        {/* Third orbit */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
          className={`${orbitStyle} size-[85rem]`}
        >
          <Star
            className={`${orbitElStyle} -left-3 size-20 top-1/3 slow-spin`}
          />
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 4,
            }}
            className="absolute left-36 bottom-0 size-5 bg-white/25 rounded-full overflow-hidden"
          >
            <div className={`${miniPlanetStyle} left-0 top-[2px] size-1.5`} />
            <div
              className={`${miniPlanetStyle} left-[5px] top-[10px] size-1.5`}
            />
            <div className={`${miniPlanetStyle} right-0 top-0 size-1.5`} />
          </motion.div>
        </motion.div>
        {/* Fourth orbit */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 90,
          }}
          className={`${orbitStyle} size-[105rem]`}
        >
          <Plus
            className={`${orbitElStyle} -right-2 top-1/4 size-20 slow-spin opacity-25`}
          />
          <Plus
            className={`${orbitElStyle} left-1/2 bottom-0 size-14 md-spin opacity-75`}
          />
          <Plus
            className={`${orbitElStyle} left-0 top-1/4 size-14 md-spin opacity-50`}
          />
        </motion.div>
      </div>

      <div className="flex items-center text-center flex-col gap-7 z-">
        <div className="flex items-center justify-center flex-col">
          <img
            src={headerAvatar.src}
            className=" h-28 md:h-32 lg:h-44 w-auto"
          />
          <div className="flex items-center justify-center gap-3 px-3  py-3 bg-black rounded-lg">
            <div className="relative w-3 h-3 md:w-4 md:h-4 min-[1400px]:w-5 min-[1400px]:h-5 bg-green-500 rounded-full">
              {/* Todo */}
              <div className="absolute inset-0 w-full h-full bg-green-500 rounded-full dot" />
            </div>
            <span className=" text-xs lg:text-lg min-[1400px]:text-2xl">
              Available for new projects
            </span>
          </div>
        </div>
        <div className="flex items-center flex-col gap-3">
          <h1 className="max-w-sm md:max-w-xl lg:max-w-3xl  text-5xl md:text-6xl lg:text-7xl font-semibold font-serif">
            Building Exceptional User Experiences
          </h1>
          <p className="max-w-[25rem] lg:max-w-[29rem] min-[1400px]:max-w-[38rem] text-white/50 lg:text-lg min-[1400px]:text-2xl">
            I specialize in transforming designs into functioonal,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        <div className="flex gap-4  flex-col md:flex-row ">
          <button
            className={`flex items-center gap-2  text-xl md:text-2xl lg:text-3xl border-2 border-white/25 font-semibold ${btnStyle} group hover:border-white duration-300`}
          >
            Explore My Work
            <ArrowDown className=" h-3 md:h-4 lg:h-6 w-auto group-hover:-rotate-90 transition-transform duration-500" />
          </button>
          <button
            className={` text-xl md:text-2xl lg:text-3xl bg-emerald-500 text-black font-semibold ${btnStyle} hover:bg-transparent hover:text-emerald-300 border-2 border-emerald-500 duration-200`}
          >
            <span className="mr-2">👋</span>
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
