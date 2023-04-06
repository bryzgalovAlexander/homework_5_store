import React from 'react';
import './mobileHeader.css'
import MenuMobileIcon from "../../icons/MobileMenuIcon";
import MobileSultanLogo from "../../icons/mobileSultanLogo";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import MobileCatalogIcon from "../../icons/mobileCatalogIcon";
import MobileSearchIcon from "../../icons/mobileSearchIcon";
import ShortLine from "../../icons/shortLine";
import MobileBasketIcon from "../../icons/mobileBasketIcon";

const MobileHeader = () => {

    const basket = useAppSelector(state => state.reducer.basket);
    const totalProducts = basket.reduce((acc, cur) => acc + cur.count, 0);


    return (
        <>
            <div className={'mobile-container'}>

                <div className={'header'}>

                    <div className={'header__first-section'}>

                        <button className={'menu-icon'}>
                            <MenuMobileIcon/>
                        </button>
                        <Link to={'/'}>
                            <MobileSultanLogo/>
                        </Link>
                        <Link to={'/basket'} className={'header__basket-box'}>
                            <div>
                                {basket.length > 0 ?
                                    <span className={'header__basket-quantity'}>{totalProducts}</span> : null}
                                <MobileBasketIcon/>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
            <div className={'mobile-divider'}/>

            <div className={'mobile-container'}>
                <div className={'header'}>
                    <div className={'header__second-section'}>
                        <Link className={'header__second-section'} to={'/catalog'}>
                            <div className={'header__button-box'}>

                                <MobileCatalogIcon/>
                                <button className={'header__button'}>Каталог</button>
                            </div>
                        </Link>
                        <ShortLine/>
                        <Link to={'/'} className={'header__second-section'}>
                            <div className={'header__button-box'}>
                                <MobileSearchIcon/>
                                <button className={'header__button'}>Поиск</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'mobile-divider'}/>
        </>
    );
};

export default MobileHeader;