import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import grain from "@/assets/images/grain.jpg";

import Check from "@/assets/icons/check-circle.svg";
import TiltedArrow from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2024",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2024",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2024",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    image: aiStartupLandingPage,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative container flex items-center justify-center flex-col gap-14 pt-28 md:pt-42 overflow-x-clip"
    >
      <div className="flex items-center flex-col gap-1 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 uppercase my-3 font-medium  text-xs lg:text-xl tracking-wide font-sans ">
          Real-world results
        </span>
        <h2 className="font-bold font-serif  text-5xl md:text-6xl lg:text-7xl">
          Featured Projects
        </h2>
        <p className=" max-w-[25rem] lg:max-w-[32rem]  text-sm md:text-base lg:text-2xl text-white/50 ">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {portfolioProjects.map((project, projectIndex) => (
          <div
            key={project.title}
            className="sticky flex items-center justify-center  flex-col md:flex-row border border-white/50 rounded-2xl  px-6 md:pl-24 pt-6 overflow-hidden bg-gray-800"
            style={{ top: `calc(${10 * projectIndex + 30}px)` }}
          >
            <div
              className="absolute inset-0 opacity-5 pointer-events-none -z-20"
              style={{ backgroundImage: `url(${grain.src})` }}
            ></div>
            <div className="min-w-[50%] flex flex-col gap-1 lg:py-11">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 uppercase text-xs lg:text-xl font-bold tracking-wider">
                {project.company} • {project.year}
              </span>
              <span className=" text-2xl lg:max-w-md lg:text-5xl font-bold font-serif">
                {project.title}
              </span>
              <hr className=" my-2 lg:my-4 border-white/50" />
              <ul className="text-white/50">
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2  my-2.5  text-xs md:text-sm lg:text-2xl"
                  >
                    <Check className="h-5 lg:h-7 w-auto" />
                    {result.title}
                  </li>
                ))}
              </ul>
              <button className="md:max-w-44 lg:max-w-[17rem] flex items-center justify-center gap-2 font-bold rounded-md lg:rounded-xl py-2 my-5  text-lg lg:text-3xl bg-white hover:bg-gray-300 transition-all text-black group active:scale-95 ">
                Visit Live Site{" "}
                <TiltedArrow className=" h-4 lg:h-6 w-auto group-hover:rotate-45 transition-transform" />
              </button>
            </div>
            <img
              className=" h-48 md:h-80 lg:h-96 w-auto relative  right-0 md:-right-16 lg:-right-20  -bottom-4 md:-bottom-14 lg:-bottom-14"
              src={project.image.src}
              alt={project.company}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects