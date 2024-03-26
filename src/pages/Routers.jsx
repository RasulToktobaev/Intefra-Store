import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./home";
import {BaseLayout} from "../layouts/baseLayout";
import {Collections} from "./collections";
import {CollectionDetail} from "./detail";
import {Shoes} from "./shoes";

const Routers = () => {
    return (
        <Routes>
        <Route path='/' element={<BaseLayout />}>
            <Route index element={<Home/>}/>
            <Route path='/catalog' element={<h2>catalog</h2>}/>
            <Route path='/catalog/:gender' element={<h2>gender</h2>}/>
            <Route path='/collection' element={<Collections/>}/>
            <Route path='/collection/:detailSlug' element={<CollectionDetail/>}/>
            <Route path='/products/:productSlug' element={<h2>products detail</h2>}/>
            <Route path='/cart' element={<h2>cart</h2>}/>
            <Route path='/payment' element={<h2>payment</h2>}/>
            <Route path='/shoes' element={<Shoes/>}/>
        </Route>
        </Routes>
    );
};

export default Routers;