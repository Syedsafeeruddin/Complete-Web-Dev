import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Safeer from './Safeer.jsx'

const text = "Safeer"

const reactElement = React.createElement(
    'h2',
    {
        style: {color: 'red'},
        background: 'black'
    },
    'kese ho ',
    text
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
