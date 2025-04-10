import './Slide-3.css'


const Slide3 = () => {
    return (
      <div className='Slide3'>
        <h1>OLA</h1>
        <div className='Slide3-head'>Introducing</div>
        <div className="S1pro3-img">
          <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1pro_plus_logo.svg" alt="" />
        </div>
        <div className='S1pro3-head-2'>
          <h1>Meet India's most powerful scooter</h1>
        </div>
        {/* <p>starting at an introductory price of ₹84,999</p> */}
        <div className="S1pro3-buttons">
          <button className='buttons-b-b1'> Explore S1 Pro+</button>
          <button className='buttons-b-b2'>Book Now </button>
        </div>
      </div>
    );
  };
  export default Slide3;