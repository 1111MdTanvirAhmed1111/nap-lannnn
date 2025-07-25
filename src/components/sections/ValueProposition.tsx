import { easeOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

const ValueProposition = () => {
     const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.2,
     });
 
     // Animation variants
     const container = {
          hidden: { opacity: 0 },
          show: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2,
               },
          },
     };

     const item = {
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
     };

     return (
          <motion.section
               ref={ref}
               initial="hidden"
               animate={inView ? "show" : "hidden"}
               variants={container}
               className="grid grid-cols-12 w-full max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-8 sm:mt-12 lg:mt-16 gap-4 sm:gap-6 lg:gap-8 relative"
          >
               <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-[#007dfc] absolute top-0 -left-1/4 -z-10 opacity-80" style={{filter: "blur(120px) sm:blur(180px) lg:blur(250px)"}}/>
               <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-[#2AF595] absolute bottom-0 -right-1/4 translate-y-1/3 -z-10 opacity-30" style={{filter: "blur(120px) sm:blur(180px) lg:blur(250px)"}}/>
               <motion.div
                    variants={item}
                    className="col-span-12 sm:col-span-6 lg:col-span-5 flex justify-center"
               >
                    <img
                         src="/images/value-img.png"
                         alt="Value Proposition"
                         className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto"
                    />
               </motion.div>

               <motion.div
                    variants={item}
                    className="col-span-12 sm:col-span-6 lg:col-span-5 flex items-center justify-center sm:justify-end mt-6 sm:mt-0"
               >
                    <div className="max-w-full sm:max-w-md lg:max-w-lg">
                         <motion.h2
                              variants={item}
                              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[130%] mb-3 sm:mb-4"
                         >
                              <span className="text-[#FF7777]">Reports that show</span> <br /> your
                              child's <br />
                              strengths, and more
                         </motion.h2>

                         <motion.p
                              variants={item}
                              className="text-[#222E48]/70 text-base sm:text-lg leading-[165%] mb-3 sm:mb-4"
                         >
                              We believe that learning should be fun, inspiring, and empowering for
                              every child
                         </motion.p>

                         <motion.ul
                              variants={container}
                              className="custom-list space-y-2 sm:space-y-3 mb-4 sm:mb-6"
                         >
                              <motion.li variants={item} className="text-sm sm:text-base">
                                   To make learning engaging and effective through fun.
                              </motion.li>
                              <motion.li variants={item} className="text-sm sm:text-base">
                                   To become the leading platform that empowers every child to
                                   learn.
                              </motion.li>
                         </motion.ul>

                         <motion.div
                              variants={item}
                              className="flex items-center gap-2 sm:gap-3"
                         >
                              <ButtonFill btnText="Explore More" />
                              <ButtonCircle />
                         </motion.div>
                    </div>
               </motion.div>

               <motion.div
                    variants={item}
                    className="col-span-12 sm:col-span-6 lg:col-span-2 flex items-end justify-center sm:justify-end"
               >
                    <img
                         src="/images/value-img-2.png"
                         alt="Value Proposition 2"
                         className="w-40 sm:w-48 lg:w-60 h-auto max-sm:-translate-y-[75%] max-sm:translate-x-[40%] max-sm:scale-[0.3]"
                    />
               </motion.div>
          </motion.section>
     );
};

export default ValueProposition;