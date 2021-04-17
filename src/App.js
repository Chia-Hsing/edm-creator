import SideDrawer from './components/SideDrawer'
import EDMPreview from './components/edm/EDMPreview'

import './scss/app.scss'

export default function App() {
    return (
        <div className="app">
            <SideDrawer />
            <EDMPreview />
        </div>
    )
}
