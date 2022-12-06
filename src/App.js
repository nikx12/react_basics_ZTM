import './App.css';
import React, { useState, useEffect } from 'react';
import CardList from './components/cardList';
import SearchBox from './components/searchBox';

const App = () => {  
  const [searchField, setSearchField ] = useState('');
  const [monsters, setMonsters ] = useState([]);
  const [filteredMonsters, setFilteredMonsters ] = useState(monsters);
  console.log('rendered');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => (response.json()))
        .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  }

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onSearchInputChangeHandler={onSearchChange}
          placeholder='Search Monsters!!'
        />
        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
}

export default App;
