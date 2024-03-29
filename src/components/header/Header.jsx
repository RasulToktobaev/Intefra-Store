import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons'
import {useState} from "react";
import {FormControl, Icon, Input} from "@chakra-ui/react";
import {ReactComponent as Logo} from '../../assets/vectors/logo.svg'
import {Link, NavLink, useLocation} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import { BreadNavigation} from "../breadNavigation";
import {RoutesUrls} from "../../constans/routesUrls";


export function Header() {
    const [burgerActive, setBurgerActive] = useState(false)

    const {pathname} = useLocation()

    const onSwitchBurger = () => setBurgerActive(prev => !prev)
    return (
        <div>
            <div className='container'>
                <div className='header-content  flex gap-4 justify-between pt-2 pb-7'>
                    <div className=' header-content-logo flex items-center gap-4'>
                        <Icon onClick={onSwitchBurger}
                              as={burgerActive ? CloseIcon : HamburgerIcon}
                              w='34px'
                              h='34px'
                        />
                       <Link to={RoutesUrls.home.path}>
                           <Logo/>
                       </Link>
                    </div>
                    <FormControl>
                        <FaSearch className='absolute top-3 left-5'/>
                        <Input className="header-input !pl-16" placeholder="Поиск по продукций"/>
                    </FormControl>
                    <ul className='flex header-list'>
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