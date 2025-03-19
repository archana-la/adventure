import React from 'react'
import { TbMathGreater } from "react-icons/tb";

function page() {
    return (
        <>
            <section>
                <div>
                    <img className='i' src="https://vajraadventure.com/storage/peak%20climbing/iceland-peak-with-everest-base-camp.jpg" alt="" />
                    <h4 className='rr'>Home 
                   <span className='pp'><TbMathGreater /></span> Packages  
                     <span className='pp'><TbMathGreater />  Island Peak with Everest Base Camp</span></h4>
                     <h2 className='pq'>Island Peak with Everest Base Camp</h2>
                </div>
            </section>

            <section className='py-4'>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 shadow">
          <img className='g  rounded' src="https://vajraadventure.com/storage/about%20us/why-travel-with-vajra-adventure.jpg" alt="" />
         <h6>Why travel with Vajra Adventure?</h6>
        </div>
        <div className="col-lg-4 shadow">
          <img className='g  rounded' src="https://vajraadventure.com/storage/about%20us/our-services.jpg" alt="" />
          <h6>Our services | Trekking, Yoga, and More</h6>
        </div>
        <div className="col-lg-4 shadow">
          <img className='g  rounded' src="https://vajraadventure.com/storage/Poon-hill-yoga-trek/poon%20hill%20yoga%20trek" alt="" />
          <h6>Meet Our Team at Vajra Adventure</h6>
        </div>
      </div>
    </div>
   </section>

   <section className='py-4'>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 shadow">
          <img className='g  rounded' src="https://vajraadventure.com/storage/about%20us/faq-1.jpg" alt="" />
         <h6>FAQ | Frequently asked Questions</h6>
        </div>
        <div className="col-lg-4 shadow">
          <img className='g  rounded' src="https://vajraadventure.com/storage/about%20us/terms-and-condition.jpg" alt="" />
          <h6>Terms and Conditions</h6>
        </div>
        <div className="col-lg-4 shadow">
          <img className='g  rounded' src="https://vajraadventure.com/storage/public-home-page-images/mount-everest.jpg" alt="" />
          <h6>Contact our expert team</h6>
        </div>
      </div>
    </div>
   </section>
        </>
    )
}

export default page
