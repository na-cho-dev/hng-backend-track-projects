import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const data = {
        "email": "nachodev369@gmail.com",
        "date": new Date().toISOString(),
        "github_url": ""
    }
  res.status(200).json(data);
});

app.listen(3300, () => {
    console.log('Server running on port 3300');
});