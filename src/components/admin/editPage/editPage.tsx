import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {Link} from "react-router-dom";
import {adminUpdateCard} from "../../../store/reducers/Slice";
import './editPage.css'
import {IOption} from "../../../models/types";
import Select from "react-select";

const EditPage = () => {

    const adminEditMode = useAppSelector(store => store.reducer.adminEditMode)
    const selectCards = useAppSelector(store => store.reducer.selectCards)
    const dispatch = useAppDispatch()
    const [types, setTypes] = useState([])

    const options = selectCards.map(selectCard => ({value: selectCard.name, label: selectCard.name}))

    const [editCard, setEditCard] = useState({
        ...adminEditMode,
        title: adminEditMode.title,
        type: adminEditMode.type,
        brand: adminEditMode.brand,
        price: adminEditMode.price,
        manufacturer: adminEditMode.manufacturer,
        size: adminEditMode.size,
        description: adminEditMode.description
    })

    const handleOption = (selections: IOption[]) => {
        // @ts-ignore
        setEditCard({...editCard, type: selections.map(item => item.value)});
    };

    console.log(editCard)
    console.log(types)


    return (
        <div className={'container'}>
            <div className={'edit-page-box'} key={adminEditMode.barcode}>
                <div>
                    Название
                    <input
                        onChange={(event) => setEditCard({...editCard, title: event.target.value})}
                        placeholder={editCard.title}
                        className={'edit-page-input'}
                    />
                </div>
                <div>
                    Описание
                    <input
                        onChange={(event) => setEditCard({...editCard, description: event.target.value})}
                        placeholder={editCard.description}
                        className={'edit-page-input'}
                    />
                </div>
                <div>
                    Объем/вес
                    <input
                        onChange={(event) => setEditCard({...editCard, size: event.target.value})}
                        placeholder={editCard.size}
                        className={'edit-page-input'}
                    />
                </div>
                <div>
                    Цена
                    <input
                        onChange={(event) => setEditCard({...editCard, price: event.target.value})}
                        placeholder={editCard.price}
                        className={'edit-page-input'}
                    />
                </div>
                <div>
                    Бренд
                    <input
                        onChange={(event) => setEditCard({...editCard, brand: event.target.value})}
                        placeholder={editCard.brand}
                        className={'edit-page-input'}
                    />
                </div>
                <div>

                </div>
                <div>
                    Производитель
                    <input onChange={(event) => setEditCard({...editCard, manufacturer: event.target.value})}
                           placeholder={editCard.manufacturer}
                           className={'edit-page-input'}
                    />
                </div>
                <div>
                    Тип ухода
                    <Select
                        placeholder={editCard.type}
                        isMulti
                        options={options}
                        // @ts-ignore
                        onChange={handleOption}/>
                </div>
                <Link to={'/admin'}>
                    <button onClick={() => dispatch(adminUpdateCard(editCard))} className={'admin__button'}>
                        Обновить
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EditPage;