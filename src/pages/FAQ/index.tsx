import { useEffect, useRef } from "react";
import AccordionUsage from "../../components/ui/accordion/Accordion"
import { easeOut, useAnimation, useInView, motion } from "framer-motion";
import CTA from "../../components/sections/CTA";

const FAQ = () => {

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

  const faqs = [
    {
      question: "What is the 100% Money Back Satisfaction Guarantee for your courses?",
      answer: "Our 100% Money Back Satisfaction Guarantee means that if you're not satisfied with the course or educational content you've purchased, we will refund your full payment. We want you to feel confident and secure in your decision to invest in your education with us."
    },
    {
      question: "How do I request a refund under the satisfaction guarantee?",
      answer: "To request a refund under our 100% Money Back Satisfaction Guarantee, simply contact our customer support team within 30 days of your purchase. Provide your order details and reason for the refund, and we will process your request promptly."
    },
    {
      question: "Are there any requirements to qualify for the refund?",
      answer: "To qualify for a refund under our 100% Money Back Satisfaction Guarantee, you must request the refund within 30 days of your purchase and provide a valid reason for the refund."
    },
    {
      question: "How long does it take to process my refund?",
      answer: "Refunds are typically processed within 5-7 business days after we receive your refund request. The time it takes for the funds to appear in your account may vary depending on your bank or payment provider."
    },
    {
      question: "Does the 100% Money Back Guarantee apply to all courses?",
      answer: "Yes, our 100% Money Back Satisfaction Guarantee applies to all courses and educational content offered on our platform, unless otherwise specified in the course description."
    },
    {
      question: "Can I get a refund if I’m not satisfied with a tutoring session?",
      answer: "Yes, if you are not satisfied with a tutoring session, you can request a refund under our 100% Money Back Satisfaction Guarantee. Please contact our customer support team within 30 days of the session to initiate the refund process."
    }

  ]
  return (
    <div>
      <div className="mt-26 max-w-7xl mx-auto mb-36">
        <motion.div className="mb-18 text-center" ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
          <motion.h1 variants={itemVariants} className="text-5xl font-bold text-center mb-6">100% Money Back <span className="text-[#FF7777]">Satisfaction Guarantee</span></motion.h1>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto font-medium text-xl leading-[165%] text-[#222E48]/70">Find answers to the most common questions about NAPLAN Prep, our platform, and how we
            can help your child succeed.</motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <img src="/images/faq/1.png" alt="FAQ Image 1" className="max-h-[600px]" />
          </div>
          <div className="col-span-2 md:col-span-7">
            {faqs.map((faq, index) => (
              <AccordionUsage
                key={index}
                title={faq.question}
                content={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <CTA imgSrc="bg-[url('/images/cta/image-3.png')]" />
    </div>
    
  )
}

export default FAQ