import React, { createContext, useReducer } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import App from './App'
import { sectionReducer } from './reducer/sectionReducer'
import './scss/index.scss'

export const context = createContext()
const initialState = sectionReducer(
    {
        sectionData: [
            {
                title: 'PRODUCT & FEATURE HIGHLIGHTS',
                subtitle_one: 'Introducing Data Studio Community Visualizations Developer Preview',
                content_one:
                    'The new Data Studio Community Visualizations feature, in developer preview, allows you to build new charts and customize styling options, providing even more freedom and flexibility in the stories you tell with your data.',
                button_one: true,
                subtitle_two: 'Duplicate your filters and blended data sources',
                content_two:
                    'You can now duplicate filters and blended data sources within the same report. To do this, edit your report, then choose the “Resource” menu and select the resource you want to manage. Use the “Duplicate” action to make the copy. You can then apply the copied filter or blended data source to other charts in the report.',
                button_two: true,
            },
            {
                title: 'TIPS & BEST PRACTICES',
                subtitle_one: '2018: The Year in Data Studio Community Connectors',
                content_one:
                    "It's been a busy year for Data Studio Community Connectors. Since the developer launch, we've added over ten new features, had significant growth, seen partners grow their businesses, and collaborated with the community on open source projects.",
                button_one: true,
                subtitle_two: 'At airBaltic, evidence-based marketing takes flight with Google Data Studio',
                content_two:
                    'Air travel might be getting easier, but for the companies that carry us from where we are to where we are going, there is an amazing amount of complexity at work — and they need insights to make critical decisions.',
                button_two: true,
            },
        ],
    },
    { type: '' }
)

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
