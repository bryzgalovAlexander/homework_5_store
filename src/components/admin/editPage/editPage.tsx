import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {Link} from "react-router-dom";
import {adminUpdateCard} from "../../../store/reducers/Slice";
import './editPage.css'
import Select from "react-select/base";


const EditPage = () => {

    const adminEditMode = useAppSelector(store => store.reducer.adminEditMode)
    const options = useAppSelector(store => store.reducer.selectCards)
    const dispatch = useAppDispatch()
    const [types, setTypes] = useState<any>([''])
    const isMultiTypes = true

    const getTypesValue = () => {
      if (types) {
          // @ts-ignore
          return isMultiTypes ? options.filter(item => types.indexOf(item.value) >= 0)
              // @ts-ignore
              : options.find(item => item.value === types)
      } else {
          return isMultiTypes ? [] : ''
      }
    }

    const onChange = (newValue: any) => {
        // @ts-ignore
        setTypes(isMultiTypes ? newValue.map(item => item.value) : newValue.value)
    }



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
                    Тип
                    <input
                        onChange={(event) => setEditCard({...editCard, type: event.target.value})}
                        placeholder={editCard.type}
                        className={'edit-page-input'}
                    />
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

                    < // @ts-ignore
                        Select
                        placeholder={'выберите тип...'}
                            onChange={onChange}
                        // @ts-ignore
                            value={getTypesValue()}
                            options={options}
                            isMultiTypes={isMultiTypes}
                    >

                    </Select>
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