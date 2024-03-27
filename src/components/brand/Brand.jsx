import brandOne from '../../assets/images/brandOne.png'
import brandTwo from '../../assets/images/BrandTwo.png'
import brandThree from '../../assets/images/brandThree.png'
import brandFour from '../../assets/images/BrandFour.png'
import brandFive from '../../assets/images/brandFive.png'
import brandSix from '../../assets/images/brandSix.png'

export function Brand() {
    return (
        <section className="brand">
            <h2 className="brand-title">ТОП-БРЕНДЫ</h2>
            <div className="container flex brand-content">
                <div className=" brand-box border-solid px-6 border-r border-gray">
                    <img className="brand-image" src={brandOne} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img className="brand-image" src={brandTwo} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img className="brand-image" src={brandThree} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img className="brand-image" src={brandFour} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img className="brand-image" src={brandFive} alt=""/>
                </div>
                <div className="">
                    <img className="brand-image" src={brandSix} alt=""/>
                </div>

            </div>

            <div className="flex justify-center mt-64 relative">
                <h4 className="brand-text">ВСЕ БРЕНДЫ</h4>
                <span className="brand__line"></span>
            </div>
        </section>
    )
}