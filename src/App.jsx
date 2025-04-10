import './App.css'
import MyNav from './assets/Navbar'
import CarouselP from './assets/Carousel'
import CardP from './assets/Card'
import CarousP from './assets/Carous'
import Footer from './assets/Footer'
import CardP1 from './assets/Card1'
import { BrowserRouter as Router, Routes, Route, useNavigate, Scripts } from "react-router-dom";
import S1prop3 from './assets/Insider/S1pro+3'
import S1Air from './assets/Insider/S1Air'
import S1X from './assets/Insider/S1X'
import S1X3 from './assets/Insider/S1X3'
import S1Xp3 from './assets/Insider/S1X+3'
import S1Z from './assets/Insider/S1Z'
import S1pro from './assets/Insider/S1pro'
import S1pro3 from './assets/Insider/S1pro3'
import Roadster from './assets/Insider/Roadster'
import RoadsterP from './assets/Insider/RoadsterP'
import RoadsterX from './assets/Insider/RoadsterX'
import RoadsterXp from './assets/Insider/RoadsterX+'
import Gig from './assets/Insider/Gig'
import Gigp from './assets/Insider/Gig+'

import Data from './Data.json'
import DetailCard from './assets/Card'
import CardP2 from './assets/Card2'
import React, { useEffect } from "react";





