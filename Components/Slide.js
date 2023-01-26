import jamaicaImg from '../Images/jamaica.jpg';
import monacoImg from '../Images/monaco.jpg';
import santoriniImg from '../Images/santorini.jpg';
import spainImg from '../Images/spain.jpg';
import tropeaImg from '../Images/tropea.jpg';
import prevArrow from '../Images/Icons/arrow1.svg';
import nextArrow from '../Images/Icons/arrow2.svg';
import calendarIcon from '../Images/Icons/calendar.svg';
import avatarIcon from '../Images/Icons/avatar.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useRef, useState } from 'react';

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef();

  const data = [
    {
      id: 1,
      place: 'Jamaica',
      area: 'Caribbean',
      price: 350,
      days: 3,
      people: 4,
      img: jamaicaImg.src,
    },
    {
      id: 2,
      place: 'Mallorca',
      area: 'Spain',
      price: 250,
      days: 8,
      people: 5,
      img: spainImg.src,
    },
    {
      id: 3,
      place: 'Monaco',
      area: 'Monaco',
      price: 450,
      days: 10,
      people: 3,
      img: monacoImg.src,
    },
    {
      id: 4,
      place: 'Santorini',
      area: 'Greece',
      price: 200,
      days: 14,
      people: 5,
      img: santoriniImg.src,
    },
    {
      id: 5,
      place: 'Tropea',
      area: 'Italy',
      price: 300,
      days: 12,
      people: 5,
      img: tropeaImg.src,
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (e) => {
      setCurrentSlide(e);
    },
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className='w-full'>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className='cursor-pointer bg-white shadow-md mx-2'
            >
              <div className='relative'>
                <div>
                  <img
                    className='h-[250px] w-full sm:h-[200px] xs:h-[150px]'
                    src={item.img}
                  />
                </div>
                <div className='absolute bottom-0 flex justify-between items-center w-full px-3 pb-4 xs:px-[1px]'>
                  <div className='playfair text-orange text-2xl sm:text-xl'>
                    {item.place}
                  </div>
                  <div className='text-orange text-xl sm:text-base'>
                    ${item.price}
                  </div>
                </div>
              </div>
              <div className='px-3 py-4 xs:px-[1px]'>
                <div className='uppercase font-semibold mb-4 sm:text-sm'>
                  {item.area}
                </div>
                <div className='flex items-center'>
                  <div className='flex items-center mr-6 sm:text-xs'>
                    <img className='w-[20px] mr-2' src={calendarIcon.src} />
                    {item.days} Days
                  </div>
                  <div className='flex items-center sm:text-xs'>
                    <img className='w-[20px] mr-2' src={avatarIcon.src} />
                    {item.people} People
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className='flex gap-5 md:pl-5'>
        <div
          onClick={() => {
            sliderRef.current != undefined && sliderRef.current.slickPrev();
          }}
          className='mr-2 relative cursor-pointer py-2 px-4 border border-orange rounded-full w-[50px] h-[50px] flex justify-center items-center z-10 md:right-2'
        >
          <img src={prevArrow.src} className='sm:w-1/2' />
        </div>
        <div
          onClick={() => {
            sliderRef.current != undefined && sliderRef.current.slickNext();
          }}
          className={`relative cursor-pointer py-2 px-4 border border-orange rounded-full w-[50px] h-[50px] flex justify-center items-center z-10 md:right-2`}
        >
          <img src={nextArrow.src} className={`sm:w-1/2`} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
