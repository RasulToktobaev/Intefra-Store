import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import {Swiper, SwiperSlide} from 'swiper/react';
import React, {useCallback, useEffect, useRef, useState} from "react";
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import collectionMen from "../../assets/images/collection-three.png"
import collectionMenOne from "../../assets/images/collection-one.png"
import collectionMenTwo from "../../assets/images/collection-two.png"
import {Button} from "@chakra-ui/react";
import brandOne from '../../assets/images/brandOne.png'
import ArtiganiBoutique from '../../assets/images/ArtiganiBoutiqe.png'
import item1 from "../../assets/images/newsItem1.png";
import item2 from "../../assets/images/newsItem2.png";
import item3 from "../../assets/images/newsItem3.png";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import Bruno from "../../assets/images/BrunoBuccarati.png"
import BrunoMan1 from "../../assets/images/BrunoMan1.png"
import BrunoMan2 from "../../assets/images/BrunoMan2.png"
import BrunoMan3 from "../../assets/images/BrunoMan3.png"
import BrunoMan4 from "../../assets/images/BrunoMan4.png"
import BrunoMan5 from "../../assets/images/BrunoMan5.png"
import {useDispatch, useSelector} from "react-redux";
import {getOneProduct} from "../../store/reducers/oneProduct/oneProduct";
import {Link, useParams} from "react-router-dom";
import {RoutesUrls} from "../../constans/routesUrls";


