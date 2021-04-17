import React from 'react'

const EDMFooter = () => {
    const footerStyle = {
        width: '100%',
        height: '13rem',
        margin: '0 auto',
        padding: '3rem 1.5rem',
        backgroundColor: '#fff',
        boxShadow: '2px 2px 2px #D6D6D6',
        textAlign: 'center',
        color: '#797979',
    }

    return (
        <table style={footerStyle}>
            <tbody style={{ height: '20%' }}>
                <tr>
                    <td>
                        <font size="1">© 2019 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043</font>
                    </td>
                </tr>
                <tr>
                    <td>
                        <font size="1">
                            This email was sent to <a href="chien41@gmail.com">chien41@gmail.com</a> because you
                            indicated that you want to receive announcements about the latest changes, enhancements, and
                            new features from the Google Data Studio team. If you do not wish to receive such emails in
                            the future, please unsubscribe <a href=" ">here</a>.
                        </font>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EDMFooter
