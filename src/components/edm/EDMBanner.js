import React from 'react'

import mainBanner from '../../assets/img/unnamed-2.png'

const EDMBanner = () => {
    const imgStyle = {
        width: '100%',
        height: 'auto',
        display: 'block',
    }

    const bannerStyle = {
        width: '95%',
        border: '1rem solid transparent',
        align: 'center',
        margin: '1rem auto',
        backgroundColor: '#fff',
        boxShadow: '2px 2px 2px #D6D6D6',
    }

    return (
        <table style={bannerStyle}>
            <thead>
                <tr>
                    <th style={{ fontWeight: '400', textAlign: 'center' }}>
                        <font size="5">January 2019 - Product Update</font>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src={mainBanner} alt="mainBanner" style={imgStyle}></img>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EDMBanner
