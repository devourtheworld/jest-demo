import addAsync from './add-async';

test('add numbers async', done => {
    addAsync(10, 5, result => {
      expect(result).toBe(15);
      done();
    })
})

test("this shouldn't pass", () => {
    setTimeout( () => expect(false).toBe(true) );
});


