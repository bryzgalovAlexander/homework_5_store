import React from 'react';
import CatalogIcon from "../../icons/catalogIcon";
import './catalogButton.css'
import {Link} from "react-router-dom";

const CatalogButton = () => {
    return (
        <Link to={'/catalog'}>
        <button className={'catalog-button'}>
            Каталог
            <div className={'catalog-button__icon'}>
                <CatalogIcon/>
            </div>
        </button>
        </Link>
    );
};

export default CatalogButton;