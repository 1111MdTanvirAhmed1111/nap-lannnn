import { cn } from "../../utils/utils";

interface ButtonOutlineProps {
     btnText: string;
     onClick?: () => void;
     type?: "button" | "submit" | "reset";
     className?: string;
     disabled?: boolean;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
     btnText,
     onClick,
     type = "button",
     className = "",
     disabled = false,
}) => {
     return (
          <button
               type={type}
               onClick={onClick}
               disabled={disabled}
               className={cn(
                    "rounded-full py-2.5 px-6 border border-[#066ac9]",
                    "bg-transparent text-[#066ac9] font-medium",
                    "transition-all duration-200",
                    "hover:bg-[#066ac9]/8 hover:border-[#066ac9]/80",
                    "active:bg-[#066ac9]/12 active:border-[#066ac9]",
                    "focus:outline-none focus:ring-2 focus:ring-[#066ac9]/30 focus:border-[#066ac9]",
                    disabled
                         ? "opacity-60 cursor-not-allowed border-[#066ac9]/50"
                         : "cursor-pointer",
                    className
               )}>
               {btnText}
          </button>
     );
};

export default ButtonOutline;
