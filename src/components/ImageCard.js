import React,{useContext} from 'react'
import '../style/imageCard.css'
import {useThemeContext} from '../context/UsethemecontextProvider'

function ImageCard({staffimg,staffname,staffdesignation}) {
    const {state} = useContext(useThemeContext);
    return (
        <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg bg-black" id="cards"
            src={staffimg}/>
            <div className='relative left-2'>
                <p className={`${state.font} text-xs lg:text-2xl  font-bold`}>{staffname}</p>
                <p className={`${state.miniFont} text-xs font-medium lg:text-base`}>{staffdesignation}</p>
            </div>
        </div>
      </div>
    )
}

export default ImageCard