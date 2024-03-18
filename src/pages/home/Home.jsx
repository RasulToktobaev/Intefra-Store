import {Gender} from "../../components/gender";
import {Brand} from "../../components/brand";
import {Collection} from "../../components/collection";
import {Product} from "../../components/product";
import {Work} from "../../components/work";

export function Home() {
    return <>
        <Gender/>
        <Brand/>
        <Collection/>
        <Product/>
        <Work/>
    </>
}