import { motion } from "framer-motion";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grain from "@/assets/images/grain.jpg";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="flex items-center flex-col gap-2 text-center mb-3">
        <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 font-semibold">
          happy clients
        </span>
        <h3 className="font-serif  text-2xl md:text-5xl font-bold">
          What Clients Say about Me
        </h3>
        <p className="text-white/50  text-sm  max-w-[21rem] lg:text-2xl lg:max-w-[29rem]">
          Don&apos;t just take my word for it. See what my clients have to say
          about my work.
        </p>
      </div>
      <div className=" max-w-3xl md:max-w-6xl mx-auto flex flex-1 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ translateX: "-50%" }}
          animate={{ translateX: 0 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 120 }}
          className="flex gap-20 -translate-x-1/2 pr-20 py-3 lg:py-4"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              className=" min-w-96 md:min-w-[27rem] lg:min-w-[34rem] relative flex  flex-col gap-4 border border-white/50 hover:border-white/75 rounded-3xl overflow-hidden bg-gray-800 z-0 px-6 py-5 hover:-rotate-3 transition-transform transition-colors"
              key={testimonial.name + index}
            >
              <div
                className="absolute inset-0 opacity-5 -z-10 pointer-events-none"
                style={{ backgroundImage: `url(${grain.src})` }}
              ></div>
              <div className="flex items-center gap-2">
                <img
                  src={testimonial.avatar.src}
                  alt={testimonial.name}
                  className="h-16 w-auto p-0.5 bg-gray-700 rounded-full"
                />
                <div>
                  <span className="block lg:text-3xl">{testimonial.name}</span>
                  <span className=" text-xs lg:text-xl text-white/50">
                    {testimonial.position}
                  </span>
                </div>
              </div>
              <p className="lg:text-2xl">{testimonial.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonials