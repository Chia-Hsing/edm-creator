import React from 'react'

const EDMContactInfo = () => {
    const contactInfoStyle = {
        width: '95%',
        border: '1.5rem solid transparent',
        align: 'center',
        margin: '1rem auto',
        backgroundColor: '#fff',
        boxShadow: '2px 2px 2px #D6D6D6',
        lineHeight: '1.5rem',
        color: '#4E4E4E',
    }

    const accessBtn = {
        width: '15rem',
        height: '2.5rem',
        backgroundColor: '#3B75FA',
        borderRadius: '5px',
        border: 'none',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1rem',
    }

    return (
        <table style={contactInfoStyle}>
            <table style={{ width: '100%', border: '2px solid #3B75FA', padding: '1.5rem' }}>
                <tbody>
                    <tr>
                        <td>Thanks for reading our monthly update.</td>
                    </tr>
                    <tr>
                        <td style={{ height: '4rem', verticalAlign: 'middle', textAlign: 'center' }}>
                            <button style={accessBtn}>
                                <a href=" " target="blank" style={{ textDecoration: 'none', color: '#fff' }}>
                                    ACCESS DATA STUDIO
                                </a>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Happy Reporting,</td>
                    </tr>
                    <tr>
                        <th style={{ textAlign: 'left' }}>The Google Data Studio Team</th>
                    </tr>
                </tbody>
            </table>
        </table>
    )
}

export default EDMContactInfo
