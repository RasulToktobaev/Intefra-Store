import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Cdek} from "../../assets/vectors/CDEK.svg"
import {Button} from "@chakra-ui/react";

const YourOrder = () => {

    const {data} = useSelector(state => state.cart)

    const dispatch = useDispatch()

    return (
        <div style={{width: "519px", height: "650px", background: 'rgb(249, 249, 249)', marginLeft: '100px'}}>
            <h2 className="mt-8 ml-10 text-2xl">ВАШ ЗАКАЗ</h2>
            {
                data.map((item) => (
                    <div className="flex ml-2 mt-8">
                        <img style={{
                            width: "120px",
                            height: '90px',
                            objectFit: "cover",
                            background: 'none',
                            borderRadius: '15px'
                        }} src={item.image.black} alt=""/>
                        <div>
                            <p className="pl-4">{item.title}</p>
                            <div className="mt-6 flex gap-4">
                               <p className="text-gray"> Размеры:{
                                   item.size.map((size) => (
                                       <span className="px-2 py-2">{size}</span>
                                   ))
                               }</p>
                                <span>Количество:{item.count}</span>
                            </div>
                        </div>
                        <p>{item.price}$</p>
                    </div>

                ))
            }
            <div className='flex gap-28 mt-8 ml-10 border-gray border-solid border-b '>
                <div className="border-gray border-solid border-t">
                    <div className='flex gap-48 mb-5 mt-4'>
                        <p className="font-semibold">Сумма заказа</p>
                        <p>{data.reduce((acc, rec) => acc + rec.price * rec.count, 0)}$</p>
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold">Сумма скидки</p>
                    </div>
                    <div className='flex gap-48 mb-5'>
                        <p className="font-semibold">К оплате</p>
                        <p className="font-semibold">{data.reduce((acc, rec) => acc + (rec?.priceSale || rec.price) * rec.count, 0)}$</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center ml-10 gap-2">
                <div className="relative right-36 top-12">
                    <Cdek/>
                </div>
                <p style={{fontSize:"12px", marginLeft:"66px", marginTop:"10px"}}><span style={{fontWeight:'500'}}>Оплата осуществляется курьеру СДЭК картой <br/> или наличными. </span> Оплата после примерки</p>
            </div>
            <Button
                background="black"
                border="none"
                borderRadius="none"
                color="white"
                width="400px"
                height="47px"
                marginTop="63px"
                marginLeft="15px"
            >ПОДТВЕРДИТЬ ЗАКАЗ
            </Button>
        </div>
    );
};

export default YourOrder;