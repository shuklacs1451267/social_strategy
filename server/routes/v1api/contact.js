const express = require('express');
const router = express.Router();

const {userContacts, getuserContacts} = require('../../cntroller/contactUs')

router.post('/contacts', userContacts);
router.get('/contacts', getuserContacts);

module.exports = router