import {Gender} from "../../components/gender";
import {Brand} from "../../components/brand";
import {Collection} from "../../components/collection";
import {Product} from "../../components/product";
import {Work} from "../../components/work";
import {Items, Swiper} from "../../components/swiper";
import {Purfume} from "../../components/purfume";
import {Discount} from "../../components/discount";
import {Prices} from "../../components/prices";

export function Home() {
    return <>
        <Gender/>
        <Brand/>
        <Collection/>
        <Items/>
        <Purfume/>
        <Discount/>
        <Prices/>
        <Product/>
        <Work/>
    </>
}