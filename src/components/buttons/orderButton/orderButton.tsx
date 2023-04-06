import React from 'react';
import { openModal } from '../../../store/reducers/Slice';
import {useAppDispatch} from "../../../hooks/redux";

const OrderButton = () => {

    const dispatch = useAppDispatch()

    return (
        <button className={'catalog-button'} onClick={() => dispatch(openModal())}>
            Оформить заказ
        </button>
    );
};

export default OrderButton;