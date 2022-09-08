import aside from "../images/aside.svg";
import aside2 from "../images/aside2.svg";
import icon1 from "../images/service-icon1.svg";
import icon2 from "../images/service-icon2.svg";
import about from "../images/aboutimg.svg";

export default function About(){
    return(
        <>
 <section id="about-us" className="services">
    <div className="container-fluid">
      <div className="side-img"> 
        <img src={aside} alt=""/>
      </div>
      <div className="side2-img"> 
        <img src={aside2} alt=""/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-4 service-txt">
            <h2>Anything you need,we’ve got you covered</h2>
            <div className="hero-btns service-btn">
              <a data-scroll href="#contact-us">Get in Touch</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="service-box">
              <img src={icon1} alt=""/>
              <h3>Web & Graphic<br/>Design</h3>
              <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="service-box">
              <img src={icon2} alt=""/>
              <h3>Web & App<br/>Development</h3>
              <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-6">
          <img src={about} alt=""/>
        </div>
        <div className="col-12 col-sm-12 col-lg-6">
          <h5>OUR COMPANY</h5>
          <h2>Some Fine<br/>Words About Us</h2>
          <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.Vestibulum ac diam sit amet.Quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}