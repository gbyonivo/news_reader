import superagent from 'superagent';
import xmlParser from 'superagent-xml2jsparser';
import convert from 'xml-js';

const _getXml = () => {
    return Promise.resolve(
      superagent.get('http://www.ladbible.com/news.rss')
      .accept('xml')
      .buffer()
      .parse(xmlParser)
    );
};

const _extractArticles = text => {
    const response = JSON.parse(convert.xml2json(text, { compact: true, spaces: 4 }));
    return response.rss.channel.item.map((article) => (
        {
            title: article.title._cdata,
            link: article.link._text,
            images: [article['media:content']._attributes.url]
        }
    ));
};

const getArticlesWithImages = app =>
    app.get('/articlesWithImages', (req, res) => {
        _getXml()
        .then(({ text }) => res.json(_extractArticles(text)))
        .catch(error => res.status(500).send({ error }));
    });

export {
  getArticlesWithImages
};
