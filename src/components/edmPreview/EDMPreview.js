import React, { useContext } from 'react'

import EDMHeader from './EDMHeader'
import EDMBody from './EDMBody'
import EDMFooter from './EDMFooter'
import { context } from '../../index'

const EDMPreview = () => {
    const [section, setSection] = useContext(context)

    let sections = section.sectionData.map((item, i) => {
        return (
            <table key={i}>
                <tbody>
                    <tr>
                        <td>
                            <h3>{item.title}</h3>
                            <h4>{item.subtitleOne}</h4>
                            <p>{item.contentOne}</p>
                            <h4>{item.subtitleTwo}</h4>
                            <p>{item.contentTwo}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    })

    return <main>{sections}</main>
}

export default EDMPreview
