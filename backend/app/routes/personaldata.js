const express = require('express');
const router = express.Router();

const personalDataActions = require('../actions/api/personalDataActions');

router.get('/personalDatas', personalDataActions.getAllPersonalDatas);


router.get('/personalDatas/:id', personalDataActions.getPersonalData);


router.post('/personalDatas', personalDataActions.savePersonalData);


router.put('/personalDatas/:id', personalDataActions.updatePersonalData);


router.delete('/personalDatas/:id', personalDataActions.deletePersonalData);

module.exports  = router;