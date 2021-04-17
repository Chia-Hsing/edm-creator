import React, { useState, useContext } from 'react'

import Input from './Input'
import { updateObj, checkValidity } from '../utils/utilities'
import { context } from '../index'

const SideDrawer = () => {
    // the states control the input behavior
    const [input, setInput] = useState({
        controls: {
            title: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: 'title',
                },
                val: '',
                validation: {
                    isRequired: true,
                },
                valid: false,
                touched: false,
            },
            subtitleOne: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: 'subtitle',
                },
                val: '',
                validation: {
                    isRequired: true,
                },
                valid: false,
                touched: false,
            },
            contentOne: {
                eleType: 'textarea',
                eleConfig: {
                    placeholder: 'content',
                },
                val: '',
                validation: {
                    isRequired: true,
                },
                valid: false,
                touched: false,
            },
            subtitleTwo: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: 'subtitle',
                },
                val: '',
                validation: {
                    isRequired: true,
                },
                valid: false,
                touched: false,
            },
            contentTwo: {
                eleType: 'textarea',
                eleConfig: {
                    placeholder: 'content',
                },
                val: '',
                validation: {
                    isRequired: true,
                },
                valid: false,
                touched: false,
            },
        },
    })
    const [section, setSection] = useContext(context)

    // as the user types in, change the input states
    const inputChangeHandler = (e, controlName) => {
        const updatedControls = updateObj(input.controls, {
            [controlName]: updateObj(input.controls[controlName], {
                val: e.target.value,
                touched: true,
                valid: checkValidity(e.target.value, input.controls[controlName].validation),
            }),
        })

        setInput({ controls: updatedControls })
    }

    // add edm section
    const submitHandler = e => {
        e.preventDefault()

        let formData = {}
        let stateKeys = []

        for (let key in input.controls) {
            stateKeys.push(key)
        }

        stateKeys.forEach(stateKey => {
            formData[stateKey] = input.controls[stateKey].val
        })

        setSection({ type: 'ADD_SECTION', payload: formData })
    }

    // remove edm section
    const removeSectionHandler = () => {
        setSection({ type: 'REMOVE_SECTION' })
    }

    // form input configuration
    let formElement = []

    for (let key in input.controls) {
        formElement.push({
            key,
            config: input.controls[key],
        })
    }

    const form = formElement.map(ele => {
        return (
            <Input
                key={ele.key}
                label={ele.key}
                value={ele.config.val}
                type={ele.config.eleType}
                config={ele.config.eleConfig}
                isValid={ele.config.valid}
                touched={ele.config.touched}
                shouldValidate={ele.config.validation}
                inputChange={e => inputChangeHandler(e, ele.key)}
            />
        )
    })

    return (
        <section>
            <form onSubmit={submitHandler}>
                {form}
                <button>add section</button>
            </form>
            <button onClick={removeSectionHandler}>remove section</button>
        </section>
    )
}

export default SideDrawer
