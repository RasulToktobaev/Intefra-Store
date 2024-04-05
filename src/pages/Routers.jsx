import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./home";
import {BaseLayout} from "../layouts/baseLayout";
import {Collections} from "./collections";
import {CollectionDetail} from "./detail";
import {Shoes} from "./shoes";
import {RoutesUrls} from "../constans/routesUrls";
import {ProductDetail} from "./product detail";
import Cart from "./cart/Cart";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout/>}>
                <Route path={RoutesUrls.home.path} element={<Home/>}/>
                <Route path='/catalog' element={<h2>catalog</h2>}/>
                <Route path='/catalog/:gender' element={<h2>gender</h2>}/>
                <Route path={RoutesUrls.collection.path} element={<Collections/>}/>
                <Route path={`${RoutesUrls.collection.path}/:slug`} element={<CollectionDetail/>}/>
                <Route path={`${RoutesUrls.product.path}/:slug`} element={<ProductDetail/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/payment' element={<h2>payment</h2>}/>
                <Route path={RoutesUrls.shoes.path} element={<Shoes/>}/>
            </Route>
        </Routes>
    );
};

export default Routers;