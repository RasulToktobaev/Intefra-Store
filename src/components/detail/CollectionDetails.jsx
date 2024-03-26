import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useState} from "react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {CollectionDetailsCard} from "../collectionDetailsCard";
import DetailMen from "../../assets/images/details-men.png"
import detailOne from "../../assets/images/details-men-one.png"
import detailTwo from "../../assets/images/details-men-two.png"
import detailThree from "../../assets/images/details-men-three.png"
import collectionMen from "../../assets/images/collection-three.png"
import collectionMenOne from "../../assets/images/collection-one.png"
import collectionMenTwo from "../../assets/images/collection-two.png"




export function CollectionDetails () {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);



    return (
        <div className='border-gray border-solid border-t mt-10'>
            <div className="container details-content">

                <div className="details-slider max-w-[620px]">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}

                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img  src={DetailMen} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width:'620px', height:"816px"}} src={collectionMen} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width:'620px', height:"816px"}} src={collectionMenTwo} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width:'620px', height:"816px"}} src={collectionMenOne} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={DetailMen}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width:'620px', height:"816px"}} src={collectionMen} />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={32}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mt-5"
                    >
                        <SwiperSlide>
                            <img src={detailOne}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={detailTwo} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={detailThree} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={detailOne} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={detailTwo} />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="details-about">
                    <h2 className="details-title mb-10">ОБРАЗ В ДЕТАЛЯХ</h2>

                    <div>
                     <CollectionDetailsCard/>
                     <CollectionDetailsCard/>
                     <CollectionDetailsCard/>
                     <CollectionDetailsCard/>
                    </div>

                </div>
            </div>
        </div>

    )
}