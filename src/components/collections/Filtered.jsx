import {Select} from '@chakra-ui/react'
import {ReactComponent as Selected} from "../../assets/vectors/selected.svg";

export function Filtered() {
    return (
        <div className="">
            <h2 className="collection-title">КОЛЛЕКЦИЯ</h2>
            <div className="filtered-option">
                <Select
                    background="rgba(255,255,255)"
                    borderRadius="none"
                    width="375px"
                    height="75px"
                    placeholder='Пол'>
                    <option style={{fontWeight:"600"}} value='option1'>Мужской</option>
                    <option style={{fontWeight:"600"}}  value='option2'>Женский</option>
                </Select>
                <Select
                    borderRadius="none"
                    width="375px"
                    height="75px"
                    placeholder='Бренд'>
                    <option style={{fontWeight:"600"}}  value='option1'>JACOB COHEN</option>
                    <option style={{fontWeight:"600"}}  value='option2'>SANTONI</option>
                    <option style={{fontWeight:"600"}}  value='option3'>VALENTINO</option>
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