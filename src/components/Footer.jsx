'use client'

import React from 'react';

const Footer = () => {
  const links = [
    {
      id: 1,
      title: 'Links',
      column: 'col-lg-2 col-md-3 col-sm-6 mb-30',
      items: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'StudyBox', href: '#' },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: 'fab fa-facebook-f',
      link: '#',
    },
    {
      iconClass: 'fab fa-twitter',
      link: '#',
    },
    {
      iconClass: 'fab fa-linkedin-in',
      link: '#',
    },
  ];

  return (
    <div className='d-flex flex-row justify-content-end gap-3 w-50'>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className='footer-title text-white fw-500'>{link.title}</h5>
          <ul className='footer-nav-link style-none'>
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className='col-xl-3 col-lg-4 col-md-5 mb-30'>
        <h5 className='footer-title text-white fw-500'>Address</h5>
        <p className='text-white opacity-75 mb-35'>
          Jl. Mayangsari No.3, <br />
          Kel. Pasir Endah, Kec. Ujungberung, <br />
          Kota Bandung, Jawa Barat
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
    </div>
  );
};

export default Footer;
