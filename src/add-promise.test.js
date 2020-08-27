import addPromise from './add-promise';

test('should check promise', () => {
    const sum = addPromise(2, 2);
    return expect(sum).resolves.toBe(4);
});

// import addPromise from './add-promise';

// test('should check promise', async () => {
//     const sum = await addPromise(2, 2);
//     expect(sum).toBe(4);
// });