import React from 'react';
import {useSelector} from "react-redux";
import {Button} from "@chakra-ui/react";

const Cart = () => {

    const {data} = useSelector(state => state.cart)

    return (
        <div>
            <h2>Cart</h2>

            <ul className="flex flex-col gap-4">
                <li className="flex justify-between">
                    <h3>Название </h3>
                    <h3>Количество </h3>
                    <h3>Цена </h3>
                    <h3>Действие </h3>
                </li>
                {
                    data.map((item) => (
                        <li className='flex justify-between'>
                            <h3>{item.title}</h3>
                            <p>{item.count}</p>
                            <p>{item.price}</p>
                            <div className="flex gap-2">
                                <Button>+</Button>
                                <Button>-</Button>
                            </div>
                        </li>
                    ))
                }
            </ul>


        </div>
    );
};

export default Cart;