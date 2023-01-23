// import { Component } from 'react'; // for class component

import { useState, useEffect } from 'react'; // for function component


import './App.css';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';

const App = () => { // react will rerun this function if need rerender

  /* useState() return [value, setValue()]*/
  /* if the value is different than the current value, react rerender it*/
  /* calling setValue() won't triggle rerender */
  const [searchField, setSearchField] = useState('') 
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  console.log("rerender")
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  },[]) //whenever the dependency in this array change, I will run the call bcak function

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters)
  },[monsters, searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }


  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     //console.log('constructor')
//     super()
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() { // first time component render
//     //console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(() => {
//           return {monsters: users}
//         }) 
//       )
//   }

//   onSearchChange = (event) => { // this functino update the state
//     //console.log(event.target.value);
//     //从event中获取search bar中
//     const newSearchField = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField :  newSearchField} // 将state中的searchField update，react就会重新渲染
//     })
//   }

//   render() {
//     // 最初的呈现也会使用filter，但是state里面searchField的值一开始就是“”

//     // 之后code里面的monsters就是this.state.monsters, searchFiedld就是this.state.searchField
//     const { monsters, searchField } = this.state
//     // 之后code里面的onSearchChange就是this.onSearchChange
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     )
//   }
// }


export default App;
