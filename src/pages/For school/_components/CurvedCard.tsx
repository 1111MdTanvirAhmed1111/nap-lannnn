
import './card.css'
interface CurvedCardProps {
    bg: string;
    title: string;
    des: string;
    hoverBg: string;
    hoverIconColor?: string;
}


const CurvedCard = ({ bg, title, des, hoverBg, hoverIconColor }: CurvedCardProps) => {
    return (
        <div className="card-wrapper group">
            <svg className="card" viewBox="0 0 424 358" preserveAspectRatio="none">
                <defs>
                    <clipPath id="card-shape">
                        <path d="M14.7733 18.4271C13.8872 14.6292 16.7734 11 20.6732 11H403.482C407.333 11 410.205 14.5501 409.4 18.3158C404.174 42.7664 387.959 123.234 388.316 178.801C388.655 231.654 404.25 307.965 409.382 331.686C410.197 335.455 407.321 339 403.464 339H20.6913C16.7858 339 13.8962 335.371 14.7929 331.57C20.4292 307.678 37.4358 231.297 37.7461 178.258C38.07 122.894 20.4935 42.9455 14.7733 18.4271Z" />
                    </clipPath>
                </defs>
                <foreignObject width="100%" height="100%" clip-path="url(#card-shape)">
                    <div className={`card-content bg-white ${hoverBg} transition-all duration-300 ease-out`}>
                        <div className={`h-[70px] w-[70px] ${bg} group-hover:bg-white transition-all duration-300 ease-out flex justify-center items-center rounded-xl shadow-[0px_-3px_4px_0px_#00000040_inset]`}>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_12_789)">
                                    <path d="M19.0239 12.4848C18.6843 12.4174 18.3336 12.3813 17.9746 12.3813C15.0086 12.3813 12.5957 14.7943 12.5957 17.7603C12.5957 20.7262 15.0086 23.1392 17.9746 23.1392C20.9406 23.1392 23.3535 20.7262 23.3535 17.7603C23.3535 17.4012 23.3175 17.0505 23.25 16.711L20.0877 19.8733C19.5232 20.4378 18.7728 20.7485 17.9746 20.7485C17.1764 20.7485 16.426 20.4378 15.8615 19.8733C15.2971 19.3089 14.9863 18.5584 14.9863 17.7603C14.9863 16.9621 15.2971 16.2116 15.8615 15.6472L19.0239 12.4848Z" fill='currentColor' className={`text-white ${hoverIconColor} transition-all duration-300 ease-out`} />
                                    <path d="M33.4532 10.7336L31.3101 12.8768C31.0956 13.0913 30.8538 13.2693 30.5928 13.4073C31.0649 14.7725 31.3223 16.2368 31.3223 17.7603C31.3223 25.1202 25.3345 31.1079 17.9746 31.1079C10.6147 31.1079 4.62695 25.1202 4.62695 17.7603C4.62695 10.4003 10.6147 4.4126 17.9746 4.4126C19.4986 4.4126 20.9637 4.67018 22.3291 5.14255C22.4674 4.88133 22.6441 4.63853 22.8583 4.42453L25.0012 2.28163C22.8583 1.30499 20.4791 0.760254 17.9746 0.760254C8.60069 0.760254 0.974609 8.38634 0.974609 17.7603C0.974609 27.1342 8.60069 34.7603 17.9746 34.7603C27.3485 34.7603 34.9746 27.1342 34.9746 17.7603C34.9746 15.2558 34.4299 12.8765 33.4532 10.7336Z" fill='currentColor' className={`text-white ${hoverIconColor} transition-all duration-300 ease-out `} />
                                    <path d="M22.2054 9.30331L22.0238 7.15134C20.7655 6.66911 19.4005 6.40479 17.9746 6.40479C11.7132 6.40479 6.61914 11.4989 6.61914 17.7603C6.61914 24.0216 11.7132 29.1157 17.9746 29.1157C24.236 29.1157 29.3301 24.0216 29.3301 17.7603C29.3301 16.3343 29.0658 14.9694 28.5835 13.711L26.4315 13.5294L24.8521 15.1087C25.1706 15.932 25.3457 16.8259 25.3457 17.7603C25.3457 21.8248 22.0391 25.1313 17.9746 25.1313C13.9101 25.1313 10.6035 21.8248 10.6035 17.7603C10.6035 13.6957 13.9101 10.3892 17.9746 10.3892C18.909 10.3892 19.8029 10.5643 20.6262 10.8828L22.2054 9.30331Z" fill='currentColor' className={`text-white ${hoverIconColor} transition-all duration-300 ease-out `} />
                                    <path d="M23.9784 6.62138L24.2684 10.0579L17.2703 17.056C16.8812 17.4448 16.8812 18.0757 17.2703 18.4645C17.4646 18.6591 17.7196 18.7563 17.9746 18.7563C18.2296 18.7563 18.4846 18.6591 18.6789 18.4645L25.677 11.4664L29.1135 11.7562C29.1415 11.7585 29.1693 11.7598 29.1973 11.7598C29.4603 11.7598 29.714 11.6555 29.9015 11.468L34.1274 7.24187C34.4016 6.96794 34.4919 6.55965 34.3588 6.19545C34.2255 5.83125 33.8932 5.57756 33.5069 5.54514L30.4476 5.28703L30.1897 2.22794C30.157 1.84143 29.9034 1.50914 29.5394 1.37607C29.1752 1.24274 28.7669 1.33327 28.4927 1.60719L24.2669 5.83333C24.0593 6.04085 23.9538 6.32904 23.9784 6.62138Z" fill='currentColor' className={`text-white ${hoverIconColor} transition-all duration-300 ease-out `} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_12_789">
                                        <rect width="34" height="34" fill="white" transform="translate(0.974609 0.760254)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#222E48] group-hover:text-white">{title}</h3>
                        <p className="text-[#222E48]/70 group-hover:text-[#fff]/70 font-medium text-lg">{des}</p>
                    </div>
                </foreignObject>
            </svg>
        </div>

    )
}

export default CurvedCard