import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import {Swiper, SwiperSlide} from 'swiper/react';
import React, {useCallback, useEffect, useRef, useState} from "react";
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {Button} from "@chakra-ui/react";
import brandOne from '../../assets/images/brandOne.png'
import ArtiganiBoutique from '../../assets/images/ArtiganiBoutiqe.png'
import {useDispatch, useSelector} from "react-redux";
import {getOneProduct} from "../../store/reducers/oneProduct/oneProduct";
import {Link, useParams} from "react-router-dom";
import {RoutesUrls} from "../../constans/routesUrls";
import {addCart} from "../../store/reducers/cart/cart";
import {toast} from "react-toastify";
import {animateScroll as scroll, scrollSpy} from 'react-scroll'
import PageOfItems from "../pageOfItems/PageOfItems";
import PageOfItemsTwo from "../pageOfItemsTwo/PageOfItemsTwo";
import PageOfItemsThree from "../pageOfItemsThree/PageOfItemsThree";


export function PageOfProduct() {


    const dispatch = useDispatch()
    const {data, status, error} = useSelector((state) => state.product)

    const params = useParams()
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        dispatch(getOneProduct({id: params.slug}))
        scrollToTop()
    }, []);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
                            <img style={{width: '98px', height: "131px", objectFit:'cover'}} src={data.image?.black}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '98px', height: "131px", objectFit:'cover'}} src={data.image?.white}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '98px', height: "131px", objectFit:'cover'}} src={data.image?.grey}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '98px', height: "131px", objectFit:'cover'}} src={data.image?.white}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{width: '98px', height: "131px", objectFit:'cover'}} src={data.image?.black}/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="details-about">
                    <h2 className="details-title mb-1">{data.title}</h2>
                    <p className="details-articule mb-5 ">Артикул: MTS806699/.C1091-1-1</p>
                    <div className="flex items-center">

                        <span className="details-price mr-5" style={{fontSize: '20px', textDecoration: data?.priceSale ? 'line-through' : 'none'}}> Цена : {data.price} $</span>
                        {
                            data?.priceSale &&
                            <span style={{
                                color: 'red',
                                fontWeight: '700',
                                fontSize: '20px'
                            }}> Цена со скидкой : {data.priceSale} $</span>
                        }
                    </div>
                    <div className="details-buttons mb-7">
                        <p style={{marginRight: '15px',}}>РАЗМЕРЫ :</p>
                        {data && data.size && data.size.map((el) => {
                            return <button
                                className="details-btn details-btn--active hover:bg-black hover:text-white transition-all  rounded text-lg mr-5 ">{el.toUpperCase()}</button>
                        })}
                    </div>
                    <div className="mb-7">
                        <Button onClick={() => {
                            dispatch(addCart(data))
                            toast('Добавлено в корзину ')
                        }}
                                className="mr-5" colorScheme='blue' background="rgb(25, 4, 4);" width="187px"
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
                    <div className="flex my-4 items-center gap-2">
                        <p style={{fontWeight:'600'}}> Цвета :</p>
                        <p>{
                            data.colors.map((color) =>(
                                 <span style={{background:color}} className={`px-4 py-1 text-white  `}>{color}</span>
                            ))
                        }</p>
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

           <PageOfItems/>
            <div className=" mt-12 border-b-2"></div>
           <PageOfItemsTwo/>
            <div className=" mt-12 border-b-2"></div>
            <PageOfItemsThree/>
            <div className=" mt-12 border-b-2"></div>
        </div>
    )


}