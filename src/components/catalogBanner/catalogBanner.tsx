import React from 'react';
import bannerImage from '../../images/bg catalog.jpg';
import BannerButton from "../buttons/bannerButton/bannerButton";
import './catalogBanner.css'
import PlusIcon from "../icons/plusIcon";

const CatalogBanner = () => {
    return (
        <div>
            <div className={'banner__box'}>
                <div className={'banner__image'}>
                    <img className={'banner-image'} src={bannerImage}/>
                    <div className={'container'}>

                        <div className={'banner__banner-container'}>
                            <p className={'banner__h1'}>
                                Бытовая химия,<br/> косметика <br/> и хозтовары
                            </p>
                            <p className={'banner__h2'}>
                                оптом по кокчетаву и области
                            </p>
                            <BannerButton/>
                            <div className={'banner__pluses-box'}>
                                <div className={'banner__plus-box'}>
                                    <PlusIcon/>
                                    <p className={'banner__pluses-text'}>
                                        Только самые <br/>выгодные предложения
                                    </p>
                                </div>
                                <div className={'banner__plus-box'}>
                                    <PlusIcon/>
                                    <p className={'banner__pluses-text'}>
                                        Бесплатная доставка <br/>по <strong>Кокчетаву от 10 тыс ₸</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogBanner;