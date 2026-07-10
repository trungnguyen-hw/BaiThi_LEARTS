import React, { useEffect } from 'react';

const InstagramSection = () => {
  useEffect(() => {
    let $carousel = null;
    if (window.$) {
      $carousel = window.$('.instafeed-carousel1');
      if ($carousel.length && typeof $carousel.slick === 'function') {
        $carousel.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      }
    }

    return () => {
      if ($carousel && typeof $carousel.slick === 'function') {
        try {
          $carousel.slick('unslick');
        } catch (err) {
          // Ignore slick error on unmount
        }
      }
    };
  }, []);

  return (
    <div className="section section-padding border-top">
      <div className="container">
        {/* Section Title */}
        <div className="section-title2 text-center">
          <h3 className="sub-title">Follow us on Instagram</h3>
          <h2 className="title">@learts_shop</h2>
        </div>

        {/* Carousel Grid */}
        <div className="instafeed instafeed-carousel instafeed-carousel1">
          <a className="instafeed-item" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/assets/images/instagram/instagram-1.webp" alt="instagram image" />
            <i className="fab fa-instagram"></i>
          </a>
          <a className="instafeed-item" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/assets/images/instagram/instagram-2.webp" alt="instagram image" />
            <i className="fab fa-instagram"></i>
          </a>
          <a className="instafeed-item" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/assets/images/instagram/instagram-3.webp" alt="instagram image" />
            <i className="fab fa-instagram"></i>
          </a>
          <a className="instafeed-item" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/assets/images/instagram/instagram-4.webp" alt="instagram image" />
            <i className="fab fa-instagram"></i>
          </a>
          <a className="instafeed-item" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/assets/images/instagram/instagram-4.webp" alt="instagram image" />
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
