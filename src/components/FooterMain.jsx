import Link from 'next/link';
import Footer from '@/components/Footer';

const FooterMain = () => {
    return (
<div className='footer-style-ten theme-basic-footer zn2 position-relative'>
        <div className='container'>
          <div className='inner-wrapper'>
            <div className='d-flex flex-row justify-content-between w-auto'>
              <div className='col-lg-3 footer-intro mb-40'>
                  <div className='logo'>
                  <Link href='/'>
                    <img src='/images/logo/img.png' alt='logo' width={95} />
                  </Link>
                </div>
                <p className='text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10'>
                  Selasar Kampus
                </p>
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
      </div>
    )
}

export default FooterMain;
