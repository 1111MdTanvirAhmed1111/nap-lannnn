import { backOut, easeInOut, motion } from "framer-motion";
import ButtonFill from "../button/ButtonFill";
import ButtonOutline from "../button/ButtonOutline";
import ButtonCircle from "../button/ButtonCircle";

const Hero = () => {
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.2,
               },
          },
     };

     const itemVariants = {
          hidden: { y: 20, opacity: 0 },
          visible: {
               y: 0,
               opacity: 1,
               transition: {
                    duration: 0.5,
               },
          },
     };

     const imageVariants = {
          hidden: { scale: 0.9, opacity: 0, rotate: 2 },
          visible: {
               scale: 1,
               opacity: 1,
               rotate: 0,
               transition: {
                    duration: 1,
                    ease: easeInOut,
                    stiffness: 80,
               },
          },
     };

     const buttonVariants = {
          hidden: { scale: 0.7, opacity: 0 },
          visible: {
               scale: 1,
               opacity: 1,
               transition: {
                    duration: 0.6,
                    ease: backOut,
                    stiffness: 100,
               },
          },
     };

     return (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <motion.section
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center py-6 sm:py-8 md:py-12 overflow-x-clip"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
               >
                    {/* Left Section */}
                    <motion.div
                         className="flex flex-col gap-4 sm:gap-6 md:gap-8 order-2 md:order-1 relative z-10 px-2 sm:px-4 mt-18 md:mt-0"
                         variants={containerVariants}
                    >
                         <motion.div
                              className="flex gap-2 sm:gap-3 items-center text-sm sm:text-base md:text-lg lg:text-xl text-[#e6700b] font-medium"
                              variants={itemVariants}
                         >
                              <motion.div
                                   className="border-2 w-8 sm:w-10 md:w-12 lg:w-16 border-[#e6700b]"
                                   initial={{ width: 0 }}
                                   animate={{ width: ["2rem", "2.5rem", "3rem", "4rem"] }}
                                   transition={{
                                        duration: 0.8,
                                        ease: "easeInOut",
                                        times: [0, 0.33, 0.66, 1],
                                   }}
                              />
                              Confident kid, better scores.
                         </motion.div>

                         <motion.div variants={itemVariants} className="relative">
                              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                   Master <span className="text-[#ff7777]">NAPLAN</span> with
                                   confidence & ease
                              </h1>
                              <img
                                   src="/images/hero-icon-5.png"
                                   alt="Hero Icon"
                                   className="absolute -top-8 sm:-top-10 md:-top-12 lg:-top-14 right-3 sm:right-4 md:right-5 w-auto h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 rotate-15 hidden sm:block"
                              />
                         </motion.div>

                         <motion.div variants={itemVariants}>
                              <p className="text-[#222E48]/70 text-sm md:text-base lg:text-lg font-medium">
                                   Comprehensive practice tests and personalized learning paths for
                                   Year 3, 5, 7 & 9 students to excel in NAPLAN.
                              </p>
                         </motion.div>

                         <motion.div className="flex flex-wrap gap-4">
                              <motion.div className="flex gap-1" variants={buttonVariants}>
                                   <ButtonFill
                                        onClick={() => console.log("Button clicked!")}
                                        className="bg-blue-500 text-white rounded-full text-sm md:text-base px-6 py-1.5 sm:py-2 text-nowrap"
                                        btnText="Try Free Trial"
                                        type="button"
                                   />
                                   <ButtonCircle />
                              </motion.div>

                              <motion.div className="flex gap-1" variants={buttonVariants}>
                                   <ButtonOutline
                                        btnText="See Sample Test"
                                        className="py-1 sm:py-1.5 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6"
                                   />
                                   <ButtonCircle />
                              </motion.div>
                         </motion.div>

                         <img
                              src="/images/hero-icon-6.png"
                              alt="Hero Icon"
                              className="absolute w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 h-24 sm:h-28 md:h-32 lg:h-40 xl:h-48 -right-8 sm:-right-10 md:-right-12 lg:-right-16 xl:-right-20 -bottom-20 sm:-bottom-24 md:-bottom-28 lg:-bottom-32 xl:-bottom-40 hidden md:block"
                         />
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                         className="flex items-center justify-center md:justify-end order-1 md:order-2 relative"
                         variants={imageVariants}
                    >
                         <div className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[480px] h-[280px] sm:h-[360px] md:h-[400px] lg:h-[480px] xl:h-[560px] relative">
                              <img
                                   src="/images/hero-img.webp"
                                   alt="Happy student learning"
                                   className="h-full w-full object-cover rounded-lg"
                              />
                              <img
                                   src="https://res.cloudinary.com/dghzuk2uk/image/upload/v1752362661/br-Uploads/klo5hvdnj4kfccwqhkxo.webp"
                                   alt="Animated background"
                                   className="absolute w-full -bottom-12 sm:-bottom-14 md:-bottom-16 lg:-bottom-20 xl:-bottom-[82px] -z-5"
                              />
                              <div className="absolute flex items-center gap-2 sm:gap-3 md:gap-4 w-[120px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[230px] min-h-[60px] sm:min-h-[80px] md:min-h-[90px] lg:min-h-[100px] xl:min-h-[110px] right-0 top-[80px] sm:top-[120px] md:top-[140px] lg:top-[160px] xl:top-[180px] md:translate-x-1/4 lg:translate-x-1/3 xl:translate-x-1/2 rounded-[16px] sm:rounded-[20px] bg-white shadow-[12px_20px_30px_rgba(4,65,36,0.1)] p-3 sm:p-4 md:p-5 lg:p-6">
                                   <div className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 bg-[#F7AEFF] rounded-lg shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)] hidden sm:flex items-center justify-center">
                                        <img
                                             src="/images/hero-icon-1.png"
                                             alt="Hero Icon"
                                             className="w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12"
                                        />
                                   </div>
                                   <div>
                                        <span className="text-xl sm:text-2xl md:text-2.5xl lg:text-3xl text-[#E0B50B] font-bold">
                                             250K
                                        </span>
                                        <br /> Practice tests
                                   </div>
                              </div>

                              <div className="absolute flex items-center gap-2 sm:gap-3 md:gap-4 w-[120px] bg-white shadow-[12px_20px_30px_rgba(4,65,36,0.1)]">
                                   <div className="relative w-full h-full p-3 sm:p-4 md:p-5 lg:p-6">
                                        <div className="absolute w-8 sm:w-10 md:w-12 lg:w-14 h-8 sm:h-10 md:h-12 lg:h-14 top-0 left-0 -translate-x-1/4 -translate-y-1/4 bg-[#FFA558] shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_0px_4px_rgba(255,255,255,0.5)] rounded-full hidden sm:flex items-center justify-center">
                                             <img
                                                  src="/images/hero-icon-4.png"
                                                  alt="Hero Icon"
                                                  className="w-4 sm:w-5 md:w-6 lg:w-7 h-4 sm:h-5 md:h-6 lg:h-7"
                                             />
                                        </div>
                                        <div className="ml-5 sm:ml-6 md:ml-7 lg:ml-8">
                                             <span className="text-xl sm:text-2xl md:text-2.5xl lg:text-3xl text-[#1AA249] font-bold">
                                                  150K
                                             </span>
                                             <br /> Active students
                                        </div>
                                   </div>
                              </div>

                              <div className="absolute w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 bg-white rounded-full left-1/2 translate-x-1/2 -bottom-8 sm:-bottom-10 md:-bottom-12 lg:-bottom-14 flex items-center justify-center shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)]">
                                   <img
                                        src="/images/hero-icon-2.png"
                                        alt="Hero Icon"
                                        className="w-8 sm:w-10 md:w-10 lg:w-12"
                                   />
                              </div>

                              <img
                                   src="/images/hero-icon-3.png"
                                   alt="Hero Icon"
                                   className="absolute w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 right-0 top-10 sm:top-12 md:top-14 lg:top-16 xl:top-18 rotate-15"
                              />
                         </div>
                         <div
                              className="absolute w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] left-0 top-0 -z-10 bg-[#2AF595] opacity-10 sm:opacity-15 md:opacity-20 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] xl:blur-[180px]"
                         />
                    </motion.div>
               </motion.section>
          </div>
     );
};

export default Hero;