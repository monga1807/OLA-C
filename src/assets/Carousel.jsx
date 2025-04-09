import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function CarouselP() {
  return (
    // <div className="parent">
    // <Carousel className='carousel'
    // data-bs-theme="dark"
    // >
    //   <Carousel.Item className='c-item'>
    //     <img
    //       className='c-image'
    //       // "d-block w-100"
    //       src="https://cdn.olaelectric.com/sites/evdp/pages/home/hp_banner_web_image_180325.webp"
    //     //   src="holder.js/800x400?text=First slide&bg=f5f5f5"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption className='c-caption'>
    //       <h5>First slide label</h5>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item className='c-item'>
    //     <img
    //       className= 'c-image'
    //       // "d-block w-100"
    //       src="https://cdn.olaelectric.com/sites/evdp/pages/bike/roadster_x/rodster_x_banner_web_image.webp"
    //     //   src="holder.js/800x400?text=Second slide&bg=eee"
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption className='c-caption'>
    //       <h5>Second slide label</h5>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item className='c-item'>
    //     <img
    //       className= 'c-image'
    //       // "d-block w-100"
    //       src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/hp_gen3_banner_web_image_03.webp"
    //     //   src="holder.js/800x400?text=Third slide&bg=e5e5e5"
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption className='c-caption'>
    //       <h5>Third slide label</h5>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
      
    // </Carousel>
    // <div class="slider-nav">
		// 	<a href="#slide-1"></a>
		// 	<a href="#slide-2"></a>
		// 	<a href="#slide-3"></a>
		// </div>
    // </div>
    <section className="container">
	<div className="slider-wrapper">
		<div className="slider">
			<img id="slide-1" src="https://cdn.olaelectric.com/sites/evdp/pages/home/hp_banner_web_image_180325.webp" />
			<img id="slide-2" src="https://cdn.olaelectric.com/sites/evdp/pages/bike/roadster_x/rodster_x_banner_web_image.webp" />
			<img id="slide-3" src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/hp_gen3_banner_web_image_03.webp"/>
      <img id="slide-4" src="https://cdn.olaelectric.com/sites/evdp/pages/gig/home_banner_gig_web_image_v2.webp"/>
      <img id="slide-5" src="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_banner_hyperservices_web_v3.webp"/>
		</div>
		{/* <div className="slider-nav">
			<a href="#slide-1"></a>
			<a href="#slide-2"></a>
			<a href="#slide-3"></a>
      <a href="#slide-4"></a>
      <a href="#slide-5"></a>
		</div> */}
    {/* <div className='heroSec'>
      <p style={{color:"red"}} >This is text</p>
    </div>  */}
	</div>
</section>
  );
}

export default CarouselP;



