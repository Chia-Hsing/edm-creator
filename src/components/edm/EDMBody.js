import React from 'react'

const EDMBody = props => {
    const sectionStyle = {
        width: '95%',
        margin: '1rem auto',
        backgroundColor: '#fff',
        boxShadow: '2px 2px 2px #D6D6D6',
        padding: '1rem 2rem',
        lineHeight: '1.5rem',
    }

    const learnMoreBtn = {
        width: '10rem',
        height: '2.5rem',
        backgroundColor: '#3B75FA',
        borderRadius: '5px',
        border: 'none',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1rem',
    }

    return (
        <table style={sectionStyle}>
            <tbody>
                <tr>
                    <th style={{ textAlign: 'left', color: '#3B75FA', fontWeight: '800' }}>{props.title}</th>
                </tr>

                <tr>
                    <td style={{ color: '#4E4E4E' }}>
                        <h4>{props.subtitleOne}</h4>
                        <p>{props.contentOne}</p>
                    </td>
                </tr>
                <tr>
                    <td style={{ height: '4rem', verticalAlign: 'middle', textAlign: 'center' }}>
                        {props.buttonOne ? <button style={learnMoreBtn}>LEARN MORE</button> : null}
                    </td>
                </tr>
                <tr>
                    <td style={{ color: '#4E4E4E' }}>
                        <h4>{props.subtitleTwo}</h4>
                        <p>{props.contentTwo}</p>
                    </td>
                </tr>
                <tr>
                    <td style={{ height: '4rem', verticalAlign: 'middle', textAlign: 'center' }}>
                        {props.buttonTwo ? <button style={learnMoreBtn}>LEARN MORE</button> : null}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EDMBody
