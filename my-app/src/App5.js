
/*
    1. 函数组建没有生命周期
    2. 函数组建没有this
    3. 函数组建没有state状态

    Hooks （钩子 生命周期） 
        - Reach自定义hooks
        - 开发人员自定义的hooks
*/

import { useState } from "react";

function App() {
    const [msg, setMsg] = useState('你好世界')
    const fn = ()=> setMsg('hello world')
    return (
        <>
            <h2>{msg}</h2>
            <button onClick={fn}>修改msg</button>
        </>
    )
}

export default App;