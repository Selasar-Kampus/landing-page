import Link from 'next/link';

import Seo from '@/components/Seo';
import Footer from '@/components/Footer';

import AppBanner from '@/components/AppBanner';
import Banner from '@/components/Banner';
import Block from '@/components/Block';
import Blog from '@/components/Blog';

import ContactForm from '@/components/ContactForm';
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';
import IntroAbout from '@/components/IntroAbout';
import Service from '@/components/Service';
import Testimonial from '@/components/Testimonial';
import WhyChoose from '@/components/WhyChoose';

const Home = () => {
  return (
    <>
      <Seo pageTitle='Insurance' />
      {/* <!--
      =============================================
			Theme Default Menu
			==============================================
      --> */}
      {/* <!--
			=============================================
			Theme Hero Banner
			==============================================
			--> */}
      <Hero />
      {/* <!--
			=============================================
				Feature Section Thirty Four
			==============================================
			--> */}
      <div className='fancy-feature-thirtyFour mt-50'>
        <div className='container'>
          <div className='row gx-xxl-5'>
            <Feature />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      <div className='blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100'>
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
                {/* /.title-style-one */}
              </div>
            </div>
            {/* /.row */}
            <div className='row gx-xxl-5'>
              <Blog />
            </div>
            {/* /.row */}
            <div className='text-center xs-mt-40'>
              <Link
                href='/blog/blog-v2'
                className='btn-mainCol btn-twentyTwo fw-500 tran3s'
                data-aos='fade-left'
              >
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*
      {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className='rating-home-section position-relative mt-100 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50'
        data-aos='fade-up'
      >
        <div className='container d-flex h-auto flex-row row-cols-2'>
          <div className='title-style-one feedback-tittle'>
            <h2 className='main-title fw-500 tx-dark'>What Do</h2>
            <h2 className='fw-500'><span>They Say?</span></h2>
          </div>
        <div className='inner-content'>
          <div className='rating-home-slider'>
            <Testimonial />
          </div>

          {/* /.slider-wrapper */}
        </div>
        </div>
        {/* /.inner-content */}
      </div>
    </>
  );
};

export default Home;
