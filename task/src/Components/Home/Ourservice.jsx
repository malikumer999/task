import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



function Ourservice() {
  const services = [
    {
      id: "01",
      title: "Residential Design",
      desc: "Custom homes and extensions that respond to your lifestyle and landscape.",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994", // sample image
    },
    {
      id: "02",
      title: "Commercial Design",
      desc: "Innovative commercial spaces that balance functionality and aesthetic appeal.",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    },
    {
      id: "03",
      title: "Interior Design",
      desc: "Tailored interiors that reflect personality, comfort, and sophistication.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];

  return (
    <div className="ourservice-section container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="service-heading">Our Services</h2>
          <p className="service-text">
            From concept to completion, we craft spaces that unite form and
            function. Our process blends creativity, precision, and
            collaboration — delivering results that stand the test of time.
          </p>
        </div>

        <div className="col-md-6">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={40}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="ourservice-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="service-card">
                  <div className="service-number">{service.id}</div>
                  <div className="service-content">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="service-image"
                    />
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Ourservice;
