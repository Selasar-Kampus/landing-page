import Link from 'next/link';

import Seo from '@/components/Seo';
import Blog from '@/components/Blog';
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';

const Home = () => {
  return (
    <>
      <Seo pageTitle='Insurance' />
      <Hero />
      <div className='fancy-feature-thirtyFour mt-50'>
        <div className='container'>
          <div className='row gx-xxl-5'>
            <Feature />
          </div>
        </div>
      </div>
      <div className='blog-section-three mt-140 mb-1 lg-mt-100 mb-1'>
        <div className='container'>
          <div className='position-relative'>
            <div className='row align-items-end'>
              <div className='col-sm-8'>
                <div
                  className='title-style-one text-center text-sm-start pb-40 lg-pb-20'
                  data-aos='fade-right'
                >
                  <h3 className='main-title fw-500 tx-dark m0'>Experience Your <span>Dream Major</span></h3>
                </div>
              </div>
            </div>
            <div className='row gx-xxl-5'>
              <Blog />
            </div>
            <div className='text-center xs-mt-40'>
              <Link
                href='#'
                className='btn-mainCol btn-twentyTwo fw-500 tran3s'
                data-aos='fade-left'
              >
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className='rating-home-section position-relative mt-1 pt-100 pb-70 lg-mt-1 lg-pt-70 lg-pb-50'
        data-aos='fade-up'
      >
        <div className='container d-flex h-auto flex-row row-cols-2'>
          <div className='title-style-one feedback-tittle'>
            <h2 className='main-title fw-500 tx-dark'>What Do</h2>
            <h2 className='fw-500'><span className='fw-bold'>They Say?</span></h2>
          </div>
          <div className='inner-content '>
            <div className='rating-home-slider'>
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
