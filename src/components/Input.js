import React from 'react'

import '../scss/app.scss'

const Input = props => {
    let eleInput = null

    switch (props.type) {
        case 'input':
            eleInput = (
                <>
                    <label htmlFor={props.label}>{props.label}</label>
                    <br />
                    <input
                        id={props.label}
                        className="input"
                        value={props.value}
                        {...props.config}
                        onChange={props.inputChange}
                    />
                </>
            )
            break
        case 'set_url_input_one':
            let disabledOne

            if (props.label === 'set_url_one' && !props.setUrlOne) {
                disabledOne = true
            } else {
                disabledOne = false
            }

            eleInput = (
                <>
                    <label htmlFor={props.label}>{props.label}</label>
                    <br />
                    <input
                        id={props.label}
                        className="input"
                        value={props.value}
                        {...props.config}
                        onChange={props.inputChange}
                        disabled={disabledOne}
                    />
                </>
            )
            break
        case 'set_url_input_two':
            let disabledTwo

            if (props.label === 'set_url_two' && !props.setUrlTwo) {
                disabledTwo = true
            } else {
                disabledTwo = false
            }

            eleInput = (
                <>
                    <label htmlFor={props.label}>{props.label}</label>
                    <br />
                    <input
                        id={props.label}
                        className="input"
                        value={props.value}
                        {...props.config}
                        onChange={props.inputChange}
                        disabled={disabledTwo}
                    />
                </>
            )
            break
        case 'textarea':
            eleInput = (
                <>
                    <label htmlFor={props.label}>{props.label}</label>
                    <br />
                    <textarea
                        id={props.label}
                        className="textarea"
                        value={props.value}
                        {...props.config}
                        onChange={props.inputChange}
                    />
                </>
            )
            break
        case 'checkbox':
            eleInput = (
                <>
                    <label htmlFor={props.label}>{props.label}</label>
                    <br />
                    <input
                        id={props.label}
                        className="checkbox"
                        {...props.config}
                        onChange={props.inputChange}
                        checked={props.ticked}
                    />
                    <br />
                </>
            )
            break
        default:
            eleInput = (
                <>
                    <label htmlFor={props.label}>{props.label}</label>
                    <br />
                    <input
                        id={props.label}
                        className="input"
                        value={props.value}
                        {...props.config}
                        onChange={props.inputChange}
                    />
                </>
            )
            break
    }

    return <>{eleInput}</>
}

export default Input
