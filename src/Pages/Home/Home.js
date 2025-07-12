import React from "react";
import About from "./About";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Services from "./Services";
import SkillsProgress from "./SkillsProgress";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <SkillsProgress></SkillsProgress>
      <Projects></Projects>
      <BlogSection></BlogSection>
      <Testimonials></Testimonials>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
