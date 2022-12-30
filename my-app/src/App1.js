import React from 'react'
const msg = "hello daddy"
let arr = ['liu', 'zhu','pao']

class App1 extends React.Component {
    render() {
        return (
            <div>
                <h2>{msg}</h2>
                <hr />
                <label htmlFor="username">user</label>
                <input type="text" id='username' />
                <hr />
                <div className="box">box</div>
                <hr />
                <div style={{backgroundColor: 'skyblue'}}></div>
                <ul>
                    {   
                        // Reach中的列表循环有且只有map可以使用
                        // 只有map才有返回值，forEach没有
                        arr.map((itme, index)=>{
                            return (
                                <li key={index}>{itme}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App1
