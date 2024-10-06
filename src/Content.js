// import images
import Hero_person from "./assets/images/Hero/person.png";

import atomicStructureLogo from "./assets/images/Skills/sketch.png";
import reactLogo from "./assets/images/Skills/react.png";
import laravelLogo from "./assets/images/Skills/laravellogo.png";
import nextLogo from "./assets/images/Skills/next-logo.png";
import sourcetreeLogo from "./assets/images/Skills/sourcetreelogo.png";
import githubLogo from "./assets/images/Skills/githublogo.png";
import gitLogo from "./assets/images/Skills/gitlogo.png";
import bitbucketLogo from "./assets/images/Skills/bitbucketlogo.png";
import materialuiLogo from "./assets/images/Skills/materiallogo.png";
import reduxLogo from "./assets/images/Skills/reduxlogo.png";
import tailwindcssLogo from "./assets/images/Skills/tailwindlogo.png";
import seoLogo from "./assets/images/Skills/seoLogo.png";
import firebaseLogo from "./assets/images/Skills/firebaseLogo.png";
import CICD from "./assets/images/Skills/cicd.png";

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

import Hireme_person from "./assets/images/Hireme/rightpoint.webp";
// import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";
import Hireme_person2 from "./assets/images/Hireme/Men Pointing Left.png";
// import two from './assets/images/Hero/8.jpeg';

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

// import applications images
import Wyzepay from "./assets/images/Projects/wyzepay.jpg";
import BetYouCan from "./assets/images/Projects/alarmclock.jpg";
import CCApp from "./assets/images/Projects/CoCircle.png";
import KamaeeApp from "./assets/images/Projects/kamaeeapp.jpg";
import MoodApp from "./assets/images/Projects/mood.jpg";
import SanaiParents from "./assets/images/Projects/sanaiparents.jpg";
import SanaiTeacher from "./assets/images/Projects/sanaiteacher.jpg";
import Ahlsell from "./assets/images/Projects/ahlsel.jpg";
import Dometic from "./assets/images/Projects/Dometic.jpg";
import Trusted from "./assets/images/Projects/trusted.jpg"
import Vassla from "./assets/images/Projects/Vassla.png"
import KamaeeAdmin from "./assets/images/Projects/kamaeeAdmin.png"
import KamaeeLanding from './assets/images/Projects/kamaeeLanding.png'

