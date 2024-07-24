const fs = require('fs');
const xlsx = require('xlsx');
const Data = require('../models/Data');

exports.uploadData = async (req, res) => {
    try {
        const workbook = xlsx.readFile(req.file.path);
        const sheetNames = workbook.SheetNames;
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
        const content = JSON.stringify(data);
        
        await Data.create({
            filename: req.file.originalname,
            content
        });
        
        fs.unlinkSync(req.file.path); // Delete the file after processing
        
        res.status(201).json({ message: 'File uploaded and data saved' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
