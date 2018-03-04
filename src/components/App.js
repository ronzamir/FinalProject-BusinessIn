import React from 'react'
import Header from './Header'
import Main from './Main'

const App = () => (
    <div>
        <div    style={headerstyle} >
        <Header  />
        </div>
        <div >
        <Main />
        </div>
    </div>
)

export default App
const headerstyle = {

    position :'fixed ',
    color:"blue"
};