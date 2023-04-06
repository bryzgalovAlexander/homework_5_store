import React, { useState } from 'react';
import SearchIcon from "../icons/searchIcon";
import './input.css'
import {Link} from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { findByInput } from "../../store/reducers/Slice";

const Input = () => {

    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const handleAction = () => {
        if(text.trim().length) {
            //dispatch(слайс поиска);
            setText('');
        }
    }

    return (

        <Link to={'/catalog'}>
            <div className={'input__box'}>
                <input value={text} onChange={(e) => setText(e.target.value)} className={'input'} placeholder={'Поиск...'} />
                <button className={'input__button'} onClick={() => {
                    dispatch(findByInput(text))
                    handleAction()
                }}>
                    <SearchIcon/>
                </button>
            </div>
        </Link>
    );
};

export default Input;