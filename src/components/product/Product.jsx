import {ReactComponent as ProductLogo} from "../../assets/vectors/product.svg";
import {ReactComponent as Phone} from "../../assets/vectors/product-phone.svg";

export function Product() {
    return (
        <div>
            <div className="product__content">
                <ProductLogo/>
                <p className="product-text">Изделия премиального качества из самых лучших материалов, ориентируясь на <br/> традиции итальянских производителей.</p>
                <p className="text-white mt-10 border-solid border-b border-gray px-6">СМОТРЕТЬ КОЛЛЕКЦИЮ</p>
            </div>
            <div className="Phone container">
                <Phone/>
            </div>
        </div>
    )
}