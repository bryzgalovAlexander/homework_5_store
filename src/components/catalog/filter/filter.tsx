import React, {useState} from 'react';
import Input from "../../input/input";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {checkboxModeOn, filterByPrice, setDataBySelectCards} from "../../../store/reducers/Slice";
import SearchIcon from "../../icons/searchIcon";
import './filter.css';

const Filter = () => {

    const checkboxes = useAppSelector(store => store.reducer.checkboxes)
    const selectCards = useAppSelector(store => store.reducer.selectCards)
    const dispatch = useAppDispatch();
    const [price, setPrice] = useState({
        from: '',
        to: ''
    })

    return (
        <div>
            <div>
                <p className={'filter__title'}>ПОДБОР ПО ПАРАМЕТРАМ</p>
                <div className={'filter__price-currency-box'}>
                    <p className={'filter__price'}>Цена</p>
                    <p className={'filter__currency'}>₸</p>
                </div>
                <div className={'filter__price-box'}>
                    <input
                        onChange={(e) => setPrice({...price, from: e.target.value})}
                        className={'filter__input'} placeholder={'0'}
                    />
                    <p>-</p>
                    <input
                        onChange={(e) => setPrice({...price, to: e.target.value})}
                        className={'filter__input'} placeholder={'10000'}
                    />
                    <button onClick={() => dispatch(filterByPrice(price))} className={'filter__search'}>
                        <SearchIcon/>
                    </button>
                </div>
            </div>
            <div>
                <div className={'filter__title-box'}>
                    <p className={'filter__title'}>Производитель</p>
                </div>
                <Input/>
                <div className={'filter__checkbox-container'}>
                    {Object.values(checkboxes).map(checkbox =>
                        <div key={checkbox} className={'filter__checkbox-box'}>
                            <input checked={checkbox.isChecked} onChange={(e) =>
                                dispatch(checkboxModeOn({isChecked: e.target.checked, brand: checkbox}))}
                                   type={'checkbox'}
                            />
                            <label className={'filter__label'}>{checkbox}</label>
                        </div>
                    )}
                </div>
                <div className={'filter__select-cards'}>
                    {selectCards.map( card =>
                        <div
                            className={card.isChecked ? 'filter__select-card-checked' : 'filter__select-card'}
                            onClick={() => {dispatch(setDataBySelectCards(card))}}
                            key={card.name}
                        >
                            {card.name}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Filter;