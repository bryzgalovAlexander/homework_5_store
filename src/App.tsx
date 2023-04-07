import React, {useEffect} from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";
import { Route, Routes } from "react-router";
import CatalogBanner from "./components/catalogBanner/catalogBanner";
import Basket from "./components/basket/basket";
import CardInfo from "./components/catalog/cardInfo/cardInfo";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {ICard, IOption} from "./models/types";
import { setCheckboxes, setSelectCards, showAllCards, updateTotal,} from "./store/reducers/Slice";
import MobileHeader from "./components/header/mobileHeader/mobileHeader";
import MobileFooter from "./components/footer/mobileFooter/mobileFooter";
import MobileCatalogBanner from "./components/catalogBanner/mobileCatalogBanner/mobileCatalogBanner";
import Admin from "./components/admin/admin";
import EditPage from "./components/admin/editPage/editPage";

function App() {

    // @ts-ignore
    const info: ICard =  useAppSelector(state => state.reducer.info)
    const basket = useAppSelector(state => state.reducer.basket)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(showAllCards())
    }, [])

    useEffect(() => {
        dispatch(setSelectCards());
        dispatch(setCheckboxes())
    }, [])

    useEffect(() => {
        dispatch(updateTotal(basket))
    }, [basket])

    return (
        <>
            <MobileHeader/>
            <Header/>
            <Routes>
                <Route path={'/'} element={
                    <>
                        <CatalogBanner/>
                        <MobileCatalogBanner/>
                    </>
                }/>
                <Route path={'/admin'} element={<Admin/>}/>
                <Route path={'/editMode'} element={<
                    // @ts-ignore
                    EditPage/>}/>
                <Route path={'/catalog'} element={ <Catalog/> }/>
                <Route path={'/basket'} element={ <Basket/> }/>
                <Route path={`/card-info/${info.barcode}`} element={<CardInfo {...info}/> }
                />
            </Routes>
            <MobileFooter/>
            <Footer/>
        </>
    );
}

export default App;
