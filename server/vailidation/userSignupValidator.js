const validator = require("validator")
const { isEmpty } = require("../utils/helper")
const owasp = require("owasp-password-strength-test")

owasp.config({
    allowPassphrases: false,
    maxLength: 128,
    minLength: 6,
    minPhraseLength: 20,
    minOptionalTestsToPass: 4,
});

module.exports = async function userSignupValidator(data) {

    let errors = {}

    data.password = !isEmpty(data.password) ? data.password : ""
    data.confPassword = !isEmpty(data.confPassword) ? data.confPassword : ""

    if (validator.isEmpty(data.password)) {
        errors.password = "password rquired"
    }

    if (!validator.isLength(data.password, { min: 6, max: 16 })) {
        errors.password = "password must be 6 to 16 charector"
    }

    let passwordTest = owasp.test(data.password);
    if (passwordTest.errors.length > 0) {
        errors.password = passwordTest.errors[0]
    }

    if (validator.isEmpty(data.confPassword)) {
        errors.confPassword = "confPassword rquired"
    }

    if (!validator.isEqual(data.password, data.confPassword)) {
        errors.password = "password and confPassword should be same"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}