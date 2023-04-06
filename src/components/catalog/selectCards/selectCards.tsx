import React from 'react';
import './selectCards.css'
import {useAppDispatch} from "../../../hooks/redux";

/*{selectCardName.split(' ').slice(0, 1)}<br/>
{selectCardName.split(' ').slice(1).join(' ')}*/

const SelectCards = ({selectCardName}: any) => {

    const dispatch = useAppDispatch()

    return (
            <button className={'select-card'}>
                {selectCardName.split(' ').slice(0, 1)}<br/>
                {selectCardName.split(' ').slice(1).join(' ')}
            </button>
    );
};

export default SelectCards;