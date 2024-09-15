import { motion } from "framer-motion";

import grain from "@/assets/images/grain.jpg";

import book from "@/assets/images/book-cover.png";
import map from "@/assets/images/map.png";
import avatar from "@/assets/images/memoji-smile.png";
import Star from "@/assets/icons/star.svg";

import { useRef } from "react";

type SliderProps = {
  reverse: boolean;
};

const tools = [
  {
    icon: "fa-square-js",
    name: "Javascript",
  },
  {
    icon: "fa-html5",
    name: "HTML",
  },
  {
    icon: "fa-css3-alt",
    name: "CSS3",
  },
  {
    icon: "fa-react",
    name: "React",
  },
  {
    icon: "fa-chrome",
    name: "Chrome",
  },
  {
    icon: "fa-github",
    name: "Github",
  },
];

const hobbies = [
  {
    name: "Painting",
    emoji: "🎨",
    left: "0%",
    top: "0%",
  },
  {
    name: "Photography",
    emoji: "📷️",
    left: "55%",
    top: "0%",
  },
  {
    name: "Gaming",
    emoji: "🎮️",
    left: "10%",
    top: "35%",
  },
  {
    name: "Hiking",
    emoji: "👟",
    left: "32%",
    top: "43%",
  },
  {
    name: "Music",
    emoji: "🎧️",
    left: "80%",
    top: "40%",
  },
  {
    name: "Fitness",
    emoji: "🏋🏼",
    left: "0%",
    top: "70%",
  },
  {
    name: "Reading",
    emoji: "📚️",
    left: "50%",
    top: "71%",
  },
];

const CardHeader = ({ title, text }: { title: string; text: string }) => {
  return (
    <>
      <div className="flex flex-col gap-1.5 sm:pl-2">
        <span className="flex items-center gap-3 text-3xl font-serif font-bold">
          <Star className="size-10 text-emerald-400" />
          {title}
        </span>
        <p className="text-white/75 md:max-w-[270px]">{text}</p>
      </div>
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{ backgroundImage: `url(${grain.src})` }}
      ></div>
    </>
  );
};

const Slider = ({ reverse }: SliderProps) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ translateX: reverse ? "0%" : "-50%" }}
        animate={{ translateX: reverse ? "-50%" : "0" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="flex gap-4"
      >
        {(reverse ? [...tools, ...tools].reverse() : [...tools, ...tools]).map(
          (tool, index) => (
            <div
              key={tool.name + index}
              className="relative flex items-center gap-3 border border-white/20 rounded-md px-2 py-1"
            >
              <i
                className={`fa-brands ${tool.icon} text-4xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400`}
              ></i>
              <span>{tool.name}</span>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardStyles =
    "relative border border-white/25 rounded-2xl overflow-hidden";
  return (
    <section
      id="about"
      className="container flex items-center flex-col gap-10 sm:pt-28 md:pt-42 overflow-hidden"
    >
      <div className="flex items-center text-center flex-col gap-3">
        <span className="font-semibold uppercase sm:text-xs md:text-sm lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400">
          About me
        </span>
        <h4 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-wide whitespace-nowrap">
          A Glimpse Into My World
        </h4>
        <p className="sm:max-w-[22rem] lg:max-w-[29rem] text-white/50 sm:text-xs md:text-sm lg:text-2xl">
          Learn more about who I am, what I do and what inspires me.
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="sm:h-[37rem] md:h-[18.2rem] sm:max-w-96 md:max-w-5xl sm:grid sm:grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-7">
          <div
            className={`sm:max-h-72 md:col-span-2 flex flex-col items-center px-5 pt-3 ${cardStyles}`}
          >
            <CardHeader
              text="Explore the books shaping my perspectives."
              title="My Reads"
            />
            <img
              className="sm:w-40 md:w-36 relative sm:-bottom-1 md:-bottom-5 rotate-3"
              src={book.src}
              alt="Atomic Habits - James Clear"
            />
          </div>
          <div
            className={`md:col-span-4 flex flex-col gap-10 px-5 pt-3 ${cardStyles}`}
          >
            <CardHeader
              text="Explore the technologies and tools I use to craft exceptional digital experiences."
              title="My Toolbox"
            />
            <div className="flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] mb-1">
              <Slider reverse={false} />
              <Slider reverse={true} />
            </div>
          </div>
        </div>
        <div className="sm:h-[37rem] md:h-[18.2rem] sm:max-w-96 md:max-w-5xl sm:grid sm:grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-7">
          <div className={`md:col-span-4 flex flex-col gap-10 ${cardStyles}`}>
            <div className=" px-5 pt-3">
              <CardHeader
                text="Explore my interests and hobbies beyond the digital realm."
                title="Beyond the Code"
              />
            </div>
            <div
              ref={containerRef}
              className="relative h-full rounded-2xl flex sm:mx-5 sm:mb-5"
            >
              {hobbies.map((hobbie) => (
                <motion.div
                  drag
                  dragConstraints={containerRef}
                  className="absolute flex gap-2 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-2xl text-black font-semibold sm:px-1.5 sm:py-1.5 md:px-2 lg:px-6 md:py-2 lg:py-1.5 sm:text-xs lg:text-lg cursor-move"
                  style={{ left: hobbie.left, top: hobbie.top }}
                  key={hobbie.name}
                >
                  <span>{hobbie.name}</span>
                  <span className="scale-90">{hobbie.emoji}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div
            className={`sm:max-h-72 md:col-span-2 flex justify-center items-center bg-center bg-cover bg-no-repeat ${cardStyles}`}
            style={{ backgroundImage: `url(${map.src})` }}
          >
            <img
              className="sm:w-24 md:w-[7.5rem] z-[1]"
              src={avatar.src}
              alt="avatar"
            />
            <div className="absolute sm:w-24 md:w-28 sm:h-24 md:h-28 border-2 border-gray-600/50 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
