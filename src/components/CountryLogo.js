import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const clientLogos = [
  {
    src: "/data/customer/1.png",
    alt: "Techco Client 2",
    title: "Thailand",
  },
  {
    src: "/data/customer/2.png",
    alt: "Techco Client 2",
    title: "Thailand",
  },
  {
    src: "/data/customer/3.png",
    alt: "Techco Client 2",
    title: "Thailand",
  },
  {
    src: "/data/customer/4.png",
    alt: "Techco Client 2",
    title: "Thailand",
  },
  {
    src: "/data/customer/5.png",
    alt: "Techco Client 2",
    title: "Thailand",
  },
  {
    src: "/data/customer/6.png",
    alt: "Techco Client 2",
    title: "Thailand",
  },
  {
    src: "/data/customer/7.png",
    alt: "Techco Client 2",
    title: "Thailand",
  },
  {
    src: "/data/customer/8.png",
    alt: "Techco Client 2",
    title: "Thailand",
  },
];

export default function CountryLogo() {
  return (
    <div className="feature_partners_section">
      <div className="container position-relative">
        <div className="title_text text-white">Our Customers</div>
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
              <div className="client_logo_item">
                <img src={logo.src} alt={logo.alt} style={{ width: "100%" }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
