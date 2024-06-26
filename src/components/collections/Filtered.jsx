import {Select} from '@chakra-ui/react'
import {useDispatch} from "react-redux";
import {getCollection} from "../../store/reducers/clothes/clothes";
import {useEffect, useState} from "react";

export function Filtered() {

    const dispatch = useDispatch()

    const [selectedGender, setSelectedGender] = useState('')
    const [selectedCategory, setSelectedCategory ] = useState('')

    useEffect(() => {
        dispatch(getCollection({category:selectedCategory, gender: selectedGender}))
    }, [selectedCategory, selectedGender]);

    const onSelectCategory =  (event) => {
        setSelectedCategory(event.target.value)
    }

    const onSelectGender = (event) => {
        setSelectedGender(event.target.value)
    }

    return (
        <div className="">
            <h2 className="collection-title">КОЛЛЕКЦИЯ</h2>
            <div className="filtered-option">
                <Select
                    onChange={onSelectGender}
                    background="rgba(255,255,255)"
                    borderRadius="15px"
                    width="320px"
                    height="60px"
                    placeholder='Пол'>
                    <option style={{fontWeight:"600"}} value='man'>Мужской</option>
                    <option style={{fontWeight:"600"}}  value='woman'>Женский</option>
                </Select>
                <Select
                    onChange={onSelectCategory}
                    borderRadius="15px"
                    width="320px"
                    height="60px"
                    placeholder='Категория'>
                    <option  style={{fontWeight:"600"}}  value=''>ВСЕ</option>
                    <option style={{fontWeight:"600"}}  value='hoody'>Худи</option>
                    <option style={{fontWeight:"600"}}  value='sportsuit'>Спортивный костюм </option>
                    <option style={{fontWeight:"600"}}  value='sweatshirt'>Свитшот</option>
                    <option style={{fontWeight:"600"}}  value='tshort'>Футболка</option>
                </Select>
            </div>
            <div className="filtered-sort">
                <p className="filtered-sort-text">Сортировать</p>
                <select >
                    <option value="">по популярности</option>
                    <option value="">по годам</option>
                    <option value="">по запросам</option>
                </select>
            </div>
        </div>
    )
}