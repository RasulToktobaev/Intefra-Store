import React from 'react';
import {Input} from "@chakra-ui/react";

const PaymentDetail = () => {
    return (
        <section>
            <div className="container">
                <h2>ДЕТАЛИ ОПЛАТЫ</h2>
                <div>
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
                <div>
                   <h3>Выберите способ получения заказа:</h3>
                   <h3>Страна/регион</h3>
                </div>
                <div>
                    <div>
                        <input type="checkbox"/>
                        <p>Доставка на дом</p>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <p>Пункт выдачи СДЭК</p>
                    </div>
                    <p>Россия</p>
                </div>
                <h3>Адрес </h3>
                <div>
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
                <div>
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
                <h3>Примечание к заказу</h3>
                <textarea style={{width:'805px'}} cols="30" rows="50" ></textarea>
            </div>
        </section>
    );
};

export default PaymentDetail;