// // import content
// import { useEffect } from "react";
// import { content } from "../Content";
// import Typewriter from "typewriter-effect";
// import Spline from '@splinetool/react-spline';

// const Hero = () => {
//   const { hero } = content;

//   return (
//     <section id="home" className="overflow-hidden">
//       <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
//         <div
//           data-aos="slide-left"
//           data-aos-delay="1200"
//           className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
//         >
//           <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
//             {hero.firstName}{" "}
//             <span className="text-dark_primary">{hero.LastName}</span>
//           </h1>
//         </div>

//         {/* first col */}
//         <div className="pb-16 px-6 pt-5" data-aos="fade-down">
//           <h4 className="heading">
//             Hi There!{" "}
//             <span className="wave" role="img" aria-labelledby="wave">
//               👋🏻
//             </span>
//           </h4>
//           {/* <h1 className="heading-name">
//             I'M
//             <strong className="main-name"> Ayaz Qadri</strong>
//           </h1> */}
//           <Typewriter
//             options={{
//               strings: ["Welcome to my Portfolio!"],
//               autoStart: true,
//               loop: true,
//               deleteSpeed: 60,
//             }}
//           />
//           <div className="mt-4">
//             <h2>{hero.title}</h2>
//           </div>
//           <br />
//           <div className="flex justify-center items-center pb-5">
//             <h2>{hero.subtitle}</h2>
//           </div>
//           <div className="flex justify-end">
//             <button className="btn">
//               <a href="#contact">{hero.btnText}</a>
//             </button>
//           </div>
//           <div className="flex flex-col gap-10 mt-10">
//             {hero.hero_content.map((content, i) => (
//               <div
//                 key={i}
//                 data-aos="fade-down"
//                 data-aos-delay={i * 300}
//                 className={`flex items-center w-80 gap-5
//             ${i === 1 && " flex-row-reverse text-right"}  `}
//               >
//                 <h3>{content.count}</h3>
//                 <p>{content.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* sec col */}
//         <div className="md:h-[37rem] h-96">
//           <img
//             src={hero.image}
//             data-aos="slide-up"
//             alt="..."
//             className="h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import content
import { useEffect } from "react";
import { content } from "../Content";
import Typewriter from "typewriter-effect";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col md:items-end justify-center">
        {/* First Column */}
        <div
          data-aos="slide-right"
          data-aos-delay="1200"
          className="h-full md:w-4/12 w-full md:absolute md:top-0 md:left-0 md:bottom-0 md:-z-10 bg-primaryLinear flex items-center"
        >
          <div className="w-full px-2 md:absolute md:top-[20%] md:right-8 md:left-8 text-right md:text-left">
            <h4 className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h4>
            <h4 className="heading">I Am</h4>
            <h1 className="text-[#EAF2FA]">
              {hero.firstName}{" "}
              <span className="text-dark_primary">{hero.LastName}</span>
            </h1>
          </div>
        </div>

        {/* Second Column */}
        <div className="pb-16 px-6 pt-5 w-full md:w-8/12" data-aos="fade-down">
          <Typewriter
            options={{
              strings: ["Welcome to my Portfolio!"],
              autoStart: true,
              loop: true,
              deleteSpeed: 60
            }}
          />
          <div className="mt-4">
            <h2>{hero.title}</h2>
          </div>
          <br />
          <div className="flex justify-center items-center pb-5">
            <h2>{hero.subtitle}</h2>
          </div>
          <div className="flex justify-end">
            <button className="btn">
              <a href="#contact">{hero.btnText}</a>
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5 ${
                  i === 1 && "flex-row-reverse text-right"
                }`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
