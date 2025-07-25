import { motion } from "framer-motion";
import Rating from "@mui/material/Rating";
interface FeatureCardProps {
     author: string;
     content: string;
     rating: number;
     authorImage: string;
}
const TestimonialCard = ({ author, content, rating, authorImage }: FeatureCardProps) => {
     return (
          <motion.div whileHover={{
               y: -10,
               transition: { duration: 0.4 }
          }} className="min-w-[350px] h-[240px] p-6 shadow-[0px_4px_17px_rgba(0,0,0,0.15)] bg-white rounded-[20px]">
               <div className="flex items-center gap-4 mb-4">
                    <div className="w-[90px] h-[90px] rounded-full relative">
                         <img
                              src={authorImage}
                              alt={author}
                              className="w-full h-full object-cover"
                         />
                         <span className="absolute rounded-full bg-white text-blue-700 w-9 h-9 flex justify-center items-center shadow-sm translate-x-1/4 -translate-y-1/4 bottom-0 right-0">
                              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M0.685547 0.322754V8.24365H5.26674V9.56683C5.26674 10.3228 4.64562 10.9378 3.88213 10.9378H2.12144V14.3228H3.88213C6.53077 14.3228 8.68555 12.1893 8.68555 9.56683V0.322754L0.685547 0.322754Z" fill="#007DFC" />
                              </svg>
                              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M0.685547 0.322754V8.24365H5.26674V9.56683C5.26674 10.3228 4.64562 10.9378 3.88213 10.9378H2.12144V14.3228H3.88213C6.53077 14.3228 8.68555 12.1893 8.68555 9.56683V0.322754L0.685547 0.322754Z" fill="#007DFC" />
                              </svg>
                         </span>
                    </div>
                    <div>
                         <h3 className="font-semibold mb-1">{author}</h3>
                         <Rating value={rating} readOnly precision={0.5} />
                    </div>
               </div>
               <p className="mt-3 text-[#222E48B2]/70">{content}</p>
          </motion.div>
     );
};

export default TestimonialCard;
