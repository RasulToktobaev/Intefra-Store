import React from 'react';
import item1 from "../../assets/images/newsItem1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import item2 from "../../assets/images/newsItem2.png"
import item3 from "../../assets/images/newsItem3.png"

export function Prices () {
    return (
            <section className="items">
                <div className="container">
                    <h2 className="font-semibold text-center text-4xl my-10 " style={{ color: 'red' }}>СКИДКИ</h2>
                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        spaceBetween={35}
                        slidesPerView={4}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div >
                                <img src={item1} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">Saint Laurent</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <img src={item2} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <img src={item3} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <img src={item1} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">Saint Laurent</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <img src={item2} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                <img src={item3} alt="Slide 1" className="w-full h-auto relative"/>
                                <div className="absolute top-0 right-0 text-white font-semibold rounded-full px-4 py-4 text-2xl" style={{background:"red"}}>-70%</div>
                                <p className="text-center mt-2">BRUNELLO CUCINELLI</p>
                                <p className="text-center mt-2"><span className="line-through">123 000 ₽</span> <span style={{ color: 'red' }}> 96 000 ₽</span></p>
                            </div>
                        </SwiperSlide>


                    </Swiper>

                </div>
                <p className="text-base font-semibold uppercase text-center border-solid border-b border-gray w-fit mx-auto">СМОТРЕТЬ
                    БОЛЬШЕ</p>
            </section>
    )
}