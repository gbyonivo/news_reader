import express from 'express';
import * as routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 8000;

routes.article.getArticlesWithImages(app);

app.listen(port, () => {
    console.log('We are live on ' + port);
});
