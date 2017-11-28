import * as helpers from '../../routes/helper';
import { xmlText } from '../_testData/xmlText';

describe('extractArticles', () => {
  it('to have an array of two', () => {
    const actual = helpers.extractArticles(xmlText);
    const expected = [
      {
        images: ['liverpoolfcrocks'],
        link: 'gorgeousivo',
        title: 'what a legend'
      },
      {
        images: ['legend'],
        link: 'irresistibleivo',
        title: 'fifalord'
      }
    ]
    expect(actual).toEqual(expected);
  });
});

describe('getXml', () => {
  it('should return an object', () => {
    const actual = helpers.getXml();
    const expected = 'object';
    expect(typeof actual).toEqual(expected)
  });
  it('should call Promise.resolve', async () => {
    spyOn(Promise, 'resolve').and.callThrough();
    const actual = await helpers.getXml()
    expect(Promise.resolve).toHaveBeenCalled()
  });
});