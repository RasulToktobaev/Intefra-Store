import {ReactComponent as ProductLogo} from "../../assets/vectors/product.svg";
import {ReactComponent as Phone} from "../../assets/vectors/product-phone.svg";
import { Button } from '@chakra-ui/react'
export function Product() {
    return (
        <div className="product">
            <div className="product__content">
                <ProductLogo/>
                <p className="product-text">Изделия премиального качества из самых лучших материалов, ориентируясь на <br/> традиции итальянских производителей.</p>
                <button className="text-white mt-10 border-solid border-b border-gray px-6 cursor-pointer">СМОТРЕТЬ КОЛЛЕКЦИЮ</button>
            </div>
            <div className="Phone container">
                <h3 className="product-title">ОФОРМИТЕ ПОДПИСКУ НА РАССЫЛКУ INTEFRA</h3>
                <div className="product-main">
                    <input placeholder="Имя" className="product-name"/>
                    <input type="number" placeholder="Телефон" className="product-number"/>
                    <Button
                        marginBottom="5px"
                        borderRadius="none"
                        height='48px'
                        width='311px'
                        border="1px solid gray"
                        background="black"
                        color="white"
                    >
                        ОФОРМИТЬ РАССЫЛКУ
                    </Button>
                </div>
                <div className="product-svg">
                    <Phone/>
                </div>
            </div>
        </div>
    )
}