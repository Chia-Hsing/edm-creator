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
            subtitle_one: {
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
            button_one: {
                eleType: 'checkbox',
                eleConfig: {
                    type: 'checkbox',
                },
                tick: false,
            },
            content_one: {
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
            subtitle_two: {
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
            content_two: {
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
            button_two: {
                eleType: 'checkbox',
                eleConfig: {
                    type: 'checkbox',
                },
                tick: false,
            },
        },
    })
    const [section, setSection] = useContext(context)

    // as the user types in, change the input states
    const inputChangeHandler = (e, controlName) => {
        // exclude button properties
        if (!input.controls[controlName].tick) {
            const updatedControls = updateObj(input.controls, {
                [controlName]: updateObj(input.controls[controlName], {
                    val: e.target.value,
                    touched: true,
                    valid: checkValidity(e.target.value, input.controls[controlName].validation),
                }),
            })

            setInput({ controls: updatedControls })
        }

        // button properties
        if (e.target.checked) {
            const updatedControls = updateObj(input.controls, {
                [controlName]: updateObj(input.controls[controlName], {
                    tick: true,
                }),
            })
            setInput({ controls: updatedControls })
        }
    }

    // add edm section
    const submitHandler = async e => {
        e.preventDefault()

        let formData = {}

        const inputStateKeys = ['title', 'subtitle_one', 'subtitle_two', 'content_one', 'content_two']

        inputStateKeys.forEach(inputStateKey => {
            formData[inputStateKey] = input.controls[inputStateKey].val
            input.controls[inputStateKey].val = ''
        })

        const buttonStateKeys = ['button_one', 'button_two']

        buttonStateKeys.forEach(buttonStateKey => {
            formData[buttonStateKey] = input.controls[buttonStateKey].tick
            input.controls[buttonStateKey].tick = false
        })

        await setSection({ type: 'ADD_SECTION', payload: formData })
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
                ticked={ele.config.tick}
            />
        )
    })

    return (
        <section className="sideDrawer">
            <h4>EDM Creator</h4>
            <form onSubmit={submitHandler}>
                {form}
                <button>add section</button>
            </form>
            <button disabled={section.sectionData.length <= 0} id="removeBtn" onClick={removeSectionHandler}>
                remove section
            </button>
        </section>
    )
}

export default SideDrawer
