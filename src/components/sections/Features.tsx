import { motion, useAnimation, useInView, easeOut } from "framer-motion";
import { useEffect, useRef } from "react";


import FeatureCard from "../Card/FeatureCard";

type ButtonVariant = "violet" | "green" | "orange" | "yellow";

interface Feature {
     title: React.ReactNode;
     description: React.ReactNode;
     iconSrc: string;
     bgSrc: string;
     bgColor: string;
     btnVariant: ButtonVariant;
}

const Features = () => {

     const containerVariants = {
          hidden: {},
          visible: {
               transition: {
                    staggerChildren: 0.25,
               },
          },
     };

     const cardVariants = {
          hidden: {
               scale: 0,
               opacity: 0,
          },
          visible: {
               scale: 1,
               opacity: 1,
               transition: {
                    duration: 0.6,
                    ease: easeOut,
               },
          },
     };

     const ref = useRef(null);
     const controls = useAnimation();
     const inView = useInView(ref, { once: true, margin: "-100px" });

     useEffect(() => {
          if (inView) {
               controls.start("visible");
          }
     }, [inView, controls]);

     const features: Feature[] = [
          {
               title: (
                    <>
                         One-to-one live <span className="text-[#A252AA]">customized learning</span>
                    </>
               ),
               description: (
                    <>
                         Select the NAPLAN year level (3, 5, 7, or 9) <br /> relevant to your child.
                    </>
               ),
               iconSrc: "/images/features/icons/1.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #FFDD5D 0.63%, #FFF1C5 99.17%)",
               btnVariant: "violet",
          },
          {
               title: (
                    <>
                         One-to-one live <span className="text-[#C1EE59]">customized learning</span>
                    </>
               ),
               description: (
                    <>
                         Select the NAPLAN year level (3, 5, 7, or 9) <br /> relevant to your child.
                    </>
               ),
               iconSrc: "/images/features/icons/2.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #126AC3 0.63%, #7EBDFE 99.17%)",
               btnVariant: "green",
          },
          {
               title: (
                    <>
                         One-to-one live <span className="text-[#EE7309]">customized learning</span>
                    </>
               ),
               description: (
                    <>
                         Select the NAPLAN year level (3, 5, 7, or 9) <br /> relevant to your child.
                    </>
               ),
               iconSrc: "/images/features/icons/3.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #91C75B 0.63%, #DAFBB9 99.17%)",
               btnVariant: "orange",
          },
          {
               title: (
                    <>
                         One-to-one live <span className="text-[#FBD332]">customized learning</span>
                    </>
               ),
               description: (
                    <>
                         Get personalized feedback <br /> and recommendations for your child.
                    </>
               ),
               iconSrc: "/images/features/icons/4.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #331B4E 0.63%, #C99DFE 99.17%)",
               btnVariant: "yellow",
          },
     ];

     return (
          <div className="relative overflow-x-clip">
               <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8 max-w-7xl mx-auto mb-20"
               >
                    {features.map((feature, index) => (
                         <motion.div key={index} variants={cardVariants}>
                              <FeatureCard
                                   title={feature.title}
                                   description={feature.description}
                                   iconSrc={feature.iconSrc}
                                   bgSrc={feature.bgSrc}
                                   bgColor={feature.bgColor}
                                   btnVariant={feature.btnVariant}
                              />
                         </motion.div>
                    ))}

                    <div className="w-[460px] h-[460px] rounded-full bg-[#E6700B] absolute bottom-0 -right-1/5 translate-y-1/3 opacity-20" style={{ filter: "blur(150px)" }} />
                    <div className="w-[550px] h-[550px] rounded-full bg-[#2AF595] absolute bottom-0 -left-1/5 translate-y-1/3 opacity-20" style={{ filter: "blur(200px)" }} />
               </motion.div>
          </div>

     );
};

export default Features;
