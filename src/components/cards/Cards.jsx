import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCollection} from "../../store/reducers/clothes/clothes";
import {useNavigate} from "react-router-dom";

export function Cards() {
    const {data} = useSelector((state) => state.clothes)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCollection())
    }, []);

    return (
        <div>
            <div className=" flex flex-wrap gap-8 ml-28 mt-16 mb-10">
                {
                    data.map((item) => (
                        <div>
                            <img onClick={() => navigate(`/product/${item.id}`)} className="card-image"
                                 src={item.image.black} alt=""/>
                            <p className="collection-text">{item.title}</p>
                            <p style={{
                                textAlign: "center",
                                marginTop: '15px',
                                fontSize: '18px',
                                color: 'blue'
                            }}>Цена:{item.price} $</p>
                            <p style={{color: 'red', textAlign: 'center'}}>Цена со скидкой {item.priceSale} $</p>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}