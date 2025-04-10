import './Slide-1.css'
import { GiHamburgerMenu } from "react-icons/gi";


const Slide1 = () => {
    return (
      <div className='Slide1'>
        <h1>OLA</h1>
        <GiHamburgerMenu className='burger-icon' />
        {/* <div className='S1pro3-head'>Introducing</div> */}
        {/* <div className="S1pro3-img">
          <img src="https://cdn.olaelectric.com/sites/evdp/pages/home/home_banner_roadster_x.webp" alt="" />
        </div> */}
        <div className='S1pro3-head-2'>
          <h1>Get up to ₹15,000 off on the S1 range1*</h1>
        </div>
        <p>Up to 320km IDC range & 141kmph top speed. Ride without limits.</p>
        <div className="Slide1-buttons">
          <button className='buttons-b-b1'> Explore S1 X </button>
          <button className='buttons-b-b2'>Book Now </button>
        </div>
        
      </div>
    );
  };
  export default Slide1;