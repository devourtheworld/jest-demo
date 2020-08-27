// CLONED array
import cloneArray from './clone-array';
test('if array is cloned', () => {
    const array = [1, 2, 3, 4, 5];
    const clonedArray = cloneArray(array);
    expect(clonedArray).toEqual(array);
    expect(clonedArray).not.toBe(array);
})