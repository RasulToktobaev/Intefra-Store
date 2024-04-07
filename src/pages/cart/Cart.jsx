import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@chakra-ui/react";
import {addCart, removeCart} from "../../store/reducers/cart/cart";
import {toast} from "react-toastify";
import {ReactComponent as Cdek} from "../../assets/vectors/CDEK.svg"
import {Work} from "../../components/work";
import {ReactComponent as Price} from "../../assets/vectors/cartPrice.svg";
import Order from "../../components/order/Order";

const Cart = () => {

    const {data} = useSelector(state => state.cart)

    const dispatch = useDispatch()

    return (
        <section>
            <div className="container flex">

                <ul className="flex flex-col gap-4">
                    <div className="flex gap-52 ">
                        <h3>Товар </h3>
                        <h3>Количество </h3>
                        <h3>Цена </h3>
                        <h3>Действие </h3>
                    </div>

                    {
                        data.map((item) => (
                            <div className='flex gap-52  border-solid border-gray border-t'>
                                <div className="flex gap-2 flex-col">
                                    <img className="w-36 h-36 rounded-2xl mt-7" src={item.image.black} alt=""/>
                                    <h3>{item.title} </h3>
                                    <div className="flex">
                                        <p>Размеры :</p>
                                        <p className='relative left-4 bottom-4'>
                                            {
                                                item.size.map((size) => (
                                                    <span
                                                        className={`px-2 py-4 inline-block `}>{size.toUpperCase()}</span>
                                                ))
                                            }
                                        </p>
                                    </div>

                                </div>
                                <div className='flex gap-44 mt-16 '>
                                    <p style={{position: 'relative', right: "70px"}}>{item.count}</p>
                                    <p style={{marginLeft: '10px'}}>{item?.priceSale || item.price}$</p>
                                    <div className="flex gap-2">
                                        <Button onClick={() => {
                                            dispatch(addCart(item))
                                            toast('Добавлено в корзину')
                                        }}>+</Button>
                                        <Button onClick={() => {
                                            dispatch(removeCart(item))
                                            toast('Удалено из корзины')
                                        }}>-</Button>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </ul>
           <Order/>
            </div>
            <div className="flex gap-4 container">
                <Price/>
                <button style={{textDecoration:'underline'}}>Ввести купон</button>
            </div>
            <Work/>
        </section>

    );
};

export default Cart;