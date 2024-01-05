import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank',
    },
    children : 'Click me to visit google'
}

function MyApp() {
    return (
        <div>
            <h1>Custom React App</h1>
        </div> 
    )
}

const AtestElement = (<a href = "https://www.google.com" target = "_blank">Visit Google</a>)

const atestElement2 = React.createElement (
    'a',
    {href : "https://www.google.com", target : "_blank"},
    'Clicke here lol'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
