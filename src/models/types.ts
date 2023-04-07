import exp from "constants";

export interface ICard {
    image: string;
    title: string;
    isLiquid: boolean;
    size: number | string;
    barcode: number;
    manufacturer: string;
    brand: string;
    description: string;
    price: number;
    type: string | string[];
}

export interface IBasket extends ICard {
    count: number;
    totalPrice: number;
}

export interface ISelectCard {
    name: string;
    isChecked: boolean
}

export interface IOption {
    value: string;
    label: string;
}

export interface IStoreState {
    data: ICard[];
    list: ICard[];
    basket: IBasket[];
    info: ICard | {};
    totalProductsPrice: number;
    selectCards: ISelectCard[];
    checkboxes: object;
    selectedCardsOn: string[],
    checkboxesOn: string[],
    modalMode: boolean,
    adminEditMode: any,
    isSortedAscending: boolean,
    currentPage: number,
    pageSize: number,
}
