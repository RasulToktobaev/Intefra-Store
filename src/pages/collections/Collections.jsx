import {Work} from "../../components/work";
import {Filtered} from "../../components/collections";
import {Cards} from "../../components/cards";

export function Collections() {
    return (
        <>
            <Filtered/>
            <Cards/>
            <Work/>
        </>
    )
}