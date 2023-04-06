import React from 'react';
import './header.css'
import MailIcon from "../icons/mailIcon";
import PlaceIcon from "../icons/placeIcon";
import Line from "../icons/line";
import ShortLine from "../icons/shortLine";
import SultanLogo from "../icons/sultanLogo";
import OnlineCheck from "../icons/onlineCheck";
import LongLine from "../icons/longLine";
import BasketIcon from "../icons/basketIcon";
import img from '../../images/Group 102.png';
import PriceButton from "../buttons/priceButton/priceButton";
import CatalogButton from "../buttons/catalogButton/catalogButton";
import Input from "../input/input";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

const Header = () => {

    const basket = useAppSelector(state => state.reducer.basket);
    const totalProductsPrice = useAppSelector(state => state.reducer.totalProductsPrice);
    const totalProducts = basket.reduce((acc, cur) => acc + cur.count, 0);


    return (
        <header>
            <div className={'container'}>
                <div className={'header__list'}>
                    <div className={'header__info'}>
                        <PlaceIcon/>
                        <div className={'header__info-box'}>
                            <li className={'header__h1'}>г. Кокчетав, ул. Ж. Ташенова 129Б</li>
                            <p className={'header__h2'}>(Рынок Восточный)</p>
                        </div>
                    </div>
                    <Line/>
                    <div className={'header__info'}>
                        <MailIcon/>
                        <div className={'header__info-box'}>
                            <li className={'header__h1'}>opt.sultan@mail.ru</li>
                            <p className={'header__h2'}>На связи в любое время</p>
                        </div>
                    </div>
                </div>
                <div className={'header__list'}>
                    <li className={'header__list-item'}>О компании</li>
                    <ShortLine/>
                    <li className={'header__list-item'}>Доставка и оплата</li>
                    <ShortLine/>
                    <li className={'header__list-item'}>Возврат</li>
                    <ShortLine/>
                    <li className={'header__list-item'}>Контакты</li>
                </div>
            </div>
            <div className={'divider'}/>
            <div className={'container'}>
                <section className={'second-section'}>
                    <Link to={'/'}>
                        <a className={'second-section__logo'}>
                            <SultanLogo/>
                        </a>
                    </Link>
                    <div className={'second-section__catalog-box'}>
                        <CatalogButton/>
                    </div>
                    <Input/>
                    <div className={'second-section__call-box'}>
                        <div className={'header__h1'}>+7 (777) 490-00-91</div>
                        <div className={'header__h2'}>время работы: 9:00-20:00</div>
                        <div className={'header__h3'} >Заказать звонок</div>
                    </div>
                    <div className={'second-section__callback'}>
                        <img alt={'women'} src={img}/>
                        <div className={'second-section__online-check'}>
                            <OnlineCheck/>
                        </div>
                    </div>
                    <div className={'second-section__price-box'}>
                        <PriceButton />
                    </div>
                    <div className={'second-section__basket-box'}>
                        <Link to={'/basket'}>
                            <div className={'second-section__basket-container'}>
                                { basket.length > 0 ? <span className={'second-section__basket-quantity'}>{totalProducts}</span> : null }
                                <BasketIcon/>
                            </div>
                        </Link>
                        <div className={'second-section__basket-info-box'}>
                            <p className={'header__h2'}>Корзина</p>
                            <p className={'header__h1'}>{totalProductsPrice + ' ₸'}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className={'divider'}/>
        </header>
    );
};

export default Header;