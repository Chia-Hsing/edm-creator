import React from 'react'
import JSZip from 'jszip'
import saveAs from 'file-saver'

import SideBar from './components/SideBar'
import EDM from './components/edm/EDM'

import './scss/app.scss'

export default function App() {
    let edmRef = null

    const edm = ref => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        edmRef = ref
    }

    const downloadHtmlHandler = () => {
        let zip = new JSZip()

        const html = edmRef.innerHTML.replace('<section>', '<!DOCTYPE html><html>').replace('</section>', '</html>')

        zip.file('index.html', html)

        zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, 'edm.zip')
        })
    }

    return (
        <div className="app">
            <SideBar downloadHtml={downloadHtmlHandler} />
            <EDM edm={edm} />
        </div>
    )
}
