import { updateObj } from '../utils/utilities'

const addSection = (state, action) => {
    const updatedState = [...state.sectionData, action.payload]
    return updateObj(state, { sectionData: updatedState })
}

const removeSection = (state, action) => {
    const updatedState = state.sectionData.slice(0, -1)
    return updateObj(state, { sectionData: updatedState })
}

export const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SECTION':
            return addSection(state, action)
        case 'REMOVE_SECTION':
            return removeSection(state, action)
        default:
            return state
    }
}
