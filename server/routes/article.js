import { getXml, extractArticles } from './helper';

const getArticlesWithImages = app =>
    app.get('/articlesWithImages', (req, res) => {
        getXml()
        .then(({ text }) => res.json(extractArticles(text)))
        .catch(error => res.status(500).send({ error }));
    });

export {
    getArticlesWithImages
};
