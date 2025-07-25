import type React from "react";
import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

type ButtonVariant = "violet" | "green" | "orange" | "yellow";

interface FeatureCardProps {
     title: React.ReactNode;
     description: React.ReactNode;
     iconSrc: string;
     bgSrc: string;
     bgColor: string;
     btnVariant?: ButtonVariant; // Fix: string union, not an object
}

const FeatureCard = ({
     title,
     description,
     iconSrc,
     bgSrc,
     bgColor,
     btnVariant = "violet", // default fallback
}: FeatureCardProps) => {
     const fillBtncolorVariants: Record<ButtonVariant, string> = {
          violet: "bg-[#A15BA8] hover:bg-[#8A4D8F] active:bg-[#733F7A]",
          green: "bg-[#A4C752] hover:bg-[#8DAF3A] active:bg-[#7A9B2A]",
          orange: "bg-[#E6700B] hover:bg-[#C65A0A] active:bg-[#A54B08]",
          yellow: "bg-[#FFAA29] hover:bg-[#E69518] active:bg-[#CC7E0F]",
     };
     const circleBtnColorVariants: Record<ButtonVariant, string> = {
          violet: "bg-[#A15BA8] group-hover:bg-[#8A4D8F] group-active:bg-[#733F7A]",
          green: "bg-[#A4C752] group-hover:bg-[#8DAF3A] group-active:bg-[#7A9B2A]",
          orange: "bg-[#E6700B] group-hover:bg-[#C65A0A] group-active:bg-[#A54B08]",
          yellow: "bg-[#FFAA29] group-hover:bg-[#E69518] group-active:bg-[#CC7E0F]",
     };

     return (
          <div className="relative h-[369px] rounded-[20px] shadow-lg overflow-hidden">
               {/* Gradient Overlay */}
               <div className="absolute inset-0" style={{ background: bgColor, opacity: 0.84 }} />
               {/* Background Image */}
               <img
                    src={bgSrc}
                    alt="Feature Background"
                    className="absolute inset-0 w-full h-full object-cover"
               />

               {/* Icon */}
               <img
                    src={iconSrc}
                    alt="Feature Icon"
                    className="absolute bottom-0 right-0 h-[300px]"
               />

               {/* Foreground Content */}
               <div className="relative z-10 p-6 flex flex-col gap-4 justify-center h-full">
                    <div>
                         <h3 className="text-2xl font-bold mb-3">{title}</h3>
                         <p className="text-lg text-[#222E48]/70">{description}</p>
                    </div>

                    <div className="mt-4 flex gap-1">
                         <ButtonFill
                              btnText="Choose Plan"
                              className={`${fillBtncolorVariants[btnVariant]} px-14`}
                         />
                         <ButtonCircle className={`${circleBtnColorVariants[btnVariant]}`} />
                    </div>
               </div>
          </div>
     );
};

export default FeatureCard;
