import { useEffect, useState } from 'react';
import MainMenu from './MainMenu';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? 'fixed' : ''
      }`}
    >
      <div className='inner-content position-relative'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='logo order-lg-0'>
            <Link href='/' className='d-block'>
              <Image
                src='/images/logo/logo.png'
                alt='logo'
                width={70}
                height={20}
              />
            </Link>
          </div>
          <div className='right-widget ms-auto d-flex align-items-center order-lg-3'>
            <Link
              href='#'
              className='btn-mainCol btn-twentyOne fw-500 tran3s d-none d-lg-block'
            >
              StudyBox (Coming Soon)
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Nav;
