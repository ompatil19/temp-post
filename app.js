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
        res.status(201).json({ message: 'POST request successful', data: postData });
    } catch (error) {
        console.error('Error processing POST request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});