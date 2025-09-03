import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import { FaHeart, FaGlobe } from "react-icons/fa"


const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    '../../../public/image1.png',
        '../../../public/image2.png',
    '../../../public/image3.png',
    '../../../public/image4.png',
  ]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className='parent bg-black'>
      {/* PAGE 1 */}
      <div id='page1' className='py-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[28vw] h-[45vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[35vw] lg:top-[20vh] top-[5vh] lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw] text-white'>Samra <br /> Ateeque </h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight text-white'>
              &nbsp;&nbsp;&nbsp;&nbsp; Curiosity fuels my creativity, and humility shapes the way I work.
              I believe every project is more than just code or design—it’s a story,
              a personality, and a vision waiting to be brought to life. I don’t just aim
              for short-term results; I focus on building digital experiences that last,
              resonate, and influence. With every collaboration, my goal is to create value,
              not just numbers.
            </p>
          </div>
        </div>
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

export default Agence
