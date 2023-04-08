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
        setEditCard({...editCard, type: selections.map(item => item.value)});
    };

    return (
        <div className={'container'}>
            <div className={'edit-page-box'} key={adminEditMode.barcode}>
                <div>
                    Название
                    <div className={'edit-page-container'}>
                        <input
                            onChange={(event) => setEditCard({...editCard, title: event.target.value})}
                            placeholder={editCard.title}
                            className={'edit-page-input'}
                        />
                    </div>
                </div>
                <div>
                    Описание
                    <div>
                        <input
                            onChange={(event) => setEditCard({...editCard, description: event.target.value})}
                            placeholder={editCard.description}
                            className={'edit-page-input'}
                        />
                    </div>
                </div>
                <div>
                    Объем/вес
                    <div>
                        <input
                            onChange={(event) => setEditCard({...editCard, size: event.target.value})}
                            placeholder={editCard.size}
                            className={'edit-page-input'}
                        />
                    </div>
                </div>
                <div>
                    Цена
                    <div>
                        <input
                            onChange={(event) => setEditCard({...editCard, price: event.target.value})}
                            placeholder={editCard.price}
                            className={'edit-page-input'}
                        />
                    </div>
                </div>
                <div>
                    Бренд
                    <div>
                        <input
                            onChange={(event) => setEditCard({...editCard, brand: event.target.value})}
                            placeholder={editCard.brand}
                            className={'edit-page-input'}
                        />
                    </div>
                </div>
                <div>

                </div>
                <div>
                    Производитель
                    <div>
                        <input
                            onChange={(event) => setEditCard({...editCard, manufacturer: event.target.value})}
                            placeholder={editCard.manufacturer}
                            className={'edit-page-input'}/>
                    </div>

                </div>
                <div className={'edit-page-input-box'}>
                    <p>
                        Тип ухода
                    </p>
                    <Select
                        placeholder={Array.isArray(editCard.type) ? editCard.type.join(' / ') : editCard.type}
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