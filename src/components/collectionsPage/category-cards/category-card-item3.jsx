import React from "react";
import clothesThree from "../../../assets/images/newsItem3.png"

function ProductCardBruno({ product }) {
    return (
        <div className="product-card">
            <a className="product-card__image" href="#" target="_blank">
                <img src={clothesThree} alt="Product List Card UI" />
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

export default ProductCardBruno;
