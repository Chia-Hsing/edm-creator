import React, { useContext } from 'react'

import { context } from '../../index'
import EDMHeader from './EDMHeader'
import EDMBanner from './EDMBanner'
import EDMBody from './EDMBody'
import EDMFooter from './EDMFooter'

const EDM = () => {
    const section = useContext(context)

    let sections = section[0].sectionData.map((item, i) => {
        return (
            <EDMBody
                key={i}
                title={item.title}
                subtitleOne={item.subtitle_one}
                contentOne={item.content_one}
                subtitleTwo={item.subtitle_two}
                contentTwo={item.content_two}
                buttonOne={item.button_one}
                buttonTwo={item.button_two}
            />
        )
    })

    return (
        <div className="edm" style={{ width: '600px' }}>
            <div style={{ width: '98%', margin: '1rem auto', textAlign: 'center', fontSize: '.3em' }}>
                See the latest features in Data Studio and explore tips and best practices from our team and fellow
                users.
            </div>
            <div style={{ backgroundColor: '#EEEEEE', padding: '.1rem' }}>
                <EDMHeader />
                <EDMBanner />
                {sections}
                <EDMFooter />
            </div>
        </div>
    )
}

export default EDM
