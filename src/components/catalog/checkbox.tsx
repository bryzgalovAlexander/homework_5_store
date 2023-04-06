import React from 'react';
import {ICard} from "../../models/types";

const Checkbox = (card: ICard) => {

    return (
        <div className={'filter__checkbox-box'}>
            <input type={'checkbox'}/>
            <label className={'filter__label'}>{card.brand}</label>
        </div>
    );
};

export default Checkbox;