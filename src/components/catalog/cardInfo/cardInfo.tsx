import React from 'react';
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import SolidVolume from "../../icons/solidVolume";
import QuantityButtons from "../../buttons/quantityButtons/quantityButtons";
import CardInfoIcon from "../../icons/cardInfoIcon";
import PriceListIcon from "../../icons/PriceListIcon";
import PriceListDarkIcon from "../../icons/PriceListDarkIcon";
import {ICard} from "../../../models/types";
import LiquidVolume from "../../icons/liquidVolume";
import BasketButtonIcon from "../../icons/basketButtonIcon";
import {slice} from "../../../store/reducers/Slice";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import './cardInfo.css';
import {Link} from "react-router-dom";

const CardInfo = (info: ICard) => {

    const data = useAppSelector(store => store.reducer.data)
    const dispatch = useAppDispatch();
    const {addToBasket} = slice.actions

    return (
        <div>
            <div className={'container'}>
                <div className={'bread-crumbs__box'}>
                    <Link to={'/'}>
                        <nav className={'bread-crumbs'}>Главная</nav>
                    </Link>
                    <Link to={'/catalog'}>
                        <nav className={'bread-crumbs'}>Каталог</nav>
                    </Link>
                    <nav className={'bread-crumbs__focused'}>{info.brand + ' ' + info.title}</nav>
                </div>
            </div>
            <div className={'container'}>
                <div className={'card-info'}>
                    <a className={'card-info__image-container'}>
                        <img className={'card-info__image'} alt={'фото товара'} src={`/static/images/${info.image}`}/>
                    </a>
                    <div className={'card-info__container'}>
                        <p className={'card-info__in'}>В наличии</p>
                        <p className={'card-info__title'}>
                            <strong>{info.brand + ' ' + info.title}</strong>
                        </p>
                        <div className={'card-info__volume-box'}>
                            {info.isLiquid ? <LiquidVolume/> : <SolidVolume/>}
                            <p className={'card__volume'}>{info.isLiquid ? info.size + ' мл' : info.size + ' г'}</p>
                        </div>
                        <div className={'card-info__order-container'}>
                            <p className={'basket-card__price'}>
                                {info.price + ' ₸'}
                            </p>
                            <QuantityButtons
                                {...info}
                                // @ts-ignore
                                count={1}
                                totalPrice={info.price}
                            />
                            <button
                                className={'add-button'}
                                onClick={() => dispatch(addToBasket(info))}>
                                В КОРЗИНУ
                                <BasketButtonIcon/>
                            </button>
                        </div>
                        <div className={'card-info__annotation-container'}>
                            <div className={'card-info__annotation-box'}>
                                <CardInfoIcon/>
                            </div>
                            <div className={'card-info__annotation-box'}>При покупке от 10 000 ₸ бесплатная <br/>доставка
                                по Кокчетаву и области
                            </div>
                            <div className={'card-info__annotation-button'}>Прайс лист <PriceListDarkIcon/>
                                <PriceListIcon/></div>
                        </div>
                        <div className={'card__annotation'}>
                            <div className={'card__annotation-box'}>
                                <p className={'card__annotation-title'}>Производитель: </p>
                                <p className={'card__annotation-subtext'}>{info.manufacturer}</p>
                            </div>
                            <div className={'card__annotation-box'}>
                                <p className={'card__annotation-title'}>Бренд: </p>
                                <p className={'card__annotation-subtext'}>{info.brand}</p>
                            </div>
                            <div className={'card__annotation-box'}>
                                <p className={'card__annotation-title'}>Штрихкод: </p>
                                <p className={'card__annotation-subtext'}>{info.barcode}</p>
                            </div>
                            <div className={'card-info__description-box'}>
                                <p className={'card-info__description-title'}>Описание:</p>
                                <p className={'card-info__description'}>{info.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;