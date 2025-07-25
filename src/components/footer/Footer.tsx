import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router";

const socialLinks = [
     {
          icon: <FaX size={14} />,
          bgColor: "bg-gray-800 hover:bg-gray-900",
          iconColor: "text-white",
     },
     {
          icon: <FaFacebook size={14} />,
          bgColor: "bg-blue-600 hover:bg-blue-700",
          iconColor: "text-white",
     },
     {
          icon: <FaInstagram size={14} />,
          bgColor: "bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
          iconColor: "text-white",
     },
     {
          icon: <FaPinterest size={14} />,
          bgColor: "bg-red-600 hover:bg-red-700",
          iconColor: "text-white",
     },
     {
          icon: <FaYoutube size={14} />,
          bgColor: "bg-red-600 hover:bg-red-700",
          iconColor: "text-white",
     },
]

const Footer = () => {
     return (
          <footer className="pb-6 pt-12 px-4 sm:px-8">
               <div className="max-w-7xl mx-auto">
                    {/* Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                         {/* Company Column */}
                         <div>
                              <div className="mb-10">
                                   <div className="mb-4">
                                        <img src="/logo.png" alt="Logo" className="h-11 mb-2" />
                                   </div>
                                   <p className="text-[#222E48]/70 text-lg">
                                        Your partner in NAPLAN success.
                                   </p>
                              </div>
                         </div>
                         <div>
                              <h3 className="font-bold text-lg text-[#222E48] mb-4">Company</h3>
                              <ul className="space-y-2">
                                   <li>
                                        <Link
                                             to="#"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200">
                                             About us
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             to="#"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200">
                                             Contact
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             to="#"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200">
                                             Careers
                                        </Link>
                                   </li>
                              </ul>
                         </div>

                         {/* Resources Column */}
                         <div>
                              <h3 className="font-bold text-lg text-[#222E48] mb-4">Resources</h3>
                              <ul className="space-y-2">
                                   <li>
                                        <Link
                                             to="#"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200">
                                             How it works
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             to="#"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200">
                                             FAQ
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             to="#"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200">
                                             Past Paper
                                        </Link>
                                   </li>
                              </ul>
                         </div>

                         {/* Others Column */}
                         <div>
                              <h3 className="font-bold text-lg text-[#222E48] mb-4">Others</h3>
                              <ul className="space-y-2">
                                   <li>
                                        <Link
                                             to="#"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200">
                                             Privacy policy
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             to="#"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200">
                                             Terms of service
                                        </Link>
                                   </li>
                              </ul>
                         </div>

                         {/* Connect Column */}
                         <div className="col-span-2 md:col-span-1 lg:col-span-2">
                              <h3 className="font-bold text-lg text-[#222E48] mb-4">Connect</h3>
                              <div className="space-y-4">
                                   <div className="flex gap-3">
                                        {socialLinks.map((social, index) => (
                                             <Link
                                                  key={index}
                                                  to="#"
                                                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${social.bgColor} ${social.iconColor} shadow-sm hover:shadow-md`}>
                                                  {social.icon}
                                             </Link>
                                        ))}
                                   </div>
                                   <div>
                                        <a
                                             href="mailto:info@naplanprep.com"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200 block">
                                             info@naplanprep.com
                                        </a>
                                   </div>
                                   <div>
                                        <a
                                             href="tel:+61123456789"
                                             className="text-lg text-[#222E48]/70 hover:text-[#007DFC] transition-colors duration-200 block">
                                             +61 123 456 789
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Bottom Section */}
                    <div>
                         <p className="text-center text-[#222E48]/70">
                              ©Copyright 2025, All Rights Reserved by Creative hub it design &
                              development
                         </p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
