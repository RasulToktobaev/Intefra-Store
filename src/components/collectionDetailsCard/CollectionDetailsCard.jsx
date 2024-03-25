import details from "../../assets/images/collectionDetails.png";
import {Button} from "@chakra-ui/react";
import React from "react";

export function CollectionDetailsCard() {
    return (
        <div className="border-gray border-solid border-b border-t py-6 flex items-center gap-12">
            <div className="details-list">
                <img className="details-img" src={details} alt=""/>
                <div>
                    <p className="details-text">Жилет с капюшоном и <br/> наполнителем из пуха <br/> <span
                        style={{fontWeight: "700"}}>Cortigiani</span></p>
                    <div className="details-buttons">
                        <button className="details-btn details-btn--active  hover:bg-black hover:text-white transition-all ">50</button>
                        <button className="details-btn">52</button>
                        <button className="details-btn">54</button>
                        <button className="details-btn">56</button>
                    </div>
                </div>
                <span className="details-price">123 000 ₽</span>
                <span style={{color: 'red', fontWeight: '700'}}>96 000 ₽</span>
            </div>

            <Button colorScheme='blue'
                    background="rgb(25, 4, 4);"
                    width="187px"
                    height="47px"
                    borderRadius="none"

            >Купить</Button>
        </div>
    )
}