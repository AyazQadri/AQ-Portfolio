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
  const [slidesToShow, setSlidesToShow] = useState(3);

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
    } else if (window.innerWidth < 640) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
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

        {/* 
        <div className="mt-5 w-full flex flex-wrap justify-evenly">
          <div className="w-full">
            <Slider {...settings} swipeToSlide slidesToShow={slidesToShow}>
              {projects.map((pro) => (
                <div
                  key={pro.id}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <article className="bg-white p-5 rounded-lg shadow-md transition-transform hover:scale-105 mx-2">
                    <div className="rounded-t-lg overflow-hidden h-72">
                      <img src={pro.image} alt={pro.title} className="w-full h-full" />
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
        </div> */}

        {/* <div className="mt-5 w-full flex flex-wrap justify-evenly">
          <div className="w-full">
            <Slider {...settings} swipeToSlide slidesToShow={slidesToShow}>
              {projects?.map((item) => {
                return (
                  <div className="grid-cols-1 sm:grid md:grid-cols-2 ">
                    <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                      <a href="#!">
                        <img
                          className="rounded-t-lg"
                          src={item?.image}
                          alt=""
                        />
                      </a>
                      <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          {item?.title}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div> */}

<div className="mt-5 w-full flex flex-wrap justify-evenly">
  <div className="w-full">
    <Slider {...settings} swipeToSlide slidesToShow={slidesToShow}>
      {projects?.map((item) => {
        return (
          <div className="grid-cols-1 sm:grid md:grid-cols-2 ">
            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
              <a href="#!">
                <div
                  className="overflow-hidden block relative"
                  // style={{
                  //   justifyContent: 'center',
                  //   alignItems: 'center'
                  // }}
                >
                  <img
                    className="w-full inline-block border rounded-2xl p-15 transition-transform h-280 cursor-pointer transform scale-100 group-hover:scale-106 md:p-10"
                    src={item?.image}
                    alt=""
                  />
                </div>
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {item?.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {item?.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
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
