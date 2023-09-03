'use client';

import React from 'react';

const Hero1 = () => {
  const options = [
    { value: 0, display: 'Select insurance type..' },
    { value: 1, display: 'Life Insurance' },
    { value: 2, display: 'Health insurance' },
    { value: 3, display: 'Property insurance' },
    { value: 4, display: 'Motor insurance' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className='home-banner position-relative zn2'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-9 col-md-10 m-auto text-center'
            data-aos='fade-up'
          >
            <h1 className='home-heading fw-300 tx-dark'>
              Unlock Your
            </h1>
            <h1 className='home-heading fw-300 tx-dark'>
              True Potential
            </h1>
            <p className='text-sm txt-grey mt-10 mb-10 lg-mt-30 lg-mb-40'>
              With Selasar Kampus Where Learning Meets Empowerm
            </p>

            <div className='d-inline-flex align-items-center mt-130 lg-mt-80'>
              <button className='btn-mainCol btn-twentyOne'>
                Explore Your Dream Majors
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}
    </div>
  );
};

export default Hero1;
