import React from 'react';
import PriceListIcon from "../../icons/PriceListIcon";
import './priceButton.css'
import {Link} from "react-router-dom";
const PriceButton = () => {


    return (
        <Link to={'/admin'}>
            <button className={'price-button'}>
                Прайс-лист
                <div className={'price-button__icon'}>
                    <PriceListIcon/>
                </div>
            </button>
        </Link>
    );
};

export default PriceButton;