import React from 'react';
import './breadCrumbs.css';
import {Link} from "react-router-dom";

const BreadCrumbs = () => {
    return (
        <div className={'container'}>
            <div className={'bread-crumbs__box'}>
                <Link to={'/'}>
                    <p className={'bread-crumbs'}>Главная</p>
                </Link>
                <p className={'bread-crumbs__focused'}>Каталог</p>
            </div>
        </div>
    );
};

export default BreadCrumbs;