const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/data', (req, res) => {
    try {
        const postData = req.body;
        if (!postData || Object.keys(postData).length === 0) {
            return res.status(400).json({ error: 'Invalid data. Please provide valid data.' });
        }
        console.log('POST request successful');
        console.log('Data:', postData); 

        res.status(201).json({ message: 'POST request successful', data: [
            {
              "name": "Gokarna",
              "imagePath": "ImageConstant.imgImage3",
              "description": "Om Beach, Gokarna, Karnataka",
              "seasonText": ["Oct-Jan", "Feb-Jun", "Jul-Sept"]
            },
            {
              "name": "Pondicherry",
              "imagePath": "ImageConstant.imgImage4",
              "description": "Rock Beach, Pondicherry, Tamilnadu",
              "seasonText": ["May-Aug", "Sept-Dec", "Jan-Apr"]
            }
          ]},);
    } catch (error) {
        console.error('Error processing POST request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(3001, () => {
    console.log('Server is running on port 3000');
});
