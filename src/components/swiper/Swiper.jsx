import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/pagination';
import item1 from "../../assets/images/newsItem1.png"
import item2 from "../../assets/images/newsItem2.png"
import item3 from "../../assets/images/newsItem3.png"

export function Items() {
    return (
        <section className="items mt-28">
            <div className="container">
                <h2 className=" items-title font-semibold text-center text-3xl mb-16">НОВИНКИ</h2>
                <p className=" items-text text-sm text-gray-500 mb-4 text-center">643 ОБНОВЛЕНИЙ</p>
                <Swiper modules={[Navigation]}
                        navigation={true}
                        spaceBetween={35}
                        slidesPerView={4}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src={item1} alt="Slide 1" className="swiper-image"/>
                        <p className="swiper-text">Saint Laurent</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={item2} alt="Slide 2" className="swiper-image"/>
                        <p className="swiper-text">BRUNELLO CUCINELLI</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={item3} alt="Slide 3" className="swiper-image"/>
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

            </div>
            <p className="text-base font-semibold uppercase text-center border-solid border-b border-gray w-fit mx-auto mt-20">СМОТРЕТЬ
                ВСЁ</p>
        </section>
    )
}