export function PageOfProduct() {


    const dispatch = useDispatch()
    const {data, status, error} = useSelector((state) => state.product)

    const params = useParams()

    useEffect(() => {
        dispatch(getOneProduct({id: params.slug}))
    }, []);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const sliderWithBuyingRef = useRef(null)
    const sliderSameRef = useRef(null)
    const sliderLookedRef = useRef(null)

    const handlePrev = useCallback((ref) => {
        if (!ref.current) return;
        ref.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback((ref) => {
        if (!ref.current) return;
        ref.current.swiper.slideNext();
    }, []);


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
                        thumbs={{swiper: thumbsSwiper}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >

                        <SwiperSlide>
                            <img style={{width: '620px', height: '930px', objectFit: 'cover'}} src={data.image?.black}/>
                            <div
                                className="absolute top-0 right-0 text-white font-semibold rounded-full px-8 py-14 text-4xl"
                                style={{background: "red"}}>-70%
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '620px', height: '930px', objectFit: 'cover'}} src={data.image?.grey}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '620px', height: '930px', objectFit: 'cover'}} src={data.image?.white}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '620px', height: '930px', objectFit: 'cover'}} src={data.image?.grey}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '620px', height: '930px', objectFit: 'cover'}} src={data.image?.white}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '620px', height: '930px', objectFit: 'cover'}} src={data.image?.grey}/>
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
                            <img style={{width: '98px', height: "131px"}} src={data.image?.black}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '98px', height: "131px"}} src={data.image?.white}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '98px', height: "131px"}} src={data.image?.grey}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '98px', height: "131px"}} src={data.image?.white}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '98px', height: "131px"}} src={data.image?.black}/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="details-about">
                    <h2 className="details-title mb-1">{data.title}</h2>
                    <p className="details-articule mb-5 ">Артикул: MTS806699/.C1091-1-1</p>
                    <div className="flex items-center">
                        <span className="details-price mr-5" style={{fontSize: '20px'}}> Цена : {data.price} $</span>
                        <span style={{
                            color: 'red',
                            fontWeight: '700',
                            fontSize: '20px'
                        }}> Цена со скидкой : {data.priceSale} $</span>
                    </div>
                    <div className="details-buttons mb-7">
                        <p style={{marginRight: '15px',}}>РАЗМЕРЫ :</p>
                        {data && data.size && data.size.map((el) => {
                            return <button
                                className="details-btn details-btn--active hover:bg-black hover:text-white transition-all  rounded text-lg mr-5">{el}</button>
                        })}
                    </div>
                    <div className="mb-7">
                        <Button className="mr-5" colorScheme='blue' background="rgb(25, 4, 4);" width="187px"
                                height="47px" borderRadius="none">В КОРЗИНУ</Button>
                        <Button colorScheme='blue' background="rgb(25, 4, 4);" width="187px" height="47px"
                                borderRadius="none">БЫСТРЫЙ ЗАКАЗ</Button>
                    </div>
                    <div className="border-b-2 flex mb-5"><p style={{fontWeight: '700'}}> Категория : </p>
                        <span>{data.category}</span>
                    </div>

                    {/*<p className="details-text mb-5">Куртка-бомбер из замшевого ширлинга Texture, который имеет*/}
                    {/*    бархатистый и матовый вид с <br/> наружной стороны. Пушистая и теплая внутренняя сторона*/}
                    {/*    обеспечивает должную защиту для <br/> холодного сезона.*/}
                    {/*    <br/>*/}
                    {/*    <br/> <span style={{fontWeight: "700"}}>Данная модель большемерит на размер.</span></p>*/}
                    <p className="details-text mb-5"><span style={{fontWeight: "700"}}>Материал:</span> 100%
                        Дубленая
                        Кожа</p>
                    <p className="details-text mb-5"><span style={{fontWeight: "700"}}>Подкладка:</span> 100% Овчина
                    </p>
                    <p className="details-text "><span style={{fontWeight: "700"}}>Производитель:</span> Италия</p>
                    <div style={{marginTop: "20px", display:"flex" , marginBottom:'20px'}}>
                        <p style={{fontWeight:'600'}}> Цвета :</p>
                        <p> {data.colors}</p>
                    </div>

                    <div className="border-b-2 mb-5"></div>
                    <div className="flex mb-7">
                        <div className=" border mr-5">
                            <img src={brandOne} alt=""/>
                        </div>
                        <div className="flex " style={{background: "whitesmoke"}}>
                            <img className="mr-5" src={ArtiganiBoutique} alt=""/>
                            <div className="mt-5">
                                <p style={{fontWeight: "600", color: 'green'}}>Товар в наличии: {data.inStock} штук</p>
                                <a href="#" style={{color: 'red'}}>www.artigiani.boutique</a>
                                <p>Санкт-Петербург, Большой проспект ПС 13 <span className="invisible">.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <Link to={RoutesUrls.collection.path} className="mr-7 underline">Смотреть всю коллекцию</Link>
                        <a href="#" className="mr-7 underline">Смотреть все товары бренда</a>
                        <a href="#" className="mr-7 underline">Смотреть все товары для мужчин</a>
                    </div>
                </div>
            </div>
            <section className="items">
                <div className="container">
                    <h2 className="font-semibold text-center text-4xl my-10 " style={{
                        fontSize: "55px",
                        marginBottom: '10%',
                        marginTop: '90px',
                        fontWeight: "300"
                    }}>С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h2>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            ref={sliderWithBuyingRef}
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
                                    <p className="text-center mt-2">
                                        <span
                                            style={{fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item3} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">BRUNELLO CUCINELLI</p>
                                    <p className="text-center mt-2">
                                        <span
                                            style={{fontWeight: '700'}}> 96 000 ₽</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={item1} alt="Slide 1" className="swiper-image relative"/>
                                    <p className="swiper-text">Saint Laurent</p>
                                    <p className="text-center mt-2">
                                        <span
                                            style={{fontWeight: '700'}}> 96 000 ₽</span></p>
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
                                onClick={() => handlePrev(sliderWithBuyingRef)}
                                className="border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  left-[-10px]">
                                <FaChevronLeft
                                    size="34"
                                />
                            </button>
                            <button
                                onClick={() => handleNext(sliderWithBuyingRef)}
                                className=" border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  right-[-40px]">
                                <FaChevronRight
                                    size="34"
                                />
                            </button>
                        </div>
                    </div>


                </div>
            </section>
            <div className=" mt-12 border-b-2"></div>
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
            <div className=" mt-12 border-b-2"></div>
            <section className="items">
                <div className="container">
                    <h2 className="font-semibold text-center text-4xl my-10 " style={{
                        fontSize: "55px",
                        marginBottom: '10%',
                        marginTop: '90px',
                        fontWeight: "300"
                    }}>РАНЕЕ ВЫ СМОТРЕЛИ</h2>

                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            ref={sliderLookedRef}
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
                                onClick={() => handlePrev(sliderLookedRef)}
                                className="border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  left-[-10px]">
                                <FaChevronLeft
                                    size="34"
                                />
                            </button>
                            <button
                                onClick={() => handleNext(sliderLookedRef)}
                                className=" border-solid border border-gray stroke-gray w-[60px] h-[60px] grid place-items-center bg-transparent absolute  right-[-40px]">
                                <FaChevronRight
                                    size="34"
                                />
                            </button>
                        </div>
                    </div>


                </div>

            </section>
            <div className=" mt-12 border-b-2"></div>
        </div>
    )


}