import collectionOne from "../../assets/images/collection-one.png";
import collectionTwo from "../../assets/images/collection-two.png";
import collectionThree from "../../assets/images/collection-three.png";
import {useSelector} from "react-redux";

export function Cards () {
    const {data} = useSelector((state) => state.clothes )

    return (
        <div className="container">
            <div className="flex flex-wrap gap-8 ml-28 mt-16 mb-10">
                {
                    data.map((item) => (
                        <div>
                            <img className="card-image" src={item.image.black} alt=""/>
                            <p className="collection-text">{item.title}</p>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}