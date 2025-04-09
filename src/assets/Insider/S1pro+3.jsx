import './S1pro+3.css'
import MyNav from '../Navbar';
import Footer from '../Footer';
import CardP1 from '../Card1';
const S1prop3 = () => {
    return (
      <>
      <MyNav/>
      <div className="img-1">
        <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_pro_plus_banner_web_v2.webp" alt="" />
        <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1pro_plus_section_web_image_v7.webp" alt="" />
        </div>
        <div className="card-S1-h">
          <h1>Choose your Pro</h1>
          <div className="card-S1">
          </div>
        </div>
        <div className="performance">
          <h1>Performance</h1>
          <h4>Ready. Set. Thrill.</h4>
           <div className="img-perform">
            <div className="img-perform-1">
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_pro_gen3_tenets_performance_web_image_01.webp" alt="" />
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_pro_gen3_tenets_performance_web_image_02.webp" alt="" /></div>
            <div className="img-perform-2">
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_pro_gen3_tenets_performance_web_image_03.webp" alt="" />
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_pro_gen3_tenets_performance_web_image_04.webp" alt="" /></div>
            <div className="img-perform-3">
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_pro_gen3_tenets_performance_web_image_05.webp" alt="" />
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_pro_gen3_tenets_performance_web_image_06.webp" alt="" /></div>
           </div>
           {/* <h5>*Specs mentioned above apply to S1 Pro+ 5.3kWh</h5> */}
        </div>
        <div className="compare">
          <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1pro_gen2_gen3_compare_web_image_v3.webp" alt="" />
        </div>
        <div className="ola-stores">
        <div className="ola-stores-info">
        <h1>Come on Over. Meet us in Banglore</h1>
        <h4>Ola Electric Stores. Because nothing beats a one on one with the S1.</h4>
        <h4>More About Ola Electric Stores </h4>
        {/* <img src="" alt="" /> */}
        </div>
        <div className="ola-stores-card">
                <CardP1  Title="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/experience_center_icon.svg"
                Text="Ola Electric Store, Jayanagar"
                Text2="363, Ground Floor, 10th B Main Road, JayaNagar 3rd Block, Jayanagar, Bangluru, Karnataka 560011"
                B1="Schedule a visit"

                />
                <CardP1 Title="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/experience_center_icon.svg"
                Text="Ola Electric Store, Sadashiva Nagar"
                Text2="CNR Towers, Bellary Road, Sadashiva Nagar, Armane Nagar, Bangluru , Karnataka 560080"
                B1="Schedule a visit"
                />
                <CardP1 Title="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/experience_center_icon.svg"
                Text="Ola Electric Store, Kangeri"
                Text2="#2084,1st Main Road, Stage 1, Kangeri Satellite Town, Bangluru, Karnataka 560060 "
                B1="Schedule a visit"
                />
                <CardP1 Title="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/experience_center_icon.svg"
                Text="Ola Electric Store, Chamrajpet"
                Text2="#148 , 5th Main Road, Chamrajpet, Bangluru, Karnataka 560018"
                B1="Schedule a visit"
                />
        </div>
      </div>
      <div className="olaS1-services">
        <h1>Your Eyes on the Road. <br />
        Ours on your Ola S1</h1>
        <h4>Doorstep service. Pickup and drop service. At your fingertips.</h4>
        <div className="olaS1-service-img">
          <div className="olaS1-Service-img1">
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/s1pro/your_eyes_img1_v2.webp" alt="" />
            <h2>#HYPERSERVICE</h2>
            <h4>Get your S1 serviced faster, easier, better.</h4> <br />
            <h5>More About Roadside Assistance</h5>
          </div>
          <div className="olaS1-Service-img2">
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/s1pro/your_eyes_img2_071123.webp" alt="" />
            <h2>Scooter Insurance</h2>
            <h4>Insurance as smooth as your ride</h4>
            <h5>Purchase Now</h5>
          </div>
          <div className="olaS1-Service-img3">
            <img src="https://cdn.olaelectric.com/sites/evdp/pages/s1pro/your_eyes_img3_071123.webp" alt="" />
            <h2>Warranty.Easy peasy. </h2>
            <h4>Extended warranty of up to 1.25 Lakh Km <br /> with your Ola S1.</h4>
            <h5>Explore Plans</h5>
          </div>
        </div>
      </div>


        <h1>Card 1 Details</h1>
        <p>This is the detailed page for Card 1.</p>
        <div className="footer">
        <Footer/>
      </div>
      </>
    );
  };
  export default S1prop3;