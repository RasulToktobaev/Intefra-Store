import React from "react";
import clothesOne from "../../../assets/images/newsItem1.png"

function ProductCardDiscount({ product }) {
    return (
        <div className="product-card">
            <a className="product-card__image" href="#" target="_blank">
                <img src={clothesOne} alt="Product List Card UI"/>
                <div
                    className="absolute top-0 right-0 text-white font-semibold rounded-full px-6 py-8 text-lg"
                    style={{background: "red"}}>-70%
                </div>
            </a>
            <div className="product-card__body">
                <a className="product-card__subtitle text-center" href="#"><p>Женская сумка-клатч <br/>
                    Kate через плечо</p></a>
                <a className="product-card__title text-center font-bold" href="#"><p>Saint Laurent</p></a>
                <div className="details-buttons flex justify-center mb-6">
                    <button className="details-btn">50</button>
                    <button className="details-btn">52</button>
                    <button className="details-btn">54</button>
                    <button className="details-btn">56</button>
                </div>
                <div className="product-card__price text-center">
                    <span className="price__current font-bold ">96 000 ₽</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCardDiscount;
