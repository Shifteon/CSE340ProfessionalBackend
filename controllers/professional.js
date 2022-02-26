const professionalModel = require('../models/professional');

exports.getData = (req, res, next) =>{
    res.status(200).json(professionalModel.retrieveData());
};