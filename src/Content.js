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
// import two from './assets/images/Hero/8.jpeg';

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaWhatsapp } from 'react-icons/fa';
import { TbSmartHome } from "react-icons/tb";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
// import one from './assets/images/Hero/1.jpeg'

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
        id: 1,
        lang_name: 'React Native',
        icon: "https://img.icons8.com/color/48/null/react-native.png",
        exp_level: 'Experienced'
      },
      {
        id: 2,
        lang_name: 'React JS',
        icon: "https://img.icons8.com/color/48/null/react-native.png",
        exp_level: 'Experienced'
      },
      {
        id: 3,
        lang_name: 'Typescript',
        icon: "https://avatars.githubusercontent.com/u/46634674?v=4&s=160",
        exp_level: 'Experienced'
      },
      {
        id: 4,
        lang_name: 'Redux',
        icon: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png",
        exp_level: 'Experienced'
      },
      {
        id: 5,
        lang_name: 'JavaScript',
        icon: "https://img.icons8.com/color/48/null/javascript--v1.png",
        exp_level: 'Experienced'
      },
      {
        id: 6,
        lang_name: 'Git',
        icon: "https://img.icons8.com/color/48/null/git.png",
        exp_level: 'Experienced'
      },
      {
        id: 7,
        lang_name: 'CI/CD',
        icon: "https://static-00.iconduck.com/assets.00/cicd-icon-510x512-hsx603wg.png",
        exp_level: 'Experienced'
      },
      {
        id: 8,
        lang_name: 'Jira',
        icon: "https://wac-cdn.atlassian.com/dam/jcr:e0cedee5-a180-40ad-b7c3-a66d6e60f483/jira-app-adg3.svg?cdnVersion=1124",
        exp_level: 'Experienced'
      },
      {
        id: 9,
        lang_name: 'Laravel',
        icon: laravelLogo,
        exp_level: 'Intermediate'
      },
      {
        id: 10, 
        lang_name: "Firebase",
        icon: firebaseLogo,
        exp_level: "Intermediate"
      },
      {
        id: 11, 
        lang_name: "Tailwind CSS",
        icon: tailwindcssLogo,
        exp_level: "Experienced"
      },
      {
        id: 12, 
        lang_name: "Material UI",
        icon: materialuiLogo,
        exp_level: "Experienced"
      },
      {
        id: 13, 
        lang_name: "Atomic Structure",
        icon: atomicStructureLogo,
        exp_level: "Experienced"
      },
      {
        id: 14,
        lang_name: "Next JS",
        icon: nextLogo,
        exp_level: "Intermediate"
      },
    ],
    // [
    //   {
    //     name: "React JS",
    //     para: "JavaScript library for building user interfaces.",
    //     logo: reactLogo,
    //   },
    //   {
    //     name: "React Native",
    //     para: "Build native mobile apps using React.",
    //     logo: reactLogo,
    //   },
    //   {
    //     name: "Next JS",
    //     para: "React framework for production-ready web applications.",
    //     logo: nextLogo,
    //   },
    //   {
    //     name: "Laravel",
    //     para: "PHP web application framework for artisans.",
    //     logo: laravelLogo,
    //   },
    //   {
    //     name: "Redux",
    //     para: "A predictable state container for JavaScript apps.",
    //     logo: reduxLogo,
    //   },
    //   {
    //     name: "Redux toolkit",
    //     para: "The official, opinionated, batteries-included toolset for efficient Redux development.",
    //     logo: reduxLogo,
    //   },
    //   {
    //     name: "Tailwind CSS",
    //     para: "A utility-first CSS framework for rapid UI development.",
    //     logo: tailwindcssLogo,
    //   },
    //   {
    //     name: "Material UI",
    //     para: "React components for faster and easier web development.",
    //     logo: materialuiLogo,
    //   },
    //   {
    //     name: "Firebase",
    //     para: "Cloud Backend Solution and Chat Support (Realtime & Firestore)",
    //     logo: firebaseLogo,
    //   },
    //   {
    //     name: "Search Engine Optimization",
    //     para: "Improve Online Visibility and Rankings.",
    //     logo: seoLogo,
    //   },
    //   {
    //     name: "Git",
    //     para: "Distributed version control system for software development.",
    //     logo: gitLogo,
    //   },
    //   {
    //     name: "GitHub",
    //     para: "A web-based hosting service for version control and collaboration using Git.",
    //     logo: githubLogo,
    //   },
    //   {
    //     name: "Bitbucket",
    //     para: "A web-based version control repository hosting service for Git and Mercurial.",
    //     logo: bitbucketLogo,
    //   },
    //   {
    //     name: "Sourcetree",
    //     para: "A free Git and Mercurial desktop client for developers.",
    //     logo: sourcetreeLogo,
    //   },
    //   {
    //     name: "Atomic Structure",
    //     para: "A methodology for designing and developing user interfaces based on independent, reusable components.",
    //     logo: atomicStructureLogo,
    //   },
    // ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Application Development",
        para: "I specialize in custom application development, including mobile apps. I also provide maintenance, hosting, security, and integration services, ensuring tailored solutions for businesses and individuals.",
        logo: services_logo2,
      },
      {
        title: "Web Development & Search Engine Optimization (SEO)",
        para: "As a Web Developer, I create custom websites, e-commerce platforms, and web applications. I offer hosting, domain registration, SEO, and UI/UX design services, helping clients establish a strong online presence.",
        logo: services_logo1,
      },
      {
        title: "Backend",
        para: "I offer efficient Laravel-based backend development & Firebase, including RESTful APIs, database management, and third-party integrations. Services include data management, performance optimization, security, code refactoring, and testing for reliable web and app backends.",
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
        image: project1,
        category: "web",
        description: 'This is the description of my projects, This is the description of my projects, This is the description of my projects,'
      },
      {
        title: "CoCircle",
        image: project2,
        category: "web",
        description: 'This is the description of my projects, This is the description of my projects, This is the description of my projects'
      },
      {
        title: "CoCircle App",
        image: project3,
        category: "app",
        description: 'This is the description of my projects, This is the description of my projectsm, This is the description of my projects'
      },
      {
        title: "Sthlmtechpartner",
        image: project1,
        category: "web",
        description: 'This is the description of my projects, This is the description of my projects, This is the description of my projects'
      },
      {
        title: "Sapid",
        image: project2,
        category: "app",
        description: 'This is the description of my projects, This is the description of my projects, This is the description of my projects'
      },
      {
        title: "Homeats Admin Panel",
        image: project1,
        category: "web",
        description: 'This is the description of my projects, This is the description of my projects, This is the description of my projects'
      },
      {
        title: "Sanai Parents App",
        image: project2,
        category: "app",
        description: 'This is the description of my projects, This is the description of my projects, This is the description of my projects'
      },
      {
        title: "Kamaee",
        image: project2,
        category: "web",
        description: 'This is the description of my projects, This is the description of my projects, This is the description of my projects'
      },
      {
        title: "Kamaee App",
        image: project2,
        category: "app",
        description: 'This is the description of my projects, This is the description of my projects, This is the description of my projects'
      },
      {
        title: "Kamaee Admin Panel",
        image: project2,
        category: "web",
        description: 'This is the description of my projects, This is the description of my projects, This is the description of my projects'
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
    para: "With years of experience in Web & Application development, I specialize in delivering tailored solutions that match my clients' distinct needs. My expertise covers custom website & app development, and cloud-based solutions using Firebase. I offer additional services such as SEO, UI/UX design, and ongoing support. My priority is delivering dependable, efficient, and client-centric solutions that precisely align with project requirements.",
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
        text: "Github",
        icon: FaGithub,
        link: "https://github.com/AyazQadri/",
      },
      {
        text: "Linkedin",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/ayaz-qadri-298128154/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
