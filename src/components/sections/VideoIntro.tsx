import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import VideoPlayer from "../videoplayer/VideoPlayer";

function VideoIntro() {
     const controls = useAnimation();
     const ref = useRef(null);
     const inView = useInView(ref, { once: true, margin: "-100px" });

     useEffect(() => {
          if (inView) {
               controls.start("visible");
          }
     }, [inView, controls]);

     const titleVariants = {
          hidden: { opacity: 0, y: 50 },
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    duration: 0.8,
                    ease: easeOut
               }
          }
     };

     return (
          <div className="max-w-7xl mx-auto mt-24 relative">
               <div className="absolute w-[500px] h-[500px] -left-[250px] -top-[120px] bg-[#2AF595] opacity-30 blur-[200px]" />
               <div className="absolute w-[500px] h-[500px] -right-[250px] -bottom-[250px] bg-[#e6700b] opacity-15 blur-[200px]" />

               {/* Animated Title */}
               <motion.h2
                    ref={ref}
                    variants={titleVariants}
                    initial="hidden"
                    animate={controls}
                    className="text-center text-5xl font-bold mb-20 leading-tight"
               >
                    Boost Your Child's <br />
                    <span className="text-[#ff7777]">NAPLAN</span> Performance
               </motion.h2>

               <div className="relative">
                    <VideoPlayer />
               </div>
          </div>
     );
}

export default VideoIntro;
