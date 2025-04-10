import Slide1 from './Hslider/Slide-1';
import Slide2 from './Hslider/slide-2';
import Slide3 from './Hslider/Slide-3';
import Slide4 from './Hslider/Slide-4';
import Slide5 from './Hslider/Slide-5';
import Slide6 from './Hslider/Slide-6';
import './Carousel.css'

function CarouselP() {
  return (
    
    <section className="container">
	<div className="slider-wrapper">
		<div className="slider">
      <Slide1/>
      <Slide2/>
      <Slide3/>
      <Slide4/>
      <Slide5/>
      <Slide6/>
      
		</div>
		<div className="slider-nav">
			<a href="#slide-1"></a>
			<a href="#slide-2"></a>
			<a href="#slide-3"></a>
      <a href="#slide-4"></a>
      <a href="#slide-5"></a>
      <a href="#slide-6"></a>
		</div>
    {/* <div className='heroSec'>
      <p style={{color:"red"}} >This is text</p>
    </div>  */}
	</div>
</section>
  );
}

export default CarouselP;