const Home = () => {
        const navigate = useNavigate();
        useEffect(() => {
                const script = document.createElement("script");
                script.src = "//code.tidio.co/cir9waybic2wtbnegnuzdn4gp4rfabo6.js";
                script.async = true;
                document.body.appendChild(script);
                
                return () => {
                    document.body.removeChild(script); // Cleanup on unmount
                };
            }, []);
              
        return (
                <>
                        <MyNav />
                        <CarouselP />
                      
                                {/* <img src="https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/chat.svg" alt="" className="intersted-card" onClick={openChat} /> */}
                       

                        <div className="card-s1-h">
                                <h1>Introducing Ola S1 3rd Gen portfolio</h1>
                                <div className="card-s1">
                                        {Data.Card1 && Data.Card1.map((item, index) => {
                                                {/* {Object.keys(Data).map((cardkey,cardIndex) =>{ */}
                                                // console.log(item.image , index, 'Get itsms')
                                                return <>
                                                        <DetailCard
                                                                key={index}
                                                                image={item.image}
                                                                title={item.title}
                                                                text={item.text}
                                                                text2={item.text2}
                                                                text3={item.text3}
                                                                text4={item.text4}
                                                                text5={item.text5}
                                                                b1={item.b1}
                                                                b2={item.b2}
                                                                onClick={() => navigate(item.onclick)}
                                                        />
                                                </>




                                        })



                                                //       <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1pro_gen3_web_image_v2.webp' 
                                                //               Title='https://cdn.olaelectric.com/sites/evdp/pages/gen3/logo/ola_s1_pro_3rd_gen_logo_v1.svg' 
                                                //               Text="Pure Power. Peak Performance"  Text2="Starting at" Text3="₹3,847/month" Text4="OR"
                                                //               Text5="₹1,29,999" B1="Explore S1 Pro" B2="Buy Now" onClick={() => navigate("/S1pro3")}/>

                                                //       <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1x_plus_gen3_web_image_v2.webp' 
                                                //               Title= 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/logo/ola_s1_x_plus_3rd_gen_logo_v1.svg' 
                                                //               Text="Scooter for every Indian"  Text2="Starting at" Text3="₹3,613/month" Text4="OR"
                                                //               Text5="₹1,11,999" B1="Explore S1 X+" B2="Buy Now" onClick={() => navigate("/S1Xp3")}/>

                                                //       <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1x_gen3_web_image_v2.webp' 
                                                //               Title= 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/logo/ola_s1_x_3rd_gen_logo_v1.svg' 
                                                //               Text="Upgrade to electric with style"  Text2="Starting at" Text3="₹2,676/month" Text4="OR"
                                                //               Text5="₹79,999" B1="Explore S1 X" B2="Buy Now" onClick={() => navigate("/S1X3")}/>
                                        }
                                </div>
                        </div>
                        <div className="card-s2-h">
                                <h1>Choose from our 2nd Gen portfolio with exciting offers</h1>
                                <div className="card-s2">
                                {Data.Card2 && Data.Card2.map((item, index) => {
                                                
                                                return <>
                                                        <DetailCard
                                                                key={index}
                                                                image={item.image}
                                                                title={item.title}
                                                                text={item.text}
                                                                text2={item.text2}
                                                                text3={item.text3}
                                                                text4={item.text4}
                                                                text5={item.text5}
                                                                b1={item.b1}
                                                                b2={item.b2}
                                                                onClick={() => navigate(item.onclick)}
                                                        />
                                                </>




                                        })}

                                         
                                        {/* <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_ipo_ola_s1_pro_web_271123.webp'
                                                title='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/ipo_home_featured_ola_s1_pro_logo.svg'
                                                text="195km Range | 0-40 km/h in 2.6 sec" text2="Starting at" text3="₹3,299/month" text4="OR"
                                                text5="₹1,34,999" b1="Explore S1 Pro " b2="Video Brochure" b3="view in 360'" onClick={() => navigate("/S1pro")} />

                                        <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_ipo_ola_s1_air_web_271123.webp'
                                                title='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/ipo_home_featured_ola_s1_air_logo.svg'
                                                text="151km Range | 0-40 km/h in 3.3 sec" text2="Starting at" text3="₹2,699/month" text4="OR"
                                                text5="₹1,07,999" b1="Explore S1 Air" b2="Video Brochure" b3="view in 360'" onClick={() => navigate("/S1Air")} />

                                        <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_ipo_ola_s1_x_web_271123.webp'
                                                Title='https://cdn.olaelectric.com/sites/evdp/icons/icon_s1x_212121.svg'
                                                Text="193km Range | 0-40 km/h in 3.3 sec" Text2="Starting at" Text3="₹1,899/month" Text4="OR"
                                                Text5="₹79,999" B1="Explore S1 X" B2="Video Brochure" B3="view in 360'" onClick={() => navigate("/S1X")} />

                                        <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/gig/s1z_product_image_product_section.webp'
                                                Title='https://cdn.olaelectric.com/sites/evdp/pages/gig/ola_s1z_logo_v2.svg'
                                                Text="Up to 146km Range | Up to 2 portable batteries" Text2="Introductory Price"
                                                Text5="₹59,999" B1="Explore S1 Z" B2="Video Brochure" B3="view in 360'" onClick={() => navigate("/S1Z")} /> */}
                                </div>
                        </div>
                        <div className="card-s3-h">
                                <h1>The future of motorcycling is here</h1>
                                <div className="card-s3">
                                {Data.Card3 && Data.Card3.map((item, index) => {
                                                
                                                return <>
                                                        <DetailCard
                                                                key={index}
                                                                image={item.image}
                                                                title={item.title}
                                                                text={item.text}
                                                                text2={item.text2}
                                                                text3={item.text3}
                                                                text4={item.text4}
                                                                text5={item.text5}
                                                                b1={item.b1}
                                                                b2={item.b2}
                                                                onClick={() => navigate(item.onclick)}
                                                        />
                                                </>




                                        })}
                                        {/* <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/bike/mrx_roadster_home_web_image_v6.webp'
                                                Title='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/future_of_motorcycle_name_roadster_x_web.svg'
                                                Text="Upgrade to electric with style" Text2="Starting at"
                                                Text5="₹84,999" B1="Explore Roadster X " B2="Book Now" onClick={() => navigate("/RoadsterX")} />

                                        <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/future_of_motorcycle_roadster_x_plus_web.webp'
                                                Title='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/future_of_motorcycle_name_roadster_x_plus_web.svg'
                                                Text="India's ultimate electric upgrade" Text2="Starting at"
                                                Text5="₹1,14,999" B1="Explore Roadster X+" B2="Book Now" onClick={() => navigate("/RoadsterXp")} />

                                        <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/future_of_motorcycle_roadster_web_v2.webp'
                                                Title='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/future_of_motorcycle_name_roadster_web.svg'
                                                Text="City limit, not your limits." Text2="Starting at"
                                                Text5="₹1,04,999" B1="Explore Roadster " B2="Reserve for ₹999" onClick={() => navigate("/Roadster")} />

                                        <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/future_of_motorcycle_roadster_pro_web_v2.webp'
                                                Title='https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/future_of_motorcycle_name_roadster_pro_web.svg'
                                                Text="Tested for the road. And the racetrack." Text2="Starting at"
                                                Text5="₹1,99,999" B1="Explore Roadster Pro" B2="Reserve for ₹999" onClick={() => navigate("/RoadsterP")} /> */}
                                </div>
                        </div>
                        <div className="card-s4-h">
                                <h1>Your reliable partner for every gig</h1>
                                <div className="card-s4">

                                {Data.Card4 && Data.Card4.map((item, index) => {
                                                
                                                return <>
                                                        <DetailCard
                                                                key={index}
                                                                image={item.image}
                                                                title={item.title}
                                                                text={item.text}
                                                                text2={item.text2}
                                                                text3={item.text3}
                                                                text4={item.text4}
                                                                text5={item.text5}
                                                                b1={item.b1}
                                                                b2={item.b2}
                                                                onClick={() => navigate(item.onclick)}
                                                        />
                                                </>
                                        })}
                                        {/* <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/gig/ola_gig_product_web_image.webp'
                                                Title='https://cdn.olaelectric.com/sites/evdp/pages/gig/ola_gig_logo_v2.svg'
                                                Text="112km Range | 25 kmph top speed | Single portable battery" Text2="Introductory price"
                                                Text5="₹39,999" B1="Explore Gig " B2="Reserve for ₹499" onClick={() => navigate("/Gig")} />

                                        <CardP image='https://cdn.olaelectric.com/sites/evdp/pages/gig/ola_gig_plus_product_web_image.webp'
                                                Title='https://cdn.olaelectric.com/sites/evdp/pages/gig/ola_gig_plus_logo_v2.svg'
                                                Text="Up to 157km Range | 45 kmph top speed | Up to 2 portable batteries" Text2="Introductory price"
                                                Text5="₹49,999" B1="Explore Gig+" B2="Reserve for ₹499" onClick={() => navigate("/Gigp")} /> */}
                                </div>
                                <h5>*Price for single battery option</h5>

                        </div>
                        <div className="Carous">
                                <CarousP />
                        </div>
                        <br />
                        <div className="feature">
                                <div className="f-img">
                                        <h1 className="f-img-h">The all-new Gen-3 platform</h1>
                                        <img src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/hp_gen2_sankalp_web_image_v2.webp" className="f-img-1" alt="" />
                                </div>
                        </div>
                        <div className="f2-img">
                                <img src="https://cdn.olaelectric.com/sites/evdp/pages/service/hyperservice_logo_web_image.webp" className="f-img-1" alt="" />
                                <img src="https://cdn.olaelectric.com/sites/evdp/pages/service/home_hyperservices_img_web_v2.webp" className="f-img-1" alt="" />
                        </div>
                        <div className="ola-stores">
                                <div className="ola-stores-info">
                                        <h1>Come on Over. Meet us in Banglore</h1>
                                        <h4>Ola Electric Stores. Because nothing beats a one on one with the S1.</h4>
                                        <h6>More About Ola Electric Stores </h6>
                                        {/* <img src="" alt="" /> */}
                                </div>
                                <div className="ola-stores-card">
                                        <CardP1 Title="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/experience_center_icon.svg"
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
                        <div className="ola-plant">
                                <h2>Making India the</h2>
                                <h2>Global EV hub of the world</h2>
                                <h4>A hub for manufacturing quality EVs and to build a</h4>
                                       <h4> robust EV supply chain ecosystem.</h4>
                                       <p>Learn more </p>
                                <img src="https://cdn.olaelectric.com/sites/evdp/pages/homeall/pre_prod_home_all_global_ola_ev_web.webp" className='ola-plant-img' alt="" />
                                <div className="ola-factories">
                                        <div className="ola-factories-1">
                                                <img src="https://cdn.olaelectric.com/sites/evdp/pages/homeall/pre_prod_home_all_futurefacctory_web.webp" className="ola-factories-1-img" alt="" />
                                                <h2>Futurefactory</h2>
                                                <h4>Largest integrated and automated E2W manufacturing plant in India.</h4>
                                                <p>Learn more </p>
                                        </div>
                                        <div className="ola-factories-2">
                                                <img src="https://cdn.olaelectric.com/sites/evdp/pages/homeall/pre_prod_home_all_gigafactory_web.webp" className="ola-factories-2-img" alt="" />
                                                <h2>Gigafactory</h2>
                                                <h4>India's big leap in building the future of energy.</h4>
                                                <p>Learn more </p>
                                        </div>
                                </div>
                        </div>
                        <div className="enjoy-image">
                                <h1 className="e-img-h">Our Community Drives Us</h1>
                                <div className="e-img">

                                        <div className="e-img-1">
                                                <img src="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_1_v1.webp" alt="" /></div>
                                        <div className="e-img-2-3-4">
                                                <div className="e-img-2-3">
                                                        <div className="e-img-2">
                                                                <img src="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_2_v1.webp" alt="" /></div>
                                                        <div className="e-img-3">
                                                                <img src="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_3_v1.webp" alt="" /></div></div>
                                                <div className="e-img-4">
                                                        <img src="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_4_v1.webp" alt="" /></div></div>
                                        <div className="e-img-5">
                                                <img src="https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_5_v1.webp" alt="" /></div>
                                </div>
                        </div>
                        <div className="News">
                                <h2>Watch the Electric  </h2>
                                <h2>Revolution Unfold</h2>
                                <div className="news-column">
                                        <div className="column1">
                                        <CardP2 image="https://cdn.olaelectric.com/sites/evdp/pages/news_room/ba_news.webp"
                                        title="2023"  text="Bhavish Aggarwal recognized on the inaugural TIME100 Climate List"/>
                                        {/* <hr /> */}
                                        <CardP2 image='https://cdn.olaelectric.com/sites/evdp/pages/news_room/logo/cnbc(1).webp'
                                        title="2023" text="Ola electric rolls out last year end offers on S1 Air and S1 Pro"/>
                                        </div>
                                        <div className="column2">
                                        <CardP2 image="https://cdn.olaelectric.com/sites/evdp/pages/news_room/logo/hd_auto.webp"
                                        title="2023" text="Ola End Ice Age, Part 1 event: Bhavish Aggarwal launches EV scooters and ..."/>
                                        {/* <hr /> */}
                                        <CardP2 image="https://cdn.olaelectric.com/sites/evdp/pages/news_room/logo/inc42.webp"
                                        title="2023" text="Ola Continues To Rule 2-Wheeler EV Space In Nov"/>       
                                        </div>
                                </div>
                                <h4>Read More</h4>
                        </div>
                        <div className="footer">
                                <Footer />
                        </div>
                </>
        )

};


function App() {
        return (
                <Router>
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/S1prop3" element={<S1prop3 />} />
                                <Route path="/S1pro3" element={<S1pro3 />} />
                                <Route path="/S1pro" element={<S1pro />} />
                                <Route path="/S1Air" element={<S1Air />} />
                                <Route path="/S1X3" element={<S1X3 />} />
                                <Route path="/S1X" element={<S1X />} />
                                <Route path="/S1Xp3" element={<S1Xp3 />} />
                                <Route path="/S1Z" element={<S1Z />} />
                                <Route path="/Roadster" element={<Roadster />} />
                                <Route path="/RoadsterP" element={<RoadsterP />} />
                                <Route path="/RoadsterX" element={<RoadsterX />} />
                                <Route path="/RoadsterXp" element={<RoadsterXp />} />
                                <Route path="/Gig" element={<Gig />} />
                                <Route path="/Gigp" element={<Gigp />} />

                        </Routes>
                </Router>
        );
}

export default App