import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {FiGithub, FiEye} from "react-icons/fi"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion } from 'framer-motion';

import { Pagination } from "swiper";
import { useEffect, useState } from "react";

const Projects = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [active, setActive] = useState(0);
  const [projects, setProjects] = useState([])
  const { Projects, workNavs, workImages } = content;

  useEffect(() => {
    if (tab.name === "all") {
      setProjects(Projects?.project_content)
    } else {
      const selectedTabProjects = Projects?.project_content?.filter((item) => {
        return item?.category.toLowerCase() == tab?.name
      })
      setProjects(selectedTabProjects)
    }
  }, [tab])
  
  const activeTab = (e,index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index)
  }


  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col ">
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
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="flex justify-center gap-5 flex-wrap"
      >
        {workNavs.map((workNav ,index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "font-Poppins bg-dark_primary text-white px-4 py-2 rounded-md" : "font-Poppins px-4 py-2 rounded-md bg-white"}`}
              key={index}>{workNav}</button>
          )
        })}
      </motion.div>
        </div>
        <div className="">
        <motion.div
        initial={{x: [-50] ,opacity: 0}}
        whileInView={{ x: [-250,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, x: -50}}
        className="mt-5 w-full flex flex-wrap justify-evenly"
      >
        {
          projects && projects.length > 0 && projects?.map((item, i) => {
            return (
            <div key={i} className="flex flex-col mx-2 my-2 justify-center items-center">
               <div className="font-Poppins p-3 text-lg">
                {item.title}
              </div>
              <Swiper
              pagination={{
                clickable: true,
              }}
              data-aos="fade-left"
              spaceBetween={10}
              modules={[Pagination]}
              className="rounded-3xl pb-14 max-w-xs drop-shadow-primary self-start"
              >
                {item.images.map((image, index) => (
                <SwiperSlide
                key={index}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                >
                  <div key={index}>
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
                ))}
              </Swiper>
            </div>
            )
          })
        }
        {/* {works.map((work) => {
          return (
            <div className="relative max-w-sm mx-4 my-4"
             key={work.id}
            >
              <img src={work.img} alt="" className="object-cover h-full w-full" />
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                  
                <motion.a href='#'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiGithub />
                </motion.a>
                  
                <motion.a href='#'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiEye />
                </motion.a>
              </motion.div>
            </div>
          )
        })} */}
      </motion.div>
        </div>
        {/* <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        <motion.div
        initial={{x: 0 ,opacity: 0}}
        whileInView={{ x: [250,0], opacity: 1 }}
        transition={{duration: 1}}
        className="p-20 flex flex-wrap justify-evenly"
      >
      <div>
          <h3>so let's talk about <br /> <span>your next projects</span></h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{duration: 0.3}}
          className="self-end mb-2 btn bg-dark_primary text-white sm:mt-0 mt-10 cursor-pointer">
          <a href="#contact"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default Projects;
