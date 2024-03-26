import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons'
import {useState} from "react";
import {FormControl, Icon, Input} from "@chakra-ui/react";
import {ReactComponent as Logo} from '../../assets/vectors/logo.svg'
import {Link, NavLink} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import { BreadNavigation} from "../breadNavigation";


export function Header() {
    const [burgerActive, setBurgerActive] = useState(false)

    const onSwitchBurger = () => setBurgerActive(prev => !prev)
    return (
        <div>
            <div className='container'>
                <div className='flex gap-4 justify-between pt-2 pb-7'>
                    <div className='flex items-center gap-4'>
                        <Icon onClick={onSwitchBurger}
                              as={burgerActive ? CloseIcon : HamburgerIcon}
                              w='34px'
                              h='34px'
                        />
                       <Link to='/'>
                           <Logo/>
                       </Link>
                    </div>
                    <FormControl>
                        <FaSearch className='absolute top-3 left-5'/>
                        <Input className="!pl-16" placeholder="Поиск по продукций"/>
                    </FormControl>
                    <ul className='flex'>
                        <li>
                            <NavLink to='./shipping' className=' inline-block h-full w-[130px] grid place-items-center hover:bg-[#dedede] transition-all'>Доставка</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart' className=' inline-block h-full w-[130px] grid place-items-center hover:bg-[#dedede] transition-all'>Корзина</NavLink>
                        </li>
                    </ul>
                </div>
                <BreadNavigation/>
            </div>
        </div>
)
}