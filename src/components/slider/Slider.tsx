import {useEffect, useRef, useState} from 'react';
import newSeasonBG from '../../assets/img/new_season.png'
import CartBG from '../../assets/img/cart_banner.png'
import styleBanner from '../../assets/img/banner_style.jpg'
import {IBanner} from "../../models/models.ts";

import SliderBanner from "./SliderBanner.tsx";

const Slider = () => {

    const [offset, setOffset] = useState<number>(0)
    const [bannerPage, setBannerPage] = useState<number>(1)
    const [timeoutRef, setTimeoutRef] = useState<number>()
    const bannersList:IBanner[] = [
        {
            img: newSeasonBG,
            title: "NEW SEASON",
            subtitle: "WEEKEND SALE"
        },
        {
            img: styleBanner,
            title: "CHOOSE STYLE",
            subtitle: "FOR EASY"
        },
        {
            img: CartBG,
            title: "BUY FOR",
            subtitle: "SOME CLICK"
        }
    ]
    const containerRef = useRef<HTMLDivElement>(null)

    const leftSlide = (): void => {
        const width:number | undefined = containerRef.current?.getBoundingClientRect().width
        if (width) {
            // if page = 1, then set last banner in list
            if (bannerPage === 1) {
                setOffset(-((bannersList.length - 1) * width))
                setBannerPage(bannersList.length)
            } else {
                setOffset(prev => prev + width)
                setBannerPage(prev => prev - 1)
            }

        }


    }

    const rightSlide = (): void => {
        const width:number | undefined = containerRef.current?.getBoundingClientRect().width
        if (width) {
            // if page = last banner in list, then set 1 banner
            if (bannerPage === bannersList.length) {
                setOffset(0)
                setBannerPage(1)

            } else {
                setOffset(prev => prev - width)
                setBannerPage(prev => prev + 1)
            }
        }
    }


    useEffect(() => {
        // every call reset last call timeout
        clearTimeout(timeoutRef)
        // if page is changed, then call setTimeout, which toggle page
        setTimeoutRef(setTimeout(() => {

            const width:number | undefined = containerRef.current?.getBoundingClientRect().width
            if (width) {
                if (bannerPage === bannersList.length) {
                    setOffset(0)
                    setBannerPage(1)

                } else {
                    setOffset(offset - width)
                    setBannerPage(bannerPage + 1)
                }
            }
        }, 5000))


    }, [bannerPage]);
    return (
        <div className="w-[100%] h-[320px] flex overflow-hidden relative">

                <div className="absolute rotate-90 top-[35%] left-5 cursor-pointer z-10 sliderArrow"
                     onClick={() => leftSlide()}
                >
                    <svg width="70" height="70" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M0.532697 1.13069C-0.177566 1.84092 -0.177566 2.99253 0.532697 3.70274L9.43019 12.5915C10.851 14.0108 13.1531 14.0103 14.5732 12.5904L23.4672 3.69619C24.1776 2.98598 24.1776 1.83437 23.4672 1.12413C22.757 0.413865 21.6054 0.413865 20.8952 1.12413L13.2828 8.73657C12.5726 9.44696 11.421 9.44678 10.7107 8.73657L3.10474 1.13069C2.3945 0.42043 1.24294 0.42043 0.532697 1.13069Z" fill="#C9C9C930"/>
                    </svg>
                </div>


            <div ref={containerRef} className={`w-[100%] transition-all ease-in-out h-[100%] duration-700 flex relative `}
                style={{
                    left: offset + "px"
                }}
            >
                {bannersList.map(item =>(
                    <SliderBanner key={item.img} img={item.img} subtitle={item.subtitle} title={item.title}/>
                ))}


            </div>
            <div className="flex absolute bottom-[50px] left-1/2 z-10">
                {bannersList.map((_, index) => (
                    <div className={`w-[15px] mr-[5px] h-[3px] ${bannerPage === index + 1 && 'bg-white'} bg-[#C9C9C950] `}>

                    </div>
                ))}
            </div>
                <div className="absolute -rotate-90 right-5 top-[35%] cursor-pointer z-10 sliderArrow"
                     onClick={() => rightSlide()}
                >
                    <svg  width="70" height="70" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.532697 1.13069C-0.177566 1.84092 -0.177566 2.99253 0.532697 3.70274L9.43019 12.5915C10.851 14.0108 13.1531 14.0103 14.5732 12.5904L23.4672 3.69619C24.1776 2.98598 24.1776 1.83437 23.4672 1.12413C22.757 0.413865 21.6054 0.413865 20.8952 1.12413L13.2828 8.73657C12.5726 9.44696 11.421 9.44678 10.7107 8.73657L3.10474 1.13069C2.3945 0.42043 1.24294 0.42043 0.532697 1.13069Z" fill="#C9C9C920"/>
                    </svg>
                </div>


        </div>
    );
};

export default Slider;