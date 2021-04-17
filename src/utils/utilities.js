export const updateObj = (oldObj, updatedProps) => {
    return {
        ...oldObj,
        ...updatedProps,
    }
}

export const checkValidity = (value, rule) => {
    let isValid = true

    if (!rule) return true

    if (rule.required) {
        isValid = value.trim() === '' && isValid
    }

    return isValid
}
