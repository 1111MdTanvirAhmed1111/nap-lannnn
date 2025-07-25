import { motion } from "framer-motion";

interface PricingHeaderProps {
     imageSrc: string;
     title: string;
     price: string;
     billingCycle?: string;
     color: string;
}

const PricingHeader = ({ imageSrc, title, price, billingCycle, color }: PricingHeaderProps) => {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="p-5 rounded-3xl shadow-[inset_0_-9px_18.8px_rgba(0,0,0,0.25),_inset_0_9px_14.3px_rgba(255,255,255,0.5)]"
               style={{ backgroundColor: color }}
          >
               <div className="flex items-center gap-5 pb-5 border-b border-white/20">
                    <div className="bg-white rounded-xl w-20 h-20 flex items-center justify-center shadow-[inset_0px_4px_4px_rgba(255,255,255,0.5),_inset_0px_-3px_4px_rgba(0,0,0,0.25)]">
                         <img src={imageSrc} alt={title} className="w-9 h-9" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">{title}</h2>
               </div>
               <p className="text-[42px] font-semibold mt-5 text-white">
                    {price}
                    {billingCycle && <span className="text-sm font-normal">/{billingCycle}</span>}
               </p>
          </motion.div>
     );
};

export default PricingHeader;