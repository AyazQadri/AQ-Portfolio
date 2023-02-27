// import images
import Hero_person from "./assets/images/Hero/person.png";

import atomicStructureLogo from "./assets/images/Skills/sketch.png";
import reactLogo from "./assets/images/Skills/react.png";
import laravelLogo from './assets/images/Skills/laravellogo.png';
import nextLogo from './assets/images/Skills/next-logo.png';
import sourcetreeLogo from './assets/images/Skills/sourcetreelogo.png';
import githubLogo from './assets/images/Skills/githublogo.png';
import gitLogo from './assets/images/Skills/gitlogo.png';
import bitbucketLogo from './assets/images/Skills/bitbucketlogo.png';
import materialuiLogo from './assets/images/Skills/materiallogo.png';
import reduxLogo from './assets/images/Skills/reduxlogo.png';
import tailwindcssLogo from './assets/images/Skills/tailwindlogo.png';
import seoLogo from './assets/images/Skills/seoLogo.png';
import firebaseLogo from './assets/images/Skills/firebaseLogo.png';

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaWhatsapp } from 'react-icons/fa';
import { TbSmartHome } from "react-icons/tb";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web & Application",
    subtitle: "Developer",
    firstName: "AYAZ",
    LastName: "QADRI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web & Application development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React JS",
        para: "JavaScript library for building user interfaces.",
        logo: reactLogo,
      },
      {
        name: "React Native",
        para: "Build native mobile apps using React.",
        logo: reactLogo,
      },
      {
        name: "Next JS",
        para: "React framework for production-ready web applications.",
        logo: nextLogo,
      },
      {
        name: "Laravel",
        para: "PHP web application framework for artisans.",
        logo: laravelLogo,
      },
      {
        name: "Redux",
        para: "A predictable state container for JavaScript apps.",
        logo: reduxLogo,
      },
      {
        name: "Redux toolkit",
        para: "The official, opinionated, batteries-included toolset for efficient Redux development.",
        logo: reduxLogo,
      },
      {
        name: "Tailwind CSS",
        para: "A utility-first CSS framework for rapid UI development.",
        logo: tailwindcssLogo,
      },
      {
        name: "Material UI",
        para: "React components for faster and easier web development.",
        logo: materialuiLogo,
      },
      {
        name: "Firebase",
        para: "Cloud Backend Solution and Chat Support (Realtime & Firestore)",
        logo: firebaseLogo,
      },
      {
        name: "Search Engine Optimization",
        para: "Improve Online Visibility and Rankings.",
        logo: seoLogo,
      },
      {
        name: "Git",
        para: "Distributed version control system for software development.",
        logo: gitLogo,
      },
      {
        name: "GitHub",
        para: "A web-based hosting service for version control and collaboration using Git.",
        logo: githubLogo,
      },
      {
        name: "Bitbucket",
        para: "A web-based version control repository hosting service for Git and Mercurial.",
        logo: bitbucketLogo,
      },
      {
        name: "Sourcetree",
        para: "A free Git and Mercurial desktop client for developers.",
        logo: sourcetreeLogo,
      },
      {
        name: "Atomic Structure",
        para: "A methodology for designing and developing user interfaces based on independent, reusable components.",
        logo: atomicStructureLogo,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development & Search Engine Optimization (SEO)",
        para: "As a Web Developer, I provide custom web development services that cater to the specific needs of businesses and individuals. My services include designing and developing custom websites, e-commerce websites, content management systems, responsive websites, web applications, and providing website maintenance and support. Additionally, I offer website hosting, domain registration, search engine optimization, and user experience and user interface design services to help clients establish and maintain a strong online presence.",
        logo: services_logo1,
      },
      {
        title: "Application Development",
        para: "As an application developer, I offer custom application development services that cater to the unique needs of businesses and individuals. My services include designing and developing custom applications, including mobile devices. I also provide application maintenance and support, application hosting, cross-platform application development, application security and data protection, integration with third-party services and APIs, and user experience and user interface design services to ensure that clients receive customized solutions that meet their specific requirements.",
        logo: services_logo2,
      },
      {
        title: "Backend (Laravel)",
        para: "As a backend developer, I provide efficient and customized backend development services using Laravel framework, which include RESTful API development, database design and management, integration with third-party services and APIs, backend support and maintenance. Additionally, I offer quality data management and migration, performance optimization and scalability, security and data protection, code optimization and refactoring, and testing and quality assurance services. With my expertise in Laravel, I can deliver efficient and reliable backend solutions for web and application development projects.",
        logo: services_logo3,
      },
    ],
  },
  workNavs: [
    "All", "Web", "App",
    //  "Design"
  ],
  workImages: [
    {
      id: 1,
      img: project1,
      name: "project 1",
      category: "web"
    },
    {
      id: 2,
      img: project2,
      name: "project 2",
      category: "web"
    },
    {
      id: 3,
      img: project3,
      name: "project 3",
      category: "web"
    },
    {
      id: 4,
      img: project1,
      name: "project 4",
      category: "app"
    },
    {
      id: 5,
      img: project2,
      name: "project 5",
      category: 'app'
    },
    {
      id: 6,
      img: project3,
      name: "project 6",
      category: "design"
    }
  ],
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "HP Appen",
        images: [project1, project2, project3],
        category: "web"
      },
      {
        title: "CoCircle",
        images: [project1, project2, project3],
        category: "web"
      },
      {
        title: "CoCircle App",
        images: [project1, project2, project3],
        category: "app"
      },
      {
        title: "Sthlmtechpartner",
        images: [project1, project2, project3],
        category: "web"
      },
      {
        title: "Sapid",
        images: [project1, project2, project3],
        category: "app"
      },
      {
        title: "Homeats Admin Panel",
        images: [project1, project2, project3],
        category: "web"
      },
      {
        title: "Sanai Parents App",
        images: [project1, project2, project3],
        category: "app"
      },
      {
        title: "Kamaee",
        images: [project1, project2, project3],
        category: "web"
      },
      {
        title: "Kamaee App",
        images: [project1, project2, project3],
        category: "app"
      },
      {
        title: "Kamaee Admin Panel",
        images: [project1, project2, project3],
        category: "web"
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "With years of experience in web and application development, I am committed to delivering high-quality solutions that meet the unique needs of my clients. My expertise includes custom website and application development, backend development using Laravel, and cloud-based backend solutions using Firebase. I also offer a range of services, including search engine optimization, user interface and user experience design, and maintenance and support. With a focus on reliability, efficiency, and customer satisfaction, I am dedicated to providing customized solutions that meet the specific requirements of each project.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ayazqadri111@gmail.com",
        icon: GrMail,
        link: "mailto:ayazqadri111@gmail.com",
      },
      {
        text: "+92 310 0401601",
        icon: FaWhatsapp,
        link: "https://wa.me/+923100401601",
      },
      {
        text: "+92 307 0401601",
        icon: MdCall,
        link: "tel:+923070401601",
      },
      {
        text: "",
        icon: FaGithub,
        link: "https://github.com/AyazQadri/",
      },
      {
        text: "",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/ayaz-qadri-298128154/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
