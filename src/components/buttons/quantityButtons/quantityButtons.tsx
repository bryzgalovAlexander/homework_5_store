import React from 'react';
import './quantityButtons.css';
import {IBasket} from "../../../models/types";
import {increaseCount, decreaseCount} from "../../../store/reducers/Slice";
import {useAppDispatch} from "../../../hooks/redux";

const QuantityButtons = (basket: IBasket) => {

    const dispatch = useAppDispatch();

    return (
        <div className={'quantity__box'}>
            <button className={'basket-card__quantity-button'} onClick={() => dispatch(decreaseCount(basket.barcode))}>-</button>
            <p className={'quantity__value'}>{basket.count}</p>
            <button className={'quantity__button'} onClick={() => dispatch(increaseCount(basket.barcode))}>+</button>
        </div>
    );
};

export default QuantityButtons;