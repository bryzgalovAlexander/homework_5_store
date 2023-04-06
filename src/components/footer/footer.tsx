import React from 'react';
import WhiteLogo from "../icons/whiteLogo";
import Input from "../input/input";
import PriceButton from "../buttons/priceButton/priceButton";
import WhatsappLogo from "../icons/whatsappLogo";
import TelegramLogo from "../icons/telegramLogo";
import VisaIcon from "../icons/visaIcon";
import MasterCardIcon from "../icons/masterCardIcon";
import './footer.css'

const Footer = () => {
    return (
        <footer className={'background'}>
            <div className={'container'}>
                <div className={'footer__company-box'}>
                    <div className={'footer__section'}>
                        <WhiteLogo/>
                        <div className={'footer__text'}>
                            Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области
                        </div>
                    </div>
                    <div className={'footer__input-box'}>
                        <div className={'footer__subtext'}>Подпишись на скидки и акции</div>
                        <Input/>
                    </div>
                </div>
                <div className={'footer__list-box'}>
                    <div className={'footer__list'}>
                        Меню сайта:
                        <li className={'footer__list-item'}>О компании</li>
                        <li className={'footer__list-item'}>Доставка и оплата</li>
                        <li className={'footer__list-item'}>Возврат</li>
                        <li className={'footer__list-item'}>Контакты</li>
                    </div>
                    <div className={'footer__list'}>
                        Категории:
                        <li className={'footer__list-item'}>Бытовая химия</li>
                        <li className={'footer__list-item'}>Косметика и гигиена</li>
                        <li className={'footer__list-item'}>Товары для дома</li>
                        <li className={'footer__list-item'}>Товары для детей и мам</li>
                        <li className={'footer__list-item'}>Посуда</li>
                    </div>
                </div>
                <div className={'footer__connection-box'}>
                    <p className={'footer__list'}>Скачать прайс-лист:</p>
                    <div className={'footer__connection-button'}>
                        <PriceButton/>
                    </div>
                    <p className={'footer__list-item'}>Связь в мессенджерах:</p>
                    <div className={'footer__logos-box'}>
                        <WhatsappLogo/>
                        <TelegramLogo/>
                    </div>
                </div>
                <div className={'footer__contacts'}>
                    <p className={'footer__list'}>Контакты:</p>
                    <div className={'footer__contacts-box'}>
                        <p className={'footer__subtext-semi-bold'}>+7 (777) 490-00-91</p>
                        <p className={'footer__subtext-light'}>время работы: 9:00-20:00</p>
                        <p className={'footer__subtext-underline'}>Заказать звонок</p>
                    </div>
                    <div className={'footer__email-box'}>
                        <p className={'footer__subtext-semi-bold'}>opt.sultan@mail.ru</p>
                        <p className={'footer__subtext-light'}>На связи в любое время</p>
                    </div>
                    <div className={'footer__cards-box'}>
                        <VisaIcon/>
                        <MasterCardIcon/>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;