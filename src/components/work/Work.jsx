import {ReactComponent as One} from "../../assets/vectors/work-one.svg";
import {ReactComponent as Two} from "../../assets/vectors/work-two.svg";
import {ReactComponent as Three} from "../../assets/vectors/work-three.svg";
import {ReactComponent as Four} from "../../assets/vectors/work-four.svg";


export function Work () {
    return(
        <div className="work container border-solid px-40 border-r border-b border-l border-t border-gray flex justify-around">
            <div className="mt-12 mb-12 ">
                <div className="work-svg"><One/></div>
                <p className="work-text">Работаем с <br/> 2012 года</p>
                <div className="work-line"></div>
            </div>
            <div  className="mt-12 mb-12 ">
                <div className="work-svg-two"><Two/></div>
                <p className="work-text-two">100% <br/>оригинальные вещи</p>
                <div className="work-line-two"></div>
            </div>
            <div  className="mt-12 mb-12 ">
                <div className="work-svg"><Three/></div>
                <p className="work-text">Доставка <br/>
                    по России</p>
                <div className="work-line-three"></div>
            </div>
            <div  className="mt-12 mb-12 ">
                <div className="work-svg"><Four/></div>
                <p className="work-text">Есть услуга <br/>
                    “Примерки”</p>
                <div className="work-line-four"></div>
            </div>
        </div>
    )
}