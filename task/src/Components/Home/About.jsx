import React from 'react'

function About() {
  return (
    <div className="about-section  py-5">
         <hr />
      <h1 className="mb-4 mx-3">About Us</h1>
      <hr />

     <div className="row container about-section align-items-center py-5">
  
  <div className="col-md-6 mb-4 mb-md-0">
    <img 
      src="./Assests/Images/Aboutimage.jpg" 
      alt="About Us" 
      className="img-fluid rounded container" 
    />
  </div>

 
  <div className="col-md-6 d-flex flex-column justify-content-center px-4 px-md-5">
    <p className="about-para">
      Founded in 2003, 50one Design Studio is a multidisciplinary architecture and design practice based in Mumbai, India. With a diverse portfolio spanning residential, commercial, hospitality, and institutional projects, we are committed to creating spaces that are not only aesthetically pleasing but also functionally efficient and environmentally responsible.
    </p>
    <p className="about-para">
      At 50one, we believe that architecture is more than just building structures; it is about shaping experiences and enhancing the quality of life. Our team of passionate architects and designers work collaboratively with clients to understand their vision and translate it into innovative design solutions that reflect their unique identity and aspirations.
    </p>
  </div>
</div>

    </div>
  )
}

export default About