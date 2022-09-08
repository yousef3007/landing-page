export default function Footer(){
    return(
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>SERVICE</h5>
              <h3>CREATIVITY ABOVE</h3>
              <ul className="contact-nav">
                <li><a data-scroll href="#home">Home.</a></li>
                <li><a data-scroll href="#about-us">About Us.</a></li>
                <li><a data-scroll href="#portfolio">Portfolio.</a></li>
                <li><a data-scroll href="#blog">Blog.</a></li>
                <li><a data-scroll href="#contact-us">Contact.</a></li>
              </ul>
              <h6>© 2022 - All Right Reserved</h6>
              <ul className="social">
                <li><a href="#"><i className="icofont-facebook"></i></a></li>
                <li><a href="#"><i className="icofont-twitter"></i></a></li>
                <li><a href="#"><i className="icofont-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}