// import websites images
import FemClinic from "./assets/images/Projects/femclinic.jpg";
import HpAppen from "./assets/images/Projects/hpAppen.jpg";
import Homeats from "./assets/images/Projects/homeats.jpg";
import CoCircle from "./assets/images/Projects/cocircle.jpg";
import Sapid from "./assets/images/Projects/sapid.jpg";
import Sthlm from "./assets/images/Projects/sthlm.jpg";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome
    },
    {
      link: "#skills",
      icon: BiUser
    },
    {
      link: "#services",
      icon: RiServiceLine
    },
    {
      link: "#projects",
      icon: RiProjectorLine
    },
    {
      link: "#hireme",
      icon: RiServiceLine
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar
    }
  ],
  hero: {
    title: "Full Stack Web & Application",
    subtitle: "Developer",
    firstName: "AYAZ",
    LastName: "QADRI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Years of Experinse in Web & Application development"
      },
      {
        count: "50+",
        text: "Projects Worked in my career"
      }
    ]
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        id: 1,
        lang_name: "React Native",
        icon: "https://img.icons8.com/color/48/null/react-native.png",
        exp_level: "Experienced"
      },
      {
        id: 2,
        lang_name: "React JS",
        icon: "https://img.icons8.com/color/48/null/react-native.png",
        exp_level: "Experienced"
      },
      {
        id: 3,
        lang_name: "Next JS",
        icon: nextLogo,
        exp_level: "Experienced"
      },
      {
        id: 4,
        lang_name: "Node JS",
        icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        exp_level: "Experienced"
      },
      {
        id: 5,
        lang_name: "Laravel",
        icon: laravelLogo,
        exp_level: "Experienced"
      },
      {
        id: 6,
        lang_name: "Typescript",
        icon: "https://avatars.githubusercontent.com/u/46634674?v=4&s=160",
        exp_level: "Experienced"
      },
      {
        id: 7,
        lang_name: "Atomic Structure",
        icon: atomicStructureLogo,
        exp_level: "Experienced"
      },
      
      {
        id: 8,
        lang_name: "CI/CD",
        icon: CICD,
        exp_level: "Experienced"
      },
      {
        id: 9,
        lang_name: "Fastlane",
        icon: `https://www.svgrepo.com/show/376368/fastlane.svg`,
        exp_level: "Experienced"
      },
      {
        id: 10,
        lang_name: "Redux",
        icon: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png",
        exp_level: "Experienced"
      },
      {
        id: 11,
        lang_name: "Redux Saga",
        icon: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png",
        exp_level: "Experienced"
      },
      {
        id: 12,
        lang_name: "Redux thunk",
        icon: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png",
        exp_level: "Experienced"
      },
      {
        id: 13,
        lang_name: "JavaScript",
        icon: "https://img.icons8.com/color/48/null/javascript--v1.png",
        exp_level: "Experienced"
      },
      {
        id: 14,
        lang_name: "Jira",
        icon: "https://wac-cdn.atlassian.com/dam/jcr:e0cedee5-a180-40ad-b7c3-a66d6e60f483/jira-app-adg3.svg?cdnVersion=1124",
        exp_level: "Experienced"
      },
      {
        id: 15,
        lang_name: "Firebase",
        icon: firebaseLogo,
        exp_level: "Experienced"
      },
      {
        id: 16,
        lang_name: "SEO",
        icon: seoLogo,
        exp_level: "Experienced"
      },
      {
        id: 17,
        lang_name: "Git",
        icon: "https://img.icons8.com/color/48/null/git.png",
        exp_level: "Experienced"
      },
      {
        id: 18,
        lang_name: "Tailwind CSS",
        icon: tailwindcssLogo,
        exp_level: "Experienced"
      },
      {
        id: 19,
        lang_name: "Material UI",
        icon: materialuiLogo,
        exp_level: "Experienced"
      },
      {
        id: 20,
        lang_name: "Redux-toolkit",
        icon: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png",
        exp_level: "Experienced"
      },
     
    ],
    icon: MdArrowForward
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Application Development",
        para: "I specialize in developing custom mobile applications using React Native, delivering cross-platform solutions for both iOS and Android. My services cover the entire app lifecycle, from initial design to deployment, ensuring your app is user-friendly, performant, and scalable. I also provide ongoing maintenance, and seamless integration with APIs and third-party services, delivering tailored solutions for businesses and individuals. Whether starting a new project or enhancing an existing app, I ensure high-quality, efficient, and cost-effective results.",
        logo: services_logo2
      },
      {
        title: "Web Development & Search Engine Optimization (SEO)",
        para: "I create dynamic and responsive websites, e-commerce platforms, and web applications using React.js and Next.js. My services include designing modern user interfaces, optimizing user experiences, and implementing server-side rendering with Next.js for improved performance and SEO. Additionally, I offer secure hosting, domain registration, and advanced SEO strategies to ensure your site ranks well in search engines. By leveraging the latest in web development technologies, I help clients build and maintain a strong, effective online presence.",
        logo: services_logo1
      },
      {
        title: "Backend",
        para: "I offer efficient backend development using Node.js, NestJS, Laravel, and Firebase, providing scalable and secure solutions for web and mobile applications. My expertise includes developing RESTful APIs, managing databases with tools like Eloquent ORM, and integrating third-party services to enhance your application's functionality. I focus on optimizing performance, ensuring data security, and refactoring code for maintainability and reliability. Whether building a new backend or improving an existing one, my services ensure your systems are robust, efficient, and capable of supporting your business needs.",
        logo: services_logo3
      }
    ]
  },
  workNavs: [
    "All",
    "Web",
    "App"
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
      category: "app"
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
        id: 1,
        title: "WyzePay",
        image: Wyzepay,
        category: "app",
        description: `WyzePay is an innovative prepayment app revolutionizing the shopping experience, offering discounts and convenience 
        through payment integration, Google Maps, and more.`
      },
      {
        id: 2,
        title: "Ahlsell",
        image: Ahlsell,
        category: "app",
        description: `This application focuses on providing a seamless shopping experience for electronic products. The app encompasses a wide range of products, including el electrical, mechanical, and household items, among others. And the organization operating stores in Sweden, Finland, and Norway.`
      },
      {
        id: 3,
        title: "Dometic Climate",
        image: Dometic,
        category: "app",
        description: `This app serves as a bridge between various devices manufactured by Dometic. By leveraging Bluetooth technology, we enable seamless communication between the app and the devices. Users can conveniently managed and control various devices through the intuitive interface of the application.`
      },
      {
        id: 4,
        title: "Vassla",
        image: Vassla,
        category: "app",
        description: `The purpose of this vehicle rental app provides a user-friendly platform for renting cars. The rental fee is calculated based on the rental period. To ensure efficient fleet management, the admin can view the location of each vehicle in real-time on a map. The app also offers a secure payment gateway for easy transactions.`
      },
      {
        id: 5,
        title: "Trusted Messaging",
        image: Trusted,
        category: "app",
        description: `This application is designed for managing message and call campaigns. Users can set up campaigns and choose between message or call formats. For call campaigns, users have the option to include a voice message, while message campaigns allow for a text message to be provided.`
      },
      {
        id: 6,
        title: "Sapid",
        image: Sapid,
        category: "app",
        description: `Sapid simplifies contact sharing, generating unique IDs for users to share contact details and social media profiles via NFC or QR code. It streamlines personal and professional connections.`
      },
      {
        id: 7,
        title: "Kamaee App",
        image: KamaeeApp,
        category: "app",
        description: `I had the privilege of contributing to Project Kamaee, a pivotal initiative by SecureHops dedicated to empowering women to achieve their full potential in their chosen fields. This project aimed to provide women with the necessary tools, skills, and resources essential for their success.`
      },
      {
        id: 8,
        title: "CoCircle App",
        image: CCApp,
        category: "app",
        description: `The CoCircle application is tailored for clients to explore and book co-working spaces and event venues. It fosters collaboration within a diverse community of users, enhancing their experience.`
      },
      {
        id: 9,
        title: "Sanai Parents",
        image: SanaiParents,
        category: "app",
        description: `Sanai Parents is an essential tool for parents of Sanai School students, providing a straightforward way to track their child's academic progress and daily activities. It includes progress tracking, homework management, assignment submissions and timely announcements.`
      },
      {
        id: 10,
        title: "Sanai Teacher",
        image: SanaiTeacher,
        category: "app",
        description: `Sanai Teacher streamlines educators' daily tasks at Sanai School with features like attendance tracking, progress monitoring, homework management, assignment submissions, communication, and access to salary and result details.`
      },
      {
        id: 11,
        title: "BetYouCan",
        image: BetYouCan,
        category: "app",
        description: `The Bet You Can application is a unique and innovative platform designed to cultivate early rising habits through a captivating financial incentive mechanism rooted in self-betting. Users have the autonomy to set their preferred wake-up times and designate specific days of the week for the challenge.`
      },
      {
        id: 12,
        title: "Mood",
        image: MoodApp,
        category: "app",
        description: `Mood Social gives you a full overview of things to do in your city. Find exciting activities, places and people based on what you ar e in the Mood for and experience them together.`
      },
      {
        id: 1,
        title: "HP Appen",
        image: HpAppen,
        category: "web",
        description: `The HP app is committed to helping students excel in university examinations and attain their educational dreams.
        It provides a platform for students to test their skills with past exam papers, offering valuable preparation resources.`,
      },
      {
        id: 2,
        title: "CoCircle",
        image: CoCircle,
        category: "web",
        description: `CoCircle admin panel serves as the central hub for efficiently managing co-working spaces and event venues.
        It boasts five distinct roles, enabling administrators to oversee bookings and streamline office operations seamlessly.`,
      },
     
      {
        id: 4,
        title: "Sthlmtechpartner",
        image: Sthlm,
        category: "web",
        description: `The Sthlmtech Partner business website serves as an online portfolio for the company, showcasing its expertise and offerings.
        This fully responsive web platform is designed to highlight the company's services, projects, and capabilities. It provides a professional online presence.`,
      },
      {
        id: 5,
        title: "FemClinic",
        image: FemClinic,
        category: "web",
        description: `FemClinic is a digital platform that redefines women's healthcare, seamlessly blending conventional and holistic approaches.
        Patients can effortlessly schedule appointments and engage in audio/video consultations with experienced doctors.`,
      },
     
      {
        id: 6,
        title: "Homeats Admin Panel",
        image: Homeats,
        category: "web",
        description: `Homeats bridges the gap for those seeking healthy homemade food, connecting them with expert restaurants,
        home-cooked food producers, and professional chefs under the guidance of dieticians. It promotes a "HEALTHY FOOD FOR LIFE" philosophy.`,
      },
     
      {
        id: 9,
        title: "Kamaee",
        image: KamaeeLanding,
        category: "web",
        description: `KAMAEE is a versatile platform, akin to Fiverr, offering services ranging from electricians to tailors. 
        It features an admin panel and chat functionality, facilitating connections between non-IT workers and clients.`
      },
      {
        id: 11,
        title: "Kamaee Admin Panel",
        image: KamaeeAdmin,
        category: "web",
        description: `The KAMAEE Admin panel oversee incoming orders from sellers and delegate these orders to sub-admins who, in turn, 
        assign them to delivery personnel or riders. This panel enables comprehensive order tracking, offers the ability to edit blacklists, 
        and provides various tools to facilitate seamless order management.`
      },
    ]
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE"
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex"
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny"
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN"
      }
    ]
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "With years of experience in Web & Application development, I specialize in delivering tailored solutions that match my clients' distinct needs. My expertise covers custom website & app development, and cloud-based solutions using Firebase. I offer additional services such as SEO, UI/UX design, and ongoing support. My priority is delivering dependable, efficient, and client-centric solutions that precisely align with project requirements.",
    btnText: "Hire Me"
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ayazqadri111@gmail.com",
        icon: GrMail,
        link: "mailto:ayazqadri111@gmail.com"
      },
      {
        text: "+92 310 0401601",
        icon: FaWhatsapp,
        link: "https://wa.me/+923100401601"
      },
      {
        text: "+92 307 0401601",
        icon: MdCall,
        link: "tel:+923070401601"
      },
      {
        text: "Github",
        icon: FaGithub,
        link: "https://github.com/AyazQadri/"
      },
      {
        text: "Linkedin",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/ayaz-qadri-298128154/"
      }
    ]
  },
  Footer: {
    text: "All © Copy Right Reserved 2022"
  }
};
