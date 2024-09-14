import Head from "next/head";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Tape } from "./sections/Tape";
import { Testimonials } from "./sections/Testimonials";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Projects />
      <Tape/>
      <Testimonials/>
      <About/>
      <Contact />
      <Footer/>
    </>
  );
}
