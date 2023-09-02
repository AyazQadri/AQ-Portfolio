import { content } from "../Content";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [active, setActive] = useState(0);
  const [projects, setProjects] = useState([]);
  const { Projects, workNavs, workImages } = content;
  const [slidesToShow, setSlidesToShow] = useState(3); // Default value for larger screens

  useEffect(() => {
    if (tab.name === "all") {
      setProjects(Projects?.project_content);
    } else {
      const selectedTabProjects = Projects?.project_content?.filter((item) => {
        return item?.category.toLowerCase() == tab?.name;
      });
      setProjects(selectedTabProjects);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const updateSlidesToShow = () => {
    if (window.innerWidth < 1024 && window.innerWidth > 640) {
      setSlidesToShow(2);
    } else  if (window.innerWidth < 640 ) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow(); // Call the function on initial load
    return () => {
      window.removeEventListener("resize", updateSlidesToShow); // Cleanup the event listener
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="flex justify-center gap-5 flex-wrap"
          >
            {workNavs.map((workNav, index) => {
              return (
                <button
                  onClick={(e) => activeTab(e, index)}
                  className={`${
                    active === index
                      ? "font-Poppins bg-dark_primary text-white px-4 py-2 rounded-md"
                      : "font-Poppins px-4 py-2 rounded-md bg-white"
                  }`}
                  key={index}
                >
                  {workNav}
                </button>
              );
            })}
          </motion.div>
        </div>
        <div className="mt-5 w-full flex flex-wrap justify-evenly">
          <div className="w-full">
            <Slider
              {...settings}
              swipeToSlide
              slidesToShow={slidesToShow} 
            >
              {projects.map((pro) => (
                <div key={pro.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 my-8">
                  <article className="bg-white p-5 rounded-lg shadow-md transition-transform hover:scale-105 mx-2">
                    <div className="rounded-t-lg overflow-hidden">
                      <img src={pro.image} alt={pro.title} className="w-full" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{pro.title}</h3>
                      <p className="mt-2 text-gray-600">{pro.description}</p>
                      <p className="mt-2 text-gray-600">{pro.technologies}</p>
                    </div>
                  </article>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-20 flex flex-wrap justify-evenly"
        >
          <div>
            <h3>
              so let's talk about <br /> <span>your next projects</span>
            </h3>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="self-end mb-2 btn bg-dark_primary text-white mt-10 cursor-pointer"
          >
            <a href="#contact">Contact Me</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
