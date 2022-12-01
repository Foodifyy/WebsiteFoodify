import React from 'react'
import ImageCard from './ImageCard'


function ImageGallery({staffimg}) {
  return (
    
    <section className="overflow-hidden text-gray-700 ">
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      {
        staffimg.map((card)=>{
            return <ImageCard key={card.id} staffimg={card.pic} staffname={card.name} staffdesignation={card.designation}/>
        })
      }
    </div>
  </div>
</section>
  )
}

export default ImageGallery