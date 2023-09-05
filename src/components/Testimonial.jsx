'use client';

import Slider from 'react-slick';
import testimonial from '@/data/testimonial';

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

              <div className='d-flex align-items-center'>
                <div className='cost fw-500 tx-dark fs-10 p-2'>
                  {item.author}
                  <br />
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
