import brandOne from '../../assets/images/brandOne.png'


export function Brand() {
    return(
        <div>
            <h2 className="brand-title">ТОП-БРЕНДЫ</h2>
            <div className="flex ml-20">
                <div>
                    <img src={brandOne} alt=""/>
                    <span className="brand-line"></span>
                </div>
                <div>
                    <div className="brand-image ml-20"></div>
                    <span className="brand-line"></span>
                </div>
                <div>
                    <div className="brand-image ml-20"></div>
                    <span className="brand-line"></span>
                </div>
                <div>
                    <div className="brand-image ml-20"></div>
                    <span className="brand-line"></span>
                </div>
                <div>
                    <div className="brand-image ml-20"></div>
                    <span className="brand-line"></span>
                </div>
                <div>
                    <div className="brand-image ml-20"></div>
                    <span className="brand-line"></span>
                </div>
            </div>

            <div className="flex justify-center mt-64 relative">
                <h4 className="brand-text">ВСЕ БРЕНДЫ</h4>
                <span className="brand__line"></span>
            </div>

        </div>
    )
}