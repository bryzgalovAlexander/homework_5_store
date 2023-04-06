import React from 'react';
import LiquidVolume from "../../icons/liquidVolume";
import './basketCard.css';
import TrashWhiteIcon from "../../icons/TrashWhiteIcon";
import QuantityButtons from "../../buttons/quantityButtons/quantityButtons";
import {useAppDispatch} from "../../../hooks/redux";
import {IBasket} from "../../../models/types";
import SolidVolume from "../../icons/solidVolume";
import {deleteFromBasket} from "../../../store/reducers/Slice";

const BasketCard = (basket: IBasket) => {

    const dispatch = useAppDispatch();

    return (
        <div className={'basket-card__container'}>
            <div className={'basket-card__box'}>
                <div className={'basket-card__card'}>
                    <a className={'basket-card__image-container'}>
                        <img className={'basket-card__image'} alt={'фото товара'} src={`static/images/${basket.image}`}/>
                    </a>
                    <div>
                        <div className={'card__volume-box'}>
                            {basket.isLiquid ? <LiquidVolume/> : <SolidVolume/>}
                            <p className={'card__volume'}>{basket.isLiquid ? basket.size + ' мл' : basket.size + ' г'}</p>
                        </div>
                        <p className={'basket-card__title'}>{basket.brand + ' ' + basket.title}</p>
                        <p className={'basket-card__description'}>{basket.description}</p>
                    </div>
                    <div className={'basket-card__quantity-container'}>
                        <div className={'basket-card__divider'}>
                           <QuantityButtons key={basket.barcode} {...basket}/>
                        </div>
                        <div className={'basket-card__divider'}>
                            <p className={'basket-card__price'}>{basket.totalPrice + ' ₸'}</p>
                        </div>
                        <div className={'basket-card__divider'}>

                                <button className={'basket-card__delete-button'} onClick={() =>
                                    dispatch(deleteFromBasket(basket.barcode))}><TrashWhiteIcon/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketCard;