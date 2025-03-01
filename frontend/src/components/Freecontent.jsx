import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Books } from "../book.js"

import Slider from "react-slick";
import Cards from './cards';
import axios from 'axios';

const Freecontent = ({ searchQuery }) => {
  const [courses, setCourses] = useState(Books)
  const [book, setbook] = useState([]);

  const [filteredCourses, setFilteredCourses] = useState(courses);

  console.log("this is courece", courses);

  useEffect(() => {
    if (searchQuery) {
      setFilteredCourses(
        courses?.filter((course) =>
          course?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
        )
      );
    } else {
      setFilteredCourses(courses);
    }
  }, [searchQuery, courses])

  console.log(Books);

  const filteredBooks = Books.filter((item) =>
    item?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  console.log(searchQuery, "search");


  console.log(filteredBooks, "this is filter books");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-bold text-xl pb-2'> Free offered courses</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, incidunt! Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <Slider {...settings}>
            {filteredBooks.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freecontent
