import {ICard, IBasket, IStoreState, ISelectCard} from "../../models/types";
import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import db from '../../db.json';

const {data} = db;

const initialState: IStoreState = {
    data: [],
    list: [],
    basket: [],
    info: {},
    totalProductsPrice: 0,
    selectCards: [],
    checkboxes: [],
    selectedCardsOn: [],
    checkboxesOn: [],
    modalMode: false,
    adminEditMode: {},
    isSortedAscending: false,
    currentPage: 1,
    pageSize: 6,

}

export const slice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        updateStorage(state) {
            localStorage.setItem('data', JSON.stringify(state.data))
        },
        showAllCards(state) {

            const getItem = localStorage.getItem("data")

            if (typeof getItem === 'string') {
                if (JSON.parse(getItem).length === 0) {
                    state.data = data
                    localStorage.setItem('data', JSON.stringify(state.data))
                } else {
                    state.data = JSON.parse(getItem)
                }
            } else {
                state.data = data
            }

            state.list = state.data
        },
        paginate(state, action: PayloadAction<number>) {

            state.list = state.data
            state.currentPage = action.payload
            state.list = state.list.slice((action.payload - 1) * state.pageSize, action.payload * state.pageSize)

        },
        checkInfo(state, action: PayloadAction<number>) {
            const findItem = state.list.find(item => item.barcode === action.payload)

            if (findItem) {
                state.info = findItem
            }
        },
        addToBasket(state, action: PayloadAction<ICard>) {

            const updateBasket = (basket: IBasket[], selectedItem: ICard) => {

                if (basket.length === 0) {
                    return [{...selectedItem, count: 1, totalPrice: selectedItem.price}];
                }

                let isAlreadyFound = false;

                return basket.reduce((acc: [] | IBasket[], basketItem: IBasket, index: number) => {
                    if (basketItem.barcode === selectedItem.barcode) {
                        isAlreadyFound = true;
                        return [...acc, {
                            ...basketItem,
                            count: ++basketItem.count,
                            totalPrice: basketItem.totalPrice = Number((basketItem.price * basketItem.count).toFixed(2))
                        }];
                    }
                    if (index === basket.length - 1 && !isAlreadyFound) {
                        if (basketItem.barcode === selectedItem.barcode) {
                            return [...acc, {
                                ...selectedItem,
                                count: 1,
                                totalPrice: selectedItem.price
                            }];
                        }
                        return [...acc, basketItem, {...selectedItem, count: 1, totalPrice: selectedItem.price}];
                    }
                    return [...acc, basketItem];
                }, []);
            };
            state.basket = updateBasket(state.basket, action.payload)
        },
        deleteFromBasket(state, action: PayloadAction<number>) {

            state.basket = state.basket.filter((item) => item.barcode !== action.payload)

        },
        clearBasket(state) {
            state.basket = []
        },
        updateTotal(state, action: PayloadAction<ICard[]>) {
            state.totalProductsPrice = Number(state.basket.reduce((acc, cur) => acc + cur.totalPrice, 0).toFixed(2))
        },
        setCheckboxes(state) {
            const filteredTypes: { [productType: string]: boolean } = {}

            state.data.forEach(({brand}) => {
                filteredTypes[brand] = true
            })

            state.checkboxes = Object.keys(filteredTypes).map(checkbox => checkbox)
        },
        increaseCount(state, action: PayloadAction<number>) {

            state.basket.map((basketCard: IBasket) =>
                basketCard.barcode === action.payload ?
                    {
                        ...basketCard,
                        count: ++basketCard.count,
                        totalPrice: basketCard.totalPrice = Number((basketCard.price * basketCard.count).toFixed(2))
                    } : basketCard
            )
        },
        decreaseCount(state, action: PayloadAction<number>) {

            state.basket.map((basketCard: IBasket) =>
                basketCard.barcode === action.payload ?
                    {
                        ...basketCard,
                        count: basketCard.count - 1 > 1 ? basketCard.count - 1 : basketCard.count = 1,
                        totalPrice: basketCard.totalPrice = Number(((basketCard.count - 1 > 1 ? --basketCard.count : 1) * basketCard.price).toFixed(2))
                    } : basketCard
            )
        },
        checkboxModeOn(state, action: PayloadAction<{ isChecked: boolean, brand: string }>) {

            if (action.payload.isChecked) {
                state.checkboxesOn.push(action.payload.brand)
            } else {
                state.checkboxesOn = state.checkboxesOn.filter(checkboxName => checkboxName !== action.payload.brand)
            }

        },
        findByInput(state, action: PayloadAction<string>) {

            state.list = state.data

            if (action.payload) {
                state.list = state.data.filter(item =>
                    item.brand.toLowerCase().includes(action.payload.toLowerCase())
                    || item.title.toLowerCase().includes(action.payload.toLowerCase())
                    || item.manufacturer.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
        },
        openModal(state) {
            state.modalMode = true
        },
        closeModal(state) {
            state.modalMode = false
            state.basket = []
        },
        sortByBrand(state, action) {

            state.isSortedAscending = !state.isSortedAscending

            if (state.isSortedAscending === false) {
                state.data.sort((a, b) => a.brand > b.brand ? 1 : -1)
            }
            if (state.isSortedAscending === true) {
                state.data.sort((a, b) => a.brand < b.brand ? 1 : -1)
            }
        },
        filterByPrice(state, action) {

            const maxPrice = state.data.reduce((a: ICard, b: ICard) => a.price > b.price ? a : b).price
            const minPrice = state.data.reduce((a: ICard, b: ICard) => a.price < b.price ? a : b).price

            if (action.payload.from === '') {
                action.payload.from = minPrice
            }

            if (action.payload.to === '') {
                action.payload.to = maxPrice
            }

            state.list = state.data.filter(card => {
                if (card.price > action.payload.from && card.price <= action.payload.to) {
                    return card
                }
            })
        },
        pushTemplateCard(state) {

            state.data.unshift({
                image: "",
                title: "Название...",
                isLiquid: true,
                size: 450,
                barcode: Date.now(),
                manufacturer: "Компания...",
                brand: "Брэнд...",
                description: "Описание...",
                price: 48.76,
                type: "Укажите тип..."
            })

            localStorage.setItem('data', JSON.stringify(state.data))
            state.list = state.data

        },
        findUpdatedCard(state, action: PayloadAction<number>) {

            const findItem = state.data.find(item => item.barcode === action.payload)

            if (findItem) {
                state.adminEditMode = findItem
            }
        },
        adminUpdateCard(state, action: PayloadAction<ICard>) {

            state.adminEditMode = action.payload

            state.data = state.data.map(card => card.barcode === action.payload.barcode ? {
                ...state.adminEditMode,
                price: Number(state.adminEditMode.price)
            } : card)

            state.adminEditMode = {}
            state.list = state.data
            localStorage.setItem('data', JSON.stringify(state.data))
        },
        deleteFromData(state, action: PayloadAction<number>) {

            state.data = state.data.filter(card => card.barcode !== action.payload)
            state.list = state.data
            localStorage.setItem('data', JSON.stringify(state.data))

        },
        setDataBySelectCards(state, action: PayloadAction<ISelectCard>) {

            const getItem = localStorage.getItem('data')

            if (typeof getItem === 'string') {
                state.data = JSON.parse(getItem)
            }

            if (state.selectedCardsOn.includes(action.payload.name)) {
                state.selectCards.map( item => item.name === action.payload.name ? item.isChecked = !action.payload.isChecked : item)
                state.selectedCardsOn = state.selectedCardsOn.filter(item => item !== action.payload.name)
            } else {
                state.selectCards.map( item => item.name === action.payload.name ? item.isChecked = !action.payload.isChecked : item)
                state.selectedCardsOn.push(action.payload.name)
            }

            state.selectedCardsOn.map( item => item === action.payload.name ? item : '')

            state.data = state.data.filter( item =>
                Array.isArray(item.type) ?
                    item.type.includes(action.payload.name)
                    : item.type.includes(state.selectedCardsOn.toString())
            )
        },
        setSelectCards(state) {
            const allCards = state.data.map((card: ICard) => card.type).flat()
            const uniqueCards = allCards.filter( (value, index, array) => array.indexOf(value) === index);
            state.selectCards = uniqueCards.map( (value: string) =>  ({name: value, isChecked: false}))
        },
    }
})

export const {
    addToBasket,
    deleteFromBasket,
    checkInfo,
    clearBasket,
    updateTotal,
    setSelectCards,
    increaseCount,
    decreaseCount,
    setCheckboxes,
    setDataBySelectCards,
    showAllCards,
    checkboxModeOn,
    openModal,
    closeModal,
    findByInput,
    pushTemplateCard,
    findUpdatedCard,
    deleteFromData,
    adminUpdateCard,
    filterByPrice,
    sortByBrand,
    paginate,
} = slice.actions

export default slice.reducer;