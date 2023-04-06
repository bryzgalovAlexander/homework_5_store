import React from 'react';
import bannerImage from "../../../images/bg catalog.jpg";
import './mobileCatalogBanner.css'

const MobileCatalogBanner = () => {
    return (
        <>
            <div className={'mobile-banner'}>
                <img className={'mobile-banner-image'} src={bannerImage}/>
                <div className={'mobile-banner__shape'}>
                    <p className={'mobile-banner__banner-h1'}>Бытовая химия, косметика и хозтовары</p>
                    <p className={'mobile-banner__banner-h2'}>оптом по кокчетаву и области</p>
                </div>
            </div>
            <div className={'mobile-banner__pluses-box'}>
                <div className={'mobile-banner__plus'}>+</div>
                <p className={'mobile-banner__banner-h3'}>Только самые выгодные предложения</p>
            </div>
            <div className={'mobile-banner__pluses-box'}>
                <div className={'mobile-banner__plus'}>+</div>
                <p className={'mobile-banner__banner-h3'}>Бесплатная доставка по <strong>Кокчетаву от 10 тыс ₸</strong>
                </p>
            </div>
        </>
    );
};

export default MobileCatalogBanner;