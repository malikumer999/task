import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function PanoramaSlider() {
  const images = [
    "https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/03/22/07/52/lizard-7868932_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/05/18/10/52/buick-1400243_1280.jpg"
  ];

  return (
    <div style={{ padding: "50px 0", background: "#111" }}>
      <hr/>
      <h1 className=" mx-3 text-white mb-4">Our Work</h1>
<hr/>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={window.innerWidth < 768 ? 1 : 3} 
        coverflowEffect={{
          rotate: 50,       
          stretch: 0,       
          depth: 300,      
          modifier: 1,
          slideShadows: true
        }}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "400px",
              height: "250px",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>


  <div className="d-flex justify-content-center mt-5">
     <div className="project-card">
      <div className="card-header">
        <h2 className="project-title">Project Name</h2>
        <span className="project-date">Aug 02, 2023</span>
      </div>

      <p className="project-location">
        <strong>Location:</strong> Sydney
      </p>

      <p className="project-description">
        This project redefines urban living through simplicity and thoughtful
        proportions.
      </p>
      <p className="project-description">
        Every detail, from facade articulation to interior flow, is designed
        around human experience.
      </p>
      <p className="project-description">
        Natural light, muted tones, and spatial balance create an atmosphere of
        calm sophistication.
      </p>

      <div className="card-footer">
        <a href="/" className="view-detail">
          View Detail →
        </a>
      </div>
    </div>
  </div>

    </div>
  );
}

export default PanoramaSlider;
