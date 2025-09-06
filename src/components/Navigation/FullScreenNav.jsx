import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

import img1 from '../../assets/images/image1.png';
import img2 from '../../assets/images/image2.png';
import img3 from '../../assets/images/image3.png';
import img4 from '../../assets/images/image4.png';
import logo from '../../assets/images/Logo.png';
const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)





    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow
        -hidden h-screen w-full z-50 absolute'>
            <div className='h-screen w-full fixed '>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative overflow-x-hidden'>
                <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
                    <div className=''>
                        <div className='lg:w-36 w-20'>
                            <a href="/" className="block w-32">

                                <img className='w-full' src={logo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer'>
                        <div className='lg:h-24 h-20 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='lg:h-24 h-20 lg:w-1 w-0.5 right-13 rotate-45 origin-top absolute bg-[#D3FD50]'></div>

                    </div>
                </div>
                <div className=' py-5'>
                    <Link to="/projects" onClick={() => setNavOpen(false)} >

                        <div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-5xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Projets</h1>
                            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img1} alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img2} alt="" />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img3} alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img4} alt="" />
                                </div>
                            </div>

                        </div>
                    </Link>

                    <Link to="/agence" onClick={() => setNavOpen(false)} >
<div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-5xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Agency</h1>
                            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img1} alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img2} alt="" />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img3} alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img4} alt="" />
                                </div>
                            </div>

                        </div>
                    </Link>

                    <Link to="/testimonial" onClick={() => setNavOpen(false)} >
<div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-5xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Testimonial</h1>
                            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img1} alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img2} alt="" />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img3} alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img4} alt="" />
                                </div>
                            </div>

                        </div>
                    </Link>

                    <Link to="/contact" onClick={() => setNavOpen(false)} >

                       <div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-5xl lg:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Contact</h1>
                            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img1} alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img2} alt="" />
                                </div>
                                <div className='moveX flex items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img3} alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>To see it all</h2>
                                    <img className='lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={img4} alt="" />
                                </div>
                            </div>

                        </div>
                    </Link>

                         
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav