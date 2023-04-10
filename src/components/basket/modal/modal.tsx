import React from 'react';
import DoneIcon from "../../icons/doneIcon";
import './modal.css'
import CloseIcone from "../../icons/closeIcon";
import {useAppDispatch} from "../../../hooks/redux";
import {closeModal} from "../../../store/reducers/Slice";
import {Link} from "react-router-dom";

const Modal = () => {

    const dispatch = useAppDispatch()


    return (
        <div className={'modal__bg'}>
            <div className={'modal__window'}>
                <div className={'modal__close-box'}>
                    <button className={'modal__close-button'} onClick={() => dispatch(closeModal())}>
                        <Link to={'/homework_5_store/'} >
                            <CloseIcone/>
                        </Link>
                    </button>
                </div>

                <div className={'modal__icon-box'}>
                    <DoneIcon/>
                </div>

                <div className={'modal__message-box'}>
                    <p className={'modal__gratitude'}>СПАСИБО ЗА ЗАКАЗ</p>
                    <p className={'modal__text'}>Наш менеджер свяжется с вами в ближайшее время</p>
                </div>

            </div>
        </div>
    );
};

export default Modal;