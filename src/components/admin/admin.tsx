import React, {useEffect} from 'react';
import {ICard} from "../../models/types";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {pushTemplateCard, findUpdatedCard, deleteFromData} from "../../store/reducers/Slice";
import LiquidVolume from "../icons/liquidVolume";
import SolidVolume from "../icons/solidVolume";
import './admin.css'
import {Link} from "react-router-dom";

const Admin = () => {

    const data = useAppSelector(store => store.reducer.data)
    const dispatch = useAppDispatch()

    return (
        <div className={'container'}>
            <div className={'admin__box'}>
                <div className={'admin__side-menu'}>
                    <button onClick={() => dispatch(pushTemplateCard())} className={'admin__button'}>добавить шаблон карточки</button>
                </div>
                <div className={'admin__cards-box'}>
                    {data.map((card: ICard) =>
                        <div key={card.barcode} className={'card'}>
                            <div className={'card__box'}>
                                <div className={'card__image'}>
                                    <img alt={'goods photo'} src={`static/images/${card.image}`}/>
                                </div>
                                <div>
                                    <div className={'card__volume-box'}>
                                        {card.isLiquid ? <LiquidVolume/> : <SolidVolume/>}
                                        <p className={'card__volume'}>
                                            {card.isLiquid ? card.size + ' мл' : card.size + ' г'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={'card__title'}>
                                            <strong>{card.brand}</strong>{' ' + card.title}
                                        </p>
                                    </div>
                                    <div className={'card__annotation'}>
                                        <div className={'card__annotation-box'}>
                                            <p className={'card__annotation-title'}>Тип ухода: </p>
                                            <p className={'card__annotation-subtext'}>
                                                {Array.isArray(card.type) ? card.type.join(' / ') : card.type}
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
                                        <Link to={'/editMode'}>
                                            <button className={'add-button'} onClick={() => dispatch(findUpdatedCard(card.barcode))}>
                                                Редактировать
                                            </button>
                                        </Link>
                                        <button className={'admin__delete-button'} onClick={() => {dispatch(deleteFromData(card.barcode))}}>
                                            Х
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;