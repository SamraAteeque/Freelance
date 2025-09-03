import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            {/* Project 1 */}
            <a 
                href={props.link1} 
                target="_blank" 
                rel="noopener noreferrer"
                className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full block'
            >
                <img className='h-full w-full object-cover' src={props.image1} alt="project1" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-4xl sm:text-6xl font-[font1] border-4 pt-2 sm:pt-4 px-6 sm:px-8 text-white border-white rounded-full'>
                        View project
                    </h2>
                </div>
            </a>

            {/* Project 2 */}
            <a 
                href={props.link2} 
                target="_blank" 
                rel="noopener noreferrer"
                className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full block'
            >
                <img className='h-full w-full object-cover' src={props.image2} alt="project2" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-4xl sm:text-6xl font-[font1] border-4 pt-2 sm:pt-4 px-6 sm:px-8 text-white border-white rounded-full'>
                        View Project
                    </h2>
                </div>
            </a>
        </>
    )
}

export default ProjectCard