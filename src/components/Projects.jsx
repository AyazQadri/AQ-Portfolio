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
    dots: true,
    arrows: true, 
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
            <Slider {...settings} swipeToSlide slidesToShow={slidesToShow}>
              {projects?.map((item) => (
                <div key={item.id} className="flex justify-center mb-4">
                  <div
                    className="card mx-3 mt-6 flex flex-col w-90 rounded-xl bg-bg_light_primary border-2 border-slate-200 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                    style={{ height: "600px" }}
                  >
                    <a href="#!">
                      <div className="w-full h-64 relative overflow-hidden block  px-5 py-3 rounded-2xl">
                        <img
                          className="w-full h-full border-2 border-slate-200 p-2 object-cover rounded-2xl transition-transform transform scale-100 group-hover:scale-106"
                          src={item?.image}
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="p-6 flex-1 justify-center align-middle">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-center">
                        {item?.title}
                      </h5>
                      <p className="mb-4 text-base leading-7 ">
                        {item?.description}
                      </p>
                    </div>
                  </div>
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
