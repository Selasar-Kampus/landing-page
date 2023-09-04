'use client';

import Slider from 'react-slick';
import testimonial from '@/data/testimonial';
import Image from 'next/image';

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <br />,
    prevArrow: <br />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {testimonial.slice(0, 4).map((item) => (
          <div className='item' key={item.id}>
            <div className='rating-home-block'>
              <div className='top-header d-flex flex-row-reverse'>
                <img src='images/icon/icon_112.svg' alt='' width={30} />
              </div>
              <p className='tx-dark'>{item.text}</p>
              {/* <div>
                  <ul className="style-none d-flex rating pt-15">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill" />
                      </li>
                    ))}
                  </ul>
                </div> */}
              <div className='d-flex align-items-center'>
                <Image
                  width={40}
                  height={40}
                  alt='testimonial avatar'
                  src={item.image}
                  className='rounded-circle'
                />
                <div className='cost fw-500 tx-dark fs-10 p-2'>
                  Peserta {' '} {item.author},{' '}
                  <span className='opacity-50 fw-normal fs-15'>{item.colleague}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
