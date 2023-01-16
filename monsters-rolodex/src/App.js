import { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list-component';

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
      .then((users) => 
        this.setState(() => {
          return {monsters: users}
        }) 
      )
  }

  onSearchChange = (event) => {
    //console.log(event.target.value);
    //从event中获取search bar中
    const newSearchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField :  newSearchField} // 将state中的searchField update，react就会重新渲染
    })
  }

  render() {
    // 最初的呈现也会使用filter，但是state里面searchField的值一开始就是“”

    // 之后code里面的monsters就是this.state.monsters, searchFiedld就是this.state.searchField
    const { monsters, searchField } = this.state
    // 之后code里面的onSearchChange就是this.onSearchChange
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={ onSearchChange }
        ></input>
        
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}


export default App;
