import { Component } from 'react';

import './App.css';


class App extends Component {
  constructor() {
    //console.log('constructor')
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() { // first time component render
    //console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return {monsters: users}
        },
        () => {
          console.log(this.state)
        }
      ))
  }

  render() {
    //console.log('render')
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    });
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            console.log(event.target.value);
            const newSearchField = event.target.value.toLocaleLowerCase()
            this.setState(() => {
              return { searchField :  newSearchField}
            })
          }}
        ></input>
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1 >{monster.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}


export default App;
