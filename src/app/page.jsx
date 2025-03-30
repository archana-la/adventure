import Link from 'next/link'
import React from 'react'


function page() {
  return (
    <>
      <section className=''>
        <img className='xy' src="https://vajraadventure.com/storage/Short%20Hiking/short-hiking-1.jpg" alt="" />
        <h2 className=' bb'>Affordable Trekking</h2>
        <h1 className='aa'> Adventures</h1>
        <p className='cc'>Trekking, Hikes, relaxing Yoga, or a family-friendly tour. Build your unforgettable experience of Nepal with our affordable packages and treks!</p>
        <div className="dd">
          <h3 className='q'>Search packages, destinations and blog posts</h3>
          <form className="" role="search">
            <div className="input-group">
              <input className="form-control  me-3" type="search" placeholder="Search For Product Brands And More" aria-label="search" />
              <button className="btn ff" type="submit">search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className='p-5 h'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
            <h2>Popular Packages</h2>
            </div>
            <div className="col-lg-5">
              <h4 className='text-end t'>View All</h4>
            </div>
          </div>
        </div>
      </section>
       
      <section className='h'>
      <div className="container">
          <div className="row">
            <div className="col-lg-4 shadow">
              <img className='g rounded' src="https://vajraadventure.com/storage/Poon-hill-yoga-trek/poon-hill.jpg" alt="" />
              <Link className='text-decoration-none' href={'/12days'}>
              <h6 className='py-2  text-dark'>Mardi Himal Yoga Trek | Find Your Inner Peace</h6>
              </Link>
              <p className='text-dark'>12 days</p>
              <div className="row">
                <div className="col-lg-6">
                <h5 className='text-dark'>USD 1,299 / person</h5>
                </div>
                <div className="col-lg-6 text-end mb-5">
                <Link className='text-decoration-none' href={'/12days'}>
                  <button className='btn bg-primary '>Book now</button>
                  </Link>
                </div>
              
              </div>
            
            </div>
            <div className="col-lg-4 shadow">
              <img className='g rounded' src="https://vajraadventure.com/storage/annapurna/annapurna-sanctuary-trek-img.jpg" alt="" />
              <h6 className='py-2'>Everest Base Camp Trek via Gokyo Lakes</h6>
              <p>18 days</p>
              <h6>USD 1,799 / person</h6>
            </div>
            <div className="col-lg-4 shadow">
              <img className='g rounded' src="https://vajraadventure.com/storage/everest/everest-base-camp-4.jpg" alt="" />
              <h6 className='py-2'>Annapurna Base Camp via Poon Hill (Sanctuary Trek)</h6>
              <p>15 days</p>
              <h5>USD 1,099 / person</h5>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div className=''>
                <img className='j' src="https://vajraadventure.com/img/img-group.jpg" alt="" />
                <div class="overlay-icon">
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h2>Why Us</h2>
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-box">
                    <img className='bg-warning rounded my-3 p-2 ms-5 mt-3' src="https://vajraadventure.com/img/trophy-star-white.svg" alt="" />
                    <p>Best Reviews on Google Business</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-box">
                    <img className='bg-warning rounded my-3 p-2 ms-5 mt-3' src="https://vajraadventure.com/img/trophy-star-white.svg" alt="" />
                    <p>Local Experts, Middle Man Free Pricing</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-box">
                    <img className='bg-warning rounded my-3 p-2 ms-5 mt-3' src="https://vajraadventure.com/img/trophy-star-white.svg" alt="" />
                    <p>No Hidden Changes</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-box">
                    <img className='bg-warning rounded my-3 p-2  mt-3' src="https://vajraadventure.com/img/trophy-star-white.svg" alt="" />
                    <p>100% Customizable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div class="container">
          <h2 class="text-center mb-4">Google Reviews</h2>
          <div class="row justify-content-center">
            <div class="col-lg-4">
              <div class="review-card p-4">
                <img className='k' src="https://vajraadventure.com/img/google.png" alt="" />
                <p class="text-warning fs-3">Excellent</p>
                <div class="rating fs-4">★★★★★</div>
                <p class="mt-2"> 4.9 Based on 31 reviews</p>
                <button class="btn btn-warning">See why travelers love us!</button>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="review-card">
                <img className='k' src="https://lh3.googleusercontent.com/a-/ALV-UjXTpmE9nJXVM5DhoUOzd5kJA57eMhIDGkGxfughYwwvGcGvyUsq=s128-c0x00000000-cc-rp-mo" alt="" />
                <h5>Kishor Shah</h5>
                <p class="text-muted">2025-01-24 04:19:30 PM</p>
                <div class="rating fs-4">★★★★★</div>
                <p class="text-muted mt-2">
                  "I did the Mardi Himal trek at the recommendation of Govin. He is a fully independent Nepalese guide..."
                </p>
                <div className='border-top'>
                  <a>Show more</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="review-card">
                <img className='k' src="https://lh3.googleusercontent.com/a-/ALV-UjUkdz10IYXeVHNiVtiOc6-bf9us_f5SZkp4wDOhw6GoX1b7q9PP=s128-c0x00000000-cc-rp-mo-ba4" alt="" />
                <h5>Ebrahim QA</h5>
                <p class="text-muted">2025-01-23 01:09:04 PM</p>
                <div class="rating fs-4">★★★★★</div>
                <p class="text-muted mt-2">
                  "Had an amazing lifetime experience with Mr. Govin to Everest Base Camp that wouldn't be successful without..."
                </p>
                <div className='border-top'>
                  <a>Show more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-4'>
        <div className="container">
          <h2 className='py-4'>Travel by Interest </h2>
          <div className="row ">
            <div className="col-lg-4 shadow">
              <img className='g rounded' src="https://vajraadventure.com/storage/blog/trekking.jpg" alt="" />
              <h6 className='py-2'>Trekking Nepal with us</h6>
            </div>
            <div className="col-lg-4 shadow">
              <img className='g rounded' src="https://vajraadventure.com/storage/Tour/tours-medium-seo-images.jpg" alt="" />
              <h6>Tours in Nepal with us</h6>
            </div>
            <div className="col-lg-4 shadow">
              <img className='g rounded' src="https://vajraadventure.com/storage/Short%20Hiking/short-hiking-1.jpg" alt="" />
              <h6>Short Hiking in Nepal</h6>
            </div>
            <div className="col-lg-4 py-3 shadow">
              <img className='g rounded' src="https://vajraadventure.com/storage/yoga-trek/yoga-retret-1.jpg" alt="" />
              <h6>Yoga Trekking in Nepal</h6>
            </div>
            <div className="col-lg-4 py-3 shadow">
              <img className='g rounded' src="https://vajraadventure.com/storage/peak%20climbing/peak-climbing-1.jpg" alt="" />
              <h6>Peak Climbing | Our Packages</h6>
            </div>
            <div className="col-lg-4 py-3 shadow">
              <img className='g rounded' src="https://vajraadventure.com/storage/Mountaion%20Biking/mountain-biking-1.jpg" alt="" />
              <h6>Mountain Biking Nepal</h6>
            </div>
          </div>
        </div>
      </section>

      <section className='p py-4'>
        <div className="container">
          <h2 className='text-white text-center'>Stay up to date with our news, ideas and updates</h2>
          <p className='text-white text-center'>Subscribe to our mailing list and get interesting stuff and updates to your email inbox.</p>
          <form className="" role="search">
            <div className="input-group mb-3">
              <input className="form-control" type="search" placeholder="" aria-label="search" />
              <button className="btn z text-light" type="submit"> Subscribe Now
              </button>
            </div>
          </form>
          <p className='text-white'>We respect your privacy and take protecting it seriously</p>
        </div>

      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <h2 className='py-4'>Latest from Our Blog</h2>
            <div className="col-lg-3 shadow">
              <img className='n rounded' src="https://vajraadventure.com/storage/blog/images/Lumbini;%20Birth%20Place%20of%20Gautam%20Buddha.jpg" alt="" />
              <h6 className=''>Temples and Sacred Places in Nepal</h6>
              <p>Feb 26 2025</p>
            </div>
            <div className="col-lg-3 rounded shadow">
              <img className='n rounded' src="https://vajraadventure.com/storage/blog/mount-everest-trek-vs-heli.jpg" alt="" />
              <h6>Everest Base Camp Helicopter Tour vs. Trek: Which One Should You Choose?</h6>
              <p>Feb 20 2025</p>
            </div>
            <div className="col-lg-3  shadow">
              <img className='n rounded' src="https://vajraadventure.com/storage/blog/yoga-trekking.jpg" alt="" />
              <h6>Yoga Trekking in Nepal | A new trend</h6>
              <p>Feb 11 2025</p>
            </div>
            <div className="col-lg-3 shadow">
              <img className='n rounded' src="https://vajraadventure.com/storage/blog/monastries.jpg" alt="" />
              <h6>Exploring Buddhist Monasteries on the Everest Base Camp Trek</h6>
              <p>Feb 26 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
