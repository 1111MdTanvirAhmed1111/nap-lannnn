// src/components/pricing/PricingCard.tsx
import { motion } from "framer-motion";
import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";
import PricingHeader from "./PricingHeader";

interface PricingCardProps {
     imageSrc: string;
     title: string;
     price: string;
     color: string;
     billingCycle?: string;
     includes: string[];
     className?: string;
}

const PricingCard = ({
     imageSrc,
     title,
     price,
     billingCycle,
     includes,
     color,
}: PricingCardProps) => {
     return (
          <motion.div
               whileHover={{
                    y: -10,
                    // boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.4 }
               }}
               className="rounded-[20px] shadow-[0px_4px_17px_rgba(0,0,0,0.15)] p-6 box-border bg-white h-full flex flex-col"
          >
               <PricingHeader
                    imageSrc={imageSrc}
                    title={title}
                    price={price}
                    billingCycle={billingCycle}
                    color={color}
               />

               <div className="mt-6 p-2 flex-grow">
                    <h3 className="font-semibold mb-4">Includes:</h3>
                    <ul>
                         {includes.map((item, index) => (
                              <motion.li
                                   key={index}
                                   className="mb-4 flex items-start gap-2"
                                   initial={{ opacity: 0, x: -10 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ delay: index * 0.1, duration: 0.4 }}
                              >
                                   <span className="text-[#ff7777]">
                                        <svg
                                             className="w-4 h-4 shrink-0 mt-1"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             viewBox="0 0 24 24"
                                        >
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M5 13l4 4L19 7"
                                             />
                                        </svg>
                                   </span>
                                   {item}
                              </motion.li>
                         ))}
                    </ul>
               </div>

               <div className="flex gap-2 mt-6">
                    <ButtonFill btnText="Choose Plan" className="flex-1" />
                    <ButtonCircle />
               </div>
          </motion.div>
     );
};

export default PricingCard;