import React from 'react';
import BasketButtonIcon from "../../icons/basketButtonIcon";
import './addToBasketButton.css';
import {ICard} from "../../../models/types";
import {slice} from "../../../store/reducers/Slice";
import {useAppDispatch} from "../../../hooks/redux";

const AddToBasketButton = (card: ICard ) => {

    const {addToBasket} = slice.actions
    const dispatch = useAppDispatch()

    return (
        <button className={'add-button'} onClick={() =>
            // @ts-ignore
            dispatch(test(card))}>
            В КОРЗИНУ
            <BasketButtonIcon/>
        </button>
    );
};

export default AddToBasketButton;