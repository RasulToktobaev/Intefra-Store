import { Link } from 'react-router-dom'
import collectionOne from '../../assets/images/collection-one.png'
import collectionThree from '../../assets/images/collection-three.png'
import collectionTwo from '../../assets/images/collection-two.png'
import { RoutesUrls } from '../../constans/routesUrls'
export function Collection() {
	return (
		<section className="collection">
			<div className="container">
				<div className="collection-title">
					<h2>КОЛЛЕКЦИЯ</h2>
				</div>
				<div className="flex gap-12 ">
					<div>
						<img className="collection-img" src={collectionOne} alt="" />
						<p className="collection-text">
							Спортивный костюм Artigiani, футболка <br /> Artigiani, кеды
							Santoni
						</p>
					</div>
					<div>
						<img className="collection-img" src={collectionTwo} alt="" />
						<p className="collection-text">
							Пуховый жилет Kiton, джинсы Jacob Cohen <br />, футболка Collins,
							кроссовки Valentino, <br /> бейсболка Kiton
						</p>
					</div>
					<div>
						<img className="collection-img" src={collectionThree} alt="" />
						<p className="collection-text">
							Бейсболка Artigiani, джемпер Artigiani <br />
							,джинсы Jacob Cohen, челси Santoni
						</p>
					</div>
				</div>
				<div className="collection-look border-solid px-6 border-b   w-56   border-gray mt-36 ">
					<Link className="collection-more " to={RoutesUrls.collection.path}>
						СМОТРЕТЬ БОЛЬШЕ
					</Link>
				</div>
			</div>
		</section>
	)
}
