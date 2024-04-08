import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import BlackShoes from "../../assets/images/BlackShoes.jpg";
import shoes from "../../assets/images/shoes.jpg";
import mexom from "../../assets/images/Mexom.jpg";
import open from "../../assets/images/Open-walk.jpg";
import keds from "../../assets/images/Keds.jpg";
import React from "react";
import {useState} from "react";
import ProductCard from "../../components/collectionsPage/category-cards/category-card";
import arrowD from "../../assets/images/Arrow-down.jpg"
import arrowU from "../../assets/images/Arrow-up.jpg"
import ProductCardBruno from "../../components/collectionsPage/category-cards/category-card-item3";
import ProductCardDiscount from "../../components/collectionsPage/category-cards/category-card-disc";


export function Filtered() {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });


    const handlePriceChange = (value) => {
        setPriceRange(value);
    };
    return (
        <section className="category">

            <h2 className="collection-title">ОБУВЬ</h2>
            <div className="filtered-option mb-7">
                <p>Мы собрали шикарную коллекцию итальянских марок обуви от самых ведущих производителей: </p>
            </div>
            <div className="container flex brand-content">
                <div className=" brand-box border-solid px-6 border-r border-gray">
                    <p>Loro Piana</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Kiton</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Brunello Cucinelli</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Santoni</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Moreschi</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Barrett</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Testoni</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Artigiani</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Moreschi</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Zegna</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>Valentino</p>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <p>и другие…</p>
                </div>

            </div>
            <div className="filtered-sort">
                <div className="container flex brand-content">
                    <div className=" brand-box border-solid px-5 py-20  mr-7 ">
                        <img className="brand-image" src={shoes} alt=""/>
                        <br/>
                        <br/>
                        <br/>
                        <p className="text-center p-5 font-bold">Ботинки</p>
                    </div>
                    <div className=" brand-box border-solid px-5 py-20  mr-7 ">
                        <img className="brand-image" src={keds} alt=""/>
                        <br/>
                        <br/>
                        <br/>
                        <p className="text-center p-5 font-bold">Кросовки и кеды</p>
                    </div>
                    <div className=" brand-box border-solid px-5 py-20  mr-7 ">
                        <img className="brand-image" src={mexom} alt=""/>
                        <br/>
                        <br/>
                        <br/>
                        <p className="text-center p-5 font-bold">Обувь с мехом</p>
                    </div>
                    <div className=" brand-box border-solid px-5 py-20  mr-7 ">
                        <img className="brand-image" src={open} alt=""/>
                        <br/>
                        <br/>
                        <br/>
                        <p className="text-center p-5 font-bold">Open-walk</p>
                    </div>
                    <div className=" brand-box border-solid px-5 py-20  mr-7 ">
                        <img className="brand-image" src={shoes} alt=""/>
                        <br/>
                        <br/>
                        <br/>
                        <p className="text-center p-5 font-bold">Скидки до -70%</p>
                    </div>
                    <div className=" brand-box border-solid px-5 py-20  mr-7 ">
                        <img className="brand-image" src={BlackShoes} alt=""/>
                        <br/>
                        <br/>
                        <br/>
                        <p className="text-center p-5 font-bold">Летняя обувь</p>
                    </div>

                </div>
            </div>

            <div className="container ">

                <h2 className="pb-7 font-bold">Категории</h2>
                <div className="category-bar flex flex-col">
                    <div className="category-bar-block flex mb-3">
                        <p>Все</p>
                        <button className="details-btn--active rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '200px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>Ботинки</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '165px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>Кросовки и кеды</p>
                        <button className="category-btn rounded-full text-lg pl-5 pr-5"
                                style={{marginLeft: '100px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>Обувь с мехом</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '115px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>Open-walk</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '149px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>Скидки до -70%</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '110px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>Летняя обувь</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '129px'}}>6
                        </button>
                    </div>

                </div>
            </div>
            <div className="products-th">
            <div className="container">
                <div className="category-bar flex flex-col">
                    <div className="flex">
                    <h2 className="pt-10 font-bold pb-10">Пол</h2>
                    <div className="arrow-down"  style={{marginLeft: '205px' , marginTop:'40px'}}><img src={arrowD} alt=""/></div>
                    </div>
                    <div className="flex">
                        <h2 className="pb-10 font-bold">Бренд</h2>
                        <div className="arrow-down" style={{marginLeft: '190px', marginTop: '4px'}}><img src={arrowD} alt=""/></div>
                    </div>
                    <div className="flex">
                        <h2 className="pb-10 font-bold">Размер</h2>
                        <div className="arrow-down" style={{marginLeft: '183px', marginTop: '1px'}}><img src={arrowD} alt=""/></div>
                    </div>
                    <div className="flex">
                        <h2 className=" pb-10 font-bold">Цвет</h2>
                        <div className="arrow-down" style={{marginLeft: '202px', marginBottom: '1px' , width:'20'}}><img src={arrowU} alt=""/></div>
                    </div>
                </div>
            </div>
                <div className="container">

                    <div className="category-bar flex flex-col">
                    <div className="category-bar-block flex mb-3">
                        <p>бежевый</p>
                        <button className="details-btn--active rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '165px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>белый</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '186px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>бордовый</p>
                        <button className="category-btn rounded-full text-lg pl-5 pr-5"
                                style={{marginLeft: '158px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>голубой</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '174px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>зеленый</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '172px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>коричневый</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '142px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>оранжевый</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '149px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>серый</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '188px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>синий</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '191px'}}>6
                        </button>
                    </div>
                    <div className="category-bar-block flex mb-3">
                        <p>черный</p>
                        <button className="category-btn rounded-full text-lg  pl-5 pr-5"
                                style={{marginLeft: '180px'}}>6
                        </button>
                    </div>

                </div>
            </div>
            <div className="container">
                <h2 className="pb-7 font-bold">Цeна</h2>
                <div className="category-bar flex flex-col">
                    <div className="category-bar-block flex mb-3" style={{width: "284px", color: "gray"}}>
                        <InputRange
                            minValue={0}
                            maxValue={340000}
                            value={priceRange}
                            onChange={handlePriceChange}
                        />
                    </div>
                </div>
            </div>

                <div className="products-container">
                    <div className="products-card-one">
                        <ProductCard/>
                    </div>
                    <div className="products-card-two">
                        <ProductCardBruno/>
                    </div>
                    <div className="products-card-three">
                        <ProductCardDiscount/>
                    </div>
                    <div className="products-card-four">
                        <ProductCard/>
                    </div>
                    <div className="products-card-five">
                        <ProductCardBruno/>
                    </div>
                    <div className="products-card-six">
                        <ProductCardDiscount/>
                    </div>
                    <div className="products-card-seven">
                        <ProductCard/>
                    </div>
                    <div className="products-card-eight">
                        <ProductCardBruno/>
                    </div>
                    <div className="products-card-nine">
                        <ProductCardDiscount/>
                    </div>


                </div>
            </div>


        </section>
    )
}