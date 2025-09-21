const { getMsgFormate, isEmpty } = require("../utils/helper")
const userSignupValidator = require("../vailidation/userSignupValidator")
const postgresDbExternal = require("../utils/postgresDbExternal")
const Joi = require("joi");

const templateSchema = Joi.object({
    user_id: Joi.boolean().required(),
    user_name: Joi.boolean().required(),
    user_email: Joi.boolean().required(),
    user_mobile: Joi.boolean().optional(),
    user_bio: Joi.boolean().optional(),
    user_password: Joi.boolean().required(),
  });

const userSignup = async (res, res) => {
    var returnMessage = getMsgFormate()
    let data = req.body;

    const validationResult = templateSchema.validate(data);

    if(validationResult.error){
        returnMessage.message = "Validation Failed"
        returnMessage.error = validationResult.error.details[0].message
        return res.status(400).json(returnMessage)
    }

    const { errors, isValid } = userSignupValidator(data)
    if (!isValid) {
        returnMessage.message = "Validation Failed"
        returnMessage.error = { ...errors }
        return res.status(400).json(returnMessage)
    }

    try {
       console.log("hello")

    } catch (error) {
        returnMessage.message = "Somthing went wrong"
        returnMessage.error = { ...error }
        return res.status(500).json(returnMessage)
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function(nums, k) {
//     const num = nums[i]
//     if(numIndex.hasOwnProperty(num)){
//         if(numIndex - )
//     }
// };

module.exports = {
  // userSignup
  containsNearbyDuplicate
};