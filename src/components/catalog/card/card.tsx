import React from 'react';
import './card.css';
import LiquidVolume from "../../icons/liquidVolume";
import {Link} from "react-router-dom";
import {ICard} from "../../../models/types";
import SolidVolume from "../../icons/solidVolume";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import BasketButtonIcon from "../../icons/basketButtonIcon";
import {checkInfo, addToBasket} from "../../../store/reducers/Slice";

const Card = (card: ICard) => {

    const dispatch = useAppDispatch();

    if (Array.isArray(card.type)) {
       card.type.map(item => item + ' / ')
    }

    return (
        <div className={'card'}>
            <div className={'card__box'}>
                <div className={'card__image'}>
                    <img alt={'goods photo'} src={`homework_5_store/static/images/${card.image}`}/>
                </div>
                <div>
                    <div className={'card__volume-box'}>
                        {card.isLiquid ? <LiquidVolume/> : <SolidVolume/>}
                        <p className={'card__volume'}>
                            {card.isLiquid ? card.size + ' мл' : card.size + ' г'}
                        </p>
                    </div>
                    <Link to={`/card-info/${card.barcode}`} onClick={() => dispatch(checkInfo(card.barcode))}>
                        <div>
                            <p className={'card__title'}>
                                <strong>{card.brand}</strong>{' ' + card.title}
                            </p>
                        </div>
                    </Link>
                    <div className={'card__annotation'}>
                        <div className={'card__annotation-box'}>
                            <p className={'card__annotation-title'}>Тип ухода: </p>
                            <p className={'card__annotation-subtext'}>
                                {Array.isArray(card.type) ? card.type.join(` / `) : card.type}
                            </p>
                        </div>
                        <div className={'card__annotation-box'}>
                            <p className={'card__annotation-title'}>Штрихкод: </p>
                            <p className={'card__annotation-subtext'}>{card.barcode}</p>
                        </div>
                        <div className={'card__annotation-box'}>
                            <p className={'card__annotation-title'}>Производитель: </p>
                            <p className={'card__annotation-subtext'}>{card.manufacturer}</p>
                        </div>
                        <div className={'card__annotation-box'}>
                            <p className={'card__annotation-title'}>Бренд: </p>
                            <p className={'card__annotation-subtext'}>{card.brand}</p>
                        </div>
                    </div>
                    <div className={'card__price-box'}>
                        <p className={'card__price'}>{card.price + ' ₸'}</p>
                        <button className={'add-button'} onClick={() => {dispatch(addToBasket(card))}}>
                            В КОРЗИНУ
                            <BasketButtonIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;