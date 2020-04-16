/* eslint-disable */
import {map, filter, of } from '..';

describe('A functor', () => {
  it('should numbers to squares', async () => {
    const iterator = of([1,2,3,4,5])
    const output = [1, 4, 9, 16, 25];
    let index = 0;
    for await (const i of map(iterator, (x) => x*x)) {
      expect(i).toBe(output[index]);
      index = index + 1;
    }
  });



});
