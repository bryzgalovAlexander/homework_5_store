import React, {useEffect} from 'react';
import './catalog.css';
import  './selectCards/selectCards.css'
import Filter from "./filter/filter";
import Card from "./card/card";
import {ICard} from "../../models/types";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {paginate, sortByBrand, setDataBySelectCards} from "../../store/reducers/Slice";
import {Link} from "react-router-dom";
import ArrowDown from "../icons/arrowDown";
import ArrowUp from "../icons/arrowUp";

const Catalog = () => {

    const dispatch = useAppDispatch()
    const selectCards = useAppSelector(store => store.reducer.selectCards)
    const data = useAppSelector(store => store.reducer.data)
    const list = useAppSelector(store => store.reducer.list)
    const pageSize = useAppSelector(store => store.reducer.pageSize)
    const isSortedAscending = useAppSelector(store => store.reducer.isSortedAscending)

    let countOfItems = Math.ceil(data.length / pageSize)
    let countOfPages: number[] = []

    const setPageButtons = () => {
        for (let i = 1; i <= countOfItems; i++) {
            countOfPages.push(i)
        }
    }

    useEffect(() => {
        dispatch(paginate(1))
    }, [data])

    const filteredDataByCheckbox = useAppSelector((store) => {
        const data = store.reducer.data
        const checkboxesOn = store.reducer.checkboxesOn

        if (checkboxesOn.length) {
            return data.filter((card) => checkboxesOn.includes(card.brand))
        } else {
            return list
        }
    })

    setPageButtons()

    return (
        <div>
            <div className={'container'}>
                <div className={'bread-crumbs__box'}>
                    <Link to={'/'}>
                        <p className={'bread-crumbs'}>Главная</p>
                    </Link>
                    <p className={'bread-crumbs__focused'}>Каталог</p>
                </div>
            </div>
            <div className={'container'}>
                <div>
                    <div className={'catalog__title-sort-box'}>
                        <p className={'catalog__title'}>
                            Каталог
                        </p>
                        <div className={'catalog__sort-box'}>
                            <p className={'catalog__sorting'}>Сортировка:</p>
                            <button
                                onClick={() => dispatch(sortByBrand(list))}
                                className={'catalog__sorting-item'}
                            >
                                Название
                                {isSortedAscending ? <ArrowDown/> : <ArrowUp/>}
                            </button>
                        </div>
                    </div>
                    <div className={'select-cards-box'}>
                        {/*<button
                            onClick={() => dispatch(showAllCards())}
                            className={'select-card'}
                        >
                            Все
                        </button>*/}
                        {selectCards.map( cardName =>
                                <button
                                    key={cardName}
                                    className={ 'select-card' }
                                    onClick={() => {

                                    dispatch(setDataBySelectCards(cardName))
                                }}
                                >
                                    {cardName.split(' ').slice(0, 1)}<br/>
                                    {cardName.split(' ').slice(1).join(' ')}
                                </button>
                        )}
                    </div>
                    <div className={'catalog__filter-card-box'}>
                        <Filter/>
                        <div className={'catalog__cards-box'}>
                            {filteredDataByCheckbox.map((card: ICard) => <Card key={card.barcode} {...card}/>)}
                        </div>
                    </div>
                    <div className={'catalog__paginate-box'}>
                        {countOfPages.map(countOfPage =>
                            <button
                                className={'catalog__paginate-button'}
                                onClick={() => dispatch(paginate(countOfPage))}
                            >
                                {countOfPage}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;