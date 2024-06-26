import brandOne from '../../assets/images/brandOne.png'
import brandTwo from '../../assets/images/BrandTwo.png'
import brandThree from '../../assets/images/brandThree.png'
import brandFour from '../../assets/images/BrandFour.png'
import brandFive from '../../assets/images/brandFive.png'
import brandSix from '../../assets/images/brandSix.png'
import {Link} from "react-router-dom";

export function Brand() {
    return (
        <section className="brand">
            <div className="brand-title">
                <h2>ТОП-БРЕНДЫ</h2>
            </div>

            <div className="container flex brand-content">
                <div className=" brand-box border-solid px-6 border-r border-gray">
                    <img className="brand-Image" src={brandOne} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img className="brand-Image" src={brandTwo} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img className="brand-Image" src={brandThree} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img className="brand-Image" src={brandFour} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img className="brand-Image" src={brandFive} alt=""/>
                </div>
                <div className="">
                    <img className="brand-Image" src={brandSix} alt=""/>
                </div>

            </div>



            <div className="flex justify-center mt-64 relative">
                <Link className="brand-text" to={'/catalog'}>ВСЕ БРЕНДЫ</Link>
                <span className="brand__line"></span>
            </div>
        </section>
    )
}