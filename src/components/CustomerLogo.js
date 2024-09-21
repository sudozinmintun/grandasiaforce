import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const clientLogos = [
  {
    src: "https://cdn-icons-png.flaticon.com/128/330/330455.png",
    alt: "Techco Client 1",
    title: "Singapore",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/330/330447.png",
    alt: "Techco Client 2",
    title: "Thailand",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/630/630691.png",
    alt: "Techco Client 3",
    title: "Malaysia",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/330/330622.png",
    alt: "Techco Client 4",
    title: "Japan",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/7712/7712828.png",
    alt: "Techco Client 5",
    title: "Dubai",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/330/330573.png",
    alt: "Techco Client 5",
    title: "Laos",
  },

  {
    src: "https://cdn-icons-png.flaticon.com/128/330/330526.png",
    alt: "Techco Client 5",
    title: "Combodia",
  },
];

export default function CustomerLogo() {
  return (
    <div className="client_logo_carousel swiper">
      <div className="swiper-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <div className="client_logo_item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
