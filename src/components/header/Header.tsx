import { ChevronDown, Mail, Phone, Search, X, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ButtonOutline from "../button/ButtonOutline";
import ButtonCircle from "../button/ButtonCircle";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";

const Header = () => {
     const [showSearchInput, setShowSearchInput] = useState(false);
     const [searchQuery, setSearchQuery] = useState("");
     const [showCategories, setShowCategories] = useState(false);
     const [mobileNavOpen, setMobileNavOpen] = useState(false);
     const dropdownRef = useRef<HTMLDivElement>(null);
     const searchRef = useRef<HTMLFormElement>(null);
     const navigate = useNavigate();

     // Sample categories data
     const categories = [
          "Mathematics",
          "English",
          "Science",
          "History",
          "Geography",
          "Art",
          "Music",
          "Technology",
          "Languages",
          "Professional Development",
     ];

     // Close dropdown when clicking outside
     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setShowCategories(false);
               }
               if (
                    searchRef.current &&
                    !searchRef.current.contains(event.target as Node) &&
                    searchQuery === ""
               ) {
                    setShowSearchInput(false);
               }
          };

          document.addEventListener("mousedown", handleClickOutside);
          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
          };
     }, [searchQuery]);

     const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (searchQuery.trim()) {
               console.log("Searching for:", searchQuery);
               alert(`Searching for: ${searchQuery}`);
               setShowSearchInput(false);
          }
     };

     return (
          <header className="w-full flex flex-col items-center justify-between h-auto md:h-[210px] relative overflow-x-clip">
               {/* Background gradient and blur effect */}
               <div
                    className="absolute w-[460px] h-[460px] -left-[105px] -top-[132px] bg-[#E6700B] opacity-20 blur-[150px] hidden md:block"
                    style={{ filter: "blur(150px)" }}
               />
               <div
                    className="absolute w-[460px] h-[460px] -right-[105px] -top-[132px] bg-[#007dfc] opacity-20 blur-[150px] hidden md:block"
                    style={{ filter: "blur(150px)" }}
               />

               {/* top header - hidden on mobile */}
               <div className="h-[50px] w-full bg-gradient-to-l from-[rgba(0,125,252,0.25)] to-[rgba(230,112,11,0.25)] hidden md:flex items-center justify-center">
                    <div className="flex justify-between items-center text-[#222E48]/70 w-full max-w-[1062px] px-4 font-light">
                         <div className="flex items-center">
                              <span className="mr-2">
                                   <Mail size={16} />
                              </span>
                              Contact an advisor
                         </div>
                         <div className="text-center px-2">NAPLAN - The National Assessment Program - Literacy and Numeracy</div>
                         <div className="flex items-center">
                              <span className="mr-2">
                                   <Phone size={16} />
                              </span>
                              (308) 555-0121
                         </div>
                    </div>
               </div>

               {/* main header */}
               <div className="h-16 w-full max-w-[1062px] p-4 flex items-center justify-between">
                    {/* Mobile menu button */}
                    <button
                         className="md:hidden text-[#007dfc] mr-2"
                         onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    >
                         <Menu size={24} />
                    </button>

                    {/* Desktop search/categories */}
                    <div
                         className="hidden md:flex relative w-[230px] h-[46px] px-4 md:px-6 py-2.5 rounded-[100px] bg-[#007dfc]/10 items-center justify-between"
                         ref={dropdownRef}>
                         {showSearchInput ? (
                              <form onSubmit={handleSearch} className="w-full" ref={searchRef}>
                                   <div className="flex items-center">
                                        <input
                                             type="text"
                                             value={searchQuery}
                                             onChange={(e) => setSearchQuery(e.target.value)}
                                             placeholder="Search..."
                                             className="w-full bg-transparent outline-none text-sm"
                                             autoFocus
                                        />
                                        {searchQuery && (
                                             <button
                                                  type="button"
                                                  className="text-[#007dfc] ml-2"
                                                  onClick={() => setSearchQuery("")}>
                                                  <X size={18} />
                                             </button>
                                        )}
                                   </div>
                              </form>
                         ) : (
                              <>
                                   <div
                                        className="flex items-center gap-2 justify-center cursor-pointer"
                                        onClick={() => setShowCategories(!showCategories)}>
                                        Categories
                                        <span>
                                             <ChevronDown size={16} />
                                        </span>
                                   </div>
                                   {showCategories && (
                                        <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg z-10 py-2 max-h-60 overflow-y-auto">
                                             {categories.map((category, index) => (
                                                  <div
                                                       key={index}
                                                       className="px-4 py-2 hover:bg-[#007dfc]/10 cursor-pointer text-sm"
                                                       onClick={() => {
                                                            console.log("Selected category:", category);
                                                            setShowCategories(false);
                                                       }}>
                                                       {category}
                                                  </div>
                                             ))}
                                        </div>
                                   )}
                                   <Search
                                        className="text-[#007dfc] cursor-pointer"
                                        onClick={() => {
                                             setShowSearchInput(true);
                                             setShowCategories(false);
                                        }}
                                        size={18}
                                   />
                              </>
                         )}
                    </div>

                    {/* Logo - centered on mobile */}
                    <div className="flex-shrink-0 items-center mx-auto md:mx-0">
                         <img
                              src="/logo.png"
                              alt="Logo"
                              className="h-[46px] object-contain"
                              onError={(e) => {
                                   (e.target as HTMLImageElement).style.display = "none";
                              }}
                         />
                    </div>

                    

                    {/* Mobile search button */}
                    <button
                         className="md:hidden text-[#007dfc] ml-2"
                         onClick={() => setShowSearchInput(true)}
                    >
                         <Search size={24} />
                    </button>

                    {/* Buttons - hidden on mobile */}
                    <div className="hidden md:flex justify-between items-center gap-1">
                         <ButtonOutline type="button" btnText="Login" onClick={() => navigate("/login")} />
                         <ButtonCircle onClick={() => navigate("/login")} />
                    </div>
               </div>

               {/* Mobile search bar */}
               {showSearchInput && (
                    <div className="md:hidden w-full px-4 py-2 bg-white border-t">
                         <form onSubmit={handleSearch} className="flex w-full" ref={searchRef}>
                              <input
                                   type="text"
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)}
                                   placeholder="Search..."
                                   className="w-full bg-gray-100 rounded-l-lg px-4 py-2 outline-none"
                                   autoFocus
                              />
                              <button
                                   type="button"
                                   className="bg-gray-200 px-4 py-2 rounded-r-lg"
                                   onClick={() => {
                                        setSearchQuery("");
                                        setShowSearchInput(false);
                                   }}
                              >
                                   <X size={20} />
                              </button>
                         </form>
                    </div>
               )}

               {/* Navbar */}
               <Navbar mobileOpen={mobileNavOpen} setMobileOpen={setMobileNavOpen} />
          </header>
     );
};

export default Header;