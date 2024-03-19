import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import item1 from "../../assets/images/newsItem1.png"
import item2 from "../../assets/images/newsItem2.png"
import item3 from "../../assets/images/newsItem3.png"

export function Items() {
    return (
            <section className="items mt-28">
                <div className="container">
                    <h2 className="font-semibold text-center text-3xl">НОВИНКИ</h2>
                    <p className="text-sm text-gray-500 mb-4 text-center">643 ОБНОВЛЕНИЙ</p>
                    <Swiper modules={[Navigation]}
                            navigation={true}
                            spaceBetween={35}
                            slidesPerView={4}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img src={item1} alt="Slide 1" className="w-full h-auto"/>
                            <p className="text-center mt-2">Saint Laurent</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item2} alt="Slide 2" className="w-full h-auto"/>
                            <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item3} alt="Slide 3" className="w-full h-auto"/>
                            <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item1} alt="Slide 4" className="w-full h-auto"/>
                            <p className="text-center mt-2">Saint Laurent</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item1} alt="Slide 5" className="w-full h-auto"/>
                            <p className="text-center mt-2">Saint Laurent</p>
                        </SwiperSlide>

                    </Swiper>

                </div>
                <p className="text-base font-semibold uppercase text-center border-solid border-b border-gray w-fit mx-auto">СМОТРЕТЬ
                    ВСЁ</p>
            </section>
    )
}