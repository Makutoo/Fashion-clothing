import React from 'react'
const msg = "hello world"
//类组建
class App extends React.Component {
    render() {
        return (
            <div>
                <h2>{msg}</h2>
                <input type="text"/>
            </div>
        )
    }
}

export default App

/*
 js中出现()代表其中想要写html
 html中出现{}代表其中想要写js

*/