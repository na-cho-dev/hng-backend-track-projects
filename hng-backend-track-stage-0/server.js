import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    const data = {
        "email": "nachodev369@gmail.com",
        "current_datetime": new Date().toISOString(),
        "github_url": "https://github.com/na-cho-dev/hng-backend-track-projects"
    }
  res.status(200).json(data);
});

app.listen(3300, () => {
    console.log('Server running on port 3300');
});