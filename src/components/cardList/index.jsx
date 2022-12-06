import CardContainer from "../card";
import './cardList.css';

const CardList = ({ monsters }) => {
	return (
		<div className="card-list">
		{monsters.map((monster) => {
			return (
				<CardContainer
					monster={monster}
				/>
			)
		})}
		</div>
	)
}

export default CardList;