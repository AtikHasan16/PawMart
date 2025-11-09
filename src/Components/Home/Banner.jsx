import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "../../index.css";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        speed={2000}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-1 bg-cover rounded-2xl p-4 sm:py-10 my-10 flex justify-center items-end bg-center ">
            <div className="text-center space-y-6">
              <h1 className="text-6xl font-bold text-secondary">
                "Find Your Furry Friend Today!"
              </h1>
              <p className="text-xl max-w-xl mx-auto text-gray-400">
                Browse hundreds of adorable pets waiting for their forever
                homes. From playful puppies to gentle giants, your next best
                friend is just a click away.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-2 bg-cover rounded-2xl p-4 sm:py-10 my-10 flex justify-center items-end bg-center ">
            <div className="text-center space-y-6">
              <h1 className="text-6xl font-bold text-secondary">
                Adopt, Don't Shop — Give a Pet a Home.
              </h1>
              <p className="text-xl max-w-xl mx-auto text-gray-400">
                Choosing adoption means giving a second chance to a deserving
                animal. Join the PawMart community and make a difference in a
                pet's life today.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-3 bg-cover rounded-2xl p-4 sm:py-10 my-10 flex justify-center items-end bg-center ">
            <div className="text-center space-y-6">
              <h1 className="text-6xl font-bold text-secondary">
                "Because Every Pet Deserves Love and Care."
              </h1>
              <p className="text-xl max-w-xl mx-auto text-gray-400">
                PawMart connects you with everything your cherished companion
                needs, from nutritious food to fun toys and essential health
                products.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-4 bg-cover rounded-2xl p-4 sm:py-10 my-10 flex justify-center items-end bg-center ">
            <div className="text-center space-y-6">
              <h1 className="text-6xl font-bold text-secondary">
                "More Than a Pet, It's Family"
              </h1>
              <p className="text-xl max-w-xl mx-auto text-gray-400">
                Discover a wide range of loving pets available for adoption and
                support local shops for all your pet care needs. Start your
                journey with PawMart now.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
