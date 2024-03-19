import collectionOne from "../../assets/images/collection-one.png"
import collectionTwo from "../../assets/images/collection-two.png"
import collectionThree from "../../assets/images/collection-three.png"
export function Collection() {
    return (
        <section>
            <div className="container">
                <h2 className="collection-title">КОЛЛЕКЦИЯ</h2>
                <div className="flex gap-8 ml-28">
                    <div>
                        <img  src={collectionOne} alt=""/>
                        <p className="collection-text">Спортивный костюм Artigiani, футболка <br/> Artigiani, кеды Santoni</p>
                    </div>
                    <div>
                        <img src={collectionTwo} alt=""/>
                        <p className="collection-text">Пуховый жилет Kiton, джинсы Jacob Cohen <br/>, футболка Fedeli, кроссовки  Valentino, <br/> бейсболка Kiton</p>
                    </div>
                    <div>
                        <img src={collectionThree} alt=""/>
                        <p className="collection-text">Парка Artigiani, джемпер Artigiani <br/>, джинсы Jacob Cohen, челси Santoni</p>
                    </div>
                </div>
                <div className= "collection-look border-solid px-6 border-b   w-56   border-gray ">
                    <h3 className="collection-more">СМОТРЕТЬ БОЛЬШЕ</h3>
                </div>
            </div>
        </section>

    )
}