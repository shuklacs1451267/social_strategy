const { getMsgFormate, isEmpty } = require("../utils/helper")
const postgresDbExternal = require("../utils/postgresDbExternal")
const nodemailer = require("nodemailer")
const Joi = require("joi");

const userContacts = async (req, res) => {
    const returnMessage = getMsgFormate();
    try {
        let data = req.body;
        const query = `
            INSERT INTO social_strategy.contact_message
            (user_id, name, email, mobile_number, message)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;
        const values = [data.user_id, data.full_name, data.email, data.mobile, data.message];
        const result = await postgresDbExternal.query(query, values);

        // await transporter.verify();
console.log("SMTP connection is ready!");

        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        let mailOptions ={
          from: `"Social Strategy"${process.env.EMAIL_USER}`,
          to: process.env.EMAIL_USER,
          subject: "User Visite",
          text: `Name: ${data.full_name}\n\n Email: ${data.email}\n\nMobile: ${data.mobile}\n\nMessage: ${data.message}`
        };

        await transporter.sendMail(mailOptions);

        returnMessage.message = 'Data insert successful';
        returnMessage.data = result.rows[0];
        return res.status(200).json(returnMessage);
    } catch (errors) {
        returnMessage.message = "Something went wrong";
        returnMessage.error = { ...errors };
        return res.status(500).json(returnMessage);
    }
}

const getuserContacts = async (req, res) => {
    const returnMessage = getMsgFormate();
    try {
        let data = req.body;
        const query = `
            select * from  social_stratrgy.contact_message `;
        const result = await postgresDbExternal.query(query);

        returnMessage.message = 'Data fetch successful';
        returnMessage.data = result;
        return res.status(200).json(returnMessage);
    } catch (errors) {
        returnMessage.message = "Something went wrong";
        returnMessage.error = { ...errors };
        return res.status(500).json(returnMessage);
    }
}

module.exports = {
    userContacts,
    getuserContacts,
};
