import SideBar from './components/SideBar'
import EDMPreview from './components/edm/EDMPreview'

import './scss/app.scss'

export default function App() {
    return (
        <div className="app">
            <SideBar />
            <EDMPreview />
        </div>
    )
}
