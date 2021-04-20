import React, { useState, useContext } from 'react'

import Input from './Input'
import { updateObj } from '../utils/utilities'
import { context } from '../index'

const SideBar = props => {
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
            },
            subtitle_one: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: 'subtitle',
                },
                val: '',
            },
            content_one: {
                eleType: 'textarea',
                eleConfig: {
                    placeholder: 'content',
                },
                val: '',
            },
            button_one: {
                eleType: 'checkbox',
                eleConfig: {
                    type: 'checkbox',
                },
                tick: false,
            },
            set_url_one: {
                eleType: 'set_url_input_one',
                eleConfig: {
                    type: 'text',
                    placeholder: 'url',
                },
                val: '',
            },
            subtitle_two: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: 'subtitle',
                },
                val: '',
            },
            content_two: {
                eleType: 'textarea',
                eleConfig: {
                    placeholder: 'content',
                },
                val: '',
            },
            button_two: {
                eleType: 'checkbox',
                eleConfig: {
                    type: 'checkbox',
                },
                tick: false,
            },
            set_url_two: {
                eleType: 'set_url_input_two',
                eleConfig: {
                    type: 'text',
                    placeholder: 'url',
                },
                val: '',
            },
        },
        setUrl: {
            button_one: false,
            button_two: false,
        },
    })
    const [section, setSection] = useContext(context)

    // as the user types in, change the input states
    const inputChangeHandler = (e, controlName) => {
        // exclude button properties
        if (input.controls[controlName].eleType !== 'checkbox') {
            const updatedControls = updateObj(input.controls, {
                [controlName]: updateObj(input.controls[controlName], {
                    val: e.target.value,
                }),
            })

            setInput({ controls: updatedControls, setUrl: { ...input.setUrl } })
        }

        // button properties
        if (input.controls[controlName].eleType === 'checkbox') {
            if (e.target.checked) {
                const updatedControls = updateObj(input.controls, {
                    [controlName]: updateObj(input.controls[controlName], {
                        tick: true,
                    }),
                })
                setInput({ controls: updatedControls, setUrl: { ...input.setUrl, [controlName]: true } })
            } else {
                const updatedControls = updateObj(input.controls, {
                    [controlName]: updateObj(input.controls[controlName], {
                        tick: false,
                    }),
                })
                setInput({ controls: updatedControls, setUrl: { ...input.setUrl, [controlName]: false } })
            }
        }
    }

    // add edm section
    const submitHandler = e => {
        e.preventDefault()

        let formData = {}

        const inputStateKeys = [
            'title',
            'subtitle_one',
            'subtitle_two',
            'content_one',
            'content_two',
            'set_url_one',
            'set_url_two',
        ]

        inputStateKeys.forEach(inputStateKey => {
            formData[inputStateKey] = input.controls[inputStateKey].val
            input.controls[inputStateKey].val = ''
            input.setUrl.button_one = false
            input.setUrl.button_two = false
        })

        const buttonStateKeys = ['button_one', 'button_two']

        buttonStateKeys.forEach(buttonStateKey => {
            formData[buttonStateKey] = input.controls[buttonStateKey].tick
            input.controls[buttonStateKey].tick = false
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
                inputChange={e => inputChangeHandler(e, ele.key)}
                ticked={ele.config.tick}
                setUrlOne={input.setUrl.button_one}
                setUrlTwo={input.setUrl.button_two}
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
            <div className="btnGp">
                <button disabled={section.sectionData.length <= 0} id="removeBtn" onClick={removeSectionHandler}>
                    remove section
                </button>
                <button id="downloadBtn" onClick={props.downloadHtml}>
                    download html file
                </button>
            </div>
        </section>
    )
}

export default SideBar
