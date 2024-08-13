"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AlertCircle, Menu } from 'lucide-react';
import logo from '@/public/images/logo.png'

import video from '@/public/images/videoUp.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import coin from '@/public/images/coin.png'
import ellipse from '@/public/images/EllipseHome.png'
import { MenuIcon } from 'lucide-react'
import Home from '@/public/images/Home.png'
import Arrow from '@/public/images/Arrow - Right.png'
import thumb1 from '@/public/images/Image1.png'
import thumb2 from '@/public/images/Image2.png'
import VideoSection from './ui/videos';
import TrendingSection from './ui/trending';
function TrendingPage() {
    var settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='bg-[#0D0D0E]' style={{
        backgroundImage: `url(${ellipse.src})`,
        width: '100%',
        height: '100%',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
      }} >
        <div className='mx-[2vw]  mb-[8vw] md:mb-0 pt-[4vw] flex items-center space-x-[4vw] justify-between' >
            <div className='flex space-x-[1vw] cursor-pointer  items-center' >
                <div className='md:hidden' > 
                <DropdownMenu  >
                    <DropdownMenuTrigger className='text-white text-center' ><Menu/></DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-black border border-cyan-400 rounded-[2vw] ' >
                            <DropdownMenuItem className='text-white' >Home</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Marketplace</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Analytics</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Subscriptions</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Whitepaper</DropdownMenuItem>
                            <DropdownMenuItem className='text-white' >Contact us</DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>
                </div>
                <Image src={logo} className='w-[15vw] md:w-[10vw]' alt='' />
            </div>


            <div className='w-full hidden md:block  ' >
                <div className='w-full flex h-[2.5vw] items-center bg-transparent justify-between border border-cyan-400 rounded-[0.5vw] relative ' >
                    <input className='w-full text-[1vw] text-white bg-transparent focus:outline-none rounded-[1vw] px-[1vw] py-1 '
                        type='text'
                        placeholder='Search..'

                    />
                    <button className='px-[1vw]' >
                            <svg
                            className="w-[1.5vw] h-[1vw] text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                            </svg>
                    </button>

                </div>
            </div>
            <div className='flex space-x-[3vw]  ' >

                <div className='flex items-center space-x-2' >
                    <Image src={video} className=' w-[7vw] sm:w-[4vw] md:hidden'alt='' />
                    <Image src={coin} className=' w-[7vw] sm:w-[4vw] ' alt='' />
                    <div className='relative ' >
                        <p className='text-white press-start-2p-text text-[4vw] md:text-[1.5vw]' >120</p>
                        {/* <AlertCircle className='absolute top-[0vw] right-[0vw] w-[1vw] text-white' /> */}
                        
                    </div>
                </div>

                <div className='block md:hidden' >
            
                        <img className='w-[6vw] h-[6vw] rounded-full ' src="https://github.com/shadcn.png" />
                        
                
                </div>
            

            <div className='hidden md:block p-[0.1vw] rounded-[0.5vw] bg-gradient-to-tl from-cyan-400 to-black m-2' >
                <div className='flex bg-black rounded-[0.5vw]  w-[10vw] h-[2.5vw] space-x-[1vw]  items-center' >
               
                    <img className='w-[2vw] rounded-full ' src="https://github.com/shadcn.png" />
           
                    <p className='  text-[0.7vw] text-white'>Andy William</p>
                    <MenuIcon className='text-white w-[1vw] h-[1vw] cursor-pointer hover:bg-[#33c2ee50] rounded-[0.2vw] ' />
                </div>
            </div>
            </div>
        </div>
        <div className=' block md:hidden mx-[2vw]  ' >
                <div className='w-full flex h-[8vw] rounded-[2vw] items-center bg-transparent justify-between border border-cyan-400 md:rounded-[0.5vw] relative ' >
                    <input className='w-full text-[3vw] sm:text-[2.5vw] md:text-[1vw] text-white bg-transparent focus:outline-none md:rounded-[1vw] px-[2vw] md:px-[1vw] py-1 '
                        type='text'
                        placeholder='Search..'

                    />
                    <button className='px-[1vw]' >
                            <svg
                            className=" w-[3vw] h-[3vw] md:w-[1.5vw] md:h-[1vw] text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                            </svg>
                    </button>

                </div>
            </div>
        <div className='flex justify-between mt-[2vw]' >

            <div className='mx-[1vw] hidden md:block space-y-[1vw] items-start ' >
                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <div className='p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={Home} className='w-[3vw]' alt='img' />
                    </div>
                    <p className='text-white text-[1vw]' >Home</p>
                </div>
                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <div className=' p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={Arrow} className='w-[3vw]' alt='img' />
                    </div>
                    <p className='text-white text-[1vw]' >Marketplace</p>
                </div>
                <div className='flex cursor-pointer space-x-[0.5vw] items-center' >
                    <div className=' p-[0.5vw] mx-1 rounded-[0.5vw]' >
                        <Image src={Arrow} className='w-[3vw]' alt='img' />
                    </div>
                    <p className='text-white text-[1vw]' >Trending</p>
                </div>
                <div className='rounded-xl cursor-pointer text-center ' >
                    <p className='bg-[#33C1EE] py-[0.5vw] text-[1vw] font-bold rounded-[0.5vw] ' >Upload Video</p>
                </div>
            </div>

            <div className=' w-full md:w-4/5 mx-[2vw] md:mx-auto space-y-[1vw]' >

                <div>
                    <h2 className='text-white hidden md:block text-[3vw] md:text-[2vw] cursor-pointer font-semibold' >New & Trending</h2>
                    <h2 className='text-white md:hidden text-[4vw] md:text-[2vw] cursor-pointer font-semibold' >Trending and New</h2>

                </div>

                <div className=' slider-container ' >
                    <Slider {...settings}>
                        <div className='text-center ' ><p className='text-white px-[1vw] text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >All</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Music</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >BlockChain</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Education</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Gaming</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Podcast</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Hobbies</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw]  text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Comedy</p></div>
                        <div className='text-center' ><p className='text-white px-[1vw] text-[2vw] lg:text-[1vw] py-[0.2vw] rounded-[0.3vw] cursor-pointer hover:bg-[#33C1EE]' >Stocks</p></div>
                    </Slider>
                </div>

                <div className=' w-[95%] ' >

                   

                    <TrendingSection/>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default TrendingPage