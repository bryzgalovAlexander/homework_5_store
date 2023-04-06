import React from 'react';
import './bannerButton.css';
import {Link} from "react-router-dom";
import PriceListIcon from "../../icons/PriceListIcon";

const BannerButton = () => {
    return (
        <Link to={'/catalog'}>
            <button className={'banner-button'}>
                В КАТАЛОГ
            </button>
        </Link>

    );
};

export default BannerButton;