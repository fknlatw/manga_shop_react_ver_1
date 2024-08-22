const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');
const path = require('path');


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'images')));

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
        const sortedManga = allManga.rows.sort((a,b) => a.series.localeCompare(b.series));
        res.json(sortedManga);
    } catch (error) {
        console.log(error);
    }
});

app.get('/manga/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const mangaBook = await pool.query("SELECT * FROM manga WHERE id = $1", [id]);
        res.json(mangaBook.rows[0]);
    } catch (error) {
        console.log(error)
    }
});

app.put('/manga/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {
            series, name, volume,
            author, publisher, img,
            genre, price, description
        } = req.body;

        
        const updateManga = await pool.query('UPDATE manga SET (series, name, volume, author, publisher, img, genre, price, description) = ($1, $2, $3, $4, $5, $6, $7, $8, $9) WHERE id = $10',[series, name, volume, author, publisher, img, genre, price, description, id]);
        res.json("updated")
    } catch (error) {
        console.log(error);
    }
})

// app.get('/', (req, res) => {
//     res.json({message: ['hello', 'world']})
// });

app.listen(5000, () => {
    console.log('server has started');
});