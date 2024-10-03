import { Button } from '@chakra-ui/react'
import React from 'react'
import details from '../../assets/images/collectionDetails.png'

export function CollectionDetailsCard() {
	return (
		<div className="border-gray border-solid border-b border-t py-6 flex items-center gap-12">
			<div className="details-list">
				<img className="details-img" src={details} alt="" />
				<div>
					<p className="details-text">
						Жилет с капюшоном и <br /> пуховым покровом <br />{' '}
						<span style={{ fontWeight: '700' }}>Cortigiani</span>
					</p>
					<div className="details-buttons">
						<button className="details-btn details-btn--active  hover:bg-black hover:text-white transition-all ">
							50
						</button>
						<button className="details-btn">52</button>
						<button className="details-btn">54</button>
						<button className="details-btn">56</button>
					</div>
				</div>
				<div>
					<span className="details-price mr-4">130 000 ₽</span>
					<span style={{ color: 'red', fontWeight: '700' }}>94 000 ₽</span>
				</div>
			</div>

			<Button
				colorScheme="blue"
				background="rgb(25, 4, 4);"
				width="160px"
				height="38px"
				borderRadius="none"
			>
				Bye
			</Button>
		</div>
	)
}
