import React, { useState, useRef, useEffect } from "react";
import sparkleUp from "../../assets/icons/sparkle-up.png";
import sparkleDown from "../../assets/icons/sparkle-down.png";
import bookIcon from "../../assets/icons/book.png";
import schoolIcon from "../../assets/icons/school.png";

const VideoPlayer = () => {
     const [isPlaying, setIsPlaying] = useState(false);
     const [currentTime, setCurrentTime] = useState(0);
     const [duration, setDuration] = useState(0);
     const [progress, setProgress] = useState(0);
     const [volume, setVolume] = useState(0.8);
     const [isMuted, setIsMuted] = useState(false);
     const [isFullscreen, setIsFullscreen] = useState(false);
     const videoRef = useRef<HTMLVideoElement>(null);
     const containerRef = useRef<HTMLDivElement>(null);

     // Load video metadata
     useEffect(() => {
          if (videoRef.current) {
               const video = videoRef.current;

               const handleLoadedMetadata = () => {
                    setDuration(video.duration);
               };

               const handleTimeUpdate = () => {
                    setCurrentTime(video.currentTime);
                    setProgress((video.currentTime / video.duration) * 100);
               };

               video.addEventListener("loadedmetadata", handleLoadedMetadata);
               video.addEventListener("timeupdate", handleTimeUpdate);

               return () => {
                    video.removeEventListener("loadedmetadata", handleLoadedMetadata);
                    video.removeEventListener("timeupdate", handleTimeUpdate);
               };
          }
     }, []);

     // Fullscreen change handler
     useEffect(() => {
          const handleFullscreenChange = () => {
               setIsFullscreen(
                    document.fullscreenElement === containerRef.current ||
                    (document as any).webkitFullscreenElement === containerRef.current
               );
          };

          document.addEventListener("fullscreenchange", handleFullscreenChange);
          document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

          return () => {
               document.removeEventListener("fullscreenchange", handleFullscreenChange);
               document.removeEventListener(
                    "webkitfullscreenchange",
                    handleFullscreenChange
               );
          };
     }, []);

     // Play/pause toggle
     const togglePlay = () => {
          if (videoRef.current) {
               if (isPlaying) {
                    videoRef.current.pause();
               } else {
                    videoRef.current.play();
               }
               setIsPlaying(!isPlaying);
          }
     };

     // Seek functionality
     const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (videoRef.current) {
               const newTime = (parseFloat(e.target.value) / 100) * duration;
               videoRef.current.currentTime = newTime;
               setProgress(parseFloat(e.target.value));
          }
     };

     // Volume control
     const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newVolume = parseFloat(e.target.value);
          setVolume(newVolume);
          if (videoRef.current) {
               videoRef.current.volume = newVolume;
          }
     };

     // Toggle mute
     const toggleMute = () => {
          if (videoRef.current) {
               videoRef.current.muted = !isMuted;
               setIsMuted(!isMuted);
          }
     };

     // Toggle fullscreen
     const toggleFullscreen = () => {
          if (!containerRef.current) return;

          if (!isFullscreen) {
               if (containerRef.current.requestFullscreen) {
                    containerRef.current.requestFullscreen();
               } else if ((containerRef.current as any).webkitRequestFullscreen) {
                    (containerRef.current as any).webkitRequestFullscreen();
               }
          } else {
               if (document.exitFullscreen) {
                    document.exitFullscreen();
               } else if ((document as any).webkitExitFullscreen) {
                    (document as any).webkitExitFullscreen();
               }
          }
     };

     // Format time in MM:SS
     const formatTime = (time: number): string => {
          if (isNaN(time)) return "0:00";
          const minutes = Math.floor(time / 60);
          const seconds = Math.floor(time % 60);
          return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
     };

     // Handle keyboard shortcuts
     useEffect(() => {
          const handleKeyDown = (e: KeyboardEvent) => {
               if (!videoRef.current) return;

               switch (e.key) {
                    case " ":
                         togglePlay();
                         e.preventDefault();
                         break;
                    case "f":
                         toggleFullscreen();
                         e.preventDefault();
                         break;
                    case "m":
                         toggleMute();
                         e.preventDefault();
                         break;
                    case "ArrowLeft":
                         videoRef.current.currentTime = Math.max(
                              0,
                              videoRef.current.currentTime - 5
                         );
                         break;
                    case "ArrowRight":
                         videoRef.current.currentTime = Math.min(
                              duration,
                              videoRef.current.currentTime + 5
                         );
                         break;
                    case "ArrowUp":
                         setVolume((prev) => Math.min(1, prev + 0.1));
                         break;
                    case "ArrowDown":
                         setVolume((prev) => Math.max(0, prev - 0.1));
                         break;
                    case "Escape":
                         if (isFullscreen) {
                              toggleFullscreen();
                         }
                         break;
               }
          };

          window.addEventListener("keydown", handleKeyDown);
          return () => {
               window.removeEventListener("keydown", handleKeyDown);
          };
     }, [isPlaying, isMuted, volume, duration, isFullscreen]);

     return (
          <div className="relative w-full max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
               {/* Sparkle Up - Responsive positioning */}
maid
               <div className="absolute -left-4 -top-4 sm:-left-8 sm:-top-8 lg:-left-12 lg:-top-12 z-10 hidden sm:block">
                    <img src={sparkleUp} alt="Sparkle Up" className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32" />
               </div>
               {/* Sparkle Down - Responsive positioning */}
               <div className="absolute -right-4 -bottom-4 sm:-right-8 sm:-bottom-8 lg:-right-12 lg:-bottom-12 z-10 hidden sm:block">
                    <img src={sparkleDown} alt="Sparkle Down" className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32" />
               </div>

               {/* 210K Card - Responsive sizing and positioning */}
               <div className="w-40 sm:w-48 lg:w-56 h-24 sm:h-28 lg:h-32 rounded-2xl flex justify-center items-center flex-col absolute shadow-2xl top-12 right-0 sm:top-16 lg:top-20 translate-x-1/3 sm:translate-x-1/2 bg-white z-10 hidden sm:block">
                    <div
                         className="absolute top-1 left-2 -translate-x-1/2 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-[#ffa558] flex justify-center items-center shadow-md rounded-full"
                         style={{ filter: "drop-shadow(0px 4px 33.5px rgba(4, 65, 36, 0.15))" }}
                    >
                         <img src={bookIcon} alt="Book Icon" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                    </div>
                    <div className="flex flex-col justify-center">
                         <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1aa246]">210K</span>
                         <span className="text-sm sm:text-base font-medium">Different Subjects</span>
                    </div>
               </div>
               {/* 150K Card - Responsive sizing and positioning */}
               <div className="w-48 sm:w-56 lg:w-64 h-24 sm:h-28 lg:h-32 rounded-2xl flex justify-center items-center flex-col shadow-2xl absolute bottom-12 left-0 sm:bottom-16 lg:bottom-20 -translate-x-1/3 sm:-translate-x-1/2 bg-white z-10 hidden sm:block">
                    <div className="relative h-full w-full flex items-center gap-2 sm:gap-3 lg:gap-4 justify-center">
                         <div
                              className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-[#D9F49B] shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)] rounded-lg flex justify-center items-center"
                         >
                              <img src={schoolIcon} alt="School Icon" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                         </div>
                         <div className="flex flex-col justify-center">
                              <span className="text-lg sm:text-xl lg:text-2xl text-[#e0b80b] font-bold">150K</span>
                              <span className="text-sm sm:text-base font-medium">Experienced Tutor</span>
                         </div>
                    </div>
               </div>

               <div
                    ref={containerRef}
                    className="w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
               >
                    <div className="relative group">
                         {/* Video container */}
                         <div className="relative w-full aspect-video bg-black">
                              <video
                                   ref={videoRef}
                                   className="w-full h-full object-contain"
                                   poster="/images/intro-thumbnail.png"
                              >
                                   <source src="/videos/intro.mp4" type="video/mp4" />
                                   Your browser does not support the video tag.
                              </video>

                              {/* Central play button */}
                              {!isPlaying && (
                                   <button
                                        onClick={togglePlay}
                                        className="absolute inset-0 flex items-center justify-center w-full h-full group-hover:opacity-100 opacity-90 transition-opacity"
                                   >
                                        <div className="bg-black/40 rounded-full p-3 sm:p-4 lg:p-6 backdrop-blur-sm">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-white"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                             >
                                                  <path
                                                       fillRule="evenodd"
                                                       d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                       clipRule="evenodd"
                                                  />
                                             </svg>
                                        </div>
                                   </button>
                              )}
                         </div>

                         {/* Controls overlay - Always visible on mobile */}
                         <div className="absolute bottom-0 left-0 z-20 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 lg:p-5 opacity-100 md:group-hover:opacity-100 md:opacity-0 transition-opacity">
                              {/* Progress bar */}
                              <div className="flex items-center mb-2 sm:mb-3">
                                   <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={progress}
                                        onChange={handleSeek}
                                        className="w-full h-1 sm:h-1.5 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 sm:[&::-webkit-slider-thumb]:h-4 sm:[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                                   />
                              </div>

                              <div className="flex items-center justify-between">
                                   <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                                        {/* Play/Pause button - Touch-friendly */}
                                        <button
                                             onClick={togglePlay}
                                             className="text-white w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center"
                                        >
                                             {isPlaying ? (
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-5 w-5 sm:h-6 sm:w-6"
                                                       viewBox="0 0 20 20"
                                                       fill="currentColor"
                                                  >
                                                       <path
                                                            fillRule="evenodd"
                                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                       />
                                                  </svg>
                                             ) : (
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-5 w-5 sm:h-6 sm:w-6"
                                                       viewBox="0 0 20 20"
                                                       fill="currentColor"
                                                  >
                                                       <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                            clipRule="evenodd"
                                                       />
                                                  </svg>
                                             )}
                                        </button>

                                        {/* Volume control - Touch-friendly mute button */}
                                        <div className="flex items-center space-x-2">
                                             <button
                                                  onClick={toggleMute}
                                                  className="text-white w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center"
                                             >
                                                  {isMuted || volume === 0 ? (
                                                       <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4 sm:h-5 sm:w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                       >
                                                            <path
                                                                 fillRule="evenodd"
                                                                 d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                                                                 clipRule="evenodd"
                                                            />
                                                       </svg>
                                                  ) : (
                                                       <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4 sm:h-5 sm:w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                       >
                                                            <path
                                                                 fillRule="evenodd"
                                                                 d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 evoke-1.415 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z"
                                                                 clipRule="evenodd"
                                                            />
                                                       </svg>
                                                  )}
                                             </button>
                                             <input
                                                  type="range"
                                                  min="0"
                                                  max="1"
                                                  step="0.01"
                                                  value={volume}
                                                  onChange={handleVolumeChange}
                                                  className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 sm:[&::-webkit-slider-thumb]:h-3 sm:[&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                                             />
                                        </div>

                                        {/* Time display */}
                                        <div className="text-white text-xs sm:text-sm lg:text-base font-mono">
                                             {formatTime(currentTime)} / {formatTime(duration)}
                                        </div>
                                   </div>
                                   {/* Fullscreen button - Touch-friendly */}
                                   <button
                                        onClick={toggleFullscreen}
                                        className="text-white w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center"
                                   >
                                        {isFullscreen ? (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-4 w-4 sm:h-5 sm:w-5"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                             >
                                                  <path
                                                       fillRule="evenodd"
                                                       d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A套装 5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                                       clipRule="evenodd"
                                                  />
                                             </svg>
                                        ) : (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-4 w-4 sm:h-5 sm:w-5"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                             >
                                                  <path
                                                       fillRule="evenodd"
                                                       d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 9a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                                                       clipRule="evenodd"
                                                  />
                                             </svg>
                                        )}
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default VideoPlayer;