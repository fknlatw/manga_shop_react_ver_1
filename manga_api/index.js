const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');


app.use(cors());
app.use(express.json());

app.post('/manga', async(req, res) => {
    try {
        const {
            series, name, volume, 
            author, publisher, img, 
            genre, price, description
        } = req.body;

        const newManga = await pool.query(
            "INSERT INTO manga (series, name, volume, author, publisher, img, genre, price, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", 
            [
                series, name, volume, 
                author, publisher, img, 
                genre, price, description
            ]
        );
        


        res.json(newManga.rows[0]);
    } catch (error) {
        console.log(error);
    }
});

app.get('/manga', async(req, res) => {
    try {
        const allManga = await pool.query('SELECT * FROM manga');
        res.json(allManga.rows);
    } catch (error) {
        console.log(error);
    }
    
});

// app.get('/', (req, res) => {
//     res.json({message: ['hello', 'world']})
// });

app.listen(5000, () => {
    console.log('server has started');
});