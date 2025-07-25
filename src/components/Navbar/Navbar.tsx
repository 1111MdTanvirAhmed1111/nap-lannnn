import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { X } from "lucide-react";

interface NavItem {
     id: number;
     path: string;
     label: string;
}

interface NavbarProps {
     mobileOpen?: boolean;
     setMobileOpen?: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileOpen, setMobileOpen }) => {
     const [activeItem, setActiveItem] = useState<string>("Home");
     const [isScrolled, setIsScrolled] = useState(false);

     const navItems: NavItem[] = [
          { id: 1, path: "/", label: "Home" },
          { id: 2, path: "/how-it-works", label: "How it works" },
          { id: 3, path: "/practice-test", label: "Practice test" },
          { id: 4, path: "/pricing", label: "Pricing plan" },
          { id: 5, path: "/faq", label: "FAQ" },
          { id: 6, path: "/for-schools", label: "For schools" },
     ];

     const handleItemClick = (label: string) => {
          setActiveItem(label);
          if (setMobileOpen) {
               setMobileOpen(false);
          }
     };

     // Handle scroll effect for mobile navbar
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 10) {
                    setIsScrolled(true);
               } else {
                    setIsScrolled(false);
               }
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     // Prevent body scroll when mobile nav is open
     useEffect(() => {
          if (mobileOpen) {
               document.body.style.overflow = "hidden";
          } else {
               document.body.style.overflow = "auto";
          }

          return () => {
               document.body.style.overflow = "auto";
          };
     }, [mobileOpen]);

     return (
          <>
               {/* Desktop Navigation */}
               <div className="hidden md:flex w-full max-w-[994px] items-center justify-center">
                    <nav className="w-full h-full bg-[#007dfc]/10 py-2 px-4 md:px-14 rounded-[25px]">
                         <ul className="h-full flex items-center justify-between text-center overflow-x-auto">
                              {navItems.map((item) => (
                                   <li key={item.id}>
                                        <Link
                                             to={item.path}
                                             onClick={() => handleItemClick(item.label)}
                                             className={`
                    px-3 py-1.5 rounded-[25px] transition-all duration-200 font-semibold inline-block
                    text-sm md:text-base
                    ${activeItem === item.label
                                                       ? "bg-[#007dfc] text-white"
                                                       : "text-[#222E48] hover:bg-[#007dfc]/20 hover:text-[#007dfc]"
                                                  }
                  `}
                                        >
                                             {item.label}
                                        </Link>
                                   </li>
                              ))}
                         </ul>
                    </nav>
               </div>

               {/* Mobile Navigation Drawer */}
               {mobileOpen && (
                    <div
                         className="fixed inset-0 bg-black/50 z-40 md:hidden"
                         onClick={() => setMobileOpen && setMobileOpen(false)}
                    />
               )}

               <div
                    className={`
          fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
               >
                    <div className={`p-4 border-b ${isScrolled ? "bg-white" : "bg-white"}`}>
                         <div className="flex justify-between items-center">
                              <h2 className="text-xl font-bold text-[#007dfc]">Menu</h2>
                              <button
                                   onClick={() => setMobileOpen && setMobileOpen(false)}
                                   className="text-gray-500 hover:text-gray-700"
                              >
                                   <X size={24} />
                              </button>
                         </div>
                    </div>

                    <nav className="py-4">
                         <ul className="flex flex-col">
                              {navItems.map((item) => (
                                   <li key={item.id} className="border-b border-gray-100">
                                        <Link
                                             to={item.path}
                                             onClick={() => handleItemClick(item.label)}
                                             className={`
                    block px-6 py-4 text-lg transition-all duration-200
                    ${activeItem === item.label
                                                       ? "bg-[#007dfc] text-white"
                                                       : "text-[#222E48] hover:bg-gray-50"
                                                  }
                  `}
                                        >
                                             {item.label}
                                        </Link>
                                   </li>
                              ))}
                         </ul>

                         <div className="px-6 py-8 flex flex-col gap-4">
                              <button
                                   onClick={() => {
                                        if (setMobileOpen) setMobileOpen(false);
                                        // navigate to login
                                   }}
                                   className="w-full py-3 px-4 border border-[#007dfc] text-[#007dfc] rounded-lg font-medium hover:bg-[#007dfc]/10 transition-colors"
                              >
                                   Login
                              </button>
                              <button
                                   onClick={() => {
                                        if (setMobileOpen) setMobileOpen(false);
                                        // navigate to signup
                                   }}
                                   className="w-full py-3 px-4 bg-[#007dfc] text-white rounded-lg font-medium hover:bg-[#0069d9] transition-colors"
                              >
                                   Sign Up
                              </button>
                         </div>
                    </nav>
               </div>
          </>
     );
};

export default Navbar;