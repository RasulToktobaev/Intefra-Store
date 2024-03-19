import brandOne from '../../assets/images/brandOne.png'
import brandTwo from '../../assets/images/BrandTwo.png'
import brandThree from '../../assets/images/brandThree.png'
import brandFour from '../../assets/images/BrandFour.png'
import brandFive from '../../assets/images/brandFive.png'
import brandSix from '../../assets/images/brandSix.png'

export function Brand() {
    return (
        <section>
            <h2 className="brand-title">ТОП-БРЕНДЫ</h2>
            <div className="container flex">
                <div className="border-solid px-6 border-r border-gray">
                    <img src={brandOne} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img src={brandTwo} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img src={brandThree} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img src={brandFour} alt=""/>
                </div>
                <div className="border-solid px-6 border-r border-gray">
                    <img src={brandFive} alt=""/>
                </div>
                <div className="">
                    <img src={brandSix} alt=""/>
                </div>

            </div>

            <div className="flex justify-center mt-64 relative">
                <h4 className="brand-text">ВСЕ БРЕНДЫ</h4>
                <span className="brand__line"></span>
            </div>
        </section>
    )
}