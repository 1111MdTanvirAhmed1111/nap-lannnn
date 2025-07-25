import { cn } from "../../utils/utils";

interface ButtonFillProps {
     onClick?: () => void;
     className?: string;
     disabled?: boolean;
     type?: "button" | "submit" | "reset";
     btnText?: string;
}

const ButtonFill: React.FC<ButtonFillProps> = ({
     onClick,
     className = "",
     disabled = false,
     type = "button",
     btnText,
}) => {
     return (
          <button
               type={type}
               onClick={onClick}
               disabled={disabled}
               className={cn(
                    "relative rounded-[1000px] py-2.5 px-[36px]",
                    "bg-[#007DFC] transition-all duration-300",
                    "shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)]",
                    "hover:bg-[#0066cc] hover:shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.25),inset_0px_2px_4px_rgba(255,255,255,0.5)]",
                    "active:bg-[#0052a3] focus:outline-none",
                    "flex items-center justify-center",
                    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                    className
               )}>
               {btnText && <span className="text-white font-medium">{btnText}</span>}
          </button>
     );
};

export default ButtonFill;
