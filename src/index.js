import React, { createContext, useReducer } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import App from './App'
import { sectionReducer } from './reducer/sectionReducer'
import './scss/index.scss'

export const context = createContext()
const initialState = sectionReducer({ sectionData: [] }, { type: '' })

const Home = () => {
    const reducer = useReducer(sectionReducer, initialState)

    return (
        <context.Provider value={reducer}>
            <App />
        </context.Provider>
    )
}

ReactDOM.render(<Home />, document.getElementById('root'))

reportWebVitals()
