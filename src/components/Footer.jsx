'use client';

import React from 'react';

const Footer = () => {

  const socialIcons = [
    {
      iconClass: 'fab fa-youtube',
      link: 'https://www.youtube.com/@SelasarKampus',
    },
    {
      iconClass: 'fab fa-twitter',
      link: 'https://twitter.com/selasarkampus?lang=en',
    },
    {
      iconClass: 'fab fa-linkedin-in',
      link: 'https://www.linkedin.com/company/selasar-kampus/?originalSubdomain=id',
    },
    {
      iconClass: 'fab fa-instagram',
      link: 'https://www.instagram.com/selasarkampus/',
    },
  ];

  return (
    <>
      <div className='col-xl-3 col-lg-4 col-md-5 mb-30'>
        <h5 className='footer-title text-white fw-500'>Address</h5>
        <p className='text-white opacity-75 mb-35'>
          Jl. Mayangsari No.3, Kel. Pasir Endah, <br />
          Kec. Ujungberung, Kota Bandung, Jawa Barat
        </p>
        <ul className='d-flex social-icon style-none'>
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target='_blank' rel='noopener noreferrer'>
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
