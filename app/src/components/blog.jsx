import aside4 from "../images/aside4.svg";
export default function Blog(){
    return(
        <section id="blog" className="blog">
    <div className="container-fluid">
      <div className="blog-aside">
        <img src={aside4} alt=""/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5>BLOG STORIES</h5>
            <h2>Check Our News</h2>
          </div>
        </div>
        <div id="blog-drag" className="row blog-slider">
          <div className="col-12 col-lg-4 blog-box blog-first">
            <h6>NEW ADVENTURE</h6>
            <p>17 March 2019</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
          </div>
          <div className="col-12 col-lg-4 blog-box">
            <h6>NEW ADVENTURE</h6>
            <p>17 March 2019</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
          </div>
          <div className="col-12 col-lg-4 blog-box">
            <h6>NEW ADVENTURE</h6>
            <p>17 March 2019</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
          </div>
          <div className="col-12 col-lg-4 blog-box hiden-blog hide-blog">

            <h6>NEW ADVENTURE</h6>
            <p>17 March 2019</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
          </div>
          <div className="col-12 col-lg-4 blog-box hiden-blog  hide-blog">
            <h6>NEW ADVENTURE</h6>
            <p>17 March 2019</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
          </div>
          <div className="col-12 col-lg-4 blog-box hiden-blog  hide-blog">
            <h6>NEW ADVENTURE</h6>
            <p>17 March 2019</p>
            <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
          </div>
        </div>
        <button className="hide-me" id="blog-btn">Show More Stories</button>
      </div>
    </div>
  </section>  
    )
}