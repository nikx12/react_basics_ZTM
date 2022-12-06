import './searchBox.css';

const SearchBox = ({ className, onSearchInputChangeHandler, placeholder }) => (
	<input
		className={`search-box ${className}`}
		type='search'
		placeholder={placeholder}
		onChange={onSearchInputChangeHandler}
	/>
);

export default SearchBox;