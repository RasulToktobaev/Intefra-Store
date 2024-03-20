import collectionOne from "../../assets/images/collection-one.png";
import collectionTwo from "../../assets/images/collection-two.png";
import collectionThree from "../../assets/images/collection-three.png";

export function Cards () {
    return (
        <div className="container">
            <div className="flex gap-8 ml-28 mt-16 mb-10">
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
            <div className="flex gap-8 ml-28 mb-10">
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
        </div>

    )
}