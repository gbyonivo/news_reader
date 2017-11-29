import superagent from 'superagent';
import xmlParser from 'superagent-xml2jsparser';
import convert from 'xml-js';

/**
 * @const
 * @type {Closure} getXml- returns Promise object with xml from the url
 * @returns {Object} A promise object
 */
const getXml = () => {
    return Promise.resolve(
        superagent.get('http://www.ladbible.com/news.rss')
        .accept('xml')
        .buffer()
        .parse(xmlParser)
    );
};
/**
 * @const
 * @type {Closure} extractArticles- returns array of objectt with properties title link and images
 * @param {string} text - xml
 * @returns {Object} A promise object
 */
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
