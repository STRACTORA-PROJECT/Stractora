import React, { useState } from 'react';


function ImageSlider({slides}) {

    const[currentIndex,SetCurrentIndex] =useState(0);

    const goToPreviousSlide=()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex -1;
        SetCurrentIndex(newIndex);
    }
    const goToNextSlide=()=>{
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex +1 ;
        SetCurrentIndex(newIndex)
    }

    const jumpTo= slideIndex =>{
        SetCurrentIndex(slideIndex)
    }
return (
    <div  className="w-full h-screen flex justify-around flex-col items-center">
        <div className="flex justify-around w-full h-screen items-center">
        <button
            className="px-2 py-2 rounded-full border border-gray-400 service-control "
            aria-label="swipe left"
            onClick={goToPreviousSlide}
          
          >
            <svg
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M8 12l6-6v12z" />
            </svg>
          </button>
        <div className="w-4/5 h-5/6 bg-center bg-cover " style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        <button
            className="px-2 py-2 rounded-full border ml-4 border-gray-400 service-control"
            aria-label="swipe right"
            onClick={goToNextSlide}
            
          >
            <svg
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16 12l-6 6V6z" />
            </svg>
          </button>
        </div>
    <div className=" flex">
    
         
       

          <div className="position-indicators">
          {[1, 2, 3, 4].map((slideIndex) => (
            <button
              className={
                (currentIndex === slideIndex ? "app-bg" : "bg-gray-300") + " w-10 mx-3"
              }
              style={{ paddingTop: "5px" }}
              key={slideIndex}
              onClick={() => jumpTo(slideIndex)}
            />
          ))}
        </div>
    </div>
    
    </div>
  )
}

export default ImageSlider