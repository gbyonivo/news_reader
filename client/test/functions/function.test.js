import {
    filterList
} from '../../src/functions';

describe('filterTest', () => {
    it('should return 1 element', () => {
        const array = [{ n: '1' }, { n: '2' }];
        const actual = filterList(array, '1', 'n');
        const expected = { n: '1' };
        expect(actual.length).toBe(1);
        expect(actual[0]).toEqual(expected);
    });
    it('should return both elements', () => {
        const array = [{ n: '1' }, { n: '2' }];
        const actual = filterList(array, '', 'n');
        const expected = array;
        expect(actual).toEqual(expected);
    });
    it('should return empty array', () => {
        const array = [{ n: '1' }, { n: '2' }];
        const actual = filterList(array, '3', 'n');
        const expected = [];
        expect(actual).toEqual(expected);
    })
});