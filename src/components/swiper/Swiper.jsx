import React, {useCallback, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/pagination';
import item1 from "../../assets/images/newsItem1.png"
import item2 from "../../assets/images/newsItem2.png"
import item3 from "../../assets/images/newsItem3.png"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";

export function Items() {

    const sliderRef = useRef(null)

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className="items mt-28">
            <div className="container">
                <h2 className=" items-title font-semibold text-center text-3xl mb-16">НОВИНКИ</h2>
                <p className=" items-text text-sm text-gray-500 mb-4 text-center">643 ОБНОВЛЕНИЙ</p>

                <div className="relative">
                    <Swiper modules={[Navigation]}
                            ref={sliderRef}
                            spaceBetween={35}
                            slidesPerView={4}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img src={item1} alt="Slide 1" className="swiper-image "/>
                            <p className="swiper-text">Saint Laurent</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item2} alt="Slide 2" className="swiper-image "/>
                            <p className="swiper-text">BRUNELLO CUCINELLI</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item3} alt="Slide 3" className="swiper-image "/>
                            <p className="swiper-text">BRUNELLO CUCINELLI</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item3} alt="Slide 4" className="swiper-image"/>
                            <p className="swiper-text">Saint Laurent</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item1} alt="Slide 5" className="swiper-image"/>
                            <p className="swiper-text">Saint Laurent</p>
                        </SwiperSlide>
                    </Swiper>
                    <div className="absolute  z-10 w-full">
                        <button
                            onClick={handlePrev}
                            className="border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  left-[-70px] bottom-[150px]">
                            <FaChevronLeft
                                size="34"
                            />
                        </button>
                        <button
                            onClick={handleNext}
                            className=" border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  right-[-70px] bottom-[150px] ">
                            <FaChevronRight
                                size="34"
                            />
                        </button>
                    </div>
                </div>


            </div>
            <p className="text-base font-semibold uppercase text-center border-solid border-b border-gray w-fit mx-auto mt-20">СМОТРЕТЬ
                ВСЁ</p>
        </section>
    )
}