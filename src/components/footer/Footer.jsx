import {ReactComponent as Logo} from '../../assets/vectors/logo.svg'
import {ReactComponent as FooterSvg} from "../../assets/vectors/footer-svg.svg";
import {ReactComponent as Instagram} from "../../assets/vectors/instagram.svg";
import {ReactComponent as Telegram} from "../../assets/vectors/telegram.svg";
import {Link} from "react-router-dom";

export function Footer() {
    return (
        <div className="border-t border-solid border-orange mt-10">
            <div className=" footer-content container  ">
                <div>
                    <Logo/>
                    <p className="footer-logo-text">INTEFRA – российская платформа, на которой <br/> объединены ведущие
                        итальянские бренды <br/> одежды,
                        обуви и аксессуаров.</p>
                    <p className="footer-logo-text-two">INTEFRA.RU - с 2012 года - 100% оригинальные товары</p>
                </div>
                <div>
                    <ul className="footer-list">
                        <li className="footer-list-item"> Обувь</li>
                        <li className="footer-list-item"> Джинсы и брюки</li>
                        <li className="footer-list-item"> Верхняя одежда</li>
                        <li className="footer-list-item"> Спортивные костюмы</li>
                        <li className="footer-list-item">Пиджаки и костюмы</li>
                        <li className="footer-list-item"> Cвитера, поло, джемперы</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer-list">
                        <li className="footer-list-item"> Футболки и поло</li>
                        <li className="footer-list-item"> Сумки</li>
                        <li className="footer-list-item"> Ремни</li>
                        <li className="footer-list-item">Аксессуары</li>
                        <li className="footer-list-item"> Бренды</li>
                    </ul>
                </div>
                <div className="footer-office">
                    <div className="footer-office-one">
                        <p className="footer-office-text"> <span style={{color: "black" ,fontWeight: 600}}>Офис в России</span> <br/>
                            Москва, Кутузовский пр. 2 <br/>
                            Санкт-Петербург, Большой проспект П.С. 13
                        </p>
                        <FooterSvg/>
                    </div>
                    <div className="footer-office-two">
                        <p className="footer-office-text-two"> <span style={{fontWeight:600}}>Офис в Италии</span> <br/>
                            Milano, Via Manzoni 23</p>
                        <FooterSvg/>
                    </div>
                    <div className="footer-office-app">
                        <Link to="">
                            <Instagram/>
                        </Link>

                        <Link to="">
                            <Telegram/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}