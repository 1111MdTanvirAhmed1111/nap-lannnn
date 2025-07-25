import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import TestimonialCard from "../Card/TestimonialCard";

const Testimonials = () => {
     const testimonials = [
          {
               id: 1,
               author: "Thomas Shelby",
               content: "This app has been a game changer for our family. Our baby sleeps better, and we have more time to relax.",
               rating: 5,
               authorImage: "/images/author.png",
          },
          {
               id: 2,
               author: "Arthur Shelby",
               content: "A must-have for new parents! The insights provided are invaluable.",
               rating: 4,
               authorImage: "/images/author.png",
          },
          {
               id: 3.5,
               author: "John Doe",
               content: "An essential tool for every parent. Highly recommend!",
               rating: 5,
               authorImage: "/images/author.png",
          },
          {
               id: 4,
               author: "Michael Gray",
               content: "This app has made a world of difference for our family. We can't thank you enough!",
               rating: 5,
               authorImage: "/images/author.png",
          },
          {
               id: 5,
               author: "Sarah Connor",
               content: "A fantastic app that has truly helped us navigate parenthood.",
               rating: 5,
               authorImage: "/images/author.png",
          },
          {
               id: 6,
               author: "Michael Gray",
               content: "This app has made a world of difference for our family. We can't thank you enough!",
               rating: 5,
               authorImage: "/images/author.png",
          },
          {
               id: 7,
               author: "Sarah Connor",
               content: "A fantastic app that has truly helped us navigate parenthood.",
               rating: 5,
               authorImage: "/images/author.png",
          },
     ];

     return (
          <div className="w-full mx-auto px-4 py-6 mt-10 mb-20">
               <h2 className="text-center text-5xl font-bold mb-8 capitalize">
                    What parents <span className="text-[#FF7777]">are saying</span>
               </h2>
               <div className="testimonials py-6">
                    <Swiper
                         modules={[Autoplay]}
                         autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                         }}
                         loop={true}
                         spaceBetween={24}
                         slidesPerView={1}
                         breakpoints={{
                              640: { slidesPerView: 1 },
                              768: { slidesPerView: 2 },
                              1280: { slidesPerView: 3 },
                              1680: { slidesPerView: 4 },
                              1920: { slidesPerView: 5 },

                         }}
                    >
                         {testimonials.map((testimonial) => (
                              <SwiperSlide key={testimonial.id}>
                                   <div className="max-w-[95%] mx-auto h-full">
                                        <TestimonialCard
                                             author={testimonial.author}
                                             content={testimonial.content}
                                             rating={testimonial.rating}
                                             authorImage={testimonial.authorImage}
                                        />
                                   </div>
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>
          </div>
     );
};

export default Testimonials;
