import React from 'react'
import ImageSlider from './ImageSlider'

function ProjectSlider() {
const slides=[
    {url:'http://localhost:3000/images/INTERIOR-Recovered4.jpg'},
    {url:'http://localhost:3000/images/fguyf.jpg'},
    {url:'http://localhost:3000/images/2_7-Photo.jpg'},
    {url:'http://localhost:3000/images/1212.jpg'},
    {url:'http://localhost:3000/images/chrit.jpeg'}
]

  return (
    <div>
      <div className="w-full  flex justify-center flex-col" style={{height:"130vh"}}>
      <div className=" h-1/5 w-full pl-24 ">
      <h3 className="text-md font-normal app-color">OUR LATEST PROJECTS</h3>
      <h2 className="text-2xl  lg:text-3xl font-bold">
        We provide quality
        <br /> work for our clients.
      </h2>
      </div> 
      <div className=" h-3/5 w-full ">
      <ImageSlider slides={slides} className="w-full h-full" />
      </div>
      </div>
       
    </div>
  )
}

export default ProjectSlider