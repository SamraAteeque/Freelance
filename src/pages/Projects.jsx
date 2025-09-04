import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHeart, FaGlobe } from "react-icons/fa"

import img1 from '../assets/images/image1.png'
import img2 from '../assets/images/image2.png'
import img3 from '../assets/images/image3.png'
import img4 from '../assets/images/image4.png'


const Projects = () => {

const projects = [
  {
    image1: img2,
    link1: 'https://travelling-website-navy.vercel.app/',
    image2: img3,
    link2: 'https://landing-page-kappa-eosin-50.vercel.app/'
  },
  {
    image1: img4,
    link1: 'https://duo-plum.vercel.app/',
    image2: img1,
    link2: 'https://magma-ruddy.vercel.app/'
  }
]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 bg-black text-white'>
      {/* HEADER TITLE */}
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>

      {/* PROJECTS */}
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return (
            <div 
              key={idx} 
              className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} link1={elem.link1} link2={elem.link2} />
            </div>
          )
        })}
      </div>

      {/* PAGE 2 - Expertise Section */}
      <div id='page2' className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 text-white">
        <h2 className="text-4xl font-bold mb-12 self-start">Expertise</h2>
        
        <div className="flex flex-col lg:flex-row w-full justify-between">
          {/* Left expertise list */}
          <div className="text-2xl font-medium mb-12 lg:mb-0">
       <div className="space-y-3 text-lg">
  <p>Web Development</p>
  <p>UI/UX Design</p>
  <p>Frontend Animation (GSAP, Framer Motion)</p>
  <p>MERN Stack Applications</p>
  <p>SEO & Optimization</p>
</div>


          </div>

          {/* 3-column text */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-lg leading-relaxed max-w-6xl">
            <p>
              <strong>My projects_</strong> are built with curiosity and passion.  
              Each idea grows into a solution that blends creativity with clean, scalable code.
            </p>
            <p>
              <strong>My process_</strong> focuses on collaboration, innovation, and detail.  
              Every website I create is designed to be fast, responsive, and engaging — crafted to leave a lasting impact.
            </p>
            <p>
              <strong>My culture_</strong> is about openness and growth.  
              I believe in building meaningful digital experiences that not only look good but also deliver real value to clients.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 px-6 lg:px-20 border-t border-gray-800">
  {/* Top Social + Contact */}
  <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
    {/* Social Links */}
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/buildwithsamra/"
        target="_blank"
        rel="noreferrer noopener"
        className="border-2 border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-black transition"
      >
        IG
      </a>
      <a
        href="https://www.linkedin.com/in/samra-ateeque-b91461283/"
        target="_blank"
        rel="noreferrer noopener"
        className="border-2 border-lime-400 text-lime-400 px-6 py-2 rounded-full font-bold hover:bg-lime-400 hover:text-black transition"
      >
        IN
      </a>
    </div>

    {/* Contact Button */}
    <a
      href="contact"
      className="flex items-center justify-center space-x-2 border-2 border-white px-6 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black transition"
    >
      <span>CONTACT</span>
      <FaHeart className="text-red-500" />
    </a>
  </div>

  {/* Bottom Links */}
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-sm border-t border-gray-700 pt-6">
    {/* Left Info */}
    <div className="flex flex-col sm:flex-row items-center gap-3 text-gray-300">
      <FaGlobe className="text-lg" />
      <span>MONTREAL</span>
      <span>10:50:32</span>
    </div>

    {/* Center Links */}
    <div className="flex flex-wrap justify-center gap-4 text-gray-300">
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Disclaimer</a>
      <a href="#" className="hover:text-white">Ethics Report</a>
      <a href="#" className="hover:text-white">Consent Options</a>
    </div>

    {/* Right Scroll to top */}
    <a href="#top" className="text-center hover:text-white font-bold">
      BACK TO TOP
    </a>
  </div>
</footer>

    </div>
  )
}

export default Projects
