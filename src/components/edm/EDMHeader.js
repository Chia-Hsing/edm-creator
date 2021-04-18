import React from 'react'

import google from '../../assets/img/unnamed.png'
import dataStudio from '../../assets/img/unnamed-1.png'

const EDMHeader = () => {
    const googleLogoStyle = {
        width: '100px',
        height: 'auto',
        display: 'block',
    }

    const dataStudioStyle = {
        width: '150px',
        height: 'auto',
        float: 'right',
        display: 'block',
    }

    const headerStyle = {
        width: '100%',
        height: '5rem',
        border: '1rem solid transparent',
        backgroundColor: '#fff',
        boxShadow: '2px 2px 2px #D6D6D6',
    }

    return (
        <table style={headerStyle}>
            <tbody>
                <tr>
                    <td>
                        <img src={google} alt="google logo" style={googleLogoStyle}></img>
                    </td>
                    <td>
                        <img src={dataStudio} alt="data studio img" style={dataStudioStyle}></img>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EDMHeader
