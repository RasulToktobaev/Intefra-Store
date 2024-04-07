import React from 'react';
import {Button} from "@chakra-ui/react";
import {ReactComponent as Cdek} from "../../assets/vectors/CDEK.svg"
import {useDispatch, useSelector} from "react-redux";

const Order = () => {

    const {data} = useSelector(state => state.cart)

    const dispatch = useDispatch()

    return (
            <div style={{width: "360px", height: "450px", background: 'rgb(249, 249, 249)', marginLeft: '100px'}}>
                <h2 className="mt-8 ml-10 text-2xl">ВАШ ЗАКАЗ</h2>
                <div className="flex gap-28 mt-8 ml-10">
                    <p className="font-semibold">Сумма заказа</p>
                    <p className="font-semibold">{data.reduce((acc, rec) => acc + (rec?.priceSale || rec.price) * rec.count, 0)}</p>
                </div>
                <div className='flex gap-28 mt-8 ml-10 border-gray border-solid border-b '>
                    <p className="font-semibold">Сумма скидки</p>
                </div>
                <div className='flex gap-44 mt-8 ml-10 border-gray border-solid border-b py-2'>
                    <p className="font-semibold">Итого</p>
                    <p className="font-semibold">{data.reduce((acc, rec) => acc + (rec?.priceSale || rec.price) * rec.count, 0)}</p>
                </div>
                <div className="flex flex-col items-center ml-10 gap-2">
                    <div className="relative right-36 top-12">
                        <Cdek/>
                    </div>
                    <p className="font-semibold">Бесплатная доставка <br/>в случае покупки товара</p>
                    <p className="text-gray">Доставка в случае отказа <br/> 1500 руб.</p>
                </div>
                <Button
                    background="black"
                    border="none"
                    borderRadius="none"
                    color="white"
                    width="273px"
                    height="47px"
                    marginTop="18px"
                    marginLeft="40px"
                >ОФОРМИТЬ ЗАКАЗ</Button>
            </div>
    );
};

export default Order;