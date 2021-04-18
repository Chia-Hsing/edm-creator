import React from 'react'

const EDMBody = props => {
    const sectionStyle = {
        width: '95%',
        margin: '1rem auto',
        backgroundColor: '#fff',
        boxShadow: '2px 2px 2px #D6D6D6',
        border: '1.5rem solid transparent',
        lineHeight: '1.7rem',
        cellspacing: '0',
        cellpadding: '0',
        align: 'center',
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
                {props.title ? (
                    <tr>
                        <th style={{ textAlign: 'left', color: '#3B75FA', fontWeight: '800' }}>{props.title}</th>
                    </tr>
                ) : null}
                {props.subtitleOne ? (
                    <tr>
                        <th style={{ color: '#4E4E4E', textAlign: 'left' }}>{props.subtitleOne}</th>
                    </tr>
                ) : null}
                {props.contentOne ? (
                    <tr>
                        <td style={{ color: '#4E4E4E' }}>{props.contentOne}</td>
                    </tr>
                ) : null}
                {props.buttonOne ? (
                    <tr>
                        <td style={{ height: '4rem', verticalAlign: 'middle', textAlign: 'center' }}>
                            <button style={learnMoreBtn}>
                                <a href={props.urlOne} target="blank" style={{ textDecoration: 'none', color: '#fff' }}>
                                    LEARN MORE
                                </a>
                            </button>
                        </td>
                    </tr>
                ) : null}

                {props.subtitleTwo ? (
                    <tr>
                        <th style={{ color: '#4E4E4E', textAlign: 'left' }}>{props.subtitleTwo}</th>
                    </tr>
                ) : null}
                {props.contentTwo ? (
                    <tr>
                        <td style={{ color: '#4E4E4E' }}>{props.contentTwo}</td>
                    </tr>
                ) : null}
                {props.buttonTwo ? (
                    <tr>
                        <td style={{ height: '4rem', verticalAlign: 'middle', textAlign: 'center' }}>
                            <button style={learnMoreBtn}>
                                <a href={props.urlTwo} target="blank" style={{ textDecoration: 'none', color: '#fff' }}>
                                    LEARN MORE
                                </a>
                            </button>
                        </td>
                    </tr>
                ) : null}
            </tbody>
        </table>
    )
}

export default EDMBody
