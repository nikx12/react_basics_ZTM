import './cardContainer.css';

const CardContainer = ({ monster }) => {
	const { name, id, email } = monster; 
	return (
			<div className="card-container" key={id}>
					<img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set6&size=180x180`}/>
					<h2>{name}</h2>
					<p>{email}</p>
			</div>
	)
}

export default CardContainer;