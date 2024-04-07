import React, {useCallback, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import item1 from "../../assets/images/newsItem1.png";
import item2 from "../../assets/images/newsItem2.png";
import item3 from "../../assets/images/newsItem3.png";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";

const PageOfItemsTwo = () => {

    const sliderSameRef = useRef(null)

    const handlePrev = useCallback((ref) => {
        if (!ref.current) return;
        ref.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback((ref) => {
        if (!ref.current) return;
        ref.current.swiper.slideNext();
    }, []);

    return (
            <section className="items">
                <div className="container">
                    <h2 className="font-semibold text-center text-4xl my-10 " style={{
                        fontSize: "55px",
                        marginBottom: '10%',
                        marginTop: '90px',
                        fontWeight: "300"
                    }}>ПОХОЖИЕ ТОВАРЫ</h2>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            ref={sliderSameRef}
                            spaceBetween={35}
                            slidesPerView={4}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div>
                                    <img src={item1} alt="Slide 1" className="swiper-image relative"/>
                                    <div
                                        className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl"
                                        style={{background: "red"}}>-70%
                                    </div>
                                    <p className="swiper-text">Saint Laurent</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item2} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item3} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item1} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">Saint Laurent</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item2} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item3} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2"><span className="line-through">123 000 ₽</span>
                                        <span
                                            style={{color: 'red', fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="absolute top-1/2 z-10 w-full">
                            <button
                                onClick={() => handlePrev(sliderSameRef)}
                                className="border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  left-[-10px]">
                                <FaChevronLeft
                                    size="34"
                                />
                            </button>
                            <button
                                onClick={() => handleNext(sliderSameRef)}
                                className=" border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  right-[-40px]">
                                <FaChevronRight
                                    size="34"
                                />
                            </button>
                        </div>
                    </div>


                </div>
            </section>

    );
};

export default PageOfItemsTwo;