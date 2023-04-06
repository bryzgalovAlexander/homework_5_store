import React from 'react';
import OrderButton from "../buttons/orderButton/orderButton";
import './basket.css';
import '../catalog/breadCrumbs/breadCrumbs.css'
import BasketCards from "./basketCard/basketCards";
import {useAppSelector} from "../../hooks/redux";
import {IBasket} from "../../models/types";
import {Link} from "react-router-dom";
import Modal from "./modal/modal";

const Basket = () => {

    const modalMode = useAppSelector(store => store.reducer.modalMode)
    const basket = useAppSelector(store => store.reducer.basket);
    const totalProductsPrice = useAppSelector(store => store.reducer.totalProductsPrice);

    return (
        <div className={'container'}>
            { modalMode ? <Modal/> : null}
            <div>
                <div className={'container'}>
                    <div className={'bread-crumbs__box'}>
                        <Link to={'/'}>
                            <p className={'bread-crumbs'}>Главная</p>
                        </Link>
                        <p className={'bread-crumbs__focused'}>Корзина</p>
                    </div>
                </div>
                <div>
                    <p className={'catalog__title'}>КОРЗИНА</p>
                </div>
                <div className={'basket__card-container'}>
                    { basket.map((basketCard: IBasket) => <BasketCards key={basketCard.barcode} {...basketCard}/>) }
                </div>
                <div className={'basket__order-box'}>
                    <OrderButton/>
                    <p className={'basket-card__price'}>{totalProductsPrice + ' ₸'}</p>
                </div>
            </div>
        </div>
    );
};

export default Basket;