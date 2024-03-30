import {useSelector} from "react-redux";

export function Cards () {
    const {data} = useSelector((state) => state.clothes )

    return (
        <div >
            <div className=" flex flex-wrap gap-8 ml-28 mt-16 mb-10">
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