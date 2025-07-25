import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import PricingCard from "../pricing/PricingCard";
import { useEffect, useRef } from "react";
import { easeOut, useAnimation, useInView, motion } from "framer-motion";

const Pricing = () => {

     const controls = useAnimation();
     const ref = useRef(null);
     const inView = useInView(ref, { once: true, margin: "-100px" });

     useEffect(() => {
          if (inView) {
               controls.start("visible");
          }
     }, [inView, controls]);

     const containerVariants = {
          hidden: {},
          visible: {
               transition: {
                    staggerChildren: 0.3,
               },
          },
     };

     const itemVariants = {
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
     const pricingPlans = [
          {
               id: 1,
               title: "Explorer",
               price: "Free",
               color: "#F198FA",
               imgScr: "/images/plans/explorer.png",
               includes: [
                    "Tailored for Classrooms",
                    "Teacher Dashboard",
                    "Bulk Student Accounts",
                    "Dedicated Account Manager",
               ],
          },
          {
               id: 2,
               title: "Premium Plan",
               price: "$39",
               color: "#FFAE29",
               imgScr: "/images/plans/premium.png",
               billingCycle: "Per Month",
               includes: [
                    "Access to All Year Levels",
                    "Unlimited practice tests",
                    "Advanced Analytics Insights",
                    "Priority Email Support",
                    "Exclusive Study Guides",
               ],
          },
          {
               id: 3,
               title: "Basic Plan",
               price: "$19",
               color: "#FF7777",
               billingCycle: "Per Month",
               imgScr: "/images/plans/basic.png",
               includes: [
                    "Access to 1 Year Level",
                    "5 Practice Tests/Month",
                    "Basic Performance Reports",
                    "Email Support",
               ],
          },
          {
               id: 4,
               title: "Basic Plan 2",
               price: "$19",
               color: "#FF7777",
               billingCycle: "Per Month",
               imgScr: "/images/plans/basic.png",
               includes: [
                    "Access to 1 Year Leve",
                    "5 Practice Tests/Month",
                    "Basic Performance Reports",
                    "Email Support",
               ],
          },
     ];
     return (
          <div className="max-w-[1280px] mx-auto px-4 py-12 mt-6 relative">
               <div className="w-[420px] h-[420px] rounded-full bg-[#E6700B] absolute bottom-0 -left-1/5 translate-y-1/3 -z-10 opacity-20" style={{ filter: "blur(150px)" }} />
               <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
               >
                    <motion.h2
                         className="text-5xl font-bold text-center mb-4"
                         variants={itemVariants}
                    >
                         Simple & <span className="text-[#FF7777]">Transparent</span> Pricing
                    </motion.h2>
                    <motion.p
                         className="text-center text-lg leading-[165%] text-[#222E48]/70 mb-8"
                         variants={itemVariants}
                    >
                         Choose the plan that best fits your child's learning journey and <br />{" "}
                         unlock their full potential for NAPLAN success.
                    </motion.p>
               </motion.div>

               <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                         640: { slidesPerView: 1 },
                         768: { slidesPerView: 2 },
                         1024: { slidesPerView: 3 },
                    }}>
                    {pricingPlans.map((plan) => (
                         <SwiperSlide key={plan.id}>
                              <div className="max-w-[95%] mx-auto">
                                   <PricingCard
                                        color={plan.color}
                                        title={plan.title}
                                        price={plan.price}
                                        billingCycle={plan.billingCycle}
                                        includes={plan.includes}
                                        imageSrc={plan.imgScr}
                                   />
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div>
     );
};

export default Pricing;
