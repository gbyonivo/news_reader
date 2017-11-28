import superagent from 'superagent';
import xmlParser from 'superagent-xml2jsparser';
import convert from 'xml-js';

const getXml = () => {
    return Promise.resolve(
        superagent.get('http://www.ladbible.com/news.rss')
        .accept('xml')
        .buffer()
        .parse(xmlParser)
    );
};

const extractArticles = text => {
    const response = JSON.parse(convert.xml2json(text, { compact: true, spaces: 4 }));
    return response.rss.channel.item.map(article => (
        {
            title: article.title._cdata,
            link: article.link._text,
            images: [article['media:content']._attributes.url]
        }
    ));
};

export {
    getXml,
    extractArticles
};
