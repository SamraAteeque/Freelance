import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  mt-72 lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[7.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
               Generating
            </div>
            <div className='lg:text-[7.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                Crea
                <div className='h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden '>
                    <Video />
                </div>
               tivity
            </div>
            <div className='lg:text-[7.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                with Spark
            </div>
        </div>
    )
}

export default HomeHeroText