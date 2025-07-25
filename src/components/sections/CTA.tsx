import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

const CTA = ({ imgSrc = "bg-[url('/images/cta/image.png')]" }) => {
     return (
          <div className="text-white bg-[#A15BA8] max-w-7xl mx-auto px-4 md:px-16 rounded-4xl h-auto md:h-[450px] mb-20">
               <div className="flex flex-col md:flex-row-reverse h-full">
                    <div className="flex-1 md:relative overflow-hidden">
                         <div className={`${imgSrc} bg-cover bg-no-repeat w-full h-[300px] md:w-[450px] md:h-[530px] md:absolute md:-bottom-3 md:right-0 z-10`}></div>
                    </div>
                    <div className="mt-8 md:mt-18 flex-1 relative w-full md:w-3/4">
                         <h2 className="text-2xl md:text-5xl font-bold leading-[130%] mb-8">
                              Ready <span className="text-[#FFAE29]">to boosts </span> your
                              child's NAPLAN confidence?
                         </h2>
                         <div className="flex gap-1">
                              <ButtonFill btnText="Try Free Trial" />
                              <ButtonCircle />
                         </div>
                         <img src="/images/cta/icon3.png" alt="Icon 3" className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] relative md:absolute md:-top-[60px] md:right-0" />
                         <img src="/images/cta/icon1.png" alt="Icon 1" className="w-auto h-[180px] md:h-[280px] relative md:absolute md:bottom-0 md:right-0 md:translate-x-1/4 md:-rotate-6" />
                         <img src="/images/cta/icon2.png" alt="Icon 2" className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] relative md:absolute md:right-0 md:top-0 md:translate-x-[50%] lg:translate-x-[100%] md:rotate-12 md:translate-y-1/4 lg:translate-y-1/2" />
                    </div>
               </div>
          </div>
     );
};

export default CTA;