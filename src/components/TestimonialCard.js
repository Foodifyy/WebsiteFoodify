import React,{useContext} from 'react'
import {useThemeContext} from '../context/UsethemecontextProvider'

function TestimonialCard({index}) {
  const {state} = useContext(useThemeContext);

  return (
<div class={`w-full h-screen flex flex-col items-center justify-center gap-8  transition-all duration-300`} style={{backgroundColor:`${state.background}`}}>
    <h1 class={`font-medium text-4xl text-gray-600 leading-relaxed text-center w-4/5 ${state.font}`}>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    </h1>
    <div class="flex items-center gap-4">
        <div class="rounded-full w-12 h-12 bg-black overflow-hidden">
            <img src="https://rairaksa.github.io/assets/img/rai.jpg" alt=""/>
        </div>
        <div class="flex flex-col tracking-wider">
            <label class={`text-gray-600 font-bold text-base ${state.font}`}>{index}</label>
            <label class={`text-gray-400 font-normal text-sm ${state.font}`}>Fullstack PHP Developer</label>
        </div>
    </div>
</div>
  )
}

export default TestimonialCard