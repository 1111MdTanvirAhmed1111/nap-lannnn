import { cn } from "../../utils/utils";
import ButtonCircle from "../button/ButtonCircle";
interface HIWCardProps {
     imageSrc: string;
     title: string;
     description: string;
     imgBg: string;
     index: number;
     btnCls?: string;
     position?: string; // Optional position prop for custom positioning
}

const HIWCard = ({ imageSrc, title, description, imgBg, index, btnCls, position }: HIWCardProps) => {
     console.log("buttn cls", btnCls);
     return (
               <div
                    className={cn(
                         "h-[280px] w-[250px] rounded-[20px] shadow-[0px_4px_17.8px_rgba(0,0,0,0.15)] bg-white", position
                    )}>
                    <div className="relative h-full w-full p-5">
                         <div
                              className={`h-16 w-16 ${imgBg} flex items-center justify-center shadow-[inset_0px_6px_9.1px_rgba(255,255,255,0.5),inset_0px_-6px_9.2px_rgba(0,0,0,0.25)] rounded-xl`}>
                              <img src={imageSrc} alt={title} className="w-8 h-8" />
                         </div>
                         <h3 className="text-xl font-bold mt-4">{title}</h3>
                         <p className="text-[#222E48]/70 mt-3">{description}</p>

                         {/* bottom indicator arrow */}
                         <div className="absolute w-[30px] h-[28px] left-1/2 bottom-0 translate-y-1 -translate-x-1/2 bg-white rounded rotate-45 flex-none order-2 flex-grow-0 z-20"></div>
                         <div className="absolute h-fit w-fit left-1/2 -translate-x-1/2 -bottom-16">
                              <ButtonCircle
                                   text={index.toString()}
                                   disabled={true}
                                   className={btnCls ?? ""}
                              />
                         </div>
                    </div>
               </div>
     );
};

export default HIWCard;
