import React from "react";
import { content } from "../Content";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/styles.css";

const Skills = () => {
  const settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 6,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const { skills } = content;
  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <div className="container px-5 py-14 mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl title"
          data-aos="fade-down"
        >
          {skills.title}
        </h2>
        <h4
          className="text-lg sm:text-xl md:text-2xl subtitle mt-2"
          data-aos="fade-down"
        >
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="w-full">
            <Slider {...settings}>
              {skills.skills_content.map((skill, i) => (
                <div
                  className="mylang gap-2"
                  title={skill.lang_name}
                  key={skill.id}
                >
                  <div className="lang-info">
                    <div className="lang-img bg-gray-300 rounded-full w-16 h-16 flex justify-center items-center">
                      <img src={skill.icon} alt="" className="rounded-full" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl mt-2">
                      {skill.lang_name}
                    </h3>
                    <p
                      className={`${skill.exp_level} text-sm sm:text-base md:text-lg mb-2 btn bg-dark_primary text-white sm:mt-0 cursor-pointer`}
                      // className="mb-2 btn bg-dark_primary text-white sm:mt-0 mt-10 cursor-pointer"
                    >
                      {skill.exp_level}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
