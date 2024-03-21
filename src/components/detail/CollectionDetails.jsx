import { Button, ButtonGroup } from '@chakra-ui/react'
import details from "../../assets/images/collectionDetails.png"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import React, {useRef} from "react";
import detailsMen from "../../assets/images/details-men.png"
import MenOne from "../../assets/images/details-men-one.png"
import MenTwo from "../../assets/images/details-men-two.png"
export function CollectionDetails () {

    const sliderRef = useRef(null)
    return (
        <div className='border-gray border-solid border-t mt-10'>
            <div className="container details-content">
                <div className="">
                    <Swiper modules={[Navigation]}
                            // ref={sliderRef}
                            // slidesPerView={1}
                            // loop={true}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img src={detailsMen} alt="Slide 1" className="details-swiper"/>
                        </SwiperSlide>
                        {/*<SwiperSlide>*/}
                        {/*    <img src={MenOne} alt="Slide 2" className="swiper-image "/>*/}
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                        {/*    <img src={MenTwo} alt="Slide 3" className="swiper-image "/>*/}
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                        {/*    <img src={details} alt="Slide 4" className="swiper-image"/>*/}
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                        {/*    <img src={details} alt="Slide 5" className="swiper-image"/>*/}
                        {/*</SwiperSlide>*/}
                    </Swiper>
                </div>

                <div className="details-about">
                    <h2 className="details-title">ОБРАЗ В ДЕТАЛЯХ</h2>
                    <div className="details-list">
                        <img className="details-img" src={details} alt=""/>
                        <div>
                            <p className="details-text">Жилет с капюшоном и <br/> наполнителем из пуха <br/> <span style={{fontWeight:"700"}}>Cortigiani</span></p>
                            <div className="details-buttons">
                                <button className="details-btn-active">50</button>
                                <button className="details-btn">52</button>
                                <button className="details-btn">54</button>
                                <button className="details-btn">56</button>
                            </div>
                        </div>
                        <span className="details-price">123 000 ₽</span>
                        <span style={{color: 'red', fontWeight: '700'}}>96 000 ₽</span>
                        <Button colorScheme='blue'
                                background="rgb(25, 4, 4);"
                                width="187px"
                                height="47px"
                                borderRadius="none"

                        >Купить</Button>
                    </div>
                    <div className="details-list">
                        <img className="details-img" src={details} alt=""/>
                        <div>
                            <p className="details-text">Жилет с капюшоном и <br/> наполнителем из пуха <br/> <span style={{fontWeight:"700"}}>Cortigiani</span></p>
                            <div className="details-buttons">
                                <button className="details-btn-active">50</button>
                                <button className="details-btn">52</button>
                                <button className="details-btn">54</button>
                                <button className="details-btn">56</button>
                            </div>
                        </div>
                        <span className="details-price">123 000 ₽</span>
                        <span  style={{color: 'red', fontWeight: '700'}}>96 000 ₽</span>
                        <Button colorScheme='blue'
                                background="rgb(25, 4, 4);"
                                width="187px"
                                height="47px"
                                borderRadius="none"

                        >Купить</Button>
                    </div>
                    <div className="details-list">
                        <img className='details-img' src={details} alt=""/>
                        <div>
                            <p className="details-text">Жилет с капюшоном и <br/> наполнителем из пуха <br/> <span style={{fontWeight:"700"}}>Cortigiani</span></p>
                            <div className="details-buttons">
                                <button className="details-btn-active">50</button>
                                <button className="details-btn">52</button>
                                <button className="details-btn">54</button>
                                <button className="details-btn">56</button>
                            </div>
                        </div>
                        <span className="details-price-three">123 000 ₽</span>
                        <Button colorScheme='blue'
                                background="rgb(25, 4, 4);"
                                width="187px"
                                height="47px"
                                borderRadius="none"

                        >Купить</Button>
                    </div>
                    <div className="details-list">
                        <img className='details-img' src={details} alt=""/>
                        <div>
                            <p className="details-text">Жилет с капюшоном и <br/> наполнителем из пуха <br/> <span style={{fontWeight:"700"}}>Cortigiani</span></p>
                            <div className="details-buttons">
                                <button className="details-btn-active">50</button>
                                <button className="details-btn">52</button>
                                <button className="details-btn">54</button>
                                <button className="details-btn">56</button>
                            </div>
                        </div>
                        <span className="details-price">123 000 ₽</span>
                        <span style={{color: 'red', fontWeight: '700'}}>96 000 ₽</span>
                        <Button colorScheme='blue'
                                background="rgb(25, 4, 4);"
                                width="187px"
                                height="47px"
                                borderRadius="none"

                        >Купить</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}