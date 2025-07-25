import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, easeOut } from "framer-motion";
import HIWCard from "../Card/HIWCard";

const HowItWorks = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const steps = [
    {
      id: 1,
      title: "Choose Your Year Level",
      description: "Select the NAPLAN year level (3, 5, 7, or 9) relevant to your child.",
      imageSrc: "/images/howitworks/1.png",
      imgBg: "bg-[#A15BA8]",
      btnCls: "bg-[#E6700B]",
    },
    {
      id: 2,
      title: "Practice Tests",
      description: "Access a wide range of practice tests across all NAPLAN domains.",
      imageSrc: "/images/howitworks/2.png",
      imgBg: "bg-[#23D581]",
      btnVariant: "blue",
    },
    {
      id: 3,
      title: "Review & Learn",
      description: "Get instant feedback, detailed explanations, and track progress.",
      imageSrc: "/images/howitworks/3.png",
      imgBg: "bg-[#E6700B]",
      btnVariant: "yellow",
      btnCls: "bg-[#F0C20A]",
    },
    {
      id: 4,
      title: "Achieve Success",
      description: "Build confidence & improve performance for the actual NAPLAN test.",
      imageSrc: "/images/howitworks/4.png",
      imgBg: "bg-[#8056FF]",
      btnVariant: "red",
      btnCls: "bg-[#FF7777]",
    },
  ];

  return (
    <div className="max-w-7xl h-auto mx-auto px-4 sm:px-6 relative mb-16 mt-24">
      <div
        className="hidden md:block w-[480px] h-[480px] rounded-full bg-[#007DFC] absolute top-0 -right-1/5 -translate-y-1/3 -z-10 opacity-20"
        style={{ filter: "blur(150px)" }}
      />
      <img
        src="/images/hiw-banner.png"
        alt="How It Works Banner"
        className="hidden md:block h-full w-auto absolute top-0 left-36 opacity-20 -z-10"
      />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-center"
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-5 text-center"
          variants={itemVariants}
        >
          How it <span className="text-[#FF7777]">works</span>
        </motion.h2>
        <motion.p
          className="text-[#222E48]/70 mb-8 text-center max-w-md"
          variants={itemVariants}
        >
          Find out in 5 steps
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full justify-items-center"
          variants={containerVariants}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="w-full max-w-[280px] mx-auto"
            >
              <HIWCard
                title={step.title}
                description={step.description}
                imageSrc={step.imageSrc}
                imgBg={step.imgBg}
                index={step.id}
                btnCls={step.btnCls || ""}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <img
        src="/images/howitworks/line.png"
        alt="Line"
        className="absolute bottom-0 left-0 w-full -z-10 max-sm:hidden"
      />
    </div>
  );
};

export default HowItWorks;