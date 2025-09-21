const getMsgFormate = () => {
    let msgFormate = {
        isError: true,
        message: "Error occured",
        data: null,
        error: null
    }
    return { ...msgFormate }
}

const isEmpty = () => {
    value === undefined || value === null ||
        (typeof value === "object" && Object.key(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
}

module.exports = {
    getMsgFormate,
    isEmpty
}