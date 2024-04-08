import React from 'react';
import {Input} from "@chakra-ui/react";
import Order from "../order/Order";
import YourOrder from "../yourOrder/YourOrder";

const PaymentDetail = () => {
    return (
        <section className="flex container">
            <div>
                <h2 className="text-xl font-semibold pt-17 pb-8">ДЕТАЛИ ОПЛАТЫ</h2>
                <div className="flex gap-7 mb-10">
                    <Input
                        placeholder="Имя *"
                        width="380px"
                        borderRadius="none"
                        height="47px"
                    />
                    <Input
                        placeholder="Фамилия *"
                        width="380px"
                        borderRadius="none"
                        height="47px"
                    />
                </div>
                <div className="flex gap-64">
                   <h3 className="font-semibold text-xl">Выберите способ получения заказа:</h3>
                   <h3 className="font-semibold text-xl">Страна/регион</h3>
                </div>
                <div className="flex gap-36 mt-7">
                    <div className="flex gap-4">
                        <input type="checkbox"/>
                        <p className="text-black font-normal ">Доставка на дом</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="checkbox"/>
                        <p>Пункт выдачи СДЭК</p>
                    </div>
                    <p>Россия</p>
                </div>
                <h3 className="font-semibold mt-10 mb-6 text-xl">Адрес </h3>
                <div className="gap-8 flex mb-4">
                    <Input
                    width="229px"
                    height="47px"
                    borderRadius="none"
                    placeholder="Город *"
                    />
                    <Input
                        width="546px"
                        height="47px"
                        borderRadius="none"
                        placeholder="Номер дома и название улицы *"
                    />
                </div>
                <div className="flex gap-8 mb-10">
                    <Input
                        height="47px"
                        borderRadius="none"
                        placeholder="Email *"
                        width="389px"
                    />
                    <Input
                        height="47px"
                        borderRadius="none"
                        placeholder="Телефон *"
                        width="389px"
                    />
                </div>
                <h3 className="font-semibold text-xl mb-6">Примечание к заказу</h3>
                <textarea style={{width:'805px', height:"143px", border:'2px solid grey', padding:"15px 21px"}} placeholder="Например, особые пожелания отделу доставки" cols="30" rows="50"  ></textarea>
            </div>
           <YourOrder/>
        </section>

);
};

export default PaymentDetail;