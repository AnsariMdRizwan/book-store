import React, { useEffect, useState } from 'react'

import Cards from './cards'
import { Link } from "react-router-dom"
import axios from "axios"
import { Books } from "../book.js"


const Courses = ({ searchQuery }) => {
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("http://localhost:4001/book");
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error(error);
      }
    };
    getBooks();
  }, []);

  // Filter books based on search query
  const filteredBooks = Books.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-15 px-4'>
        <div className='mt-11 pt-20 items-center justify-center text-center'>
          <h2 className='text-2xl md:text-3xl'>
            We're delighted to have you{" "}
            <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">Here :)</span>
          </h2>
          <p className='mt-12  font-bold text-transparent bg-clip-text  bg-gradient-to-tr from-blue-500 to-pink-500 text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aspernatur nesciunt commodi quae praesentium ea ratione quia esse maxime quod, eveniet, totam natus minima libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed iure inventore sunt?
          </p>
          <Link to="/">
            <button className='mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300 hover:translate-y-1 cursor-pointer'>Back</button>
          </Link>
        </div>
        <div className='mt-12  grid grid-cols-1 md:grid-cols-3 p-2'>
          {filteredBooks.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Courses
