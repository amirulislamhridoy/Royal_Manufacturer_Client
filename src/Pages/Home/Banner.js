import React from "react";
import c1 from '../../photos/box&allparts.jpg'
import c2 from '../../photos/bable.jpg'
import c3 from '../../photos/allParts.jpg'
import c4 from '../../photos/allParts2.png'

const Banner = () => {
  return (
    <section className='lg:flex justify-between items-center'>
      <div className='mx-2'>
        <h1 className='text-4xl lg:text-5xl font-bold text-primary'>Royal Manufacturer</h1>
        <p className='lg:w-10/12 mt-5'>Royal Manufacturer Company is side of Royal Group & company. Our Company is most popular in the world. Our company is international brand. Most of the people and country trust us.</p>
      </div>

      <div className='md:w-8/12 mx-auto'>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src={c1} className="w-full" alt=''/>
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={c2} className="w-full" alt='' />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={c3} className="w-full"  alt=''/>
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src={c4} className="w-full" alt=''/>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            o
          </a>
          <a href="#item2" className="btn btn-xs">
            o
          </a>
          <a href="#item3" className="btn btn-xs">
            o
          </a>
          <a href="#item4" className="btn btn-xs">
            o
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
