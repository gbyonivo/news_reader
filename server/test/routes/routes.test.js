import * as Routes from '../../routes';
import * as helpers from '../../routes/helper';
import express from 'express';
import request from 'supertest'

const app = express();

describe('/articlesWithImages', () => {
  it('it should call app.get', () => {
    spyOn(app, 'get').and.callThrough();
    Routes.article.getArticlesWithImages(app);
    expect(app.get).toHaveBeenCalled();
  });
  it('it should call getXml and extractArticles', () => {

    spyOn(helpers, 'getXml').and.callThrough();
    spyOn(helpers, 'extractArticles').and.callThrough();

    const myApp = Routes.article.getArticlesWithImages(app);

    return request(myApp).get("/articlesWithImages").then(response => {

      expect(helpers.extractArticles).toHaveBeenCalled();
      expect(helpers.getXml).toHaveBeenCalled();
      expect(response.statusCode).toBe(200)

    })
  });
})