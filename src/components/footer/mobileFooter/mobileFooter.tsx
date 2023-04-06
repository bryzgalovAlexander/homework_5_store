import React from 'react';
import MobileSultanLogoWhite from "../../icons/MobileSultanLogoWhite";
import PriceListIcon from "../../icons/PriceListIcon";
import './mobileFooter.css'
import Input from "../../input/input";
import WhatsappLogo from "../../icons/whatsappLogo";
import TelegramLogo from "../../icons/telegramLogo";
import VisaIcon from "../../icons/visaIcon";
import MasterCardIcon from "../../icons/masterCardIcon";

const MobileFooter = () => {
    return (
        <div className={'background-mobile'}>
            <div className={'mobile-container-footer'}>
                <div className={'footer-mobile'}>
                    <MobileSultanLogoWhite/>
                    <button className={'price-button-mobile'}>
                        Прайс-лист
                        <PriceListIcon/>
                    </button>
                </div>
                <div className={'mobile-text__box'}>
                    <p className={'mobile-text__h2-mobile'}>
                        Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской
                        области
                    </p>
                </div>
                <p className={'mobile-text__h2-mobile'}>
                    Подпишись на скидки и акции
                </p>
                <div className={'mobile-input__box'}>
                    <Input/>
                </div>
                <div className={'mobile-menu-box'}>
                    <div>
                        <p className={'mobile-text__h1-mobile'}>Меню сайта:</p>
                        <li className={'mobile-text__h2-mobile-list-item'}>О компании</li>
                        <li className={'mobile-text__h2-mobile-list-item'}>Доставка и оплата</li>
                        <li className={'mobile-text__h2-mobile-list-item'}>Возврат</li>
                        <li className={'mobile-text__h2-mobile-list-item'}>Контакты</li>
                    </div>
                    <div>
                        <p className={'mobile-text__h1-mobile'}>Категории:</p>
                        <li className={'mobile-text__h2-mobile-list-item'}>Бытовая химия</li>
                        <li className={'mobile-text__h2-mobile-list-item'}>Косметика и гигиена</li>
                        <li className={'mobile-text__h2-mobile-list-item'}>Товары для дома</li>
                        <li className={'mobile-text__h2-mobile-list-item'}>Товары для детей и мам</li>
                        <li className={'mobile-text__h2-mobile-list-item'}>Посуда</li>
                    </div>

                </div>
                <div className={'mobile-contacts-box'}>
                    <p className={'mobile-text__h1-mobile'}>Контакты:</p>
                </div>

                <div className={'mobile-socials-box'}>
                    <div className={'mobile-contacts-phone-box'}>
                        <p className={'mobile-text__h2-mobile-phone'}>+7 (777) 490-00-91</p>
                        <p className={'mobile-text__h2'}>время работы: 9:00-20:00</p>
                        <p className={'mobile-text__h2-lined'}>Заказать звонок</p>
                    </div>

                    <div>
                        <p className={'mobile-text__h2-mobile'}>Связь<br/> в мессенджерах:</p>
                        <div className={'mobile-logo-box'}>
                            <WhatsappLogo/>
                            <TelegramLogo/>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={'mobile-text__h2-mobile-phone'}>opt.sultan@mail.ru</p>
                    <p className={'mobile-text__h2-mobile'}>На связи в любое время</p>
                </div>
                <div className={'mobile-credit-cards-box'}>
                    <VisaIcon/>
                    <MasterCardIcon/>
                </div>
            </div>

        </div>
    );
};

export default MobileFooter;